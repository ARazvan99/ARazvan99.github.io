/* =========================================================
   Portfolio v2.2 - vanilla JS, no dependencies
   - Mobile menu, smooth scroll, footer year
   - 4-language dropdown (EN / RO / FR / DE)
   - Animated counters, scroll-reveal
   ========================================================= */
(function () {
  "use strict";
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
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
  var I18N = { en: dictEN(), ro: dictRO(), fr: dictFR(), de: dictDE() };

  /* Per-project content (projects 1-6) */
  var PROJECTS_DATA = {
    en: {
      p1: ["Topography","Topographical Survey — Urban Area","Urban area, Romania","2024","~12 ha","Private investor","Private","Topographical survey & contour plan","[PLACEHOLDER OVERVIEW — EDIT ME] Field survey of an urban area covering approximately 12 hectares. Measurements were taken with total-station equipment and geo-referenced in the Romanian national projection (Stereo 70). The resulting drawing includes contour lines, spot heights, existing infrastructure (roads, sidewalks, utilities) and the built environment — ready to use as the base for any design or cadaster workflow.","[PLACEHOLDER] The client needed an accurate, geo-referenced base drawing for downstream design and permitting. Existing public data was outdated and incomplete.","[PLACEHOLDER] A complete topographical survey using total-station and GNSS measurements, processed into a geo-referenced DWG base map at 1:500 with contour lines, spot heights and infrastructure overlay.","AutoCAD, Total Station, GNSS, Stereo 70 projection","Lead surveyor — field measurement, data processing, contour plan, DWG delivery.","Field measurements (raw + processed), 1:500 DWG base, contour plan, infrastructure overlay, technical memo.","2024 Q1","2024 Q2","2024 Q3","[PLACEHOLDER] Provided the design team with a clean, geo-referenced base — eliminating rework and accelerating downstream approvals.","[PLACEHOLDER] Always verify the client's coordinate system assumptions up-front; document the projection and datum in the deliverables.","Survey base — overview","Spot heights & contour lines","Existing infrastructure overlay"],
      p2: ["Cadaster","Cadastral Plan — Lot Subdivision","Peri-urban area, Romania","2023","~5.7 ha · 5 lots","Private owners","Private","Cadastral plan & OCPI submission","[PLACEHOLDER OVERVIEW — EDIT ME] Cadastral plan for a peri-urban parcel subdivided into 5 lots. The drawing documents each parcel's boundaries, areas and access points, and is prepared for OCPI submission and the issuance of new land-registry excerpts.","[PLACEHOLDER] Five co-owners needed to legally divide a shared parcel into individually titled lots without boundary disputes.","[PLACEHOLDER] Boundary survey, subdivision plan at 1:1000, OCPI documentation package and land-registry excerpts for each new parcel.","AutoCAD, GNSS, OCPI / ANCPI workflow","Surveyor & drafter — boundary survey, subdivision plan, OCPI package.","Boundary survey, subdivision plan, OCPI documentation, land-registry excerpts.","2023 Q1","2023 Q2","2023 Q3","[PLACEHOLDER] Five new land-registry titles issued; property can now be sold, inherited or financed individually.","[PLACEHOLDER] Document every measurement uncertainty — cadaster disputes surface years later, often during a sale.","Subdivision plan","Boundary detail","Coordinate table"],
      p3: ["Civil Building","Institutional Building — School","Town, Romania","2024","~2,500 m² built · G+1","Town hall / public institution","State / EU","Architectural plans & technical documentation","[PLACEHOLDER OVERVIEW — EDIT ME] Ground-floor and first-floor plans for a public school, including classrooms, administrative offices, gym and ancillary spaces. Drawings are aligned with Romanian technical and fire-safety regulations and prepared as part of the permit documentation package.","[PLACEHOLDER] The town needed a permit-ready package for a new school building, compliant with national and EU procurement requirements.","[PLACEHOLDER] Architectural plans, sections, technical memo, fire-safety layouts and the full permit package — structured to align with public-investment procedures.","AutoCAD, Romanian building code, fire-safety regulations","Architectural drafter — plans, sections, technical documentation.","Architectural plans, sections, technical memo, fire-safety layouts, permit package.","2023 Q4","2024 Q1","2024 Q3","[PLACEHOLDER] Project cleared permitting and moved into procurement.","[PLACEHOLDER] For public projects, structure files exactly the way the procurement officer expects — saves weeks of clarification.","Ground floor plan","First floor plan","Typical section"],
      p4: ["Road","Road Design — County Road","County road, Romania","2023","1.52 km","County council","State","Alignment, profile & cross-sections","[PLACEHOLDER OVERVIEW — EDIT ME] Rehabilitation design for a 1.52 km section of county road, including plan, longitudinal profile and typical cross-section. Carriageway width 7.00 m, with 2.00 m shoulders on each side; pavement structure designed for the local traffic category.","[PLACEHOLDER] A county road needed full rehabilitation design — geometry, structure and drainage — ready for tender.","[PLACEHOLDER] Plan view, longitudinal profile, typical cross-section, pavement structure and drainage layout — packaged for tender and execution.","AutoCAD Civil 3D, Romanian road standards","Road designer — geometry, profile, cross-sections, drainage layout.","Plan view, longitudinal profile, typical cross-section, pavement structure, drainage layout.","2023 Q1","2023 Q2","2023 Q4","[PLACEHOLDER] Project tendered and awarded; rehabilitation executed on schedule.","[PLACEHOLDER] Coordinate with the drainage designer early — geometric adjustments late in the process are expensive.","Plan view","Longitudinal profile","Typical cross-section"],
      p5: ["Bridge","Bridge Project — Concrete Bridge","River crossing, Romania","2024","64 m · 3 spans","County council","State / PNRR","Elevation, piers & structural detailing","[PLACEHOLDER OVERVIEW — EDIT ME] Concrete bridge over a small river, total length 64 m, three spans (20 m + 24 m + 20 m). Reinforced-concrete deck on two piers and abutments; standard bridge railings; the design respects Romanian technical regulations for road bridges.","[PLACEHOLDER] The existing bridge had reached the end of its service life; a replacement was required under a state-funded programme.","[PLACEHOLDER] General arrangement, elevation, piers and abutments, deck cross-section and railings — designed to current Romanian technical regulations.","AutoCAD, Romanian bridge design regulations","Bridge drafter — general arrangement, elevation, structural detailing.","General arrangement, elevation, piers and abutments, deck cross-section, railings.","2024 Q1","2024 Q2","2024 Q4","[PLACEHOLDER] Replacement bridge enters construction phase with all permits in place.","[PLACEHOLDER] Hydraulic data drives everything — confirm the design flood before locking the geometry.","Bridge elevation","Deck cross-section","Pier detail"],
      p6: ["PNRR / EU","PNRR-Funded Civic Project","Town, Romania","2024 – 2026","~4,200 m² built","Municipality","PNRR (EU RRF / NextGenerationEU)","Site plan & building drawings","[PLACEHOLDER OVERVIEW — EDIT ME] Civic centre delivered under PNRR — Romania's implementation of the EU Recovery and Resilience Facility (RRF), the main component of NextGenerationEU, the EU's COVID-19 recovery programme. Scope includes the main civic centre, an annex building, parking area, access road and landscaping. Drawing package is aligned with EU and Romanian reporting requirements.","[PLACEHOLDER] The municipality needed a permit-ready, EU-compliant drawing package for a civic centre funded under PNRR.","[PLACEHOLDER] Site plan, building plans, sections, parking and access layouts, landscaping and EU reporting package — structured for both Romanian permitting and EU reporting.","AutoCAD, PNRR (RRF / NextGenerationEU) reporting requirements","Lead drafter — site plan, building plans, sections, EU reporting package.","Site plan, building plans, sections, parking and access layouts, landscaping, EU reporting package.","2024 Q1","2025 Q2","2026 Q2","[PLACEHOLDER] Civic centre under construction; EU reporting milestones met on schedule.","[PLACEHOLDER] PNRR/EU reporting has its own rhythm — design and reporting cycles must run in parallel, not in sequence.","Site plan","Civic centre — floor plan","Annex — floor plan"],
      p7: ["AI Automation","AI & Workflow Automation Project","Romania","2024 – ongoing","Internal operations","Commercial company","Self-funded","Solution architect & developer","[PLACEHOLDER OVERVIEW — EDIT ME] Operational case study: design and implementation of an AI-assisted workflow automation system for an engineering company.","[PLACEHOLDER] Repetitive manual work in document handling, reporting, and internal communication was consuming engineering hours and slowing delivery.","n8n · Cloud LLM · Local LLM · OCR · Telegram · Cloud VPS · MS Office · Structured DB","Solution architect & developer","[PLACEHOLDER DELIVERABLES]","2024 Q1","2024 Q3","ongoing","[PLACEHOLDER] Repetitive low-value work removed from engineering workflows, allowing professionals to focus on decisions and expertise.","[PLACEHOLDER] Human-in-the-loop is non-negotiable for high-stakes records.","AI Automation overview","AI Automation architecture","AI Automation stages"]
    },
    ro: {
      p1: ["Topografie","Ridicare Topografică — Zonă Urbană","Zonă urbană, România","2024","~12 ha","Investitor privat","Privat","Ridicare topografică și plan cu curbe de nivel","[PLACEHOLDER — EDITEAZĂ] Ridicare topografică în zonă urbană, pe o suprafață de aproximativ 12 hectare.","[PLACEHOLDER] Clientul avea nevoie de un plan de bază precis, geo-referențiat.","[PLACEHOLDER] Ridicare topografică completă cu stație totală și GNSS.","AutoCAD, Stație totală, GNSS","Topograf principal","Măsurători, bază DWG, plan curbe de nivel","Trim. I 2024","Trim. II 2024","Trim. III 2024","[PLACEHOLDER] Echipele de proiectare au primit o bază curată.","[PLACEHOLDER] Verifică ipotezele privind sistemul de coordonate.","Bază de ridicare","Cote și curbe de nivel","Infrastructură existentă"],
      p2: ["Cadastru","Plan Cadastral — Dezmembrare","Zonă peri-urbană, România","2023","~5,7 ha · 5 loturi","Proprietari privați","Privat","Plan cadastral și depunere OCPI","[PLACEHOLDER — EDITEAZĂ] Plan cadastral pentru un teren peri-urban dezmembrat în 5 loturi.","[PLACEHOLDER] Cinci coproprietari aveau nevoie să împartă legal un teren comun.","[PLACEHOLDER] Ridicare de hotar, plan de dezmembrare, dosar OCPI.","AutoCAD, GNSS, flux OCPI","Topograf și proiectant","Ridicare de hotar, plan de dezmembrare, dosar OCPI","Trim. I 2023","Trim. II 2023","Trim. III 2023","[PLACEHOLDER] Cinci cărți funciare noi emise.","[PLACEHOLDER] Documentează fiecare incertitudine de măsură.","Plan de dezmembrare","Detaliu limite","Tabel coordonate"],
      p3: ["Clădire Civilă","Clădire Instituțională — Școală","Oraș, România","2024","~2 500 m² · P+1E","Primărie","Stat / UE","Planuri arhitecturale","[PLACEHOLDER — EDITEAZĂ] Planuri pentru o școală publică.","[PLACEHOLDER] Primăria avea nevoie de dosar pentru autorizare.","[PLACEHOLDER] Planuri arhitecturale, secțiuni, dosar complet.","AutoCAD, normative construcții","Proiectant arhitectural","Planuri, secțiuni, dosar","Trim. IV 2023","Trim. I 2024","Trim. III 2024","[PLACEHOLDER] Proiectul a trecut de autorizare.","[PLACEHOLDER] Structurează fișierele cum se așteaptă funcționarul.","Plan parter","Plan etaj 1","Secțiune tip"],
      p4: ["Drum","Proiectare Drum — Drum Județean","Drum județean, România","2023","1,52 km","Consiliu județean","Stat","Traseu, profil și secțiuni","[PLACEHOLDER — EDITEAZĂ] Proiect de reabilitare 1,52 km drum județean.","[PLACEHOLDER] Drum județean necesita proiect complet de reabilitare.","[PLACEHOLDER] Plan de situație, profil longitudinal, secțiune tip.","AutoCAD Civil 3D","Proiectant drumuri","Plan, profil, secțiuni","Trim. I 2023","Trim. II 2023","Trim. IV 2023","[PLACEHOLDER] Proiectul a fost licitat și adjudecat.","[PLACEHOLDER] Coordonează cu proiectantul de scurgere.","Plan de situație","Profil longitudinal","Secțiune transversală tip"],
      p5: ["Pod","Proiect Pod — Pod din Beton","Traversare râu, România","2024","64 m · 3 deschideri","Consiliu județean","Stat / PNRR","Elevație, pile","[PLACEHOLDER — EDITEAZĂ] Pod din beton armat peste un râu, 64 m, trei deschideri.","[PLACEHOLDER] Podul existent atinsese sfârșitul duratei de viață.","[PLACEHOLDER] Plan general, elevație, pile, secțiune.","AutoCAD, normative poduri","Proiectant poduri","Plan general, elevație, secțiuni","Trim. I 2024","Trim. II 2024","Trim. IV 2024","[PLACEHOLDER] Pod de înlocuire în construcție.","[PLACEHOLDER] Datele hidraulice conduc proiectul.","Elevație pod","Secțiune tablier","Detaliu pilă"],
      p6: ["PNRR / UE","Proiect Civic finanțat PNRR","Oraș, România","2024 – 2026","~4 200 m² construiți","Primărie","PNRR (MRR UE / NextGenerationEU)","Plan de situație","[PLACEHOLDER — EDITEAZĂ] Centru civic realizat prin PNRR.","[PLACEHOLDER] Primăria avea nevoie de dosar conform UE.","[PLACEHOLDER] Plan de situație, planuri clădiri, secțiuni.","AutoCAD, cerințe PNRR","Proiectant principal","Plan, planuri, secțiuni, dosar UE","Trim. I 2024","Trim. II 2025","Trim. II 2026","[PLACEHOLDER] Centrul civic în construcție.","[PLACEHOLDER] Raportarea PNRR are ritmul ei.","Plan de situație","Centru civic — plan","Anexă — plan"],
      p7: ["Automatizare AI","Proiect AI & Automatizare Fluxuri","România","2024 – în curs","Operațiuni interne","Companie comercială","Autofinanțare","Arhitect soluție","[PLACEHOLDER] Studiu de caz operațional: proiectare și implementare sistem de automatizare.","[PLACEHOLDER] Munca manuală repetitivă consuma ore de inginerie.","n8n · LLM · OCR · Telegram · VPS","Arhitect soluție","[PLACEHOLDER DELIVERABLES]","Trim. I 2024","Trim. III 2024","în curs","[PLACEHOLDER] Muncă repetitivă eliminată.","[PLACEHOLDER] Validarea umană este non-negociabilă.","Prezentare AI","Arhitectură AI","Etape AI"]
    },
    fr: {
      p1: ["Topographie","Levé topographique — zone urbaine","Zone urbaine, Roumanie","2024","~12 ha","Investisseur privé","Privé","Levé topographique","[PLACEHOLDER APERÇU] Levé topographique zone urbaine 12 ha.","[PLACEHOLDER] Plan de base précis nécessaire.","[PLACEHOLDER] Levé complet station totale + GNSS.","AutoCAD, Station totale, GNSS","Topographe principal","Mesures, base DWG","T1 2024","T2 2024","T3 2024","[PLACEHOLDER] Base propre livrée.","[PLACEHOLDER] Valider hypothèses coordonnées.","Base de levé","Courbes de niveau","Infrastructure existante"],
      p2: ["Cadastre","Plan cadastral — lotissement","Zone péri-urbaine, Roumanie","2023","~5,7 ha · 5 lots","Propriétaires privés","Privé","Plan cadastral","[PLACEHOLDER APERÇU] Plan cadastral 5 lots.","[PLACEHOLDER] 5 copropriétaires.","[PLACEHOLDER] Levé de bornage, plan, dossier OCPI.","AutoCAD, GNSS","Topographe","Levé, plan, dossier","T1 2023","T2 2023","T3 2023","[PLACEHOLDER] 5 nouveaux titres émis.","[PLACEHOLDER] Documenter toute incertitude.","Plan de division","Détail limites","Tableau coordonnées"],
      p3: ["Bâtiment civil","Bâtiment institutionnel — école","Ville, Roumanie","2024","~2 500 m² · R+1","Mairie","État / UE","Plans architecturaux","[PLACEHOLDER APERÇU] Plans pour école publique.","[PLACEHOLDER] Mairie avait besoin de dossier permis.","[PLACEHOLDER] Plans, sections, dossier complet.","AutoCAD, normes","Dessinateur architectural","Plans, sections, dossier","T4 2023","T1 2024","T3 2024","[PLACEHOLDER] Projet passé en permis.","[PLACEHOLDER] Structurer fichiers.","Plan RDC","Plan R+1","Coupe type"],
      p4: ["Route","Conception routière","Route départementale, Roumanie","2023","1,52 km","Conseil départemental","État","Tracé, profil","[PLACEHOLDER APERÇU] Réhabilitation 1,52 km.","[PLACEHOLDER] Route à réhabiliter.","[PLACEHOLDER] Plan, profil, section.","AutoCAD Civil 3D","Concepteur routier","Plan, profil, section","T1 2023","T2 2023","T4 2023","[PLACEHOLDER] Projet adjugé.","[PLACEHOLDER] Coordonner drainage.","Plan","Profil en long","Section type"],
      p5: ["Pont","Projet de pont","Traversée de rivière, Roumanie","2024","64 m · 3 travées","Conseil départemental","État / PNRR","Élévation, piles","[PLACEHOLDER APERÇU] Pont béton 64 m.","[PLACEHOLDER] Pont en fin de vie.","[PLACEHOLDER] Plan, élévation, piles.","AutoCAD, normes","Dessinateur ponts","Plan, élévation, piles","T1 2024","T2 2024","T4 2024","[PLACEHOLDER] Pont en construction.","[PLACEHOLDER] Données hydrauliques.","Élévation","Section tablier","Détail pile"],
      p6: ["PNRR / UE","Projet civique PNRR","Ville, Roumanie","2024 – 2026","~4 200 m²","Mairie","PNRR (FRR UE)","Plan de masse","[PLACEHOLDER APERÇU] Centre civique PNRR.","[PLACEHOLDER] Mairie besoin dossier UE.","[PLACEHOLDER] Plan de masse, plans, sections.","AutoCAD, PNRR","Dessinateur principal","Plan, plans, sections, dossier","T1 2024","T2 2025","T2 2026","[PLACEHOLDER] Centre civique en construction.","[PLACEHOLDER] Rythme PNRR.","Plan de masse","Centre civique — plan","Annexe — plan"],
      p7: ["Automatisation IA","Projet IA & Automatisation","Roumanie","2024 – en cours","Opérations internes","Société commerciale","Autofinancé","Architecte solution","[PLACEHOLDER APERÇU] Étude de cas: système d'automatisation.","[PLACEHOLDER] Travail manuel répétitif.","n8n · LLM · OCR · Telegram · VPS","Architecte solution","[PLACEHOLDER DELIVERABLES]","T1 2024","T3 2024","en cours","[PLACEHOLDER] Travail répétitif éliminé.","[PLACEHOLDER] Validation humaine non-négociable.","Vue IA","Architecture IA","Étapes IA"]
    },
    de: {
      p1: ["Topographie","Topographische Vermessung — Stadtgebiet","Stadtgebiet, Rumänien","2024","~12 ha","Privatinvestor","Privat","Topographische Vermessung","[PLATZHALTER ÜBERBLICK] Vermessung Stadtgebiet 12 ha.","[PLATZHALTER] Genauer, georeferenzierter Basisplan benötigt.","[PLATZHALTER] Komplette Vermessung Totalstation + GNSS.","AutoCAD, Totalstation, GNSS","Leitender Vermesser","Messungen, DWG-Basis","Q1 2024","Q2 2024","Q3 2024","[PLATZHALTER] Saubere Basis geliefert.","[PLATZHALTER] Koordinatenannahmen prüfen.","Basis der Vermessung","Höhenlinien","Infrastrukturüberlagerung"],
      p2: ["Kataster","Katasterplan — Parzellierung","Stadtrandgebiet, Rumänien","2023","~5,7 ha · 5 Lose","Privatpersonen","Privat","Katasterplan","[PLATZHALTER ÜBERBLICK] Katasterplan 5 Lose.","[PLATZHALTER] 5 Miteigentümer.","[PLATZHALTER] Grenzvermessung, Plan, OCPI.","AutoCAD, GNSS","Vermesser","Vermessung, Plan, OCPI","Q1 2023","Q2 2023","Q3 2023","[PLATZHALTER] 5 neue Grundbuchtitel.","[PLATZHALTER] Messunsicherheit dokumentieren.","Teilungsplan","Grenzdetail","Koordinatentabelle"],
      p3: ["Zivilbau","Institutionelles Gebäude — Schule","Stadt, Rumänien","2024","~2 500 m² · EG+1","Rathaus","Staat / EU","Architekturpläne","[PLATZHALTER ÜBERBLICK] Pläne öffentliche Schule.","[PLATZHALTER] Rathaus brauchte Genehmigung.","[PLATZHALTER] Architekturpläne, Schnitte, Genehmigung.","AutoCAD, Bauvorschriften","Architektur-Zeichner","Pläne, Schnitte, Genehmigung","Q4 2023","Q1 2024","Q3 2024","[PLATZHALTER] Projekt genehmigt.","[PLATZHALTER] Dateien strukturieren.","Grundriss EG","Grundriss 1. OG","Regelschnitt"],
      p4: ["Straße","Straßenplanung — Kreisstraße","Kreisstraße, Rumänien","2023","1,52 km","Landkreis","Staat","Trasse, Profil","[PLATZHALTER ÜBERBLICK] Sanierung 1,52 km.","[PLATZHALTER] Straße brauchte Sanierung.","[PLATZHALTER] Lageplan, Längsprofil, Querschnitt.","AutoCAD Civil 3D","Straßenplaner","Lageplan, Profil, Querschnitt","Q1 2023","Q2 2023","Q4 2023","[PLATZHALTER] Projekt vergeben.","[PLATZHALTER] Entwässerung koordinieren.","Lageplan","Längsprofil","Regelquerschnitt"],
      p5: ["Brücke","Brückenprojekt — Betonbrücke","Flussquerung, Rumänien","2024","64 m · 3 Felder","Landkreis","Staat / PNRR","Ansicht, Pfeiler","[PLATZHALTER ÜBERBLICK] Betonbrücke 64 m.","[PLATZHALTER] Alte Brücke am Ende der Nutzungsdauer.","[PLATZHALTER] Gesamtansicht, Pfeiler, Schnitte.","AutoCAD, Brückenvorschriften","Brücken-Zeichner","Gesamtansicht, Pfeiler, Schnitte","Q1 2024","Q2 2024","Q4 2024","[PLATZHALTER] Ersatzbrücke im Bau.","[PLATZHALTER] Hydraulische Daten bestätigen.","Brückenansicht","Überbauquerschnitt","Pfeilerdetail"],
      p6: ["PNRR / EU","PNRR-finanziertes Bürgerprojekt","Stadt, Rumänien","2024 – 2026","~4 200 m²","Stadtverwaltung","PNRR (RRF EU)","Lageplan","[PLATZHALTER ÜBERBLICK] Bürgerzentrum PNRR.","[PLATZHALTER] Stadtverwaltung brauchte EU-Paket.","[PLATZHALTER] Lageplan, Gebäudepläne, Schnitte.","AutoCAD, PNRR","Hauptzeichner","Lageplan, Pläne, Schnitte, EU-Paket","Q1 2024","Q2 2025","Q2 2026","[PLATZHALTER] Bürgerzentrum im Bau.","[PLATZHALTER] PNRR-Rhythmus.","Lageplan","Bürgerzentrum — Grundriss","Anbau — Grundriss"],
      p7: ["KI-Automatisierung","KI- & Workflow-Automatisierung","Rumänien","2024 – laufend","Interne Abläufe","Handelsgesellschaft","Eigenfinanzierung","Solution Architect","[PLATZHALTER ÜBERBLICK] Operative Fallstudie.","[PLATZHALTER] Manuelle Wiederholungsarbeit.","n8n · LLM · OCR · Telegram · VPS","Solution Architect","[PLATZHALTER DELIVERABLES]","Q1 2024","Q3 2024","laufend","[PLATZHALTER] Wiederholungsarbeit entfernt.","[PLATZHALTER] Human-in-the-Loop pflicht.","Übersicht KI","Architektur KI","Phasen KI"]
    }
  };

  function buildProject(lang, key) {
    var arr = PROJECTS_DATA[lang][key];
    return {
      tag: arr[0], title: arr[1], location: arr[2], year: arr[3], area: arr[4],
      client: arr[5], funding: arr[6], role: arr[7],
      overview: arr[8], problem: arr[9],
      tech: arr[10], myrole: arr[11], deliverables: arr[12],
      timelineStart: arr[13], timelineNow: arr[14], timelineEnd: arr[15],
      impact: arr[16], lessons: arr[17],
      img1: arr[18], img2: arr[19], img3: arr[20]
    };
  }

  function projects(lang) {
    var p = {};
    var keys = ["p1","p2","p3","p4","p5","p6","p7"];
    for (var i = 0; i < keys.length; i++) {
      p["project" + (i+1)] = buildProject(lang, keys[i]);
    }
    return p;
  }

  // Inject per-project into each language dict
  I18N.en = Object.assign(I18N.en, projects("en"));
  I18N.ro = Object.assign(I18N.ro, projects("ro"));
  I18N.fr = Object.assign(I18N.fr, projects("fr"));
  I18N.de = Object.assign(I18N.de, projects("de"));

  /* ---------- Language dropdown ---------- */
  var LANG_NAMES = { en: "English", ro: "Română", fr: "Français", de: "Deutsch" };
  var LANG_FLAGS = { en: "gb", ro: "ro", fr: "fr", de: "de" };
  var dropdown = document.querySelector(".lang-dropdown");
  var langBtn = document.getElementById("lang-toggle");
  var langMenu = dropdown ? dropdown.querySelector(".lang-menu") : null;
  var langLabel = langBtn ? langBtn.querySelector(".lang-current") : null;
  var langFlag = langBtn ? langBtn.querySelector(".lang-flag") : null;

  function setLang(lang) {
    if (!I18N[lang]) lang = "en";
    var dict = I18N[lang];
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] === undefined) return;
      if (key === "footer.copy") {
        el.innerHTML = dict[key].replace('<span id="year"></span>', '<span id="year">' + new Date().getFullYear() + '</span>');
      } else {
        el.textContent = dict[key];
      }
    });
    if (langLabel) langLabel.textContent = LANG_NAMES[lang];
    if (langFlag && LANG_FLAGS[lang]) {
      langFlag.innerHTML = '<img src="assets/flags/' + LANG_FLAGS[lang] + '.svg" alt="" loading="eager" decoding="async" width="22" height="14">';
    }
    if (langBtn) langBtn.setAttribute("aria-label", "Language: " + LANG_NAMES[lang]);
    if (langMenu) {
      langMenu.querySelectorAll("li").forEach(function (li) {
        var sel = li.getAttribute("data-lang") === lang;
        li.setAttribute("aria-selected", sel ? "true" : "false");
      });
    }
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
    if (typeof window.refreshCounters === "function") window.refreshCounters();
  }

  if (langBtn && dropdown && langMenu) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = langMenu.classList.toggle("is-open");
      langBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    langMenu.querySelectorAll("li").forEach(function (li) {
      li.addEventListener("click", function () {
        setLang(li.getAttribute("data-lang"));
        langMenu.classList.remove("is-open");
        langBtn.setAttribute("aria-expanded", "false");
      });
      li.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          li.click();
        }
      });
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

  var initial = "en";
  try {
    var saved = localStorage.getItem("portfolio-lang");
    if (saved && I18N[saved]) initial = saved;
    else {
      var nl = (navigator.language || "").toLowerCase();
      if (nl.indexOf("ro") === 0) initial = "ro";
      else if (nl.indexOf("fr") === 0) initial = "fr";
      else if (nl.indexOf("de") === 0) initial = "de";
    }
  } catch (e) {}
  setLang(initial);

  /* ---------- Animated counters ---------- */
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1400;
    var start = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = val + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  window.refreshCounters = function () {
    document.querySelectorAll(".stat-number[data-count]").forEach(function (el) {
      el.textContent = "0" + (el.getAttribute("data-suffix") || "");
    });
  };

  /* ---------- Scroll-reveal + counter trigger ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          if (e.target.classList.contains("stat")) {
            var n = e.target.querySelector(".stat-number[data-count]");
            if (n) animateCounter(n);
          }
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal, .stat").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal, .stat").forEach(function (el) { el.classList.add("is-visible"); });
  }
})();