---
title: "Download all links, images or videos on a page with XDM"
short_title: Download all from a page
order: 40
kicker: Video
description: "Grab every PDF, image, file or video on a web page at once: right-click, Download all with XDM, filter by type, size or name, and save them into one folder. Works for social media profiles too."
lead: "Right-click any page and XDM lists everything you can download from it. Pick what you want and send it as one batch."
applies: XDM 9
---

## Open the picker

You need the [XDM browser extension](/guide/browser-extension/). Then do one of these:

- Right-click the page and choose **Download all with XDM…**.
- Select some text or links, right-click and choose **Download selected links with XDM…** to list only the links in
  your selection.
- Click the XDM icon in the toolbar and choose **Grab all links for this page…**.

A picker window opens for that tab and scans the page.

## Find what you want

| Control | What it does |
|---|---|
| **Links / Images & files** | Switch between links on the page and the images, media and other files it loaded. |
| **Filter** | Type part of a name, a pattern such as `*.pdf` or `*.jpg`, or a regular expression between slashes, such as `/IMG_\d+/`. |
| **Min size** | Hide images smaller than this many pixels, so icons and thumbnails stay out. |
| **API & streams** | Also show files the page fetched in the background. |
| **Previews** | Show image thumbnails. |
| **Select all / Invert** | Select everything shown, or swap the selection. |
| **Copy URLs** | Copy the selected links, for example to paste into a list. |

Some pages load more as you scroll. Scroll down in the page, then click **Scan the page again**. If the list looks
incomplete, **Reload & capture** reloads the page and records everything it loads from the start.

## Download them

Click **Download**. XDM opens its [batch download](/guide/batch-download/) window with your selection, where you
name the folder and choose between:

- **Download as one batch**: one entry in your list, all files in one folder. Best for many small files, such as a
  photo gallery.
- **One download per link**: a separate entry for each file. Best for a few large files.

## Social media profiles

On social media profile and gallery pages, scroll through the posts you want with the video sound on, then open the
picker. XDM pairs each video's picture and sound tracks and lists them as **Video + audio**, so they're saved as
ready-to-play MP4 files. Ads in the feed are left out.

In the batch window:

- **Combine video and audio** merges the pairs it found.
- **Find missing** lists videos whose second track XDM hasn't seen yet. Play those with sound in the browser, then
  send the links again.

Only download content you have the right to save. XDM doesn't support DRM-protected content.

## Picker messages

| Message | What to do |
|---|---|
| *XDM isn't running. Start it to send these links.* | Start the XDM app, then click Download again. |
| *Nothing matches the current filters.* | Clear the filter or lower **Min size**. |
