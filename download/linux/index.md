---
layout: download-os
os: linux
title: Download XDM for Linux
seo_title: "Download Xtreme Download Manager for Linux (deb, rpm, Arch, x64 & ARM64)"
description: "Download Xtreme Download Manager for Linux: .deb for Ubuntu/Debian, .rpm for Fedora/openSUSE, Arch packages and tar.gz, for x86-64 and ARM64."
lead: "Native packages for Ubuntu, Debian, Fedora, openSUSE and Arch, plus a tar.gz that runs anywhere."
unavailable_note:
  arm64: "XDM 8 is available for x86-64 only. Native ARM64 packages arrive with XDM 9."
---

## Install the package

| Distribution | Command |
|---|---|
| Ubuntu, Debian, Mint, Pop!_OS | `sudo apt install ./xdm-app_*.deb` |
| Fedora, RHEL, openSUSE | `sudo dnf install ./xdm-app-*.rpm` |
| Arch, Manjaro, EndeavourOS | `sudo pacman -U xdm-app-*.pkg.tar.zst` |
| Any other distribution | `tar xzf xdm-app-*-linux-*.tar.gz && ./xdm-app/bin/xdm-app` |

Run the command in the folder you downloaded to (usually `~/Downloads`). XDM 8 packages are named
`xdman_gtk`; the commands are the same with that name. Details: [Install XDM on Linux](/guide/install-linux/).


## x86-64 or ARM64?

Run `uname -m` in a terminal. `x86_64` means **x86-64 (amd64)**. `aarch64` means **ARM64**.

## Wayland, tray icon and autostart

XDM runs natively on Wayland (GNOME and KDE) for sharp text on scaled displays, and falls back to XWayland
when needed. The tray icon works on KDE Plasma and on GNOME with the AppIndicator extension. Turn on
*Launch at login* in Settings → Advanced to keep XDM ready for browser downloads.


## After installing

- [Install the browser extension](/extension/) for Chrome, Firefox, Edge or Brave.
- Coming from XDM 8? Installing `xdm-app` replaces `xdman`. See [Update &amp; migrate](/guide/update-and-migrate/).
