---
title: "How to install XDM on Linux (Ubuntu, Debian, Fedora, Arch)"
short_title: Install on Linux
order: 3
kicker: Getting started
description: "Install Xtreme Download Manager on Linux with the .deb, .rpm, Arch package or tar.gz. Covers Ubuntu, Debian, Mint, Fedora, openSUSE, Arch, Wayland and replacing XDM 8."
lead: "XDM provides native packages for the major distributions, plus a tar.gz that runs anywhere."
applies: x64 and ARM64 Linux
related:
  - /guide/browser-extension/
  - /guide/update-and-migrate/
  - /help/xdm-wont-start/
howto:
  - "Download the package for your distribution from the XDM download page."
  - "Install it with apt, dnf or pacman from a terminal."
  - "Start Xtreme Download Manager from your applications menu."
  - "Install the browser extension from the Set up browser integration window."
---

## Pick the right package

| Distribution | Package | Install command |
|---|---|---|
| Ubuntu, Debian, Linux Mint, Pop!_OS, elementary | `.deb` | `sudo apt install ./xdm-app_<version>_amd64.deb` |
| Fedora, RHEL, Rocky, openSUSE | `.rpm` | `sudo dnf install ./xdm-app-<version>-1.x86_64.rpm` |
| Arch, Manjaro, EndeavourOS | `.pkg.tar.zst` | `sudo pacman -U xdm-app-<version>-1-x86_64.pkg.tar.zst` |
| Anything else | `.tar.gz` | Extract and run `bin/xdm-app` |

ARM64 machines (Raspberry Pi 5, ARM laptops, ARM cloud VMs) use the `arm64` / `aarch64` packages.

<div class="callout callout--tip">
<p class="callout-title">Use apt with ./, not dpkg -i</p>
<p><code>sudo apt install ./file.deb</code> resolves dependencies automatically. <code>dpkg -i</code> doesn't.</p>
</div>

## Install step by step

<ol class="steps-list">
  <li><strong>Download</strong> the package from the <a href="/download/">download page</a>.</li>
  <li><strong>Open a terminal</strong> in your Downloads folder (<code>cd ~/Downloads</code>).</li>
  <li><strong>Run the install command</strong> from the table above.</li>
  <li><strong>Start XDM</strong> from your applications menu (search “Xtreme Download Manager”) or run
      <code>xdm-app</code>.</li>
  <li><strong>Install the browser extension</strong> when the setup window appears.</li>
</ol>

## Replacing XDM 8 (xdman)

XDM 9's package is called `xdm-app`. It replaces the old `xdman` / `xdman_gtk` packages: installing it
removes XDM 8, so you never have both. A plain `apt upgrade` won't switch you over. Install the new
package once as shown above. Your XDM 8 download list isn't imported.

## The tar.gz version

```
tar xzf xdm-app-<version>-linux-x64.tar.gz
cd xdm-app
./bin/xdm-app
```

It runs from wherever you extract it. Add it to your desktop's autostart if you want it running
at login.

## Wayland and display scaling

On GNOME and KDE Wayland sessions XDM can run as a native Wayland app, which looks sharper on scaled
displays. It's controlled by <span class="ui">Settings → Advanced → Native Wayland</span> and takes effect
after a restart. If you see rendering problems, turn it off to run through XWayland instead.

## System tray

XDM shows a tray icon on KDE Plasma, and on GNOME with the *AppIndicator* extension installed. Without a
tray, closing the window still keeps XDM running in the background to capture browser downloads.

## Uninstall

```
sudo apt remove xdm-app      # Debian/Ubuntu
sudo dnf remove xdm-app      # Fedora
sudo pacman -R xdm-app       # Arch
```

Settings and the download list stay in `~/.xdm-app`. Delete that folder for a full cleanup.
