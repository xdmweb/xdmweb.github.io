---
title: "XDM won't start or the window doesn't appear"
short_title: XDM won't start
order: 7
kicker: Troubleshooting
description: "Fix XDM not opening: check whether it's already running in the tray, conflicts with an old version, port 8597, display scaling on Linux, and how to reset settings."
lead: "Usually XDM is already running in the background, or an old version is in the way."
related:
  - /help/extension-cannot-connect/
  - /guide/update-and-migrate/
  - /help/errors/internal-error/
---

## Is it already running?

XDM keeps running in the background when you close its window, to capture browser downloads. Look for
its icon in the system tray (Windows, Linux) or menu bar (macOS) and click it to bring the window back.

## Two versions installed

XDM 8 and XDM 9 can't run side by side. Both need port 8597, so the second one may exit or misbehave.
Remove the old version as explained in [Update &amp; migrate](/guide/update-and-migrate/).

## Linux: blank or tiny window

- On Wayland, toggle <span class="ui">Settings → Advanced → Native Wayland</span> (or start with the environment
  variable `XDM_WAYLAND=0`) to run through XWayland instead.
- On X11 with fractional scaling, update to the latest XDM. Scaling support has improved.

## Reset XDM's settings

As a last resort, quit XDM and rename its settings folder so XDM starts fresh:

| OS | Folder |
|---|---|
| Windows | `%USERPROFILE%\.xdm-app` |
| macOS / Linux | `~/.xdm-app` |

Renaming (instead of deleting) lets you go back. The folder also holds your download list.

## Report the problem

If XDM still doesn't start, open an [issue on GitHub](https://github.com/subhra74/xdm/issues) with your OS
version and the newest file from the `logs` folder inside the settings folder.
