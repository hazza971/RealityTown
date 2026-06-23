const storageKey = "reality-town-site-content-v8";
const adminSessionKey = "reality-town-admin-session";

const defaultContent = {
  site: {
    name: "Reality Town",
    tagline: "الحل الكامل للسيرفرات الاحترافية التي ترغب في الاستفادة القصوى من موقعها الإلكتروني.",
    season: "الحزمة الاحترافية الكاملة",
    heroTitle: "موقع سيرفر احترافي يعكس قوة مجتمعك",
    heroText:
      "واجهة رقمية حديثة لسيرفرات الرول بلاي، تجمع بين الهوية البصرية القوية، الصفحات المتكاملة، وتجربة استخدام احترافية واضحة.",
    primaryCta: "ابدأ الآن",
    secondaryCta: "استعرض المميزات",
    discordUrl: "#contact",
    joinUrl: "#store",
    aboutTitle: "لماذا Reality Town",
    aboutText:
      "هذا القالب مصمم للسيرفرات التي تريد حضورًا بصريًا قويًا، تنظيمًا للمحتوى، وتجربة احترافية متوافقة مع الجوال والتابلت مع إمكانية التوسع نحو باك-إند حقيقي لاحقًا.",
    aboutBullets: [
      "تنسيق احترافي للأقسام والمحتوى",
      "تصميم متوافق مع الجوال والأجهزة اللوحية",
      "صفحات تعريفية وتجارية متكاملة",
      "قابلية تطوير وربط مع قواعد بيانات لاحقًا"
    ]
  },
  stats: [
    { value: "+12,400", label: "إجمالي أعضاء المجتمع" },
    { value: "320", label: "المتصلون الآن" },
    { value: "48", label: "الإدارات والفصائل" },
    { value: "+180", label: "الأنظمة والسكربتات" }
  ],
  features: [
    {
      title: "تنظيم واضح وسلس",
      text: "عرض مرتب للمحتوى والأقسام والروابط بطريقة تمنح الزائر تجربة سهلة وواضحة داخل الموقع."
    },
    {
      title: "تصميم احترافي متوافق مع جميع الأجهزة",
      text: "واجهة حديثة ومتناسقة تعمل بسلاسة على الكمبيوتر والجوال والأجهزة اللوحية مع تجربة استخدام مريحة."
    },
    {
      title: "صفحة قوانين منظمة وواضحة",
      text: "عرض القوانين داخل تصنيفات مرتبة تسهّل على اللاعبين الوصول للمعلومات وفهم الأنظمة المعتمدة داخل السيرفر."
    },
    {
      title: "نظام تقديمات إلكتروني",
      text: "إمكانية عرض عدة نماذج تقديم للإدارة أو الجهات الرسمية أو الفرق المختلفة داخل السيرفر بشكل منظم."
    },
    {
      title: "متجر متكامل للخدمات والمنتجات",
      text: "قسم مخصص لعرض الباقات والمنتجات والخدمات الخاصة بالسيرفر بطريقة احترافية تساعد الزائر على فهم الخيارات المتاحة."
    },
    {
      title: "صفحة بثوث مباشرة لصناع المحتوى",
      text: "إبراز البثوث المباشرة والقنوات الداعمة للسيرفر لزيادة التفاعل وتعزيز حضور المجتمع الإعلامي."
    },
    {
      title: "صفحات تعريفية متكاملة",
      text: "يشمل الموقع الصفحة الرئيسية، من نحن، فريق الإدارة، المميزات، المتجر، التقديمات، القوانين، والتواصل معنا."
    },
    {
      title: "جاهز للتوسع والتطوير",
      text: "بنية الموقع قابلة للتطوير مستقبلًا لإضافة مزايا إضافية وخدمات متقدمة حسب احتياج السيرفر."
    }
  ],
  team: [
    {
      initials: "HA",
      avatar: "",
      name: "HAZZA3",
      role: "OWNER",
      bio: "أحد ملاك السيرفر والمسؤولين عن الإشراف العام واتخاذ القرارات الأساسية المتعلقة بتطوير Reality Town."
    },
    {
      initials: "LE",
      avatar: "",
      name: "LeVa",
      role: "OWNER",
      bio: "أحد ملاك السيرفر ويتابع إدارة المجتمع وجودة التجربة العامة وتنظيم بيئة العمل داخل السيرفر."
    },
    {
      initials: "BO",
      avatar: "",
      name: "BOSALEM",
      role: "OWNER",
      bio: "أحد ملاك السيرفر ومسؤول عن متابعة التوسعات والتطوير المستمر والحرص على تقديم تجربة احترافية للاعبين."
    },
    {
      initials: "LO",
      avatar: "",
      name: "LonEly",
      role: "OWNER",
      bio: "أحد ملاك السيرفر ويشارك في إدارة الرؤية العامة ومتابعة تفاصيل المجتمع والمحتوى والخدمات المقدمة."
    }
  ],
  teamSections: [
    {
      badge: "Owners",
      title: "الملاك",
      text: "القيادة العليا للمجتمع",
      tone: "gold",
      memberIndexes: [0, 1, 2, 3]
    },
    {
      badge: "Strategy Director",
      title: "مدير الاستراتيجية",
      text: "الرؤية والتوجيه العام",
      tone: "violet",
      memberIndexes: [1]
    },
    {
      badge: "Founders",
      title: "المؤسسون",
      text: "المساهمون في بناء الهوية",
      tone: "cyan",
      memberIndexes: [2, 3]
    },
    {
      badge: "Strategy Team",
      title: "فريق الاستراتيجية",
      text: "التطوير والجودة والمتابعة",
      tone: "gold",
      memberIndexes: [1, 2]
    },
    {
      badge: "Content Team",
      title: "فريق المحتوى",
      text: "الظهور والهوية البصرية",
      tone: "rose",
      memberIndexes: [3]
    }
  ],
  rules: [
    {
      slug: "general",
      navLabel: "القوانين العامة",
      title: "القوانين العامة",
      description: "هذه القوانين تطبق على جميع اللاعبين داخل Reality Town دون استثناء.",
      updatedAt: "18 يونيو 2026",
      pinned: true,
      items: [
        { text: "يجب احترام جميع اللاعبين والإداريين ومنع التلفظ أو الاستفزاز أو التقليل بأي شكل." },
        { text: "يمنع استخدام أي معلومات خارج الرول بلاي مثل البثوث أو الديسكورد أو الأصدقاء للحصول على أفضلية داخل المدينة.", badge: "مهم" },
        { text: "يجب تقمص الشخصية بشكل كامل والالتزام بالواقعية في التصرفات والحوارات واتخاذ القرارات." },
        { text: "يمنع القتل العشوائي أو الاعتداء دون سبب منطقي ومبرر واضح داخل السيناريو.", badge: "مخالفـة جسيمة" },
        { text: "يمنع استخدام أي ثغرات أو ملفات أو برامج خارجية تؤثر على اللعب أو تمنح ميزة غير عادلة.", badge: "مخالفـة جسيمة" },
        { text: "عند الإغماء أو الموت يجب الالتزام بحالة الشخصية وعدم التحدث أو العودة للمشهد بشكل غير نظامي." },
        { text: "يمنع الخروج من السيناريو أو تسجيل الخروج أثناء الحالات الجارية إلا بعد انتهائها بالكامل." }
      ]
    },
    {
      slug: "roleplay",
      navLabel: "قوانين الرول بلاي",
      title: "قوانين الرول بلاي",
      description: "تنظيم جودة المشاهد وتطبيق الحياة الواقعية داخل المدينة.",
      updatedAt: "18 يونيو 2026",
      pinned: false,
      items: [
        { text: "يجب عليك تقدير الحياة بشكل كامل عند التعرض للتهديد أو الاحتجاز أو وجود أسلحة موجهة نحوك." },
        { text: "يمنع الخروج عن الشخصية أو المزاح خارج إطار الحدث أثناء وجود سيناريو قائم." },
        { text: "يمنع التدخل في أي سيناريو ليس لك علاقة مباشرة فيه دون مبرر منطقي داخل الرول بلاي." },
        { text: "يجب تقدير قيمة المركبة والقيادة بشكل واقعي وتجنب القفزات أو الصدمات غير المنطقية." },
        { text: "يمنع استخدام المركبة كسلاح أو تنفيذ صدم متعمد لإسقاط اللاعبين أو تعطيلهم.", badge: "مخالفـة جسيمة" },
        { text: "لا يحق لك العودة لنفس السيناريو بعد التفنيش أو إنهاء الحالة إلا حسب ما تسمح به القوانين والإدارة." }
      ]
    },
    {
      slug: "police",
      navLabel: "قوانين الشرطة",
      title: "قوانين الشرطة",
      description: "ضوابط خاصة بالجهات الأمنية وطريقة تعاملها مع المواطنين والمجرمين.",
      updatedAt: "18 يونيو 2026",
      pinned: false,
      items: [
        { text: "يجب الالتزام بالتسلسل الإداري وعدم تجاوز الرتب أو تجاهل التعليمات الرسمية." },
        { text: "يمنع استخدام الصلاحيات بشكل شخصي أو انتقامي أو خارج مصلحة السيناريو." },
        { text: "يجب تبرير التفتيش أو التوقيف أو المطاردة بسبب واضح ومقبول داخل الحالة." },
        { text: "يمنع إطلاق النار إلا عند وجود خطر واضح أو تصعيد مبرر وفق تسلسل القوة." },
        { text: "يجب احترام حقوق المقبوض عليهم وعدم إجبارهم على اعترافات أو أفعال غير منطقية." },
        { text: "أي إساءة استخدام للسلاح أو النفوذ أو المركبات الرسمية تعرض صاحبها للمحاسبة الإدارية." }
      ]
    },
    {
      slug: "criminal",
      navLabel: "القوانين الإجرامية",
      title: "القوانين الإجرامية",
      description: "قواعد تنفيذ الأعمال الإجرامية بشكل متوازن وواقعي داخل السيرفر.",
      updatedAt: "18 يونيو 2026",
      pinned: false,
      items: [
        { text: "يمنع تنفيذ أي عمل إجرامي بدون سبب واضح أو تجهيز منطقي أو دور تمثيلي مناسب." },
        { text: "يجب أن يكون التهديد مباشرًا وواضحًا، ولا يحق القتل بعد استسلام الطرف الآخر دون سبب جديد." },
        { text: "يمنع خطف أو سرقة اللاعبين بشكل متكرر أو عشوائي أو بهدف الإزعاج فقط." },
        { text: "يمنع استهداف الجهات الحكومية أو المناطق المحمية دون وجود سيناريو يسمح بذلك." },
        { text: "يمنع استخدام شخصية جديدة لتنفيذ جريمة مرتبطة بأحداث سابقة تخص شخصية أخرى." },
        { text: "يجب إعطاء الطرف الآخر مساحة للتفاعل مع الحدث، ويمنع فرض السيناريو أو تسريع نتائجه بالقوة." }
      ]
    },
    {
      slug: "discord",
      navLabel: "قوانين الديسكورد",
      title: "قوانين الديسكورد",
      description: "تنظيم المجتمع خارج اللعبة والمحافظة على بيئة محترمة لجميع الأعضاء.",
      updatedAt: "18 يونيو 2026",
      pinned: false,
      items: [
        { text: "يمنع نشر المحتوى المسيء أو العنصري أو الطائفي أو أي إساءة شخصية مباشرة أو غير مباشرة.", badge: "مخالفـة جسيمة" },
        { text: "يمنع السبام أو الإزعاج أو منشن الإدارة والأعضاء بشكل متكرر بدون سبب." },
        { text: "يمنع نشر روابط خارجية أو إعلانات لسيرفرات أخرى أو محتوى غير مصرح به." },
        { text: "يجب استخدام القنوات المخصصة لكل نوع من الطلبات أو الاستفسارات أو التقديمات." },
        { text: "أي نقاشات إدارية أو شكاوى يجب أن تكون عبر التذاكر أو القنوات الرسمية فقط." }
      ]
    },
    {
      slug: "safezones",
      navLabel: "المناطق الآمنة",
      title: "قوانين المناطق الآمنة",
      description: "تعليمات خاصة بالمستشفيات والمقار الحكومية والمناطق المحمية داخل المدينة.",
      updatedAt: "18 يونيو 2026",
      pinned: false,
      items: [
        { text: "يمنع بدء أي إطلاق نار أو اعتداء داخل المناطق الآمنة إلا إذا كان هناك استثناء معلن من الإدارة." },
        { text: "يمنع الاحتماء بالمناطق الآمنة لكسر السيناريو أو إفساد الحدث على الطرف الآخر." },
        { text: "يمنع خطف أو سرقة أو تهديد اللاعبين داخل المستشفى أو المناطق الحكومية المحمية." },
        { text: "يجب احترام المسعفين والموظفين داخل المناطق الآمنة وعدم تعطيل عملهم أو الإساءة لهم." },
        { text: "أي استخدام متعمد للمناطق الآمنة بهدف الاستفزاز أو النجاة غير المشروعة يعرضك للمحاسبة." }
      ]
    }
  ],
  applications: [
    {
      slug: "staff",
      navLabel: "تقديم الإدارة",
      title: "تقديم الإدارة",
      text: "انضم إلى فريق الإدارة والإشراف وساهم في تطوير تجربة اللاعبين داخل Reality Town.",
      note: "يجب تسجيل الدخول قبل التقديم. هذه النسخة الحالية تعرض النموذج بصيغة واجهة فقط.",
      fields: ["الاسم داخل اللعبة", "العمر", "خبرة الرول بلاي", "لماذا تريد الانضمام؟"]
    },
    {
      slug: "police",
      navLabel: "تقديم الشرطة",
      title: "تقديم الشرطة",
      text: "التقديم للجهات الأمنية مخصص للاعبين الجادين القادرين على تطبيق الأنظمة والانضباط الوظيفي.",
      note: "تأكد من استيفاء الشروط الأساسية قبل رفع الطلب.",
      fields: ["الاسم داخل المدينة", "العمر", "الخبرة الأمنية", "سبب الانضمام"]
    },
    {
      slug: "ems",
      navLabel: "تقديم الإسعاف",
      title: "تقديم الإسعاف",
      text: "باب الانضمام مفتوح للمسعفين الراغبين في خدمة المدينة والتعامل الاحترافي مع الحالات الطبية.",
      note: "يفضل وجود خلفية جيدة في تقمص الأدوار الوظيفية والالتزام العالي.",
      fields: ["الاسم داخل اللعبة", "العمر", "الخبرة الطبية", "ساعات التواجد"]
    },
    {
      slug: "media",
      navLabel: "تقديم الإعلام",
      title: "تقديم الإعلام",
      text: "مخصص لصناع المحتوى والمصورين ومنظمي التغطيات والبثوث الخاصة بالسيرفر.",
      note: "يمكن إضافة روابط الحسابات أو أعمال سابقة عند التقديم الفعلي.",
      fields: ["اسم المنصة", "رابط الحساب", "نوع المحتوى", "عدد المتابعين"]
    },
    {
      slug: "support",
      navLabel: "تقديم الدعم",
      title: "تقديم الدعم الفني",
      text: "للمهتمين بمساندة اللاعبين ومتابعة المشاكل والاستفسارات اليومية بشكل احترافي.",
      note: "ينصح بذكر خبرتك السابقة في التعامل مع الجمهور وإدارة التذاكر.",
      fields: ["الاسم", "العمر", "خبرة الدعم", "كيف تتعامل مع الضغط؟"]
    }
  ],
  streams: [
    {
      slug: "main-twitch",
      title: "البث الرئيسي",
      platform: "Twitch",
      text: "أهم البثوث المباشرة والأحداث والفعاليات الخاصة بالمجتمع.",
      cta: "مشاهدة الآن",
      viewers: "Live",
      url: "#contact"
    },
    {
      slug: "youtube-creators",
      title: "تغطيات اليوتيوبرز",
      platform: "YouTube",
      text: "قسم مخصص لصناع المحتوى الذين يغطون أحداث المدينة والمشاهد اليومية.",
      cta: "عرض القنوات",
      viewers: "Videos",
      url: "#contact"
    },
    {
      slug: "kick-events",
      title: "تغطيات الفعاليات",
      platform: "Kick",
      text: "بثوث خاصة بالفعاليات الكبرى والتغطيات المباشرة للمشاهد المميزة داخل السيرفر.",
      cta: "استعرض البث",
      viewers: "Events",
      url: "#contact"
    }
  ],
  storeSections: [
    {
      slug: "packages",
      title: "باقات"
    },
    {
      slug: "services",
      title: "خدمات"
    }
  ],
  store: [
    {
      slug: "starter-pack",
      sectionSlug: "packages",
      badge: "Featured",
      title: "الباقة الأساسية",
      price: "299 ر.س",
      text: "صفحات تعريفية أساسية مع تصميم احترافي سريع.",
      items: ["الصفحة الرئيسية", "من نحن", "المميزات", "تواصل معنا"],
      buyUrl: "#contact"
    },
    {
      slug: "advanced-pack",
      sectionSlug: "services",
      badge: "",
      title: "الباقة المتقدمة",
      price: "699 ر.س",
      text: "تشمل صفحات إضافية ومتجر وعرض فريق الإدارة.",
      items: ["فريق الإدارة", "صفحة متجر", "قوانين", "تقديمات أساسية"],
      buyUrl: "#contact"
    },
    {
      slug: "pro-pack",
      sectionSlug: "packages",
      badge: "Featured",
      title: "الباقة الاحترافية",
      price: "1299 ر.س",
      text: "الحل الكامل المذكور في الطلب مع متجر وصفحة بثوث وتجربة عرض احترافية متكاملة.",
      items: [
        "واجهة احترافية متكاملة",
        "قوانين حتى 12 تصنيفًا",
        "تقديمات حتى 10 نماذج",
        "صفحة بثوث مباشرة",
        "إدارة واستضافة طوال الاشتراك"
      ],
      buyUrl: "#contact"
    }
  ],
  benefits: [
    "الصفحة الرئيسية",
    "صفحة من نحن",
    "صفحة فريق الإدارة",
    "صفحة المميزات",
    "صفحة تواصل معنا",
    "صفحة متجر لعرض المنتجات والخدمات",
    "تنظيم احترافي للأقسام والمحتوى",
    "تصميم متوافق مع الجوال والأجهزة اللوحية",
    "استضافة الموقع وإدارته طوال فترة الاشتراك"
  ],
  contact: {
    email: "support@realitytown-rp.com",
    discord: "discord.gg/realitytown",
    whatsapp: "+966 50 000 0000",
    location: "الرياض، المملكة العربية السعودية"
  },
  adminAuth: {
    username: "admin",
    password: "RealityTown@2026"
  }
};

