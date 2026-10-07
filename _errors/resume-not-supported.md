---
title: "“Server does not support resume”: download from the start"
short_title: Resume not supported
order: 5
description: "Some servers can't continue partial downloads. Learn why XDM shows Server does not support resume, what range requests are, and how to finish the file anyway."
error_text: "Server does not support resume."
lead: "The download was interrupted and the server can't send just the missing part. It has to be downloaded from the beginning."
applies: XDM 8 and 9
related:
  - /help/resume-broken-download/
  - /help/errors/network-error/
  - /guide/speed-up-downloads/
---

## What this error means

Resuming relies on **range requests**: XDM asks for "bytes from position X onward" and the server sends only
that part. It's also what makes XDM fast, because segments of the file download in parallel. Some servers,
especially those generating files on the fly or streaming dynamic content, ignore range requests and always
send the whole file. If such a download is interrupted, there's no way to continue it.

## What you can do

<ol class="steps-list">
  <li><strong>Download it again from the start.</strong> Delete the failed entry and start the download again
      from the web page (or paste the link with <span class="ui">New</span> in the toolbar).</li>
  <li><strong>Keep the connection stable</strong> until it completes: avoid sleep mode (enable
      <span class="ui">Keep the computer awake</span> in Settings → Advanced) and pausing.</li>
  <li><strong>Try another mirror.</strong> Download sites often offer several servers. A different mirror
      may support resume and download much faster.</li>
</ol>

<div class="callout callout--note">
<p class="callout-title">Why such downloads are slower</p>
<p>Without range support XDM can only use a single connection, so acceleration doesn't apply. That's a
limitation of the server, not of XDM or your connection.</p>
</div>
