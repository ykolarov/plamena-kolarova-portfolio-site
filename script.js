const fieldFilters = document.querySelectorAll(".field-filter");
const fieldSections = document.querySelectorAll(".field-section");
const sliders = document.querySelectorAll("[data-slider]");
const contactForm = document.querySelector("[data-contact-form]");
const languageButtons = document.querySelectorAll("[data-language]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIconImage = document.querySelector(".theme-icon img");
const revealItems = document.querySelectorAll(".reveal");
const metaDescription = document.querySelector('meta[name="description"]');
const imageLightbox = document.querySelector("[data-image-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxTitle = document.querySelector("[data-lightbox-title]");
const lightboxOriginal = document.querySelector("[data-lightbox-original]");
const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");

const translations = {
  en: {
    meta: {
      title: "Plamena Kolarova — Graphic Design Portfolio",
      description:
        "Portfolio of Plamena Kolarova, graphic designer working across branding, digital campaigns, web design, and 3D visuals.",
    },
    aria: {
      backToTop: "Back to top",
      navigation: "Primary navigation",
      language: "Language selection",
      filters: "Portfolio categories",
    },
    theme: {
      toDark: "Night",
      toLight: "Light",
      switchToDark: "Switch to night mode",
      switchToLight: "Switch to light mode",
    },
    imageViewer: {
      view: "View image",
      kicker: "Image preview",
      title: "Selected image",
      openOriginal: "Open original",
      close: "Close image preview",
      label: "Full-size image preview",
    },
    nav: ["About", "Work", "Services", "Contact"],
    brandRole: "Graphic Designer",
    hero: {
      eyebrow: "Brand, campaign & digital design",
      title: "Graphic design that feels <span>clear, polished, and memorable.</span>",
      intro:
        "I create visual identities, digital campaigns, web layouts, and presentation-ready assets that help ideas land with confidence.",
      primaryAction: "View selected work",
      secondaryAction: "Start a conversation",
      stats: ["Years of experience", "Designs created", "Companies worked with"],
      preview: "Portfolio Preview",
      previewLine: "Design. Create. Elevate.",
      phoneTop: "Web",
      phoneBottom: "Layouts",
      glassKicker: "Featured direction",
      glassTitle: "Digital portfolio",
      smallGlassKicker: "3D",
      smallGlassTitle: "Models",
    },
    about: {
      eyebrow: "About me",
      title: "Multidisciplinary design with a clean, modern edge.",
      intro:
        "I’m <strong>Plamena Kolarova</strong>, a graphic designer working across brand identity, digital campaigns, website layouts, visual content, and presentation design.",
      body:
        "My work balances strong concept development with careful visual execution, so each piece feels thoughtful, useful, and ready for real-world use.",
      strengthsTitle: "Core strengths",
      strengths: [
        "Brand-led thinking",
        "Clean visual systems",
        "Detail-oriented execution",
        "Digital-first adaptability",
      ],
      toolsTitle: "Tools",
      additionalToolsTitle: "Additional tools",
      basics: "basics",
    },
    services: {
      eyebrow: "Services",
      title: "Design support across brand, digital, and presentation work.",
      cards: [
        {
          title: "Social media design",
          text: "Posts, stories, and carousels built for consistency and impact.",
        },
        {
          title: "Branding",
          text: "Logos, visual identities, and polished brand foundations.",
        },
        {
          title: "Website layouts",
          text: "Landing pages and interface concepts with clear hierarchy.",
        },
        {
          title: "Email design",
          text: "Clean branded campaigns that read beautifully on screen.",
        },
        {
          title: "Print materials",
          text: "Brochures, flyers, posters, and editorial print assets.",
        },
        {
          title: "Presentation design",
          text: "Structured slides that communicate ideas with confidence.",
        },
        {
          title: "Content visuals",
          text: "Infographics, iconography, and adaptable campaign graphics.",
        },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Explore work by field.",
      filters: {
        "website-designs": "Website Designs",
        "website-banners": "Website Banners",
        "social-media-designs": "Social Media Designs",
        logos: "Logos",
        "presentation-design": "Presentation Design",
        "print-design": "Print Design",
        "3d-design": "3D Design",
      },
      common: {
        kicker: "Featured works",
        tools: "Tools",
        slideLabel: "Go to slide",
      },
      fields: {
        "website-designs": {
          titleTop: "Website",
          titleBottom: "Designs",
          description:
            "A collection of responsive layouts and landing page concepts designed for clarity, hierarchy, and polished digital presentation.",
          slides: ["Desktop concept", "Landing page", "Mobile screens", "UI detail"],
          prev: "Previous website design image",
          next: "Next website design image",
          dots: "Website design slideshow pagination",
        },
        "website-banners": {
          titleTop: "Website",
          titleBottom: "Banners",
          description:
            "Campaign graphics adapted for different web formats, with emphasis on strong visual hierarchy and consistent brand treatment.",
          slides: ["Hero banner", "Leaderboard", "Social crop", "Campaign variation"],
          prev: "Previous website banner image",
          next: "Next website banner image",
          dots: "Website banner slideshow pagination",
        },
        "social-media-designs": {
          titleTop: "Social Media",
          titleBottom: "Designs",
          description:
            "Branded posts, story layouts, and campaign visuals designed to stay consistent while still feeling fresh across a content series.",
          slides: ["Campaign post", "Story sequence", "Carousel cover", "Feed variation"],
          prev: "Previous social media design image",
          next: "Next social media design image",
          dots: "Social media design slideshow pagination",
        },
        logos: {
          titleTop: "Logo",
          titleBottom: "Design",
          description:
            "Logo concepts and identity marks built around strong shape, clear recognition, and flexible use across digital and print contexts.",
          slides: ["Primary mark", "Wordmark", "Monogram", "Brand lockup"],
          prev: "Previous logo design image",
          next: "Next logo design image",
          dots: "Logo design slideshow pagination",
        },
        "presentation-design": {
          titleTop: "Presentation",
          titleBottom: "Design",
          description:
            "Structured slides that turn information into a clear visual story, with strong pacing, hierarchy, and polished layouts.",
          slides: ["IKEA presentation", "Rolex presentation", "Spotify presentation"],
          prev: "Previous presentation design image",
          next: "Next presentation design image",
          dots: "Presentation design slideshow pagination",
        },
        "print-design": {
          titleTop: "Print",
          titleBottom: "Design",
          description:
            "Posters, brochures, and editorial layouts developed with careful typography, balanced spacing, and print-ready composition.",
          slides: ["Poster", "Brochure spread", "Flyer", "Editorial detail"],
          prev: "Previous print design image",
          next: "Next print design image",
          dots: "Print design slideshow pagination",
        },
        "3d-design": {
          titleTop: "3D",
          titleBottom: "Design",
          description:
            "Various 3D models created during university projects, developed in Blender with a focus on modelling, lighting, materials, and rendered presentation.",
          slides: ["University model", "Material study", "Lighting render", "Scene concept"],
          prev: "Previous 3D design image",
          next: "Next 3D design image",
          dots: "3D design slideshow pagination",
        },
      },
    },
    contact: {
      eyebrow: "Let’s work together",
      title: "Need a designer who can move across formats without losing the brand?",
      body:
        "I’m available for graphic design, digital campaign, and portfolio-ready visual work. Send a quick message and I’ll get back to you.",
      linkedin: "LinkedIn",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        project: "Project type",
        options: [
          "Graphic design project",
          "Branding",
          "Website design",
          "Social media design",
          "Print or presentation design",
        ],
        message: "Message",
        messagePlaceholder: "Tell me what you need help with...",
        submit: "Send message",
      },
      status: "Opening your email app with the message ready to send…",
      subjectPrefix: "Portfolio enquiry from",
      bodyLabels: {
        name: "Name",
        email: "Email",
        project: "Project type",
        message: "Message",
      },
    },
    footerRights: "All rights reserved.",
  },
  bg: {
    meta: {
      title: "Пламена Коларова — Портфолио графичен дизайн",
      description:
        "Портфолио на Пламена Коларова — графичен дизайнер с фокус върху брандинг, дигитални кампании, уеб дизайн и визуално съдържание.",
    },
    aria: {
      backToTop: "Към началото",
      navigation: "Основна навигация",
      language: "Избор на език",
      filters: "Категории в портфолиото",
    },
    theme: {
      toDark: "Нощна",
      toLight: "Светла",
      switchToDark: "Превключи към нощен режим",
      switchToLight: "Превключи към светъл режим",
    },
    imageViewer: {
      view: "Виж изображение",
      kicker: "Преглед на изображение",
      title: "Избрано изображение",
      openOriginal: "Отвори оригинала",
      close: "Затвори прегледа",
      label: "Преглед на изображение в пълен размер",
    },
    nav: ["За мен", "Проекти", "Услуги", "Контакт"],
    brandRole: "Графичен дизайнер",
    hero: {
      eyebrow: "Бранд, кампании и дигитален дизайн",
      title: "Графичен дизайн, който изглежда <span>ясен, изчистен и запомнящ се.</span>",
      intro:
        "Създавам визуални идентичности, дигитални кампании, уеб оформления и готови за презентация материали, които помагат на идеите да звучат уверено.",
      primaryAction: "Виж избрани проекти",
      secondaryAction: "Свържи се с мен",
      stats: ["Години опит", "Създадени дизайни", "Компании, с които съм работила"],
      preview: "Преглед на портфолио",
      previewLine: "Дизайн. Идея. Впечатление.",
      phoneTop: "Уеб",
      phoneBottom: "Оформления",
      glassKicker: "Основна посока",
      glassTitle: "Дигитално портфолио",
      smallGlassKicker: "3D",
      smallGlassTitle: "Модели",
    },
    about: {
      eyebrow: "За мен",
      title: "Мултидисциплинарен дизайн с чист, модерен стил.",
      intro:
        "Аз съм <strong>Пламена Коларова</strong>, графичен дизайнер, който работи с бранд идентичност, дигитални кампании, уеб оформления, визуално съдържание и презентационен дизайн.",
      body:
        "Работата ми съчетава силна концепция с внимателно визуално изпълнение, така че всеки проект да бъде полезен, обмислен и готов за реална употреба.",
      strengthsTitle: "Основни силни страни",
      strengths: [
        "Мислене, водено от бранда",
        "Чисти визуални системи",
        "Прецизно изпълнение",
        "Адаптивност към дигитални формати",
      ],
      toolsTitle: "Инструменти",
      additionalToolsTitle: "Допълнителни инструменти",
      basics: "основи",
    },
    services: {
      eyebrow: "Услуги",
      title: "Дизайн подкрепа за бранд, дигитални формати и презентации.",
      cards: [
        {
          title: "Дизайн за социални мрежи",
          text: "Постове, сторита и карусели, създадени за последователност и въздействие.",
        },
        {
          title: "Брандинг",
          text: "Лога, визуални идентичности и изчистени основи за разпознаваем бранд.",
        },
        {
          title: "Уеб оформления",
          text: "Лендинг страници и интерфейсни концепции с ясна визуална йерархия.",
        },
        {
          title: "Имейл дизайн",
          text: "Чисти брандирани кампании, които се четат красиво на екран.",
        },
        {
          title: "Печатни материали",
          text: "Брошури, флаери, постери и редакционни печатни материали.",
        },
        {
          title: "Презентационен дизайн",
          text: "Структурирани слайдове, които комуникират идеи уверено.",
        },
        {
          title: "Визуално съдържание",
          text: "Инфографики, иконография и адаптивни кампанийни графики.",
        },
      ],
    },
    work: {
      eyebrow: "Избрани проекти",
      title: "Разгледай проектите по сфера.",
      filters: {
        "website-designs": "Уеб дизайн",
        "website-banners": "Уеб банери",
        "social-media-designs": "Дизайн за социални мрежи",
        logos: "Лога",
        "presentation-design": "Презентационен дизайн",
        "print-design": "Печатен дизайн",
        "3d-design": "3D дизайн",
      },
      common: {
        kicker: "Избрани проекти",
        tools: "Инструменти",
        slideLabel: "Към слайд",
      },
      fields: {
        "website-designs": {
          titleTop: "Уеб",
          titleBottom: "Дизайн",
          description:
            "Колекция от responsive оформления и концепции за лендинг страници, създадени с яснота, йерархия и полирано дигитално представяне.",
          slides: ["Десктоп концепция", "Лендинг страница", "Мобилни екрани", "UI детайл"],
          prev: "Предишно изображение за уеб дизайн",
          next: "Следващо изображение за уеб дизайн",
          dots: "Навигация на слайдшоу за уеб дизайн",
        },
        "website-banners": {
          titleTop: "Уеб",
          titleBottom: "Банери",
          description:
            "Кампанийни графики, адаптирани за различни уеб формати, с фокус върху силна визуална йерархия и последователно бранд присъствие.",
          slides: ["Hero банер", "Leaderboard банер", "Социален формат", "Вариация на кампания"],
          prev: "Предишно изображение за уеб банер",
          next: "Следващо изображение за уеб банер",
          dots: "Навигация на слайдшоу за уеб банери",
        },
        "social-media-designs": {
          titleTop: "Социални мрежи",
          titleBottom: "Дизайни",
          description:
            "Брандирани постове, сторита и кампанийни визии, проектирани да бъдат последователни и свежи в серия от съдържание.",
          slides: ["Кампаниен пост", "Серия сторита", "Корица за карусел", "Вариация за feed"],
          prev: "Предишно изображение за социални мрежи",
          next: "Следващо изображение за социални мрежи",
          dots: "Навигация на слайдшоу за социални мрежи",
        },
        logos: {
          titleTop: "Лого",
          titleBottom: "Дизайн",
          description:
            "Лого концепции и идентичности, изградени около силна форма, ясна разпознаваемост и гъвкава употреба в дигитални и печатни формати.",
          slides: ["Основен знак", "Wordmark", "Монограм", "Brand lockup"],
          prev: "Предишно изображение за лого дизайн",
          next: "Следващо изображение за лого дизайн",
          dots: "Навигация на слайдшоу за лого дизайн",
        },
        "presentation-design": {
          titleTop: "Презентационен",
          titleBottom: "Дизайн",
          description:
            "Структурирани слайдове, които превръщат информацията в ясна визуална история със силен ритъм, йерархия и полирани оформления.",
          slides: ["IKEA презентация", "Rolex презентация", "Spotify презентация"],
          prev: "Предишно изображение за презентационен дизайн",
          next: "Следващо изображение за презентационен дизайн",
          dots: "Навигация на слайдшоу за презентационен дизайн",
        },
        "print-design": {
          titleTop: "Печатен",
          titleBottom: "Дизайн",
          description:
            "Постери, брошури и редакционни оформления, разработени с внимателна типография, балансирано пространство и композиция, готова за печат.",
          slides: ["Постер", "Брошура", "Флаер", "Редакционен детайл"],
          prev: "Предишно изображение за печатен дизайн",
          next: "Следващо изображение за печатен дизайн",
          dots: "Навигация на слайдшоу за печатен дизайн",
        },
        "3d-design": {
          titleTop: "3D",
          titleBottom: "Дизайн",
          description:
            "Различни 3D модели, създадени по време на университетски проекти в Blender, с фокус върху моделиране, осветление, материали и рендерирано представяне.",
          slides: ["Университетски модел", "Материално проучване", "Осветление и рендер", "3D сцена"],
          prev: "Предишно изображение за 3D дизайн",
          next: "Следващо изображение за 3D дизайн",
          dots: "Навигация на слайдшоу за 3D дизайн",
        },
      },
    },
    contact: {
      eyebrow: "Да работим заедно",
      title: "Търсите дизайнер, който може да работи в различни формати, без да губи бранда?",
      body:
        "На разположение съм за графичен дизайн, дигитални кампании и визуална работа, готова за портфолио. Изпратете кратко съобщение и ще се свържа с вас.",
      linkedin: "LinkedIn",
      form: {
        name: "Име",
        namePlaceholder: "Вашето име",
        email: "Имейл",
        emailPlaceholder: "your@email.com",
        project: "Тип проект",
        options: [
          "Проект за графичен дизайн",
          "Брандинг",
          "Уеб дизайн",
          "Дизайн за социални мрежи",
          "Печатен или презентационен дизайн",
        ],
        message: "Съобщение",
        messagePlaceholder: "Разкажете ми с какво имате нужда от помощ...",
        submit: "Изпрати съобщение",
      },
      status: "Отварям имейл приложението със съобщение, готово за изпращане…",
      subjectPrefix: "Запитване от портфолиото от",
      bodyLabels: {
        name: "Име",
        email: "Имейл",
        project: "Тип проект",
        message: "Съобщение",
      },
    },
    footerRights: "Всички права запазени.",
  },
};

const storedLanguage = (() => {
  try {
    return window.localStorage.getItem("portfolioLanguage");
  } catch {
    return null;
  }
})();

const storedTheme = (() => {
  try {
    return window.localStorage.getItem("portfolioTheme");
  } catch {
    return null;
  }
})();

let currentLanguage = translations[storedLanguage] ? storedLanguage : "en";
let currentTheme = storedTheme === "dark" ? "dark" : "light";

const setText = (selector, value, { html = false, all = false } = {}) => {
  const elements = all ? document.querySelectorAll(selector) : [document.querySelector(selector)];

  elements.forEach((element) => {
    if (!element) return;
    if (html) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });
};

const setAttribute = (selector, attribute, value, { all = false } = {}) => {
  const elements = all ? document.querySelectorAll(selector) : [document.querySelector(selector)];

  elements.forEach((element) => {
    element?.setAttribute(attribute, value);
  });
};

const updateServices = (copy) => {
  document.querySelectorAll(".service-card").forEach((card, index) => {
    const service = copy.services.cards[index];
    if (!service) return;

    setText(`#services .service-card:nth-child(${index + 1}) h3`, service.title);
    setText(`#services .service-card:nth-child(${index + 1}) p`, service.text);
  });
};

const updateFieldSections = (copy) => {
  Object.entries(copy.work.fields).forEach(([field, fieldCopy]) => {
    const section = document.querySelector(`.field-section[data-field="${field}"]`);
    if (!section) return;

    const title = section.querySelector(".field-copy h3");
    const slides = section.querySelectorAll(".slider-slide span");

    setText(`.field-section[data-field="${field}"] .field-kicker`, copy.work.common.kicker);
    setText(`.field-section[data-field="${field}"] .field-description`, fieldCopy.description);
    setText(`.field-section[data-field="${field}"] .field-tools > span`, copy.work.common.tools);

    if (title) {
      title.innerHTML = `<span>${fieldCopy.titleTop}</span><strong>${fieldCopy.titleBottom}</strong>`;
    }

    slides.forEach((slide, index) => {
      if (fieldCopy.slides[index]) {
        slide.textContent = fieldCopy.slides[index];
      }
    });

    section.querySelector(".slider-arrow-prev")?.setAttribute("aria-label", fieldCopy.prev);
    section.querySelector(".slider-arrow-next")?.setAttribute("aria-label", fieldCopy.next);
    section.querySelector("[data-slider-dots]")?.setAttribute("aria-label", fieldCopy.dots);
    section.querySelectorAll(".slider-dot").forEach((dot, index) => {
      dot.setAttribute("aria-label", `${copy.work.common.slideLabel} ${index + 1}`);
    });
  });
};

const updateContactForm = (copy) => {
  const formCopy = copy.contact.form;
  const projectSelect = document.querySelector("#contact-project");

  setText('label[for="contact-name"]', formCopy.name);
  setText('label[for="contact-email"]', formCopy.email);
  setText('label[for="contact-project"]', formCopy.project);
  setText('label[for="contact-message"]', formCopy.message);
  setText(".contact-form .button", formCopy.submit);
  setAttribute("#contact-name", "placeholder", formCopy.namePlaceholder);
  setAttribute("#contact-email", "placeholder", formCopy.emailPlaceholder);
  setAttribute("#contact-message", "placeholder", formCopy.messagePlaceholder);

  projectSelect?.querySelectorAll("option").forEach((option, index) => {
    if (!formCopy.options[index]) return;
    option.textContent = formCopy.options[index];
    option.value = formCopy.options[index];
  });
};

const updateImageViewerCopy = (copy) => {
  document.querySelectorAll("[data-view-image]").forEach((button) => {
    const image = button.closest(".slider-slide")?.querySelector("img");
    const title = image?.alt || copy.imageViewer.title;

    button.textContent = copy.imageViewer.view;
    button.setAttribute("aria-label", `${copy.imageViewer.view}: ${title}`);
  });

  setText(".lightbox-kicker", copy.imageViewer.kicker);
  setText("[data-lightbox-original]", copy.imageViewer.openOriginal);
  setAttribute(".lightbox-panel", "aria-label", copy.imageViewer.label);
  setAttribute("[data-lightbox-close-button]", "aria-label", copy.imageViewer.close);

  if (imageLightbox?.hidden) {
    setText("[data-lightbox-title]", copy.imageViewer.title);
  }
};

let lastFocusedElement = null;

const closeImageLightbox = () => {
  if (!imageLightbox || imageLightbox.hidden) return;

  imageLightbox.hidden = true;
  document.body.classList.remove("body-lightbox-open");

  if (lightboxImage) {
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
  }

  lastFocusedElement?.focus?.();
  lastFocusedElement = null;
};

const openImageLightbox = (image) => {
  if (!imageLightbox || !lightboxImage || !lightboxOriginal) return;

  const copy = translations[currentLanguage] || translations.en;
  const source = image.getAttribute("src") || image.currentSrc || image.src;
  const title = image.alt || copy.imageViewer.title;

  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  lightboxImage.src = source;
  lightboxImage.alt = title;
  lightboxOriginal.href = source;
  setText("[data-lightbox-title]", title);

  imageLightbox.hidden = false;
  document.body.classList.add("body-lightbox-open");
  document.querySelector("[data-lightbox-close-button]")?.focus();
};

const setupImageViewer = () => {
  document.querySelectorAll(".slider-slide.image-slide img").forEach((image) => {
    const slide = image.closest(".slider-slide");
    if (!slide) return;

    let button = slide.querySelector("[data-view-image]");

    if (!button) {
      button = document.createElement("button");
      button.className = "view-image-button";
      button.type = "button";
      button.dataset.viewImage = "";
      slide.appendChild(button);
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openImageLightbox(image);
    });

    image.addEventListener("click", () => openImageLightbox(image));
  });

  lightboxCloseButtons.forEach((button) => {
    button.addEventListener("click", closeImageLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImageLightbox();
    }
  });
};

const renderFooter = (copy) => {
  const footerText = document.querySelector(".site-footer p");
  if (!footerText) return;

  footerText.innerHTML = `© <span id="year">${new Date().getFullYear()}</span> Plamena Kolarova. ${copy.footerRights}`;
};

const applyTheme = (theme, { persist = true } = {}) => {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  const copy = translations[currentLanguage] || translations.en;
  const isDark = normalizedTheme === "dark";

  currentTheme = normalizedTheme;
  document.documentElement.dataset.theme = normalizedTheme;

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? copy.theme.switchToLight : copy.theme.switchToDark);
    themeIconImage?.setAttribute(
      "src",
      isDark ? "Night_Light_Mode/Light.png" : "Night_Light_Mode/Night.png",
    );
    setText(".theme-label", isDark ? copy.theme.toLight : copy.theme.toDark);
  }

  if (persist) {
    try {
      window.localStorage.setItem("portfolioTheme", normalizedTheme);
    } catch {
      // If storage is unavailable, the switch still works for this visit.
    }
  }
};

