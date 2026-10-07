#!/usr/bin/env python3
"""Turns raw XDM window captures into styled website images.

Each output is a canvas with a gradient-mesh background (blurred colour blobs + faint grid),
one or more windows with a layered soft shadow and a thin glass rim, optionally a slight
perspective tilt. Raw captures come from `screencapture -o -l<window-id>` (2x, transparent corners).

    python3 tools/shots.py <raw-dir> <out-dir>

Writes PNG and WebP (cwebp) for every scene in SCENES whose inputs exist.
"""
import os
import subprocess
import sys

from PIL import Image, ImageChops, ImageDraw, ImageFilter

PALETTES = {
    "indigo": [(108, 92, 255), (59, 130, 246), (34, 211, 238)],
    "violet": [(139, 92, 246), (255, 77, 141), (59, 130, 246)],
    "teal": [(16, 185, 129), (34, 211, 238), (91, 91, 246)],
    "sunset": [(255, 77, 141), (245, 158, 11), (139, 92, 246)],
}


def mesh_background(w, h, palette, base=(10, 12, 26)):
    bg = Image.new("RGB", (w, h), base)
    blobs = Image.new("RGB", (w, h), base)
    d = ImageDraw.Draw(blobs)
    c1, c2, c3 = PALETTES[palette]
    r = int(max(w, h) * 0.42)
    d.ellipse([-r * 0.6, -r * 0.7, r * 1.2, r * 1.1], fill=c1)
    d.ellipse([w - r * 1.1, h * 0.25 - r * 0.4, w + r * 0.5, h * 0.25 + r * 1.2], fill=c2)
    d.ellipse([w * 0.25, h - r * 0.6, w * 0.25 + r * 1.4, h + r * 0.9], fill=c3)
    blobs = blobs.filter(ImageFilter.GaussianBlur(int(r * 0.55)))
    bg = Image.blend(bg, blobs, 0.62)
    # Faint grid that fades towards the edges.
    grid = Image.new("L", (w, h), 0)
    gd = ImageDraw.Draw(grid)
    step = max(48, w // 28)
    for x in range(0, w, step):
        gd.line([(x, 0), (x, h)], fill=255, width=1)
    for y in range(0, h, step):
        gd.line([(0, y), (w, y)], fill=255, width=1)
    vignette = Image.radial_gradient("L").resize((w, h)).point(lambda v: max(0, 255 - v * 1.6))
    grid = ImageChops.multiply(grid, vignette).point(lambda v: v * 0.10)
    bg = Image.composite(Image.new("RGB", (w, h), (255, 255, 255)), bg, grid)
    # Fine noise keeps the gradients from banding.
    noise = Image.effect_noise((w, h), 18).convert("RGB")
    bg = Image.blend(bg, noise, 0.025)
    return bg.convert("RGBA")


def rounded_mask(img, radius):
    """Uses the capture's own alpha (macOS rounded corners); falls back to a drawn rounded rect."""
    if img.mode == "RGBA" and img.getextrema()[3][0] < 255:
        return img.getchannel("A")
    m = Image.new("L", img.size, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, img.width - 1, img.height - 1], radius, fill=255)
    return m


def window_layer(img, radius=20):
    img = img.convert("RGBA")
    mask = rounded_mask(img, radius)
    img.putalpha(mask)
    # Thin light rim ("glass edge").
    rim = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(rim).rounded_rectangle([0, 0, img.width - 1, img.height - 1], radius, outline=(255, 255, 255, 46), width=2)
    rim.putalpha(ImageChops.multiply(rim.getchannel("A"), mask))
    return Image.alpha_composite(img, rim), mask


def drop_shadow(canvas, mask, pos, spread, opacity, offset_y, color=(4, 6, 20)):
    sh = Image.new("L", canvas.size, 0)
    sh.paste(mask, pos)
    sh = sh.filter(ImageFilter.GaussianBlur(spread)).point(lambda v: int(v * opacity))
    shifted = Image.new("L", canvas.size, 0)
    shifted.paste(sh, (0, offset_y))
    layer = Image.new("RGBA", canvas.size, color + (0,))
    layer.putalpha(shifted)
    return Image.alpha_composite(canvas, layer)


def glow(canvas, mask, pos, color, spread, opacity):
    g = Image.new("L", canvas.size, 0)
    g.paste(mask, pos)
    g = g.filter(ImageFilter.GaussianBlur(spread)).point(lambda v: int(v * opacity))
    layer = Image.new("RGBA", canvas.size, color + (0,))
    layer.putalpha(g)
    return Image.alpha_composite(canvas, layer)


