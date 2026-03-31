const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const yearTarget = document.querySelector("#year");
const contactForm = document.querySelector(".contact-form");
const cursorAura = document.querySelector(".cursor-aura");

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

    // Simple validation before integrating with a backend endpoint.
    if (!name || !email || !message) {
      alert("Please complete all required fields.");
      return;
    }

    alert("Thanks! Your message has been captured.");
    contactForm.reset();
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
