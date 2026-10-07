---
title: "Download folders and categories in XDM"
short_title: Folders & categories
order: 11
kicker: Settings & setup
description: "Choose where XDM saves files: set the download folder, sort files into category folders by type (Video, Music, Programs…), create your own categories and move the temporary folder."
lead: "XDM can sort every download into the right folder automatically, by file type."
applies: XDM 9
related:
  - /guide/first-download/
  - /help/errors/disk-error/
  - /help/errors/cannot-save-file/
---

## The download folder

<span class="ui">Settings → Folders → Download folder</span> is where finished files go by default. Click
<span class="ui">Change</span> to pick another folder.

<figure>
  <img src="/assets/img/shots/settings-folders.webp" alt="XDM Folders settings with download folder, temporary folder and file categories" width="1000" height="700" loading="lazy">
</figure>

## Categories: automatic folders by file type

XDM ships with categories such as **Documents**, **Compressed**, **Music**, **Video** and **Programs**. Each has
a list of file extensions and its own folder. When you download `movie.mp4`, XDM finds the first category
whose types match (Video) and offers that category's folder in the *Save in* box.

The same categories appear in the main window's sidebar, so you can filter the list by type.

### Add or edit a category

<ol class="steps-list">
  <li>Open <span class="ui">Settings → Folders</span> and find <em>File categories</em>.</li>
  <li>Click <span class="ui">Add category</span>, or <span class="ui">Edit</span> on an existing one.</li>
  <li>Enter a <strong>Name</strong>, the <strong>File types</strong> (comma separated, e.g. <code>mp4, mkv, webm</code>),
      choose a <strong>Folder</strong> and an <strong>Icon</strong>.</li>
  <li>Save. New downloads of those types use the new folder.</li>
</ol>

<div class="callout callout--note">
<p class="callout-title">Good to know</p>
<p>Renaming or deleting a category doesn't move files you've already downloaded. With no categories at all,
every download goes to the download folder.</p>
</div>

## The temporary folder

While a file downloads, its parts live in the <strong>temporary folder</strong>
(<span class="ui">Settings → Folders → Temporary folder</span>). When the download completes, XDM moves the
file to its destination.

- Put the temporary folder on a drive with plenty of space. It must hold the whole file.
- If the temporary folder and the destination are on **different drives**, XDM copies the finished file
  instead of moving it, which takes a little longer for big files. XDM shows a note when this applies.

## Overwrite or keep both?

If a file with the same name already exists, XDM adds a number to the new file's name. Turn on
<span class="ui">Settings → General → Overwrite existing files</span> to replace the old file instead.
