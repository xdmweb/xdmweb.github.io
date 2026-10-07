---
title: "XDM “Network error”: causes and fixes"
short_title: Network error
order: 2
description: "Fix the XDM Network error: check your connection, proxy, VPN and firewall, lower connections per download, raise timeouts and resume without losing progress."
error_text: "Network error."
lead: "XDM could not connect to the server, or the connection dropped and every retry failed. Your downloaded data is kept, and in most cases you can simply resume."
applies: XDM 8 and 9
related:
  - /help/slow-downloads/
  - /guide/proxy-and-network/
  - /help/antivirus-and-firewall/
howto:
  - "Check that the website opens in your browser."
  - "Resume the download in XDM."
  - "If it fails again, check proxy and VPN settings in Settings → Network."
  - "Lower Connections per download and raise the timeout."
  - "Allow XDM through your firewall or antivirus."
---

## What this error means

XDM tried to reach the server several times (the number is set by <span class="ui">Retries on failure</span>)
and every attempt failed at the network level: the server couldn't be reached, the connection was
refused or reset, or no data arrived before the timeout. This is different from the server answering
with an error page. Here, no usable answer came back at all.

Everything downloaded before the failure is kept. Once the connection works again, **Resume** continues
where it stopped.

## Quick fixes

<ol class="steps-list">
  <li><strong>Open the site in your browser.</strong> If the site doesn't load there either, the server or
      your internet connection is down. Wait and resume later.</li>
  <li><strong>Resume the download.</strong> Short outages (Wi-Fi drop, router restart, a laptop waking from
      sleep) are the most common cause. Select the download and click <span class="ui">Resume</span>.</li>
  <li><strong>Check proxy and VPN.</strong> If you use a proxy, make sure XDM uses the same one as your
      browser: <span class="ui">Settings → Network</span>. If a VPN just connected or disconnected, resume once it's stable.</li>
  <li><strong>Lower the connection count.</strong> Some servers drop clients that open many parallel
      connections. In <span class="ui">Settings → Downloads</span>, lower
      <span class="ui">Connections per download</span> (for example from 8 to 2–4).</li>
  <li><strong>Raise the timeout.</strong> On slow or congested networks, increase the
      <span class="ui">Read timeout</span> in <span class="ui">Settings → Network</span> so stalled
      connections get more time before XDM retries them.</li>
  <li><strong>Allow XDM through your firewall.</strong> Security software sometimes blocks new
      programs from the internet. See <a href="/help/antivirus-and-firewall/">antivirus and firewall</a>.</li>
</ol>

## Common causes at a glance

| Cause | Sign | Fix |
|---|---|---|
| Internet connection dropped | Other apps are offline too | Reconnect, then resume |
| Server is overloaded or down | Site is slow or doesn't open in the browser | Try again later |
| Too many connections | Fails quickly at the start, works with fewer | Lower connections per download |
| Proxy required but not set | Browser works, XDM fails immediately | Configure the proxy in Settings → Network |
| Firewall or antivirus blocking | Every download fails | Allow XDM in the security software |
| DNS problems | Some sites fail, others work | Restart router or switch DNS provider |

<div class="callout callout--note">
<p class="callout-title">Corporate and school networks</p>
<p>Managed networks often route traffic through a proxy with authentication. Ask your administrator for the
proxy address (or the auto-configuration URL) and enter it in <span class="ui">Settings → Network</span>.</p>
</div>
