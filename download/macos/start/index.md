---
layout: download-start
os: macos
title: Downloading XDM for Mac
description: "Your Xtreme Download Manager download for macOS is starting. Install it, get past Gatekeeper, then connect your browser."
robots: noindex
---

## Install XDM while it downloads

<ol class="steps-list">
  <li><strong>Open the DMG</strong> from your Downloads folder.</li>
  <li><strong>Drag XDM into Applications</strong>, then eject the disk image.</li>
  <li><strong>Open XDM.</strong> If macOS blocks it, click <span class="ui">Open Anyway</span> in
      <em>System Settings → Privacy &amp; Security</em> (<a href="#if-macos-blocks-xdm">steps below</a>). You only need to do this once.</li>
</ol>

## If macOS blocks XDM

The first time you open XDM, macOS may say it can't check XDM for malicious software. Allow it once:

<ol class="steps-list">
  <li><strong>Try to open XDM</strong> from Applications. When the warning appears, click <span class="ui">Done</span>
      (not <span class="ui">Move to Bin</span>).</li>
  <li><strong>Open System Settings → Privacy &amp; Security</strong> and scroll down to the <em>Security</em> section.</li>
  <li><strong>Click <span class="ui">Open Anyway</span></strong> next to the message about XDM. It only shows for about
      an hour after you tried to open the app, so if it's missing, open XDM again first.</li>
  <li><strong>Confirm</strong>: click <span class="ui">Open Anyway</span> in the dialog and enter your password or use
      Touch ID. XDM starts, and macOS won't ask again.</li>
</ol>

Prefer Terminal? Run <code>xattr -dr com.apple.quarantine /Applications/xdm-app.app</code>, then open XDM.

## Connect your browser

{% include browser-cards.html %}


## Get the most out of XDM

- **Notifications**: allow them when asked, and choose *Notification* under Settings → General → Notify me with.
- **Save videos**: see [Download videos](/guide/download-streaming-video/).
- **Batch downloads**: grab every link on a page with [Batch download](/guide/batch-download/).
- **Keep your Mac awake** during long downloads: Settings → Advanced.


## Trouble installing?

- **“XDM is damaged and can't be opened”**: run `xattr -dr com.apple.quarantine /Applications/xdm-app.app` in Terminal. If it still fails, download the DMG again; the first copy may be incomplete.
- **Wrong processor**: the Apple silicon build needs an M-series Mac. Intel Macs need the Intel build.
- Everything else: the [help center](/help/).
