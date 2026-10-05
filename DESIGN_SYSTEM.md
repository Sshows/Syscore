# SYSCORE — система интерфейса

Спецификация реализации для воссоздания в Figma. Основной режим — dark; не создавался отдельный внешний Figma-файл. Брендовая основа — предоставленный PNG. Производный SVG-знак не заменяет отсутствующие исходные векторные файлы.

## Принцип

Цифровые следы → контекст → человек → связь. Не имитация SOC dashboard. Декоративные точки и линии не являются реальными метриками. На главной пять разнородных композиций: hero, направления с evidence-art, основатель с типографической PhD-плоскостью без скана, аудитории / переход к будущему полигону, контактный CTA.

## Токены

| Роль         | Значение                  | Применение                                 |
| ------------ | ------------------------- | ------------------------------------------ |
| ink          | #0A1020                   | фон                                        |
| surface      | #101A2D                   | спокойная плоскость                        |
| surface-high | #17243B                   | hover / подложка                           |
| ice          | #EAF2FF                   | основной текст                             |
| steel        | #5B7BA6 / #7C95BB         | линии, диаграммы, материалы                |
| muted        | #A6B7D0                   | вторичный читаемый текст                   |
| amber        | #FFB224                   | CTA, фокус, небольшие сигналы              |
| amber-dark   | #E8960C                   | грань ядра, не мелкий текст на тёмном фоне |
| border       | #2B3B55                   | разделители                                |
| ease         | cubic-bezier(.22,1,.36,1) | движение                                   |

Старое Tailwind-имя mint оставлено только как alias к amber для неиспользуемых компонентов; зелёного акцента в новом интерфейсе нет. Оригиналы сертификатов и их изображения не публикуются.

Проверенные контрастные пары: ice/ink 16.83:1, muted/surface-high 7.62:1, amber/ink 10.51:1. Steel с пониженной непрозрачностью — только декор. Не использовать как мелкий текст. Не заявлять полную WCAG-сертификацию на основании одного автоматического теста.

## Шрифты

Unbounded Variable 200–900: геометрические заголовки, 500. Manrope Variable 200–800: текст, 400; CTA 700. Локальные Latin / Cyrillic WOFF2 через next/font, preload, короткий block-period, без Google Fonts запросов. Лицензии OFL в app/fonts. Кириллица реально используется; расширенный казахский алфавит и переводы проверяются при запуске KZ.

| Элемент    | Шкала                                           |
| ---------- | ----------------------------------------------- |
| hero H1    | clamp(34px,4.5vw,76px), большие экраны до 112px |
| H2         | clamp(28px,3.1vw,48px)                          |
| H3         | clamp(20px,1.7vw,26px)                          |
| body       | 16px / 1.6; на больших экранах 20px             |
| secondary  | 14–16px / 1.6                                   |
| fine print | 12px / 1.8, повышается на больших экранах       |
| max line   | 72ch                                            |

Без декоративного tracked-out monospace. Небольшой eyebrow читаемый, sentence-case, короткая amber-линия. Нумерация только счётчика документов, не произвольный номер услуги.

## Сетка и форма

База 8pt: 8,16,24,32,40,48,64,80,88,104,112. Оптические исключения допустимы (12px для подписи/границ). Shell 1360px, 40px поля; tablet 24px, mobile 20px; ≥1920 shell 1760px, 80px поля. Fluid grid, minmax(0,1fr), длинный текст переносится. Без horizontal scroll.

Радиусы: кнопки 8px, документы 8px, плоскости 12px с одной скошенной/крупной угловой формой 48/80px, nav indicator 24px. Тени только у документа и активного CTA. Glass: локальная графитовая подложка, не blur на каждом разделе.

360/390: одноколоночный hero, большой CTA, ядро ниже текста, меню fullscreen. 768: одна колонка ключевых композиций, две колонки галереи. 1024: два столбца основных секций. 1440+: desktop navigation. 1920/2560: увеличенная шкала, контрастный фокус, кнопки ≥60px там, где применяется desktop big UI. Физический TV/пульт требует отдельного теста; keyboard navigation не равно hardware сертификации.

## Инвентарь и состояния

