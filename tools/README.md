# Screenshot tools (not part of the published site)

Raw captures are taken from the running app with `screencapture -x -o -l<window-id> <name>.png`
(2x, transparent rounded corners). Then:

```bash
python3 tools/shots.py <raw-dir> <out-dir>          # styled .webp for every scene in SCENES
cp <out-dir>/*.webp assets/img/shots/
```

`shots.py` adds the gradient-mesh background, glow, layered shadow and glass rim. `SCENES` maps each output
image to its raw files (main.png, progress.png, new-download.png, scheduler.png, batch.png, stream.png,
settings*.png, complete.png, integration-cropped.png, refresh.png, popup.png, progress-failed.png).

`windowize.py` adds a title bar to a window body painted offscreen, or makes a "Screenshot coming soon"
placeholder: `refresh.png` (Refresh link dialog) and `popup.png` (browser extension popup) are placeholders
until real captures replace them.

Preview the site locally: `jekyll serve` (gem install jekyll), then open http://localhost:4000.
