/* Scroll Animation */
const revealElements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});