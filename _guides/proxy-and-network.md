---
title: "Proxy, timeouts and network settings in XDM"
short_title: Proxy & network
order: 13
kicker: Settings & setup
description: "Configure XDM to work behind an HTTP or SOCKS proxy, set read timeouts for slow networks, and understand the certificate-checking security option."
lead: "XDM connects directly by default. Use these settings on networks with a proxy, or when connections stall."
applies: XDM 9
related:
  - /help/errors/network-error/
  - /help/errors/tls-error/
  - /guide/speed-up-downloads/
---

## Proxy

Open <span class="ui">Settings → Network</span>. Under <em>Proxy</em>, choose how XDM connects:

<figure>
  <img src="/assets/img/shots/settings-network.webp" alt="XDM Network settings with proxy options, read timeout and certificate check" width="1000" height="700" loading="lazy">
</figure>

| Option | Use when |
|---|---|
| **No Proxy** | Home networks and most connections (default). |
| **HTTP Proxy** | Your company, school or ISP requires a web proxy. |
| **Socks Proxy** | You use a SOCKS proxy, e.g. an SSH tunnel (`ssh -D`) or a privacy proxy. |

Enter the proxy **Host** and **Port**, plus a **Username** and **Password** if the proxy needs a login. If
the proxy asks for credentials during a download, XDM prompts for them.

<div class="callout callout--tip">
<p class="callout-title">Find your browser's proxy</p>
<p>If the browser works but XDM can't connect, copy the proxy settings from your system's network settings
(Windows: <em>Settings → Network &amp; internet → Proxy</em>; macOS: <em>System Settings → Network → Details →
Proxies</em>).</p>
</div>

## Timeouts

<span class="ui">Read timeout</span> is how long XDM waits for data on a connection before it gives up on it
and retries. On slow, mobile or satellite links, raise it to avoid needless reconnects. The number of
retries is set in <span class="ui">Settings → Downloads → Retries on failure</span>.

## Security: certificate checks

XDM verifies HTTPS certificates like your browser does. The
<span class="ui">Ignore certificate errors</span> switch turns this off for every download. Only use it
temporarily, on a network you trust. See [TLS connection error](/help/errors/tls-error/) for safer fixes.

## Website logins

If a site asks for a user name and password (HTTP authentication), XDM shows an *Authorization required*
prompt and uses the details for that download.
