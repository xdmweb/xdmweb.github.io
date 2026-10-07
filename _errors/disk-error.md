---
title: "XDM “Disk error”: fix disk space and write problems"
short_title: Disk error
order: 6
description: "XDM reports Disk error when it can't write downloaded data. Free space on the temporary folder drive, check permissions and external drives, then resume."
error_text: "Disk error."
lead: "XDM couldn't write downloaded data to disk. Almost always the drive holding the temporary folder is full, disconnected or read-only."
applies: XDM 8 and 9
related:
  - /help/errors/cannot-save-file/
  - /guide/categories-and-folders/
  - /help/antivirus-and-firewall/
---

## What this error means

XDM first writes every download into its **temporary folder**, then moves the finished file to the
download folder. A disk error means a write into that temporary folder failed.

## How to fix it

<ol class="steps-list">
  <li><strong>Free up space.</strong> The temporary folder needs room for the whole file, and for a moment
      during the final move you may need roughly twice the file size on the same drive. XDM also warns with
      <em>Low disk space</em> before it starts when it can tell the file won't fit.</li>
  <li><strong>Check the drive is connected.</strong> If the temporary or download folder is on a USB drive or
      network share that went to sleep or was unplugged, reconnect it and resume.</li>
  <li><strong>Check permissions.</strong> Make sure your user account can write to both folders. On macOS,
      grant XDM access to the folder if the system asks.</li>
  <li><strong>Move the temporary folder</strong> to a drive with more space: <span class="ui">Settings →
      Folders → Temporary folder</span>. Pause downloads first.</li>
  <li><strong>Resume</strong> the download. XDM continues from the data already written.</li>
</ol>

<div class="callout callout--tip">
<p class="callout-title">Big files on FAT32 drives</p>
<p>USB sticks formatted as FAT32 can't store files larger than 4 GB. Use an exFAT or NTFS formatted drive
for large downloads such as disk images and long videos.</p>
</div>
