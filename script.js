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
      toDark: "Dark Mode",
      toLight: "Light Mode",
      switchToDark: "Switch to Dark Mode",
      switchToLight: "Switch to Light Mode",
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
        "<span class='hero-hello'><span class='hero-hello-text'>Hello,</span></span><span class='hero-name-line'>I’m Plamena.</span>",
      intro:
        "I create visual identities, digital campaigns, web layouts, email designs, print materials, and presentation designs that help brands communicate their ideas clearly and consistently.",
      primaryAction: "View my work",
      secondaryAction: "Contact me",
      stats: ["Years of experience", "Designs created", "Companies worked with"],
      pictureWords: ["Branding", "Digital", "Web", "3D", "Print", "Logo"],
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
        "I have been working as a graphic designer for the <span class='about-nowrap'>past <strong class='about-emphasis'>3 years</strong></span> in a Bulgarian marketing agency. My work includes visual materials for social media, digital campaigns, websites, email campaigns, print materials, presentations, packaging concepts, brand identity projects, and other communication formats.",
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
      title: "What I offer",
      cards: [
        {
          title: "Social Media Design",
          text: "Posts, stories, and carousels for social media.",
        },
        {
          title: "Branding",
          text: "Logos and basic brand identity elements.",
        },
        {
          title: "Web Layouts",
          text: "Landing pages and website sections with clear structure.",
        },
        {
          title: "Email Design",
          text: "Branded email layouts and campaign visuals.",
        },
        {
          title: "Print & Branded Materials",
          text: "Planners, notebooks, pens, and other printed materials.",
        },
        {
          title: "Presentation Design",
          text: "Structured slides for presentations.",
        },
        {
          title: "Visual Content",
          text: "Infographics, icons, and campaign visuals.",
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
    barecareCaseStudy: {
      eyebrow: "Case study",
      titleTop: "Barecare",
      titleBottom: "Cosmetics",
      summary:
        "Barecare Cosmetics is a leading Korean cosmetics retailer in Bulgaria. I create social media content that is clean, informative and visually consistent across all campaigns and product categories.",
      instagramLink: "View Instagram",
      statsLabel: "Barecare project highlights",
      info: [
        {
          title: "My role",
          text: "Graphic designer responsible for creating Instagram content, campaigns, product graphics, and supporting materials.",
        },
        {
          title: "Goal",
          text: "Create a consistent visual style that highlights products, communicates promotions clearly, and builds a strong brand presence on Instagram.",
        },
        {
          title: "Approach",
          text: "Clean hierarchy, soft colours, product focus, readable typography, and balanced layouts across content and campaigns.",
        },
      ],
      stats: [
        { value: "3", label: "Years of collaboration" },
        { value: "500+", label: "Posts and stories designed" },
        { value: "50+", label: "Campaigns and product launches" },
        { value: "Consistent", label: "Visual identity across all content" },
      ],
    },
    cvetyCaseStudy: {
      eyebrow: "Case study",
      titleTop: "Cvety Vassileva",
      titleBottom: "E-Business Card",
      summary:
        "A compact personal website concept designed to present Cvety Vassileva's digital presence in a clear, elegant, and easy-to-navigate format.",
      liveLink: "View live website",
      statsLabel: "Cvety Vassileva e-business card project highlights",
      info: [
        {
          title: "My role",
          text: "Website layout designer responsible for visual structure, page flow, section hierarchy, and final digital presentation.",
        },
        {
          title: "Goal",
          text: "Create a polished online business card that quickly communicates identity, services, contact options, and social presence.",
        },
        {
          title: "Approach",
          text: "Clean one-page structure, focused hero area, clear call-to-action placement, soft visual hierarchy, and mobile-friendly spacing.",
        },
      ],
      stats: [
        { value: "1-page", label: "Website structure" },
        { value: "Responsive", label: "Layout direction" },
        { value: "Clear", label: "Contact flow" },
        { value: "Personal", label: "Brand presence" },
      ],
    },
    contact: {
      eyebrow: "Let’s work together",
      title: "Need design support?",
      body:
        "Get in touch and tell me more about your project.",
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
          "Other",
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
      toDark: "Тъмен режим",
      toLight: "Светъл режим",
      switchToDark: "Превключи към тъмен режим",
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
        "<span class='hero-hello'><span class='hero-hello-text'>Здравейте,</span></span><span class='hero-name-line hero-name-line-bg'>казвам се Пламена.</span>",
      intro:
        "Създавам визуални идентичности, дигитални кампании, уеб оформления, имейл дизайни, печатни материали и презентационни дизайни, които помагат на брандовете да комуникират идеите си ясно и последователно.",
      primaryAction: "Разгледай проектите ми",
      secondaryAction: "Свържи се с мен",
      stats: ["Години опит", "Създадени дизайни", "Компании, с които съм работила"],
      pictureWords: ["Брандинг", "Дигитално", "Уеб", "3D", "Печат", "Лого"],
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
        "Работя като графичен дизайнер <span class='about-nowrap'>от <strong class='about-emphasis'>3 години</strong></span> в българска маркетингова агенция. В работата си създавам визуални материали за социални мрежи, дигитални кампании, уебсайтове, имейл кампании, печатни материали, презентации, концепции за опаковки, проекти за бранд идентичност и други комуникационни формати.",
      body:
        "Този опит ми помогна да изградя практичен и структуриран подход към дизайна, с фокус върху ясната визуална комуникация, последователното представяне на бранда и обмислените решения, съобразени с целите на всеки проект.",
      strengthsTitle: "Силни страни",
      strengths: [
        "Брандово мислене",
        "Чист визуален стил",
        "Прецизно изпълнение",
        "Адаптивност към дигитални формати",
      ],
      toolsTitle: "Инструменти",
      additionalToolsTitle: "Допълнителни инструменти",
      basics: "Basics",
    },
    services: {
      eyebrow: "Услуги",
      title: "Какво предлагам",
      cards: [
        {
          title: "Дизайн за социални мрежи",
          text: "Постове, сторита и карусели за социални мрежи.",
        },
        {
          title: "Брандинг",
          text: "Лога и основни елементи за бранд идентичност.",
        },
        {
          title: "Уеб оформления",
          text: "Лендинг страници и уеб секции с ясна структура.",
        },
        {
          title: "Имейл дизайн",
          text: "Брандирани имейл оформления и визии за кампании.",
        },
        {
          title: "Печатни и брандирани материали",
          text: "Планери, тетрадки, химикали и други печатни материали.",
        },
        {
          title: "Дизайн за презентации",
          text: "Структурирани слайдове за презентации.",
        },
        {
          title: "Визуално съдържание",
          text: "Инфографики, икони и визии за кампании.",
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
        "presentation-design": "Дизайн за презентации",
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
          titleTop: "Дизайн за",
          titleBottom: "социални мрежи",
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
          titleTop: "Дизайн за",
          titleBottom: "презентации",
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
    barecareCaseStudy: {
      eyebrow: "Case study",
      titleTop: "Barecare",
      titleBottom: "Козметика",
      summary:
        "Barecare Cosmetics е един от водещите търговци на корейска козметика в България. Създавам съдържание за социалните мрежи, което е изчистено, информативно и визуално последователно във всички кампании и продуктови категории.",
      instagramLink: "Вижте Instagram",
      statsLabel: "Акценти от проекта Barecare",
      info: [
        {
          title: "Моята роля",
          text: "Като графичен дизайнер отговарям за създаването на Instagram съдържание, кампании, продуктови визии и съпътстващи визуални материали.",
        },
        {
          title: "Цел",
          text: "Да създам последователен визуален стил, който поставя продуктите на фокус, комуникира промоциите ясно и изгражда силно присъствие на бранда в Instagram.",
        },
        {
          title: "Подход",
          text: "Изчистена визуална йерархия, меки цветове, фокус върху продукта, четима типография и балансирани композиции във всички видове съдържание и кампании.",
        },
      ],
      stats: [
        { value: "3", label: "Години сътрудничество" },
        { value: "500+", label: "Публикации и сторита" },
        { value: "50+", label: "Кампании и продуктови лансирания" },
        { value: "Последователна", label: "визуална идентичност във всички формати съдържание" },
      ],
    },
    cvetyCaseStudy: {
      eyebrow: "Case study",
      titleTop: "Cvety Vassileva",
      titleBottom: "Е-бизнес картичка",
      summary:
        "Проектът представлява изработен личен уебсайт за Цвети Василева, който представя нейното дигитално присъствие по ясен, елегантен и лесен за навигация начин.",
      liveLink: "Разгледайте уебсайта",
      statsLabel: "Акценти от проекта Cvety Vassileva",
      info: [
        {
          title: "Моята роля",
          text: "Уеб дизайнер на проекта, отговорен за визуалната концепция, структурата на страницата, подредбата на секциите и цялостното потребителско изживяване.",
        },
        {
          title: "Цел",
          text: "Да се изработи личен уебсайт, който представя Цвети Василева по професионален и достъпен начин, като обединява информация за нейната дейност, услуги, контакти, социални канали, активни промокодове и продуктите, които използва и препоръчва.",
        },
        {
          title: "Подход",
          text: "Изчистена структура на уебсайта с ясно подредени секции за дейност, услуги, продукти, промокодове, контакти и социални канали. Дизайнът е създаден с фокус върху лесната навигация, добрата визуална йерархия и удобното потребителско изживяване на различни устройства.",
        },
      ],
      stats: [
        { value: "1 стр.", label: "Структура на сайта" },
        { value: "Адаптивен", label: "Дизайн за всички устройства" },
        { value: "Лесна", label: "Ориентация" },
        { value: "Лично", label: "Брандово присъствие" },
      ],
    },
    contact: {
      eyebrow: "Да работим заедно",
      title: "Имате нужда от дизайн?",
      body:
        "Свържете се с мен и ми разкажете повече за проекта си.",
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
          "Друго",
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
      if (element.innerHTML !== value) {
        element.innerHTML = value;
      }
    } else if (element.textContent !== value) {
      element.textContent = value;
    }
  });
};

const setAttribute = (selector, attribute, value, { all = false } = {}) => {
  const elements = all ? document.querySelectorAll(selector) : [document.querySelector(selector)];

  elements.forEach((element) => {
    if (element?.getAttribute(attribute) !== value) {
      element?.setAttribute(attribute, value);
    }
  });
};

const runWhenIdle = (callback, timeout = 1600) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout });
    return;
  }

  window.setTimeout(callback, Math.min(timeout, 700));
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
      const slideIndex = Number(dot.dataset.slideIndex ?? index);
      dot.setAttribute("aria-label", `${copy.work.common.slideLabel} ${slideIndex + 1}`);
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
  const previewSource = image.currentSrc || image.getAttribute("src") || image.dataset.src || image.src;
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

