/* =========================================================
   Portfolio — vanilla JS (no dependencies)
   - Mobile menu toggle
   - Smooth scroll for in-page anchors
   - Footer year
   - EN / RO language toggle (localStorage)
   ========================================================= */

(function () {
  "use strict";

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
    // Close menu when a link is clicked
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

  /* ---------- Smooth scroll (with offset for sticky header) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#" || id === "#top") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var header = document.querySelector(".site-header");
      var offset = header ? header.offsetHeight - 8 : 0;
      var y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  /* ---------- Bilingual toggle ---------- */
  var I18N = {
    en: {
      "brand": "Afloarei Razvan-Bogdan",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",

      "hero.eyebrow": "Technical Design · Topography · Civil Engineering",
      "hero.title": "AutoCAD Drafting · Topography & Cadastre · Civil Engineering",
      "hero.lede": "Technical design for institutions, roads and bridges — built on private, PNRR, EU and state-funded projects.",
      "hero.cta": "Get in touch",
      "hero.cta2": "See the work",
      "hero.meta1": "Topographical surveys",
      "hero.meta2": "Cadastral plans",
      "hero.meta3": "Institutional buildings",
      "hero.meta4": "Roads & bridges",

      "about.eyebrow": "About",
      "about.title": "Precision drawings. Practical experience.",
      "about.p1": "I create technical AutoCAD drawings for topographical surveys, geodesy and cadaster, as well as full design projects in civil engineering — institutional buildings, roads and bridges.",
      "about.p2": "I have delivered projects funded by private clients (institutions and private investors), by the Romanian state, and through European Union funds such as PNRR. I am open to working with foreign funds, ideally alongside a partner who has already accessed them, so that we can structure the project efficiently from day one.",
      "about.p3": "In the office I focus on making every process I touch as efficient as possible and on delivering the best service I can. I use AI agents — Hermes, a VPS work PC and LLMs — as assistants. They support my work, they don't replace it: the success of the project comes first.",

      "services.eyebrow": "Services",
      "services.title": "What I deliver",
      "services.sub": "From field survey to permit-ready drawing packages.",
      "services.s1.title": "Topographical Surveys & Geodesy",
      "services.s1.desc": "Land measurements, contour plans and geo-referenced drawings for design and cadaster.",
      "services.s2.title": "Cadastral & Land Registry Plans",
      "services.s2.desc": "Lot subdivisions, parcel updates and plans ready for OCPI / ANCPI submissions.",
      "services.s3.title": "Civil & Institutional Buildings",
      "services.s3.desc": "Schools, town halls and other public buildings — plans, sections and full technical documentation.",
      "services.s4.title": "Roads & Bridges",
      "services.s4.desc": "Alignment, profiles, cross-sections and structural detailing for new builds and rehabilitation.",
      "services.s5.title": "Technical Documentation",
      "services.s5.desc": "Technical memos, specifications, quantity take-offs and drawings ready for permitting.",
      "services.s6.title": "EU / PNRR / State-funded Support",
      "services.s6.desc": "Drawing packages aligned with the requirements of publicly financed projects.",

      "portfolio.eyebrow": "Portfolio",
      "portfolio.title": "Selected drawings",
      "portfolio.sub": "Click any drawing to view it full size. Replace placeholders with real exports anytime.",
      "portfolio.t1.tag": "Topography",
      "portfolio.t1.caption": "Topographical Survey — Urban Area",
      "portfolio.t2.tag": "Cadaster",
      "portfolio.t2.caption": "Cadastral Plan — Lot Subdivision",
      "portfolio.t3.tag": "Civil Building",
      "portfolio.t3.caption": "Institutional Building — School",
      "portfolio.t4.tag": "Road",
      "portfolio.t4.caption": "Road Design — County Road",
      "portfolio.t5.tag": "Bridge",
      "portfolio.t5.caption": "Bridge Project — Concrete Bridge",
      "portfolio.t6.tag": "PNRR / EU",
      "portfolio.t6.caption": "PNRR-Funded Civic Project",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about your project",
      "contact.sub": "Send a short brief, the site address and a timeline. I'll reply within one working day.",
      "contact.label": "Email",
      "contact.cta": "Open email client",
      "contact.note": "Include any relevant drawings, surveys or coordinates if available — it speeds up the first reply.",

      "footer.copy": "© <span id=\"year\"></span> Afloarei Razvan-Bogdan — All rights reserved.",
      "footer.meta": "AutoCAD Drafting · Topography & Cadastre · Civil Engineering"
    },

    ro: {
      "brand": "Afloarei Razvan-Bogdan",
      "nav.about": "Despre",
      "nav.services": "Servicii",
      "nav.portfolio": "Portofoliu",
      "nav.contact": "Contact",

      "hero.eyebrow": "Proiectare Tehnică · Topografie · Inginerie Civilă",
      "hero.title": "Desenare AutoCAD · Topografie și Cadastru · Inginerie Civilă",
      "hero.lede": "Proiectare tehnică pentru instituții, drumuri și poduri — realizată pe fonduri private, PNRR, europene și de stat.",
      "hero.cta": "Contactează-mă",
      "hero.cta2": "Vezi lucrările",
      "hero.meta1": "Ridicări topografice",
      "hero.meta2": "Planuri cadastrale",
      "hero.meta3": "Clădiri instituționale",
      "hero.meta4": "Drumuri și poduri",

      "about.eyebrow": "Despre",
      "about.title": "Desene precise. Experiență practică.",
      "about.p1": "Realizez desene tehnice AutoCAD pentru ridicări topografice, geodezie și cadastru, precum și proiecte complete de inginerie civilă — clădiri instituționale, drumuri și poduri.",
      "about.p2": "Am livrat proiecte finanțate de clienți privați (instituții și investitori privați), de statul român și prin fonduri europene precum PNRR. Sunt deschis să lucrez și pe fonduri străine, preferabil alături de un partener care a accesat deja astfel de fonduri, pentru a structura proiectul eficient încă de la început.",
      "about.p3": "În birou mă concentrez pe a face cât mai eficient orice proces în care sunt implicat și pe a oferi cel mai bun serviciu posibil. Folosesc agenți AI — Hermes, un VPS și LLM-uri — ca asistenți. Ei mă sprijină, nu mă înlocuiesc: succesul proiectului primează.",

      "services.eyebrow": "Servicii",
      "services.title": "Ce livrez",
      "services.sub": "De la ridicarea în teren la pachetul de desene gata de autorizare.",
      "services.s1.title": "Ridicări Topografice și Geodezie",
      "services.s1.desc": "Măsurători, planuri cu curbe de nivel și desene geo-referențiate pentru proiectare și cadastru.",
      "services.s2.title": "Planuri de Cadastru și Carte Funciară",
      "services.s2.desc": "Dezmembrări, actualizări de parcele și planuri gata de depus la OCPI / ANCPI.",
      "services.s3.title": "Clădiri Civile și Instituționale",
      "services.s3.desc": "Școli, primării și alte clădiri publice — planuri, secțiuni și documentație tehnică completă.",
      "services.s4.title": "Drumuri și Poduri",
      "services.s4.desc": "Trasee, profile, secțiuni transversale și detalii structurale pentru construcție nouă și reabilitare.",
      "services.s5.title": "Documentație Tehnică",
      "services.s5.desc": "Memorii tehnice, caiete de sarcini, antemăsurători și desene gata de autorizare.",
      "services.s6.title": "Suport Proiecte UE / PNRR / Stat",
      "services.s6.desc": "Pachete de desene aliniate cerințelor proiectelor publice finanțate.",

      "portfolio.eyebrow": "Portofoliu",
      "portfolio.title": "Desene selectate",
      "portfolio.sub": "Apasă pe orice desen pentru a-l vedea la dimensiune completă. Poți înlocui placeholderele cu exporturi reale oricând.",
      "portfolio.t1.tag": "Topografie",
      "portfolio.t1.caption": "Ridicare Topografică — Zonă Urbană",
      "portfolio.t2.tag": "Cadastru",
      "portfolio.t2.caption": "Plan Cadastral — Dezmembrare",
      "portfolio.t3.tag": "Clădire Civilă",
      "portfolio.t3.caption": "Clădire Instituțională — Școală",
      "portfolio.t4.tag": "Drum",
      "portfolio.t4.caption": "Proiectare Drum — Drum Județean",
      "portfolio.t5.tag": "Pod",
      "portfolio.t5.caption": "Proiect Pod — Pod din Beton",
      "portfolio.t6.tag": "PNRR / UE",
      "portfolio.t6.caption": "Proiect Civic finanțat PNRR",

      "contact.eyebrow": "Contact",
      "contact.title": "Hai să discutăm despre proiectul tău",
      "contact.sub": "Trimite un scurt brief, adresa amplasamentului și un termen. Răspund în cel mult o zi lucrătoare.",
      "contact.label": "Email",
      "contact.cta": "Deschide clientul de email",
      "contact.note": "Include orice desen, ridicare sau coordonate relevante, dacă le ai — grăbește primul răspuns.",

      "footer.copy": "© <span id=\"year\"></span> Afloarei Razvan-Bogdan — Toate drepturile rezervate.",
      "footer.meta": "Desenare AutoCAD · Topografie și Cadastru · Inginerie Civilă"
    }
  };

  var langBtn = document.getElementById("lang-toggle");
  var langLabel = langBtn ? langBtn.querySelector(".lang-current") : null;

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    var dict = I18N[lang];
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] === undefined) return;
      // For elements that contain a <span id="year"> we need to set innerHTML
      // (only the footer copy uses this). Detect via key or element id.
      if (key === "footer.copy") {
        el.innerHTML = dict[key].replace('<span id="year"></span>', '<span id="year">' + new Date().getFullYear() + '</span>');
      } else {
        el.textContent = dict[key];
      }
    });

    if (langLabel) langLabel.textContent = lang.toUpperCase();
    if (langBtn) {
      langBtn.setAttribute(
        "aria-label",
        lang === "en" ? "Switch language to Romanian" : "Switch language to English"
      );
    }
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) { /* ignore */ }
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("lang") || "en";
      applyLang(current === "en" ? "ro" : "en");
    });
  }

  // initial language: saved preference, or browser preference, or 'en'
  var initial = "en";
  try {
    var saved = localStorage.getItem("portfolio-lang");
    if (saved && I18N[saved]) initial = saved;
    else if ((navigator.language || "").toLowerCase().indexOf("ro") === 0) initial = "ro";
  } catch (e) { /* ignore */ }
  applyLang(initial);
})();