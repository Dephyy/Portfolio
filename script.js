const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const yearTarget = document.querySelector("#year");
const contactForm = document.querySelector(".contact-form");
const cursorAura = document.querySelector(".cursor-aura");
const langToggle = document.querySelector(".lang-toggle");

const translations = {
  en: {
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "Seer Pathway Portfolio",
    "hero.hi": "Hi, I am",
    "hero.title": "Full-Stack Developer",
    "hero.lead": "I build reliable, secure, and maintainable web apps—focused on functionality, clarity, and real-world usability.",
    "hero.location": "Lipa City, Batangas, Philippines • Open to remote",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Contact Me",
    "hero.ctaResume": "View Resume",
    "about.eyebrow": "About",
    "about.title": "Functionality-first, built to last",
    "about.bio": "I’m an IT student and aspiring full-stack developer who enjoys building practical systems that solve real problems. I focus on clear workflows, secure handling of data, and maintainable code—so projects stay easy to improve over time.",
    "about.strength1": "Analytical problem solving and structured thinking",
    "about.strength2": "Adaptable—can match the client’s required functionality",
    "about.strength3": "Security-aware mindset for internal systems and data protection",
    "skills.eyebrow": "Skills",
    "skills.title": "Tools I use (and can ramp up fast)",
    "skills.frontendTitle": "Frontend (basic)",
    "skills.frontendBody": "HTML, CSS, JavaScript • Responsive layouts • Accessibility basics",
    "skills.backendTitle": "Backend & Data",
    "skills.backendBody": "SQL (PostgreSQL) • Data modeling • Backend fundamentals • Secure access patterns",
    "skills.toolsTitle": "Analytics & Tools",
    "skills.toolsBody": "Power BI • Excel • Microsoft Office • Google Workspace • Lucidchart / Draw.io",
    "projects.eyebrow": "Projects",
    "projects.title": "Selected Work",
    "projects.ithesisDesc": "Library-based digital thesis repository with secure in-house access and usage monitoring for Batangas State University TNEU – Lipa Campus.",
    "projects.ithesisBullet1": "Backend developer: secure workflows, usage logging, and data handling.",
    "projects.ithesisBullet2": "Security: RBAC + intranet-only access (IP filtering) + content protection approach.",
    "projects.ithesisBullet3": "Search & insights: full-text search + analytics reporting.",
    "projects.ithesisStack": "Stack: React • Django • PostgreSQL • Elasticsearch • TF‑IDF (scikit-learn)",
    "projects.thinktankDesc": "Web-based collaboration platform focused on clear workflows, documentation, and practical team coordination.",
    "projects.thinktankBullet1": "Contributed to features and UI using HTML, CSS, and JavaScript.",
    "projects.thinktankBullet2": "Created diagrams and workflow docs using Lucidchart and Draw.io.",
    "projects.viewRepo": "View Repository",
    "projects.moreTitle": "More on GitHub",
    "projects.moreDesc": "See more school projects and experiments on my GitHub profile.",
    "projects.viewGitHub": "Visit GitHub",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s build something practical",
    "contact.send": "Send Message",
    "contact.note": "This uses your email app to send a message (free, no account required).",
    "contact.linksTitle": "Contact details",
    "contact.resume": "Resume (PDF)",
    "footer.name": "Ryan Jeremy Patricio",
    "footer.rights": "All rights reserved."
  },
  fil: {
    "nav.menu": "Menu",
    "nav.about": "Tungkol",
    "nav.skills": "Kasanayan",
    "nav.projects": "Proyekto",
    "nav.contact": "Kontak",
    "hero.eyebrow": "Seer Pathway Portfolio",
    "hero.hi": "Kumusta, ako si",
    "hero.title": "Full-Stack Developer",
    "hero.lead": "Gumagawa ako ng maaasahan, secure, at madaling i-maintain na web apps—nakatuon sa functionality, malinaw na workflow, at totoong gamit.",
    "hero.location": "Lipa City, Batangas, Pilipinas • Bukas sa remote",
    "hero.ctaProjects": "Tingnan ang Proyekto",
    "hero.ctaContact": "Makipag-ugnayan",
    "hero.ctaResume": "Tingnan ang Resume",
    "about.eyebrow": "Tungkol",
    "about.title": "Functionality muna, pangmatagalan",
    "about.bio": "Isa akong IT student at aspiring full-stack developer na mas gusto ang practical systems na talagang nakakatulong. Pinapahalagahan ko ang malinaw na workflow, secure na paghawak ng data, at maintainable na code para madaling i-improve ang projects.",
    "about.strength1": "Analytical na pag-iisip at structured problem solving",
    "about.strength2": "Adaptable—kayang iayon sa functionality na kailangan ng client",
    "about.strength3": "Security-aware mindset para sa internal systems at proteksyon ng data",
    "skills.eyebrow": "Kasanayan",
    "skills.title": "Mga tools na gamit ko (at mabilis matutunan)",
    "skills.frontendTitle": "Frontend (basic)",
    "skills.frontendBody": "HTML, CSS, JavaScript • Responsive layouts • Accessibility basics",
    "skills.backendTitle": "Backend & Data",
    "skills.backendBody": "SQL (PostgreSQL) • Data modeling • Backend fundamentals • Secure access patterns",
    "skills.toolsTitle": "Analytics & Tools",
    "skills.toolsBody": "Power BI • Excel • Microsoft Office • Google Workspace • Lucidchart / Draw.io",
    "projects.eyebrow": "Proyekto",
    "projects.title": "Mga Napiling Gawa",
    "projects.ithesisDesc": "Library-based digital thesis repository na may secure in-house access at usage monitoring para sa Batangas State University TNEU – Lipa Campus.",
    "projects.ithesisBullet1": "Backend developer: secure workflows, usage logging, at data handling.",
    "projects.ithesisBullet2": "Security: RBAC + intranet-only access (IP filtering) + content protection approach.",
    "projects.ithesisBullet3": "Search & insights: full-text search + analytics reporting.",
    "projects.ithesisStack": "Stack: React • Django • PostgreSQL • Elasticsearch • TF‑IDF (scikit-learn)",
    "projects.thinktankDesc": "Web-based collaboration platform para sa malinaw na workflow, documentation, at practical team coordination.",
    "projects.thinktankBullet1": "Nag-ambag sa features at UI gamit ang HTML, CSS, at JavaScript.",
    "projects.thinktankBullet2": "Gumawa ng diagrams at workflow docs gamit ang Lucidchart at Draw.io.",
    "projects.viewRepo": "Buksan ang Repository",
    "projects.moreTitle": "Iba pa sa GitHub",
    "projects.moreDesc": "Tingnan ang iba pang school projects at experiments sa GitHub ko.",
    "projects.viewGitHub": "Bisitahin ang GitHub",
    "contact.eyebrow": "Kontak",
    "contact.title": "Gumawa tayo ng practical na solution",
    "contact.send": "Ipadala ang Mensahe",
    "contact.note": "Gagamitin nito ang email app mo para magpadala (free, walang account na kailangan).",
    "contact.linksTitle": "Mga detalye",
    "contact.resume": "Resume (PDF)",
    "footer.name": "Ryan Jeremy Patricio",
    "footer.rights": "Lahat ng karapatan ay nakalaan."
  }
};

