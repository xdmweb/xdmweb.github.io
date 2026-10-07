---
title: "How to install XDM on macOS"
short_title: Install on macOS
order: 2
kicker: Getting started
description: "Install Xtreme Download Manager on a Mac (Apple silicon and Intel): open the DMG, get past the Gatekeeper warning with Open Anyway, allow notifications and connect your browser."
lead: "XDM 9 runs natively on Apple silicon and Intel Macs. Here's how to install it and get past the first-launch security prompt."
applies: Apple silicon and Intel Macs
related:
  - /guide/browser-extension/
  - /guide/first-download/
  - /guide/after-download-actions/
howto:
  - "Download the DMG for your Mac (Apple silicon arm64 or Intel x64)."
  - "Open the DMG and drag XDM to the Applications folder."
  - "Open XDM from Applications; if macOS blocks it, open System Settings → Privacy & Security and click Open Anyway."
  - "Install the browser extension from the Set up browser integration window."
---

<div class="callout callout--note">
<p class="callout-title">macOS support arrives with XDM 9</p>
<p>XDM 9 is <a href="/download/">coming soon</a>, with a native macOS build. This guide describes how installation
will work. Older 7.x builds for macOS are outdated and not recommended.</p>
</div>

## Which download do I need?

| Your Mac | File |
|---|---|
| Apple silicon (M1, M2, M3, M4 and later) | `xdm-app-<version>-arm64.dmg` |
| Intel processor | `xdm-app-<version>-x64.dmg` |

Not sure? Open  → <em>About This Mac</em>. “Chip: Apple M…” means Apple silicon.

## Install step by step

<ol class="steps-list">
  <li><strong>Open the DMG</strong> you downloaded. A window named <em>XDM</em> appears.</li>
  <li><strong>Drag the XDM app onto the Applications folder</strong> shortcut in that window.</li>
  <li><strong>Eject the DMG</strong> and open XDM from Applications or Launchpad.</li>
  <li><strong>If macOS says it can't verify the developer</strong>, click <span class="ui">Done</span>, then open
      <em>System Settings → Privacy &amp; Security</em>, scroll down and click <span class="ui">Open Anyway</span>
      next to the XDM message. Confirm once more. macOS remembers the choice.</li>
  <li><strong>Install the browser extension</strong> from the <em>Set up browser integration</em> window that
      opens on first start.</li>
</ol>

### Why the security prompt?

XDM is free, open-source software and isn't notarised through Apple's paid developer program, so
Gatekeeper asks you to confirm the first launch. The app is still code-signed (ad-hoc), and you only need
to confirm once.

## Notifications

If you choose <span class="ui">Notification</span> under <span class="ui">Settings → General → Notify me
with</span>, macOS asks for permission the first time. If you said no earlier, XDM offers to open
<em>System Settings → Notifications</em> so you can allow it.

## Uninstall

Quit XDM, then drag it from Applications to the Bin. To remove settings and the download list as
well, delete the hidden folder <code>~/.xdm-app</code>.
