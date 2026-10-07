---
title: "How to resume a broken or interrupted download"
short_title: Resume broken downloads
order: 5
kicker: Troubleshooting
description: "Resume interrupted XDM downloads after a crash, power cut, lost connection or sleep, and what to do when resuming fails: expired links, sessions and servers without resume."
lead: "XDM saves progress continuously. After a crash, power cut or lost connection, you can usually just press Resume."
related:
  - /guide/refresh-link/
  - /help/errors/link-expired/
  - /help/errors/resume-not-supported/
---

## The normal case

Open XDM, select the download in the **Incomplete** list, and click resume. XDM checks what's already on
disk and fetches only the rest.

## If resuming fails

| Message | What it means | Fix |
|---|---|---|
| [The download link has expired](/help/errors/link-expired/) | The server stopped accepting the old link | Refresh link |
| [Session expired](/help/errors/session-expired/) | The site's session for this download ended | Sign in, then Refresh link |
| [Server does not support resume](/help/errors/resume-not-supported/) | The server can't send partial files | Download again from the start |
| [Network error](/help/errors/network-error/) | Still no connection | Check the network, then resume |
| [Disk error](/help/errors/disk-error/) | The temporary folder's drive is full or missing | Free space or reconnect the drive |

## Prevent interruptions

- Turn on <span class="ui">Settings → Advanced → Keep the computer awake</span>, so sleep doesn't cut downloads.
- Raise <span class="ui">Retries on failure</span> on unstable connections. XDM retries silently before giving up.
- For links that expire, start large downloads right away rather than using *Download Later*.
