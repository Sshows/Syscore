# Проверка SYSCORE, 04.10.2026

## Выполнено

- Install: зависимости установлены, lockfile обновлён; sharp объявлен для воспроизводимой подготовки превью.
- Lint / TypeScript / production build успешны; standalone start действительно запущен.
- npm test: strict validation, control-character sanitization, no extra file/password fields, service success / limiter / invalid captcha / wrong action / wrong hostname, no captcha token in delivery, empty URL fallback, основные контрастные пары и наличие всех 11 PDF / WebP.
- npm run test:smoke: 9 страниц, sitemap / robots, health / 404, уникальный CSP nonce, DENY / nosniff, OG PNG, все 11 оригиналов PDF и все 11 превью, Origin / JSON / body limit / consent / honeypot, closed intake503, disabled scanner503.
- SHA256: все 11 опубликованных PDF совпадают с файлами из пользовательской Downloads; оригиналы не отредактированы.
- Browser: 63 комбинации (9 страниц × 360,390,768,1024,1440,1920,2560px), ни одного blank / duplicate H1 / horizontal overflow. Console error/warn не обнаружены.
- Вручную в браузере: mobile menu, Esc/возврат фокуса, переход к основателю, фильтр Security, настоящая картинка Ethical Hacking, увеличение125%, следующий документ, переключение интерактивного слоя на OSINT.
- Lighthouse13.5, local production, mobile simulated: главная Performance97 / Accessibility100 / BestPractices100 / SEO100; CLS0, FCP0.8s, LCP2.5s, TBT30ms. Страница основателя:90 /100 /100 /100, CLS0. Это измерение на данной машине и режиме, не гарантия таких же результатов у каждого посетителя.
- Production dependency audit: 0 vulnerabilities. Полный audit:5 high в dev-only цепочке braces/micromatch/fast-glob/Next ESLint; совместимое исправление нужно проверить позднее. Не применялся несовместимый downgrade.

## Границы проверки

Внешняя доставка, Redis и Turnstile в live-mode не подключены. Unit-тесты сервиса используют локальные mock-ответы, а не отправку настоящих обращений. Нельзя заявлять готовность live-form до настройки secrets / endpoint и юридического утверждения. Телефон / WhatsApp — обычные подтверждённые ссылки; тестовый звонок/сообщение не отправлялись.

Reduced motion реализован в CSS, Motion и Lenis guards. Физический TV / пульт, screen-reader и длительный нагрузочный/пенетрационный тест не проводились. Lighthouse Accessibility100 не является сертификатом полной WCAG AA. EN / KZ отсутствуют сознательно, без фиктивного переключателя.

## TODO владельца

1. Портрет основателя с разрешением на публикацию.
2. Названия, годы и документы государственных наград.
3. Согласованная биография / периоды службы.
4. Исходные syscore-logo-dark-bg.svg, syscore-logo-light-bg.svg, syscore-mark.svg, syscore-app-icon.svg: предоставлен только PNG; текущий mark — производная интерпретация.
5. Переводы EN / KZ, в том числе проверка расширенных казахских букв.
6. Реальный канал доставки / университетский gateway, ключи Redis / Turnstile / Telegram или webhook, утверждение целей / хранение / privacy-текстов.
7. Домены / DNS / серверы — отдельная инфраструктурная настройка; не приобретены и не подключены.

Документы основателя предоставлены владельцем; публикация разрешена им явно. Не заявляются независимая проверка подлинности, CEH, сертификация компании или партнёрство с учебными организациями.
