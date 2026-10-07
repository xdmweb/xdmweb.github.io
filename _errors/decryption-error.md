---
title: "“Unable to decrypt the video” in XDM"
short_title: Decryption error
order: 8
description: "XDM could not decrypt a downloaded video stream because the key was missing or invalid. Learn what encrypted HLS streams are and what you can try."
error_text: "Unable to decrypt the video. The encryption key is missing or invalid."
lead: "The video stream is encrypted, and XDM couldn't get a working key to decrypt the downloaded segments."
applies: XDM 9
related:
  - /guide/download-streaming-video/
  - /guide/download-hls-dash-stream/
  - /help/errors/link-expired/
---

## What this error means

Many streaming sites deliver video as small segments (HLS). Some encrypt each segment with a key the
player downloads separately. XDM fetches that key too, the same way the player does. This error means the
key request failed, returned something that isn't a key, or the key didn't match the data.

## What you can try

<ol class="steps-list">
  <li><strong>Download again from the playing video.</strong> Keys are often short-lived and tied to your
      session. Reload the page, play the video, and pick the format from the XDM extension again.</li>
  <li><strong>Stay signed in.</strong> If the site requires an account, make sure you're logged in before
      playing the video.</li>
  <li><strong>Add the headers the site needs</strong> when using the <a href="/guide/download-hls-dash-stream/">Stream
      download</a> dialog manually: cookies and the <code>Referer</code> header are usually required for the key
      request too.</li>
</ol>

<div class="callout callout--note">
<p class="callout-title">DRM-protected video can't be downloaded</p>
<p>Services that protect video with DRM (Widevine, PlayReady, FairPlay), such as paid streaming platforms,
never hand out the decryption key to other programs. XDM does not and will not circumvent DRM.</p>
</div>
