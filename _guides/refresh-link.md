---
title: "Resume an expired download with Refresh link"
short_title: Refresh link
order: 12
kicker: Recover & update
description: "Downloads from many sites expire after a while. Use XDM's Refresh link to give a paused or failed download a fresh URL and resume without starting over."
lead: "Refresh link swaps the address of a paused or failed download for a fresh one and keeps every byte already downloaded."
applies: XDM 9
related:
  - /help/errors/link-expired/
  - /help/errors/session-expired/
  - /help/resume-broken-download/
howto:
  - "Right-click the paused or failed download and choose Refresh link."
  - "Click Open containing web page."
  - "Start the same download again in the browser."
  - "Accept the new link in XDM; the download resumes."
---

## When you need it

- XDM says [the link has expired](/help/errors/link-expired/) or [the session expired](/help/errors/session-expired/).
- You paused a download for a long time and it won't resume.
- The site moved the file to a new mirror.

## Refresh from the browser (recommended)

<ol class="steps-list">
  <li>Right-click the download → <span class="ui">Refresh link</span>. The item appears for paused and failed
      downloads.</li>
  <li>Keep <span class="ui">Refresh from browser</span> selected and click <span class="ui">Open containing web
      page</span>. The page you originally downloaded from opens.</li>
  <li><strong>Start the same download again</strong> in the browser. For a video, play it and choose the same quality.
      XDM shows <em>Waiting for new link…</em> meanwhile.</li>
  <li>When XDM asks <em>“New download link found, use this link?”</em>, confirm. The download resumes from
      where it stopped.</li>
</ol>

<figure>
  <img src="/assets/img/shots/refresh-link.webp" alt="XDM Refresh link dialog" width="800" height="550" loading="lazy">
</figure>

## Enter the link manually

Choose <span class="ui">Enter link manually</span> when the download has no web page recorded (for example, it
was pasted) or you already have a new link:

1. Paste the new **Address**.
2. Under **Request headers**, add or edit headers the server needs, such as `Cookie` or `Referer`.
3. Click <span class="ui">Apply</span>, then resume the download.

<div class="callout callout--warn">
<p class="callout-title">It must be the same file</p>
<p>XDM continues at the byte where it stopped. A link to a different file, or a different video quality,
produces a broken result. If unsure, start a new download instead.</p>
</div>
