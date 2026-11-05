---
title: "Where XDM saves files, and what happens when the disk is full"
short_title: Files and disk space
order: 80
kicker: Files and safety
description: "How XDM writes downloads: straight into the final folder with no slow assembling step, where video segments go, how the temporary folder works, low disk space warnings, and why a full disk never restarts a download."
lead: "XDM 9 writes most downloads straight into their folder. Here's where the bytes go, and how XDM protects your progress."
applies: XDM 9
---

## Regular files go straight to their folder

A normal download (an installer, a ZIP, a PDF) is written directly into its download folder while it downloads, even
with many connections at once. When the last byte arrives, the file is finished. There's no temporary copy and no
"assembling" step at the end, so even very large files are ready the moment the download completes.

Until it's done, the file shows in the folder under a temporary name, and XDM renames it when it finishes.

## Videos use the temporary folder

A streaming video (HLS or DASH) arrives as many small pieces. XDM downloads those pieces into the **temporary
folder**, then joins them into one MP4 in your download folder. While that happens the download shows *Finalizing*
or *Moving to folder*.

Set the temporary folder in **Settings → Folders → Temporary folder**:

- Keep it on the **same drive** as your download folder if you can. The finished video is then moved instantly,
  not copied.
- If it's on another drive, XDM tells you, and both drives need room for the video.
- A new temporary folder applies to new downloads. Downloads already started keep theirs.

## Free space warnings

Before a download starts, XDM checks the free space it needs:

| Warning | Meaning |
|---|---|
| *The folder … has only … free, but this download needs about …* | The download folder is too small for this file. Pick another folder or free up space. |
| *Low space for temporary files* | The temporary folder's drive is running out of room for video pieces. Click it to choose another temporary folder. |
| *Video segments go to another drive* | Your temporary folder and download folder are on different drives. It works, but both need space. |

## A full disk never restarts a download

If the disk fills up or the folder disappears (for example, a USB drive is unplugged), XDM stops the download with
*Disk error* and keeps everything downloaded so far. Free up space or reconnect the drive, then **Resume**. It
continues from where it stopped.

## Move a download to another folder

Right-click a download and choose **Change folder…** to move it, finished or not. XDM checks that the new folder has
enough free space first. If the move fails, the download stays where it was.

If a download's partial file isn't available (its drive is disconnected), it can't be moved. Reconnect the drive and
resume, or restart the download.

## Same name already in the folder

By default XDM adds a number to the new file's name (`file_1.zip`) so nothing is overwritten. To replace existing
files instead, turn on **Settings → General → Overwrite existing files**.

## Keep the server's date

**Settings → Browser → Use the server's file timestamp** sets the file's date to the one the server reports, instead
of the time you downloaded it.

See also [Download folders and categories](/guide/categories-and-folders/) for choosing where each kind of file goes.
