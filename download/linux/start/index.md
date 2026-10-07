---
layout: download-start
os: linux
title: Downloading XDM for Linux
description: "Your Xtreme Download Manager download for Linux is starting. Install the package with apt, dnf or pacman, then connect your browser."
robots: noindex
---

## Install XDM while it downloads

Open a terminal in your Downloads folder (`cd ~/Downloads`) and run the command for your package:

| Package | Command |
|---|---|
| .deb (Ubuntu, Debian, Mint) | `sudo apt install ./xdm*.deb` |
| .rpm (Fedora, openSUSE) | `sudo dnf install ./xdm*.rpm` |
| .pkg.tar.zst (Arch, Manjaro) | `sudo pacman -U xdm*.pkg.tar.zst` |
| .tar.gz (any distribution) | `tar xzf xdm-app-*.tar.gz && ./xdm-app/bin/xdm-app` |

Then start **Xtreme Download Manager** from your applications menu.

## Connect your browser

{% include browser-cards.html %}


## Get the most out of XDM

- **Launch at login** keeps XDM ready for browser downloads: Settings → Advanced.
- **Wayland**: XDM runs natively on GNOME and KDE Wayland sessions.
- **Save videos** and **batch downloads**: see the [user guide](/guide/).


## Trouble installing?

- **Dependency errors with dpkg**: use `apt install ./file.deb`, not `dpkg -i`.
- **XDM 8 still installed**: the new package replaces `xdman`; see [Update &amp; migrate](/guide/update-and-migrate/).
- **No tray icon on GNOME**: install the AppIndicator extension.
- Everything else: the [help center](/help/).
