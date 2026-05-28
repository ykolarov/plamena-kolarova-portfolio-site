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
const defaultContactFormEndpoint = "https://formsubmit.co/ajax/kolarovaplamena@gmail.com";

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
      title:
        "<span class='hero-hello'>Hello,</span><span class='hero-name-line'>I’m Plamena.</span>",
      intro:
        "I create visual identities, digital campaigns, web layouts, email designs, print materials, and presentation designs that help brands communicate their ideas clearly and consistently.",
      primaryAction: "View selected work",
      secondaryAction: "Contact me",
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
      title: "Design profile",
      intro:
        "I have been working as a graphic designer for the past three years in a Bulgarian marketing agency. My work includes visual materials for social media, digital campaigns, websites, email campaigns, print materials, presentations, packaging concepts, brand identity projects, and other communication formats.",
      body:
        "This experience has helped me develop a practical and structured approach to design, with a focus on clear visual communication, consistent brand presentation, and thoughtful solutions tailored to each project.",
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
      title: "What I can help with",
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
      title: "Explore work by field",
      filters: {
        "website-designs": "Website Designs",
        "website-banners": "Website Banners",
        "social-media-designs": "Social Media Designs",
        logos: "Logo",
        "presentation-design": "Presentation Design",
        "print-design": "Print Design",
        "3d-design": "3D Design",
        miscellaneous: "Miscellaneous",
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
            "Website layouts and landing page concepts developed with a clear structure, easy navigation, and a carefully built visual hierarchy.",
          slides: ["Desktop concept", "Landing page", "Mobile screens", "UI detail"],
          prev: "Previous website design image",
          next: "Next website design image",
          dots: "Website design slideshow pagination",
        },
        "website-banners": {
          titleTop: "Website",
          titleBottom: "Banners",
          description:
            "Website banners designed for different web formats, with careful attention to visual hierarchy, clarity, and brand\u00a0alignment.",
          slides: ["Hero banner", "Leaderboard", "Social crop", "Campaign variation"],
          prev: "Previous website banner image",
          next: "Next website banner image",
          dots: "Website banner slideshow pagination",
        },
        "social-media-designs": {
          titleTop: "Social Media",
          titleBottom: "Designs",
          description:
            "Social media posts designed to communicate clearly, stay visually consistent, and support a polished brand presence online.",
          slides: ["Campaign post", "Story sequence", "Carousel cover", "Feed variation"],
          prev: "Previous social media design image",
          next: "Next social media design image",
          dots: "Social media design slideshow pagination",
        },
        logos: {
          titleTop: "Logo",
          titleBottom: "Design",
          description:
            "Logo concepts designed with attention to clarity, proportion, and flexible use across digital and print formats.",
          slides: ["Primary mark", "Wordmark", "Monogram", "Brand lockup"],
          prev: "Previous logo design image",
          next: "Next logo design image",
          dots: "Logo design slideshow pagination",
        },
        "presentation-design": {
          titleTop: "Presentation",
          titleBottom: "Design",
          description:
            "Structured presentation slides designed to present information clearly, with a balanced visual flow, clear hierarchy, and polished layouts.",
          slides: ["IKEA presentation", "Rolex presentation", "Spotify presentation"],
          prev: "Previous presentation design image",
          next: "Next presentation design image",
          dots: "Presentation design slideshow pagination",
        },
        "print-design": {
          titleTop: "Print",
          titleBottom: "Design",
          description:
            "Planners, notebooks, and branded pens designed with attention to visual consistency, detail, and a polished final presentation.",
          slides: ["Poster", "Brochure spread", "Flyer", "Editorial detail"],
          prev: "Previous print design image",
          next: "Next print design image",
          dots: "Print design slideshow pagination",
        },
        "3d-design": {
          titleTop: "3D",
          titleBottom: "Design",
          description:
            "3D models created during my 3D Modelling course at university, with a focus on modelling, lighting, materials, and final rendered presentation.",
          slides: ["University model", "Material study", "Lighting render", "Scene concept"],
          prev: "Previous 3D design image",
          next: "Next 3D design image",
          dots: "3D design slideshow pagination",
        },
        miscellaneous: {
          titleTop: "Miscellaneous",
          titleBottom: "Design",
          description:
            "Additional visual work created for different formats and purposes.",
          slides: ["Mixed layout", "Campaign detail", "Visual experiment", "Extra project"],
          prev: "Previous miscellaneous design image",
          next: "Next miscellaneous design image",
          dots: "Miscellaneous design slideshow pagination",
        },
      },
    },
    instagramFeeds: {
      eyebrow: "Instagram profile",
      cards: [
        {
          title: "K-Zone Beauty",
          handle: "@kzonebeauty",
          text: "Beauty and skincare campaign visuals, product launches, and ongoing feed design.",
          cta: "Open full feed",
        },
        {
          title: "Beauty Army BG",
          handle: "@beautyarmy.bg",
          text: "Social media visuals for beauty products, promotions, and branded content series.",
          cta: "Open full feed",
        },
        {
          title: "Barecare Cosmetics",
          handle: "@barecarecosmetics",
          text: "Barecare Cosmetics is the largest distributor of Korean cosmetics in Bulgaria. Over the past three years, I have worked on the brand’s Instagram content, maintaining the visual structure of the feed and creating infographics, stories, campaign designs, and other supporting visual materials.",
          cta: "Open full feed",
        },
      ],
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
      status: {
        sending: "Sending your message...",
        success: "Message sent. I will get back to you soon.",
        error: "Sorry, the message could not be sent. Please try again or email me directly.",
      },
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
      title:
        "<span class='hero-hello'>Здравейте,</span><span class='hero-name-line hero-name-line-bg'>казвам се Пламена.</span>",
      intro:
        "Създавам визуални идентичности, дигитални кампании, уеб оформления, имейл дизайни, печатни материали и презентационни дизайни, които помагат на брандовете да комуникират идеите си ясно и последователно.",
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
      title: "Дизайнерски профил",
      intro:
        "Работя като графичен дизайнер от три години в българска маркетингова агенция. В работата си създавам визуални материали за социални мрежи, дигитални кампании, уебсайтове, имейл кампании, печатни материали, презентации, концепции за опаковки, проекти за бранд идентичност и други комуникационни формати.",
      body:
        "Този опит ми помогна да изградя практичен и структуриран подход към дизайна, с фокус върху ясната визуална комуникация, последователното представяне на бранда и обмислените решения, съобразени с целите на всеки проект.",
      strengthsTitle: "Основни силни страни",
      strengths: [
        "Брандово мислене",
        "Чист визуален стил",
        "Прецизно изпълнение",
        "Адаптивност към дигитални формати",
      ],
      toolsTitle: "Инструменти",
      additionalToolsTitle: "Допълнителни инструменти",
      basics: "основи",
    },
    services: {
      eyebrow: "Услуги",
      title: "Дизайн подкрепа за бранд, дигитални формати и презентации",
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
      title: "Разгледай проектите по сфера",
      filters: {
        "website-designs": "Уеб дизайн",
        "website-banners": "Уеб банери",
        "social-media-designs": "Дизайн за социални мрежи",
        logos: "Лого",
        "presentation-design": "Презентационен дизайн",
        "print-design": "Печатен дизайн",
        "3d-design": "3D дизайн",
        miscellaneous: "Допълнителни проекти",
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
            "Уеб оформления и концепции за лендинг страници, разработени с ясна структура, лесна навигация и внимателно изградена визуална йерархия.",
          slides: ["Десктоп концепция", "Лендинг страница", "Мобилни екрани", "UI детайл"],
          prev: "Предишно изображение за уеб дизайн",
          next: "Следващо изображение за уеб дизайн",
          dots: "Навигация на слайдшоу за уеб дизайн",
        },
        "website-banners": {
          titleTop: "Уеб",
          titleBottom: "Банери",
          description:
            "Уеб банери, адаптирани за различни дигитални формати, с фокус върху ясна визуална йерархия, четимост и съответствие с бранд идентичността.",
          slides: ["Hero банер", "Leaderboard банер", "Социален формат", "Вариация на кампания"],
          prev: "Предишно изображение за уеб банер",
          next: "Следващо изображение за уеб банер",
          dots: "Навигация на слайдшоу за уеб банери",
        },
        "social-media-designs": {
          titleTop: "Социални мрежи",
          titleBottom: "Дизайни",
          description:
            "Публикации за социални мрежи, създадени с фокус върху ясната комуникация, визуалната последователност и изграждането на добре оформено бранд присъствие онлайн.",
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
            "Презентационни слайдове, структурирани така, че да представят информацията ясно, с балансиран визуален ритъм, ясна йерархия и прецизно оформени страници.",
          slides: ["IKEA презентация", "Rolex презентация", "Spotify презентация"],
          prev: "Предишно изображение за презентационен дизайн",
          next: "Следващо изображение за презентационен дизайн",
          dots: "Навигация на слайдшоу за презентационен дизайн",
        },
        "print-design": {
          titleTop: "Печатен",
          titleBottom: "Дизайн",
          description:
            "Планери, тетрадки и брандирани химикали, създадени с внимание към визуалната последователност, детайла и прецизното финално оформление.",
          slides: ["Постер", "Брошура", "Флаер", "Редакционен детайл"],
          prev: "Предишно изображение за печатен дизайн",
          next: "Следващо изображение за печатен дизайн",
          dots: "Навигация на слайдшоу за печатен дизайн",
        },
        "3d-design": {
          titleTop: "3D",
          titleBottom: "Дизайн",
          description:
            "3D модели, създадени по време на университетската ми дисциплина „3D моделиране“, с фокус върху моделиране, осветление, материали и финално рендерирано представяне.",
          slides: ["Университетски модел", "Материално проучване", "Осветление и рендер", "3D сцена"],
          prev: "Предишно изображение за 3D дизайн",
          next: "Следващо изображение за 3D дизайн",
          dots: "Навигация на слайдшоу за 3D дизайн",
        },
        miscellaneous: {
          titleTop: "Допълнителни",
          titleBottom: "Проекти",
          description:
            "Допълнителни визуални разработки, създадени за различни формати и цели.",
          slides: ["Смесено оформление", "Кампаен детайл", "Визуален експеримент", "Допълнителен проект"],
          prev: "Предишно изображение за допълнителни проекти",
          next: "Следващо изображение за допълнителни проекти",
          dots: "Навигация на слайдшоу за допълнителни проекти",
        },
      },
    },
    instagramFeeds: {
      eyebrow: "Instagram профил",
      cards: [
        {
          title: "K-Zone Beauty",
          handle: "@kzonebeauty",
          text: "Визии за beauty и skincare кампании, продуктови лансирания и последователен feed дизайн.",
          cta: "Отвори целия профил",
        },
        {
          title: "Beauty Army BG",
          handle: "@beautyarmy.bg",
          text: "Визуално съдържание за beauty продукти, промоции и брандирани серии за социални мрежи.",
          cta: "Отвори целия профил",
        },
        {
          title: "Barecare Cosmetics",
          handle: "@barecarecosmetics",
          text: "Barecare Cosmetics е най-големият дистрибутор на корейска козметика в България. През последните три години работя по Instagram съдържанието на бранда, като поддържам визуалната структура на профила и създавам инфографики, сторита, дизайни за кампании и други съпътстващи визуални материали.",
          cta: "Отвори целия профил",
        },
      ],
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
      status: {
        sending: "Изпращам съобщението...",
        success: "Съобщението е изпратено. Ще се свържа с вас скоро.",
        error: "Съобщението не можа да бъде изпратено. Моля, опитайте отново или ми пишете директно на имейл.",
      },
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
  const previewSource = image.currentSrc || image.getAttribute("src") || image.src;
  const originalSource = image.dataset.originalSrc || previewSource;
  const title = image.alt || copy.imageViewer.title;

  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  lightboxImage.src = previewSource;
  lightboxImage.alt = title;
  lightboxOriginal.href = originalSource;
  setText("[data-lightbox-title]", title);

  imageLightbox.hidden = false;
  document.body.classList.add("body-lightbox-open");
  document.querySelector("[data-lightbox-close-button]")?.focus();
};

