---
title: "Browser extension can't connect to XDM (“XDM isn't running”)"
short_title: Extension can't connect
order: 3
kicker: Troubleshooting
description: "Fix the XDM extension showing XDM isn't running while the app is open: port 8597, duplicate XDM versions, firewalls, browser restarts and local network permission."
lead: "The extension reaches XDM through a local connection on your own computer. When that link breaks, the popup says XDM isn't running."
related:
  - /help/browser-not-capturing/
  - /help/antivirus-and-firewall/
  - /help/xdm-wont-start/
---

## How the connection works

XDM listens on `127.0.0.1` port **8597**, an address only reachable from your own computer. The
extension polls that address to send downloads and receive settings. Nothing goes over the internet.

## Fixes

<ol class="steps-list">
  <li><strong>Start XDM</strong>, or click <span class="ui">Launch XDM</span> in the extension popup, and wait a few
      seconds.</li>
  <li><strong>Only one XDM at a time.</strong> If XDM 8 and XDM 9 are both installed, only one can use port 8597.
      Uninstall the old version (see <a href="/guide/update-and-migrate/">migration</a>).</li>
  <li><strong>Restart the browser</strong> after installing or updating XDM or the extension.</li>
  <li><strong>Check security software.</strong> Some firewalls and “web shields” block connections to
      <code>127.0.0.1</code>. Allow XDM, or exclude <code>http://127.0.0.1:8597</code> from web filtering.</li>
  <li><strong>Check that another program isn't using port 8597.</strong> On Windows, run
      <code>netstat -ano | findstr 8597</code>. On macOS/Linux, <code>lsof -i :8597</code>. If another program owns
      it, close that program.</li>
  <li><strong>Allow local network access.</strong> Recent browser versions may ask whether a site or extension may
      connect to devices on your local network. Allow it for the XDM extension.</li>
</ol>

<div class="callout callout--tip">
<p class="callout-title">Test the connection</p>
<p>With XDM running, open <code>http://127.0.0.1:8597/sync</code> in your browser. If you see a block of text
listing file types, XDM is reachable. If the page doesn't load, XDM isn't listening, or something blocks it.</p>
</div>