const setLanguage = (lang) => {
  const safeLang = lang === "fil" ? "fil" : "en";
  document.documentElement.lang = safeLang === "fil" ? "fil" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = translations[safeLang]?.[key];
    if (typeof value === "string") {
      node.textContent = value;
    }
  });
  if (langToggle) {
    langToggle.setAttribute("aria-pressed", String(safeLang === "fil"));
  }
  try {
    localStorage.setItem("portfolio_lang", safeLang);
  } catch {
    // ignore storage failures
  }
};

const getInitialLanguage = () => {
  try {
    const stored = localStorage.getItem("portfolio_lang");
    if (stored === "en" || stored === "fil") return stored;
  } catch {
    // ignore
  }
  const browserLang = (navigator.language || "en").toLowerCase();
  return browserLang.startsWith("fil") || browserLang.startsWith("tl") ? "fil" : "en";
};

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile menu after selecting a link for better UX.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      alert("Please complete all required fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:ryanjeremypatricio@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  });
}

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reduceMotionQuery.matches) {
  const revealTargets = document.querySelectorAll(".hero-copy, .section-head, .section-body, .skill-card, .project-card, .contact-form");
  const delayClasses = ["delay-1", "delay-2", "delay-3", "delay-4"];
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-item");
    target.classList.add(delayClasses[index % delayClasses.length]);
    revealObserver.observe(target);
  });
}

if (cursorAura && !reduceMotionQuery.matches) {
  const updateAura = (event) => {
    cursorAura.style.left = `${event.clientX}px`;
    cursorAura.style.top = `${event.clientY}px`;
  };

  window.addEventListener("mousemove", updateAura, { passive: true });
  window.addEventListener("mouseenter", () => document.body.classList.add("aura-active"), { passive: true });
  window.addEventListener("mouseleave", () => document.body.classList.remove("aura-active"), { passive: true });
}

setLanguage(getInitialLanguage());

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const isFil = langToggle.getAttribute("aria-pressed") === "true";
    setLanguage(isFil ? "en" : "fil");
  });
}
