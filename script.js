/* =========================================================
   Portfolio v2.0 — vanilla JS, no dependencies
   - Mobile menu, smooth scroll, footer year
   - 4-language dropdown (EN / RO / FR / DE)
   - Animated counters, scroll-reveal
   - Career-timeline interactivity
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

  /* ---------- Smooth scroll (with sticky header offset) ---------- */
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

  /* =========================================================
     4-LANGUAGE I18N (en / ro / fr / de)
     Keys grouped by section for easy editing.
     ========================================================= */
  var I18N = {
    en: buildEN(),
    ro: buildRO(),
    fr: buildFR(),
    de: buildDE()
  };

  function buildEN() {
    return {
      "nav.about":"About","nav.services":"Services","nav.work":"Work","nav.skills":"Skills","nav.tech":"Tech","nav.process":"Process","nav.projects":"Projects","nav.contact":"Contact","nav.linkedin":"LinkedIn","nav.github":"GitHub","nav.cv":"Download CV",
      "hero.eyebrow":"Engineering Excellence","hero.title":"Geodetic Engineer","hero.title2":"Infrastructure Designer","hero.title3":"AI Automation Builder","hero.lede":"Delivering surveying, cadastral, civil infrastructure and AI-powered engineering solutions across Europe.","hero.availability":"Open to opportunities",
      "hero.cta.projects":"View projects","hero.cta.contact":"Contact me","hero.cta.cv":"Download CV","hero.cta.linkedin":"LinkedIn","hero.cta.github":"GitHub","hero.cta.availability":"I'm available",
      "hero.trust.response":"Replies within 1 working day","hero.trust.eu":"EU funding experience","hero.trust.languages":"RO · EN · FR · DE","hero.trust.remote":"Remote & on-site worldwide",
      "stats.label1":"Years of experience","stats.label2":"Projects delivered","stats.label3":"Industries served","stats.label4":"EU/state-funded projects",
      "whyme.eyebrow":"Why me","whyme.title":"Why companies hire me","whyme.sub":"A blend of field experience, technical depth, and modern engineering practice.",
      "whyme.c1.title":"Nearly a decade of experience","whyme.c1.desc":"Hands-on engineering since the start of my career.",
      "whyme.c2.title":"Office + field experience","whyme.c2.desc":"Comfortable on construction sites and at the design desk.",
      "whyme.c3.title":"End-to-end delivery","whyme.c3.desc":"From field survey to permit-ready drawing package.",
      "whyme.c4.title":"Surveying expertise","whyme.c4.desc":"Topographic, cadastral, engineering and GNSS surveys.",
      "whyme.c5.title":"Infrastructure design","whyme.c5.desc":"Roads, bridges, utilities and institutional buildings.",
      "whyme.c6.title":"Public administration","whyme.c6.desc":"Worked with town halls, county councils and ministries.",
      "whyme.c7.title":"Government-funded projects","whyme.c7.desc":"Delivered projects under national investment programs.",
      "whyme.c8.title":"European-funded projects","whyme.c8.desc":"Including PNRR (Romania) and similar EU instruments.",
      "whyme.c9.title":"AI-powered engineering","whyme.c9.desc":"LLM agents and automation integrated into daily workflows.",
      "whyme.c10.title":"Workflow automation","whyme.c10.desc":"Eliminating repetitive tasks with n8n, scripts and tools.",
      "whyme.c11.title":"Fast learner","whyme.c11.desc":"New software, regulations, languages — picked up quickly.",
      "whyme.c12.title":"Highly adaptable","whyme.c12.desc":"Equally at home on a site, in a meeting or behind a screen.",
      "whyme.c13.title":"Detail-oriented","whyme.c13.desc":"Drawings, numbers, contracts — verified twice.",
      "whyme.c14.title":"International mindset","whyme.c14.desc":"Open to relocation and cross-border collaboration.",
      "whyme.c15.title":"Process optimization","whyme.c15.desc":"Always looking for the faster, cleaner way.",
      "whyme.c16.title":"Strong communicator","whyme.c16.desc":"Clear technical writing and concise verbal updates.",
      "about.eyebrow":"About","about.title":"Engineering with a modern edge",
      "about.p1":"I create technical AutoCAD drawings for topographical surveys, geodesy and cadaster, as well as full design projects in civil engineering — institutional buildings, roads and bridges.",
      "about.p2":"I have delivered projects funded by private clients (institutions and private investors), by the Romanian state, and through European Union instruments — including PNRR, Romania's implementation of the EU Recovery and Resilience Facility (RRF), the main component of NextGenerationEU, the EU's COVID-19 recovery programme. I am open to working with foreign funds, ideally alongside a partner who has already accessed them, so that we can structure the project efficiently from day one.",
      "about.p3":"I combine traditional engineering with modern digital tools: surveying, engineering survey, cadastre, infrastructure design, GIS, GNSS, LiDAR and drone surveys, construction and civil engineering work — all documented through digital transformation, AI automation, workflow optimization, knowledge management and continuous learning.",
      "about.p4":"In the office I focus on making every process I touch as efficient as possible and on delivering the best service I can. I use AI agents — Hermes, a VPS work PC and LLMs — as assistants. They support my work, they don't replace it: the success of the project comes first.",
      "services.eyebrow":"Services","services.title":"What I deliver","services.sub":"End-to-end engineering — from field survey to permit-ready drawing package, with AI built in.",
      "services.g1.title":"Surveying & Geospatial","services.g1.desc":"Field measurement, geodesy and data acquisition.",
      "services.s1":"Topographic survey","services.s2":"Engineering survey","services.s3":"Cadastre & land registry","services.s4":"GNSS measurements","services.s5":"Drone survey & LiDAR processing","services.s6":"GIS analysis",
      "services.g2.title":"Infrastructure Design","services.g2.desc":"Civil engineering design and technical documentation.",
      "services.s7":"Road design","services.s8":"Bridge design","services.s9":"Utilities mapping","services.s10":"Construction layout","services.s11":"Civil & institutional buildings",
      "services.g3.title":"Documentation & Consulting","services.g3.desc":"Permit packages, technical memos and funding support.",
      "services.s12":"Engineering documentation","services.s13":"Project documentation","services.s14":"Funding documentation (EU / state)","services.s15":"Technical consulting",
      "services.g4.title":"Digital Engineering & AI","services.g4.desc":"Modern tools that multiply the value of every drawing.",
      "services.s16":"CAD drafting (AutoCAD)","services.s17":"AI automation for engineering workflows","services.s18":"Workflow automation","services.s19":"Digital engineering",
      "specs.eyebrow":"Specializations","specs.title":"Deep technical focus","specs.sub":"Where I deliver the most value.",
      "specs.list":"Cadastral surveying, Engineering surveying, Topographic surveying, Infrastructure design, Road infrastructure, Railway infrastructure, Utility mapping, Construction survey, GIS analysis, GNSS measurements, LiDAR, Drone mapping, Geospatial data processing, BIM collaboration, Digital engineering, AI-assisted engineering, Automation",
      "tech.eyebrow":"Technologies","tech.title":"My toolkit","tech.sub":"Software, equipment and digital skills I work with daily.",
      "tech.g1":"Engineering software","tech.g2":"Survey equipment","tech.g3":"Digital skills",
      "tech.g1.list":"AutoCAD, Civil 3D, Revit, ArcGIS, QGIS, TopoLT, ProfLT, Microsoft Office",
      "tech.g2.list":"GNSS receivers, Total station, Drone, LiDAR scanner",
      "tech.g3.list":"Python, Git, Docker, n8n, AI agents (OpenAI, Claude, Gemini), Automation, Knowledge management, Cloud platforms",
      "skills.eyebrow":"Skills","skills.title":"Competencies","skills.sub":"Grouped by area of practice.",
      "skills.eng":"Engineering","skills.eng.desc":"Design, calculation, technical documentation, QA.",
      "skills.sur":"Surveying","skills.sur.desc":"Total station, GNSS, drone, LiDAR processing.",
      "skills.gis":"GIS","skills.gis.desc":"ArcGIS, QGIS, geospatial analysis, mapping.",
      "skills.prog":"Programming","skills.prog.desc":"Python, scripting, data processing.",
      "skills.auto":"Automation","skills.auto.desc":"n8n, AI agents, document & workflow automation.",
      "skills.mgmt":"Management","skills.mgmt.desc":"Project coordination, scheduling, budgeting.",
      "skills.comm":"Communication","skills.comm.desc":"Technical writing, client liaison, presentations.",
      "skills.lead":"Leadership","skills.lead.desc":"Leading small teams, mentoring juniors.",
      "skills.ps":"Problem solving","skills.ps.desc":"Pragmatic solutions under constraints.",
      "skills.anal":"Analytical thinking","skills.anal.desc":"Data-driven decisions, risk evaluation.",
      "skills.coord":"Project coordination","skills.coord.desc":"Multi-stakeholder, multi-discipline delivery.",
      "industries.eyebrow":"Industries","industries.title":"Where I've worked","industries.sub":"Sectors I have direct experience in.",
      "industries.list":"Transportation, Railways, Roads, Bridges, Utilities, Renewable energy, Land development, Construction, GIS, Mining, Agriculture, Smart cities, Public administration, Government projects, Private development, Infrastructure",
      "philosophy.eyebrow":"Work philosophy","philosophy.title":"What I stand for",
      "philosophy.q1":"Quality","philosophy.q1.desc":"Every drawing, every calculation — done right the first time.",
      "philosophy.q2":"Accuracy","philosophy.q2.desc":"Measure twice, document once.",
      "philosophy.q3":"Efficiency","philosophy.q3.desc":"Automate the repetitive; spend time on the critical.",
      "philosophy.q4":"Innovation","philosophy.q4.desc":"Try new tools, new methods, new approaches.",
      "philosophy.q5":"Continuous improvement","philosophy.q5.desc":"Every project teaches something for the next one.",
      "philosophy.q6":"Digital transformation","philosophy.q6.desc":"Move paper workflows into structured digital pipelines.",
      "philosophy.q7":"Automation","philosophy.q7.desc":"If I do it twice, I script it once.",
      "philosophy.q8":"Lifelong learning","philosophy.q8.desc":"New regulations, new software, new languages.",
      "philosophy.q9":"Professional integrity","philosophy.q9.desc":"Honest reporting, even when it's inconvenient.",
      "philosophy.q10":"Engineering excellence","philosophy.q10.desc":"The result justifies the rigor.",
      "ai.eyebrow":"AI & Automation","ai.title":"Modern engineering, modern tools","ai.sub":"I integrate AI and automation into my engineering workflow — as assistants, not replacements.",
      "ai.s1":"AI agents (Hermes-style)","ai.s1.desc":"Task-specific LLM agents I run locally or on a VPS.",
      "ai.s2":"Workflow automation (n8n)","ai.s2.desc":"Multi-step pipelines that move data between tools automatically.",
      "ai.s3":"Knowledge systems","ai.s3.desc":"Structured engineering knowledge, searchable and reusable.",
      "ai.s4":"Engineering productivity","ai.s4.desc":"Faster drafting, fewer manual errors.",
      "ai.s5":"Digital documentation","ai.s5.desc":"Clean, structured, machine-readable project records.",
      "ai.s6":"Document analysis","ai.s6.desc":"Extracting structured data from PDFs and scans.",
      "ai.s7":"Data organization","ai.s7.desc":"Turning raw measurements into clean datasets.",
      "ai.s8":"Prompt engineering","ai.s8.desc":"Reliable outputs from LLMs through careful prompting.",
      "ai.s9":"Local AI","ai.s9.desc":"Privacy-friendly on-device models where they make sense.",
      "ai.s10":"Cloud AI","ai.s10.desc":"Frontier models when the task requires it.",
      "ai.s11":"Documented methodology","ai.s11.desc":"Every automation I ship has a written process behind it.",
      "timeline.eyebrow":"Career timeline","timeline.title":"How I got here","timeline.sub":"From technician to AI-aware engineering consultant.",
      "timeline.t1.role":"Survey Technician","timeline.t1.desc":"Started in field surveying — total station, GNSS, topographic and cadastral measurements.",
      "timeline.t2.role":"Geodetic Engineer","timeline.t2.desc":"Took responsibility for full surveying deliverables and OCPI submissions.",
      "timeline.t3.role":"Infrastructure Designer","timeline.t3.desc":"Moved into civil engineering design — roads, bridges, institutional buildings.",
      "timeline.t4.role":"Project Engineer","timeline.t4.desc":"End-to-end project ownership: scope, design, documentation, client interface.",
      "timeline.t5.role":"AI Automation Builder","timeline.t5.desc":"Started integrating LLM agents and n8n workflows into engineering processes.",
      "timeline.t6.role":"Future Vision","timeline.t6.desc":"Bridging classical engineering with AI-native digital engineering.",
      "certs.eyebrow":"Certifications","certs.title":"Professional certificates","certs.empty":"No certificates added yet — drop your first one in script.js under the certs.* keys.",
      "avail.eyebrow":"International availability","avail.title":"Where & how I can work","avail.sub":"Flexible engagement models across Europe and beyond.",
      "avail.i1":"Available across Europe","avail.i2":"Open worldwide","avail.i3":"Open to relocation","avail.i4":"Remote collaboration","avail.i5":"Contract work","avail.i6":"Long-term employment","avail.i7":"Freelancing","avail.i8":"Consulting",
      "languages.eyebrow":"Languages","languages.title":"Languages I work in","languages.sub":"Professional working languages.",
      "languages.ro.name":"Romanian","languages.ro.level":"Native (C2)",
      "languages.en.name":"English","languages.en.level":"Professional (C1)",
      "languages.fr.name":"French","languages.fr.level":"Basic (A2)",
      "portfolio.eyebrow":"Projects","portfolio.title":"Selected projects","portfolio.sub":"Click any project to open its dedicated page — drawings, problem, solution, technologies, lessons learned.","portfolio.view":"View case study",
      "portfolio.t1.tag":"Topography","portfolio.t1.caption":"Topographical Survey — Urban Area","portfolio.t1.stack":"AutoCAD, Total Station, GNSS",
      "portfolio.t2.tag":"Cadaster","portfolio.t2.caption":"Cadastral Plan — Lot Subdivision","portfolio.t2.stack":"AutoCAD, OCPI Workflow",
      "portfolio.t3.tag":"Civil Building","portfolio.t3.caption":"Institutional Building — School","portfolio.t3.stack":"AutoCAD, Building Code",
      "portfolio.t4.tag":"Road","portfolio.t4.caption":"Road Design — County Road","portfolio.t4.stack":"AutoCAD Civil 3D, Road Standards",
      "portfolio.t5.tag":"Bridge","portfolio.t5.caption":"Bridge Project — Concrete Bridge","portfolio.t5.stack":"AutoCAD, Structural Standards",
      "portfolio.t6.tag":"PNRR / EU","portfolio.t6.caption":"PNRR-Funded Civic Project","portfolio.t6.stack":"AutoCAD, PNRR (RRF / NextGenerationEU)",
      "contact.eyebrow":"Contact","contact.title":"Let's talk about your project","contact.sub":"Send a short brief, the site address and a timeline. I'll reply within one working day.",
      "contact.label":"Email","contact.cta":"Open email client",
      "contact.phoneLabel":"Phone","contact.phone":"+40 768 981 416","contact.callCta":"Call",
      "contact.locationLabel":"Location","contact.location":"Romania · Available across Europe",
      "contact.availabilityLabel":"Availability","contact.availability":"Open to opportunities",
      "contact.responseLabel":"Response time","contact.response":"Within 1 working day",
      "contact.note":"Include any relevant drawings, surveys or coordinates if available — it speeds up the first reply.",
      "contact.linkedin":"LinkedIn","contact.github":"GitHub","contact.cv":"Download CV",
      "footer.motto":"Engineering with rigor. Delivered with care.",
      "footer.quickLinks":"Quick links","footer.connect":"Connect","footer.contact":"Contact",
      "footer.responseTime":"Typical response time: within 1 working day",
      "footer.copy":"© <span id=\"year\"></span> Afloarei Razvan-Bogdan — All rights reserved.",
      "footer.meta":"AutoCAD Drafting · Topography & Cadastre · Civil Engineering · AI Automation",
      "project.back":"← Back to portfolio","project.prev":"Previous project","project.next":"Next project","project.imageCaption":"Click image for full size",
      "project.eyebrow":"Project",
      "project.meta.location":"Location","project.meta.year":"Year","project.meta.area":"Area","project.meta.client":"Client","project.meta.funding":"Funding","project.meta.role":"Role",
      "project.overviewHeading":"Overview","project.problemHeading":"Problem","project.solutionHeading":"Solution",
      "project.techHeading":"Technologies used","project.roleHeading":"My role","project.deliverablesHeading":"Deliverables",
      "project.timelineHeading":"Timeline","project.impactHeading":"Impact","project.lessonsHeading":"Lessons learned",
      "project.galleryHeading":"Drawings","project.gallerySub":"Replace placeholders with your actual exports.",
      "project.tagPlan":"Plan","project.tagSection":"Section","project.tagDetail":"Detail",
      "project.timeline.start":"Start","project.timeline.now":"Now","project.timeline.end":"End",
      _projectContent("en")
    };
  }

  function buildRO() {
    return {
      "nav.about":"Despre","nav.services":"Servicii","nav.work":"Proiecte","nav.skills":"Competențe","nav.tech":"Tehnologii","nav.process":"Proces","nav.projects":"Portofoliu","nav.contact":"Contact","nav.linkedin":"LinkedIn","nav.github":"GitHub","nav.cv":"Descarcă CV",
      "hero.eyebrow":"Excelență în inginerie","hero.title":"Inginer Geodez","hero.title2":"Proiectant Infrastructură","hero.title3":"Specialist AI & Automatizare","hero.lede":"Livrez topografie, cadastru, infrastructură civilă și soluții de inginerie augmentate cu AI în toată Europa.","hero.availability":"Deschis către noi colaborări",
      "hero.cta.projects":"Vezi proiectele","hero.cta.contact":"Contactează-mă","hero.cta.cv":"Descarcă CV","hero.cta.linkedin":"LinkedIn","hero.cta.github":"GitHub","hero.cta.availability":"Sunt disponibil",
      "hero.trust.response":"Răspund în cel mult o zi lucrătoare","hero.trust.eu":"Experiență pe fonduri UE","hero.trust.languages":"RO · EN · FR · DE","hero.trust.remote":"Remote și prezență la sediu, worldwide",
      "stats.label1":"Ani de experiență","stats.label2":"Proiecte livrate","stats.label3":"Industrii deservite","stats.label4":"Proiecte UE / de stat",
      "whyme.eyebrow":"De ce eu","whyme.title":"De ce mă angajează companiile","whyme.sub":"Combinație de experiență în teren, profunzime tehnică și practică inginerească modernă.",
      "whyme.c1.title":"Aproape un deceniu de experiență","whyme.c1.desc":"Inginerie practică încă de la începutul carierei.",
      "whyme.c2.title":"Experiență de birou + teren","whyme.c2.desc":"La fel de comod pe șantier ca și la birou.",
      "whyme.c3.title":"Livrare end-to-end","whyme.c3.desc":"De la ridicarea în teren la dosarul pentru autorizare.",
      "whyme.c4.title":"Expertiză în topografie","whyme.c4.desc":"Ridicări topografice, cadastrale, inginerești și GNSS.",
      "whyme.c5.title":"Proiectare infrastructură","whyme.c5.desc":"Drumuri, poduri, utilități și clădiri instituționale.",
      "whyme.c6.title":"Administrație publică","whyme.c6.desc":"Am lucrat cu primării, consilii județene și ministere.",
      "whyme.c7.title":"Proiecte finanțate de stat","whyme.c7.desc":"Am livrat proiecte prin programe naționale de investiții.",
      "whyme.c8.title":"Proiecte finanțate de UE","whyme.c8.desc":"Inclusiv PNRR și instrumente europene similare.",
      "whyme.c9.title":"Inginerie augmentată cu AI","whyme.c9.desc":"Agenți LLM și automatizare integrate în fluxul zilnic.",
      "whyme.c10.title":"Automatizare de proces","whyme.c10.desc":"Elimin sarcinile repetitive cu n8n, scripturi și tool-uri.",
      "whyme.c11.title":"Învăț rapid","whyme.c11.desc":"Software nou, reglementări noi, limbi noi — mă adaptăm repede.",
      "whyme.c12.title":"Foarte adaptabil","whyme.c12.desc":"La fel de comod pe șantier, în ședință sau în fața ecranului.",
      "whyme.c13.title":"Orientat spre detalii","whyme.c13.desc":"Desene, numere, contracte — verificate de două ori.",
      "whyme.c14.title":"Mentalitate internațională","whyme.c14.desc":"Deschis la relocare și colaborare transfrontalieră.",
      "whyme.c15.title":"Optimizare de proces","whyme.c15.desc":"Caut mereu varianta mai rapidă și mai curată.",
      "whyme.c16.title":"Comunicator puternic","whyme.c16.desc":"Scriere tehnică clară și informări verbale concise.",
      "about.eyebrow":"Despre","about.title":"Inginerie cu abordare modernă",
      "about.p1":"Realizez desene tehnice AutoCAD pentru ridicări topografice, geodezie și cadastru, precum și proiecte complete de inginerie civilă — clădiri instituționale, drumuri și poduri.",
      "about.p2":"Am livrat proiecte finanțate de clienți privați (instituții și investitori privați), de statul român și prin instrumente ale Uniunii Europene — inclusiv PNRR, implementarea de către România a Mecanismului de Redresare și Reziliență (MRR) al UE, componenta principală a NextGenerationEU, programul UE de redresare post-COVID-19. Sunt deschis să lucrez și pe fonduri străine, preferabil alături de un partener care a accesat deja astfel de fonduri, pentru a structura proiectul eficient încă de la început.",
      "about.p3":"Combin ingineria tradițională cu unelte digitale moderne: topografie, ridicări inginerești, cadastru, proiectare de infrastructură, GIS, GNSS, LiDAR și ridicări cu drona, construcții și lucrări de inginerie civilă — toate documentate prin transformare digitală, automatizare cu AI, optimizare de flux, management al cunoașterii și învățare continuă.",
      "about.p4":"În birou mă concentrez pe a face cât mai eficient orice proces în care sunt implicat și pe a oferi cel mai bun serviciu posibil. Folosesc agenți AI — Hermes, un VPS și LLM-uri — ca asistenți. Ei mă sprijină, nu mă înlocuiesc: succesul proiectului primează.",
      "services.eyebrow":"Servicii","services.title":"Ce livrez","services.sub":"Inginerie end-to-end — de la ridicarea în teren la dosarul pentru autorizare, cu AI integrat.",
      "services.g1.title":"Topografie & Geodezie","services.g1.desc":"Măsurători în teren, geodezie și achiziție de date.",
      "services.s1":"Ridicare topografică","services.s2":"Ridicare inginerească","services.s3":"Cadastru și carte funciară","services.s4":"Măsurători GNSS","services.s5":"Ridicări cu drona și LiDAR","services.s6":"Analiză GIS",
      "services.g2.title":"Proiectare Infrastructură","services.g2.desc":"Proiectare de inginerie civilă și documentație tehnică.",
      "services.s7":"Proiectare drumuri","services.s8":"Proiectare poduri","services.s9":"Cartare utilități","services.s10":"Trasare construcții","services.s11":"Clădiri civile și instituționale",
      "services.g3.title":"Documentație & Consultanță","services.g3.desc":"Dosare pentru autorizare, memorii tehnice și suport pentru finanțare.",
      "services.s12":"Documentație tehnică","services.s13":"Documentație de proiect","services.s14":"Documentație de finanțare (UE / stat)","services.s15":"Consultanță tehnică",
      "services.g4.title":"Inginerie Digitală & AI","services.g4.desc":"Unelte moderne care multiplică valoarea fiecărui desen.",
      "services.s16":"Desenare CAD (AutoCAD)","services.s17":"Automatizare AI pentru fluxuri inginerești","services.s18":"Automatizare de proces","services.s19":"Inginerie digitală",
      "specs.eyebrow":"Specializări","specs.title":"Focalizare tehnică aprofundată","specs.sub":"Unde aduc cea mai mare valoare.",
      "specs.list":"Ridicări cadastrale, Ridicări inginerești, Ridicări topografice, Proiectare infrastructură, Infrastructură rutieră, Infrastructură feroviară, Cartare utilități, Ridicări pentru construcții, Analiză GIS, Măsurători GNSS, LiDAR, Cartare cu drona, Prelucrare date geospațiale, Colaborare BIM, Inginerie digitală, Inginerie asistată AI, Automatizare",
      "tech.eyebrow":"Tehnologii","tech.title":"Trusa mea de lucru","tech.sub":"Software, echipamente și competențe digitale cu care lucrez zilnic.",
      "tech.g1":"Software inginereasc","tech.g2":"Echipamente de ridicare","tech.g3":"Competențe digitale",
      "tech.g1.list":"AutoCAD, Civil 3D, Revit, ArcGIS, QGIS, TopoLT, ProfLT, Microsoft Office",
      "tech.g2.list":"Receptori GNSS, Stație totală, Dronă, Scanner LiDAR",
      "tech.g3.list":"Python, Git, Docker, n8n, Agenți AI (OpenAI, Claude, Gemini), Automatizare, Managementul cunoașterii, Platforme cloud",
      "skills.eyebrow":"Competențe","skills.title":"Arii de competență","skills.sub":"Grupate pe domenii de practică.",
      "skills.eng":"Inginerie","skills.eng.desc":"Proiectare, calcul, documentație tehnică, QA.",
      "skills.sur":"Topografie","skills.sur.desc":"Stație totală, GNSS, dronă, prelucrare LiDAR.",
      "skills.gis":"GIS","skills.gis.desc":"ArcGIS, QGIS, analiză geospatială, cartare.",
      "skills.prog":"Programare","skills.prog.desc":"Python, scriptare, prelucrare date.",
      "skills.auto":"Automatizare","skills.auto.desc":"n8n, agenți AI, automatizare documente și fluxuri.",
      "skills.mgmt":"Management","skills.mgmt.desc":"Coordonare proiecte, planificare, bugetare.",
      "skills.comm":"Comunicare","skills.comm.desc":"Scriere tehnică, interfață cu clientul, prezentări.",
      "skills.lead":"Leadership","skills.lead.desc":"Conducerea echipelor mici, mentorat.",
      "skills.ps":"Rezolvarea problemelor","skills.ps.desc":"Soluții pragmatice în condiții restrictive.",
      "skills.anal":"Gândire analitică","skills.anal.desc":"Decizii bazate pe date, evaluarea riscurilor.",
      "skills.coord":"Coordonare proiecte","skills.coord.desc":"Livrare multi-stakeholder, multi-disciplinară.",
      "industries.eyebrow":"Industrii","industries.title":"Unde am lucrat","industries.sub":"Sectore în care am experiență directă.",
      "industries.list":"Transport, Căi ferate, Drumuri, Poduri, Utilități, Energie regenerabilă, Dezvoltare de terenuri, Construcții, GIS, Minerit, Agricultură, Smart cities, Administrație publică, Proiecte guvernamentale, Dezvoltare privată, Infrastructură",
      "philosophy.eyebrow":"Filosofie de lucru","philosophy.title":"În ce cred",
      "philosophy.q1":"Calitate","philosophy.q1.desc":"Fiecare desen, fiecare calcul — făcute bine din prima.",
      "philosophy.q2":"Precizie","philosophy.q2.desc":"Măsoară de două ori, documentează o dată.",
      "philosophy.q3":"Eficiență","philosophy.q3.desc":"Automatizează ce e repetitiv; petrece timp pe ce e critic.",
      "philosophy.q4":"Inovare","philosophy.q4.desc":"Încerc unelte, metode și abordări noi.",
      "philosophy.q5":"Îmbunătățire continuă","philosophy.q5.desc":"Fiecare proiect învață ceva pentru următorul.",
      "philosophy.q6":"Transformare digitală","philosophy.q6.desc":"Mut fluxurile pe hârtie în pipeline-uri digitale structurate.",
      "philosophy.q7":"Automatizare","philosophy.q7.desc":"Dacă o fac de două ori, o script-ez o dată.",
      "philosophy.q8":"Învățare pe tot parcursul vieții","philosophy.q8.desc":"Reglementări noi, software nou, limbi noi.",
      "philosophy.q9":"Integritate profesională","philosophy.q9.desc":"Raportare onestă, chiar și când nu e convenabil.",
      "philosophy.q10":"Excelență inginerească","philosophy.q10.desc":"Rezultatul justifică rigoarea.",
      "ai.eyebrow":"AI & Automatizare","ai.title":"Inginerie modernă, unelte moderne","ai.sub":"Integrez AI și automatizarea în fluxul meu de lucru — ca asistenți, nu înlocuitori.",
      "ai.s1":"Agenți AI (stil Hermes)","ai.s1.desc":"Agenți LLM specializați, rulați local sau pe un VPS.",
      "ai.s2":"Automatizare fluxuri (n8n)","ai.s2.desc":"Pipeline-uri multi-pas care mută datele între unelte automat.",
      "ai.s3":"Sisteme de cunoaștere","ai.s3.desc":"Cunoaștere inginerească structurată, căutabilă și reutilizabilă.",
      "ai.s4":"Productivitate inginerească","ai.s4.desc":"Desenare mai rapidă, mai puține erori manuale.",
      "ai.s5":"Documentație digitală","ai.s5.desc":"Înregistrări curate, structurate, machine-readable.",
      "ai.s6":"Analiză documente","ai.s6.desc":"Extragere de date structurate din PDF-uri și scanări.",
      "ai.s7":"Organizare date","ai.s7.desc":"Transform măsurători brute în seturi de date curate.",
      "ai.s8":"Prompt engineering","ai.s8.desc":"Output-uri fiabile din LLM-uri prin prompting atent.",
      "ai.s9":"AI local","ai.s9.desc":"Modele on-device prietenoase cu privacy-ul, acolo unde are sens.",
      "ai.s10":"AI în cloud","ai.s10.desc":"Modele frontieră când sarcina le cere.",
      "ai.s11":"Metodologie documentată","ai.s11.desc":"Fiecare automatizare pe care o lansez are un proces scris în spate.",
      "timeline.eyebrow":"Cronologie carieră","timeline.title":"Cum am ajuns aici","timeline.sub":"De la tehnician la consultant în inginerie conștient de AI.",
      "timeline.t1.role":"Tehnician topograf","timeline.t1.desc":"Am început în topografie de teren — stație totală, GNSS, ridicări topografice și cadastrale.",
      "timeline.t2.role":"Inginer geodez","timeline.t2.desc":"Am preluat responsabilitatea pentru livrabilele complete de topografie și depunerile OCPI.",
      "timeline.t3.role":"Proiectant infrastructură","timeline.t3.desc":"Am trecut la proiectarea de inginerie civilă — drumuri, poduri, clădiri instituționale.",
      "timeline.t4.role":"Inginer de proiect","timeline.t4.desc":"Ownership end-to-end: scop, proiectare, documentație, interfață cu clientul.",
      "timeline.t5.role":"Specialist AI & Automatizare","timeline.t5.desc":"Am început să integrez agenți LLM și fluxuri n8n în procesele inginerești.",
      "timeline.t6.role":"Viziune viitoare","timeline.t6.desc":"Pod între ingineria clasică și ingineria digitală nativ-AI.",
      "certs.eyebrow":"Certificări","certs.title":"Certificate profesionale","certs.empty":"Nicio certificare adăugată încă — adaugă prima ta în script.js sub cheile certs.*.",
      "avail.eyebrow":"Disponibilitate internațională","avail.title":"Unde și cum pot lucra","avail.sub":"Modele flexibile de colaborare în Europa și nu numai.",
      "avail.i1":"Disponibil în toată Europa","avail.i2":"Deschis worldwide","avail.i3":"Deschis la relocare","avail.i4":"Colaborare remote","avail.i5":"Contract pe termen","avail.i6":"Angajare pe termen lung","avail.i7":"Freelancing","avail.i8":"Consultanță",
      "languages.eyebrow":"Limbi","languages.title":"Limbile în care lucrez","languages.sub":"Limbi de lucru profesionale.",
      "languages.ro.name":"Română","languages.ro.level":"Nativ (C2)",
      "languages.en.name":"Engleză","languages.en.level":"Profesional (C1)",
      "languages.fr.name":"Franceză","languages.fr.level":"De bază (A2)",
      "portfolio.eyebrow":"Proiecte","portfolio.title":"Proiecte selectate","portfolio.sub":"Apasă pe orice proiect pentru a deschide pagina dedicată — desene, problemă, soluție, tehnologii, lecții învățate.","portfolio.view":"Vezi studiul de caz",
      "portfolio.t1.tag":"Topografie","portfolio.t1.caption":"Ridicare Topografică — Zonă Urbană","portfolio.t1.stack":"AutoCAD, Stație totală, GNSS",
      "portfolio.t2.tag":"Cadastru","portfolio.t2.caption":"Plan Cadastral — Dezmembrare","portfolio.t2.stack":"AutoCAD, flux OCPI",
      "portfolio.t3.tag":"Clădire Civilă","portfolio.t3.caption":"Clădire Instituțională — Școală","portfolio.t3.stack":"AutoCAD, normative construcții",
      "portfolio.t4.tag":"Drum","portfolio.t4.caption":"Proiectare Drum — Drum Județean","portfolio.t4.stack":"AutoCAD Civil 3D, normative drumuri",
      "portfolio.t5.tag":"Pod","portfolio.t5.caption":"Proiect Pod — Pod din Beton","portfolio.t5.stack":"AutoCAD, normative structuri",
      "portfolio.t6.tag":"PNRR / UE","portfolio.t6.caption":"Proiect Civic finanțat PNRR","portfolio.t6.stack":"AutoCAD, PNRR (MRR / NextGenerationEU)",
      "contact.eyebrow":"Contact","contact.title":"Hai să discutăm despre proiectul tău","contact.sub":"Trimite un scurt brief, adresa amplasamentului și un termen. Răspund în cel mult o zi lucrătoare.",
      "contact.label":"Email","contact.cta":"Deschide clientul de email",
      "contact.phoneLabel":"Telefon","contact.phone":"+40 768 981 416","contact.callCta":"Sună",
      "contact.locationLabel":"Locație","contact.location":"România · Disponibil în toată Europa",
      "contact.availabilityLabel":"Disponibilitate","contact.availability":"Deschis către noi colaborări",
      "contact.responseLabel":"Timp de răspuns","contact.response":"În cel mult o zi lucrătoare",
      "contact.note":"Include orice desen, ridicare sau coordonate relevante, dacă le ai — grăbește primul răspuns.",
      "contact.linkedin":"LinkedIn","contact.github":"GitHub","contact.cv":"Descarcă CV",
      "footer.motto":"Inginerie cu rigoare. Livrată cu grijă.",
      "footer.quickLinks":"Linkuri rapide","footer.connect":"Conectare","footer.contact":"Contact",
      "footer.responseTime":"Timp mediu de răspuns: în cel mult o zi lucrătoare",
      "footer.copy":"© <span id=\"year\"></span> Afloarei Razvan-Bogdan — Toate drepturile rezervate.",
      "footer.meta":"Desenare AutoCAD · Topografie și Cadastru · Inginerie Civilă · Automatizare AI",
      "project.back":"← Înapoi la portofoliu","project.prev":"Proiectul anterior","project.next":"Proiectul următor","project.imageCaption":"Apasă pe imagine pentru dimensiune completă",
      "project.eyebrow":"Proiect",
      "project.meta.location":"Locație","project.meta.year":"An","project.meta.area":"Suprafață","project.meta.client":"Beneficiar","project.meta.funding":"Finanțare","project.meta.role":"Rol",
      "project.overviewHeading":"Prezentare","project.problemHeading":"Problemă","project.solutionHeading":"Soluție","project.techHeading":"Tehnologii folosite","project.roleHeading":"Rolul meu","project.deliverablesHeading":"Livrabile","project.timelineHeading":"Cronologie","project.impactHeading":"Impact","project.lessonsHeading":"Lecții învățate",
      "project.galleryHeading":"Desene","project.gallerySub":"Înlocuiește placeholderele cu exporturile reale.",
      "project.tagPlan":"Plan","project.tagSection":"Secțiune","project.tagDetail":"Detaliu",
      "project.timeline.start":"Start","project.timeline.now":"Acum","project.timeline.end":"Final",
      _projectContent("ro")
    };
  }

  function buildFR() {
    return {
      "nav.about":"À propos","nav.services":"Services","nav.work":"Projets","nav.skills":"Compétences","nav.tech":"Technologies","nav.process":"Processus","nav.projects":"Portfolio","nav.contact":"Contact","nav.linkedin":"LinkedIn","nav.github":"GitHub","nav.cv":"Télécharger CV",
      "hero.eyebrow":"Excellence en ingénierie","hero.title":"Ingénieur Géomètre","hero.title2":"Concepteur d'Infrastructures","hero.title3":"Spécialiste IA & Automatisation","hero.lede":"Topographie, cadastre, infrastructures civiles et solutions d'ingénierie augmentées par l'IA, à travers l'Europe.","hero.availability":"Ouvert aux opportunités",
      "hero.cta.projects":"Voir les projets","hero.cta.contact":"Me contacter","hero.cta.cv":"Télécharger CV","hero.cta.linkedin":"LinkedIn","hero.cta.github":"GitHub","hero.cta.availability":"Je suis disponible",
      "hero.trust.response":"Réponse sous 1 jour ouvré","hero.trust.eu":"Expérience fonds UE","hero.trust.languages":"RO · EN · FR · DE","hero.trust.remote":"Remote et présentiel worldwide",
      "stats.label1":"Années d'expérience","stats.label2":"Projets livrés","stats.label3":"Secteurs desservis","stats.label4":"Projets UE / État",
      "whyme.eyebrow":"Pourquoi moi","whyme.title":"Pourquoi les entreprises m'embauchent","whyme.sub":"Un mélange d'expérience terrain, de profondeur technique et de pratique moderne.",
      "whyme.c1.title":"Près d'une décennie d'expérience","whyme.c1.desc":"Ingénierie pratique dès le début de ma carrière.",
      "whyme.c2.title":"Bureau + terrain","whyme.c2.desc":"À l'aise sur un chantier comme à un bureau d'études.",
      "whyme.c3.title":"Livraison de bout en bout","whyme.c3.desc":"Du levé terrain au dossier de permis.",
      "whyme.c4.title":"Expertise en topographie","whyme.c4.desc":"Levés topographiques, cadastraux, d'ingénierie et GNSS.",
      "whyme.c5.title":"Conception d'infrastructures","whyme.c5.desc":"Routes, ponts, réseaux et bâtiments institutionnels.",
      "whyme.c6.title":"Administration publique","whyme.c6.desc":"Travail avec mairies, conseils départementaux et ministères.",
      "whyme.c7.title":"Projets financés par l'État","whyme.c7.desc":"Projets livrés dans le cadre de programmes nationaux.",
      "whyme.c8.title":"Projets financés par l'UE","whyme.c8.desc":"Incl. PNRR (Roumanie) et instruments UE similaires.",
      "whyme.c9.title":"Ingénierie augmentée par l'IA","whyme.c9.desc":"Agents LLM et automatisation intégrés au quotidien.",
      "whyme.c10.title":"Automatisation des processus","whyme.c10.desc":"Tâches répétitives éliminées via n8n, scripts, outils.",
      "whyme.c11.title":"Apprentissage rapide","whyme.c11.desc":"Nouveau logiciel, réglementation, langue — vite pris en main.",
      "whyme.c12.title":"Très adaptable","whyme.c12.desc":"Aussi à l'aise sur un chantier qu'en réunion ou derrière un écran.",
      "whyme.c13.title":"Sens du détail","whyme.c13.desc":"Plans, chiffres, contrats — vérifiés deux fois.",
      "whyme.c14.title":"Mentalité internationale","whyme.c14.desc":"Ouvert à la mobilité et à la collaboration transfrontalière.",
      "whyme.c15.title":"Optimisation des processus","whyme.c15.desc":"Toujours chercher la voie la plus rapide et la plus propre.",
      "whyme.c16.title":"Communication forte","whyme.c16.desc":"Rédaction technique claire et communications verbales concises.",
      "about.eyebrow":"À propos","about.title":"Ingénierie avec une touche moderne",
      "about.p1":"Je réalise des plans techniques AutoCAD pour les levés topographiques, la géodésie et le cadastre, ainsi que des projets complets de génie civil — bâtiments institutionnels, routes et ponts.",
      "about.p2":"J'ai livré des projets financés par des clients privés (institutions et investisseurs privés), par l'État roumain, et via des instruments de l'Union européenne — dont le PNRR, la mise en œuvre par la Roumanie de la Facilité pour la reprise et la résilience (FRR), composante principale de NextGenerationEU, le programme de relance post-COVID-19 de l'UE. Je suis ouvert aux fonds étrangers, idéalement avec un partenaire qui y a déjà accès.",
      "about.p3":"Je combine l'ingénierie traditionnelle avec les outils numériques modernes : topographie, levé d'ingénierie, cadastre, conception d'infrastructures, SIG, GNSS, LiDAR et levés par drone, construction et génie civil — le tout documenté via transformation numérique, automatisation par IA, optimisation des flux, gestion des connaissances et apprentissage continu.",
      "about.p4":"Au bureau, je cherche à rendre chaque processus aussi efficace que possible et à fournir le meilleur service possible. J'utilise des agents IA — Hermes, un VPS et des LLM — comme assistants. Ils épaulent mon travail, ils ne le remplacent pas : le succès du projet prime.",
      "services.eyebrow":"Services","services.title":"Ce que je livre","services.sub":"Ingénierie de bout en bout — du levé terrain au dossier de permis, avec IA intégrée.",
      "services.g1.title":"Topographie & Géomatique","services.g1.desc":"Mesures terrain, géodésie et acquisition de données.",
      "services.s1":"Levé topographique","services.s2":"Levé d'ingénierie","services.s3":"Cadastre & livre foncier","services.s4":"Mesures GNSS","services.s5":"Levé drone & traitement LiDAR","services.s6":"Analyse SIG",
      "services.g2.title":"Conception d'Infrastructures","services.g2.desc":"Conception de génie civil et documentation technique.",
      "services.s7":"Conception routière","services.s8":"Conception de ponts","services.s9":"Cartographie des réseaux","services.s10":"Implantation de chantier","services.s11":"Bâtiments civils & institutionnels",
      "services.g3.title":"Documentation & Conseil","services.g3.desc":"Dossiers de permis, notes techniques et soutien au financement.",
      "services.s12":"Documentation technique","services.s13":"Documentation de projet","services.s14":"Documentation de financement (UE / État)","services.s15":"Conseil technique",
      "services.g4.title":"Ingénierie Numérique & IA","services.g4.desc":"Outils modernes qui multiplient la valeur de chaque plan.",
      "services.s16":"Dessin DAO (AutoCAD)","services.s17":"Automatisation IA pour flux d'ingénierie","services.s18":"Automatisation des processus","services.s19":"Ingénierie numérique",
      "specs.eyebrow":"Spécialisations","specs.title":"Focus technique approfondi","specs.sub":"Là où j'apporte le plus de valeur.",
      "specs.list":"Levé cadastral, Levé d'ingénierie, Levé topographique, Conception d'infrastructures, Infrastructure routière, Infrastructure ferroviaire, Cartographie des réseaux, Levé de chantier, Analyse SIG, Mesures GNSS, LiDAR, Cartographie drone, Traitement de données géospatiales, Collaboration BIM, Ingénierie numérique, Ingénierie assistée par IA, Automatisation",
      "tech.eyebrow":"Technologies","tech.title":"Ma boîte à outils","tech.sub":"Logiciels, équipements et compétences numériques que j'utilise au quotidien.",
      "tech.g1":"Logiciels d'ingénierie","tech.g2":"Équipements de levé","tech.g3":"Compétences numériques",
      "tech.g1.list":"AutoCAD, Civil 3D, Revit, ArcGIS, QGIS, TopoLT, ProfLT, Microsoft Office",
      "tech.g2.list":"Récepteurs GNSS, Station totale, Drone, Scanner LiDAR",
      "tech.g3.list":"Python, Git, Docker, n8n, Agents IA (OpenAI, Claude, Gemini), Automatisation, Gestion des connaissances, Plateformes cloud",
      "skills.eyebrow":"Compétences","skills.title":"Domaines de compétence","skills.sub":"Regroupés par pratique.",
      "skills.eng":"Ingénierie","skills.eng.desc":"Conception, calcul, documentation technique, QA.",
      "skills.sur":"Topographie","skills.sur.desc":"Station totale, GNSS, drone, traitement LiDAR.",
      "skills.gis":"SIG","skills.gis.desc":"ArcGIS, QGIS, analyse géospatiale, cartographie.",
      "skills.prog":"Programmation","skills.prog.desc":"Python, scripting, traitement de données.",
      "skills.auto":"Automatisation","skills.auto.desc":"n8n, agents IA, automatisation documentaire et de flux.",
      "skills.mgmt":"Gestion","skills.mgmt.desc":"Coordination de projet, planification, budget.",
      "skills.comm":"Communication","skills.comm.desc":"Rédaction technique, interface client, présentations.",
      "skills.lead":"Leadership","skills.lead.desc":"Conduire de petites équipes, mentorat.",
      "skills.ps":"Résolution de problèmes","skills.ps.desc":"Solutions pragmatiques sous contraintes.",
      "skills.anal":"Pensée analytique","skills.anal.desc":"Décisions data-driven, évaluation des risques.",
      "skills.coord":"Coordination de projet","skills.coord.desc":"Livraison multi-parties, multi-disciplines.",
      "industries.eyebrow":"Secteurs","industries.title":"Où j'ai travaillé","industries.sub":"Secteurs où j'ai une expérience directe.",
      "industries.list":"Transport, Chemins de fer, Routes, Ponts, Réseaux, Énergies renouvelables, Aménagement foncier, Construction, SIG, Mines, Agriculture, Smart cities, Administration publique, Projets gouvernementaux, Promotion privée, Infrastructure",
      "philosophy.eyebrow":"Philosophie de travail","philosophy.title":"Ce en quoi je crois",
      "philosophy.q1":"Qualité","philosophy.q1.desc":"Chaque plan, chaque calcul — bien fait du premier coup.",
      "philosophy.q2":"Précision","philosophy.q2.desc":"Mesurer deux fois, documenter une fois.",
      "philosophy.q3":"Efficacité","philosophy.q3.desc":"Automatiser le répétitif ; passer du temps sur le critique.",
      "philosophy.q4":"Innovation","philosophy.q4.desc":"Tester de nouveaux outils, méthodes, approches.",
      "philosophy.q5":"Amélioration continue","philosophy.q5.desc":"Chaque projet enseigne pour le suivant.",
      "philosophy.q6":"Transformation numérique","philosophy.q6.desc":"Faire passer les workflows papier dans des pipelines numériques.",
      "philosophy.q7":"Automatisation","philosophy.q7.desc":"Si je le fais deux fois, je le script une fois.",
      "philosophy.q8":"Apprentissage tout au long de la vie","philosophy.q8.desc":"Nouvelles réglementations, nouveaux logiciels, nouvelles langues.",
      "philosophy.q9":"Intégrité professionnelle","philosophy.q9.desc":"Reporting honnête, même quand c'est inconfortable.",
      "philosophy.q10":"Excellence en ingénierie","philosophy.q10.desc":"Le résultat justifie la rigueur.",
      "ai.eyebrow":"IA & Automatisation","ai.title":"Ingénierie moderne, outils modernes","ai.sub":"J'intègre IA et automatisation dans mon flux d'ingénierie — comme assistants, pas remplaçants.",
      "ai.s1":"Agents IA (style Hermes)","ai.s1.desc":"Agents LLM spécialisés, exécutés en local ou sur un VPS.",
      "ai.s2":"Automatisation des flux (n8n)","ai.s2.desc":"Pipelines multi-étapes qui déplacent les données entre outils.",
      "ai.s3":"Systèmes de connaissance","ai.s3.desc":"Connaissance d'ingénierie structurée, recherchable et réutilisable.",
      "ai.s4":"Productivité d'ingénierie","ai.s4.desc":"Dessin plus rapide, moins d'erreurs manuelles.",
      "ai.s5":"Documentation numérique","ai.s5.desc":"Dossiers propres, structurés, lisibles par machine.",
      "ai.s6":"Analyse documentaire","ai.s6.desc":"Extraction de données structurées depuis PDFs et scans.",
      "ai.s7":"Organisation des données","ai.s7.desc":"Transformer des mesures brutes en datasets propres.",
      "ai.s8":"Prompt engineering","ai.s8.desc":"Sorties LLM fiables via un prompting soigné.",
      "ai.s9":"IA locale","ai.s9.desc":"Modèles sur l'appareil pour la confidentialité.",
      "ai.s10":"IA cloud","ai.s10.desc":"Modèles frontière quand la tâche l'exige.",
      "ai.s11":"Méthodologie documentée","ai.s11.desc":"Chaque automatisation livrée a un processus écrit derrière.",
      "timeline.eyebrow":"Parcours","timeline.title":"Comment j'en suis arrivé là","timeline.sub":"De technicien à consultant en ingénierie IA-aware.",
      "timeline.t1.role":"Technicien topographe","timeline.t1.desc":"Débuts en topographie de terrain — station totale, GNSS, levés topographiques et cadastraux.",
      "timeline.t2.role":"Ingénieur géomètre","timeline.t2.desc":"Responsabilité des livrables complets de topographie et des dossiers OCPI.",
      "timeline.t3.role":"Concepteur d'infrastructures","timeline.t3.desc":"Passage à la conception de génie civil — routes, ponts, bâtiments institutionnels.",
      "timeline.t4.role":"Ingénieur de projet","timeline.t4.desc":"Ownership de bout en bout : périmètre, conception, documentation, interface client.",
      "timeline.t5.role":"Spécialiste IA & Automatisation","timeline.t5.desc":"Intégration d'agents LLM et de workflows n8n dans les processus d'ingénierie.",
      "timeline.t6.role":"Vision future","timeline.t6.desc":"Pont entre ingénierie classique et ingénierie numérique native IA.",
      "certs.eyebrow":"Certifications","certs.title":"Certificats professionnels","certs.empty":"Aucun certificat ajouté — ajoutez votre premier dans script.js sous les clés certs.*.",
      "avail.eyebrow":"Disponibilité internationale","avail.title":"Où & comment je peux travailler","avail.sub":"Modes d'engagement flexibles à travers l'Europe et au-delà.",
      "avail.i1":"Disponible à travers l'Europe","avail.i2":"Ouvert au monde entier","avail.i3":"Ouvert à la mobilité","avail.i4":"Collaboration à distance","avail.i5":"Contrat","avail.i6":"Emploi long terme","avail.i7":"Freelance","avail.i8":"Conseil",
      "languages.eyebrow":"Langues","languages.title":"Langues de travail","languages.sub":"Langues professionnelles.",
      "languages.ro.name":"Roumain","languages.ro.level":"Natif (C2)",
      "languages.en.name":"Anglais","languages.en.level":"Professionnel (C1)",
      "languages.fr.name":"Français","languages.fr.level":"Notions (A2)",
      "portfolio.eyebrow":"Projets","portfolio.title":"Projets sélectionnés","portfolio.sub":"Cliquez sur un projet pour ouvrir sa page dédiée — plans, problème, solution, technologies, leçons apprises.","portfolio.view":"Voir l'étude de cas",
      "portfolio.t1.tag":"Topographie","portfolio.t1.caption":"Levé topographique — zone urbaine","portfolio.t1.stack":"AutoCAD, Station totale, GNSS",
      "portfolio.t2.tag":"Cadastre","portfolio.t2.caption":"Plan cadastral — lotissement","portfolio.t2.stack":"AutoCAD, flux OCPI",
      "portfolio.t3.tag":"Bâtiment civil","portfolio.t3.caption":"Bâtiment institutionnel — école","portfolio.t3.stack":"AutoCAD, normes bâtiment",
      "portfolio.t4.tag":"Route","portfolio.t4.caption":"Conception routière — route départementale","portfolio.t4.stack":"AutoCAD Civil 3D, normes routières",
      "portfolio.t5.tag":"Pont","portfolio.t5.caption":"Projet de pont — pont en béton","portfolio.t5.stack":"AutoCAD, normes structure",
      "portfolio.t6.tag":"PNRR / UE","portfolio.t6.caption":"Projet civique financé PNRR","portfolio.t6.stack":"AutoCAD, PNRR (FRR / NextGenerationEU)",
      "contact.eyebrow":"Contact","contact.title":"Parlons de votre projet","contact.sub":"Envoyez un brief court, l'adresse du site et un délai. Je réponds sous un jour ouvré.",
      "contact.label":"Email","contact.cta":"Ouvrir le client email",
      "contact.phoneLabel":"Téléphone","contact.phone":"+40 768 981 416","contact.callCta":"Appeler",
      "contact.locationLabel":"Localisation","contact.location":"Roumanie · Disponible à travers l'Europe",
      "contact.availabilityLabel":"Disponibilité","contact.availability":"Ouvert aux opportunités",
      "contact.responseLabel":"Temps de réponse","contact.response":"Sous 1 jour ouvré",
      "contact.note":"Joignez plans, levés ou coordonnées si disponibles — cela accélère la première réponse.",
      "contact.linkedin":"LinkedIn","contact.github":"GitHub","contact.cv":"Télécharger CV",
      "footer.motto":"Ingénierie avec rigueur. Livrée avec soin.",
      "footer.quickLinks":"Liens rapides","footer.connect":"Connexion","footer.contact":"Contact",
      "footer.responseTime":"Temps de réponse habituel : sous 1 jour ouvré",
      "footer.copy":"© <span id=\"year\"></span> Afloarei Razvan-Bogdan — Tous droits réservés.",
      "footer.meta":"Dessin AutoCAD · Topographie & Cadastre · Génie Civil · Automatisation IA",
      "project.back":"← Retour au portfolio","project.prev":"Projet précédent","project.next":"Projet suivant","project.imageCaption":"Cliquez l'image pour la taille réelle",
      "project.eyebrow":"Projet",
      "project.meta.location":"Localisation","project.meta.year":"Année","project.meta.area":"Surface","project.meta.client":"Client","project.meta.funding":"Financement","project.meta.role":"Rôle",
      "project.overviewHeading":"Aperçu","project.problemHeading":"Problème","project.solutionHeading":"Solution","project.techHeading":"Technologies utilisées","project.roleHeading":"Mon rôle","project.deliverablesHeading":"Livrables","project.timelineHeading":"Chronologie","project.impactHeading":"Impact","project.lessonsHeading":"Leçons apprises",
      "project.galleryHeading":"Plans","project.gallerySub":"Remplacez les placeholders par vos exports réels.",
      "project.tagPlan":"Plan","project.tagSection":"Coupe","project.tagDetail":"Détail",
      "project.timeline.start":"Début","project.timeline.now":"Maintenant","project.timeline.end":"Fin",
      _projectContent("fr")
    };
  }

  function buildDE() {
    return {
      "nav.about":"Über mich","nav.services":"Leistungen","nav.work":"Projekte","nav.skills":"Kompetenzen","nav.tech":"Technologien","nav.process":"Prozess","nav.projects":"Portfolio","nav.contact":"Kontakt","nav.linkedin":"LinkedIn","nav.github":"GitHub","nav.cv":"Lebenslauf laden",
      "hero.eyebrow":"Ingenieur-Exzellenz","hero.title":"Vermessungsingenieur","hero.title2":"Infrastruktur-Designer","hero.title3":"KI- & Automatisierungs-Experte","hero.lede":"Vermessung, Kataster, Tiefbau und KI-gestützte Ingenieurlösungen in ganz Europa.","hero.availability":"Offen für neue Möglichkeiten",
      "hero.cta.projects":"Projekte ansehen","hero.cta.contact":"Kontakt aufnehmen","hero.cta.cv":"Lebenslauf laden","hero.cta.linkedin":"LinkedIn","hero.cta.github":"GitHub","hero.cta.availability":"Ich bin verfügbar",
      "hero.trust.response":"Antwort innerhalb eines Werktags","hero.trust.eu":"Erfahrung mit EU-Fonds","hero.trust.languages":"RO · EN · FR · DE","hero.trust.remote":"Remote & vor Ort weltweit",
      "stats.label1":"Jahre Erfahrung","stats.label2":"Gelieferte Projekte","stats.label3":"Bediente Branchen","stats.label4":"EU-/Staats-Projekte",
      "whyme.eyebrow":"Warum ich","whyme.title":"Warum Unternehmen mich einstellen","whyme.sub":"Eine Mischung aus Felderfahrung, technischer Tiefe und moderner Ingenieurpraxis.",
      "whyme.c1.title":"Fast ein Jahrzehnt Erfahrung","whyme.c1.desc":"Praktische Ingenieursarbeit seit Berufsbeginn.",
      "whyme.c2.title":"Büro + Feld","whyme.c2.desc":"Auf der Baustelle genauso sicher wie am Schreibtisch.",
      "whyme.c3.title":"End-to-End-Lieferung","whyme.c3.desc":"Vom Feldaufmaß bis zum genehmigungsreifen Planpaket.",
      "whyme.c4.title":"Vermessungs-Expertise","whyme.c4.desc":"Topographie, Kataster, Ingenieur- und GNSS-Vermessungen.",
      "whyme.c5.title":"Infrastruktur-Design","whyme.c5.desc":"Straßen, Brücken, Versorgung und institutionelle Gebäude.",
      "whyme.c6.title":"Öffentliche Verwaltung","whyme.c6.desc":"Mit Rathäusern, Landkreisen und Ministerien gearbeitet.",
      "whyme.c7.title":"Staatlich finanzierte Projekte","whyme.c7.desc":"Projekte in nationalen Investitionsprogrammen geliefert.",
      "whyme.c8.title":"EU-finanzierte Projekte","whyme.c8.desc":"Inkl. PNRR (Rumänien) und ähnlichen EU-Instrumenten.",
      "whyme.c9.title":"KI-gestützte Ingenieursarbeit","whyme.c9.desc":"LLM-Agenten und Automatisierung im Alltag integriert.",
      "whyme.c10.title":"Prozessautomatisierung","whyme.c10.desc":"Wiederkehrende Aufgaben mit n8n, Skripten und Tools eliminiert.",
      "whyme.c11.title":"Schneller Lerner","whyme.c11.desc":"Neue Software, Vorschriften, Sprachen — zügig im Griff.",
      "whyme.c12.title":"Hoch anpassungsfähig","whyme.c12.desc":"Auf der Baustelle, im Meeting oder am Bildschirm gleich aufgelegt.",
      "whyme.c13.title":"Detailorientiert","whyme.c13.desc":"Pläne, Zahlen, Verträge — zweimal geprüft.",
      "whyme.c14.title":"Internationale Ausrichtung","whyme.c14.desc":"Offen für Umzug und grenzüberschreitende Zusammenarbeit.",
      "whyme.c15.title":"Prozessoptimierung","whyme.c15.desc":"Immer den schnelleren, saubereren Weg suchen.",
      "whyme.c16.title":"Starke Kommunikation","whyme.c16.desc":"Klare technische Texte und prägnante mündliche Updates.",
      "about.eyebrow":"Über mich","about.title":"Ingenieursarbeit mit modernem Ansatz",
      "about.p1":"Ich erstelle technische AutoCAD-Zeichnungen für topographische Aufnahmen, Geodäsie und Kataster sowie komplette Projekte im Bauingenieurwesen — institutionelle Gebäude, Straßen und Brücken.",
      "about.p2":"Ich habe Projekte für private Auftraggeber (Institutionen und Privatinvestoren), für den rumänischen Staat und über EU-Instrumente geliefert — einschließlich PNRR, Rumäniens Umsetzung der EU-Aufbau- und Resilienzfazilität (RRF), der Hauptkomponente von NextGenerationEU, dem COVID-19-Wiederaufbauprogramm der EU. Ich bin offen für ausländische Fördermittel, idealerweise mit einem Partner, der bereits darauf zugegriffen hat.",
      "about.p3":"Ich verbinde traditionelles Ingenieurwesen mit modernen digitalen Werkzeugen: Vermessung, Ingenieurvermessung, Kataster, Infrastrukturplanung, GIS, GNSS, LiDAR und Drohnenvermessung, Bau- und Tiefbauarbeiten — alles dokumentiert durch digitale Transformation, KI-Automatisierung, Workflow-Optimierung, Wissensmanagement und kontinuierliches Lernen.",
      "about.p4":"Im Büro konzentriere ich mich darauf, jeden Prozess, in den ich eingebunden bin, so effizient wie möglich zu machen und den bestmöglichen Service zu liefern. Ich nutze KI-Agenten — Hermes, einen VPS und LLMs — als Assistenten. Sie unterstützen meine Arbeit, sie ersetzen sie nicht: der Erfolg des Projekts steht an erster Stelle.",
      "services.eyebrow":"Leistungen","services.title":"Was ich liefere","services.sub":"End-to-End-Engineering — vom Feldaufmaß zum genehmigungsreifen Planpaket, mit integrierter KI.",
      "services.g1.title":"Vermessung & Geomatik","services.g1.desc":"Feldmessung, Geodäsie und Datenerfassung.",
      "services.s1":"Topographische Vermessung","services.s2":"Ingenieurvermessung","services.s3":"Kataster & Grundbuch","services.s4":"GNSS-Messungen","services.s5":"Drohnen- & LiDAR-Vermessung","services.s6":"GIS-Analyse",
      "services.g2.title":"Infrastruktur-Design","services.g2.desc":"Bauingenieur-Planung und technische Dokumentation.",
      "services.s7":"Straßenplanung","services.s8":"Brückenplanung","services.s9":"Versorgungsleitungskartierung","services.s10":"Baustellenabsteckung","services.s11":"Zivil- und institutionelle Gebäude",
      "services.g3.title":"Dokumentation & Beratung","services.g3.desc":"Genehmigungspakete, technische Memoranden und Fördermittel-Support.",
      "services.s12":"Technische Dokumentation","services.s13":"Projektdokumentation","services.s14":"Förderdokumentation (EU / Staat)","services.s15":"Technische Beratung",
      "services.g4.title":"Digitales Engineering & KI","services.g4.desc":"Moderne Werkzeuge, die den Wert jedes Plans vervielfachen.",
      "services.s16":"CAD-Zeichnung (AutoCAD)","services.s17":"KI-Automatisierung für Ingenieur-Workflows","services.s18":"Workflow-Automatisierung","services.s19":"Digitales Engineering",
      "specs.eyebrow":"Spezialisierungen","specs.title":"Tiefer technischer Fokus","specs.sub":"Wo ich den größten Mehrwert liefere.",
      "specs.list":"Katastervermessung, Ingenieurvermessung, Topographische Vermessung, Infrastruktur-Design, Straßeninfrastruktur, Schieneninfrastruktur, Leitungskartierung, Bauvermessung, GIS-Analyse, GNSS-Messungen, LiDAR, Drohnenkartierung, Geodatenverarbeitung, BIM-Zusammenarbeit, Digitales Engineering, KI-gestütztes Engineering, Automatisierung",
      "tech.eyebrow":"Technologien","tech.title":"Mein Werkzeugkasten","tech.sub":"Software, Ausrüstung und digitale Kompetenzen, mit denen ich täglich arbeite.",
      "tech.g1":"Ingenieur-Software","tech.g2":"Vermessungsausrüstung","tech.g3":"Digitale Kompetenzen",
      "tech.g1.list":"AutoCAD, Civil 3D, Revit, ArcGIS, QGIS, TopoLT, ProfLT, Microsoft Office",
      "tech.g2.list":"GNSS-Empfänger, Totalstation, Drohne, LiDAR-Scanner",
      "tech.g3.list":"Python, Git, Docker, n8n, KI-Agenten (OpenAI, Claude, Gemini), Automatisierung, Wissensmanagement, Cloud-Plattformen",
      "skills.eyebrow":"Kompetenzen","skills.title":"Kompetenzfelder","skills.sub":"Nach Praxisbereich gruppiert.",
      "skills.eng":"Ingenieurwesen","skills.eng.desc":"Planung, Berechnung, technische Dokumentation, QA.",
      "skills.sur":"Vermessung","skills.sur.desc":"Totalstation, GNSS, Drohne, LiDAR-Verarbeitung.",
      "skills.gis":"GIS","skills.gis.desc":"ArcGIS, QGIS, Geodatenanalyse, Kartierung.",
      "skills.prog":"Programmierung","skills.prog.desc":"Python, Scripting, Datenverarbeitung.",
      "skills.auto":"Automatisierung","skills.auto.desc":"n8n, KI-Agenten, Dokument- und Workflow-Automatisierung.",
      "skills.mgmt":"Management","skills.mgmt.desc":"Projektkoordination, Planung, Budgetierung.",
      "skills.comm":"Kommunikation","skills.comm.desc":"Technische Texte, Kundenkommunikation, Präsentationen.",
      "skills.lead":"Führung","skills.lead.desc":"Leitung kleiner Teams, Mentoring.",
      "skills.ps":"Problemlösung","skills.ps.desc":"Pragmatische Lösungen unter Einschränkungen.",
      "skills.anal":"Analytisches Denken","skills.anal.desc":"Datengetriebene Entscheidungen, Risikobewertung.",
      "skills.coord":"Projektkoordination","skills.coord.desc":"Multi-Stakeholder-, Multi-Disziplin-Lieferung.",
      "industries.eyebrow":"Branchen","industries.title":"Wo ich gearbeitet habe","industries.sub":"Sektoren mit direkter Erfahrung.",
      "industries.list":"Transport, Schienen, Straßen, Brücken, Versorgung, Erneuerbare Energien, Landentwicklung, Bauwesen, GIS, Bergbau, Landwirtschaft, Smart Cities, Öffentliche Verwaltung, Regierungsprojekte, Private Entwicklung, Infrastruktur",
      "philosophy.eyebrow":"Arbeitsphilosophie","philosophy.title":"Wofür ich stehe",
      "philosophy.q1":"Qualität","philosophy.q1.desc":"Jeder Plan, jede Berechnung — gleich beim ersten Mal richtig.",
      "philosophy.q2":"Genauigkeit","philosophy.q2.desc":"Zweimal messen, einmal dokumentieren.",
      "philosophy.q3":"Effizienz","philosophy.q3.desc":"Wiederkehrendes automatisieren; Zeit für das Wesentliche.",
      "philosophy.q4":"Innovation","philosophy.q4.desc":"Neue Tools, Methoden, Ansätze ausprobieren.",
      "philosophy.q5":"Kontinuierliche Verbesserung","philosophy.q5.desc":"Jedes Projekt lehrt etwas für das nächste.",
      "philosophy.q6":"Digitale Transformation","philosophy.q6.desc":"Papier-Workflows in strukturierte digitale Pipelines überführen.",
      "philosophy.q7":"Automatisierung","philosophy.q7.desc":"Wenn ich es zweimal mache, skripte ich es einmal.",
      "philosophy.q8":"Lebenslanges Lernen","philosophy.q8.desc":"Neue Vorschriften, neue Software, neue Sprachen.",
      "philosophy.q9":"Berufliche Integrität","philosophy.q9.desc":"Ehrliches Reporting, auch wenn es unbequem ist.",
      "philosophy.q10":"Ingenieur-Exzellenz","philosophy.q10.desc":"Das Ergebnis rechtfertigt die Sorgfalt.",
      "ai.eyebrow":"KI & Automatisierung","ai.title":"Moderne Technik, moderne Werkzeuge","ai.sub":"Ich integriere KI und Automatisierung in meinen Ingenieur-Workflow — als Assistenten, nicht als Ersatz.",
      "ai.s1":"KI-Agenten (Hermes-Stil)","ai.s1.desc":"Spezialisierte LLM-Agenten, lokal oder auf einem VPS ausgeführt.",
      "ai.s2":"Workflow-Automatisierung (n8n)","ai.s2.desc":"Mehrstufige Pipelines, die Daten zwischen Tools bewegen.",
      "ai.s3":"Wissenssysteme","ai.s3.desc":"Strukturiertes Ingenieurwissen, durchsuchbar und wiederverwendbar.",
      "ai.s4":"Ingenieur-Produktivität","ai.s4.desc":"Schneller zeichnen, weniger manuelle Fehler.",
      "ai.s5":"Digitale Dokumentation","ai.s5.desc":"Saubere, strukturierte, maschinenlesbare Projektaufzeichnungen.",
      "ai.s6":"Dokumentenanalyse","ai.s6.desc":"Strukturierte Daten aus PDFs und Scans extrahieren.",
      "ai.s7":"Datenorganisation","ai.s7.desc":"Rohe Messungen in saubere Datensätze verwandeln.",
      "ai.s8":"Prompt Engineering","ai.s8.desc":"Zuverlässige LLM-Ausgaben durch sorgfältiges Prompting.",
      "ai.s9":"Lokale KI","ai.s9.desc":"Datenschutzfreundliche On-Device-Modelle, wo sinnvoll.",
      "ai.s10":"Cloud-KI","ai.s10.desc":"Frontier-Modelle, wenn die Aufgabe es erfordert.",
      "ai.s11":"Dokumentierte Methodik","ai.s11.desc":"Jede ausgelieferte Automatisierung hat einen dokumentierten Prozess.",
      "timeline.eyebrow":"Werdegang","timeline.title":"Wie ich hierher kam","timeline.sub":"Vom Techniker zum KI-bewussten Ingenieurberater.",
      "timeline.t1.role":"Vermessungstechniker","timeline.t1.desc":"Start in der Feldvermessung — Totalstation, GNSS, topographische und Kataster-Aufnahmen.",
      "timeline.t2.role":"Vermessungsingenieur","timeline.t2.desc":"Verantwortung für komplette Vermessungs-Liefergegenstände und OCPI-Einreichungen.",
      "timeline.t3.role":"Infrastruktur-Designer","timeline.t3.desc":"Wechsel in den Tiefbau — Straßen, Brücken, institutionelle Gebäude.",
      "timeline.t4.role":"Projektingenieur","timeline.t4.desc":"End-to-End-Projektverantwortung: Umfang, Planung, Dokumentation, Kundenkontakt.",
      "timeline.t5.role":"KI- & Automatisierungs-Experte","timeline.t5.desc":"Integration von LLM-Agenten und n8n-Workflows in Ingenieurprozesse.",
      "timeline.t6.role":"Zukunftsvision","timeline.t6.desc":"Brücke zwischen klassischem Ingenieurwesen und KI-nativem Digital Engineering.",
      "certs.eyebrow":"Zertifizierungen","certs.title":"Berufliche Zertifikate","certs.empty":"Noch keine Zertifikate hinzugefügt — fügen Sie Ihr erstes in script.js unter certs.* hinzu.",
      "avail.eyebrow":"Internationale Verfügbarkeit","avail.title":"Wo & wie ich arbeiten kann","avail.sub":"Flexible Engagement-Modelle in Europa und darüber hinaus.",
      "avail.i1":"Verfügbar in ganz Europa","avail.i2":"Weltweit offen","avail.i3":"Offen für Umzug","avail.i4":"Remote-Zusammenarbeit","avail.i5":"Auftrag","avail.i6":"Festanstellung","avail.i7":"Freelancing","avail.i8":"Beratung",
      "languages.eyebrow":"Sprachen","languages.title":"Arbeitssprachen","languages.sub":"Berufliche Arbeitssprachen.",
      "languages.ro.name":"Rumänisch","languages.ro.level":"Muttersprache (C2)",
      "languages.en.name":"Englisch","languages.en.level":"Beruflich (C1)",
      "languages.fr.name":"Französisch","languages.fr.level":"Grundlagen (A2)",
      "portfolio.eyebrow":"Projekte","portfolio.title":"Ausgewählte Projekte","portfolio.sub":"Klicken Sie auf ein Projekt, um die eigene Seite zu öffnen — Pläne, Problem, Lösung, Technologien, Learnings.","portfolio.view":"Case Study ansehen",
      "portfolio.t1.tag":"Topographie","portfolio.t1.caption":"Topographische Vermessung — Stadtgebiet","portfolio.t1.stack":"AutoCAD, Totalstation, GNSS",
      "portfolio.t2.tag":"Kataster","portfolio.t2.caption":"Katasterplan — Parzellierung","portfolio.t2.stack":"AutoCAD, OCPI-Workflow",
      "portfolio.t3.tag":"Zivilbau","portfolio.t3.caption":"Institutionelles Gebäude — Schule","portfolio.t3.stack":"AutoCAD, Baunormen",
      "portfolio.t4.tag":"Straße","portfolio.t4.caption":"Straßenplanung — Kreisstraße","portfolio.t4.stack":"AutoCAD Civil 3D, Straßennormen",
      "portfolio.t5.tag":"Brücke","portfolio.t5.caption":"Brückenprojekt — Betonbrücke","portfolio.t5.stack":"AutoCAD, Tragwerksnormen",
      "portfolio.t6.tag":"PNRR / EU","portfolio.t6.caption":"PNRR-finanziertes Bürgerprojekt","portfolio.t6.stack":"AutoCAD, PNRR (RRF / NextGenerationEU)",
      "contact.eyebrow":"Kontakt","contact.title":"Lassen Sie uns über Ihr Projekt sprechen","contact.sub":"Senden Sie ein kurzes Briefing, die Adresse des Standorts und einen Zeitrahmen. Ich antworte innerhalb eines Werktags.",
      "contact.label":"E-Mail","contact.cta":"E-Mail-Programm öffnen",
      "contact.phoneLabel":"Telefon","contact.phone":"+40 768 981 416","contact.callCta":"Anrufen",
      "contact.locationLabel":"Standort","contact.location":"Rumänien · Verfügbar in ganz Europa",
      "contact.availabilityLabel":"Verfügbarkeit","contact.availability":"Offen für neue Möglichkeiten",
      "contact.responseLabel":"Antwortzeit","contact.response":"Innerhalb eines Werktags",
      "contact.note":"Fügen Sie relevante Pläne, Vermessungen oder Koordinaten bei, falls vorhanden — das beschleunigt die erste Antwort.",
      "contact.linkedin":"LinkedIn","contact.github":"GitHub","contact.cv":"Lebenslauf laden",
      "footer.motto":"Ingenieurskunst mit Sorgfalt. Geliefert mit Präzision.",
      "footer.quickLinks":"Schnellzugriff","footer.connect":"Vernetzen","footer.contact":"Kontakt",
      "footer.responseTime":"Übliche Antwortzeit: innerhalb eines Werktags",
      "footer.copy":"© <span id=\"year\"></span> Afloarei Razvan-Bogdan — Alle Rechte vorbehalten.",
      "footer.meta":"AutoCAD-Zeichnung · Vermessung & Kataster · Bauingenieurwesen · KI-Automatisierung",
      "project.back":"← Zurück zum Portfolio","project.prev":"Vorheriges Projekt","project.next":"Nächstes Projekt","project.imageCaption":"Bild anklicken für volle Größe",
      "project.eyebrow":"Projekt",
      "project.meta.location":"Standort","project.meta.year":"Jahr","project.meta.area":"Fläche","project.meta.client":"Auftraggeber","project.meta.funding":"Finanzierung","project.meta.role":"Rolle",
      "project.overviewHeading":"Überblick","project.problemHeading":"Problem","project.solutionHeading":"Lösung","project.techHeading":"Verwendete Technologien","project.roleHeading":"Meine Rolle","project.deliverablesHeading":"Liefergegenstände","project.timelineHeading":"Zeitstrahl","project.impactHeading":"Wirkung","project.lessonsHeading":"Lessons Learned",
      "project.galleryHeading":"Pläne","project.gallerySub":"Ersetzen Sie die Platzhalter durch echte Exporte.",
      "project.tagPlan":"Grundriss","project.tagSection":"Schnitt","project.tagDetail":"Detail",
      "project.timeline.start":"Start","project.timeline.now":"Jetzt","project.timeline.end":"Ende",
      _projectContent("de")
    };
  }

  /* Per-project content (the only section that varies in tone across languages) */
  function _projectContent(lang) {
    var set = {
      en: {
        p1: ["Topography","Topographical Survey — Urban Area","Urban area, Romania","2024","~12 ha","Private investor","Private","Topographical survey & contour plan","[PLACEHOLDER OVERVIEW — EDIT ME] Field survey of an urban area covering approximately 12 hectares. Measurements were taken with total-station equipment and geo-referenced in the Romanian national projection (Stereo 70). The resulting drawing includes contour lines, spot heights, existing infrastructure (roads, sidewalks, utilities) and the built environment — ready to use as the base for any design or cadaster workflow.","[PLACEHOLDER] The client needed an accurate, geo-referenced base drawing for downstream design and permitting. Existing public data was outdated and incomplete.","[PLACEHOLDER] A complete topographical survey using total-station and GNSS measurements, processed into a geo-referenced DWG base map at 1:500 with contour lines, spot heights and infrastructure overlay.","AutoCAD, Total Station, GNSS, Stereo 70 projection","Lead surveyor — field measurement, data processing, contour plan, DWG delivery.","Field measurements (raw + processed), 1:500 DWG base, contour plan, infrastructure overlay, technical memo.","2024 Q1","2024 Q2","2024 Q3","[PLACEHOLDER] Provided the design team with a clean, geo-referenced base — eliminating rework and accelerating downstream approvals.","[PLACEHOLDER] Always verify the client's coordinate system assumptions up-front; document the projection and datum in the deliverables.","Survey base — overview","Spot heights & contour lines","Existing infrastructure overlay"],
        p2: ["Cadaster","Cadastral Plan — Lot Subdivision","Peri-urban area, Romania","2023","~5.7 ha · 5 lots","Private owners","Private","Cadastral plan & OCPI submission","[PLACEHOLDER OVERVIEW — EDIT ME] Cadastral plan for a peri-urban parcel subdivided into 5 lots. The drawing documents each parcel's boundaries, areas and access points, and is prepared for OCPI submission and the issuance of new land-registry excerpts.","[PLACEHOLDER] Five co-owners needed to legally divide a shared parcel into individually titled lots without boundary disputes.","[PLACEHOLDER] Boundary survey, subdivision plan at 1:1000, OCPI documentation package and land-registry excerpts for each new parcel.","AutoCAD, GNSS, OCPI / ANCPI workflow","Surveyor & drafter — boundary survey, subdivision plan, OCPI package.","Boundary survey, subdivision plan, OCPI documentation, land-registry excerpts.","2023 Q1","2023 Q2","2023 Q3","[PLACEHOLDER] Five new land-registry titles issued; property can now be sold, inherited or financed individually.","[PLACEHOLDER] Document every measurement uncertainty — cadaster disputes surface years later, often during a sale.","Subdivision plan","Boundary detail","Coordinate table"],
        p3: ["Civil Building","Institutional Building — School","Town, Romania","2024","~2,500 m² built · G+1","Town hall / public institution","State / EU","Architectural plans & technical documentation","[PLACEHOLDER OVERVIEW — EDIT ME] Ground-floor and first-floor plans for a public school, including classrooms, administrative offices, gym and ancillary spaces. Drawings are aligned with Romanian technical and fire-safety regulations and prepared as part of the permit documentation package.","[PLACEHOLDER] The town needed a permit-ready package for a new school building, compliant with national and EU procurement requirements.","[PLACEHOLDER] Architectural plans, sections, technical memo, fire-safety layouts and the full permit package — structured to align with public-investment procedures.","AutoCAD, Romanian building code, fire-safety regulations","Architectural drafter — plans, sections, technical documentation.","Architectural plans, sections, technical memo, fire-safety layouts, permit package.","2023 Q4","2024 Q1","2024 Q3","[PLACEHOLDER] Project cleared permitting and moved into procurement.","[PLACEHOLDER] For public projects, structure files exactly the way the procurement officer expects — saves weeks of clarification.","Ground floor plan","First floor plan","Typical section"],
        p4: ["Road","Road Design — County Road","County road, Romania","2023","1.52 km","County council","State","Alignment, profile & cross-sections","[PLACEHOLDER OVERVIEW — EDIT ME] Rehabilitation design for a 1.52 km section of county road, including plan, longitudinal profile and typical cross-section. Carriageway width 7.00 m, with 2.00 m shoulders on each side; pavement structure designed for the local traffic category.","[PLACEHOLDER] A county road needed full rehabilitation design — geometry, structure and drainage — ready for tender.","[PLACEHOLDER] Plan view, longitudinal profile, typical cross-section, pavement structure and drainage layout — packaged for tender and execution.","AutoCAD Civil 3D, Romanian road standards","Road designer — geometry, profile, cross-sections, drainage layout.","Plan view, longitudinal profile, typical cross-section, pavement structure, drainage layout.","2023 Q1","2023 Q2","2023 Q4","[PLACEHOLDER] Project tendered and awarded; rehabilitation executed on schedule.","[PLACEHOLDER] Coordinate with the drainage designer early — geometric adjustments late in the process are expensive.","Plan view","Longitudinal profile","Typical cross-section"],
        p5: ["Bridge","Bridge Project — Concrete Bridge","River crossing, Romania","2024","64 m · 3 spans","County council","State / PNRR","Elevation, piers & structural detailing","[PLACEHOLDER OVERVIEW — EDIT ME] Concrete bridge over a small river, total length 64 m, three spans (20 m + 24 m + 20 m). Reinforced-concrete deck on two piers and abutments; standard bridge railings; the design respects Romanian technical regulations for road bridges.","[PLACEHOLDER] The existing bridge had reached the end of its service life; a replacement was required under a state-funded programme.","[PLACEHOLDER] General arrangement, elevation, piers and abutments, deck cross-section and railings — designed to current Romanian technical regulations.","AutoCAD, Romanian bridge design regulations","Bridge drafter — general arrangement, elevation, structural detailing.","General arrangement, elevation, piers and abutments, deck cross-section, railings.","2024 Q1","2024 Q2","2024 Q4","[PLACEHOLDER] Replacement bridge enters construction phase with all permits in place.","[PLACEHOLDER] Hydraulic data drives everything — confirm the design flood before locking the geometry.","Bridge elevation","Deck cross-section","Pier detail"],
        p6: ["PNRR / EU","PNRR-Funded Civic Project","Town, Romania","2024 – 2026","~4,200 m² built","Municipality","PNRR (EU RRF / NextGenerationEU)","Site plan & building drawings","[PLACEHOLDER OVERVIEW — EDIT ME] Civic centre delivered under PNRR — Romania's implementation of the EU Recovery and Resilience Facility (RRF), the main component of NextGenerationEU, the EU's COVID-19 recovery programme. Scope includes the main civic centre, an annex building, parking area, access road and landscaping. Drawing package is aligned with EU and Romanian reporting requirements.","[PLACEHOLDER] The municipality needed a permit-ready, EU-compliant drawing package for a civic centre funded under PNRR.","[PLACEHOLDER] Site plan, building plans, sections, parking and access layouts, landscaping and EU reporting package — structured for both Romanian permitting and EU reporting.","AutoCAD, PNRR (RRF / NextGenerationEU) reporting requirements","Lead drafter — site plan, building plans, sections, EU reporting package.","Site plan, building plans, sections, parking and access layouts, landscaping, EU reporting package.","2024 Q1","2025 Q2","2026 Q2","[PLACEHOLDER] Civic centre under construction; EU reporting milestones met on schedule.","[PLACEHOLDER] PNRR/EU reporting has its own rhythm — design and reporting cycles must run in parallel, not in sequence.","Site plan","Civic centre — floor plan","Annex — floor plan"]
      },
      ro: {
        p1: ["Topografie","Ridicare Topografică — Zonă Urbană","Zonă urbană, România","2024","~12 ha","Investitor privat","Privat","Ridicare topografică și plan cu curbe de nivel","[PLACEHOLDER — EDITEAZĂ] Ridicare topografică în zonă urbană, pe o suprafață de aproximativ 12 hectare. Măsurătorile s-au făcut cu stație totală și sunt geo-referențiate în proiecția națională (Stereo 70). Planul rezultat include curbe de nivel, cote, infrastructura existentă (drumuri, trotuare, utilități) și construcțiile din zonă — gata de folosit ca bază pentru orice proiect de proiectare sau cadastru.","[PLACEHOLDER] Clientul avea nevoie de un plan de bază precis, geo-referențiat, pentru proiectare și autorizare. Datele publice existente erau învechite și incomplete.","[PLACEHOLDER] Ridicare topografică completă cu stație totală și GNSS, procesată într-un plan DWG geo-referențiat la scara 1:500, cu curbe de nivel, cote și suprapunere de infrastructură.","AutoCAD, Stație totală, GNSS, proiecție Stereo 70","Topograf principal — măsurători în teren, procesare date, plan cu curbe de nivel, livrare DWG.","Măsurători (brute + procesate), bază DWG 1:500, plan cu curbe de nivel, suprapunere infrastructură, memoriu tehnic.","Trim. I 2024","Trim. II 2024","Trim. III 2024","[PLACEHOLDER] Echipele de proiectare au primit o bază curată, geo-referențiată — fără relucru și cu aprobări accelerate.","[PLACEHOLDER] Verifică întotdeauna ipotezele clientului privind sistemul de coordonate; documentează proiecția și datum-ul în livrabile.","Bază de ridicare — vedere de ansamblu","Cote și curbe de nivel","Suprapunere infrastructură existentă"],
        p2: ["Cadastru","Plan Cadastral — Dezmembrare","Zonă peri-urbană, România","2023","~5,7 ha · 5 loturi","Proprietari privați","Privat","Plan cadastral și depunere OCPI","[PLACEHOLDER — EDITEAZĂ] Plan cadastral pentru un teren peri-urban dezmembrat în 5 loturi. Documentația cuprinde limitele, suprafețele și accesele fiecărei parcele, pregătită pentru depunere la OCPI și eliberarea de noi extrase de carte funciară.","[PLACEHOLDER] Cinci coproprietari aveau nevoie să împartă legal un teren comun în loturi individuale, fără dispute de hotar.","[PLACEHOLDER] Ridicare de hotar, plan de dezmembrare la scara 1:1000, dosar OCPI și extrase de carte funciară pentru fiecare parcelă nouă.","AutoCAD, GNSS, flux OCPI / ANCPI","Topograf și proiectant — ridicare hotar, plan de dezmembrare, dosar OCPI.","Ridicare de hotar, plan de dezmembrare, documentație OCPI, extrase de carte funciară.","Trim. I 2023","Trim. II 2023","Trim. III 2023","[PLACEHOLDER] Cinci cărți funciare noi emise; proprietatea poate fi acum vândută, moștenită sau finanțată individual.","[PLACEHOLDER] Documentează fiecare incertitudine de măsură — disputele cadastrale ies la iveală ani mai târziu, adesea la o vânzare.","Plan de dezmembrare","Detaliu limite","Tabel de coordonate"],
        p3: ["Clădire Civilă","Clădire Instituțională — Școală","Oraș, România","2024","~2 500 m² · P+1E","Primărie / instituție publică","Stat / UE","Planuri arhitecturale și documentație tehnică","[PLACEHOLDER — EDITEAZĂ] Planuri pentru parter și etajul 1 al unei școli publice, incluzând săli de clasă, birouri administrative, sală de sport și spații anexe. Desenele respectă reglementările tehnice și de securitate la incendiu din România și sunt pregătite ca parte a documentației pentru autorizare.","[PLACEHOLDER] Primăria avea nevoie de un dosar complet pentru autorizarea unei școli noi, conform cerințelor naționale și de achiziții publice UE.","[PLACEHOLDER] Planuri arhitecturale, secțiuni, memoriu tehnic, planuri PSI și dosar complet pentru autorizare — structurate pentru procedurile de investiții publice.","AutoCAD, normative construcții, reglementări PSI","Proiectant arhitectural — planuri, secțiuni, documentație tehnică.","Planuri arhitecturale, secțiuni, memoriu tehnic, planuri PSI, dosar de autorizare.","Trim. IV 2023","Trim. I 2024","Trim. III 2024","[PLACEHOLDER] Proiectul a trecut de autorizare și a intrat în faza de achiziție.","[PLACEHOLDER] Pentru proiectele publice, structurează fișierele exact cum se așteaptă funcționarul — economisești săptămâni de clarificări.","Plan parter","Plan etaj 1","Secțiune tip"],
        p4: ["Drum","Proiectare Drum — Drum Județean","Drum județean, România","2023","1,52 km","Consiliu județean","Stat","Traseu, profil și secțiuni transversale","[PLACEHOLDER — EDITEAZĂ] Proiect de reabilitare pentru un sector de 1,52 km de drum județean, incluzând plan de situație, profil longitudinal și secțiune transversală tip. Partea carosabilă are 7,00 m, cu acostamente de 2,00 m pe fiecare parte; structura rutieră este dimensionată pentru categoria de trafic locală.","[PLACEHOLDER] Un drum județean necesita proiect complet de reabilitare — geometrie, structură și scurgerea apelor — gata de licitație.","[PLACEHOLDER] Plan de situație, profil longitudinal, secțiune transversală tip, structură rutieră și scheme de scurgere — împachetate pentru licitație și execuție.","AutoCAD Civil 3D, normative românești pentru drumuri","Proiectant drumuri — geometrie, profil, secțiuni transversale, scheme de scurgere.","Plan de situație, profil longitudinal, secțiune transversală tip, structură rutieră, scheme de scurgere.","Trim. I 2023","Trim. II 2023","Trim. IV 2023","[PLACEHOLDER] Proiectul a fost licitat și adjudecat; reabilitarea s-a executat conform planului.","[PLACEHOLDER] Coordonează cu proiectantul de scurgere a apelor încă din faza incipientă — ajustările geometrice târzii sunt scumpe.","Plan de situație","Profil longitudinal","Secțiune transversală tip"],
        p5: ["Pod","Proiect Pod — Pod din Beton","Traversare râu, România","2024","64 m · 3 deschideri","Consiliu județean","Stat / PNRR","Elevație, pile și detalii structurale","[PLACEHOLDER — EDITEAZĂ] Pod din beton armat peste un râu de mică adâncime, lungime totală 64 m, trei deschideri (20 m + 24 m + 20 m). Tablier din beton armat pe două pile și culei; parapeți standard; proiectul respectă reglementările tehnice românești pentru poduri rutiere.","[PLACEHOLDER] Podul existent atinsese sfârșitul duratei de viață; era necesară înlocuirea lui printr-un program finanțat de stat.","[PLACEHOLDER] Plan general, elevație, pile și culei, secțiune tablier și parapeți — proiectate conform reglementărilor tehnice românești actuale.","AutoCAD, normative de proiectare pentru poduri","Proiectant poduri — plan general, elevație, detalii structurale.","Plan general, elevație, pile și culei, secțiune tablier, parapeți.","Trim. I 2024","Trim. II 2024","Trim. IV 2024","[PLACEHOLDER] Podul de înlocuire a intrat în faza de construcție cu toate avizele obținute.","[PLACEHOLDER] Datele hidraulice conduc întregul proiect — confirmă debitul de proiectare înainte de a bloca geometria.","Elevație pod","Secțiune tablier","Detaliu pilă"],
        p6: ["PNRR / UE","Proiect Civic finanțat PNRR","Oraș, România","2024 – 2026","~4 200 m² construiți","Primărie","PNRR (MRR UE / NextGenerationEU)","Plan de situație și desene pentru clădiri","[PLACEHOLDER — EDITEAZĂ] Centru civic realizat prin PNRR — implementarea de către România a Mecanismului de Redresare și Reziliență (MRR) al UE, componenta principală a NextGenerationEU, programul UE de redresare post-COVID-19. Include centrul civic principal, o clădire anexă, parcare, drum de acces și amenajare peisagistică. Pachetul de desene este aliniat cerințelor de raportare UE și românești.","[PLACEHOLDER] Primăria avea nevoie de un dosar de desene conform cerințelor UE, gata de autorizare, pentru un centru civic finanțat prin PNRR.","[PLACEHOLDER] Plan de situație, planuri clădiri, secțiuni, sistematizare parcare și accese, amenajare peisagistică și dosar de raportare UE — structurate atât pentru autorizarea românească, cât și pentru raportarea UE.","AutoCAD, cerințe de raportare PNRR (MRR / NextGenerationEU)","Proiectant principal — plan de situație, planuri clădiri, secțiuni, dosar de raportare UE.","Plan de situație, planuri clădiri, secțiuni, sistematizare parcare și accese, amenajare peisagistică, dosar de raportare UE.","Trim. I 2024","Trim. II 2025","Trim. II 2026","[PLACEHOLDER] Centrul civic este în construcție; jaloanele de raportare UE au fost îndeplinite la termen.","[PLACEHOLDER] Raportarea PNRR/UE are un ritm propriu — ciclurile de proiectare și raportare trebuie să curgă în paralel, nu secvențial.","Plan de situație","Centru civic — plan","Anexă — plan"]
      },
      fr: {
        p1: ["Topographie","Levé topographique — zone urbaine","Zone urbaine, Roumanie","2024","~12 ha","Investisseur privé","Privé","Levé topographique & plan de courbes de niveau","[PLACEHOLDER APERÇU — À MODIFIER] Levé topographique d'une zone urbaine d'environ 12 hectares. Mesures prises à la station totale, géoréférencées en projection nationale roumaine (Stereo 70). Le plan final comprend courbes de niveau, points côtés, infrastructure existante (routes, trottoirs, réseaux) et le bâti.","[PLACEHOLDER] Le client avait besoin d'un plan de base précis et géoréférencé pour la conception et le permis. Les données publiques étaient obsolètes et incomplètes.","[PLACEHOLDER] Levé topographique complet à la station totale et GNSS, traité en plan DWG géoréférencé au 1:500 avec courbes de niveau, points côtés et calque d'infrastructure.","AutoCAD, Station totale, GNSS, projection Stereo 70","Topographe principal — mesures terrain, traitement des données, plan de courbes de niveau, livraison DWG.","Mesures (brutes + traitées), base DWG 1:500, plan de courbes de niveau, calque d'infrastructure, note technique.","T1 2024","T2 2024","T3 2024","[PLACEHOLDER] L'équipe de conception a reçu une base propre et géoréférencée — pas de reprise, autorisations accélérées.","[PLACEHOLDER] Toujours valider les hypothèses du client sur le système de coordonnées ; documenter projection et datum dans les livrables.","Base de levé — vue d'ensemble","Points côtés et courbes de niveau","Calque d'infrastructure existante"],
        p2: ["Cadastre","Plan cadastral — lotissement","Zone péri-urbaine, Roumanie","2023","~5,7 ha · 5 lots","Propriétaires privés","Privé","Plan cadastral & dépôt OCPI","[PLACEHOLDER APERÇU — À MODIFIER] Plan cadastral pour une parcelle péri-urbaine divisée en 5 lots. Le document décrit les limites, surfaces et accès de chaque parcelle, prêt pour dépôt OCPI et émission de nouveaux extraits de livre foncier.","[PLACEHOLDER] Cinq copropriétaires devaient diviser légalement une parcelle commune en lots individuels sans conflit de bornage.","[PLACEHOLDER] Levé de bornage, plan de division au 1:1000, dossier OCPI et extraits de livre foncier pour chaque nouvelle parcelle.","AutoCAD, GNSS, flux OCPI / ANCPI","Topographe et dessinateur — levé de bornage, plan de division, dossier OCPI.","Levé de bornage, plan de division, dossier OCPI, extraits de livre foncier.","T1 2023","T2 2023","T3 2023","[PLACEHOLDER] Cinq nouveaux titres fonciers émis ; la propriété peut désormais être vendue, héritée ou financée individuellement.","[PLACEHOLDER] Documenter toute incertitude de mesure — les litiges cadastraux ressortent des années plus tard, souvent à la vente.","Plan de division","Détail des limites","Tableau de coordonnées"],
        p3: ["Bâtiment civil","Bâtiment institutionnel — école","Ville, Roumanie","2024","~2 500 m² · R+1","Mairie / institution publique","État / UE","Plans architecturaux & documentation technique","[PLACEHOLDER APERÇU — À MODIFIER] Plans du rez-de-chaussée et du premier étage d'une école publique, comprenant salles de classe, bureaux administratifs, gymnase et annexes. Les plans respectent les réglementations techniques et de sécurité incendie roumaines et font partie du dossier de permis.","[PLACEHOLDER] La mairie avait besoin d'un dossier prêt pour le permis d'une nouvelle école, conforme aux exigences nationales et de marchés publics UE.","[PLACEHOLDER] Plans architecturaux, coupes, note technique, plans de sécurité incendie et dossier complet de permis — structurés selon les procédures d'investissement public.","AutoCAD, normes bâtiment roumaines, réglementations incendie","Dessinateur architectural — plans, coupes, documentation technique.","Plans architecturaux, coupes, note technique, plans sécurité incendie, dossier de permis.","T4 2023","T1 2024","T3 2024","[PLACEHOLDER] Projet passé en permis, entré en phase de marché public.","[PLACEHOLDER] Pour les projets publics, structurez les fichiers exactement comme le fonctionnaire s'y attend — des semaines de clarification économisées.","Plan RDC","Plan R+1","Coupe type"],
        p4: ["Route","Conception routière — route départementale","Route départementale, Roumanie","2023","1,52 km","Conseil départemental","État","Tracé, profil et sections transversales","[PLACEHOLDER APERÇU — À MODIFIER] Conception de réhabilitation de 1,52 km de route départementale, avec plan, profil en long et section transversale type. Chaussée de 7,00 m avec accotements de 2,00 m de chaque côté ; structure dimensionnée pour la catégorie de trafic locale.","[PLACEHOLDER] Une route départementale nécessitait une conception complète de réhabilitation — géométrie, structure et drainage — prête pour l'appel d'offres.","[PLACEHOLDER] Plan, profil en long, section transversale type, structure de chaussée et schéma de drainage — packagés pour l'appel d'offres et l'exécution.","AutoCAD Civil 3D, normes routières roumaines","Concepteur routier — géométrie, profil, sections transversales, drainage.","Plan, profil en long, section transversale type, structure de chaussée, schéma de drainage.","T1 2023","T2 2023","T4 2023","[PLACEHOLDER] Projet adjugé ; réhabilitation exécutée selon le calendrier.","[PLACEHOLDER] Se coordonner tôt avec le concepteur du drainage — les ajustements géométriques tardifs sont coûteux.","Plan","Profil en long","Section transversale type"],
        p5: ["Pont","Projet de pont — pont en béton","Traversée de rivière, Roumanie","2024","64 m · 3 travées","Conseil départemental","État / PNRR","Élévation, piles et détails structurels","[PLACEHOLDER APERÇU — À MODIFIER] Pont en béton armé sur une petite rivière, longueur totale 64 m, trois travées (20 m + 24 m + 20 m). Tablier en béton armé sur deux piles et culées ; garde-corps standards ; le projet respecte les réglementations roumaines pour ponts routiers.","[PLACEHOLDER] Le pont existant avait atteint sa fin de vie ; un remplacement était nécessaire dans un programme financé par l'État.","[PLACEHOLDER] Plan d'ensemble, élévation, piles et culées, section de tablier et garde-corps — conçus selon les réglementations techniques roumaines actuelles.","AutoCAD, normes de conception des ponts","Dessinateur ponts — plan d'ensemble, élévation, détails structurels.","Plan d'ensemble, élévation, piles et culées, section de tablier, garde-corps.","T1 2024","T2 2024","T4 2024","[PLACEHOLDER] Pont de remplacement entré en construction avec tous les permis obtenus.","[PLACEHOLDER] Les données hydrauliques conditionnent tout — confirmer la crue de projet avant de figer la géométrie.","Élévation du pont","Section de tablier","Détail de pile"],
        p6: ["PNRR / UE","Projet civique financé PNRR","Ville, Roumanie","2024 – 2026","~4 200 m² construits","Mairie","PNRR (FRR UE / NextGenerationEU)","Plan de masse & plans des bâtiments","[PLACEHOLDER APERÇU — À MODIFIER] Centre civique livré dans le cadre du PNRR — la mise en œuvre par la Roumanie de la Facilité pour la reprise et la résilience (FRR) de l'UE, composante principale de NextGenerationEU, le programme de relance post-COVID-19 de l'UE. Comprend le centre civique principal, une annexe, un parking, une voie d'accès et des aménagements paysagers. Le paquet de plans est aligné sur les exigences de rapportage UE et roumaines.","[PLACEHOLDER] La mairie avait besoin d'un dossier de plans prêt pour le permis, conforme UE, pour un centre civique financé via PNRR.","[PLACEHOLDER] Plan de masse, plans des bâtiments, coupes, parking et accès, aménagements paysagers et dossier de rapportage UE — structurés à la fois pour le permis roumain et le rapportage UE.","AutoCAD, exigences de rapportage PNRR (FRR / NextGenerationEU)","Dessinateur principal — plan de masse, plans des bâtiments, coupes, dossier de rapportage UE.","Plan de masse, plans des bâtiments, coupes, parking et accès, aménagements paysagers, dossier de rapportage UE.","T1 2024","T2 2025","T2 2026","[PLACEHOLDER] Centre civique en construction ; jalons de rapportage UE tenus à temps.","[PLACEHOLDER] Le rapportage PNRR/UE a son propre rythme — conception et rapportage doivent courir en parallèle, pas en séquence.","Plan de masse","Centre civique — plan","Annexe — plan"]
      },
      de: {
        p1: ["Topographie","Topographische Vermessung — Stadtgebiet","Stadtgebiet, Rumänien","2024","~12 ha","Privatinvestor","Privat","Topographische Vermessung & Höhenlinienplan","[PLATZHALTER ÜBERBLICK — BITTE BEARBEITEN] Feldvermessung eines Stadtgebiets mit ca. 12 Hektar. Messungen mit Totalstation, georeferenziert in der rumänischen Landesprojektion (Stereo 70). Der fertige Plan enthält Höhenlinien, Höhenpunkte, bestehende Infrastruktur (Straßen, Gehwege, Leitungen) und den Bestand.","[PLATZHALTER] Der Auftraggeber brauchte einen genauen, georeferenzierten Basisplan für die weitere Planung und Genehmigung. Öffentliche Daten waren veraltet und unvollständig.","[PLATZHALTER] Komplette topographische Vermessung mit Totalstation und GNSS, verarbeitet zu einem georeferenzierten DWG-Basisplan 1:500 mit Höhenlinien, Höhenpunkten und Infrastrukturüberlagerung.","AutoCAD, Totalstation, GNSS, Stereo-70-Projektion","Leitender Vermesser — Feldmessung, Datenverarbeitung, Höhenlinienplan, DWG-Lieferung.","Messungen (roh + verarbeitet), DWG-Basis 1:500, Höhenlinienplan, Infrastrukturüberlagerung, technisches Memo.","Q1 2024","Q2 2024","Q3 2024","[PLATZHALTER] Das Planungsteam erhielt eine saubere, georeferenzierte Basis — keine Nacharbeit, schnellere Genehmigungen.","[PLATZHALTER] Immer die Annahmen des Auftraggebers zum Koordinatensystem vorab prüfen; Projektion und Datum in den Liefergegenständen dokumentieren.","Basis der Vermessung — Übersicht","Höhenpunkte & Höhenlinien","Infrastrukturüberlagerung Bestand"],
        p2: ["Kataster","Katasterplan — Parzellierung","Stadtrandgebiet, Rumänien","2023","~5,7 ha · 5 Lose","Privatpersonen","Privat","Katasterplan & OCPI-Einreichung","[PLATZHALTER ÜBERBLICK — BITTE BEARBEITEN] Katasterplan für ein Stadtrandgebiet, das in 5 Lose parzelliert wurde. Das Dokument beschreibt Grenzen, Flächen und Zugänge jeder Parzelle, vorbereitet für OCPI-Einreichung und Ausstellung neuer Grundbuchauszüge.","[PLATZHALTER] Fünf Miteigentümer mussten eine gemeinsame Parzelle ohne Grenzstreitigkeiten in individuell eingetragene Lose aufteilen.","[PLATZHALTER] Grenzvermessung, Teilungsplan 1:1000, OCPI-Aktenmappe und Grundbuchauszüge für jede neue Parzelle.","AutoCAD, GNSS, OCPI / ANCPI-Workflow","Vermesser und Zeichner — Grenzvermessung, Teilungsplan, OCPI-Aktenmappe.","Grenzvermessung, Teilungsplan, OCPI-Dokumentation, Grundbuchauszüge.","Q1 2023","Q2 2023","Q3 2023","[PLATZHALTER] Fünf neue Grundbuchtitel ausgestellt ; Eigentum kann nun einzeln verkauft, vererbt oder finanziert werden.","[PLATZHALTER] Jede Messunsicherheit dokumentieren — Katasterstreitigkeiten tauchen Jahre später auf, oft beim Verkauf.","Teilungsplan","Grenzdetail","Koordinatentabelle"],
        p3: ["Zivilbau","Institutionelles Gebäude — Schule","Stadt, Rumänien","2024","~2 500 m² · EG+1","Rathaus / öffentliche Einrichtung","Staat / EU","Architekturpläne & technische Dokumentation","[PLATZHALTER ÜBERBLICK — BITTE BEARBEITEN] Pläne für Erdgeschoss und 1. Obergeschoss einer öffentlichen Schule, einschließlich Klassenräume, Verwaltungsbüros, Turnhalle und Nebenräume. Die Pläne entsprechen den rumänischen technischen und brandschutzrechtlichen Vorschriften und sind Teil der Genehmigungsdokumentation.","[PLATZHALTER] Die Stadt benötigte ein genehmigungsreifes Paket für einen neuen Schulbau, konform mit nationalen und EU-Vergabevorschriften.","[PLATZHALTER] Architekturpläne, Schnitte, technisches Memo, Brandschutzpläne und das vollständige Genehmigungspaket — strukturiert für öffentliche Investitionsverfahren.","AutoCAD, rumänische Bauvorschriften, Brandschutzvorschriften","Architektur-Zeichner — Pläne, Schnitte, technische Dokumentation.","Architekturpläne, Schnitte, technisches Memo, Brandschutzpläne, Genehmigungspaket.","Q4 2023","Q1 2024","Q3 2024","[PLATZHALTER] Projekt genehmigt und in die Vergabephase übergegangen.","[PLATZHALTER] Bei öffentlichen Projekten die Dateien genau so strukturieren, wie es der Sachbearbeiter erwartet — spart Wochen an Rückfragen.","Grundriss EG","Grundriss 1. OG","Regelschnitt"],
        p4: ["Straße","Straßenplanung — Kreisstraße","Kreisstraße, Rumänien","2023","1,52 km","Landkreis","Staat","Trasse, Profil und Querschnitte","[PLATZHALTER ÜBERBLICK — BITTE BEARBEITEN] Sanierungsplanung für 1,52 km Kreisstraße, mit Lageplan, Längsprofil und Regelquerschnitt. Fahrbahnbreite 7,00 m mit Banketten von 2,00 m je Seite ; Oberbau auf die lokale Verkehrskategorie dimensioniert.","[PLATZHALTER] Eine Kreisstraße benötigte eine komplette Sanierungsplanung — Geometrie, Oberbau und Entwässerung — ausschreibungsreif.","[PLATZHALTER] Lageplan, Längsprofil, Regelquerschnitt, Oberbau und Entwässerungskonzept — paketiert für Ausschreibung und Ausführung.","AutoCAD Civil 3D, rumänische Straßennormen","Straßenplaner — Geometrie, Profil, Querschnitte, Entwässerung.","Lageplan, Längsprofil, Regelquerschnitt, Oberbau, Entwässerung.","Q1 2023","Q2 2023","Q4 2023","[PLATZHALTER] Projekt ausgeschrieben und vergeben ; Sanierung planmäßig ausgeführt.","[PLATZHALTER] Früh mit dem Entwässerungsplaner abstimmen — späte geometrische Anpassungen sind teuer.","Lageplan","Längsprofil","Regelquerschnitt"],
        p5: ["Brücke","Brückenprojekt — Betonbrücke","Flussquerung, Rumänien","2024","64 m · 3 Felder","Landkreis","Staat / PNRR","Ansicht, Pfeiler und Tragwerksdetails","[PLATZHALTER ÜBERBLICK — BITTE BEARBEITEN] Betonbrücke über einen kleinen Fluss, Gesamtlänge 64 m, drei Felder (20 m + 24 m + 20 m). Stahlbeton-Überbau auf zwei Pfeilern und Widerlagern ; Standardgeländer ; die Planung entspricht den rumänischen Vorschriften für Straßenbrücken.","[PLATZHALTER] Die bestehende Brücke hatte das Ende ihrer Nutzungsdauer erreicht ; ein Ersatz war im Rahmen eines staatlich finanzierten Programms erforderlich.","[PLATZHALTER] Gesamtansicht, Ansicht, Pfeiler und Widerlager, Überbauquerschnitt und Geländer — geplant nach den aktuellen rumänischen technischen Vorschriften.","AutoCAD, Brückenplanungsvorschriften","Brücken-Zeichner — Gesamtansicht, Ansicht, Tragwerksdetails.","Gesamtansicht, Ansicht, Pfeiler und Widerlager, Überbauquerschnitt, Geländer.","Q1 2024","Q2 2024","Q4 2024","[PLATZHALTER] Ersatzbrücke in Bau mit allen Genehmigungen.","[PLATZHALTER] Hydraulische Daten treiben alles — Bemessungshochwasser vor Festlegung der Geometrie bestätigen.","Brückenansicht","Überbauquerschnitt","Pfeilerdetail"],
        p6: ["PNRR / EU","PNRR-finanziertes Bürgerprojekt","Stadt, Rumänien","2024 – 2026","~4 200 m² gebaut","Stadtverwaltung","PNRR (RRF EU / NextGenerationEU)","Lageplan & Gebäudepläne","[PLATZHALTER ÜBERBLICK — BITTE BEARBEITEN] Bürgerzentrum im Rahmen des PNRR — Rumäniens Umsetzung der EU-Aufbau- und Resilienzfazilität (RRF), der Hauptkomponente von NextGenerationEU, dem COVID-19-Wiederaufbauprogramm der EU. Umfasst Hauptbürgerzentrum, Anbau, Parkplatz, Zufahrt und Landschaftsgestaltung. Das Planpaket ist auf EU- und rumänische Berichtsanforderungen ausgerichtet.","[PLATZHALTER] Die Stadtverwaltung benötigte ein genehmigungsreifes, EU-konformes Planpaket für ein über PNRR finanziertes Bürgerzentrum.","[PLATZHALTER] Lageplan, Gebäudepläne, Schnitte, Parkplatz- und Zufahrtslayouts, Landschaftsgestaltung und EU-Berichtspaket — strukturiert sowohl für die rumänische Genehmigung als auch für die EU-Berichterstattung.","AutoCAD, PNRR-Berichtsanforderungen (RRF / NextGenerationEU)","Hauptzeichner — Lageplan, Gebäudepläne, Schnitte, EU-Berichtspaket.","Lageplan, Gebäudepläne, Schnitte, Parkplatz- und Zufahrtslayouts, Landschaftsgestaltung, EU-Berichtspaket.","Q1 2024","Q2 2025","Q2 2026","[PLATZHALTER] Bürgerzentrum im Bau ; EU-Berichtsmeilensteine termingerecht erreicht.","[PLATZHALTER] PNRR/EU-Berichterstattung hat ihren eigenen Rhythmus — Planung und Berichterstattung müssen parallel laufen, nicht sequenziell.","Lageplan","Bürgerzentrum — Grundriss","Anbau — Grundriss"]
      }
    };

    function build(k) {
      var arr = set[lang][k];
      return {
        "tag": arr[0], "title": arr[1],
        "location": arr[2], "year": arr[3], "area": arr[4],
        "client": arr[5], "funding": arr[6], "role": arr[7],
        "overview": arr[8], "problem": arr[9], "solution": arr[10],
        "tech": arr[11], "myrole": arr[12], "deliverables": arr[13],
        "timelineStart": arr[14], "timelineNow": arr[15], "timelineEnd": arr[16],
        "impact": arr[17], "lessons": arr[18],
        "img1.caption": arr[19], "img2.caption": arr[20], "img3.caption": arr[21]
      };
    }

    return {
      "project1": build("p1"), "project2": build("p2"), "project3": build("p3"),
      "project4": build("p4"), "project5": build("p5"), "project6": build("p6")
    };
  }

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
      langFlag.innerHTML = '<object type="image/svg+xml" data="assets/flags/' + LANG_FLAGS[lang] + '.svg" aria-hidden="true" style="width:100%;height:100%;pointer-events:none"></object>';
    }
    if (langBtn) {
      langBtn.setAttribute("aria-label", "Language: " + LANG_NAMES[lang] + " — click to change");
    }
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

  /* initial language detection */
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
      el.textContent = (target >= 10 ? val : val.toString()) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  window.refreshCounters = function () {
    document.querySelectorAll(".stat-number[data-count]").forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count")) || 0;
      var suffix = el.getAttribute("data-suffix") || "";
      el.textContent = (target >= 10 ? "0" : "0") + suffix;
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
    document.querySelectorAll(".reveal, .stat").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal, .stat").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();