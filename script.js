const fieldFilters = document.querySelectorAll(".field-filter");
const fieldSections = document.querySelectorAll(".field-section");
const revealItems = document.querySelectorAll(".reveal");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

fieldFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selectedField = filter.dataset.fieldFilter;

    fieldFilters.forEach((button) => {
      const isActive = button === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    fieldSections.forEach((section) => {
      const isActive = section.dataset.field === selectedField;
      section.hidden = !isActive;
      section.classList.toggle("is-active", isActive);

      if (isActive) {
        section.classList.add("is-visible");
      }
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
