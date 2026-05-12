// ---------- Shared nav + footer injection ----------
const PAGE = document.body.dataset.page || "home";
const PAGES = [
  { key: "home",   href: "index.html",        label: "Acasă" },
  { key: "despre", href: "despre.html",       label: "Despre" },
  { key: "event",  href: "evenimente.html",    label: "Evenimente" },
  { key: "tb",     href: "teambuilding.html", label: "Teambuilding" },
  { key: "charter",href: "charter.html",      label: "Worldwide charter" },
];

const navMount = document.getElementById("nav-mount");
if (navMount) {
  navMount.innerHTML = `
    <header class="nav" id="nav">
      <a class="nav__logo" href="index.html" aria-label="TOA Retreat">
        <img src="assets/logo/TOA_LogoFull_Color_Pozitiv.svg" alt="TOA Retreat" />
      </a>
      <nav class="nav__menu" aria-label="Meniu principal">
        ${PAGES.map(p => `<a href="${p.href}" class="${p.key === PAGE ? "is-active" : ""}">${p.label}</a>`).join("")}
      </nav>
      <a class="nav__cta" href="contact.html">
        <span>Contact</span>
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <button class="nav__burger" aria-label="Deschide meniul" aria-expanded="false" aria-controls="mobileMenu">
        <span></span><span></span>
      </button>
    </header>
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
      ${PAGES.map(p => `<a href="${p.href}" class="${p.key === PAGE ? "is-active" : ""}">${p.label}</a>`).join("")}
      <a href="contact.html" class="mobile-menu__cta">Contact</a>
    </div>
  `;
}

const footerMount = document.getElementById("footer-mount");
if (footerMount) {
  footerMount.innerHTML = `
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__brand">
          <img src="assets/logo/TOA_LogoFull_Color_Negativ.svg" alt="TOA Retreat" />
          <p>Time Off &amp; Awareness — sporturi atipice îmbinate cu dezvoltare personală, în locații exclusiviste.</p>
          <form class="footer__newsletter" data-form data-subject="Newsletter — abonare (footer)">
            <input type="email" name="Email" required placeholder="email@example.com" aria-label="Email" />
            <button type="submit" class="footer__newsletter-submit">
              <span>Abonează-mă</span>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </form>
          <p class="footer__newsletter-note">Prin abonare ești de acord cu <a href="gdpr.html">Politica de Confidențialitate</a>.</p>
        </div>
        <div class="footer__cols">
          <div>
            <span>Site</span>
            ${PAGES.map(p => `<a href="${p.href}">${p.label}</a>`).join("")}
            <a href="contact.html">Contact</a>
          </div>
          <div>
            <span>Contact</span>
            <a href="mailto:toaretreat@gmail.com">toaretreat@gmail.com</a>
            <a href="tel:+40727089043">+40 727 089 043</a>
            <a href="https://wa.me/40727089043" target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <div>
            <span>Social</span>
            <a href="https://instagram.com/toa.retreat" target="_blank" rel="noopener">Instagram</a>
            <a href="https://facebook.com/toaretreat" target="_blank" rel="noopener">Facebook</a>
            <a href="https://linkedin.com/company/toa-retreat" target="_blank" rel="noopener">LinkedIn</a>
          </div>
          <div>
            <span>Legal</span>
            <a href="gdpr.html">Politică de Confidențialitate</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} TOA Retreat. Toate drepturile rezervate.</span>
        <span>Crafted with sea salt &amp; intention.</span>
      </div>
    </footer>
    <div class="float-cta" aria-label="Contact rapid">
      <a class="float-cta__wa" href="https://wa.me/40727089043" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
      <a class="float-cta__call" href="tel:+40727089043">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
        Sună
      </a>
      <a class="float-cta__email" href="mailto:toaretreat@gmail.com">
        Email
      </a>
    </div>
  `;
}

