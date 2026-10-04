export const redesign = {
  common: {
    home: "Главная",
    services: "Направления",
    audiences: "Для кого",
    company: "Компания",
    founder: "Основатель",
    education: "Обучение",
    contact: "Контакты",
    planned: "Планируется",
    discuss: "Обсудить направление",
    learn: "Подробнее",
    phone: "Телефон",
    registered: "Компания зарегистрирована",
    location: "Алматы, Казахстан",
    evidence: "Контекст цифровых следов",
    initials: "АС",
    core: "Система безопасности",
    privacy: "Конфиденциальность",
    personalData: "Персональные данные",
  },
  coreLayers: [
    { label: "Расследования", href: "/services#forensics", angle: 0 },
    { label: "OSINT", href: "/services#osint", angle: 120 },
    { label: "Защита", href: "/services#security", angle: 240 },
  ],
  nav: [
    { href: "/services", label: "Направления" },
    { href: "/audiences", label: "Для кого" },
    { href: "/founder", label: "Основатель" },
    { href: "/company", label: "Компания" },
  ],
  menu: [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Направления" },
    { href: "/audiences", label: "Для кого" },
    { href: "/education", label: "Обучение" },
    { href: "/founder", label: "Основатель" },
    { href: "/company", label: "Компания" },
    { href: "/contact", label: "Контакты" },
  ],
  hero: {
    note: "Кибербезопасность · Алматы",
    title: "Безопасность начинается с ядра.",
    description: "Цифровые расследования. Открытые данные. Защита организаций.",
    cta: "Обсудить задачу",
    secondary: "Познакомиться с SYSCORE",
    status: "Направления запускаются. Объём работ согласуем лично.",
    hint: "Выберите слой ядра",
  },
  services: {
    title: "От сигнала — к пониманию.",
    description: "Четыре направления. Одна точка входа.",
    notice:
      "Все услуги планируются. Условия и доступность подтверждаются до начала работ.",
    items: [
      {
        id: "incident",
        title: "Киберинциденты",
        short: "Когда что-то пошло не так.",
        text: "Разбор обстоятельств взлома, утечки или подозрительной активности.",
        detail: "Сначала согласуем границы задачи и законный доступ к данным.",
        icon: "signal",
      },
      {
        id: "forensics",
        title: "Цифровые расследования",
        short: "Внимание к каждому следу.",
        text: "Исследование цифровых материалов и восстановление контекста событий.",
        detail:
          "Порядок работы с материалами и формат результатов согласуются отдельно.",
        icon: "trace",
      },
      {
        id: "osint",
        title: "OSINT",
        short: "Открытые данные. Связанный контекст.",
        text: "Поиск и анализ сведений из открытых источников в правовых границах.",
        detail:
          "Не предусматривает взлом, скрытый доступ или раскрытие закрытых данных.",
        icon: "network",
      },
      {
        id: "security",
        title: "Защита организаций",
        short: "Системный взгляд на риск.",
        text: "Оценка рисков инфраструктуры, процессов и доступа.",
        detail:
          "Приоритеты и возможный план защиты определяем по задаче организации.",
        icon: "shield",
      },
    ],
  },
  audiences: {
    title: "Разные задачи. Общий язык.",
    description: "Технологии, право и безопасность — в одном контексте.",
    notice:
      "Указаны целевые аудитории, а не клиенты или официальные партнёры SYSCORE.",
    items: [
      {
        title: "Государственные структуры",
        subtitle: "МВД и правоохранительная сфера",
        text: "Задачи, связанные с цифровыми следами и исследованием материалов.",
        topic: "forensics",
      },
      {
        title: "Юристы и правовые команды",
        subtitle: "Цифровое право",
        text: "Технический контекст для работы с цифровыми материалами.",
        topic: "osint",
      },
      {
        title: "Бизнес",
        subtitle: "Организации и команды",
        text: "Риски, инциденты и архитектура цифровой защиты.",
        topic: "security",
      },
    ],
  },
  founder: {
    title: "Аскар Сысоев",
    name: "Сысоев Аскар Какенович",
    description:
      "Основатель SYSCORE. Доктор философии (PhD) по правоохранительной деятельности.",
    rank: "Ранее — полковник полиции.",
    degree: "PhD · правоохранительная деятельность · 2021",
    cta: "Документы и квалификация",
    portraitTodo: "TODO: портрет основателя",
    awardsTodo: "TODO: названия и документы наград",
    notice: "Личная квалификация основателя. Не сертификация компании.",
    biography:
      "Правоохранительная деятельность, цифровые расследования и образование — области подготовки, отражённые в предоставленных документах.",
    biographyTodo: "TODO: согласованная биография и периоды службы",
  },
  gallery: {
    title: "Документы, не обещания.",
    description: "Диплом и сертификаты, предоставленные основателем.",
    filters: [
      { id: "all", label: "Все документы" },
      { id: "security", label: "Безопасность" },
      { id: "education", label: "Обучение" },
      { id: "degree", label: "PhD" },
    ],
    view: "Смотреть",
    pdf: "Оригинал PDF",
    verify: "Проверка сертификата",
    missing: "TODO: файл документа отсутствует",
    previous: "Предыдущий документ",
    next: "Следующий документ",
    close: "Закрыть просмотр",
    zoomIn: "Увеличить",
    zoomOut: "Уменьшить",
    rotate: "Повернуть",
    reset: "Сбросить",
    hint: "← → документы · Shift + стрелки перемещение · + − масштаб · Esc закрыть",
  },
  education: {
    title: "Знания становятся защитой.",
    description: "Будущее образовательное направление SYSCORE.",
    topics: [
      "Цифровые расследования",
      "Кибербезопасность",
      "Работа с открытыми данными",
    ],
    notice: "Программы планируются. Набор, сроки и стоимость ещё не объявлены.",
    cta: "Обсудить обучение",
  },
  company: {
    title: "Система. Люди. Ответственность.",
    description: "ТОО «SYSCORE» · Казахстан, Алматы",
    notice: "Регистрационные сведения предоставлены владельцем сайта.",
    labels: [
      "БИН",
      "Основной ОКЭД",
      "Зарегистрировано",
      "Руководитель",
      "Юридический адрес",
    ],
  },
  contact: {
    title: "Начнём с разговора.",
    description: "Кратко о задаче — без конфиденциальных материалов.",
    safety:
      "Пароли, файлы и материалы расследований на первом этапе не принимаются.",
    cta: "Связаться с SYSCORE",
    whatsapp: "Написать в WhatsApp",
    call: "Позвонить",
  },
  footer: {
    text: "System Security Core",
    status: "Кибербезопасность · Казахстан",
    data: "Данные и обратная связь",
  },
} as const;

