---
title: "Antivirus or firewall blocks XDM: how to allow it"
short_title: Antivirus & firewall
order: 6
kicker: Troubleshooting
description: "Security software can block XDM's downloads, its browser connection, or the installer itself. How to allow XDM in Windows Defender, firewalls and HTTPS scanning safely."
lead: "XDM is open-source and free of adware, but some security tools are wary of new programs that download files. Here's how to let it work."
related:
  - /help/extension-cannot-connect/
  - /help/errors/tls-error/
  - /guide/after-download-actions/
---

## SmartScreen or Gatekeeper warns about the installer

XDM isn't signed with a paid commercial certificate, so Windows SmartScreen and macOS Gatekeeper ask for
confirmation the first time:

- **Windows:** <span class="ui">More info</span> → <span class="ui">Run anyway</span>.
- **macOS:** *System Settings → Privacy &amp; Security* → <span class="ui">Open Anyway</span>.

Only do this for installers from [this site](/download/) or the official
[GitHub releases](https://github.com/subhra74/xdm/releases).

## Firewall asks whether XDM may access the network

Allow it, at least for private networks. XDM needs internet access to download, and a local
connection (`127.0.0.1:8597`) to talk to the browser extension.

## Downloads fail only with XDM, not in the browser

- **HTTPS scanning / SSL inspection** in some antivirus suites interferes with apps that check
  certificates. You'll see a [TLS connection error](/help/errors/tls-error/). Exclude XDM from HTTPS scanning.
- **Web shields** may block local connections, which breaks the extension. Exclude `127.0.0.1`.
- **Controlled folder access** (Windows ransomware protection) blocks writing to protected folders.
  Allow XDM, or choose a different download folder.

## A finished file was deleted or quarantined

That was your antivirus acting on the downloaded file, not XDM. Check the antivirus's quarantine log. If
you trust the file's source, restore it from there. To scan every download automatically, see
[after-download actions](/guide/after-download-actions/).