function loadContent() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(defaultContent);
  try {
    return { ...structuredClone(defaultContent), ...JSON.parse(saved) };
  } catch {
    return structuredClone(defaultContent);
  }
}

let content = loadContent();
content.team = normalizeTeamMembers(content.team);
content.applications = normalizeApplications(content.applications);
content.streams = normalizeStreams(content.streams);
content.storeSections = normalizeStoreSections(content.storeSections, content.store);
content.store = normalizeStoreItems(content.store);
content.teamSections = normalizeTeamSections(content.teamSections, content.team);
let currentAdminTab = "site";
let currentRuleCategory = content.rules?.[0]?.slug || "general";
let currentApplicationCategory = content.applications?.[0]?.slug || "staff";
let currentStoreItem = content.store?.[0]?.slug || "starter-pack";
let currentStoreCategory = "all";
let currentStoreSort = "default";
let currentStoreQuantity = 1;
let currentStreamPlatform = "all";
let currentStreamSort = "default";

const app = document.getElementById("app");
const siteNav = document.getElementById("siteNav");
const menuToggle = document.getElementById("menuToggle");

const routes = {
  home: renderHome,
  about: renderAbout,
  team: renderTeam,
  features: renderFeatures,
  rules: renderRules,
  applications: renderApplications,
  streams: renderStreams,
  store: renderStore,
  contact: renderContact,
  admin: renderAdmin
};

