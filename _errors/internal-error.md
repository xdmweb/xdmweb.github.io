---
title: "XDM “Internal error”: what to do"
short_title: Internal error
order: 11
description: "An unexpected internal error stopped your download in XDM. Retry, update XDM, check logs and report the problem so it can be fixed."
error_text: "Internal error."
lead: "Something unexpected happened inside XDM that doesn't fit any of the known error types."
applies: XDM 8 and 9
related:
  - /guide/update-and-migrate/
  - /help/errors/network-error/
  - /help/xdm-wont-start/
---

## First steps

<ol class="steps-list">
  <li><strong>Resume the download.</strong> Many internal errors are one-off timing problems.</li>
  <li><strong>Restart XDM</strong> and try again.</li>
  <li><strong>Update XDM</strong> to the latest version from the <a href="/download/">download page</a>. The bug may
      already be fixed.</li>
  <li><strong>Start the download fresh.</strong> Delete the failed entry and download the file again.</li>
</ol>

## Report it

Internal errors are bugs, and reports help fix them. Open an issue on
[GitHub](https://github.com/subhra74/xdm/issues) with:

- your XDM version (<span class="ui">☰ menu → About XDM...</span>) and operating system,
- what you were downloading and how (browser, pasted link, video),
- the log files from the <code>logs</code> folder inside XDM's settings folder
  (<code>~/.xdm-app</code> on macOS and Linux, <code>%USERPROFILE%\.xdm-app</code> on Windows).

<div class="callout callout--note">
<p class="callout-title">Privacy</p>
<p>Logs can contain download addresses. Look through them and remove anything private before
posting them publicly.</p>
</div>
