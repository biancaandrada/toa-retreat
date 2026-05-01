// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Nav scroll effect
const nav = document.getElementById("nav");
const onScroll = () => {
  if (window.scrollY > 32) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = document.querySelector(".nav__burger");
const mobile = document.getElementById("mobileMenu");
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

// Reveal on scroll
const revealEls = document.querySelectorAll(
  ".about__grid, .event__head, .event__card, .event__cta, .tb__media, .tb__content, .charter__head, .charter__map, .charter__item, .collab > .display, .collab__lede, .collab__list, .aboutus__visual, .aboutus__text, .contact__title, .contact__lede, .contact__grid"
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

// Stagger the event cards
document.querySelectorAll(".event__card").forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.12}s`;
});
document.querySelectorAll(".charter__item").forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll(".contact__card").forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// Cursor follower
const cursor = document.querySelector(".cursor");
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let cx = 0, cy = 0, tx = 0, ty = 0;
  document.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });
  const tick = () => {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();

  document.querySelectorAll("a, button, .chip, .event__card, .contact__card").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hovering"));
  });
}
