(function () {
  "use strict";
  var root = document.documentElement;

  /* Theme toggle: flips between light and dark, remembering the choice when storage is available. */
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("xdm-theme", next); } catch (e) {}
    });
  }

  /* Mobile menu. */
  var navBtn = document.querySelector(".nav-toggle");
  if (navBtn) {
    navBtn.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        navBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Table of contents built from the article's h2/h3, with the current section highlighted. */
  var toc = document.getElementById("toc");
  var article = document.getElementById("article");
  if (toc && article) {
    var heads = article.querySelectorAll(":scope > h2, :scope > h3");
    var links = [];
    heads.forEach(function (h) {
      if (!h.id) return;
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      a.className = "lvl-" + h.tagName.substring(1);
      toc.appendChild(a);
      links.push({ a: a, h: h });
    });
    if (!links.length) {
      var card = toc.closest(".toc-card");
      if (card) card.style.display = "none";
    } else if ("IntersectionObserver" in window) {
      var active = null;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var hit = links.filter(function (l) { return l.h === en.target; })[0];
            if (hit) {
              if (active) active.classList.remove("active");
              active = hit.a;
              active.classList.add("active");
            }
          }
        });
      }, { rootMargin: "-80px 0px -70% 0px" });
      links.forEach(function (l) { io.observe(l.h); });
    }
  }

  /* Fade-in on scroll. */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Filter for hub pages: hides cards whose text does not match. */
  var filter = document.querySelector("[data-filter]");
  if (filter) {
    var items = document.querySelectorAll("[data-filter-item]");
    var empty = document.querySelector(".no-results");
    filter.addEventListener("input", function () {
      var q = filter.value.trim().toLowerCase();
      var visible = 0;
      items.forEach(function (it) {
        var match = !q || it.textContent.toLowerCase().indexOf(q) !== -1;
        it.style.display = match ? "" : "none";
        if (match) visible++;
      });
      document.querySelectorAll("[data-filter-group]").forEach(function (g) {
        var any = g.querySelectorAll("[data-filter-item]:not([style*='none'])").length > 0;
        g.style.display = any ? "" : "none";
      });
      if (empty) empty.style.display = visible ? "none" : "block";
    });
  }

  /* ---------- Visitor's system: OS, processor and browser (best effort, never required) ---------- */
  function detectBrowser() {
    var ua = navigator.userAgent;
    if (navigator.brave) return "brave";
    if (/Edg\//.test(ua)) return "edge";
    if (/OPR\/|Opera|Vivaldi|YaBrowser/.test(ua)) return "chromium";
    if (/Firefox\//.test(ua)) return "firefox";
    if (/Chrome\//.test(ua)) return "chrome";
    return null;
  }

  function detectSystem() {
    var ua = navigator.userAgent, p = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
    var os = null;
    if (/Android|iPhone|iPad|iPod/.test(ua)) os = null;
    else if (/Win/i.test(p) || /Windows/.test(ua)) os = "windows";
    else if (/Mac/i.test(p) || /Mac OS X/.test(ua)) os = "macos";
    else if (/Linux|X11|CrOS/i.test(p + ua)) os = "linux";
    var guess = { os: os, arch: /aarch64|arm64/i.test(ua) ? "arm64" : "x64" };
    if (os === "macos") {
      // Safari reports Intel even on Apple silicon; the GPU name tells them apart.
      try {
        var gl = document.createElement("canvas").getContext("webgl");
        var ext = gl && gl.getExtension("WEBGL_debug_renderer_info");
        var r = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "";
        guess.arch = /Intel|AMD|Radeon|NVIDIA/i.test(r) ? "x64" : "arm64";
      } catch (e) { guess.arch = "arm64"; }
    }
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      return navigator.userAgentData.getHighEntropyValues(["architecture"]).then(function (v) {
        if (v.architecture === "arm") guess.arch = "arm64";
        else if (v.architecture === "x86") guess.arch = "x64";
        return guess;
      }, function () { return guess; });
    }
    return Promise.resolve(guess);
  }

  var OS_NAMES = { windows: "Windows", macos: "macOS", linux: "Linux" };
  var ARCH_NAMES = {
    windows: { x64: "64-bit (x64)", arm64: "ARM64" },
    macos: { x64: "Intel", arm64: "Apple silicon" },
    linux: { x64: "x86-64", arm64: "ARM64" }
  };

  // Highlight the visitor's browser on the "connect your browser" cards.
  var myBrowser = detectBrowser();
  if (myBrowser) {
    document.querySelectorAll('.browser-card[data-browser="' + myBrowser + '"]').forEach(function (c) {
      c.classList.add("is-yours");
      var tag = c.querySelector(".browser-yours");
      if (tag) tag.hidden = false;
    });
  }

  detectSystem().then(function (sys) {
    // Download hub: recommend the visitor's platform.
    var det = document.querySelector("[data-detected]");
    if (det && sys.os) {
      det.href = "/download/" + sys.os + "/#" + sys.arch;
      det.querySelector("[data-detected-name]").textContent = "XDM for " + OS_NAMES[sys.os];
      det.querySelector("[data-detected-arch]").textContent = ARCH_NAMES[sys.os][sys.arch] + " detected";
      det.hidden = false;
      var card = document.querySelector('[data-os-card="' + sys.os + '"]');
      if (card) card.classList.add("is-detected");
    }

    // Per-OS page: architecture tabs.
    var panel = document.querySelector(".dl-panel[data-os]");
    if (panel) {
      var tabs = panel.querySelectorAll(".arch-tab");
      var select = function (arch) {
        var found = false;
        tabs.forEach(function (t) {
          var on = t.getAttribute("data-arch") === arch;
          t.setAttribute("aria-selected", on ? "true" : "false");
          found = found || on;
        });
        panel.querySelectorAll(".arch-panel").forEach(function (pn) {
          pn.classList.toggle("is-active", pn.getAttribute("data-arch") === arch);
        });
        return found;
      };
      tabs.forEach(function (t) {
        t.addEventListener("click", function () {
          var a = t.getAttribute("data-arch");
          select(a);
          try { history.replaceState(null, "", "#" + a); } catch (e) {}
        });
      });
      var mine = panel.getAttribute("data-os") === sys.os ? sys.arch : null;
      if (mine) {
        var badge = panel.querySelector('.arch-tab[data-arch="' + mine + '"] .arch-detected');
        if (badge) badge.hidden = false;
      }
      var wanted = location.hash.replace("#", "");
      if (!select(wanted)) if (!select(mine)) select(tabs[0] && tabs[0].getAttribute("data-arch"));
    }
  });

  // "Download is starting" page: start the chosen file, then offer a direct link as fallback.
  var files = document.getElementById("dl-files");
  if (files) {
    var map = {};
    try { map = JSON.parse(files.textContent); } catch (e) {}
    var id = new URLSearchParams(location.search).get("f");
    var file = id && Object.prototype.hasOwnProperty.call(map, id) ? map[id] : null;
    var status = document.querySelector("[data-dl-status]");
    if (!file) {
      document.querySelector("[data-dl-title]").textContent = "Choose a file to download";
      document.querySelector("[data-dl-detail]").textContent = "";
      document.querySelector("[data-dl-missing]").hidden = false;
      status.classList.add("is-done");
    } else {
      document.querySelector("[data-dl-detail]").textContent = file.release + " · " + file.arch + " · " + file.name;
      var link = document.querySelector("[data-dl-link]");
      link.href = file.url;
      setTimeout(function () {
        window.location.href = file.url;
        document.querySelector("[data-dl-title]").textContent = "Your download has started";
        document.querySelector("[data-dl-fallback]").hidden = false;
        status.classList.add("is-done");
        if (typeof gtag === "function") gtag("event", "file_download", { file_name: file.name, link_url: file.url });
      }, 800);
    }
  }

  // Extension page: warn when it is open in another browser; after the store opens, point at the next steps.
  var ext = document.querySelector("[data-ext-browser]");
  if (ext) {
    var want = ext.getAttribute("data-ext-browser");
    var note = ext.querySelector("[data-ext-mismatch]");
    var names = { chrome: "Chrome", edge: "Edge", firefox: "Firefox", brave: "Brave", chromium: "another Chromium browser" };
    var mismatch = myBrowser && myBrowser !== want &&
      !(want === "chromium" && myBrowser !== "firefox") && !(want === "chrome" && myBrowser === "chromium");
    if (mismatch && note) {
      note.innerHTML = "You're viewing this page in " + names[myBrowser] + ". The extension installs into the browser " +
        "you open the store in. <a href=\"/extension/" + myBrowser + "/\">Install for " + names[myBrowser] + " instead</a>.";
      note.hidden = false;
    } else if (!myBrowser && note) {
      note.textContent = "This browser isn't supported by the XDM extension. Open this page in Chrome, Edge, Firefox or Brave.";
      note.hidden = false;
    }
    var store = ext.querySelector("[data-store-link]");
    var next = document.querySelector("[data-ext-next]");
    if (store && next) {
      store.addEventListener("click", function () {
        if (typeof gtag === "function") gtag("event", "extension_store_click", { browser: want });
        setTimeout(function () {
          next.classList.add("is-highlighted");
          next.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      });
    }
  }

  /* ---------- Motion helpers ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Stagger: each revealed item inside a grid gets its position, used as a transition delay.
  document.querySelectorAll(".card-grid, .steps, .stats, .browser-cards, .os-picker").forEach(function (grid) {
    var i = 0;
    Array.prototype.forEach.call(grid.children, function (c) {
      if (c.classList.contains("reveal")) c.style.setProperty("--i", i++);
    });
  });

  // Cursor-following glow on cards.
  if (!reduceMotion) {
    document.addEventListener("pointermove", function (e) {
      var card = e.target.closest && e.target.closest(".card--link");
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
  }

  // Hero screenshot: subtle 3D tilt toward the pointer.
  var heroShot = document.querySelector(".hero-shot");
  if (heroShot && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    var raf = 0;
    document.querySelector(".hero").addEventListener("pointermove", function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        var x = e.clientX / window.innerWidth - .5, y = e.clientY / window.innerHeight - .5;
        heroShot.style.transform = "perspective(1800px) rotateY(" + (x * 5) + "deg) rotateX(" + (-y * 4) + "deg)";
      });
    });
    document.querySelector(".hero").addEventListener("pointerleave", function () { heroShot.style.transform = ""; });
  }

  // Count-up for the stats row ("5×", "3", "6+", "100%").
  var stats = document.querySelectorAll(".stat strong");
  if (stats.length && "IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        so.unobserve(en.target);
        var el = en.target, text = el.textContent, m = text.match(/^(\d+)(.*)$/);
        if (!m || reduceMotion) return;
        var end = parseInt(m[1], 10), suffix = m[2], start = null, dur = 1200;
        var step = function (t) {
          if (start === null) start = t;
          var k = Math.min(1, (t - start) / dur), eased = 1 - Math.pow(1 - k, 3);
          el.textContent = Math.round(end * eased) + suffix;
          if (k < 1) requestAnimationFrame(step); else el.parentNode.classList.add("counted");
        };
        el.textContent = "0" + suffix;
        requestAnimationFrame(step);
      });
    }, { threshold: .6 });
    stats.forEach(function (s) { so.observe(s); });
  }

  // Reading progress on articles, and the header shadow once scrolled.
  var header = document.querySelector(".site-header");
  var art = document.getElementById("article");
  var bar = null;
  if (art && document.body.classList.contains("page-article")) {
    bar = document.createElement("div");
    bar.className = "read-progress";
    document.body.appendChild(bar);
  }
  var onScroll = function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    if (bar) {
      var r = art.getBoundingClientRect();
      var total = r.height - window.innerHeight * .6;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      bar.style.setProperty("--p", p.toFixed(3));
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
