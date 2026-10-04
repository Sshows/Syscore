# SYSCORE

Русскоязычный сайт ТОО «SYSCORE»: Next.js 16 App Router, React 19, TypeScript, Tailwind 4. Фирменная палитра navy / ice / steel / amber, Unbounded + Manrope, Motion и Lenis. Девять содержательных страниц, настоящие документы основателя, серверный модуль обращений.

## Запуск

Node.js 22+ и npm. Команды выполняются из корня репозитория.

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm run start
```

`start` запускает standalone-сервер и копирует в него public / static; не использует несовместимый с standalone `next start`. По умолчанию: http://127.0.0.1:3000. Перед повторным build остановите локальный start: Windows блокирует рабочую папку запущенного процесса. На своём сервере задайте PORT и HOSTNAME=0.0.0.0, используйте HTTPS reverse proxy и менеджер процессов. Не выставляйте Node напрямую в интернет.

`npm run test:smoke` требует запущенный production-сервер. TEST_BASE_URL задаёт адрес проверяемой сборки, TEST_ORIGIN — разрешённый Origin формы (по умолчанию канонический production URL). TEST_DELIVERY_DISABLED=true проверяет закрытую форму. Не запускайте проверки отправки на подключённом production без отдельного согласования.

## Контент и документы

- `content/site-content.ts`: компания, тексты, навигация и статусы. Новый интерфейс использует redesign; старые экспортируемые данные оставлены для совместимости неиспользуемых старых компонентов.
- `content/certificates.ts`: 11 настоящих документов — диплом и 10 сертификатов, названия, организация, год и ссылки проверки. Это личная квалификация основателя, не сертификация компании.
- `public/certificates/`: оригинальные PDF без изменения байтов, WebP-превью первой страницы. Пользователь явно разрешил публикацию этих документов.
- `content/certificate-blurs.ts`: маленькие производные превью, не подменяющие оригиналы.
- `scripts/prepare-certificates.ps1 -SourceDirectory <папка-PDF>` и `scripts/compress-certificates.mjs`: необязательная локальная подготовка из корня репозитория. Первому нужен Poppler / pdftoppm; для второго объявлен sharp. В Vercel эта подготовка НЕ запускается — готовые публичные файлы в Git.
- `public/brand/`: исходный PNG логотипа, производный знак и app icon. Нет утверждения, что производный SVG — оригинальный файл бренда.
- `content/i18n.ts`: контракт ru/en/kk. Переводы EN/KZ ещё не подготовлены; неработающий переключатель языков не показывается.
- `DESIGN_SYSTEM.md`: спецификация интерфейса для переноса в Figma.

Никакие образовательные организации, изображённые на документах, не объявляются партнёрами SYSCORE. Все услуги и программы обозначены как планируемые. Нет клиентов, отзывов, статистики, действующего SOC или вымышленного email.

## Приём обращений

Поток: UI → strict Zod schema → Origin / body limit → shared limiter → Turnstile Siteverify → service → LeadAdapter → подтверждение доставки.

По умолчанию форма закрыта, доступны телефон и WhatsApp. Не включайте LEAD_INTAKE_APPROVED до утверждения оператором целей, обработчиков, места и сроков хранения, условий обработки данных и теста реальной доставки.

Переменные перечислены в `.env.example`:

- NEXT_PUBLIC_SITE_URL: действительный канонический URL. Пустая / некорректная переменная безопасно заменяется на текущий production URL.
- NEXT_PUBLIC_TURNSTILE_SITE_KEY: публичный ключ виджета; это единственный ключ, передаваемый браузеру.
- TURNSTILE_SECRET_KEY, TURNSTILE_EXPECTED_HOSTNAME: серверная проверка токена, hostname и action=contact.
- RATE_LIMIT_REDIS_URL / TOKEN / SALT: HTTPS REST Redis с EVAL; 5 обращений на временный HMAC сетевого адреса за 10 минут. Не используется ненадёжный process-local limiter.
- LEAD_DELIVERY=telegram: TELEGRAM_BOT_TOKEN / CHAT_ID.
- LEAD_DELIVERY=webhook: LEAD_WEBHOOK_URL / TOKEN, для университетского, email- или database-шлюза. JSON POST `{id,lead}`, заголовок Idempotency-Key, ответ `{accepted:true}`. Университетский сервер ещё НЕ подключён.
- TRUST_PROXY=true: только self-host за доверенным proxy, который перезаписывает x-forwarded-for. На Vercel используется перезаписываемый платформой x-vercel-forwarded-for.

Чтобы добавить прямой email/database адаптер, реализуйте `LeadAdapter.deliver` в `lib/leads/adapters.ts` и расширьте серверную конфигурацию. UI менять не требуется. Секреты держите в env-хранилище хостинга, не в Git или NEXT_PUBLIC.

API-клиент: HTTPS, запрет redirects, таймауты, ограниченные retries/backoff только для безопасной идемпотентной операции Siteverify. Доставка POST не повторяется вслепую. Логи содержат requestId / outcome / error code, без обращения, контактов, IP, токена и URL. Файлы, password и любые лишние поля отвергаются strict-схемой. `/api/health` подтверждает доступность приложения и конфигурации, не раскрывает секреты и не утверждает работоспособность внешних сервисов.

## Безопасность и доступность

HTML получает уникальный CSP nonce в `proxy.ts`, динамический рендеринг и private/no-store: nonce не должен попадать в общий CDN cache. В script-src нет unsafe-inline. style-src-attr допускает inline-стили изображений / Motion; это явное ограниченное исключение, не разрешение inline JavaScript. Cloudflare script загружается только при реально настроенной форме. Нет сторонней аналитики.

Заголовки HSTS, nosniff, DENY, Referrer-Policy, Permissions-Policy. Никакой публичной активной проверки чужих сайтов: старый scanner endpoint закрыт HTTP 503. Native dialog обеспечивает trap / Esc / возврат фокуса. Reduced motion отключает декоративные движения и smooth scroll. Системный курсор не скрывается, на touch эффекты курсора не включаются.

Аудит от 04.10.2026: production dependencies — 0 уязвимостей. Полный audit: 5 high в одной dev-only цепочке braces → micromatch → fast-glob → eslint-config-next. GHSA-vfj7-8cjw-p6xm; принудительный fix предлагает несовместимое понижение Next ESLint до 14.x. Не применялся; обновить инструменты при выходе совместимого исправления. Это НЕ результат «полный audit чист».

## Vercel и свой сервер

GitHub `Sshows/Syscore`, ветка main, build command `npm run build`. Git integration автоматически создаёт deployment после push. Не создавайте второй проект в Lovable / Supabase без необходимости.

В Vercel задайте реальный NEXT_PUBLIC_SITE_URL для Production / Preview и нужные серверные секреты отдельно. Форму держите закрытой, пока всё не проверено. Next nonce требует SSR; API no-store. Новый домен приобретается и DNS / сертификаты настраиваются отдельно владельцем; домен не куплен этим кодом.

Проверить /, /services, /audiences, /education, /company, /founder, /contact, /privacy, /personal-data, /api/health, /sitemap.xml, /robots.txt, /opengraph-image и публичные PDF. CI запускает ci, lint, typecheck, build и production audit.

## Оставшиеся данные от владельца

TODO: настоящий портрет; названия и документы государственных наград; согласованная биография / периоды службы; четыре исходных SVG из ТЗ; утверждённые переводы; юридические условия и реальные секреты / endpoint доставки. Видимые TODO основателя не выдаются за реальные достижения.
