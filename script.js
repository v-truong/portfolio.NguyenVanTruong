document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".project, .card");
  items.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "0.5s";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 100);
  });
});


// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// SCROLL ANIMATION
const elements = document.querySelectorAll(".project, .tags span, h2, p");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => {
  el.classList.add("fade");
  observer.observe(el);
});

// PARALLAX HERO
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  document.querySelector(".hero").style.transform = `translateY(${scroll * 0.2}px)`;
});