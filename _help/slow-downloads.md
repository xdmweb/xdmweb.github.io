---
title: "Slow downloads in XDM: a step-by-step checklist"
short_title: Slow downloads
order: 4
kicker: Troubleshooting
description: "Why is my download slow? Check the speed limiter, connections per download, server limits, Wi-Fi, VPN and proxy, and how to get full speed from XDM."
lead: "XDM is usually much faster than a browser. When it isn't, the cause is almost always a setting, the server, or the network path."
related:
  - /guide/speed-up-downloads/
  - /guide/proxy-and-network/
  - /help/errors/network-error/
---

## Checklist

<ol class="steps-list">
  <li><strong>Is the speed limiter on?</strong> <span class="ui">Settings → Downloads → Limit download speed</span>.
      Turn it off or raise the value.</li>
  <li><strong>Too many downloads at once?</strong> Several downloads share your bandwidth. Lower
      <span class="ui">Simultaneous downloads</span> to 1–3.</li>
  <li><strong>Connections per download.</strong> Raise it (8 → 16) for servers that throttle each connection. Lower
      it if the server starts refusing connections.</li>
  <li><strong>Test the raw speed</strong> of your line with a speed test. XDM can't exceed it.</li>
  <li><strong>Try another mirror</strong> if the site offers several. Server load varies widely.</li>
  <li><strong>Wi-Fi, VPN, proxy.</strong> Move closer to the router or use a cable, and test without the VPN
      or proxy to compare.</li>
  <li><strong>Disk speed.</strong> Very fast connections can outrun slow USB sticks or network drives. Keep the
      temporary folder on an internal SSD.</li>
</ol>

## Why a download starts fast and then slows down

Some servers allow a burst at full speed, then throttle. Others limit total speed per user. More
connections help with the first kind, not the second. Then the speed you see is simply what the server
allows.

## Speed shows but nothing progresses

If the speed shows a value but the percentage doesn't move, the server may be sending errors or very
slowly. Pause and resume. If it repeats, see [Network error](/help/errors/network-error/).
