---
title: "Automate what happens after downloads finish"
short_title: After-download actions
order: 15
kicker: Power features
description: "Make XDM notify you, scan files with your antivirus, run a script, keep the computer awake or shut it down when downloads finish."
lead: "Let XDM take care of the rest: scan, notify, run a script or shut down when everything is downloaded."
applies: XDM 9
related:
  - /guide/schedule-downloads/
  - /help/antivirus-and-firewall/
  - /guide/settings-overview/
---

## Get notified

<span class="ui">Settings → General → Notify me with</span>:

<figure>
  <img src="/assets/img/shots/download-complete.webp" alt="XDM Download Complete dialog" width="650" height="500" loading="lazy">
</figure>

- **Dialog**: a *Download Complete* window with <span class="ui">Open</span> and <span class="ui">Open folder</span> buttons.
- **Notification**: a system notification (Windows toast, macOS banner, Linux desktop notification).
- **Nothing**: silent.

## Scan downloads with your antivirus

<ol class="steps-list">
  <li>Open <span class="ui">Settings → Advanced</span> and turn on <span class="ui">Scan downloads with an antivirus</span>.</li>
  <li>Set <strong>Antivirus executable</strong> to your scanner's command-line program.</li>
  <li>Set <strong>Parameter</strong> to its arguments. Each finished file is passed to the scanner.</li>
</ol>

Examples of command-line scanners:

| Scanner | Executable | Typical parameters |
|---|---|---|
| Microsoft Defender (Windows) | `C:\Program Files\Windows Defender\MpCmdRun.exe` | `-Scan -ScanType 3 -File` |
| ClamAV (Linux, macOS) | `/usr/bin/clamscan` | `--no-summary` |

Also keep <span class="ui">Mark downloaded files as coming from the internet</span> on, so Windows SmartScreen
and Office Protected View check files when you open them, just as for browser downloads.

## Run a command when downloads finish

Turn on <span class="ui">Run a command when downloads finish</span> and enter a command. XDM runs it for a
completed download and passes the file's path: put <code>%file%</code> where the path should go, otherwise it's
added at the end. Use it to move files to a NAS, unpack archives or start a backup. For example:

```
/usr/local/bin/my-script.sh --input %file%
```

## Keep awake and shut down

- **Keep the computer awake** blocks sleep and hibernation while a download is running, then lets the
  computer sleep normally.
- **Shut down when downloads finish** turns the computer off once the whole queue is done. Ideal with a
  [scheduled overnight download](/guide/schedule-downloads/).

<div class="callout callout--warn">
<p class="callout-title">Save your work</p>
<p>Shut down closes everything. Don't leave unsaved documents open when it's enabled.</p>
</div>
