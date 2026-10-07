---
title: "Download link expired: how to resume with a fresh link"
short_title: Link expired
order: 1
description: "XDM says the download link has expired. Learn why signed links stop working and how to resume from where it stopped with Refresh link, without starting over."
error_text: "The download link has expired. Use Refresh link to get a new one from the browser and continue."
lead: "Part of your file is already downloaded, but the server has stopped accepting the link. That is normal for many sites, and you can almost always continue without losing progress."
applies: XDM 8 and 9
related:
  - /guide/refresh-link/
  - /help/errors/session-expired/
  - /help/resume-broken-download/
howto:
  - "Select the failed download in the XDM list."
  - "Right-click it and choose Refresh link."
  - "Click Open containing web page; the page opens in your browser."
  - "Start the same download again in the browser, or play the same video and pick the same quality."
  - "XDM detects the new link, asks to use it, and resumes from where it stopped."
---

## What this error means

Many websites, cloud drives and video platforms don't give out permanent download addresses. The link
your browser received contained a **signature, token or session** that is only valid for a limited time
(often 15 minutes to a few hours) or for one IP address. XDM downloaded part of the file, then the server
started answering with *403 Forbidden*, *410 Gone* or *401 Unauthorized*. That's the server saying
"this ticket is no longer valid", not that the file is gone.

The bytes XDM already saved are safe. Fetch a fresh link for the same file, and XDM continues from the
exact byte where it stopped.

<figure>
  <img src="/assets/img/shots/progress-failed.webp" alt="XDM progress window: The download link has expired, with a How to fix this link" width="700" height="450" loading="lazy">
</figure>

## Fix it with Refresh link

<ol class="steps-list">
  <li><strong>Select the download</strong> in the XDM list. Its status shows the failure.</li>
  <li><strong>Right-click → <span class="ui">Refresh link</span></strong> (it appears while the download is paused or failed).</li>
  <li>In the dialog, keep <span class="ui">Refresh from browser</span> selected and click
      <span class="ui">Open containing web page</span>. XDM opens the page where you originally found the download.</li>
  <li><strong>Trigger the download again in the browser.</strong> Click the same download button. For a
      video, play it and choose the <em>same quality</em> you downloaded before.</li>
  <li>XDM shows <em>“New download link found, use this link?”</em>. Confirm, and the download resumes.</li>
</ol>

<figure>
  <img src="/assets/img/shots/refresh-link.webp" alt="The Refresh link dialog in XDM" width="800" height="550" loading="lazy">
  <figcaption>Refresh link keeps the downloaded data and swaps in a new address.</figcaption>
</figure>

### If the download has no web page recorded

Downloads added by pasting a URL don't remember a web page. In that case choose
<span class="ui">Enter link manually</span>, paste a fresh link, and add any request headers the site
needs (cookies go into a `Cookie` header). Click <span class="ui">Apply</span>, then resume.

## Why it keeps happening

| Situation | What to do |
|---|---|
| The site issues links valid for a short time (cloud storage, file hosts) | Start the download soon after clicking, and use Refresh link when it expires. |
| The link is tied to your IP address and your IP changed (VPN switch, mobile network) | Refresh the link from the same network you'll keep using. |
| You paused overnight | Expected. Refresh the link in the morning and resume. |
| You must be logged in | Make sure you're still signed in to the site in the browser before refreshing. |

<div class="callout callout--tip">
<p class="callout-title">Tip: pick the same file or format</p>
<p>XDM continues from the byte where it stopped, so the new link must deliver the identical file. If you pick
a different video quality or a different file, the parts won't fit together. Choose exactly what you
downloaded before.</p>
</div>

## Related errors

- [Session expired](/help/errors/session-expired/): similar, but the server rejected the session from the start of the resume.
- [Server does not support resume](/help/errors/resume-not-supported/): the server can't continue partial downloads at all.
