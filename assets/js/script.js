// Portfolio interactions: typing effect, theme switch, project filter, reveal animation, and contact form.
document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.getElementById("typedText");
  const roles = ["IT Student", "Aspiring Web Developer", "Future IT Professional"];
  let roleIndex = 0;
  let letterIndex = 0;
  let deleting = false;

  function typeRole() {
    if (!typedText) return;
    const currentRole = roles[roleIndex];
    typedText.textContent = currentRole.substring(0, letterIndex);
    if (!deleting && letterIndex < currentRole.length) {
      letterIndex++;
      setTimeout(typeRole, 85);
    } else if (deleting && letterIndex > 0) {
      letterIndex--;
      setTimeout(typeRole, 45);
    } else {
      deleting = !deleting;
      if (!deleting) roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, deleting ? 1300 : 300);
    }
  }
  typeRole();

  // Remember the visitor's theme choice on this device.
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") document.body.classList.add("dark-mode");
  updateThemeIcon();

  function updateThemeIcon() {
    if (!themeIcon) return;
    themeIcon.className = document.body.classList.contains("dark-mode")
      ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  }
  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("portfolio-theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateThemeIcon();
  });

  // Filter project cards by category.
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      projectItems.forEach((item) => {
        const shouldShow = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  // Reveal elements as they enter the viewport.
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }

  // Back-to-top control.
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop?.classList.toggle("show", window.scrollY > 450);
  });
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Highlight the current navigation section.
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  // This is a front-end email helper, not a server-side contact form.
  const contactForm = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  document.querySelector("#submit-btn").addEventListener("click", () => {
window.open("https://mail.google.com", "_blank");
  });

  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
