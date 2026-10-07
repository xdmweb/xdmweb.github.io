---
title: "Schedule downloads and limit how many run at once"
short_title: Schedule downloads
order: 9
kicker: Power features
description: "Schedule XDM downloads to start and stop at set times (once or weekly), queue downloads with Download Later, and control how many downloads run simultaneously."
lead: "Download overnight, during off-peak hours, or one file at a time. XDM's scheduler starts and stops downloads for you."
applies: XDM 9
related:
  - /guide/speed-up-downloads/
  - /guide/after-download-actions/
  - /guide/batch-download/
howto:
  - "Add the download with Download Later (or pause a running download)."
  - "Right-click the download and choose Schedule."
  - "Choose One-time or Weekly and set the start date/time or days."
  - "Optionally tick Stop the download at and set a stop time."
  - "Click Schedule; XDM starts and stops the download at those times."
---

## Run downloads one by one

<span class="ui">Settings → Downloads → Simultaneous downloads</span> sets how many downloads run at the same
time. The rest wait in line and start automatically as others finish. The default is **1**, so files download
strictly one after another. Raise it to run several downloads in parallel.

## Schedule a download

<ol class="steps-list">
  <li><strong>Add the download without starting it</strong>: click <span class="ui">Download Later</span> in the New
      download window and answer <span class="ui">Yes</span> to <em>“Do you want to schedule this download?”</em>.
      For a download that's already in the list, pause it, then right-click it → <span class="ui">Schedule</span>.</li>
  <li><strong>Choose the type</strong>:
    <ul>
      <li><span class="ui">One-time</span>: pick a date and time.</li>
      <li><span class="ui">Weekly</span>: pick a time and the days to repeat on.</li>
    </ul>
  </li>
  <li><strong>Optional: a stop time.</strong> Tick <span class="ui">Stop the download at</span> and choose when to
      pause it, for example when your off-peak data window ends. A one-time schedule can stop on a later
      date, so a download can run across midnight.</li>
  <li>Click <span class="ui">Schedule</span>.</li>
</ol>

<figure>
  <img src="/assets/img/shots/scheduler.webp" alt="XDM schedule window with start and stop time" width="700" height="625" loading="lazy">
</figure>

### How start and stop behave

- **Start** works like pressing Resume: the download joins the line and begins when a slot is free.
- **Stop** works like Pause, not cancel: everything downloaded is kept, and the next scheduled start (or
  you) continues from there.
- XDM must be running at the scheduled time. Turn on <span class="ui">Settings → Advanced → Launch at
  login</span> so it's always there.

## Overnight downloads

Combine the scheduler with these options in <span class="ui">Settings → Advanced</span>:

- **Keep the computer awake**: blocks sleep while a download is running.
- **Shut down when downloads finish**: turns the computer off once everything is done.

More in [Automate what happens after downloads](/guide/after-download-actions/).
