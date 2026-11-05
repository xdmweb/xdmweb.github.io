---
title: "XDM command line: download from a terminal or script"
short_title: Command line
order: 10
kicker: Power features
description: "Use xdm-app --headless to download HTTP files, HLS (.m3u8) and DASH (.mpd) streams from a terminal, script or scheduled task. Every option, with examples."
lead: "XDM 9 can download without opening its window. Give it a folder and one or more links, and it saves the files and exits."
applies: XDM 9
---

## When to use it

- In scripts, cron jobs and scheduled tasks, where nobody is there to click.
- On a server or a remote machine over SSH.
- To grab one stream at a chosen quality without opening the app.

Command-line mode is separate from the app. It doesn't use your download list, categories or browser integration,
and it can run while the XDM window is open.

## Basic use

```
xdm-app --headless -o <folder> [options] <url>...
```

`--no-gui` works the same as `--headless`. Links are downloaded one after another, and each saved file's path is
printed on its own line.

| Platform | Program to run |
|---|---|
| Windows | `xdm-app.exe` in the XDM install folder |
| macOS | `/Applications/xdm-app.app/Contents/MacOS/xdm-app` |
| Linux | `xdm-app` |

Run `xdm-app --headless --help` to see every option.

## Examples

Download a file into your Downloads folder:

```
xdm-app --headless -o ~/Downloads https://example.com/file.zip
```

Save an HLS stream at 720p, or the closest lower quality:

```
xdm-app --headless -o ~/Videos -q 720p https://example.com/video/master.m3u8
```

List the formats of a stream, then pick one by number:

```
xdm-app --headless -o ~/Videos -l https://example.com/stream.mpd
xdm-app --headless -o ~/Videos --format 3 https://example.com/stream.mpd
```

Download behind a login cookie and a referer:

```
xdm-app --headless -o . -c "session=abc123" -r https://example.com/page https://example.com/files/report.pdf
```

## All options

### Required

| Option | What it does |
|---|---|
| `-o`, `--output-dir <folder>` | Folder to save into. It's created if missing. |

### Stream selection

| Option | What it does |
|---|---|
| `-t`, `--type <auto\|http\|hls\|dash>` | How to treat the link. `auto` (default) treats `.m3u8` as HLS and `.mpd` as DASH. |
| `-q`, `--quality <q>` | `best` (default), `worst`, `audio`, or a height such as `1080p` or `720`. Without an exact match, XDM takes the nearest lower height. |
| `--format <n>` | Format number `n`, as shown by `--list-formats`. |
| `-a`, `--audio <text>` | Audio track whose name or language contains the text, for example `-a English`. |
| `-l`, `--list-formats` | List the formats of a stream and exit. |

### Output

| Option | What it does |
|---|---|
| `-f`, `--file-name <name>` | File name to save as. Works with one link only. By default the name comes from the server or the link. |
| `-y`, `--overwrite` | Replace a file of the same name. By default XDM saves as `name_1.ext`. |

### Network

| Option | What it does |
|---|---|
| `-s`, `--segments <n>` | Connections per download (default 8). |
| `--speed-limit <KB/s>` | Limit the download speed. |
| `-H`, `--header "Name: value"` | Extra request header. Repeat it for more headers. |
| `-c`, `--cookie <cookies>` | Cookie header value, for example `"a=1; b=2"`. |
| `-r`, `--referer <url>` | Referer header. |
| `-A`, `--user-agent <ua>` | User-Agent header. The default is a desktop Chrome browser. |
| `-u`, `--user <user[:pass]>` | Server login (Basic or NTLM). |
| `-p`, `--password <pass>` | Server password. |
| `--proxy <url>` | `http://host:port` or `socks5://host:port`. |
| `--proxy-user`, `--proxy-password` | Proxy login. |
| `-k`, `--insecure` | Don't verify TLS certificates. Use only for servers you trust. |

### Other

| Option | What it does |
|---|---|
| `--quiet` | No progress output. The saved paths are still printed. |
| `-v`, `--verbose` | Show the download engine's log. |
| `-h`, `--help` | Show the help. |

## Output and exit codes

- **Saved paths** go to standard output, one per line, so a script can read them.
- **Progress and errors** go to standard error. In a terminal it's one updating line. When the output is redirected
  to a file or a pipe, XDM writes a plain line at every 10%.
- **Exit code** `0` means every file was saved, `1` means at least one failed, `2` means the command line was wrong.

If a server asks for a password and none was given, XDM asks in the terminal. In a script with no terminal, the
download fails instead of waiting, so pass `-u` and `-p`.

## Good to know

- Downloads don't resume across runs. If you stop one with Ctrl+C, its partial file is deleted.
- On Windows, in an interactive Command Prompt, use `start "" /wait /b xdm-app.exe --headless …` so the prompt waits
  for the download to finish. Batch files and PowerShell wait on their own.
- To download many links into the app instead, with resume and a list you can come back to, use
  [batch download](/guide/batch-download/).