const isSliderVisible = (slider) => {
  const fieldSection = slider.closest(".field-section");
  return !fieldSection || !fieldSection.hidden;
};

const getImageSource = (image) =>
  image?.currentSrc || image?.getAttribute("src") || image?.dataset.src || image?.src || "";

const setBannerBackdrop = (slide) => {
  if (!slide?.matches(".field-slider-banners .slider-slide.image-slide")) return;

  const image = slide.querySelector(":scope > img");
  const source = getImageSource(image);

  if (source) {
    slide.style.setProperty("--slide-backdrop", `url("${source.split("?")[0]}")`);
  }
};

const loadSlideMedia = (slide) => {
  if (!slide) return;

  slide.querySelectorAll("img[data-src]").forEach((image) => {
    const source = image.dataset.src;
    if (!source) return;

    image.src = source;
    image.removeAttribute("data-src");
  });

  const image = slide.querySelector(":scope > img");
  if (image?.complete) {
    setBannerBackdrop(slide);
  } else {
    image?.addEventListener("load", () => setBannerBackdrop(slide), { once: true });
  }
};

const primeSliderMedia = (slider, activeIndex) => {
  if (!isSliderVisible(slider)) return;

  const slides = Array.from(slider.querySelectorAll(".slider-slide"));
  if (!slides.length) return;

  loadSlideMedia(slides[activeIndex]);

  runWhenIdle(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const previousIndex = (activeIndex - 1 + slides.length) % slides.length;

    loadSlideMedia(slides[nextIndex]);
    if (previousIndex !== nextIndex) {
      loadSlideMedia(slides[previousIndex]);
    }
  }, 1200);
};