export const experience = {
  dataPolicy: {
    title: "Данные и обратная связь",
    updated:
      "Онлайн-приём отключён до подключения доставки и утверждения условий обработки.",
    sections: [
      {
        title: "Контакты компании",
        body: "ТОО «SYSCORE», БИН 260940014470. 050000, г. Алматы, Бостандыкский район, пр. Абая, д. 52В, офис 724. Телефон: +7 702 777 61 81.",
      },
      {
        title: "Онлайн-обращения",
        body: "При включении формы передаются имя, телефон, тема, краткое описание и согласие для обратной связи. Файлы, пароли и материалы расследований не принимаются. До включения должны быть утверждены условия обработки, место и сроки хранения.",
      },
      {
        title: "Доставка и сервисы",
        body: "Серверный модуль предусматривает доставку в Telegram или согласованный серверный шлюз. Защита от спама: Redis с временным хешем сетевого адреса и Cloudflare Turnstile. Подключение, место и сроки хранения требуют согласования оператором. Аналитика, маркетинговые рассылки и аккаунты не подключены.",
      },
      {
        title: "Другие каналы связи",
        body: "Звонок и переход в WhatsApp доступны без онлайн-формы. В WhatsApp действуют условия соответствующего сервиса. Вопросы об обработке данных можно направить компании по указанному телефону.",
      },
    ],
  },
  navigation: [
    { href: "/services", label: "Направления" },
    { href: "/education", label: "Обучение" },
    { href: "/company", label: "Компания" },
    { href: "/contact", label: "Контакты" },
  ],
  hero: {
    label: "CYBERSECURITY / ALMATY",
    title: "Безопасность начинается с ядра.",
    description:
      "Кибербезопасность, цифровые расследования и подготовка специалистов. Выберите вашу задачу.",
    action: "Обсудить задачу",
    secondary: "Выбрать направление",
    notice: "Компания зарегистрирована. Услуги и программы планируются.",
  },
  directions: [
    {
      id: "incident",
      number: "01",
      title: "Киберинцидент",
      tag: "INCIDENT / RESPONSE",
      description: "Взлом, утечка или подозрительная активность.",
      scope:
        "Планируемое направление: анализ обстоятельств инцидента и рекомендации по защите.",
      points: [
        "Разбор исходных обстоятельств",
        "Определение границ задачи",
        "Согласование следующего шага",
      ],
    },
    {
      id: "forensics",
      number: "02",
      title: "Цифровое расследование",
      tag: "DIGITAL / FORENSICS",
      description: "Задачи, связанные с цифровыми следами.",
      scope:
        "Планируемое направление: исследование цифровых материалов в согласованных правовых границах.",
      points: [
        "Для организаций и специалистов",
        "Работа только с законным доступом",
        "Формат исследования согласуется отдельно",
      ],
    },
    {
      id: "security",
      number: "03",
      title: "Защита организации",
      tag: "BUSINESS / SECURITY",
      description: "Риски инфраструктуры, процессов и доступа.",
      scope:
        "Планируемое направление: оценка рисков и построение архитектуры защиты.",
      points: [
        "Определение критичных систем",
        "Приоритеты защиты",
        "План улучшений",
      ],
    },
    {
      id: "education",
      number: "04",
      title: "Обучение",
      tag: "PEOPLE / SKILLS",
      description: "Практические навыки цифровой безопасности.",
      scope:
        "Образовательные программы планируются. Набор, сроки и стоимость пока не объявлены.",
      points: [
        "Основы кибербезопасности",
        "Безопасная работа с данными",
        "Практические учебные сценарии",
      ],
    },
  ],
  home: {
    taskLabel: "SELECT YOUR MISSION",
    taskTitle: "С чего начнём?",
    companyLabel: "THE HUMAN BEHIND THE CORE",
    companyTitle: "Экспертиза начинается с человека.",
    companyText:
      "Аскар Сысоев — основатель SYSCORE, доктор философии (PhD) по правоохранительной деятельности.",
    companyAction: "Основатель и документы",
    educationTitle: "Знания — часть защиты.",
    educationText: "Будущие программы для специалистов и команд.",
    educationAction: "Образовательное направление",
    contactTitle: "Есть задача? Обсудим.",
    contactText:
      "Без файлов, паролей и конфиденциальных материалов на первом этапе.",
  },
  services: {
    label: "CAPABILITIES",
    title: "Выберите вашу задачу.",
    description:
      "Направления в разработке. Доступность и объём работ подтверждаем лично.",
    cta: "Обсудить это направление",
    disclaimer:
      "SYSCORE не является экстренной службой. Официальное сотрудничество с МВД и действующий SOC не заявляются.",
  },
  company: {
    label: "COMPANY / IDENTITY",
    title: "SYSCORE. Казахстан.",
    founderLabel: "FOUNDER / PROFILE",
    founderTitle: "Аскар Сысоев",
    degree: "Доктор философии (PhD)",
    degreeDetail: "6D030300 — Правоохранительная деятельность · 27.04.2021",
    credentialsTitle: "Образование и подготовка",
    credentialsNotice:
      "Личные документы основателя публикуются с разрешения владельца сайта. Курсы не являются сертификацией компании.",
    legalTitle: "Регистрационные данные",
    legalLabels: [
      "БИН",
      "ОКЭД",
      "Регистрация",
      "Руководитель",
      "Юридический адрес",
    ],
  },
  credentials: [
    {
      title: "The Complete Ethical Hacking Course",
      issuer: "Coursera · специализация, 4 курса",
      date: "04.05.2026",
      group: "security",
      href: "https://coursera.org/verify/specialization/RQI7K5JTAMZK",
    },
    {
      title: "Расследование преступлений в сфере высоких технологий",
      issuer: "Воронежский институт МВД России · 72 часа",
      date: "04.10.2012",
      group: "security",
      href: "",
    },
    {
      title: "Advanced Level Communication Technologies and Applications",
      issuer: "TİKA / Turkish National Police · курс",
      date: "25.11.2011",
      group: "security",
      href: "",
    },
    {
      title: "Современные проблемы теории и практики ОРД",
      issuer: "Global Professional Development · 72 часа",
      date: "28.01.2022",
      group: "security",
      href: "",
    },
    {
      title: "Искусственный Интеллект (ИИ) для всех",
      issuer: "DeepLearning.AI / Coursera",
      date: "15.04.2026",
      group: "education",
      href: "https://coursera.org/verify/E1XTM7FYB0JS",
    },
    {
      title: "Цифровая трансформация в образовании",
      issuer: "КазНУ имени аль-Фараби · 72 часа",
      date: "28.11.2021",
      group: "education",
      href: "",
    },
    {
      title: "Blended Learning: Personalizing Education for Students",
      issuer: "Coursera · курс",
      date: "04.05.2026",
      group: "education",
      href: "https://coursera.org/verify/R4720WNP6T2B",
    },
    {
      title: "Disability Inclusion in Education: Building Systems of Support",
      issuer: "University of Cape Town / Coursera",
      date: "17.04.2026",
      group: "education",
      href: "https://coursera.org/verify/9G8V4UDLJ9DN",
    },
    {
      title: "Diversity and inclusion in the workplace",
      issuer: "ESSEC Business School / Coursera",
      date: "16.04.2026",
      group: "education",
      href: "https://coursera.org/verify/2YZAHWIOJM00",
    },
    {
      title: "Managing Diversity in a Multicultural Workplace",
      issuer: "Starweaver / Coursera",
      date: "18.04.2026",
      group: "education",
      href: "https://coursera.org/verify/NE83O1V8KO3A",
    },
  ],
  education: {
    label: "EDUCATION / PLANNED",
    title: "Учиться защищать.",
    description:
      "Готовим образовательное направление. Можно обсудить потребности вашей команды.",
    topics: [
      "Кибербезопасность",
      "Цифровые расследования",
      "Безопасность данных",
    ],
    notice:
      "Набор не открыт. Даты, учебные планы и условия будут опубликованы после утверждения.",
    cta: "Обсудить обучение",
  },
  contact: {
    label: "CONTACT / SYSCORE",
    title: "Начнём с вашей задачи.",
    intro: "Выберите тему и оставьте контакт для обратной связи.",
    name: "Ваше имя",
    phone: "Телефон",
    topic: "Тема обращения",
    message: "Кратко о задаче",
    warning:
      "Не отправляйте пароли, доказательства, персональные данные третьих лиц или секретные материалы.",
    consent: "Согласен на обработку данных для ответа на обращение",
    submit: "Отправить обращение",
    sending: "Отправляем…",
    success: "Обращение доставлено. Для срочного контакта позвоните нам.",
    error: "Не удалось отправить. Позвоните или напишите в WhatsApp.",
    unavailable:
      "Онлайн-приём ещё не подключён. Свяжитесь с SYSCORE по телефону или в WhatsApp.",
    invalid: "Проверьте имя, телефон и согласие на обработку данных.",
    whatsapp: "Написать в WhatsApp",
    call: "Позвонить SYSCORE",
  },
} as const;

