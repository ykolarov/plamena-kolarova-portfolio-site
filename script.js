const filters = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");
const revealItems = document.querySelectorAll(".reveal");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((button) => button.classList.remove("is-active"));
    filter.classList.add("is-active");

    workCards.forEach((card) => {
      const matches = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  },
);

revealItems.forEach((item) => observer.observe(item));
