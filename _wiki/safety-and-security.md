---
title: "Download safety in XDM: system checks, antivirus, HTTPS and logins"
short_title: Safety and security
order: 60
kicker: Files and safety
description: "How XDM keeps downloads safe: files marked as coming from the internet so SmartScreen and Gatekeeper check them, antivirus scans, HTTPS certificate checks, and server and proxy logins including NTLM."
lead: "XDM saves files the same careful way your browser does, and lets you add your antivirus on top."
applies: XDM 9
---

## Files are marked as coming from the internet

**Settings → Advanced → Mark downloaded files as coming from the internet** is on by default, and we
recommend keeping it on.

With it on, your system treats files from XDM like files from your browser:

| System | What happens |
|---|---|
| **Windows** | SmartScreen checks programs before they run, and Office opens documents in Protected View. |
| **macOS** | Gatekeeper checks apps and installers when you first open them. |

Turn it off only if a tool you use can't handle the mark.

## Scan with your antivirus

XDM can pass every finished file to your antivirus. In **Settings → Advanced → Antivirus**, turn on **Scan downloads
with an antivirus**, then choose the scanner program and its parameters. See
[After-download actions](/guide/after-download-actions/#scan-downloads-with-your-antivirus) for examples.

## HTTPS certificate checks

XDM checks every HTTPS server's certificate, like a browser. If a download fails with *TLS connection error*, the
server's certificate couldn't be verified.

**Settings → Network → Ignore certificate errors** turns the checks off. XDM warns before you do, because downloaded
files could then be intercepted or replaced without you knowing. Use it only for a server you control, such as one
on your own network, and turn it back on afterwards.

## Server and proxy logins

When a server or a proxy asks for a user name and password, XDM asks you for them.

- **Basic** and **NTLM** logins are supported. NTLM is what Windows servers (IIS) and many company proxies use.
- Proxy settings, including the proxy login, are in **Settings → Network → Proxy**: no proxy, HTTP proxy or SOCKS
  proxy. See [Proxy and network settings](/guide/proxy-and-network/).

## Download only from the official site

XDM is free. Get it only from the [download page](/download/) or the official GitHub releases. Copies on other sites
may be outdated, bundled with adware or changed. For other software you download with XDM, you can
[verify the checksum](/wiki/verify-checksum/) the publisher provides.

## Privacy

The browser extension talks only to the XDM app on your own computer (`127.0.0.1`). XDM has no account, no
analytics and no tracking. See the [privacy policy](/privacy.html).
