---
title: "Install the XDM browser extension (Chrome, Firefox, Edge, Brave)"
short_title: Browser extension
order: 4
kicker: Getting started
description: "Connect XDM to Chrome, Firefox, Edge, Brave, Opera or Vivaldi so downloads and videos are captured automatically. Installation, permissions, and what the extension can do."
lead: "The XDM Integration Module hands browser downloads and videos over to XDM. Install it once per browser and it works in the background."
applies: Chrome, Edge, Brave, Opera, Vivaldi, Firefox
related:
  - /help/browser-not-capturing/
  - /help/extension-cannot-connect/
  - /guide/download-streaming-video/
howto:
  - "Start XDM; the Set up browser integration window opens on first start."
  - "Click Install next to your browser; the extension store page opens."
  - "Click Add to Chrome / Add to Firefox and confirm the permissions."
  - "Pin the XDM icon to the browser toolbar."
  - "Download a file to check that XDM takes it over."
---

## What the extension does

- **Takes over downloads.** When the browser starts a download of a supported file type (archives,
  installers, disk images, documents, audio and video), the extension cancels it in the browser and sends it to
  XDM together with the cookies and headers the site needs.
- **Finds videos.** While you watch a video, the extension spots the media streams the page plays.
  The XDM toolbar icon shows how many it found. Click it to pick a format and download.
- **Adds right-click options**: <span class="ui">Download with XDM</span>,
  <span class="ui">Download Image with XDM</span>, <span class="ui">Download all with XDM…</span> and
  <span class="ui">Download selected links with XDM…</span>

The extension only talks to the XDM app on your own computer (`127.0.0.1`). It doesn't send your data
anywhere else. See the [privacy policy](/privacy.html).

## Install it

<ol class="steps-list">
  <li><strong>Start XDM.</strong> On first start it opens <em>Set up browser integration</em>.</li>
  <li><strong>Click <span class="ui">Install</span> next to your browser.</strong> XDM opens the
      <a href="/extension/">XDM install page</a> for that browser, in that browser.</li>
  <li><strong>Click the store button</strong> on that page (for example <span class="ui">Add to Chrome</span>). The store opens in a new tab.</li>
  <li><strong>Click <span class="ui">Add to Chrome</span></strong> (or <em>Get</em> / <em>Add to Firefox</em>) and
      accept the permissions.</li>
  <li><strong>Pin the XDM icon</strong>: click the puzzle-piece icon in the toolbar and pin
      <em>XDM Integration Module</em>. The icon is where detected videos appear.</li>
</ol>

<figure>
  <img src="/assets/img/shots/browser-integration.webp" alt="XDM browser integration setup window with Chrome, Firefox, Edge and Brave" width="750" height="550" loading="lazy">
  <figcaption>Opened the setup window by mistake? It's also under Settings → Browser.</figcaption>
</figure>

### Install pages for each browser

[Chrome](/extension/chrome/) · [Edge](/extension/edge/) · [Firefox](/extension/firefox/) · [Brave](/extension/brave/) ·
[Opera, Vivaldi and other Chromium browsers](/extension/chromium/)

Edge, Opera and Vivaldi can install extensions from the Chrome Web Store. In Opera, first add the
*Install Chrome Extensions* helper.

## Check that it works

<ol class="steps-list">
  <li>Make sure XDM is running (check the tray or menu-bar icon).</li>
  <li>Click a download link for a ZIP or installer on any website.</li>
  <li>XDM's <em>New download</em> window appears instead of the browser's download bar.</li>
</ol>

If nothing happens, see [XDM doesn't capture downloads](/help/browser-not-capturing/).

## Messages in the extension popup

| Message | Meaning |
|---|---|
| **XDM isn't running** | Start XDM. The popup's <span class="ui">Launch XDM</span> button opens it. |
| **Site access is restricted** | The browser limits the extension to certain sites. Click <span class="ui">Allow on all sites</span> so it can see downloads everywhere. |
| **Browser monitoring is turned off** | You switched monitoring off in the popup. Switch it back on. |
| **XDM stays off YouTube** | XDM doesn't capture videos or links on YouTube. Downloads there are left to the browser. |

## Choose what gets captured

In XDM, open <span class="ui">Settings → Browser</span>:

- **File types**: extensions XDM takes over from the browser (ZIP, EXE, ISO, MP4 …). Remove a type, for
  example PDF, to let the browser handle it.
- **Video types**: media formats offered as video downloads.
- **Blocked sites**: hosts XDM never captures from.
- **Only detect videos larger than**: hides small clips such as ads and previews.

To let one download go to the browser instead, click <span class="ui">Cancel</span> in XDM's New download
window, or choose <span class="ui">Don't capture from this web page</span>.
