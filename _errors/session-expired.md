---
title: "XDM “Session expired” error when resuming a download"
short_title: Session expired
order: 4
description: "Resuming a download in XDM fails with Session expired. Learn why the server rejects the old session and how to continue with a fresh link using Refresh link."
error_text: "Session expired."
lead: "The website's session for this download has ended. Your partial file is kept; give XDM a fresh link and it continues."
applies: XDM 8 and 9
related:
  - /help/errors/link-expired/
  - /guide/refresh-link/
  - /help/resume-broken-download/
---

## What this error means

When you start a download from a website, the browser hands XDM the address together with the
**cookies and headers** that prove you're allowed to download. Many sites keep that permission only for a
while, or only while you stay signed in. When XDM later tries to continue, the server no longer
recognizes the session and refuses the request.

## Fix: refresh the link

<ol class="steps-list">
  <li>Make sure you're <strong>still signed in</strong> to the website in your browser.</li>
  <li>In XDM, right-click the download → <span class="ui">Refresh link</span>.</li>
  <li>Click <span class="ui">Open containing web page</span> and start the same download again in the
      browser (for videos, play the video and choose the same quality).</li>
  <li>Accept the new link when XDM asks. The download continues from where it stopped.</li>
</ol>

See the full walkthrough in [Resume a download with Refresh link](/guide/refresh-link/).

## Avoid it next time

- Don't sign out of the site while its downloads are paused.
- Start large downloads from sites with short sessions right away instead of using <em>Download later</em>.
- If the site sends you to a different mirror each time, refresh promptly after an interruption.