menuToggle?.addEventListener("click", () => {
  siteNav?.classList.toggle("open");
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", renderRoute);

function renderRoute() {
  const hashPath = (location.hash.replace("#", "").split("?")[0] || "home").trim();
  const [route] = hashPath.split("/");
  const renderer = routes[route] || routes.home;
  app.innerHTML = renderer();
  hydrateCommon(route);
}

function hydrateCommon(route) {
  siteNav?.classList.remove("open");
  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route);
  });

  document.getElementById("brandName").textContent = content.site.name;
  document.getElementById("brandTagline").textContent = content.site.tagline;
  document.getElementById("footerBrandName").textContent = content.site.name;
  document.getElementById("footerCopyrightName").textContent = content.site.name;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.title = `${content.site.name} | موقع سيرفر احترافي`;

  bindContactForm();
  if (route === "applications") bindApplicationsPage();
  if (route === "streams") bindStreamsPage();
  if (route === "store") bindStorePage();
  if (route === "rules") bindRulesPage();
  if (route === "admin") bindAdmin();
}

function sectionHead(title, text, badge = "Reality Town") {
  return `
    <div class="section-head">
      <span class="eyebrow">${badge}</span>
      <h2>${title}</h2>
      <p class="section-intro">${text}</p>
    </div>
  `;
}