// ---------- Nav scroll effect ----------
const nav = document.getElementById("nav");
const onScroll = () => {
  if (!nav) return;
  if (window.scrollY > 32) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Mobile menu ----------
const burger = document.querySelector(".nav__burger");
const mobile = document.getElementById("mobileMenu");
if (burger && mobile) {
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    mobile.classList.toggle("is-open", !open);
    mobile.setAttribute("aria-hidden", String(open));
    document.body.style.overflow = !open ? "hidden" : "";
  });
  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobile.classList.remove("is-open");
      mobile.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    })
  );
}

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(
  ".pillar, .about__grid, .event__head, .event__card, .event__cta, .tb__media, .tb__content, .charter__head, .charter__map, .charter__item, .collab__inner, .aboutus__visual, .aboutus__text, .cta-strip h2, .cta-strip p, .contact-methods, .block, .pull, .form"
);
revealEls.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);
revealEls.forEach((el) => io.observe(el));

document.querySelectorAll(".pillar, .event__card, .charter__item").forEach((card, i) => {
  card.style.transitionDelay = `${(i % 3) * 0.1}s`;
});

// ---------- Cursor follower ----------
const cursor = document.querySelector(".cursor");
if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let cx = 0, cy = 0, tx = 0, ty = 0;
  document.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; });
  const tick = () => {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();

  const hoverable = "a, button, .chip, .pillar, .event__card, .contact-method";
  document.querySelectorAll(hoverable).forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hovering"));
  });
}

// ---------- Hero video: swap source based on viewport ----------
const heroVideo = document.querySelector(".hero__video");
if (heroVideo) {
  const mq = window.matchMedia("(max-width: 768px)");
  const apply = () => {
    const wanted = mq.matches ? heroVideo.dataset.srcMobile : heroVideo.dataset.srcDesktop;
    const src = heroVideo.querySelector("source");
    if (!wanted || !src) return;
    const current = src.getAttribute("src");
    if (current === wanted) return;
    src.setAttribute("src", wanted);
    heroVideo.load();
    heroVideo.play().catch(() => {});
  };
  apply();
  mq.addEventListener?.("change", apply);
}

// ---------- Forms: Brevo backend (with mailto fallback) ----------
const TOA_API_BASE = (window.TOA_API_BASE || "").replace(/\/$/, "");

document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submit = form.querySelector('button[type="submit"], input[type="submit"]');
    const originalLabel = submit?.innerHTML;
    if (submit) {
      submit.disabled = true;
      submit.dataset.originalLabel = originalLabel;
      submit.innerHTML = "<span>Se trimite…</span>";
    }

    const entries = Array.from(new FormData(form).entries());
    const data = Object.fromEntries(entries);
    const subject = form.dataset.subject || "Mesaj de pe site TOA Retreat";
    const isNewsletter =
      form.classList.contains("newsletter__form") ||
      form.classList.contains("footer__newsletter") ||
      (entries.length <= 2 && "Email" in data && !("Mesaj" in data) && !("Nume" in data));

    const endpoint = isNewsletter ? "/api/newsletter" : "/api/contact";
    const body = isNewsletter ? { email: data.Email, ...stripKnown(data) } : { subject, ...data };

    try {
      const res = await fetch(TOA_API_BASE + endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);

      showFormSuccess(form, isNewsletter);
    } catch (err) {
      console.warn("Form submit failed, falling back to mailto:", err);
      mailtoFallback(subject, entries);
      if (submit) {
        submit.disabled = false;
        submit.innerHTML = submit.dataset.originalLabel || originalLabel;
      }
    }
  });
});

function stripKnown(obj) {
  const { Email, ...rest } = obj;
  return rest;
}

function showFormSuccess(form, isNewsletter) {
  const msg = isNewsletter
    ? "Mulțumim! Te-am adăugat la newsletter."
    : "Mulțumim! Revenim cu un răspuns în maximum 24 de ore.";
  const note = document.createElement("p");
  note.className = "form__success";
  note.textContent = msg;
  note.style.cssText =
    "padding:14px 18px;border-radius:14px;background:rgba(94,170,165,0.18);color:inherit;margin-top:14px;font-size:0.95rem;";
  form.replaceChildren(note);
}

function mailtoFallback(subject, entries) {
  const body = encodeURIComponent(entries.map(([k, v]) => `${k}: ${v}`).join("\n"));
  window.location.href = `mailto:toaretreat@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}
