---
title: "XDM doesn't capture downloads from the browser: fixes"
short_title: Browser not capturing
order: 1
kicker: Troubleshooting
description: "Browser downloads go to the browser instead of XDM? Check that XDM is running, the extension is installed and allowed, the file type is enabled and the site isn't blocked."
lead: "If the browser keeps downloading files itself, one link in the chain is missing. Work through these checks in order. Most problems are solved in the first three."
related:
  - /guide/browser-extension/
  - /help/extension-cannot-connect/
  - /help/video-not-detected/
---

## 1. Is XDM running?

The extension hands downloads to the XDM app. If XDM isn't running, the browser downloads normally. Look
for XDM's icon in the system tray / menu bar, or start it. Turn on
<span class="ui">Settings → Advanced → Launch at login</span> so it's always ready.

## 2. Is the extension installed and enabled?

- Chrome / Edge / Brave: open `chrome://extensions` (or `edge://extensions`) and check that **XDM
  Integration Module** is there and switched on.
- Firefox: open `about:addons` → Extensions.
- Click the XDM icon in the toolbar. If the popup says **XDM isn't running**, go back to step 1. If it says
  **Browser monitoring is turned off**, switch it on.

Not installed? Follow the [extension guide](/guide/browser-extension/).

## 3. Does the extension have access to the site?

Chrome lets you restrict extensions to certain sites. If the popup shows **Site access is restricted**,
click <span class="ui">Allow on all sites</span>. Or right-click the XDM icon → *This can read and change site
data* → *On all sites*.

## 4. Is the file type on the list?

XDM only takes over file types listed in <span class="ui">Settings → Browser → File types</span>, for example
ZIP, EXE, ISO, MP4 and PDF. Add the extension of the file you're downloading (without the dot) and try again.

## 5. Is the site blocked?

Check <span class="ui">Settings → Browser → Blocked sites</span>. If you once clicked *Don't capture from this web
page*, the site may be listed there. Remove it to capture its downloads again.

<div class="callout callout--note">
<p class="callout-title">YouTube is excluded on purpose</p>
<p>XDM doesn't capture downloads or videos on YouTube. The popup shows <em>XDM stays off YouTube</em> there.</p>
</div>

## 6. Some downloads can't be captured

- Files the page generates in your browser (via JavaScript, `blob:` links) only exist inside the browser.
  Let the browser download those.
- Some sites start downloads through forms with one-time tokens. If XDM reports *Browser download failed*,
  retry the link, or use <span class="ui">Ignore address</span> to let the browser handle that site.

## Still not working?

- Restart the browser after installing or updating XDM.
- Make sure only **one** XDM version is installed. XDM 8 and XDM 9 compete for the same connection.
- See [extension can't connect to XDM](/help/extension-cannot-connect/).