function renderHome() {
  return `
    <section class="hero page active" id="home-page">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">${content.site.season}</span>
          <h1>${content.site.heroTitle}</h1>
          <p class="hero-description">${content.site.heroText}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${content.site.joinUrl}">${content.site.primaryCta}</a>
            <a class="btn btn-secondary" href="#features">${content.site.secondaryCta}</a>
          </div>
          <div class="hero-trust-list">
            <div class="hero-trust-item">تصميم احترافي فاخر</div>
            <div class="hero-trust-item">متوافق مع جميع الأجهزة</div>
            <div class="hero-trust-item">صفحات كاملة جاهزة</div>
          </div>

          <div class="stats-grid">
            ${content.stats
              .map(
                (stat) => `
                  <div class="stat-card glass-card">
                    <strong>${stat.value}</strong>
                    <span class="card-label">${stat.label}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>

        <div class="hero-card">
          <div class="hero-card-top">
            <span class="tag">Reality Experience</span>
            <div class="hero-mini-badge">واجهة حديثة</div>
          </div>
          <div class="hero-media">
            <div class="hero-media-content">
              <span class="tag">Season 2 • Now Live</span>
              <h3>${content.site.name}</h3>
              <p class="lead">${content.site.tagline}</p>
            </div>
          </div>

          <div class="metrics-grid">
            <div class="metric-card">
              <strong>12+</strong>
              <span class="card-label">تصنيف قوانين</span>
            </div>
            <div class="metric-card">
              <strong>10</strong>
              <span class="card-label">نماذج تقديم</span>
            </div>
            <div class="metric-card">
              <strong>24/7</strong>
              <span class="card-label">إدارة واستضافة</span>
            </div>
            <div class="metric-card">
              <strong>100%</strong>
              <span class="card-label">متجاوب مع الجوال</span>
            </div>
          </div>
        </div>
      </div>

      <div class="marquee">
        <div class="marquee-track">
          <span>${content.site.name}</span>
          <span>${content.site.name}</span>
          <span>${content.site.name}</span>
          <span>${content.site.name}</span>
          <span>${content.site.name}</span>
          <span>${content.site.name}</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead(content.site.aboutTitle, content.site.aboutText, "من نحن")}
        <div class="two-col">
          <div class="stack">
            ${content.features
              .slice(0, 4)
              .map(
                (feature) => `
                  <article class="grid-card">
                    <span class="icon-chip">ميزة احترافية</span>
                    <h3>${feature.title}</h3>
                    <p>${feature.text}</p>
                  </article>
                `
              )
              .join("")}
          </div>
          <div class="info-card">
            <h3>ما الذي يشمله الحل الكامل؟</h3>
            <ul class="highlight-list">
              ${content.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
            </ul>
            <div class="stack-actions">
              <a class="btn btn-primary" href="#store">عرض الباقات</a>
              <a class="btn btn-secondary" href="#contact">اطلب نسختك</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead("المميزات الرئيسية", "كل نظام تم تجهيزه ليعطي سيرفرك حضورًا احترافيًا ويقدم تجربة واضحة ومميزة للزوار.", "Features")}
        <div class="feature-grid">
          ${content.features
            .map(
              (feature) => `
                <article class="grid-card">
                  <span class="icon-chip">ميزة</span>
                  <h3>${feature.title}</h3>
                  <p>${feature.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead("فريق الإدارة", "اعرض المسؤولين عن المجتمع والأدوار الإدارية بطريقة واضحة وموثوقة.", "Team")}
        <div class="team-grid">
          ${content.team
            .map(
              (member) => `
                <article class="team-card">
                  <div class="avatar">${member.initials}</div>
                  <h3>${member.name}</h3>
                  <div class="role">${member.role}</div>
                  <p>${member.bio}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container page-banner glass-card">
        ${sectionHead("جاهز للإطلاق", "النسخة الحالية تعمل مباشرة كموقع احترافي متكامل، ويمكن لاحقًا تطويرها وربطها بخدمات إضافية عند الحاجة.", "Launch")}
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">ابدأ مشروعك</a>
          <a class="btn btn-secondary" href="#contact">طلب التخصيص</a>
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return pageTemplate(
    "من نحن",
    "نقدم قالب موقع احترافي مشابه لأسلوب مواقع سيرفرات الرول بلاي الحديثة، مع قابلية تعديل النصوص والمحتوى بسهولة.",
    `
      <div class="two-col">
        <div class="info-card">
          <h3>${content.site.aboutTitle}</h3>
          <p>${content.site.aboutText}</p>
          <ul class="bullet-list">
            ${content.site.aboutBullets.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="stack">
          <article class="grid-card">
            <span class="icon-chip">رؤية</span>
            <h3>حضور بصري قوي</h3>
            <p>تجربة تصميم داكنة فاخرة، بطاقات واضحة، انتقالات ناعمة وأسلوب قريب من المواقع المرجعية الحديثة.</p>
          </article>
          <article class="grid-card">
            <span class="icon-chip">تنظيم</span>
            <h3>هيكل صفحات متكامل</h3>
            <p>تنقل واضح بين الرئيسية، التعريف، القوانين، التقديمات، المتجر، والبثوث مع تجربة متماسكة.</p>
          </article>
          <article class="grid-card">
            <span class="icon-chip">توسّع</span>
            <h3>جاهز للربط الخلفي</h3>
            <p>يمكن لاحقًا تطوير الموقع وربطه بخدمات إضافية دون الحاجة لإعادة بناء التصميم من جديد.</p>
          </article>
        </div>
      </div>
    `
  );
}

function renderTeam() {
  const members = content.team || [];
  const groups = (content.teamSections || [])
    .map((section) => ({
      ...section,
      members: (section.memberIndexes || [])
        .map((index) => members[index])
        .filter(Boolean)
    }))
    .filter((group) => group.members.length);

  return pageTemplate(
    "فريق الإدارة",
    "الفريق الذي يقف خلف Reality Town ويقود الرؤية والتطوير اليومي وصناعة التجربة داخل المجتمع.",
    `
      <section class="team-showcase">
        <div class="team-intro-card">
          <span class="eyebrow">The People Behind ${content.site.name}</span>
          <h2>فريقنا</h2>
          <p>خلف كل تفصيل في ${content.site.name} فريق يعيش هذا العالم يوميًا. من يقود الرؤية، يطور التجربة، ويحافظ على حضور المجتمع بشكل احترافي ومستمر.</p>
        </div>

        <div class="team-vertical-layout">
          ${groups
            .map(
              (group) => `
                <section class="team-vertical-group tone-${group.tone}">
                  <div class="team-vertical-head">
                    <span class="team-group-pill">${group.badge}</span>
                    <h3>${group.title}</h3>
                    <p>${group.text}</p>
                  </div>
                  <div class="team-portrait-row ${group.members.length === 1 ? "single" : ""}">
                    ${group.members
                      .map(
                        (member) => `
                          <article class="team-portrait-card">
                            <div class="team-portrait-ring">
                              <div class="team-portrait-avatar">
                                ${
                                  member.avatar
                                    ? `<img src="${escapeAttr(member.avatar)}" alt="${escapeAttr(member.name)}" class="team-portrait-avatar-image" />`
                                    : member.initials
                                }
                              </div>
                            </div>
                            <h4>${member.name}</h4>
                            <span>${member.role}</span>
                          </article>
                        `
                      )
                      .join("")}
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
      </section>
    `
  );
}

function renderFeatures() {
  return pageTemplate(
    "المميزات",
    "كل العناصر التي طلبتها موجودة هنا ضمن هيكل احترافي قابل للتخصيص والتوسعة.",
    `
      <div class="feature-grid">
        ${content.features
          .map(
            (feature) => `
              <article class="grid-card">
                <span class="icon-chip">ميزة احترافية</span>
                <h3>${feature.title}</h3>
                <p>${feature.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `
  );
}

function renderRules() {
  const categories = content.rules || [];
  const activeCategory =
    categories.find((rule) => rule.slug === currentRuleCategory) || categories[0];
  const totalRules = categories.reduce((total, category) => total + category.items.length, 0);

  return pageTemplate(
    "القوانين",
    "اقرأ القوانين بعناية. هذه التعليمات تطبق على جميع اللاعبين داخل Reality Town وتهدف للحفاظ على جودة الرول بلاي.",
    `
      <div class="rules-layout">
        <aside class="rules-sidebar">
          <div class="rules-sidebar-card">
            <span class="icon-chip">Code of Conduct</span>
            <h3>Server Rules</h3>
            <p>اقرأ القوانين بعناية، فهي تطبق على جميع اللاعبين بدون استثناء.</p>
          </div>

          <div class="rules-category-list">
            ${categories
              .map(
                (rule) => `
                  <button class="rules-category-button ${rule.slug === activeCategory.slug ? "active" : ""}" data-rule-category="${rule.slug}">
                    <span>${rule.navLabel}</span>
                    <strong>${rule.items.length}</strong>
                  </button>
                `
              )
              .join("")}
          </div>
        </aside>

        <section class="rules-main">
          <article class="rules-hero-card">
            <div class="rules-hero-top">
              <div>
                <span class="icon-chip">${activeCategory.slug}${activeCategory.pinned ? " • مثبت" : ""}</span>
                <h2>${activeCategory.title}</h2>
                <p>${activeCategory.description}</p>
              </div>
              <div class="rules-summary-card">
                <strong>${totalRules}</strong>
                <span>إجمالي القوانين</span>
              </div>
            </div>

            <div class="rules-meta">
              <span>آخر تحديث: ${activeCategory.updatedAt}</span>
              <span>${activeCategory.items.length} قوانين في هذا التصنيف</span>
            </div>
          </article>

          <div class="rules-stack">
            ${activeCategory.items
              .map(
                (item, index) => `
                  <article class="rule-entry">
                    <div class="rule-number">${index + 1}</div>
                    <div class="rule-content">
                      <div class="rule-content-top">
                        <h3>قانون ${index + 1}</h3>
                        ${item.badge ? `<span class="rule-badge">${item.badge}</span>` : ""}
                      </div>
                      <p>${item.text}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>

          <article class="rules-footer-note">
            <p>في حال وجود استفسار بخصوص القوانين، يرجى التواصل مع الإدارة عبر الديسكورد أو التذاكر الرسمية.</p>
          </article>
        </section>
      </div>
    `
  );
}

function bindRulesPage() {
  document.querySelectorAll("[data-rule-category]").forEach((button) => {
    button.addEventListener("click", () => {
      currentRuleCategory = button.dataset.ruleCategory;
      renderRoute();
    });
  });
}

function renderApplications() {
  const applications = content.applications || [];
  const activeApplication =
    applications.find((application) => application.slug === currentApplicationCategory) ||
    applications[0];

  return pageTemplate(
    "التقديمات",
    "انضم إلى أحد أقسام Reality Town عبر صفحة تقديمات منظمة بنفس الأسلوب الحديث للمواقع الاحترافية.",
    `
      <div class="applications-layout">
        <aside class="applications-sidebar">
          <div class="rules-sidebar-card">
            <span class="icon-chip">Join the Team</span>
            <h3>Apply to ${content.site.name}</h3>
            <p>اختر الجهة أو القسم الذي ترغب في الانضمام إليه ثم ابدأ تعبئة النموذج المناسب.</p>
          </div>

          <div class="applications-nav-list">
            ${applications
              .map(
                (application) => `
                  <button class="application-nav-button ${application.slug === activeApplication.slug ? "active" : ""}" data-application-category="${application.slug}">
                    <span>${application.navLabel}</span>
                  </button>
                `
              )
              .join("")}
          </div>
        </aside>

        <section class="applications-main">
          <article class="application-form-card">
            <span class="icon-chip">Application Form</span>
            <h2>${activeApplication.title}</h2>
            <p>${activeApplication.text}</p>

            <div class="application-signin-note">
              <strong>تنبيه</strong>
              <span>${activeApplication.note}</span>
            </div>

            <form id="applicationPreviewForm" class="control-stack">
              <div class="application-fields-grid">
                ${activeApplication.fields
                  .map(
                    (field) => `
                      <input class="field" name="${escapeAttr(field)}" placeholder="${escapeAttr(field)}" />
                    `
                  )
                  .join("")}
              </div>
              <textarea name="extraDetails" placeholder="تفاصيل إضافية"></textarea>
              <div class="inline-actions">
                <button class="btn btn-primary" type="submit">إرسال الطلب</button>
              </div>
              <div class="hint" id="applicationFormMessage">النموذج الحالي للعرض فقط ويمكن ربطه لاحقًا بقاعدة بيانات أو نظام تسجيل فعلي.</div>
            </form>
          </article>

          <article class="application-side-card">
            <span class="icon-chip">المتطلبات الأساسية</span>
            <h3>${activeApplication.navLabel}</h3>
            <ul class="mini-list">
              ${activeApplication.fields.map((field) => `<li>${field}</li>`).join("")}
            </ul>
          </article>
        </section>
      </div>
    `
  );
}

function bindApplicationsPage() {
  document.querySelectorAll("[data-application-category]").forEach((button) => {
    button.addEventListener("click", () => {
      currentApplicationCategory = button.dataset.applicationCategory;
      renderRoute();
    });
  });

  document.getElementById("applicationPreviewForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementById("applicationFormMessage");
    if (message) {
      message.textContent = "تم تجهيز النموذج بصريًا. إذا رغبت أقدر أربطه لاحقًا بإرسال فعلي وتخزين الطلبات.";
    }
  });
}

function renderStreams() {
  const streams = content.streams || [];
  const platforms = ["all", ...new Set(streams.map((stream) => stream.platform).filter(Boolean))];
  const filteredStreams =
    currentStreamPlatform === "all"
      ? [...streams]
      : streams.filter((stream) => stream.platform === currentStreamPlatform);
  const sortedStreams = [...filteredStreams].sort((a, b) => {
    if (currentStreamSort === "name-asc") return a.title.localeCompare(b.title, "ar");
    if (currentStreamSort === "name-desc") return b.title.localeCompare(a.title, "ar");
    return 0;
  });

  return pageTemplate(
    "البثوث المباشرة",
    "استعرض البثوث المباشرة وصناع المحتوى عبر واجهة عرض بأسلوب المعرض الحديث.",
    `
      <section class="gallery-store-shell">
        <div class="gallery-store-head">
          <div class="gallery-store-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none">
              <rect x="12" y="16" width="40" height="32" rx="8" stroke="currentColor" stroke-width="3"></rect>
              <path d="M28 24L42 32L28 40V24Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2>البثوث</h2>
          <p>تابع البثوث المباشرة والتغطيات الخاصة بصناع المحتوى داخل ${content.site.name}</p>
        </div>

        <div class="gallery-store-controls">
          <div class="gallery-store-sort">
            <select id="streamSortSelect" class="field">
              <option value="default" ${currentStreamSort === "default" ? "selected" : ""}>الافتراضي</option>
              <option value="name-asc" ${currentStreamSort === "name-asc" ? "selected" : ""}>الاسم أ - ي</option>
              <option value="name-desc" ${currentStreamSort === "name-desc" ? "selected" : ""}>الاسم ي - أ</option>
            </select>
          </div>

          <div class="gallery-store-filters">
            ${platforms
              .map(
                (platform) => `
                  <button class="gallery-filter-chip ${currentStreamPlatform === platform ? "active" : ""}" type="button" data-stream-platform="${platform}">
                    ${platform === "all" ? "الكل" : platform}
                  </button>
                `
              )
              .join("")}
          </div>
        </div>

        <div class="gallery-store-panel">
          ${
            sortedStreams.length
              ? `
                <div class="gallery-store-grid">
                  ${sortedStreams
                    .map(
                      (stream) => `
                        <article class="gallery-product-card">
                          <div class="gallery-product-media">
                            <span>${stream.platform}</span>
                            <em>${stream.viewers}</em>
                          </div>
                          <div class="gallery-product-body">
                            <h3>${stream.title}</h3>
                            <p>${stream.text}</p>
                            <div class="gallery-product-footer">
                              <strong>${stream.platform}</strong>
                              <a class="btn btn-primary" href="${stream.url}">${stream.cta}</a>
                            </div>
                          </div>
                        </article>
                      `
                    )
                    .join("")}
                </div>
              `
              : `
                <div class="gallery-empty-state">
                  <div class="gallery-empty-icon">◻</div>
                  <p>لا توجد بثوث متاحة في هذا التصنيف حاليًا</p>
                </div>
              `
          }
        </div>
      </section>
    `
  );
}

function bindStreamsPage() {
  document.querySelectorAll("[data-stream-platform]").forEach((button) => {
    button.addEventListener("click", () => {
      currentStreamPlatform = button.dataset.streamPlatform;
      renderRoute();
    });
  });

  document.getElementById("streamSortSelect")?.addEventListener("change", (event) => {
    currentStreamSort = event.currentTarget.value;
    renderRoute();
  });
}

function renderStore() {
  const storeItems = content.store || [];
  const storeSections = content.storeSections || [];
  const storeHash = (location.hash.replace("#", "").split("?")[0] || "store").trim();
  const [, detailSlug] = storeHash.split("/");
  const categories = ["all", ...storeSections.map((section) => section.slug)];
  const filteredItems =
    currentStoreCategory === "all"
      ? [...storeItems]
      : storeItems.filter((item) => item.sectionSlug === currentStoreCategory);
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (currentStoreSort === "price-asc") return getNumericPrice(a.price) - getNumericPrice(b.price);
    if (currentStoreSort === "price-desc") return getNumericPrice(b.price) - getNumericPrice(a.price);
    return 0;
  });
  const selectedItem = detailSlug ? storeItems.find((item) => item.slug === detailSlug) : null;

  if (selectedItem) {
    return pageTemplate(
      "المتجر",
      "شاشة تفصيل المنتج تعرض الاسم والسعر والصورة والوصف بنفس فكرة صفحات المنتجات المنفصلة.",
      `
        <section class="store-detail-shell">
          <div class="store-detail-breadcrumb">
            <a href="#home">الرئيسية</a>
            <span>/</span>
            <a href="#store">المتجر</a>
            <span>/</span>
            <strong>${selectedItem.title}</strong>
          </div>

          <div class="store-detail-hero">
            <div class="store-detail-summary">
              <h2>${selectedItem.title}</h2>
              <div class="store-detail-price">السعر: ${selectedItem.price}</div>
              <div class="store-detail-actions">
                <a class="store-detail-buy" href="${selectedItem.buyUrl}">إضافة إلى السلة</a>
              </div>
              <div class="store-detail-meta">التصنيف: ${getStoreSectionTitle(selectedItem.sectionSlug)}</div>
            </div>

            <div class="store-detail-media">
              <div class="store-detail-image" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.08)), url('${escapeAttr(selectedItem.image)}')"></div>
            </div>
          </div>

          <article class="store-detail-description">
            <h3>وصف المنتج</h3>
            <p>${selectedItem.text}</p>
            <ul class="catalog-product-list">
              ${selectedItem.items.map((entry) => `<li>${entry}</li>`).join("")}
            </ul>
          </article>
        </section>
      `
    );
  }

  return pageTemplate(
    "المتجر",
    "ادعم السيرفر واحصل على منتجات وخدمات حصرية عبر واجهة متجر احترافية مستوحاة من أسلوب الكتالوجات الحديثة.",
    `
      <section class="catalog-store-shell">
        <div class="catalog-store-head">
          <small>${content.site.name}</small>
          <h2>متجر ${content.site.name}</h2>
          <p>باقة كاملة للسيرفرات الاحترافية</p>
        </div>

        <div class="catalog-store-toolbar">
          <div class="catalog-store-filters">
            ${categories
              .map(
                (category) => `
                  <button class="catalog-filter-pill ${currentStoreCategory === category ? "active" : ""}" type="button" data-store-category="${category}">
                    ${category === "all" ? "الكل" : getStoreSectionTitle(category)}
                  </button>
                `
              )
              .join("")}
          </div>

          <div class="catalog-store-sort-wrap">
            <select id="storeSortSelect" class="catalog-store-sort">
              <option value="default" ${currentStoreSort === "default" ? "selected" : ""}>الافتراضي</option>
              <option value="price-asc" ${currentStoreSort === "price-asc" ? "selected" : ""}>السعر من الأقل</option>
              <option value="price-desc" ${currentStoreSort === "price-desc" ? "selected" : ""}>السعر من الأعلى</option>
            </select>
          </div>
        </div>

        ${
          sortedItems.length
            ? `
              <div class="catalog-store-grid">
                ${sortedItems
                  .map(
                    (item) => `
                      <article class="catalog-product-card">
                        <a class="catalog-product-image" href="#store/${item.slug}" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.28)), url('${escapeAttr(item.image)}')">
                          <span class="catalog-product-badge">${item.badge || getStoreSectionTitle(item.sectionSlug)}</span>
                        </a>
                        <div class="catalog-product-content">
                          <div class="catalog-product-subtitle">${getStoreSectionTitle(item.sectionSlug)}</div>
                          <h3>${item.title}</h3>
                          <p>${item.text}</p>
                          <div class="catalog-product-price">${item.price}</div>
                          <ul class="catalog-product-list">
                            ${item.items.slice(0, 6).map((entry) => `<li>${entry}</li>`).join("")}
                          </ul>
                          <a class="catalog-product-button" href="#store/${item.slug}">اختر منتج وسيظهر</a>
                        </div>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            `
            : `
              <div class="gallery-empty-state">
                <div class="gallery-empty-icon">◻</div>
                <p>لا توجد منتجات متاحة حاليًا</p>
              </div>
            `
        }
      </section>
    `
  );
}

