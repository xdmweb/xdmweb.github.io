---
layout: article-plain
title: XDM Wiki
seo_title: "XDM Wiki: Every Xtreme Download Manager Feature and How to Use It"
description: "The Xtreme Download Manager wiki: every XDM 9 feature explained, from faster downloads and the browser extension to video and subtitle downloads, batch and bulk downloads, scheduling, checksums and the command line."
lead: "Every XDM 9 feature in one place: what it does, and where to learn how to use it."
---

{% include star-cta.html %}

New to XDM? Start with [installing it](/download/) and [your first download](/guide/first-download/). Stuck on an
error? The [help center](/help/) has a fix for each message.

## Watch

{% include video-cards.html %}

## Getting started

| Feature | What it does | How to |
|---|---|---|
| Install | Windows (x64 and ARM64), macOS (Apple Silicon and Intel) and Linux packages | [Windows](/guide/install-windows/) · [macOS](/guide/install-macos/) · [Linux](/guide/install-linux/) |
| Browser extension | Chrome, Firefox, Edge, Brave and other browsers hand their downloads and videos to XDM | [Install the extension](/guide/browser-extension/) |
| Three ways to download | From the browser, by pasting a link, or from the clipboard | [Your first download](/guide/first-download/) |
| Updates | XDM tells you when a new version is out; moving from XDM 8 | [Update and migrate](/guide/update-and-migrate/) |

## Faster, safer downloads

| Feature | What it does | How to |
|---|---|---|
| Multi-connection downloads | Splits each file across several connections to use all your bandwidth | [Speed up downloads](/guide/speed-up-downloads/) |
| Speed limit | Caps the total download speed so the rest of your internet stays usable | [Speed up downloads](/guide/speed-up-downloads/) |
| Resume | Picks up after network drops, crashes or power loss | [Resume a broken download](/help/resume-broken-download/) |
| Refresh link | Gives a download with an expired link a fresh one, without starting over | [Refresh link](/guide/refresh-link/) |
| Straight to the final file | No temporary copy and no slow assembling step at the end | [Files and disk space](/wiki/files-and-disk-space/) |
| Disk errors keep progress | A full disk or a missing drive stops the download and keeps what's done | [Files and disk space](/wiki/files-and-disk-space/#a-full-disk-never-restarts-a-download) |
| Checksum verification | Compares a finished file with the site's MD5, SHA-1, SHA-256 or SHA-512 | [Verify checksum](/wiki/verify-checksum/) |
| System safety checks | Marks files as coming from the internet for SmartScreen and Gatekeeper | [Safety and security](/wiki/safety-and-security/) |
| Antivirus scan | Passes each finished file to your antivirus | [After-download actions](/guide/after-download-actions/) |
| Proxies and logins | HTTP and SOCKS proxies, Basic and NTLM logins for servers and proxies | [Proxy and network](/guide/proxy-and-network/) · [Safety](/wiki/safety-and-security/#server-and-proxy-logins) |

## Video

| Feature | What it does | How to |
|---|---|---|
| Video grabber | Detects the video you're watching and offers each quality | [Download videos](/guide/download-streaming-video/) |
| HLS and DASH | Saves `.m3u8` and `.mpd` streams as MP4, with no extra tools to install | [Download a stream by URL](/guide/download-hls-dash-stream/) |
| Quality and audio track | Pick the resolution and the audio language | [Download videos](/guide/download-streaming-video/#getting-the-quality-you-want) |
| Subtitles | Saves subtitles beside the video as SRT, timed to match | [Subtitles](/wiki/subtitles/) |
| Social media profiles | Saves a profile's videos and images in one go, video and audio merged | [Download all from a page](/wiki/download-all-from-page/#social-media-profiles) |
| Video not showing up? | What to check when XDM doesn't offer a video | [Video not detected](/help/video-not-detected/) |

## Many files at once

| Feature | What it does | How to |
|---|---|---|
| Download all from a page | Right-click → *Download all with XDM* and pick files by type, size or name | [Download all from a page](/wiki/download-all-from-page/) |
| Batch download | Paste a list of links and save them as one batch or one download each | [Batch download](/guide/batch-download/) |
| Queue and simultaneous downloads | Decide how many run at once; the rest wait their turn | [Schedule downloads](/guide/schedule-downloads/) |
| Scheduler | Start and stop downloads at a set time, once or weekly | [Schedule downloads](/guide/schedule-downloads/) |

## Organize

| Feature | What it does | How to |
|---|---|---|
| Categories | Rules that sort downloads into folders by type, address or name | [Folders and categories](/guide/categories-and-folders/) |
| Download list | Sort, pause, resume, restart, change folder, properties, clean up | [Download list](/wiki/download-list/) |
| Duplicate check | Warns before downloading a file that's already in your list | [Download list](/wiki/download-list/#duplicate-downloads) |
| After downloads finish | Notification, sound, run a command, keep awake, shut down | [After-download actions](/guide/after-download-actions/) |

## Make it yours

| Feature | What it does | How to |
|---|---|---|
| Theme and size | Light, dark or system theme, and a bigger or smaller interface | [Look and language](/wiki/appearance-and-language/) |
| Language | XDM in your language, or your own translation files | [Look and language](/wiki/appearance-and-language/#language) |
| Launch at login | Starts XDM in the background when you sign in | [Settings explained](/guide/settings-overview/#advanced) |
| Every setting | What each option in Settings does | [Settings explained](/guide/settings-overview/) |

## For power users

| Feature | What it does | How to |
|---|---|---|
| Command line | `xdm-app --headless` downloads files and streams from a terminal or script | [Command line](/wiki/command-line/) |

## All wiki pages

{%- assign wiki = site.wiki | sort: "order" %}
{% for w in wiki -%}
- [{{ w.short_title | default: w.title }}]({{ w.url }}): {{ w.description }}
{% endfor %}

