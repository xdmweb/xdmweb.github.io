#!/usr/bin/env python3
"""Window chrome for images that aren't real window captures.

    windowize.py frame <body.png> <title> <out.png>     add a macOS-style dark title bar + rounded corners
    windowize.py placeholder <w> <h> <title> <out.png>  a skeleton window labelled "Screenshot coming soon"

Sizes are in 2x pixels, like `screencapture` output.
"""
import sys
from PIL import Image, ImageDraw, ImageFont

BAR_H = 56
BAR = (44, 40, 40, 255)
BODY = (34, 34, 36, 255)
LINE = (20, 20, 20, 255)
FONT = "/System/Library/Fonts/SFNS.ttf"


def font(size, bold=False):
    try:
        f = ImageFont.truetype(FONT, size)
        if bold:
            f.set_variation_by_name("Bold")
        return f
    except Exception:
        return ImageFont.load_default()


def chrome(body, title):
    w, h = body.width, body.height + BAR_H
    im = Image.new("RGBA", (w, h), BODY)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, w, BAR_H], fill=BAR)
    d.line([(0, BAR_H - 1), (w, BAR_H - 1)], fill=LINE, width=2)
    for i, c in enumerate([(255, 95, 87), (254, 188, 46), (40, 200, 64)]):
        x = 28 + i * 40
        d.ellipse([x - 12, 28 - 12, x + 12, 28 + 12], fill=c)
    f = font(26, True)
    tw = d.textlength(title, font=f)
    d.text(((w - tw) / 2, 13), title, font=f, fill=(200, 196, 196))
    im.paste(body, (0, BAR_H), body if body.mode == "RGBA" else None)
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, w - 1, h - 1], 20, fill=255)
    im.putalpha(mask)
    return im


def placeholder(w, h, title):
    body = Image.new("RGBA", (w, h - BAR_H), BODY)
    d = ImageDraw.Draw(body)
    sk = (52, 52, 56, 255)
    # Skeleton rows suggesting a form/list.
    y = 50
    while y < body.height - 140:
        d.rounded_rectangle([50, y, 210, y + 26], 8, fill=sk)
        d.rounded_rectangle([240, y, w - 50, y + 26], 8, fill=(46, 46, 50, 255))
        y += 70
    d.rounded_rectangle([w - 230, body.height - 80, w - 50, body.height - 30], 12, fill=(10, 132, 255, 255))
    d.rounded_rectangle([w - 430, body.height - 80, w - 250, body.height - 30], 12, fill=sk)
    label = "Screenshot coming soon"
    f = font(34, True)
    tw = d.textlength(label, font=f)
    box = [(w - tw) / 2 - 40, body.height / 2 - 50, (w + tw) / 2 + 40, body.height / 2 + 40]
    d.rounded_rectangle(box, 18, fill=(24, 24, 28, 235), outline=(90, 90, 120, 255), width=2)
    d.text(((w - tw) / 2, body.height / 2 - 26), label, font=f, fill=(220, 222, 255))
    return chrome(body, title)


if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "frame":
        chrome(Image.open(sys.argv[2]).convert("RGBA"), sys.argv[3]).save(sys.argv[4])
    else:
        placeholder(int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]).save(sys.argv[5])
