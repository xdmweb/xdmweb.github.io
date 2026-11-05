---
title: "Manage your download list: pause, resume, move, restart and clean up"
short_title: Download list
order: 50
kicker: Everyday use
description: "Everything you can do with downloads in XDM's list: filter and sort, pause and resume, change a download's folder, restart, view properties and request headers, handle duplicates and clear old entries."
lead: "XDM's main window keeps every download you start. Here's what each part of it does."
applies: XDM 9
---

## The sidebar

| Section | Shows |
|---|---|
| **Library** | **All Downloads**, **Completed** and **Incomplete** (paused, failed or still running). |
| **File types** | Downloads by kind: Documents, Compressed, Music, Video, Programs. |
| **Your categories** | One entry per [category](/guide/categories-and-folders/) you made, in its color. |

**Stay in touch** at the bottom opens XDM's [Stay in touch page on GitHub](https://github.com/subhra74/xdm/blob/master/SUPPORT.md): star XDM, follow it on YouTube and Reddit.

## Sort the list

Click **Sort** in the toolbar: newest or oldest on top, largest or smallest on top, or by name (A–Z or Z–A).

## Classic or modern list

In **Settings → General → Download list**:

- **Classic**: click to select, double-click to open, right-click for the menu.
- **Modern**: click the icon to select, click the name to open.

## What you can do with a download

Right-click a download (or use the toolbar) for these actions:

| Action | What it does |
|---|---|
| **Open file / Open folder** | Open the finished file, or the folder it's in. |
| **Pause / Resume** | Stop and continue later. XDM picks up exactly where it left off. |
| **Refresh link** | Give a stalled download a fresh link from the web page, without starting over. See [Refresh link](/guide/refresh-link/). |
| **Restart** | Throw away what was downloaded and start the file again from zero. |
| **Change folder…** | Move a download, finished or not, to another folder. XDM checks the new folder has enough free space first. |
| **Schedule** | Start or stop it at a set time. See [Schedule downloads](/guide/schedule-downloads/). |
| **Copy URL** | Copy the download link. |
| **Retry failed files** | For a batch, download again only the files that failed. |
| **Properties** | See the details below. |
| **Delete** | Remove it from the list. Tick **Delete files from disk** to delete the file too. |

A download that's being moved can't be deleted until you cancel the move.

## Properties

**Properties** shows a download's file name, folder, size, date, type and status. It also shows where the file came
from:

- **URL**: the download link.
- **Web page**: the page you downloaded it from, with **Open in browser** to go back to it.
- **Referer** and **Request headers**: what XDM sends to the server. Useful when a site needs a login cookie.
- **Files** (batches only): every file in the batch, and which ones failed.

From here you can also **Verify checksum**. See [Verify checksum](/wiki/verify-checksum/).

## Duplicate downloads

If you start a file that's already in your list, XDM asks first:

- *This file is already in your download list* means the same link.
- *A download that looks like the same file is already in your list* means the same file name and size, or the
  same file from the same server under a different link.

A finished download whose file you've deleted from disk doesn't count as a duplicate.

Choose **Resume existing** to continue the one you have, or **Download again** for a second copy.

## Clear old downloads

Click **Clear** in the toolbar to tidy the list:

1. Tick which kinds to remove: **Completed**, **Paused**, **Failed**.
2. Choose how old: any time, or more than a week, a month, 3 months, 6 months or a year ago.
3. Tick **Also delete completed files from disk** only if you want the files gone too. XDM asks again before
   deleting them.

Downloads in progress are never cleared.

## After a download finishes

The **Download complete** window opens the file or its folder. You can also drag the file from it straight into a
folder to move it. To get a notification or nothing instead, see
[After-download actions](/guide/after-download-actions/).