- Primary button: amber/ink; hover светлее и мягкий glow; active scale .98; focus 3px amber +5px offset; disabled пониженная непрозрачность, not-allowed; busy надпись и aria-busy. Touch targets ≥48px в основном управлении.
- Secondary button: прозрачная navy-плоскость с thin border; hover surface-high; focus тот же. Text link: underline, min-height44px.
- Navigation: shared-layout indicator / spring 360, damping27; active маленький amber-сигнал; hover/focus один источник выделения; aria-current page. Fullscreen mobile: native dialog, focus trap, initial close-button focus, Esc и возврат фокуса.
- Direction row: большая типографика, short subtitle, divider; hover локальный отступ / плоскость, знак плюс (не четырежды одинаковая карточка).
- Founder panel: крупный угол, PhD как типографический факт с направлением / годом; без документа, его номера и фейкового портрета. На странице initials-slot с явным TODO.
- Company identity: отдельный крупный блок с mark, названием и реквизитами; не маркетинговый рейтинг / налоговый статус.
- Form: label всегда виден, input navy, border #405371, min-height48px. Error тёплый читаемый цвет + текст, не только цвет; success живой status. Пока конфигурация не полная — честная contact-плоскость, не набор disabled-полей.
- Qualifications: фильтры aria-pressed, карточки с названием / issuer / year и публичными vendor verification links; без сканов, файлов и lightbox. Плашка объясняет адресное подтверждение по согласованию с основателем.
- Cyber range: схема шести учебных узлов, информация по выбору, четыре шага сценария и три vendor-направления. Статус planned и явная маркировка объяснителя. На mobile — клавиатурно-доступная сетка узлов, не сжатая нечитаемая карта. Нет fake console / uptime / attack execution.
- Section header: h2 + короткая supporting строка или одна ссылка, не повторяющийся шаблон большой карточки.
- States: loading с role=status; error с retry; 404 с возвращением на главную.

## Движение

Hero: title-word stagger .08s, .55s, только transform без animated blur; core enter1.4s; amber-breathe5s только opacity; trace12s. Pointer-spring70/22, только mouse. Layers — доступные кнопки; меняются описание задачи, планируемый результат и CTA. Движение ядра приостанавливается вне viewport. Не создаётся видимость работающего SOC.

Liquid-переход — расширяющаяся полупрозрачная плоскость через transform / opacity, без анимированного clip-path на весь экран. Нативный курсор сохраняется, дополнительный щит декоративный; его RAF прекращается в покое и на скрытой вкладке.

Desktop smooth scroll — Lenis lerp .1, dynamic import только fine pointer и non-reduced. Cursor lerp .2, passive listeners / ref, без React setState на каждом кадре; небольшой shield glyph вместо слова «Открыть», магнит8% от pointer displacement. Native cursor остаётся. Cursor-rAF останавливается в покое / скрытой вкладке. Preference / pointer changes корректно пересоздают или убирают effects.

Page transition — неблокирующая overlay clip-path .65s, pointer-events none. Mobile menu morph .45s. Reduced motion: никакого smooth scroll, cursor, breathing или декоративного entry; содержимое и все действия доступны. Не обещать 60fps на каждом устройстве без измерения.

## Бренд и доверие

ТОО «SYSCORE», БИН260940014470, ОКЭД62092, 11.09.2026, Алматы; реквизиты и телефон из данных владельца. Показывается квалификация, не полные личные документы. PhD не равняется сертификации SYSCORE; курс Ethical Hacking не называется CEH. Нет наград без подтверждения. Аудитории МВД/юристы/бизнес — не клиентские логотипы. Cisco / Fortinet / MikroTik — направления будущей независимой подготовки, не подтверждённые партнёры.

## Источники

- [Lenis](https://github.com/darkroomengineering/lenis), MIT — smooth scroll.
- [Motion layout animations](https://motion.dev/docs/react-layout-animations), MIT library — shared-layout navigation.
- [Motion accessibility](https://motion.dev/docs/react-accessibility) — reduced-motion contract.
- [Motion performance](https://motion.dev/docs/performance) — transform / opacity вместо постоянно меняющегося blur и геометрии.
- [Motion Primitives](https://github.com/ibelick/motion-primitives) — open-source reference для небольших магнитных и shared-layout взаимодействий; дополнительная UI-библиотека не установлена, чужой дизайн не скопирован.
- [Cloudflare Siteverify](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/) — серверная валидация, а не доверие одному виджету.
- Manrope / Unbounded: OFL, локальные license-файлы. Дизайн и SVG scenes написаны для этого проекта, не скопированы с чужого сайта.
