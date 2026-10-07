---
title: "“Unable to save the file to the destination folder”"
short_title: Can't save to folder
order: 9
description: "The download finished but XDM could not move it into your download folder. Fix folder permissions, disk space, file names and locked files, then resume."
error_text: "Unable to save the file to the destination folder."
lead: "The download itself completed, but the finished file couldn't be written or moved into the folder you chose. No need to download again."
applies: XDM 9
related:
  - /help/errors/disk-error/
  - /guide/categories-and-folders/
  - /help/antivirus-and-firewall/
---

## What this error means

XDM downloads into a temporary folder and, once everything has arrived, moves the finished file to the
download folder (or the folder of the matching category). If that last step fails, you see this error.
The downloaded data is kept: after you fix the cause, **Resume** only finishes the move. Nothing is
downloaded again.

## Fix it

<ol class="steps-list">
  <li><strong>Check the destination exists and is writable.</strong> If it's on an external or network drive,
      make sure it's connected. Pick another folder if you're not allowed to write there.</li>
  <li><strong>Free space on the destination drive.</strong> When the destination is on a different drive than
      the temporary folder, the file is copied, so it needs the full file size free.</li>
  <li><strong>Close programs using a file with the same name.</strong> A media player or the antivirus
      scanning an older copy can lock it. Or turn on <span class="ui">Overwrite existing files</span> in
      <span class="ui">Settings → General</span>.</li>
  <li><strong>Check the file name.</strong> Very long names or characters your file system doesn't accept
      can fail. Right-click → <span class="ui">Properties</span> to see it.</li>
  <li><strong>Allow folder access.</strong> On Windows, “Controlled folder access” (ransomware protection)
      can block apps from writing to Documents, Pictures or Desktop. Allow XDM there. On macOS, allow XDM in
      <em>System Settings → Privacy &amp; Security → Files and Folders</em>.</li>
  <li>Click <span class="ui">Resume</span>. XDM retries the move.</li>
</ol>
