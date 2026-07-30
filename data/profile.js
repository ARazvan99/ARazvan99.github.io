/* =========================================================================
   data/profile.js — Centralized personal profile information.
   Edit the values below to update the "Profile at a Glance" section.
   ========================================================================= */
(function (root) {
  root.PROFILE = {
    name: "Afloarei Razvan-Bogdan",
    role: "Geodetic Engineer · Infrastructure Professional · Entrepreneur · AI Automation Builder",
    shortPitch: "I combine engineering expertise, public-project experience, entrepreneurial thinking, and AI-powered workflow optimization to improve technical delivery, operational efficiency, and long-term project value.",
    photoPath: "images/photo-placeholder.svg",
    flags: {
      euCitizen: true,
      openInternational: true,
      b2bAvailable: true,
      openRelocation: true
    },
    coreCapabilities: [
      "Geodetic Engineering",
      "Infrastructure Design",
      "AI Automation",
      "B2B Collaboration"
    ],
    languages: [
      { code: "ro", name: "Romanian",  level: "C2",  proficiency: "Native" },
      { code: "en", name: "English",   level: "C1",  proficiency: "Professional" },
      { code: "fr", name: "French",    level: "A2",  proficiency: "Basic" },
      { code: "de", name: "German",    level: "A1",  proficiency: "Basic" }
    ]
  };
})(typeof window !== "undefined" ? window : this);
