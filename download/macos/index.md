---
layout: download-os
os: macos
title: Download XDM for Mac
seo_title: "Download Xtreme Download Manager for Mac (Apple silicon & Intel)"
description: "Download Xtreme Download Manager for macOS: native DMGs for Apple silicon (M1–M4) and Intel Macs in the XDM 9 pre-release. Install steps and Gatekeeper help."
lead: "A native Mac app for Apple silicon and Intel, available now as the XDM 9 pre-release. Pick your Mac below; we've pre-selected the one you appear to use."
unavailable_note:
  all: "There's no current XDM release for macOS. XDM 9 brings a native Mac app for Apple silicon and Intel. The last legacy Mac build (7.2.8, 2018) is in the version archive but isn't recommended on current macOS."
---

## Install XDM on a Mac in three steps

<ol class="steps-list">
  <li><strong>Open the DMG</strong> and drag <em>XDM</em> into the Applications folder.</li>
  <li><strong>Open XDM.</strong> If macOS blocks it, click <span class="ui">Open Anyway</span> in
      <em>System Settings → Privacy &amp; Security</em> (<a href="#if-macos-blocks-xdm">steps below</a>). You only need to do this once.</li>
  <li><strong>Install the <a href="/extension/">browser extension</a></strong> from the setup window.</li>
</ol>

Full walkthrough: [Install XDM on macOS](/guide/install-macos/).

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


## Apple silicon or Intel?

Open  → **About This Mac**. If it says **Chip: Apple M1** (or M2, M3, M4…), choose **Apple silicon**.
If it says **Processor: Intel**, choose **Intel**. The Apple silicon build runs natively and uses less
battery, so pick it whenever your Mac supports it.

## Why does macOS warn me?

XDM is free and open source, and isn't notarised through Apple's paid developer program. Gatekeeper asks
you to confirm the first launch. The app is still code-signed, and macOS remembers your choice.


## After installing

- **Connect your browser**: the XDM extension works in Chrome, Edge, Firefox and Brave.
  [Install it here](/extension/).
- **Notifications**: allow XDM's notifications when asked, so you know when downloads finish.
- **Learn more** in the [user guide](/guide/).
