---
title: "Batch download: download many links at once"
short_title: Batch download
order: 8
kicker: Power features
description: "Download hundreds of files in one go with XDM's batch downloader: paste a list of links, grab all links on a page, and choose one batch or one download per link."
lead: "Paste a list of links, or grab every link on a page, and download them as one tidy batch."
applies: XDM 9
related:
  - /guide/schedule-downloads/
  - /guide/speed-up-downloads/
  - /guide/browser-extension/
---

## Start a batch

You can start a batch in three ways:

- **From a list of links:** open <span class="ui">☰ → Batch download</span> and paste the links into the box, one
  link per line.
- **All links on a page:** in the browser, right-click → <span class="ui">Download all with XDM…</span>, or use
  <span class="ui">Grab all links for this page…</span> in the extension popup.
- **Only some links:** select text containing links on a page, right-click →
  <span class="ui">Download selected links with XDM…</span>.

<figure>
  <img src="/assets/img/shots/batch-download.webp" alt="XDM batch download dialog with a list of links" width="900" height="650" loading="lazy">
</figure>

## One batch, or one download per link?

| Mode | Best for | How it works |
|---|---|---|
| **Download as one batch** | Many small files (images, documents, a dataset) | A single entry in the list. Files download in parallel into a folder named after the batch. Progress shows *Files: 120 / 500*. |
| **One download per link** | A few large files | Each link becomes its own download with its own segments, progress and retry. |

Untick links you don't want. The dialog shows how many of the files are selected.

## Name and folder

A batch saves into `<Save in>/<batch name>/`. XDM checks the folder doesn't already exist with other files
in it, so batches never mix.

## When some files fail

A batch finishes even if a few files fail, and its icon shows a warning. Right-click it and choose
<span class="ui">Retry failed files</span> to try just those again, or open <span class="ui">Properties →
Files</span> to see each file's status (*Done*, *Waiting*, *Failed*).

<div class="callout callout--tip">
<p class="callout-title">Be kind to servers</p>
<p>Downloading thousands of files quickly can trip rate limits. If many files fail, lower
<span class="ui">Connections per download</span> in Settings → Downloads and retry the failed ones.</p>
</div>