const applyLanguage = (language) => {
  const copy = translations[language] || translations.en;
  currentLanguage = language;

  document.documentElement.lang = language;
  document.title = copy.meta.title;
  metaDescription?.setAttribute("content", copy.meta.description);
  applyTheme(currentTheme, { persist: false });

  setAttribute(".brand", "aria-label", copy.aria.backToTop);
  setAttribute(".site-nav", "aria-label", copy.aria.navigation);
  setAttribute(".language-toggle", "aria-label", copy.aria.language);
  setAttribute(".field-filters", "aria-label", copy.aria.filters);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setText(".brand-copy small", copy.brandRole);
  document.querySelectorAll(".site-nav a").forEach((item, index) => {
    if (copy.nav[index]) item.textContent = copy.nav[index];
  });

  setText(".hero-copy .eyebrow", copy.hero.eyebrow);
  setText(".hero-copy h1", copy.hero.title, { html: true });
  setText(".hero-intro", copy.hero.intro);
  setText(".hero-actions .button-primary", copy.hero.primaryAction);
  setText(".hero-actions .button-ghost", copy.hero.secondaryAction);
  copy.hero.stats.forEach((stat, index) => {
    setText(`.hero-meta li:nth-child(${index + 1}) span`, stat);
  });
  setText(".mockup-screen-content p", copy.hero.preview);
  setText(".mockup-screen-content strong", copy.hero.previewLine);
  setText(".phone-content span", copy.hero.phoneTop);
  setText(".phone-content strong", copy.hero.phoneBottom);
  setText(".floating-glass-large span", copy.hero.glassKicker);
  setText(".floating-glass-large strong", copy.hero.glassTitle);
  setText(".floating-glass-small span", copy.hero.smallGlassKicker);
  setText(".floating-glass-small strong", copy.hero.smallGlassTitle);

  setText("#about .section-heading .eyebrow", copy.about.eyebrow);
  setText("#about .section-heading h2", copy.about.title);
  setText(".about-copy p:nth-child(1)", copy.about.intro, { html: true });
  setText(".about-copy p:nth-child(2)", copy.about.body);
  setText(".about-panel h3", copy.about.strengthsTitle);
  copy.about.strengths.forEach((strength, index) => {
    setText(`.check-list li:nth-child(${index + 1})`, strength);
  });
  setText(".tool-panel h3", copy.about.toolsTitle);
  setText(".additional-tools-panel h3", copy.about.additionalToolsTitle);
  setText(".tool-chip small, .additional-tool-list small", copy.about.basics, { all: true });

  setText("#services .section-heading .eyebrow", copy.services.eyebrow);
  setText("#services .section-heading h2", copy.services.title);
  updateServices(copy);

  setText("#work .section-heading .eyebrow", copy.work.eyebrow);
  setText("#work .section-heading h2", copy.work.title);
  fieldFilters.forEach((filter) => {
    const label = copy.work.filters[filter.dataset.fieldFilter];
    if (label) filter.textContent = label;
  });
  updateFieldSections(copy);

  setText("#contact .eyebrow", copy.contact.eyebrow);
  setText("#contact h2", copy.contact.title);
  setText(".contact-copy > p:not(.eyebrow)", copy.contact.body);
  setText(".contact-link-linkedin span", copy.contact.linkedin);
  updateContactForm(copy);
  updateImageViewerCopy(copy);

  renderFooter(copy);

  try {
    window.localStorage.setItem("portfolioLanguage", language);
  } catch {
    // If storage is unavailable, the switch still works for this visit.
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language || "en");
  });
});

