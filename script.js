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
      "about.p2": "I have delivered projects funded by private clients (institutions and private investors), by the Romanian state, and through European Union instruments — including PNRR, Romania's implementation of the EU Recovery and Resilience Facility (RRF), the main component of NextGenerationEU, the EU's COVID-19 recovery programme. I am open to working with foreign funds, ideally alongside a partner who has already accessed them, so that we can structure the project efficiently from day one.",
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
      "services.s6.desc": "Drawing packages aligned with EU and PNRR (RRF / NextGenerationEU) requirements, as well as Romanian national public-investment procedures.",

      "portfolio.eyebrow": "Portfolio",
      "portfolio.title": "Selected projects",
      "portfolio.sub": "Click any project to open its dedicated page — drawings, scope, specs and notes.",
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
      "contact.phoneLabel": "Phone",
      "contact.phone": "+40 768 981 416",
      "contact.callCta": "Call",
      "contact.note": "Include any relevant drawings, surveys or coordinates if available — it speeds up the first reply.",

      "project.back": "← Back to portfolio",
      "project.prev": "Previous project",
      "project.next": "Next project",
      "project.imageCaption": "Click image for full size",
      "project.eyebrow": "Project",
      "project.meta.location": "Location",
      "project.meta.year": "Year",
      "project.meta.area": "Area",
      "project.meta.client": "Client",
      "project.meta.funding": "Funding",
      "project.meta.role": "Role",
      "project.overviewHeading": "Overview",
      "project.scopeHeading": "Scope",
      "project.specsHeading": "Specs",
      "project.drawingsHeading": "Drawings",
      "project.drawingsSub": "Replace placeholders with your actual exports.",
      "project.tagPlan": "Plan",
      "project.tagSection": "Section",
      "project.tagDetail": "Detail",

      "project1.tag": "Topography",
      "project1.title": "Topographical Survey — Urban Area",
      "project1.location": "Urban area, Romania",
      "project1.year": "2024",
      "project1.area": "~12 ha",
      "project1.client": "Private investor",
      "project1.funding": "Private",
      "project1.role": "Topographical survey & contour plan",
      "project1.overview": "[PLACEHOLDER OVERVIEW — EDIT ME] Field survey of an urban area covering approximately 12 hectares. Measurements were taken with total-station equipment and geo-referenced in the Romanian national projection (Stereo 70). The resulting drawing includes contour lines, spot heights, existing infrastructure (roads, sidewalks, utilities) and the built environment — ready to use as the base for any design or cadaster workflow.",
      "project1.scope": "Field measurement, data processing, contour plan at 1:500, geo-referenced DWG export.",
      "project1.img1.caption": "Survey base — overview",
      "project1.img2.caption": "Spot heights & contour lines",
      "project1.img3.caption": "Existing infrastructure overlay",

      "project2.tag": "Cadaster",
      "project2.title": "Cadastral Plan — Lot Subdivision",
      "project2.location": "Peri-urban area, Romania",
      "project2.year": "2023",
      "project2.area": "~5.7 ha · 5 lots",
      "project2.client": "Private owners",
      "project2.funding": "Private",
      "project2.role": "Cadastral plan & OCPI submission",
      "project2.overview": "[PLACEHOLDER OVERVIEW — EDIT ME] Cadastral plan for a peri-urban parcel subdivided into 5 lots. The drawing documents each parcel's boundaries, areas and access points, and is prepared for OCPI submission and the issuance of new land-registry excerpts.",
      "project2.scope": "Boundary survey, subdivision plan, OCPI documentation, land-registry excerpts.",
      "project2.img1.caption": "Subdivision plan",
      "project2.img2.caption": "Boundary detail",
      "project2.img3.caption": "Coordinate table",

      "project3.tag": "Civil Building",
      "project3.title": "Institutional Building — School",
      "project3.location": "Town, Romania",
      "project3.year": "2024",
      "project3.area": "~2,500 m² built · G+1",
      "project3.client": "Town hall / public institution",
      "project3.funding": "State / EU",
      "project3.role": "Architectural plans & technical documentation",
      "project3.overview": "[PLACEHOLDER OVERVIEW — EDIT ME] Ground-floor and first-floor plans for a public school, including classrooms, administrative offices, gym and ancillary spaces. Drawings are aligned with Romanian technical and fire-safety regulations and prepared as part of the permit documentation package.",
      "project3.scope": "Architectural plans, sections, technical memo, fire-safety layouts, permit package.",
      "project3.img1.caption": "Ground floor plan",
      "project3.img2.caption": "First floor plan",
      "project3.img3.caption": "Typical section",

      "project4.tag": "Road",
      "project4.title": "Road Design — County Road",
      "project4.location": "County road, Romania",
      "project4.year": "2023",
      "project4.area": "1.52 km",
      "project4.client": "County council",
      "project4.funding": "State",
      "project4.role": "Alignment, profile & cross-sections",
      "project4.overview": "[PLACEHOLDER OVERVIEW — EDIT ME] Rehabilitation design for a 1.52 km section of county road, including plan, longitudinal profile and typical cross-section. Carriageway width 7.00 m, with 2.00 m shoulders on each side; pavement structure designed for the local traffic category.",
      "project4.scope": "Plan view, longitudinal profile, typical cross-section, pavement structure, drainage layout.",
      "project4.img1.caption": "Plan view",
      "project4.img2.caption": "Longitudinal profile",
      "project4.img3.caption": "Typical cross-section",

      "project5.tag": "Bridge",
      "project5.title": "Bridge Project — Concrete Bridge",
      "project5.location": "River crossing, Romania",
      "project5.year": "2024",
      "project5.area": "64 m · 3 spans",
      "project5.client": "County council",
      "project5.funding": "State / PNRR",
      "project5.role": "Elevation, piers & structural detailing",
      "project5.overview": "[PLACEHOLDER OVERVIEW — EDIT ME] Concrete bridge over a small river, total length 64 m, three spans (20 m + 24 m + 20 m). Reinforced-concrete deck on two piers and abutments; standard bridge railings; the design respects Romanian technical regulations for road bridges.",
      "project5.scope": "General arrangement, elevation, piers and abutments, deck cross-section, railings.",
      "project5.img1.caption": "Bridge elevation",
      "project5.img2.caption": "Deck cross-section",
      "project5.img3.caption": "Pier detail",

      "project6.tag": "PNRR / EU",
      "project6.title": "PNRR-Funded Civic Project",
      "project6.location": "Town, Romania",
      "project6.year": "2024 – 2026",
      "project6.area": "~4,200 m² built",
      "project6.client": "Municipality",
      "project6.funding": "PNRR (EU RRF / NextGenerationEU)",
      "project6.role": "Site plan & building drawings",
      "project6.overview": "[PLACEHOLDER OVERVIEW — EDIT ME] Civic centre delivered under PNRR — Romania's implementation of the EU Recovery and Resilience Facility (RRF), the main component of NextGenerationEU, the EU's COVID-19 recovery programme. Scope includes the main civic centre, an annex building, parking area, access road and landscaping. Drawing package is aligned with EU and Romanian reporting requirements.",
      "project6.scope": "Site plan, building plans, sections, parking and access layouts, landscaping, EU reporting package.",
      "project6.img1.caption": "Site plan",
      "project6.img2.caption": "Civic centre — floor plan",
      "project6.img3.caption": "Annex — floor plan",

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
      "about.p2": "Am livrat proiecte finanțate de clienți privați (instituții și investitori privați), de statul român și prin instrumente ale Uniunii Europene — inclusiv PNRR, implementarea de către România a Mecanismului de Redresare și Reziliență (MRR) al UE, componenta principală a NextGenerationEU, programul UE de redresare post-COVID-19. Sunt deschis să lucrez și pe fonduri străine, preferabil alături de un partener care a accesat deja astfel de fonduri, pentru a structura proiectul eficient încă de la început.",
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
      "services.s6.desc": "Pachete de desene aliniate cerințelor UE și PNRR (MRR / NextGenerationEU), precum și procedurilor naționale de investiții publice.",

      "portfolio.eyebrow": "Portofoliu",
      "portfolio.title": "Proiecte selectate",
      "portfolio.sub": "Apasă pe orice proiect pentru a deschide pagina lui dedicată — desene, scop, specificații și note.",
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
      "contact.phoneLabel": "Telefon",
      "contact.phone": "+40 768 981 416",
      "contact.callCta": "Sună",
      "contact.note": "Include orice desen, ridicare sau coordonate relevante, dacă le ai — grăbește primul răspuns.",

      "project.back": "← Înapoi la portofoliu",
      "project.prev": "Proiectul anterior",
      "project.next": "Proiectul următor",
      "project.imageCaption": "Apasă pe imagine pentru dimensiune completă",
      "project.eyebrow": "Proiect",
      "project.meta.location": "Locație",
      "project.meta.year": "An",
      "project.meta.area": "Suprafață",
      "project.meta.client": "Beneficiar",
      "project.meta.funding": "Finanțare",
      "project.meta.role": "Rol",
      "project.overviewHeading": "Prezentare",
      "project.scopeHeading": "Obiect",
      "project.specsHeading": "Specificații",
      "project.drawingsHeading": "Desene",
      "project.drawingsSub": "Înlocuiește placeholderele cu exporturile reale.",
      "project.tagPlan": "Plan",
      "project.tagSection": "Secțiune",
      "project.tagDetail": "Detaliu",

      "project1.tag": "Topografie",
      "project1.title": "Ridicare Topografică — Zonă Urbană",
      "project1.location": "Zonă urbană, România",
      "project1.year": "2024",
      "project1.area": "~12 ha",
      "project1.client": "Investitor privat",
      "project1.funding": "Privat",
      "project1.role": "Ridicare topografică și plan cu curbe de nivel",
      "project1.overview": "[PLACEHOLDER — EDITEAZĂ] Ridicare topografică în zonă urbană, pe o suprafață de aproximativ 12 hectare. Măsurătorile s-au făcut cu stație totală și sunt geo-referențiate în proiecția națională (Stereo 70). Planul rezultat include curbe de nivel, cote, infrastructura existentă (drumuri, trotuare, utilități) și construcțiile din zonă — gata de folosit ca bază pentru orice proiect de proiectare sau cadastru.",
      "project1.scope": "Măsurători în teren, procesare date, plan cu curbe de nivel la scara 1:500, export DWG geo-referențiat.",
      "project1.img1.caption": "Bază de ridicare — vedere de ansamblu",
      "project1.img2.caption": "Cote și curbe de nivel",
      "project1.img3.caption": "Suprapunere infrastructură existentă",

      "project2.tag": "Cadastru",
      "project2.title": "Plan Cadastral — Dezmembrare",
      "project2.location": "Zonă peri-urbană, România",
      "project2.year": "2023",
      "project2.area": "~5,7 ha · 5 loturi",
      "project2.client": "Proprietari privați",
      "project2.funding": "Privat",
      "project2.role": "Plan cadastral și depunere OCPI",
      "project2.overview": "[PLACEHOLDER — EDITEAZĂ] Plan cadastral pentru un teren peri-urban dezmembrat în 5 loturi. Documentația cuprinde limitele, suprafețele și accesele fiecărei parcele, pregătită pentru depunere la OCPI și eliberarea de noi extrase de carte funciară.",
      "project2.scope": "Ridicare limite, plan de dezmembrare, documentație OCPI, extrase de carte funciară.",
      "project2.img1.caption": "Plan de dezmembrare",
      "project2.img2.caption": "Detaliu limite",
      "project2.img3.caption": "Tabel de coordonate",

      "project3.tag": "Clădire Civilă",
      "project3.title": "Clădire Instituțională — Școală",
      "project3.location": "Oraș, România",
      "project3.year": "2024",
      "project3.area": "~2 500 m² · P+1E",
      "project3.client": "Primărie / instituție publică",
      "project3.funding": "Stat / UE",
      "project3.role": "Planuri arhitecturale și documentație tehnică",
      "project3.overview": "[PLACEHOLDER — EDITEAZĂ] Planuri pentru parter și etajul 1 al unei școli publice, incluzând săli de clasă, birouri administrative, sală de sport și spații anexe. Desenele respectă reglementările tehnice și de securitate la incendiu din România și sunt pregătite ca parte a documentației pentru autorizare.",
      "project3.scope": "Planuri arhitecturale, secțiuni, memoriu tehnic, planuri PSI, dosar pentru autorizare.",
      "project3.img1.caption": "Plan parter",
      "project3.img2.caption": "Plan etaj 1",
      "project3.img3.caption": "Secțiune tip",

      "project4.tag": "Drum",
      "project4.title": "Proiectare Drum — Drum Județean",
      "project4.location": "Drum județean, România",
      "project4.year": "2023",
      "project4.area": "1,52 km",
      "project4.client": "Consiliu județean",
      "project4.funding": "Stat",
      "project4.role": "Traseu, profil și secțiuni transversale",
      "project4.overview": "[PLACEHOLDER — EDITEAZĂ] Proiect de reabilitare pentru un sector de 1,52 km de drum județean, incluzând plan de situație, profil longitudinal și secțiune transversală tip. Partea carosabilă are 7,00 m, cu acostamente de 2,00 m pe fiecare parte; structura rutieră este dimensionată pentru categoria de trafic locală.",
      "project4.scope": "Plan de situație, profil longitudinal, secțiune transversală tip, structură rutieră, scheme de scurgere a apelor.",
      "project4.img1.caption": "Plan de situație",
      "project4.img2.caption": "Profil longitudinal",
      "project4.img3.caption": "Secțiune transversală tip",

      "project5.tag": "Pod",
      "project5.title": "Proiect Pod — Pod din Beton",
      "project5.location": "Traversare râu, România",
      "project5.year": "2024",
      "project5.area": "64 m · 3 deschideri",
      "project5.client": "Consiliu județean",
      "project5.funding": "Stat / PNRR",
      "project5.role": "Elevație, pile și detalii structurale",
      "project5.overview": "[PLACEHOLDER — EDITEAZĂ] Pod din beton armat peste un râu de mică adâncime, lungime totală 64 m, trei deschideri (20 m + 24 m + 20 m). Tablier din beton armat pe două pile și culei; parapeți standard; proiectul respectă reglementările tehnice românești pentru poduri rutiere.",
      "project5.scope": "Plan general, elevație, pile și culei, secțiune tablier, parapeți.",
      "project5.img1.caption": "Elevație pod",
      "project5.img2.caption": "Secțiune tablier",
      "project5.img3.caption": "Detaliu pilă",

      "project6.tag": "PNRR / UE",
      "project6.title": "Proiect Civic finanțat PNRR",
      "project6.location": "Oraș, România",
      "project6.year": "2024 – 2026",
      "project6.area": "~4 200 m² construiți",
      "project6.client": "Primărie",
      "project6.funding": "PNRR (MRR UE / NextGenerationEU)",
      "project6.role": "Plan de situație și desene pentru clădiri",
      "project6.overview": "[PLACEHOLDER — EDITEAZĂ] Centru civic realizat prin PNRR — implementarea de către România a Mecanismului de Redresare și Reziliență (MRR) al UE, componenta principală a NextGenerationEU, programul UE de redresare post-COVID-19. Include centrul civic principal, o clădire anexă, parcare, drum de acces și amenajare peisagistică. Pachetul de desene este aliniat cerințelor de raportare UE și românești.",
      "project6.scope": "Plan de situație, planuri clădiri, secțiuni, sistematizare parcare și accese, amenajare peisagistică, dosar de raportare UE.",
      "project6.img1.caption": "Plan de situație",
      "project6.img2.caption": "Centru civic — plan",
      "project6.img3.caption": "Anexă — plan",

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