export const siteContent = {
  brand: {
    name: "Syscore",
    fullName: "System Security Core",
    country: "Казахстан",
  },

  company: {
    legalName: "ТОО «SYSCORE»",
    bin: "260940014470",
    registrationDate: "11.09.2026",
    registrationISO: "2026-09-11",
    postalCode: "050000",
    countryCode: "KZ",
    city: "Almaty",
    oked: "62092",
    activity: "Деятельность в области кибербезопасности",
    director: "Сысоев Аскар Какенович",
    location: "Almaty, Kazakhstan",
    address:
      "050000, г. Алматы, Бостандыкский район, пр. Абая, д. 52В, офис 724",
    phone: "+7 702 777 61 81",
    phoneHref: "tel:+77027776181",
    whatsappHref: "https://wa.me/77027776181",
  },

  seo: {
    title: "Syscore — System Security Core",
    description:
      "ТОО SYSCORE, Алматы. Планируемые направления кибербезопасности, цифровых расследований и обучения. Компания, квалификация основателя и контакты.",
    ogAlt: "SYSCORE — кибербезопасность, Алматы, Казахстан",
  },

  nav: [
    { id: "directions", href: "/#directions", label: "Направления" },
    { id: "about", href: "/#about", label: "О проекте" },
    { id: "company", href: "/#company", label: "Компания" },
    { id: "education", href: "/#education", label: "Образование" },
    { id: "contacts", href: "/#contacts", label: "Контакты" },
  ],

  hero: {
    eyebrow: "Проект готовится к запуску",
    title: "Безопасность начинается с ядра.",
    subtitle: "System Security Core",
    description:
      "Центр кибербезопасности в Казахстане. Мы готовим инфраструктуру для двух задач: защита бизнеса и подготовка специалистов. Услуги и образовательные программы находятся на этапе планирования.",
    ctaLabel: "Explore security",
    ctaHref: "#directions",
    companyStatus: "ТОО «SYSCORE»",
    registrationStatus: "REGISTERED / KAZAKHSTAN",
    interfaceMetadata: [
      "COMPANY / REGISTERED",
      "FIELD / CYBERSECURITY",
      "LOCATION / ALMATY",
    ],
    whatsappLabel: "WhatsApp ↗",
  },

  interface: {
    mapTitle: "THREAT LANDSCAPE",
    mapNotice: "CONCEPTUAL SECURITY VISUALIZATION / VISUAL ONLY",
    terminalTitle: "SYSCORE / CORE",
    terminalLines: [
      "initializing security architecture",
      "loading threat intelligence concept",
      "loading incident response concept",
      "preparing education layer",
      "system architecture ready",
    ],
    terminalStatus: "PRE-LAUNCH",
    floatingLabel: "CONTACT CORE",
  },

  whySyscore: {
    title: "ONE CORE — TWO DIRECTIONS",
    chain: ["Technology", "Processes", "People", "Security"],
    items: [
      { number: "01", title: "PROTECT", text: "Security for business" },
      { number: "02", title: "PREPARE", text: "Education for people" },
    ],
  },

  operations: {
    title: "SECURITY OPERATIONS",
    notice: "CONCEPTUAL SECURITY VISUALIZATION",
    nodes: ["NETWORK", "SOC", "THREAT INTELLIGENCE", "INCIDENT RESPONSE"],
  },

  research: {
    title: "RESEARCH & INTELLIGENCE",
    status: "RESEARCH MODULE / PREPARING",
    items: [
      "THREAT INTELLIGENCE",
      "SECURITY RESEARCH",
      "APPLIED ANALYSIS",
      "PRACTICAL CASES",
    ],
  },

  timeline: {
    title: "SYSCORE / TIMELINE",
    items: [
      ["09.2026", "COMPANY REGISTERED"],
      ["09.2026", "SYSCORE CORE FORMED"],
      ["2026 →", "LAUNCH PREPARATION"],
      ["NEXT", "SECURITY & EDUCATION PROGRAMS / PLANNED"],
    ],
  },

  imageSlots: [
    {
      id: "hero",
      label: "REAL VISUAL / HERO",
      note: "Space reserved for a verified Syscore photo",
    },
    {
      id: "education",
      label: "REAL VISUAL / EDUCATION",
      note: "Space reserved for a verified lab or learning photo",
    },
  ],

  core01: {
    title: "CORE-01",
    subtitle: "SYSCORE SECURITY INTELLIGENCE",
    notice: "CONCEPTUAL GUARDIAN VISUAL",
  },

  securityCheck: {
    title: "CHECK YOUR SECURITY",
    disclaimer:
      "Security Check performs passive configuration analysis and is not a penetration test.",
    placeholder: "example.com",
    action: "RUN PASSIVE CHECK",
  },

  cyberLab: {
    title: "CYBER LAB",
    notice: "DEMO / EDUCATIONAL SCENARIO",
    tabs: ["SOC LAB", "THREAT LAB", "DEFENSE LAB"],
    alert: "ALERT #00421",
    message: "Suspicious login detected.",
  },

  socRoom: {
    title: "SYSCORE SECURITY OPERATIONS",
    notice: "DEMO / CONCEPT INTERFACE",
  },
  academy: {
    title: "SYSCORE ACADEMY",
    path: [
      "FOUNDATION",
      "SOC",
      "THREAT INTELLIGENCE",
      "INCIDENT RESPONSE",
      "PRACTICE",
    ],
  },
  story: {
    title: "COMPANY STORY",
    fields: ["MISSION", "VISION", "WHAT WE BUILD", "WHO WE BUILD IT FOR"],
    notice: "FORMULATIONS ARE PREPARING FOR CONFIRMATION",
  },
  people: {
    title: "PEOPLE BEHIND THE CORE",
    note: "Space reserved for verified team profiles and photographs.",
  },
  place: {
    title: "SYSCORE / ALMATY",
    labels: ["050000", "ALMATY / KZ", "ABAY AVE 52B"],
  },

  positioning: {
    id: "positioning",
    title: "Позиционирование",
    description:
      "Syscore развивается как прикладной центр: с одной стороны — планируемые сервисы информационной безопасности для организаций, с другой — подготовка людей, которые эти сервисы смогут обеспечивать.",
    cards: [
      {
        number: "01",
        title: "Защита бизнеса",
        description:
          "Планируется сопровождение организаций: мониторинг событий безопасности, работа с угрозами и выстраивание процессов реагирования. Направления не оказываются как действующая услуга до официального запуска.",
      },
      {
        number: "02",
        title: "Подготовка специалистов",
        description:
          "Планируется практико-ориентированное обучение: от базовых компетенций до работы с процессами SOC. Программы готовятся к запуску и не заявлены как уже открытый набор.",
      },
    ],
  },

  directions: {
    id: "directions",
    badge: "Планируемые услуги",
    title: "Направления",
    description:
      "Ниже — планируемые направления работы центра. Это не действующий прайс и не подтверждённый перечень контрактов: формулировки описывают, к чему готовится проект.",
    items: [
      {
        id: "soc-siem",
        number: "01",
        title: "Мониторинг и SOC",
        summary:
          "Планируется организация процессов мониторинга информационной безопасности и работы центра мониторинга.",
        description:
          "Направление готовится как основа операционной работы: сбор и корреляция событий, выявление аномалий, эскалация инцидентов и регулярная отчётность. Услуга планируется и будет доступна только после запуска центра.",
        concepts: ["SOC", "SIEM", "корреляция событий", "мониторинг"],
      },
      {
        id: "threat-intelligence",
        number: "02",
        title: "Threat Intelligence",
        summary:
          "Планируется работа с данными об угрозах, индикаторами компрометации и источниками киберразведки.",
        description:
          "Направление готовится для обогащения мониторинга: сбор и обработка IOC, ведение TIP, сопоставление внешних данных об угрозах с внутренней телеметрией. Это планируемая компетенция, а не действующий сервис.",
        concepts: ["Threat Intelligence", "TIP", "IOC", "киберразведка"],
      },
      {
        id: "incident-response",
        number: "03",
        title: "Реагирование на инциденты",
        summary:
          "Планируется выстраивание процедур реагирования, сдерживания и восстановления после инцидентов.",
        description:
          "Направление охватывает подготовку playbook-ов, координацию реагирования и фиксацию хода работ. Процессы планируются к запуску вместе с операционным контуром центра.",
        concepts: [
          "Incident Response",
          "playbook",
          "сдерживание",
          "восстановление",
        ],
      },
      {
        id: "security-assessment",
        number: "04",
        title: "Анализ защищённости",
        summary:
          "Планируется оценка устойчивости инфраструктуры, выявление слабых мест и приоритезация мер защиты.",
        description:
          "Направление готовится как диагностика: инвентаризация рисков, проверка конфигураций и подготовка рекомендаций. Не является заявлением о проводимых сейчас аудитах или тестах.",
        concepts: ["уязвимости", "оценка рисков", "hardening", "рекомендации"],
      },
      {
        id: "security-processes",
        number: "05",
        title: "Процессы и консалтинг ИБ",
        summary:
          "Планируется помощь организациям в выстраивании процессов информационной безопасности, а не разовые «коробки».",
        description:
          "Направление готовится вокруг регламентов, ролей, взаимодействия ИТ и ИБ, метрик и устойчивого операционного цикла. Консалтинг обозначен как планируемый.",
        concepts: ["процессы ИБ", "регламенты", "роли", "операционная модель"],
      },
      {
        id: "practice-range",
        number: "06",
        title: "Практический контур и киберполигон",
        summary:
          "Планируется среда для отработки сценариев защиты, мониторинга и реагирования без выдачи её за уже открытую площадку.",
        description:
          "Направление связывает сервисную и образовательную части: лаборатории, учебные инциденты и разбор кейсов. Полигон и программы готовятся к запуску.",
        concepts: ["киберполигон", "лаборатории", "сценарии", "практика"],
      },
    ],
  },

  about: {
    id: "about",
    title: "О проекте",
    lead: "Syscore — проект центра кибербезопасности. Сейчас он готовится к запуску: на сайте нет обещаний действующего SOC, подтверждённых контрактов или готовой образовательной воронки.",
    principlesTitle: "Принципы",
    principles: [
      {
        number: "01",
        title: "Честность статуса",
        description:
          "Планируемое называется планируемым. Мы не маскируем подготовку под уже работающий коммерческий сервис.",
      },
      {
        number: "02",
        title: "Практика вместо витрины",
        description:
          "Акцент на процессах, телеметрии и навыках, а не на декоративной «хакерской» эстетике и пустых цифрах.",
      },
      {
        number: "03",
        title: "Люди рядом с технологиями",
        description:
          "Инструменты SOC и Threat Intelligence имеют смысл, только если есть специалисты, которые умеют ими пользоваться. Поэтому подготовка кадров заложена в модель центра.",
      },
    ],
  },

  companyProfile: {
    title: "COMPANY / IDENTITY",
    subtitle: "SYSTEM SECURITY CORE",
    label: "SYSCORE",
    location: "KAZAKHSTAN / ALMATY",
    field: "CYBERSECURITY",
  },

  education: {
    id: "education",
    title: "Образование",
    description:
      "Образовательный контур планируется как практическая подготовка специалистов, а не как уже открытый набор на курсы. Программы, форматы и сроки будут опубликованы после запуска.",
    items: [
      {
        number: "01",
        title: "Базовые компетенции",
        description:
          "Планируются вводные модули по основам информационной безопасности, работе с событиями и культуре безопасной разработки и эксплуатации.",
      },
      {
        number: "02",
        title: "Операционные навыки",
        description:
          "Планируется отработка мониторинга, разбора инцидентов, работы с SIEM и индикаторами угроз на учебных сценариях.",
      },
      {
        number: "03",
        title: "Связка с практикой центра",
        description:
          "Планируется, чтобы образовательные треки опирались на те же процессы и понятия, что и сервисные направления, без выдачи обучения за трудоустройство.",
      },
    ],
    cooperation: {
      title: "Образовательное сотрудничество",
      text: "Предусматривается сотрудничество с Международным университетом информационных технологий (МУИТ) в образовательной части проекта. Формат, сроки и юридический статус соглашения будут уточнены отдельно. Это не заявление об официальном партнёрстве и не использование бренда университета как действующего подтверждения.",
    },
  },

  contacts: {
    id: "contacts",
    title: "Контакты",
    status: "Проект готовится к запуску",
    headline: "SECURITY STARTS AT THE CORE.",
    description:
      "Свяжитесь с ТОО «SYSCORE» по подтверждённому телефону. Email и приём обращений через форму пока не публикуются.",
    formNotice:
      "Форма обратной связи будет активна после запуска. Сейчас поля недоступны, данные никуда не отправляются.",
    form: {
      nameLabel: "Имя",
      namePlaceholder: "Будет доступно после запуска",
      emailLabel: "Email",
      emailPlaceholder: "Будет доступно после запуска",
      messageLabel: "Сообщение",
      messagePlaceholder: "Форма пока не принимает обращения",
      submitLabel: "Отправить",
      disabledLabel: "Недоступно до запуска",
    },
  },

  legalPages: {
    privacy: {
      path: "/privacy",
      title: "Политика конфиденциальности",
      updated:
        "Черновик для разработки сайта. Финальный текст должен согласовать юрист заказчика до запуска.",
      sections: [
        {
          title: "1. Общие положения",
          body: "Этот документ — структурная заглушка. Он описывает, какие разделы появятся в политике, но не является утверждённой политикой оператора и не заменяет юридическую экспертизу.",
        },
        {
          title: "2. Какие данные могут собираться",
          body: "После запуска здесь будет перечень категорий данных (например, данные, которые человек сам отправит через форму: имя, контакт, текст обращения; технические данные журналов сайта). Сейчас форма отключена, обращения не принимаются.",
        },
        {
          title: "3. Цели обработки",
          body: "После запуска цели будут сформулированы ограниченно: ответ на обращение, обеспечение работы сайта, выполнение требований закона. Маркетинговые цели не предполагаются без отдельного согласия.",
        },
        {
          title: "4. Как защищаются данные",
          body: "После запуска здесь опишут организационные и технические меры: ограничение доступа, защищённая передача, хранение только необходимого минимума. Детали утверждает оператор совместно с юристом.",
        },
        {
          title: "5. Передача третьим лицам",
          body: "Раздел зарезервирован под перечень обработчиков (хостинг, почтовый шлюз), если они появятся. Сейчас персональные данные через сайт не собираются.",
        },
        {
          title: "6. Срок хранения",
          body: "Сроки хранения будут указаны после утверждения политики. До запуска обращения через сайт не принимаются и не хранятся.",
        },
        {
          title: "7. Контакты оператора",
          body: "Реквизиты оператора, адрес и контакт для запросов появятся после открытия центра. В черновике они намеренно не заполняются.",
        },
      ],
    },
    personalData: {
      path: "/personal-data",
      title: "Политика обработки персональных данных",
      updated:
        "Черновик для разработки сайта. Финальный текст должен согласовать юрист заказчика до запуска.",
      sections: [
        {
          title: "1. Правовые основания",
          body: "Структурная заглушка. После запуска здесь укажут основания обработки в соответствии с законодательством Республики Казахстан о персональных данных.",
        },
        {
          title: "2. Категории субъектов и данных",
          body: "Планируются данные лиц, которые сами направят обращение через сайт (когда форма будет включена). Специальные категории данных сайт собирать не предполагает.",
        },
        {
          title: "3. Цели и объём обработки",
          body: "Обработка должна быть минимально необходимой для ответа на обращение и обеспечения работы сайта. Избыточный сбор не планируется.",
        },
        {
          title: "4. Права субъекта",
          body: "После запуска субъект сможет запросить сведения об обработке, уточнение, блокирование или удаление данных — в порядке, который утвердит юридическая редакция политики.",
        },
        {
          title: "5. Как запросить или удалить данные",
          body: "Канал запросов будет опубликован вместе с контактами центра. До запуска отдельного адреса для запросов нет — чтобы не оставлять вымышленных реквизитов.",
        },
        {
          title: "6. Меры защиты",
          body: "Раздел зарезервирован под описание мер защиты персональных данных. Технические заголовки безопасности сайта не заменяют эту политику.",
        },
        {
          title: "7. Изменение документа",
          body: "Утверждённая версия появится до реального запуска. Черновик на сайте нельзя цитировать как действующий локальный акт.",
        },
      ],
    },
  },

  footer: {
    copyright: "ТОО «SYSCORE» · BIN 260940014470 · Almaty, Kazakhstan",
    legalLinks: [
      { href: "/privacy", label: "Политика конфиденциальности" },
      {
        href: "/personal-data",
        label: "Политика обработки персональных данных",
      },
    ],
  },

  legalNotices: {
    plannedServices:
      "Все сервисные направления на сайте — планируемые услуги. Они не являются офертой и не подтверждают, что центр уже оказывает эти услуги.",
    launchStatus: "Проект готовится к запуску.",
    noContacts:
      "Подтверждённые регистрационные данные и телефон ТОО «SYSCORE» опубликованы в блоке контактов. Email не добавляется до подтверждения рабочего адреса.",
    noPartnershipClaims:
      "Нельзя называть организации партнёрами или официальными партнёрами без подтверждённого соглашения.",
    noSocialProof:
      "Нельзя добавлять отзывы, статистику, награды, сертификаты и вымышленные кейсы.",
    lawyerReview:
      "Юридические тексты на /privacy и /personal-data — структурные заглушки. Перед запуском их должен согласовать юрист заказчика.",
    allowedPhrases: [
      "планируется",
      "планируемые услуги",
      "проект готовится к запуску",
      "предусматривается сотрудничество",
    ],
    forbiddenPhrases: [
      "официальный партнёр",
      "партнёр МУИТ",
      "уже работаем",
      "N+ клиентов",
      "примеры телефонов и email",
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
export type NavItem = (typeof siteContent.nav)[number];
export type DirectionItem = (typeof siteContent.directions.items)[number];