def place(canvas, img, pos, scale=1.0, glow_color=None):
    if scale != 1.0:
        img = img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)
    win, mask = window_layer(img)
    if glow_color:
        canvas = glow(canvas, mask, pos, glow_color, 60, 0.55)
    canvas = drop_shadow(canvas, mask, pos, 70, 0.55, 40)
    canvas = drop_shadow(canvas, mask, pos, 16, 0.45, 10)
    canvas.alpha_composite(win, pos)
    return canvas


def round_canvas(canvas, radius):
    m = Image.new("L", canvas.size, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, canvas.width - 1, canvas.height - 1], radius, fill=255)
    canvas.putalpha(ImageChops.multiply(canvas.getchannel("A"), m))
    return canvas


def scene(out, size, palette, windows, radius=44, raw=None):
    """windows: list of (file, (x, y) as fraction of canvas or 'center', scale, glow)."""
    w, h = size
    canvas = mesh_background(w, h, palette)
    for name, pos, scale, glow_c in windows:
        img = Image.open(os.path.join(raw, name))
        iw, ih = int(img.width * scale), int(img.height * scale)
        if pos == "center":
            xy = ((w - iw) // 2, (h - ih) // 2)
        else:
            xy = (int(pos[0] * w), int(pos[1] * h))
        canvas = place(canvas, img, xy, scale, glow_c)
    if radius:
        canvas = round_canvas(canvas, radius)
    canvas.save(out + ".png", optimize=True)
    subprocess.run(["cwebp", "-quiet", "-q", "86", "-alpha_q", "90", out + ".png", "-o", out + ".webp"], check=True)
    print("wrote", out + ".webp", canvas.size)


# Window captures are at 2x. Canvas sizes are output pixels (displayed at ~half on retina).
SCENES = [
    # name, canvas size, palette, windows
    ("hero", (2400, 1400), "indigo", [
        ("main.png", (0.08, 0.08), 1.18, None),
        ("progress.png", (0.60, 0.50), 1.0, (91, 91, 246)),
    ]),
    ("main", (2000, 1300), "indigo", [("main.png", "center", 1.0, None)]),
    ("new-download", (1600, 900), "violet", [("new-download.png", "center", 1.0, (139, 92, 246))]),
    ("progress", (1400, 900), "teal", [("progress.png", "center", 1.0, (34, 211, 238))]),
    ("progress-failed", (1400, 900), "sunset", [("progress-failed.png", "center", 1.0, (255, 77, 141))]),
    ("browser-integration", (1500, 1100), "violet", [("integration-cropped.png", "center", 1.0, (139, 92, 246))]),
    ("stream-download", (1700, 1300), "teal", [("stream.png", "center", 1.0, (34, 211, 238))]),
    ("batch-download", (1800, 1300), "indigo", [("batch.png", "center", 1.0, (91, 91, 246))]),
    ("settings", (2000, 1400), "violet", [("settings.png", "center", 1.0, None)]),
    ("settings-downloads", (2000, 1400), "teal", [("settings-downloads.png", "center", 1.0, None)]),
    ("settings-folders", (2000, 1400), "indigo", [("settings-folders.png", "center", 1.0, None)]),
    ("settings-advanced", (2000, 1400), "violet", [("settings-advanced.png", "center", 1.0, None)]),
    ("download-complete", (1300, 1000), "teal", [("complete.png", "center", 1.0, (16, 185, 129))]),
    ("settings-network", (2000, 1400), "indigo", [("settings-network.png", "center", 1.0, None)]),
    ("refresh-link", (1600, 1100), "sunset", [("refresh.png", "center", 1.0, (255, 77, 141))]),
    ("scheduler", (1400, 1250), "teal", [("scheduler.png", "center", 1.0, (34, 211, 238))]),
    ("video-popup", (1300, 1300), "indigo", [("popup.png", "center", 1.0, (59, 130, 246))]),
    ("download-features", (1800, 1100), "violet", [
        ("new-download.png", (0.06, 0.10), 0.92, None),
        ("progress.png", (0.48, 0.42), 0.95, (139, 92, 246)),
    ]),
]


def main():
    raw, out_dir = sys.argv[1], sys.argv[2]
    only = set(sys.argv[3:])
    os.makedirs(out_dir, exist_ok=True)
    for name, size, palette, wins in SCENES:
        if only and name not in only:
            continue
        if all(os.path.exists(os.path.join(raw, f)) for f, *_ in wins):
            scene(os.path.join(out_dir, name), size, palette, wins, raw=raw)


if __name__ == "__main__":
    main()