themeToggle?.addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const copy = translations[currentLanguage] || translations.en;
  const data = new FormData(contactForm);
  const name = data.get("name")?.toString().trim() || "Portfolio visitor";
  const email = data.get("email")?.toString().trim() || "";
  const project = data.get("project")?.toString().trim() || copy.contact.form.options[0];
  const message = data.get("message")?.toString().trim() || "";
  const status = contactForm.querySelector("[data-form-status]");

  const subject = `${copy.contact.subjectPrefix} ${name}`;
  const body = [
    `${copy.contact.bodyLabels.name}: ${name}`,
    `${copy.contact.bodyLabels.email}: ${email}`,
    `${copy.contact.bodyLabels.project}: ${project}`,
    "",
    `${copy.contact.bodyLabels.message}:`,
    message,
  ].join("\n");

  if (status) {
    status.textContent = copy.contact.status;
  }

  window.location.href = `mailto:kolarovaplamena@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

setupImageViewer();
applyLanguage(currentLanguage);

const updateSlider = (slider, targetIndex) => {
  const slides = Array.from(slider.querySelectorAll(".slider-slide"));
  const dots = Array.from(slider.querySelectorAll(".slider-dot"));

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

  slider.dataset.activeSlide = String(nextIndex);
  slider.dataset.activeRatio = slides[nextIndex].dataset.slideRatio || "default";
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
      dot.setAttribute(
        "aria-label",
        `${translations[currentLanguage].work.common.slideLabel} ${index + 1}`,
      );
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