function bindStorePage() {
  document.querySelectorAll("[data-store-category]").forEach((button) => {
    button.addEventListener("click", () => {
      currentStoreCategory = button.dataset.storeCategory;
      renderRoute();
    });
  });

  document.getElementById("storeSortSelect")?.addEventListener("change", (event) => {
    currentStoreSort = event.currentTarget.value;
    renderRoute();
  });
}

function renderContact() {
  return pageTemplate(
    "تواصل معنا",
    "يمكنك تخصيص هذه الصفحة لاستقبال الطلبات أو ربطها لاحقًا بنظام إرسال حقيقي على البريد أو Discord أو قاعدة بيانات.",
    `
      <div class="contact-grid">
        <article class="contact-card">
          <span class="icon-chip">معلومات التواصل</span>
          <h3>بيانات أساسية</h3>
          <ul class="mini-list">
            <li>البريد: ${content.contact.email}</li>
            <li>ديسكورد: ${content.contact.discord}</li>
            <li>واتساب: ${content.contact.whatsapp}</li>
            <li>الموقع: ${content.contact.location}</li>
          </ul>
          <div class="contact-actions">
            <a class="btn btn-primary" href="mailto:${content.contact.email}">إرسال بريد</a>
            <a class="btn btn-secondary" href="#applications">قدّم طلبك</a>
          </div>
        </article>

        <article class="contact-card">
          <span class="icon-chip">نموذج سريع</span>
          <h3>ارسل طلبك</h3>
          <form class="contact-form" id="contactForm">
            <input class="field" name="name" placeholder="الاسم" required />
            <input class="field" name="email" placeholder="البريد الإلكتروني" required />
            <input class="field" name="subject" placeholder="نوع الخدمة" required />
            <textarea name="message" placeholder="اكتب تفاصيل الطلب"></textarea>
            <div class="form-actions">
              <button class="btn btn-primary" type="submit">إرسال</button>
            </div>
            <div class="hint">النموذج الحالي تجريبي ويعرض رسالة نجاح محلية فقط.</div>
          </form>
        </article>

        <article class="contact-card">
          <span class="icon-chip">ماذا يشمل الطلب؟</span>
          <h3>مناسب للسيرفرات الاحترافية</h3>
          <ul class="mini-list">
            ${content.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
          </ul>
        </article>
      </div>
    `
  );
}

