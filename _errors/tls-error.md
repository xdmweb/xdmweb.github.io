---
title: "XDM “TLS connection error”: HTTPS certificate problems"
short_title: TLS connection error
order: 7
description: "Fix the XDM TLS connection error: check your system clock, antivirus HTTPS scanning, proxies and corporate certificates, and when (not) to ignore certificate errors."
error_text: "TLS connection error."
lead: "The secure HTTPS connection couldn't be set up, because the server's certificate couldn't be verified or the encrypted handshake failed."
applies: XDM 8 and 9
related:
  - /help/antivirus-and-firewall/
  - /guide/proxy-and-network/
  - /help/errors/network-error/
---

## What this error means

XDM checks every HTTPS server's certificate, the same way your browser does, to make sure you're
really talking to that site and the file can't be swapped in transit. A TLS error means that check failed
or the two sides couldn't agree on encryption.

## Common causes and fixes

<ol class="steps-list">
  <li><strong>Your computer's date and time are wrong.</strong> Certificates are only valid between two dates.
      Turn on automatic date and time in your system settings.</li>
  <li><strong>Antivirus HTTPS scanning.</strong> Some security suites intercept HTTPS traffic with their own
      certificate. Browsers trust it, but other apps may not. Add XDM to the product's exclusions, or turn off
      “HTTPS scanning” / “SSL inspection” for XDM.</li>
  <li><strong>Corporate or school network.</strong> Managed networks often inspect HTTPS with a company
      certificate. Ask IT whether the certificate is installed system-wide.</li>
  <li><strong>The site's certificate really is broken</strong> (expired, wrong host name, self-signed). Your
      browser shows a warning for it too. Contact the site owner.</li>
</ol>

## About “Ignore certificate errors”

<span class="ui">Settings → Network</span> has an <span class="ui">Ignore certificate errors</span> option.
It turns off certificate and host-name checks for **all** downloads.

<div class="callout callout--warn">
<p class="callout-title">Use it only temporarily, and only if you trust the network</p>
<p>With verification off, anyone between you and the server could read or replace the file you download,
including installers and other programs. Prefer fixing the cause above, and switch the option back off
as soon as the download finishes.</p>
</div>