const setupImageViewer = () => {
  document.querySelectorAll(".slider-slide.image-slide > img").forEach((image) => {
    const slide = image.closest(".slider-slide");
    const slider = image.closest(".field-slider");
    if (!slide) return;
    if (slider?.classList.contains("field-slider-web")) return;

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

  if (copy.instagramFeeds) {
    setText("#instagram-feeds .instagram-profile-eyebrow", copy.instagramFeeds.eyebrow);
    copy.instagramFeeds.cards.forEach((card, index) => {
      const item = index + 1;
      setText(`.instagram-feed-card:nth-child(${item}) h3`, card.title);
      setText(`.instagram-feed-card:nth-child(${item}) .instagram-feed-top span:not(.instagram-mark)`, card.handle);
      setText(`.instagram-feed-card:nth-child(${item}) > p`, card.text);
      setText(`.instagram-feed-card:nth-child(${item}) .instagram-feed-link`, `${card.cta} <span aria-hidden="true">↗</span>`, { html: true });
    });
  }

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

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const copy = translations[currentLanguage] || translations.en;
  const data = new FormData(contactForm);
  const honeypot = data.get("_honey")?.toString().trim() || "";
  const name = data.get("name")?.toString().trim() || "Portfolio visitor";
  const email = data.get("email")?.toString().trim() || "";
  const project = data.get("project")?.toString().trim() || copy.contact.form.options[0];
  const message = data.get("message")?.toString().trim() || "";
  const status = contactForm.querySelector("[data-form-status]");
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const endpoint = contactForm.dataset.formEndpoint || defaultContactFormEndpoint;

  const subject = `${copy.contact.subjectPrefix} ${name}`;

  if (honeypot) {
    contactForm.reset();
    if (status) {
      status.textContent = copy.contact.status.success;
    }
    return;
  }

  if (status) {
    status.textContent = copy.contact.status.sending;
  }

  contactForm.setAttribute("aria-busy", "true");
  if (submitButton) {
    submitButton.disabled = true;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        project,
        message,
        _captcha: "false",
        _template: "table",
        _subject: subject,
      }),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
      throw new Error(result.message || "Form submission failed");
    }

    contactForm.reset();
    if (status) {
      status.textContent = copy.contact.status.success;
    }
  } catch {
    if (status) {
      status.textContent = copy.contact.status.error;
    }
  } finally {
    contactForm.removeAttribute("aria-busy");
    if (submitButton) {
      submitButton.disabled = false;
    }
  }
});

setupImageViewer();
applyLanguage(currentLanguage);

const updateSlider = (slider, targetIndex) => {
  const slides = Array.from(slider.querySelectorAll(".slider-slide"));
  const dots = Array.from(slider.querySelectorAll(".slider-dot"));

  if (!slides.length) return;

  const nextIndex = (targetIndex + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    const isActive = index === nextIndex;
    const focusableItems = slide.querySelectorAll("a, button, input, select, textarea, [tabindex]");

    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));

    focusableItems.forEach((item) => {
      if (isActive) {
        item.removeAttribute("tabindex");
      } else {
        item.setAttribute("tabindex", "-1");
      }
    });
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