function renderAdmin() {
  if (!isAdminAuthenticated()) {
    return `
      <section class="section">
        <div class="container">
          <div class="page-head">
            <span class="eyebrow">Admin Access</span>
            <h1>تسجيل دخول لوحة التحكم</h1>
            <p>أدخل اسم المستخدم وكلمة المرور للوصول إلى أدوات إدارة الموقع.</p>
          </div>

          <div class="admin-auth-shell">
            <article class="admin-login-card">
              <span class="icon-chip">لوحة التحكم محمية</span>
              <h3>تسجيل الدخول</h3>
              <p>الدخول مخصص للحسابات المخولة فقط.</p>
              <form id="adminLoginForm" class="control-stack">
                <input class="field" name="username" placeholder="اسم المستخدم" required />
                <input class="field" name="password" type="password" placeholder="كلمة المرور" required />
                <div class="inline-actions">
                  <button class="btn btn-primary" type="submit">دخول</button>
                </div>
                <div class="hint" id="adminLoginMessage">أدخل بيانات الدخول للمتابعة.</div>
              </form>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  const tabs = [
    { key: "site", label: "الإعدادات العامة" },
    { key: "stats", label: "الإحصائيات" },
    { key: "features", label: "المميزات" },
    { key: "rules", label: "القوانين" },
    { key: "applications", label: "التقديمات" },
    { key: "store", label: "المتجر" },
    { key: "team", label: "الفريق" },
    { key: "contact", label: "التواصل" }
  ];

  return `
    <section class="section">
      <div class="container">
        <div class="page-head">
          <span class="eyebrow">Admin Panel</span>
          <h1>لوحة التحكم</h1>
          <p>لوحة إدارة محتوى تجريبية تحفظ التعديلات محليًا في المتصفح. مناسبة كنقطة بداية قبل ربطها بقاعدة بيانات وسيرفر حقيقي.</p>
        </div>

        <div class="admin-layout">
          <aside>
            <h3>الأقسام</h3>
            <p class="admin-note">اختر القسم المطلوب تعديله. سيتم تحديث الواجهة مباشرة بعد الحفظ.</p>
            <div class="admin-tabs">
              ${tabs
                .map(
                  (tab) => `
                    <button class="admin-tab ${currentAdminTab === tab.key ? "active" : ""}" data-tab="${tab.key}">
                      ${tab.label}
                    </button>
                  `
                )
                .join("")}
            </div>
            <div class="stack-actions">
              <button class="btn btn-secondary" id="resetContent">إعادة الافتراضي</button>
            </div>
          </aside>

          <section class="admin-panel">
            <header>
              <div>
                <h3>${tabs.find((tab) => tab.key === currentAdminTab)?.label || "الإعدادات العامة"}</h3>
                <div class="hint">التغييرات محلية داخل المتصفح الحالي.</div>
              </div>
              <div class="inline-actions">
                <span class="status-pill">جاهز للحفظ</span>
                <button class="btn btn-secondary" type="button" id="adminLogout">تسجيل خروج</button>
              </div>
            </header>
            ${renderAdminTab()}
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderAdminTab() {
  if (currentAdminTab === "site") {
    return `
      <form id="adminSiteForm" class="control-stack">
        <input class="field" name="name" value="${escapeAttr(content.site.name)}" placeholder="اسم الموقع" />
        <input class="field" name="tagline" value="${escapeAttr(content.site.tagline)}" placeholder="الوصف المختصر" />
        <input class="field" name="season" value="${escapeAttr(content.site.season)}" placeholder="العنوان العلوي" />
        <input class="field" name="heroTitle" value="${escapeAttr(content.site.heroTitle)}" placeholder="عنوان الهيرو" />
        <textarea name="heroText" placeholder="وصف الهيرو">${content.site.heroText}</textarea>
        <div class="control-grid">
          <input class="field" name="primaryCta" value="${escapeAttr(content.site.primaryCta)}" placeholder="زر رئيسي" />
          <input class="field" name="secondaryCta" value="${escapeAttr(content.site.secondaryCta)}" placeholder="زر ثانوي" />
        </div>
        <div class="inline-actions">
          <button class="btn btn-primary" type="submit">حفظ التعديلات</button>
        </div>
      </form>
    `;
  }

  if (currentAdminTab === "stats") {
    return `
      <form id="adminStatsForm" class="control-stack">
        ${content.stats
          .map(
            (stat, index) => `
              <div class="control-grid">
                <input class="field" name="value-${index}" value="${escapeAttr(stat.value)}" placeholder="القيمة" />
                <input class="field" name="label-${index}" value="${escapeAttr(stat.label)}" placeholder="التسمية" />
              </div>
            `
          )
          .join("")}
        <div class="inline-actions">
          <button class="btn btn-primary" type="submit">حفظ الإحصائيات</button>
        </div>
      </form>
    `;
  }

  if (currentAdminTab === "features") {
    return `
      <form id="adminFeaturesForm" class="control-stack">
        ${content.features
          .slice(0, 4)
          .map(
            (feature, index) => `
              <div class="grid-card">
                <input class="field" name="title-${index}" value="${escapeAttr(feature.title)}" placeholder="عنوان الميزة" />
                <textarea name="text-${index}" placeholder="وصف الميزة">${feature.text}</textarea>
              </div>
            `
          )
          .join("")}
        <div class="inline-actions">
          <button class="btn btn-primary" type="submit">حفظ المميزات</button>
        </div>
      </form>
    `;
  }

  if (currentAdminTab === "rules") {
    return `
      <form id="adminRulesForm" class="control-stack">
        ${content.rules
          .map(
            (rule, index) => `
              <div class="grid-card admin-rule-card">
                <div class="inline-actions admin-rule-actions">
                  <button class="btn btn-secondary" type="button" data-delete-rule-panel="${index}">
                    حذف بنل
                  </button>
                </div>
                <div class="control-grid">
                  <input class="field" name="navLabel-${index}" value="${escapeAttr(rule.navLabel)}" placeholder="اسم التصنيف في القائمة" />
                  <input class="field" name="title-${index}" value="${escapeAttr(rule.title)}" placeholder="عنوان التصنيف" />
                </div>
                <input class="field" name="updatedAt-${index}" value="${escapeAttr(rule.updatedAt)}" placeholder="آخر تحديث" />
                <textarea name="description-${index}" placeholder="وصف التصنيف">${rule.description}</textarea>
                <textarea name="items-${index}" class="admin-rule-items" placeholder="اكتب كل قانون في سطر مستقل&#10;ولإضافة شارة استخدم: نص القانون || مهم">${rulesToTextarea(rule.items)}</textarea>
                <div class="hint">كل قانون يكون في سطر مستقل. وإذا تبي شارة بجانب قانون معيّن استخدم || ثم اسم الشارة.</div>
              </div>
            `
          )
          .join("")}
        <div class="inline-actions">
          <button class="btn btn-secondary" type="button" id="addRulePanel">إضافة بنل جديد</button>
          <button class="btn btn-primary" type="submit">حفظ القوانين</button>
        </div>
      </form>
    `;
  }

  if (currentAdminTab === "applications") {
    return `
      <form id="adminApplicationsForm" class="control-stack">
        ${content.applications
          .map(
            (application, index) => `
              <div class="grid-card admin-rule-card">
                <div class="control-grid">
                  <input class="field" name="navLabel-${index}" value="${escapeAttr(application.navLabel)}" placeholder="اسم التقديم في القائمة" />
                  <input class="field" name="title-${index}" value="${escapeAttr(application.title)}" placeholder="عنوان التقديم" />
                </div>
                <textarea name="text-${index}" placeholder="وصف التقديم">${application.text}</textarea>
                <textarea name="note-${index}" placeholder="ملاحظة أعلى النموذج">${application.note}</textarea>
                <textarea name="fields-${index}" class="admin-rule-items" placeholder="اكتب كل حقل في سطر مستقل">${applicationsFieldsToTextarea(application.fields)}</textarea>
                <div class="hint">كل حقل في سطر مستقل مثل: الاسم داخل اللعبة أو العمر أو سبب الانضمام.</div>
              </div>
            `
          )
          .join("")}
        <div class="inline-actions">
          <button class="btn btn-secondary" type="button" id="addApplicationPanel">إضافة تقديم جديد</button>
          <button class="btn btn-primary" type="submit">حفظ التقديمات</button>
        </div>
      </form>
    `;
  }

  if (currentAdminTab === "store") {
    return `
      <form id="adminStoreForm" class="control-stack">
        <div class="grid-card">
          <h4>إعدادات أقسام المتجر</h4>
          <div class="hint">أضف الأقسام هنا، ثم اختر القسم المناسب لكل منتج من البطاقات بالأسفل.</div>
        </div>
        ${content.storeSections
          .map(
            (section, index) => `
              <div class="grid-card admin-rule-card">
                <div class="inline-actions admin-rule-actions">
                  <button class="btn btn-secondary" type="button" data-delete-store-section="${index}">
                    حذف القسم
                  </button>
                </div>
                <div class="control-grid">
                  <input class="field" value="${escapeAttr(section.slug)}" disabled />
                  <input class="field" name="section-title-${index}" value="${escapeAttr(section.title)}" placeholder="اسم القسم" />
                </div>
              </div>
            `
          )
          .join("")}

        <div class="grid-card">
          <h4>إعدادات المنتجات</h4>
          <div class="hint">أضف المنتج ثم اختر له قسمًا من قائمة الأقسام.</div>
        </div>
        ${content.store
          .map(
            (item, index) => `
              <div class="grid-card admin-rule-card">
                <div class="inline-actions admin-rule-actions">
                  <button class="btn btn-secondary" type="button" data-delete-store-item="${index}">
                    حذف المنتج
                  </button>
                </div>
                <div class="control-grid">
                  <input class="field" name="title-${index}" value="${escapeAttr(item.title)}" placeholder="اسم المنتج" />
                  <select class="field" name="sectionSlug-${index}">
                    ${content.storeSections
                      .map(
                        (section) => `
                          <option value="${escapeAttr(section.slug)}" ${item.sectionSlug === section.slug ? "selected" : ""}>${section.title}</option>
                        `
                      )
                      .join("")}
                  </select>
                </div>
                <div class="control-grid">
                  <input class="field" name="price-${index}" value="${escapeAttr(item.price)}" placeholder="السعر" />
                  <input class="field" name="badge-${index}" value="${escapeAttr(item.badge)}" placeholder="شارة مثل: Featured" />
                </div>
                <div class="control-grid">
                  <input class="field" name="buyUrl-${index}" value="${escapeAttr(item.buyUrl)}" placeholder="رابط الزر" />
                  <input class="field" name="image-${index}" value="${escapeAttr(item.image)}" placeholder="مسار الصورة مثل: ./assets/store-card-reference.png" />
                </div>
                <textarea name="text-${index}" placeholder="وصف المنتج">${item.text}</textarea>
                <textarea name="items-${index}" class="admin-rule-items" placeholder="كل ميزة في سطر مستقل">${storeItemsToTextarea(item.items)}</textarea>
                <div class="hint">اسم القسم هنا يحدد تصنيفات المتجر تلقائيًا. ويمكنك وضع صورة من مجلد assets مثل ./assets/image.png.</div>
              </div>
            `
          )
          .join("")}
        <div class="inline-actions">
          <button class="btn btn-secondary" type="button" id="addStoreSection">إضافة قسم</button>
          <button class="btn btn-secondary" type="button" id="addStoreItem">إضافة منتج</button>
          <button class="btn btn-primary" type="submit">حفظ المتجر</button>
        </div>
      </form>
    `;
  }

  if (currentAdminTab === "team") {
    return `
      <form id="adminTeamForm" class="control-stack">
        <div class="grid-card">
          <h4>إعدادات أقسام الفريق</h4>
          <div class="hint">ألوان الأقسام المتاحة: gold أو violet أو cyan أو rose.</div>
        </div>
        ${content.teamSections
          .map(
            (section, index) => `
              <div class="grid-card admin-team-section-card">
                <div class="inline-actions admin-rule-actions">
                  <button class="btn btn-secondary" type="button" data-move-team-section-up="${index}">
                    ↑ رفع
                  </button>
                  <button class="btn btn-secondary" type="button" data-move-team-section-down="${index}">
                    ↓ تنزيل
                  </button>
                  <button class="btn btn-secondary" type="button" data-delete-team-section="${index}">
                    حذف القسم
                  </button>
                </div>
                <div class="control-grid">
                  <input class="field" name="section-badge-${index}" value="${escapeAttr(section.badge)}" placeholder="اسم الشارة" />
                  <input class="field" name="section-title-${index}" value="${escapeAttr(section.title)}" placeholder="عنوان القسم" />
                </div>
                <div class="control-grid">
                  <select class="field" name="section-tone-${index}">
                    <option value="gold" ${section.tone === "gold" ? "selected" : ""}>ذهبي - gold</option>
                    <option value="violet" ${section.tone === "violet" ? "selected" : ""}>بنفسجي - violet</option>
                    <option value="cyan" ${section.tone === "cyan" ? "selected" : ""}>سماوي - cyan</option>
                    <option value="rose" ${section.tone === "rose" ? "selected" : ""}>وردي - rose</option>
                  </select>
                  <div class="field static-field">اختيار الأعضاء يتم من بطاقات الأعضاء بالأسفل</div>
                </div>
                <textarea name="section-text-${index}" placeholder="وصف القسم">${section.text}</textarea>
                <div class="hint">غيّر الاسم واللون والوصف هنا، ثم اختر أعضاء هذا القسم من كل بطاقة عضو بالأسفل.</div>
              </div>
            `
          )
          .join("")}

        <div class="grid-card">
          <h4>إعدادات الأعضاء</h4>
          <div class="hint">تقدر تعدل الاسم، المسمى، الأحرف، والنبذة لكل عضو.</div>
        </div>
        ${content.team
          .map(
            (member, index) => `
              <div class="grid-card">
                <div class="control-grid">
                  <input class="field" name="initials-${index}" value="${escapeAttr(member.initials)}" placeholder="الأحرف" />
                  <input class="field" name="name-${index}" value="${escapeAttr(member.name)}" placeholder="الاسم" />
                </div>
                <input class="field" name="avatar-${index}" value="${escapeAttr(member.avatar || "")}" placeholder="مسار الأفتار مثل: ./assets/avatar.png" />
                <input class="field" name="role-${index}" value="${escapeAttr(member.role)}" placeholder="المسمى" />
                <textarea name="bio-${index}" placeholder="نبذة">${member.bio}</textarea>
                <div class="member-sections-picker">
                  <div class="member-sections-head">
                    <strong>تحديد الأقسام</strong>
                    <span>اختر الأقسام التي يظهر فيها هذا العضو</span>
                  </div>
                  <div class="member-sections-grid">
                    ${content.teamSections
                      .map(
                        (section, sectionIndex) => `
                          <label class="member-section-option tone-${section.tone}">
                            <input
                              type="checkbox"
                              name="member-section-${index}-${sectionIndex}"
                              ${section.memberIndexes?.includes(index) ? "checked" : ""}
                            />
                            <div class="member-section-option-content">
                              <small>${section.badge}</small>
                              <span>${section.title}</span>
                            </div>
                          </label>
                        `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            `
          )
          .join("")}
        <div class="inline-actions">
          <button class="btn btn-secondary" type="button" id="addTeamSection">إضافة قسم</button>
          <button class="btn btn-secondary" type="button" id="addTeamMember">إضافة شخص</button>
          <button class="btn btn-primary" type="submit">حفظ الفريق</button>
        </div>
      </form>
    `;
  }

  return `
    <form id="adminContactForm" class="control-stack">
      <input class="field" name="email" value="${escapeAttr(content.contact.email)}" placeholder="البريد" />
      <input class="field" name="discord" value="${escapeAttr(content.contact.discord)}" placeholder="الديسكورد" />
      <input class="field" name="whatsapp" value="${escapeAttr(content.contact.whatsapp)}" placeholder="الواتساب" />
      <input class="field" name="location" value="${escapeAttr(content.contact.location)}" placeholder="الموقع" />
      <div class="inline-actions">
        <button class="btn btn-primary" type="submit">حفظ بيانات التواصل</button>
      </div>
    </form>
  `;
}

function bindAdmin() {
  if (!isAdminAuthenticated()) {
    document.getElementById("adminLoginForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const username = String(form.get("username") ?? "").trim();
      const password = String(form.get("password") ?? "");
      const message = document.getElementById("adminLoginMessage");

      if (
        username === content.adminAuth.username &&
        password === content.adminAuth.password
      ) {
        sessionStorage.setItem(adminSessionKey, "true");
        renderRoute();
        return;
      }

      if (message) {
        message.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
      }
    });

    return;
  }

  document.querySelectorAll(".admin-tab").forEach((button) => {
    button.addEventListener("click", () => {
      currentAdminTab = button.dataset.tab;
      renderRoute();
    });
  });

  document.getElementById("resetContent")?.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    content = structuredClone(defaultContent);
    renderRoute();
  });

  document.getElementById("adminLogout")?.addEventListener("click", () => {
    sessionStorage.removeItem(adminSessionKey);
    location.hash = "#home";
  });

  document.getElementById("adminSiteForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    content.site = {
      ...content.site,
      name: form.get("name"),
      tagline: form.get("tagline"),
      season: form.get("season"),
      heroTitle: form.get("heroTitle"),
      heroText: form.get("heroText"),
      primaryCta: form.get("primaryCta"),
      secondaryCta: form.get("secondaryCta")
    };
    saveAndRefresh();
  });

  document.getElementById("adminStatsForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    content.stats = content.stats.map((stat, index) => ({
      value: form.get(`value-${index}`),
      label: form.get(`label-${index}`)
    }));
    saveAndRefresh();
  });

  document.getElementById("adminFeaturesForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    content.features = content.features.map((feature, index) =>
      index < 4
        ? {
            title: form.get(`title-${index}`),
            text: form.get(`text-${index}`)
          }
        : feature
    );
    saveAndRefresh();
  });

  document.getElementById("adminRulesForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    content.rules = content.rules.map((rule, index) => ({
      ...rule,
      navLabel: form.get(`navLabel-${index}`),
      title: form.get(`title-${index}`),
      updatedAt: form.get(`updatedAt-${index}`),
      description: form.get(`description-${index}`),
      items: parseRulesLines(form.get(`items-${index}`))
    }));

    if (!content.rules.find((rule) => rule.slug === currentRuleCategory)) {
      currentRuleCategory = content.rules[0]?.slug || "general";
    }

    saveAndRefresh();
  });

  document.getElementById("addRulePanel")?.addEventListener("click", () => {
    const nextIndex = content.rules.length + 1;
    const newRulePanel = {
      slug: generateRuleSlug(`panel-${nextIndex}`),
      navLabel: `تصنيف جديد ${nextIndex}`,
      title: `تصنيف جديد ${nextIndex}`,
      description: "اكتب وصف هذا التصنيف هنا.",
      updatedAt: "18 يونيو 2026",
      pinned: false,
      items: [{ text: "اكتب القانون الأول هنا." }]
    };

    content.rules = [...content.rules, newRulePanel];
    currentRuleCategory = newRulePanel.slug;
    saveAndRefresh();
  });

  document.querySelectorAll("[data-delete-rule-panel]").forEach((button) => {
    button.addEventListener("click", () => {
      if (content.rules.length <= 1) {
        return;
      }

      const indexToDelete = Number(button.dataset.deleteRulePanel);
      const deletedRule = content.rules[indexToDelete];
      content.rules = content.rules.filter((_, index) => index !== indexToDelete);

      if (deletedRule?.slug === currentRuleCategory) {
        currentRuleCategory = content.rules[0]?.slug || "general";
      }

      saveAndRefresh();
    });
  });

  document.getElementById("adminApplicationsForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    content.applications = content.applications.map((application, index) => ({
      ...application,
      navLabel: form.get(`navLabel-${index}`),
      title: form.get(`title-${index}`),
      text: form.get(`text-${index}`),
      note: form.get(`note-${index}`),
      fields: parseApplicationsFields(form.get(`fields-${index}`))
    }));
    saveAndRefresh();
  });

  document.getElementById("addApplicationPanel")?.addEventListener("click", () => {
    const nextIndex = content.applications.length + 1;
    const newApplication = {
      slug: generateApplicationSlug(`application-${nextIndex}`),
      navLabel: `تقديم جديد ${nextIndex}`,
      title: `تقديم جديد ${nextIndex}`,
      text: "اكتب وصف التقديم هنا.",
      note: "أضف هنا الملاحظات الخاصة بهذا التقديم.",
      fields: ["الاسم", "العمر", "سبب التقديم"]
    };

    content.applications = [...content.applications, newApplication];
    currentApplicationCategory = newApplication.slug;
    saveAndRefresh();
  });

  document.getElementById("adminStoreForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    content.storeSections = content.storeSections.map((section, index) => ({
      ...section,
      title: form.get(`section-title-${index}`)
    }));
    content.storeSections = normalizeStoreSections(content.storeSections, content.store);
    content.store = content.store.map((item, index) => ({
      ...item,
      title: form.get(`title-${index}`),
      sectionSlug: form.get(`sectionSlug-${index}`),
      price: form.get(`price-${index}`),
      badge: form.get(`badge-${index}`),
      buyUrl: form.get(`buyUrl-${index}`),
      image: form.get(`image-${index}`),
      text: form.get(`text-${index}`),
      items: parseStoreItemsLines(form.get(`items-${index}`))
    }));
    content.store = normalizeStoreItems(content.store);
    saveAndRefresh();
  });

  document.getElementById("addStoreItem")?.addEventListener("click", () => {
    const nextIndex = content.store.length + 1;
    const newStoreItem = {
      slug: generateStoreSlug(`store-item-${nextIndex}`),
      sectionSlug: content.storeSections[0]?.slug || "",
      badge: "",
      title: `منتج جديد ${nextIndex}`,
      price: "0 ر.س",
      text: "اكتب وصف المنتج هنا.",
      items: ["الميزة الأولى", "الميزة الثانية"],
      buyUrl: "#contact",
      image: "./assets/store-card-reference.png"
    };

    content.store = [...content.store, newStoreItem];
    currentStoreItem = newStoreItem.slug;
    saveAndRefresh();
  });

  document.getElementById("addStoreSection")?.addEventListener("click", () => {
    const nextIndex = content.storeSections.length + 1;
    const newSection = {
      slug: generateStoreSectionSlug(`section-${nextIndex}`),
      title: `قسم جديد ${nextIndex}`
    };

    content.storeSections = [...content.storeSections, newSection];
    saveAndRefresh();
  });

  document.querySelectorAll("[data-delete-store-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const indexToDelete = Number(button.dataset.deleteStoreItem);
      const deletedItem = content.store[indexToDelete];
      content.store = content.store.filter((_, index) => index !== indexToDelete);
      content.store = normalizeStoreItems(content.store);

      if (deletedItem?.slug === currentStoreItem) {
        currentStoreItem = content.store[0]?.slug || "";
      }

      saveAndRefresh();
    });
  });

  document.querySelectorAll("[data-delete-store-section]").forEach((button) => {
    button.addEventListener("click", () => {
      if (content.storeSections.length <= 1) {
        return;
      }

      const indexToDelete = Number(button.dataset.deleteStoreSection);
      const deletedSection = content.storeSections[indexToDelete];
      const fallbackSectionSlug =
        content.storeSections.find((_, index) => index !== indexToDelete)?.slug || "";

      content.storeSections = content.storeSections.filter((_, index) => index !== indexToDelete);
      content.store = content.store.map((item) => ({
        ...item,
        sectionSlug: item.sectionSlug === deletedSection?.slug ? fallbackSectionSlug : item.sectionSlug
      }));
      content.store = normalizeStoreItems(content.store);
      saveAndRefresh();
    });
  });

  document.getElementById("adminTeamForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextTeamSections = content.teamSections.map((section, index) => ({
      badge: form.get(`section-badge-${index}`),
      title: form.get(`section-title-${index}`),
      text: form.get(`section-text-${index}`),
      tone: form.get(`section-tone-${index}`),
      memberIndexes: []
    }));
    content.team = content.team.map((member, index) => ({
      initials: form.get(`initials-${index}`),
      avatar: form.get(`avatar-${index}`),
      name: form.get(`name-${index}`),
      role: form.get(`role-${index}`),
      bio: form.get(`bio-${index}`)
    }));

    nextTeamSections.forEach((section, sectionIndex) => {
      section.memberIndexes = content.team
        .map((_, memberIndex) =>
          form.get(`member-section-${memberIndex}-${sectionIndex}`) ? memberIndex : null
        )
        .filter((memberIndex) => memberIndex !== null);
    });

    content.teamSections = normalizeTeamSections(nextTeamSections, content.team);
    saveAndRefresh();
  });

  document.getElementById("addTeamMember")?.addEventListener("click", () => {
    const nextIndex = content.team.length + 1;
    content.team = [
      ...content.team,
      {
        initials: `P${nextIndex}`,
        avatar: "",
        name: `New Member ${nextIndex}`,
        role: "STAFF",
        bio: "اكتب نبذة مختصرة عن هذا العضو هنا."
      }
    ];
    content.teamSections = normalizeTeamSections(content.teamSections, content.team);
    saveAndRefresh();
  });

  document.getElementById("addTeamSection")?.addEventListener("click", () => {
    const nextIndex = content.teamSections.length + 1;
    content.teamSections = [
      ...content.teamSections,
      {
        badge: `Section ${nextIndex}`,
        title: `قسم جديد ${nextIndex}`,
        text: "اكتب وصف القسم هنا.",
        tone: "cyan",
        memberIndexes: []
      }
    ];
    content.teamSections = normalizeTeamSections(content.teamSections, content.team);
    saveAndRefresh();
  });

  document.querySelectorAll("[data-delete-team-section]").forEach((button) => {
    button.addEventListener("click", () => {
      if (content.teamSections.length <= 1) {
        return;
      }

      const indexToDelete = Number(button.dataset.deleteTeamSection);
      content.teamSections = content.teamSections.filter((_, index) => index !== indexToDelete);
      content.teamSections = normalizeTeamSections(content.teamSections, content.team);
      saveAndRefresh();
    });
  });

  document.querySelectorAll("[data-move-team-section-up]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.moveTeamSectionUp);
      if (index <= 0) return;
      content.teamSections = moveItem(content.teamSections, index, index - 1);
      saveAndRefresh();
    });
  });

  document.querySelectorAll("[data-move-team-section-down]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.moveTeamSectionDown);
      if (index >= content.teamSections.length - 1) return;
      content.teamSections = moveItem(content.teamSections, index, index + 1);
      saveAndRefresh();
    });
  });

  document.getElementById("adminContactForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    content.contact = {
      email: form.get("email"),
      discord: form.get("discord"),
      whatsapp: form.get("whatsapp"),
      location: form.get("location")
    };
    saveAndRefresh();
  });
}

function bindContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    button.textContent = "تم الإرسال بنجاح";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "إرسال";
      button.disabled = false;
      form.reset();
    }, 1800);
  });
}

function saveAndRefresh() {
  localStorage.setItem(storageKey, JSON.stringify(content));
  renderRoute();
}

function pageTemplate(title, text, body) {
  return `
    <section class="section page active">
      <div class="container">
        <div class="page-head">
          <span class="eyebrow">${content.site.name}</span>
          <h1>${title}</h1>
          <p>${text}</p>
        </div>
        ${body}
      </div>
    </section>
  `;
}

function isAdminAuthenticated() {
  return sessionStorage.getItem(adminSessionKey) === "true";
}

function applicationsFieldsToTextarea(fields = []) {
  return fields.join("\n");
}

function parseApplicationsFields(value) {
  return String(value ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function generateApplicationSlug(base) {
  const normalized = String(base ?? "")
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, "-")
    .replaceAll(/[^a-z0-9-]/g, "");

  let slug = normalized || `application-${Date.now()}`;
  let counter = 2;

  while (content.applications.some((application) => application.slug === slug)) {
    slug = `${normalized || "application"}-${counter}`;
    counter += 1;
  }

  return slug;
}

function normalizeStoreItems(items = []) {
  return items.map((item, index) => {
    const slug =
      item.slug ||
      String(item.title || `store-item-${index + 1}`)
        .toLowerCase()
        .replaceAll(/\s+/g, "-")
        .replaceAll(/[^a-z0-9-]/g, "") ||
      `store-item-${index + 1}`;

    return {
      slug,
      sectionSlug: item.sectionSlug || findStoreSectionSlug(item.category) || defaultContent.storeSections?.[0]?.slug || "",
      badge: item.badge || "",
      title: item.title || `منتج ${index + 1}`,
      price: item.price || "0 ر.س",
      text: item.text || "وصف المنتج غير مضاف بعد.",
      items: Array.isArray(item.items) ? item.items : [],
      buyUrl: item.buyUrl || "#contact",
      image: item.image || "./assets/store-card-reference.png"
    };
  });
}

function normalizeStoreSections(sections = [], items = []) {
  if (sections.length) {
    return sections.map((section, index) => ({
      slug: section.slug || generateStoreSectionSlug(section.title || `section-${index + 1}`),
      title: section.title || `قسم ${index + 1}`
    }));
  }

  const derivedTitles = Array.from(new Set(items.map((item) => item.category).filter(Boolean)));
  if (derivedTitles.length) {
    return derivedTitles.map((title) => ({
      slug: String(title)
        .trim()
        .toLowerCase()
        .replaceAll(/\s+/g, "-")
        .replaceAll(/[^a-z0-9-]/g, "") || `section-${Date.now()}`,
      title
    }));
  }

  return (defaultContent.storeSections || []).map((section) => ({ ...section }));
}

function findStoreSectionSlug(title) {
  return content.storeSections?.find((section) => section.title === title)?.slug || "";
}

function getStoreSectionTitle(slug) {
  return content.storeSections?.find((section) => section.slug === slug)?.title || "قسم غير محدد";
}

function storeItemsToTextarea(items = []) {
  return items.join("\n");
}

function parseStoreItemsLines(value) {
  return String(value ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function generateStoreSlug(base) {
  const normalized = String(base ?? "")
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, "-")
    .replaceAll(/[^a-z0-9-]/g, "");

  let slug = normalized || `store-item-${Date.now()}`;
  let counter = 2;

  while (content.store.some((item) => item.slug === slug)) {
    slug = `${normalized || "store-item"}-${counter}`;
    counter += 1;
  }

  return slug;
}

function generateStoreSectionSlug(base) {
  const normalized = String(base ?? "")
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, "-")
    .replaceAll(/[^a-z0-9-]/g, "");

  let slug = normalized || `store-section-${Date.now()}`;
  let counter = 2;

  while (content.storeSections?.some((section) => section.slug === slug)) {
    slug = `${normalized || "store-section"}-${counter}`;
    counter += 1;
  }

  return slug;
}

function normalizeTeamMembers(items = []) {
  return items.map((item, index) => ({
    initials: item.initials || `P${index + 1}`,
    avatar: item.avatar || "",
    name: item.name || `Member ${index + 1}`,
    role: item.role || "STAFF",
    bio: item.bio || "اكتب نبذة مختصرة عن هذا العضو هنا."
  }));
}

function normalizeStreams(items = []) {
  return items.map((item, index) => ({
    slug:
      item.slug ||
      String(item.title || `stream-${index + 1}`)
        .toLowerCase()
        .replaceAll(/\s+/g, "-")
        .replaceAll(/[^a-z0-9-]/g, "") ||
      `stream-${index + 1}`,
    title: item.title || `بث ${index + 1}`,
    platform: item.platform || "Twitch",
    text: item.text || "وصف البث غير مضاف بعد.",
    cta: item.cta || "مشاهدة الآن",
    viewers: item.viewers || "Live",
    url: item.url || "#contact"
  }));
}

function normalizeTeamSections(sections = [], members = []) {
  const fallbackSections = defaultContent.teamSections || [];
  const source = sections.length ? sections : fallbackSections;

  return source.map((section, index) => {
    const fallback = fallbackSections[index] || fallbackSections[0];
    const memberIndexes = Array.isArray(section.memberIndexes)
      ? section.memberIndexes
      : Array.isArray(fallback?.memberIndexes)
        ? fallback.memberIndexes
        : [];

    return {
      badge: section.badge || fallback?.badge || `Section ${index + 1}`,
      title: section.title || fallback?.title || `قسم ${index + 1}`,
      text: section.text || fallback?.text || "وصف القسم غير مضاف بعد.",
      tone: section.tone || fallback?.tone || "cyan",
      memberIndexes: memberIndexes.filter((memberIndex) => Number.isInteger(memberIndex) && memberIndex >= 0 && memberIndex < members.length)
    };
  });
}

function teamMemberIndexesToInput(indexes = []) {
  return indexes.map((index) => index + 1).join(",");
}

function parseTeamMemberIndexes(value, membersLength) {
  return Array.from(
    new Set(
      String(value ?? "")
        .split(",")
        .map((part) => Number.parseInt(part.trim(), 10) - 1)
        .filter((index) => Number.isInteger(index) && index >= 0 && index < membersLength)
    )
  );
}

function moveItem(items, fromIndex, toIndex) {
  const cloned = [...items];
  const [movedItem] = cloned.splice(fromIndex, 1);
  cloned.splice(toIndex, 0, movedItem);
  return cloned;
}

function getNumericPrice(price) {
  const normalized = String(price ?? "").replace(/[^\d.]/g, "");
  return Number(normalized || 0);
}

function normalizeApplications(applications = []) {
  return applications.map((application, index) => {
    const slug =
      application.slug ||
      String(application.title || `application-${index + 1}`)
        .toLowerCase()
        .replaceAll(/\s+/g, "-")
        .replaceAll(/[^a-z0-9-]/g, "") ||
      `application-${index + 1}`;

    return {
      slug,
      navLabel: application.navLabel || application.title || `تقديم ${index + 1}`,
      title: application.title || application.navLabel || `تقديم ${index + 1}`,
      text: application.text || "وصف هذا التقديم غير مضاف بعد.",
      note:
        application.note ||
        "هذه النسخة الحالية للعرض فقط ويمكن ربطها لاحقًا بنظام تسجيل دخول وإرسال طلبات فعلي.",
      fields: Array.isArray(application.fields) ? application.fields : []
    };
  });
}

function rulesToTextarea(items = []) {
  return items
    .map((item) => (item.badge ? `${item.text} || ${item.badge}` : item.text))
    .join("\n");
}

function parseRulesLines(value) {
  return String(value ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [textPart, badgePart] = line.split("||").map((part) => part?.trim());
      return badgePart ? { text: textPart, badge: badgePart } : { text: textPart };
    });
}

function generateRuleSlug(base) {
  const normalized = String(base ?? "")
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, "-")
    .replaceAll(/[^a-z0-9-]/g, "");

  let slug = normalized || `rule-panel-${Date.now()}`;
  let counter = 2;

  while (content.rules.some((rule) => rule.slug === slug)) {
    slug = `${normalized || "rule-panel"}-${counter}`;
    counter += 1;
  }

  return slug;
}

function escapeAttr(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
