---
title: "“Unable to combine the downloaded video segments”"
short_title: Video merge failed
order: 10
description: "XDM downloaded all video segments but could not combine them into the output file. Learn the causes (unsupported format, corrupt data) and how to fix it."
error_text: "Unable to combine the downloaded video segments into the output file. The stream format may be unsupported or the downloaded data may be corrupt."
lead: "Every piece of the video arrived, but XDM couldn't assemble the pieces into a playable file."
applies: XDM 9
related:
  - /guide/download-streaming-video/
  - /help/errors/decryption-error/
  - /help/errors/disk-error/
---

## What this error means

Streaming video (HLS and DASH) is delivered as hundreds of short segments, often with audio and video in
separate streams. When everything has downloaded, XDM's built-in muxer joins the segments and combines
audio and video into one MP4 or other container. This error means that step failed.

## Causes and fixes

<ol class="steps-list">
  <li><strong>Corrupt or incomplete segments</strong>, for example when a site served an error page in place of a
      segment. Delete the download and grab the video again from the page, ideally choosing a different quality.</li>
  <li><strong>An unusual stream format.</strong> A few sites use codecs or containers the muxer doesn't handle
      yet. Try another format from the XDM extension's <span class="ui">More formats</span> list.</li>
  <li><strong>Encrypted segments</strong> that weren't decrypted correctly. See the
      <a href="/help/errors/decryption-error/">decryption error</a> guide.</li>
  <li><strong>Not enough disk space</strong> for the final file. Joining needs room for the full output.
      Free some space, then resume.</li>
</ol>

<div class="callout callout--tip">
<p class="callout-title">Help improve XDM</p>
<p>If the same video fails every time, please report it on the <a href="https://github.com/subhra74/xdm/issues">issue
tracker</a> with the website (if public), the format you picked and your XDM version.</p>
</div>