const setupBannerBackdrops = () => {
  document.querySelectorAll(".field-slider-banners .slider-slide.is-active").forEach(setBannerBackdrop);
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
  copy.hero.pictureWords.forEach((word, index) => {
    setText(`.hero-picture-words span:nth-child(${index + 1})`, word);
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

  if (copy.barecareCaseStudy) {
    const barecare = copy.barecareCaseStudy;
    setText("#barecare-case-study .barecare-eyebrow", barecare.eyebrow);
    setText(
      "#barecare-title",
      `<span>${barecare.titleTop}</span><span>${barecare.titleBottom}</span>`,
      { html: true },
    );
    setText("#barecare-case-study .barecare-summary", barecare.summary);
    setText("#barecare-case-study .barecare-instagram-link", barecare.instagramLink);
    setAttribute("#barecare-case-study .barecare-stat-grid", "aria-label", barecare.statsLabel);

    barecare.info.forEach((item, index) => {
      const child = index + 1;
      setText(`#barecare-case-study .barecare-info-item:nth-child(${child}) h3`, item.title);
      setText(`#barecare-case-study .barecare-info-item:nth-child(${child}) p`, item.text);
    });

    barecare.stats.forEach((item, index) => {
      const child = index + 1;
      setText(`#barecare-case-study .barecare-stat-grid div:nth-child(${child}) dt`, item.value);
      setText(`#barecare-case-study .barecare-stat-grid div:nth-child(${child}) dd`, item.label);
    });
  }

  if (copy.cvetyCaseStudy) {
    const cvety = copy.cvetyCaseStudy;
    setText("#cvety-case-study .barecare-eyebrow", cvety.eyebrow);
    setText(
      "#cvety-title",
      `<span>${cvety.titleTop}</span><span>${cvety.titleBottom}</span>`,
      { html: true },
    );
    setText("#cvety-case-study .barecare-summary", cvety.summary);
    setText("#cvety-case-study .cvety-live-link", cvety.liveLink);
    setAttribute("#cvety-case-study .barecare-stat-grid", "aria-label", cvety.statsLabel);

    cvety.info.forEach((item, index) => {
      const child = index + 1;
      setText(`#cvety-case-study .barecare-info-item:nth-child(${child}) h3`, item.title);
      setText(`#cvety-case-study .barecare-info-item:nth-child(${child}) p`, item.text);
    });

    cvety.stats.forEach((item, index) => {
      const child = index + 1;
      setText(`#cvety-case-study .barecare-stat-grid div:nth-child(${child}) dt`, item.value);
      setText(`#cvety-case-study .barecare-stat-grid div:nth-child(${child}) dd`, item.label);
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

setupBannerBackdrops();
setupImageViewer();
applyLanguage(currentLanguage);

const getSliderDotCount = (slider, slideCount) => {
  const requestedCount = Number(slider.dataset.dotCount);

  if (Number.isInteger(requestedCount) && requestedCount > 0) {
    return Math.min(requestedCount, slideCount);
  }

  return slideCount;
};

const getDotSlideIndex = (dotIndex, dotCount, slideCount) => {
  if (dotCount <= 1 || slideCount <= 1) return 0;
  return Math.round((dotIndex / (dotCount - 1)) * (slideCount - 1));
};

const getActiveDotIndex = (slideIndex, dotCount, slideCount) => {
  if (dotCount <= 1 || slideCount <= 1) return 0;
  return Math.round((slideIndex / (slideCount - 1)) * (dotCount - 1));
};

const updateSlider = (slider, targetIndex) => {
  const slides = Array.from(slider.querySelectorAll(".slider-slide"));
  const dots = Array.from(slider.querySelectorAll(".slider-dot"));

  if (!slides.length) return;

  const nextIndex = (targetIndex + slides.length) % slides.length;
  const activeDotIndex = getActiveDotIndex(nextIndex, dots.length, slides.length);

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
    const isActive = index === activeDotIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-selected", String(isActive));
  });

  slider.dataset.activeSlide = String(nextIndex);
  slider.dataset.activeRatio = slides[nextIndex].dataset.slideRatio || "default";
  primeSliderMedia(slider, nextIndex);
};

sliders.forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll(".slider-slide"));
  const dotsContainer = slider.querySelector("[data-slider-dots]");
  const previous = slider.querySelector(".slider-arrow-prev");
  const next = slider.querySelector(".slider-arrow-next");

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    const dotCount = getSliderDotCount(slider, slides.length);

    Array.from({ length: dotCount }).forEach((_, index) => {
      const slideIndex = getDotSlideIndex(index, dotCount, slides.length);
      const dot = document.createElement("button");
      dot.className = "slider-dot";
      dot.type = "button";
      dot.dataset.slideIndex = String(slideIndex);
      dot.setAttribute(
        "aria-label",
        `${translations[currentLanguage].work.common.slideLabel} ${slideIndex + 1}`,
      );
      dot.addEventListener("click", () => updateSlider(slider, slideIndex));
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
        section.querySelectorAll("[data-slider]").forEach((slider) => {
          updateSlider(slider, Number(slider.dataset.activeSlide || 0));
        });
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
