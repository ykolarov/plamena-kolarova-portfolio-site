const fieldFilters = document.querySelectorAll(".field-filter");
const fieldSections = document.querySelectorAll(".field-section");
const sliders = document.querySelectorAll("[data-slider]");
const revealItems = document.querySelectorAll(".reveal");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateSlider = (slider, targetIndex) => {
  const slides = Array.from(slider.querySelectorAll(".slider-slide"));
  const dots = Array.from(slider.querySelectorAll(".slider-dot"));
  const count = slider.querySelector("[data-slider-count]");

  if (!slides.length) return;

  const nextIndex = (targetIndex + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === nextIndex);
  });

  dots.forEach((dot, index) => {
    const isActive = index === nextIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-selected", String(isActive));
  });

  if (count) {
    count.textContent = `${nextIndex + 1} / ${slides.length}`;
  }

  slider.dataset.activeSlide = String(nextIndex);
};

sliders.forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll(".slider-slide"));
  const dotsContainer = slider.querySelector("[data-slider-dots]");
  const previous = slider.querySelector(".slider-arrow-prev");
  const next = slider.querySelector(".slider-arrow-next");

  if (dotsContainer) {
    dotsContainer.innerHTML = "";

    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "slider-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => updateSlider(slider, index));
      dotsContainer.appendChild(dot);
    });
  }

  previous?.addEventListener("click", () => {
    const current = Number(slider.dataset.activeSlide || 0);
    updateSlider(slider, current - 1);
  });

  next?.addEventListener("click", () => {
    const current = Number(slider.dataset.activeSlide || 0);
    updateSlider(slider, current + 1);
  });

  updateSlider(slider, 0);
});

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
