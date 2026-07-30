/* =========================================================================
   Portfolio v2.3 - vanilla JS, no dependencies
   - Mobile menu + smooth scroll
   - 4-language dropdown (public: en, ro only; fr + de kept for re-enabling)
   - LinkedIn / GitHub / email centralized via data/contact.js
   - Footer year, reveal animations
   ========================================================================= */
(function () {
  "use strict";

  // Defensive: if data scripts failed to load, bail without killing the dropdown.
  if (!window.I18N || !window.CONTACT) {
    console.warn("Portfolio: missing data files (I18N / CONTACT). Skipping init.");
    return;
  }

  var I18N        = window.I18N;
  var LANG_NAMES  = window.LANG_NAMES;
  var LANG_FLAGS  = window.LANG_FLAGS;
  var HIDDEN_LANGS= window.HIDDEN_LANGS;
  var DEFAULT_LANG= window.DEFAULT_LANG;
  var CONTACT     = window.CONTACT;

  /* Visible languages = LANG_FLAGS minus HIDDEN_LANGS keys */
  function visibleLangs() {
    var out = {};
    Object.keys(LANG_FLAGS).forEach(function (k) {
      if (!HIDDEN_LANGS || !HIDDEN_LANGS[k]) out[k] = LANG_FLAGS[k];
    });
    return out;
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.querySelector(".primary-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.setAttribute("aria-label", "Open menu");
        }
      });
    });
  }

  /* ---------- Smooth scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#" || id === "#top") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var header = document.querySelector(".site-header");
      var offset = header ? header.offsetHeight + 8 : 0;
      var y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  /* ---------- Render all dynamic data-i18n attributes ---------- */
  function renderI18n() {
    var dict = I18N[currentLang] || I18N[DEFAULT_LANG];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!dict[key]) return;
      if (key === "footer.copy") {
        el.innerHTML = dict[key].replace(
          '<span id="year"></span>',
          '<span id="year">' + new Date().getFullYear() + '</span>'
        );
      } else {
        el.textContent = dict[key];
      }
    });
    // Language switch on html element for accessibility
    document.documentElement.setAttribute("lang", currentLang);
  }

  /* ---------- Language dropdown ---------- */
  var currentLang = DEFAULT_LANG;
  var dropdown = document.querySelector(".lang-dropdown");
  var langBtn   = document.getElementById("lang-toggle");
  var langMenu  = dropdown ? dropdown.querySelector(".lang-menu") : null;
  var langLabel = langBtn ? langBtn.querySelector(".lang-current") : null;
  var langFlag  = langBtn ? langBtn.querySelector(".lang-flag") : null;

  function buildLangMenu() {
    if (!langMenu) return;
    langMenu.innerHTML = "";
    var vis = visibleLangs();
    Object.keys(vis).forEach(function (code) {
      var li = document.createElement("li");
      li.setAttribute("role", "option");
      li.setAttribute("data-lang", code);
      li.setAttribute("tabindex", "0");
      li.innerHTML =
        '<span class="lang-flag"><img src="assets/flags/' + vis[code] + '.svg" alt="" loading="lazy" decoding="async" width="22" height="14"></span>' +
        "<span>" + LANG_NAMES[code] + "</span>";
      langMenu.appendChild(li);
    });
  }

  function setLang(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    currentLang = lang;
    if (langLabel) langLabel.textContent = LANG_NAMES[lang];
    if (langFlag && LANG_FLAGS[lang]) {
      langFlag.innerHTML =
        '<img src="assets/flags/' + LANG_FLAGS[lang] +
        '.svg" alt="" loading="eager" decoding="async" width="22" height="14">';
    }
    if (langBtn) langBtn.setAttribute("aria-label", (LANG_NAMES[lang] || lang) + " — change language");
    if (langMenu) {
      langMenu.querySelectorAll("li").forEach(function (li) {
        li.setAttribute("aria-selected", li.getAttribute("data-lang") === lang ? "true" : "false");
      });
    }
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
    renderI18n();
  }

  if (langBtn && dropdown && langMenu) {
    buildLangMenu();
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = langMenu.classList.toggle("is-open");
      langBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    langMenu.addEventListener("click", function (e) {
      var li = e.target.closest("li[data-lang]");
      if (!li) return;
      setLang(li.getAttribute("data-lang"));
      langMenu.classList.remove("is-open");
      langBtn.setAttribute("aria-expanded", "false");
    });
    langMenu.addEventListener("keydown", function (e) {
      var li = e.target.closest("li[data-lang]");
      if (!li) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); li.click(); }
    });
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        langMenu.classList.remove("is-open");
        langBtn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        langMenu.classList.remove("is-open");
        langBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Language initialization (localStorage > browser > default)
  var visKeys = Object.keys(visibleLangs());
  try {
    var saved = localStorage.getItem("portfolio-lang");
    if (saved && visKeys.indexOf(saved) !== -1) currentLang = saved;
    else {
      var nl = (navigator.language || "").toLowerCase();
      if (nl.indexOf("ro") === 0 && visKeys.indexOf("ro") !== -1) currentLang = "ro";
      else if (nl.indexOf("fr") === 0 && visKeys.indexOf("fr") !== -1) currentLang = "fr";
      else if (nl.indexOf("de") === 0 && visKeys.indexOf("de") !== -1) currentLang = "de";
    }
  } catch (e) {}
  if (visKeys.indexOf(currentLang) === -1) currentLang = DEFAULT_LANG;
  setLang(currentLang);

  /* ---------- Centralized external links ---------- */
  function applyExternalLinks() {
    var attrs = {
      "data-link-linkedin": CONTACT.LINKEDIN_URL,
      "data-link-github":   CONTACT.GITHUB_URL,
      "data-link-email":     "mailto:" + CONTACT.EMAIL,
      "data-link-email-display": CONTACT.EMAIL
    };
    document.querySelectorAll("[data-link-linkedin]").forEach(function (el) {
      el.setAttribute("href", CONTACT.LINKEDIN_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
    document.querySelectorAll("[data-link-github]").forEach(function (el) {
      el.setAttribute("href", CONTACT.GITHUB_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
    document.querySelectorAll("[data-link-email]").forEach(function (el) {
      el.setAttribute("href", "mailto:" + CONTACT.EMAIL);
    });
    document.querySelectorAll("[data-link-email-display]").forEach(function (el) {
      el.textContent = CONTACT.EMAIL;
    });
  }
  applyExternalLinks();

  /* ---------- Reveal animations ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
