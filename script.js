const mobileNav = () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }
 
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
 
  // Contact form: client-side validation only.
  // TODO: hook up a real endpoint (e.g. Formspree, Netlify Forms, or the client's backend).
  const form = document.getElementById("contact-form");
  if (form) {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let firstInvalid = null;
      form.querySelectorAll("[required]").forEach((field) => {
        const ok = field.checkValidity();
        field.setAttribute("aria-invalid", String(!ok));
        if (!ok && !firstInvalid) firstInvalid = field;
      });
 
      if (firstInvalid) {
        status.textContent = "Add your name and a valid work email to send your enquiry.";
        status.classList.add("is-error");
        firstInvalid.focus();
        return;
      }
 
      status.classList.remove("is-error");
      status.textContent = "Enquiry sent. A consultant will be in touch within one working day.";
      form.reset();
      form.querySelectorAll("[aria-invalid]").forEach((f) => f.removeAttribute("aria-invalid"));
    });
  }
};

mobileNav();