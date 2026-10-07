---
title: "Your first download with XDM: browser, link or clipboard"
short_title: Your first download
order: 5
kicker: Getting started
description: "Learn the three ways to start a download in Xtreme Download Manager, what every field in the New download window means, and how to pause, resume and find your files."
lead: "Whether a download comes from the browser or from a link you paste, it starts in the New download window. Here's what everything there does."
applies: XDM 9
related:
  - /guide/browser-extension/
  - /guide/speed-up-downloads/
  - /guide/categories-and-folders/
---

## Three ways to start a download

1. **Click a download link in your browser.** With the [extension](/guide/browser-extension/) installed, XDM
   takes over supported file types automatically.
2. **Right-click a link → <span class="ui">Download with XDM</span>** for links the browser wouldn't normally
   download (or file types you excluded).
3. **Paste a link into XDM**: click <span class="ui">New</span> in the toolbar. If the clipboard
   holds a URL, it's filled in for you.

## The New download window

<figure>
  <img src="/assets/img/shots/new-download.webp" alt="XDM New download window" width="800" height="450" loading="lazy">
</figure>

| Field | What it does |
|---|---|
| **Address** | The download URL. Edit it if you pasted the wrong link. |
| **File** | The file name to save as. XDM takes it from the server or the link. |
| **Save in** | The destination folder. By default XDM chooses a folder by file type (Video, Music, Programs …). See [categories](/guide/categories-and-folders/). |
| **Segments** | How many parts XDM downloads at once for this file. More segments are usually faster. |
| **Don't capture from this web page** | XDM ignores downloads from this page from now on. |
| **Download** | Starts now. |
| **Download Later** | Adds it to the list without starting it. XDM asks whether you want to [schedule](/guide/schedule-downloads/) it. |

<div class="callout callout--tip">
<p class="callout-title">Skip this window</p>
<p>Turn on <span class="ui">Settings → General → Start downloads immediately</span> and captured downloads begin
without asking.</p>
</div>

## While it downloads

The progress window shows the speed, time left and a live map of the segments being downloaded.

<figure>
  <img src="/assets/img/shots/progress.webp" alt="XDM download progress window" width="700" height="450" loading="lazy">
</figure>

- **Pause** stops the download and keeps everything received so far. **Resume** continues later, even
  after a restart, as long as the server supports it.
- **Hide** closes the window. The download keeps going. Reopen it via right-click →
  <span class="ui">Show progress</span>.
- Don't want a window for every download? Turn off <span class="ui">Settings → General → Show progress
  window</span>.

## When it's finished

XDM moves the file from its temporary folder into the destination and tells you, with a dialog or a
system notification, whichever you chose under <span class="ui">Settings → General → Notify me with</span>.
The <em>Download Complete</em> dialog has buttons to <span class="ui">Open</span> the file or
<span class="ui">Open folder</span>.

## Find downloads in the list

- The left sidebar filters by status (**All Downloads**, **Incomplete**, **Completed**) and by type
  (**Documents**, **Compressed**, **Music**, **Video**, **Programs**).
- The search box at the top right searches file names.
- The sort button orders the list by name, size or date.
- The clear button (bin icon) removes finished, paused or failed entries, optionally deleting the files too.

If something goes wrong, the [download error guides](/help/#errors) explain each message.
