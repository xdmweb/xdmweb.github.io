---
title: "Download an HLS (.m3u8) or DASH (.mpd) stream by URL"
short_title: HLS/DASH by URL
order: 7
kicker: Video
description: "Use XDM's HLS/DASH download dialog to download an .m3u8 or .mpd stream from its playlist URL, pick a format and audio track, and add cookies or Referer headers."
lead: "Have the playlist address of a stream? XDM can load it directly, with no browser needed."
applies: XDM 9
related:
  - /guide/download-streaming-video/
  - /help/errors/decryption-error/
  - /help/errors/video-merge-failed/
---

## When to use this

Normally the [browser extension](/guide/download-streaming-video/) finds streams for you. The manual dialog is
useful when:

- you found the playlist URL in the browser's developer tools (Network tab, filter `m3u8` or `mpd`),
- a website or media server gives you a stream link directly (IPTV, conference recordings, your own media server),
- you need to add specific request headers.

## Step by step

<ol class="steps-list">
  <li>In XDM, open the <span class="ui">☰</span> menu → <span class="ui">HLS/DASH download</span>. The <em>Stream download</em> window opens.</li>
  <li>Choose the <strong>Type</strong>: <span class="ui">HLS (.m3u8)</span> or <span class="ui">DASH (.mpd)</span>.</li>
  <li>Paste the playlist <strong>URL</strong> and click <span class="ui">Load</span>.</li>
  <li>XDM reads the playlist and shows what it found, for example <em>Master playlist · formats: 5 · audio
      tracks: 2</em>.</li>
  <li>Pick a <strong>Format</strong> (resolution / bitrate) and an <strong>Audio</strong> track, set the file name
      and folder, and start the download.</li>
</ol>

<figure>
  <img src="/assets/img/shots/stream-download.webp" alt="XDM HLS/DASH stream download dialog" width="850" height="650" loading="lazy">
</figure>

## Playlist types

| Status shown | Meaning |
|---|---|
| **Master playlist** | Several qualities and audio tracks to choose from. |
| **Media playlist** | One specific quality: a list of segments and the total duration. |
| **DASH manifest** | MPEG-DASH with formats and audio tracks. |
| **Single file** | The URL isn't a playlist, so it's downloaded as a regular file. |

## Adding headers (cookies, Referer)

Many servers only serve segments to requests that look like they come from their player. Open the
<span class="ui">Headers</span> tab and add what the site expects:

- `Referer`: the address of the page with the player,
- `Cookie`: your session cookies, if the site needs a login,
- `User-Agent`: occasionally required.

<span class="ui">Paste from clipboard</span> accepts headers copied from the browser's developer tools
(one `Name: value` per line). The headers are sent with the playlist request and every segment.

<div class="callout callout--note">
<p class="callout-title">Encrypted streams</p>
<p>HLS streams encrypted with AES-128 are decrypted automatically, provided the key can be fetched with the same
headers. DRM-protected streams (Widevine, FairPlay, PlayReady) cannot be downloaded.</p>
</div>
