---
title: "How to speed up downloads in XDM (and limit speed)"
short_title: Speed up downloads
order: 10
kicker: Power features
description: "Get the most out of your connection: how XDM's segmented downloading works, choosing connections per download, simultaneous downloads, retries, and the speed limiter."
lead: "XDM splits each file into segments and downloads them in parallel, often several times faster than a browser. Here's how to tune it."
applies: XDM 9
related:
  - /help/slow-downloads/
  - /guide/schedule-downloads/
  - /guide/proxy-and-network/
---

## How XDM accelerates downloads

A browser downloads a file over one connection. Many servers limit the speed of each connection, so a
single stream rarely uses your full bandwidth. XDM opens **several connections to the same file**, each
fetching a different segment. When a segment finishes early, XDM splits the largest remaining piece and
puts the free connection to work on it, so all connections stay busy until the very end.

That's why XDM can be up to 5× faster on servers that throttle per connection. On servers that don't, it
still uses your full bandwidth and resumes after interruptions.

## Settings that matter

All in <span class="ui">Settings → Downloads</span>:

| Setting | What it does | Recommendation |
|---|---|---|
| **Connections per download** | How many parallel connections (segments) each download uses. | 8 is a good default. Try 16 on fast lines; use 2–4 if a server refuses or errors. |
| **Simultaneous downloads** | How many downloads run at the same time (default 1). | 1–3. Parallel downloads split your bandwidth anyway. |
| **Retries on failure** | How often a broken connection is retried before the download fails (default 5). | Raise it on unstable networks. |

You can also change the segment count per download in the New download window.

## Limit the speed

To keep browsing or video calls smooth while downloading, turn on
<span class="ui">Settings → Downloads → Limit download speed</span> and set a maximum in KB/s. The limit
applies to all downloads together. For example, on a 50 Mbit/s line (~6,000 KB/s), a limit of 4,000
KB/s leaves room for everything else.

## If downloads are still slow

- Test your connection speed in the browser first. XDM can't exceed your line.
- Some servers only allow one connection. They show "resume not supported" or ignore segments.
- Wi-Fi far from the router, VPNs and proxies all reduce throughput.
- Try a different mirror if the site offers one.

See the full [slow downloads checklist](/help/slow-downloads/).
