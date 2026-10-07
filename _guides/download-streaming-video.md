---
title: "How to download videos from websites with XDM"
short_title: Download videos
order: 6
kicker: Video
description: "Save streaming videos from websites with Xtreme Download Manager: detect videos while they play, choose quality and format, download HLS and DASH streams with audio merged automatically."
lead: "Play a video, click the XDM icon, pick a quality. XDM downloads the stream and saves one ready-to-play file."
applies: XDM 9 with the browser extension
related:
  - /guide/download-hls-dash-stream/
  - /help/video-not-detected/
  - /help/errors/video-merge-failed/
howto:
  - "Install the XDM browser extension and keep XDM running."
  - "Open the web page and start playing the video."
  - "Click the XDM icon in the browser toolbar; the detected video appears in the list."
  - "Choose the quality you want (use More formats for the full list)."
  - "Confirm in XDM's download window; XDM downloads and merges the video."
---

<div class="callout callout--warn">
<p class="callout-title">Download responsibly</p>
<p>Only download videos you have the right to save: your own uploads, content with a download-friendly
license, or videos the site's terms allow you to keep. XDM does not bypass DRM and does not capture videos on
YouTube.</p>
</div>

## How video detection works

Websites rarely play a video as a single file. Most use **adaptive streaming** (HLS or DASH): the video
is cut into small segments, with several quality levels, and audio often in a separate stream. The XDM
extension watches which streams the page's player loads and lists them. When you choose one, XDM downloads
all the segments in parallel and **combines video and audio into a single file**, with no extra tools
required.

## Step by step

<ol class="steps-list">
  <li><strong>Check the setup.</strong> XDM is running and the <a href="/guide/browser-extension/">extension</a> is
      installed and pinned.</li>
  <li><strong>Open the page and press play.</strong> Let the video play for a few seconds so the player loads its
      streams.</li>
  <li><strong>Click the XDM icon</strong> in the browser toolbar. Its badge shows how many videos were found.</li>
  <li><strong>Pick a format.</strong> The list shows the video's name and quality. Click
      <span class="ui">More formats</span> to see every quality the site offers.</li>
  <li><strong>Confirm in XDM.</strong> Check the name and folder, then click <span class="ui">Download</span>.</li>
</ol>

<figure>
  <img src="/assets/img/shots/video-popup.webp" alt="XDM extension popup listing detected videos" width="650" height="650" loading="lazy">
  <figcaption>The extension lists every video stream the page played.</figcaption>
</figure>

## Getting the quality you want

- Many players start in low quality and switch up. If a quality is missing, **select it in the
  website's player** (the gear icon). The extension then picks up that stream too.
- Seeking or replaying the video also helps the player load more formats.
- Very short clips are ignored on purpose (ads, previews). Lower <span class="ui">Settings → Browser → Only
  detect videos larger than</span> if a short video doesn't show up.

## Audio, subtitles and file format

- When a site streams audio separately, XDM downloads both and merges them. You get one file with sound.
- The output is a standard container (usually MP4) that plays in any media player.

## No “Download video” option?

See [video not detected](/help/video-not-detected/). Common reasons: the extension can't access the
site, the video is too short, the site uses DRM, or you're on YouTube. You can also load a stream address
by hand. See [Download HLS and DASH streams](/guide/download-hls-dash-stream/).
