---
title: "Download video option doesn't appear: video not detected"
short_title: Video not detected
order: 2
kicker: Troubleshooting
description: "The XDM extension doesn't show a video to download? Play the video, check site access, lower the minimum video size, pick the quality in the player, and know the limits (DRM, YouTube)."
lead: "The extension lists a video once the page's player starts loading it. If nothing shows up, try these steps."
related:
  - /guide/download-streaming-video/
  - /guide/download-hls-dash-stream/
  - /help/browser-not-capturing/
---

## Quick checklist

<ol class="steps-list">
  <li><strong>Play the video</strong> for a few seconds. Detection happens when the player loads the stream, not
      when the page opens.</li>
  <li><strong>Reload the page</strong> (with XDM already running) and play again. Streams loaded before XDM
      started aren't seen.</li>
  <li><strong>Check the popup</strong>: if it says <em>XDM isn't running</em> or <em>Site access is
      restricted</em>, fix that first. See <a href="/help/browser-not-capturing/">browser not capturing</a>.</li>
  <li><strong>Lower the size filter.</strong> Short clips are hidden on purpose. Reduce
      <span class="ui">Settings → Browser → Only detect videos larger than</span>.</li>
  <li><strong>Change the quality in the player</strong> (gear icon). Each quality the player loads appears in the
      list. Use <span class="ui">More formats</span> to see them all.</li>
</ol>

## Videos that can't be downloaded

- **DRM-protected streams** on paid streaming services are encrypted with keys only the
  browser's protected module can use. XDM doesn't circumvent DRM.
- **YouTube.** XDM stays off YouTube by design.
- **Live streams** that never end can't be saved as a finished file.

## Advanced: load the stream yourself

If you can find the stream's `.m3u8` or `.mpd` address in the browser's developer tools
(F12 → Network, filter by `m3u8` or `mpd`), paste it into
<span class="ui">☰ → HLS/DASH download</span>. See [Download HLS and DASH streams by URL](/guide/download-hls-dash-stream/).
