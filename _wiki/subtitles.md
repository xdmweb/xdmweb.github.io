---
title: "Download subtitles with XDM and save them as SRT"
short_title: Subtitles
order: 30
kicker: Video
description: "Save the subtitles of a streaming video with XDM: pick a subtitle track for HLS and DASH streams, or grab the subtitle files a page loads, converted to SRT for any player."
lead: "XDM can save a video's subtitles next to it, timed to match, in the SRT format almost every player reads."
applies: XDM 9
---

## Two kinds of subtitles

| Where they come from | How XDM offers them |
|---|---|
| **Subtitle tracks of an HLS or DASH stream** | A **Subtitles** choice in the video's download window |
| **Separate subtitle files** the page loads (WebVTT `.vtt`, `.srt`, TTML or DFXP) | Their own entries in the extension's video list |

## Subtitles of a stream

1. Play the video in the browser and pick it from the XDM extension popup, as in
   [How to download videos](/guide/download-streaming-video/).
2. In the download window, choose a language under **Subtitles**. Tracks marked *(forced)* only cover parts in
   another language, such as signs or foreign dialogue.
3. Download. The subtitle file is saved beside the video with the same name, as `.srt`, timed to match the video.

Choose **None** to skip subtitles.

## Separate subtitle files

Some players load subtitles as their own file. When the extension sees one, it lists it next to the videos, with its
language when the page or file says so. Pick it to download it.

**Save as SRT** (on by default) converts WebVTT and TTML files to SRT while saving. Keep it on unless you need the
original format: VLC plays all of them, but TVs, *Films & TV* and many other players read only SRT.

## Using the subtitles

Keep the `.srt` file in the same folder as the video, with the same name (for example `Movie.mp4` and `Movie.srt`).
Most players then load it on their own. Otherwise, add it from the player's subtitle menu.

## No subtitles offered?

- Turn subtitles on in the site's player and play the video for a few seconds, so the page loads them.
- Some sites draw subtitles into the video picture itself. Those can't be saved separately.
- Subtitles on DRM-protected services can't be downloaded. XDM doesn't support DRM-protected content.
