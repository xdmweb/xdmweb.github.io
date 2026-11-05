---
title: "Theme, interface size, language and sounds in XDM"
short_title: Look and language
order: 70
kicker: Everyday use
description: "Make XDM look and sound the way you like: light, dark or system theme, a bigger or smaller interface, your language, your own translation files, completion sounds and Linux display options."
lead: "Everything that changes how XDM looks and sounds is under Settings → General."
applies: XDM 9
---

## Theme

**Settings → General → Theme**: **Light**, **Dark**, or **System** to follow your computer's setting. The change
applies after XDM restarts.

## Interface size

**Interface size** scales text, icons and spacing together. Make it bigger on a high-resolution screen or if the text
is hard to read, or smaller to fit more downloads in the window.

## Language

**Language** sets the language of XDM's menus, dialogs and labels. It applies the next time you start XDM.

XDM is translated by volunteers. To add your language or fix a translation, see
[Submitting translations](https://github.com/subhra74/xdm/blob/master/TRANSLATING.md).

### Use your own translation files

**Translation files → Open folder** opens a folder where you can drop translation files. Files there are used
instead of the built-in ones, so you can try your own translation in the real app before sending it in. Restart XDM
to see them.

## Sounds

**Play a sound** plays a sound when a download finishes or fails.

- Choose your own sound for each, as a `.wav` file. **Play** previews it, and **Default** goes back to XDM's sound.
- Sounds are off while **Notify me with** is set to *Nothing*.

## Notifications

**Notify me with** picks what happens when a download finishes: the **Dialog** (the *Download complete* window), a
system **Notification**, or **Nothing**. If notifications for XDM are turned off in your system's settings, XDM
tells you and offers to open them.

## Download list style

**Download list** switches between **Classic** and **Modern** clicking. See
[Download list](/wiki/download-list/#classic-or-modern-list).

## Linux display options

Under **Settings → Advanced**:

| Setting | What it does |
|---|---|
| **Native Wayland** | Runs XDM as a Wayland app instead of through XWayland. Sharper on scaled displays. Applies after a restart. |
| **Always use the built-in file chooser** | Uses XDM's own file and folder picker instead of the desktop's dialog. |
