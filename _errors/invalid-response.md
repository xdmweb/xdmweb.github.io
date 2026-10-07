---
title: "“Server sent invalid response” in XDM: what to do"
short_title: Invalid response
order: 3
description: "XDM reports that the server sent an invalid response. Understand HTTP errors like 404, 403 and 500, why web pages are returned instead of files, and how to fix it."
error_text: "Server sent invalid response."
lead: "The server answered, but not with the file XDM asked for. Usually it sent an error code or an HTML page instead of the download."
applies: XDM 8 and 9
related:
  - /help/errors/link-expired/
  - /guide/refresh-link/
  - /help/browser-not-capturing/
---

## What this error means

XDM requested the file and received an answer it can't use: an HTTP error status (such as **404 Not
Found** or **500 Internal Server Error**), a response with the wrong size, or a web page where the file
should be. Rather than saving an error page under your file's name, XDM stops and reports the problem.

## Typical reasons

- **The file was moved or deleted** (404). The link on the page is out of date.
- **The site needs you to be logged in or to pass a check** first. When XDM requests the link without the
  right cookies, the site returns a login or captcha page.
- **The link was copied by hand from a page that builds links with scripts**, so the address alone isn't
  enough.
- **A temporary server fault** (500, 502, 503). The server is overloaded.
- **The server answered a resumed request differently** than the first time, for example a different file
  size after the file was updated on the server.

## How to fix it

<ol class="steps-list">
  <li><strong>Start the download from the browser</strong> instead of pasting the link. With the
      <a href="/guide/browser-extension/">XDM extension</a> installed, XDM receives the cookies and headers the
      site expects.</li>
  <li><strong>Sign in to the website</strong> in your browser, then download again or use
      <a href="/guide/refresh-link/">Refresh link</a> on the failed download.</li>
  <li><strong>Check the link in the browser.</strong> Right-click the download, choose
      <span class="ui">Copy URL</span> and open it in the browser. If you get an error page there too, the file
      isn't available.</li>
  <li><strong>Wait and retry</strong> for 5xx server errors. Then resume the download in XDM.</li>
  <li><strong>If the file changed on the server</strong>, a partially downloaded copy can't be combined with
      the new version. Delete the download and start it again.</li>
</ol>

<div class="callout callout--tip">
<p class="callout-title">Check the Properties</p>
<p>Right-click the download and open <span class="ui">Properties</span> to see the URL, the web page it came
from, and the request headers XDM recorded. That's useful when you ask for help on the forum.</p>
</div>
