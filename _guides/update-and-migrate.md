---
title: "Update XDM and move from XDM 8 to XDM 9"
short_title: Update & migrate
order: 16
kicker: Recover & update
description: "How XDM updates work, how to upgrade from XDM 7 or 8 to XDM 9 on Windows, macOS and Linux, and what happens to your settings and download list."
lead: "XDM tells you when a new version is out. Installing it over the old one is all it takes."
applies: XDM 7, 8 and 9
related:
  - /guide/install-windows/
  - /guide/install-linux/
  - /guide/install-macos/
---

## How updates work

XDM checks for a new version in the background. When one is available, the main window shows *A newer
version of XDM is available* with an <span class="ui">Install Now</span> button that opens the
[download page](/download/). Download the installer and run it. It installs over your current version and
keeps your settings and download list.

XDM doesn't update itself silently, and it never installs anything without you running the installer.

## XDM 9 is coming

XDM 9 is a rebuilt version with a modern interface, native macOS support, faster video downloads with
built-in merging, a batch downloader and a refreshed browser extension. Until its release, the
[current version](/download/) is {{ site.current_version }}.

## Moving from XDM 8 to XDM 9

| Platform | What happens |
|---|---|
| **Windows (MSI)** | The XDM 9 installer removes XDM 8 automatically, and launch-at-login points to XDM 9. |
| **Windows (Microsoft Store)** | Uninstall the Store version first. The installer tells you if it's still there. |
| **Linux** | Install the `xdm-app` package. It replaces `xdman` / `xdman_gtk`. |
| **macOS** | No XDM 8 for Mac existed. Just install XDM 9. |

### Settings and download list

XDM 9 keeps its data in a new place (`.xdm-app` in your home folder) and **doesn't import XDM 8's download
list or settings**. Before upgrading:

- let unfinished XDM 8 downloads complete, or note their links,
- re-enter your preferences (download folder, speed limit, proxy) in the new Settings window.

### Browser extension

XDM 8 and XDM 9 use the same local connection, so only one can run at a time. After upgrading, install
the extension version the XDM 9 setup window offers, and remove older XDM extensions from the browser.
