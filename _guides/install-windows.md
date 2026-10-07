---
title: "How to install XDM on Windows"
short_title: Install on Windows
order: 1
kicker: Getting started
description: "Step-by-step guide to installing Xtreme Download Manager on Windows 10 and 11: MSI installer, SmartScreen warning, per-user install, browser extension and uninstalling."
lead: "Install XDM with the MSI installer in a couple of minutes, then connect it to your browser."
applies: Windows 10 and 11
related:
  - /guide/browser-extension/
  - /guide/first-download/
  - /guide/update-and-migrate/
howto:
  - "Download the Windows MSI installer from the XDM download page."
  - "Double-click the MSI file and follow the setup wizard."
  - "If SmartScreen appears, click More info and then Run anyway."
  - "Start XDM from the Start menu."
  - "Install the browser extension from the Set up browser integration window."
---

## Before you start

- **Windows 10 or 11**, 64-bit (x64) or ARM64. XDM 9 ships separate installers for each. Pick
  `x64` unless you have an ARM laptop (Snapdragon / Copilot+ PC).
- A little disk space for the app itself, plus room for your downloads.
- XDM bundles its own Java runtime. You **don't** need to install Java.

## Install step by step

<ol class="steps-list">
  <li><strong>Download the installer</strong> from the <a href="/download/">download page</a>. The file is an
      <code>.msi</code> package.</li>
  <li><strong>Run it.</strong> Double-click the downloaded file. Windows asks for administrator permission because
      XDM installs for all users into <code>Program Files</code>.</li>
  <li><strong>If Microsoft Defender SmartScreen appears</strong> (“Windows protected your PC”), click
      <span class="ui">More info</span> → <span class="ui">Run anyway</span>. XDM is free, open-source software
      without a paid code-signing certificate, so SmartScreen doesn't recognise it yet.</li>
  <li><strong>Finish the wizard</strong> and launch XDM from the Start menu.</li>
  <li><strong>Connect your browser.</strong> On first start XDM shows <em>Set up browser integration</em>. Click
      <span class="ui">Install</span> next to your browser. See the <a href="/guide/browser-extension/">extension
      guide</a>.</li>
</ol>

<figure>
  <img src="/assets/img/shots/browser-integration.webp" alt="Set up browser integration window" width="750" height="550" loading="lazy">
  <figcaption>On first start, XDM offers to install the extension for Chrome, Firefox, Edge and Brave.</figcaption>
</figure>

## Install from the Microsoft Store (XDM 8)

XDM 8 is also on the [Microsoft Store](https://apps.microsoft.com/detail/9n5jjzw4qzbr). The Store installs it without the
SmartScreen prompt and keeps it updated automatically. Use either the Store or the MSI, not both.

## Install for your user only (no admin rights)

If you can't get administrator rights, install per user from a command prompt in the folder that contains
the installer:

```
msiexec /i xdm-<version>-x64.msi MSIINSTALLPERUSER=1
```

The app then lives in your user profile and no UAC prompt appears.

## Upgrading from XDM 8

The XDM 9 installer replaces an MSI-installed XDM 8 automatically, so you end up with one XDM.
If you installed XDM 8 from the **Microsoft Store**, uninstall it first, because both versions use the
same browser connection and can't run side by side. More in [Update and migrate](/guide/update-and-migrate/).

## Start with Windows

XDM can launch in the background when you sign in, so browser downloads are captured right away. Turn it on
or off in <span class="ui">Settings → Advanced → Launch at login</span>.

## Uninstall

Open <em>Settings → Apps → Installed apps</em>, find <em>Xtreme Download Manager</em> and choose
<span class="ui">Uninstall</span>. Your settings and download list in <code>%USERPROFILE%\.xdm-app</code> are kept
in case you reinstall. Delete that folder for a clean removal.

<div class="callout callout--warn">
<p class="callout-title">Download XDM only from this site or GitHub</p>
<p>XDM is free. Copies on third-party download portals are sometimes bundled with adware. Use the
<a href="/download/">official download page</a> or the <a href="https://github.com/subhra74/xdm/releases">GitHub releases</a>.</p>
</div>
