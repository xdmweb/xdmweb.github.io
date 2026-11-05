---
title: "Verify a download's checksum (MD5, SHA-1, SHA-256, SHA-512)"
short_title: Verify checksum
order: 20
kicker: Files and safety
description: "Check that a file downloaded with XDM is complete and untampered: verify it against the site's .sha256 file, SHA256SUMS or a pasted hash, right from XDM."
lead: "Many sites publish a checksum next to their downloads. XDM can fetch it and compare it with your file in one click."
applies: XDM 9
---

## Why verify

A checksum is a fingerprint of a file. If your copy has the same fingerprint as the one the site publishes, it's
complete and wasn't changed on the way. It's worth checking for operating system images (ISO files), installers and
anything you download from a mirror.

## Check a finished download

1. Open **Verify checksum** in the *Download complete* window. For an older download, open it from the download's
   **Properties**.
2. XDM fills in the most likely checksum address: the download link with `.sha256` added, for example
   `https://example.com/file.iso.sha256`.
3. Click **Verify**. XDM fetches the checksum, reads the file and shows **matches** or **doesn't match**, with the
   expected and actual values side by side.

With **Algorithm** set to *Auto*, XDM tries the common checksum files one after another:

| Tried | Example |
|---|---|
| Per-file checksum files | `file.iso.sha256`, `.sha512`, `.sha1`, `.md5` |
| The folder's checksum list | `SHA256SUMS`, as Ubuntu and Debian mirrors publish |

## Use a different checksum

- **Paste a link** to the site's checksum file, if it's somewhere else.
- **Paste the hash itself** if the site shows it as text. XDM recognises the algorithm from the hash's length.
- **Pick the algorithm** yourself (MD5, SHA-1, SHA-256 or SHA-512) if you know it.

XDM reads the usual checksum file formats: `sha256sum`-style lines (`<hash>  file.iso`) and BSD-style lines
(`SHA256 (file.iso) = <hash>`). In a file that lists many downloads, it finds the line for yours by name.

## If it doesn't match

- Download the file again. A mismatch usually means the download was corrupted or cut short.
- Make sure you're comparing with the checksum for the same version and edition of the file.
- If a fresh download still doesn't match, don't open the file. Get it from the official site instead of a mirror.

## Messages

| Message | Meaning |
|---|---|
| *No checksum file found next to the download.* | The site doesn't publish one at the usual places. Paste a link or the hash. |
| *No hash for this file in the checksum file.* | The checksum file lists other files, not yours. Check that it's for the right version. |
| *Couldn't fetch the checksum (HTTP 404).* | The checksum link is wrong or no longer there. |
| *The downloaded file is missing.* | The file was moved or deleted after the download. |
