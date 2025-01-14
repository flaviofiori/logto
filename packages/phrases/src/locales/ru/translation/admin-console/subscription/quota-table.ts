const quota_table = {
  quota: {
    title: 'Основы',
    base_price: 'Базовая цена',
    mau_limit: 'Лимит MAU',
    included_tokens: 'Включенные токены',
  },
  application: {
    title: 'Приложения',
    total: 'Всего приложений',
    m2m: 'Приложения "машина-машина"',
  },
  resource: {
    title: 'Ресурсы API',
    resource_count: 'Количество ресурсов',
    scopes_per_resource: 'Разрешения на ресурс',
  },
  branding: {
    title: 'Интерфейс и брендинг',
    custom_domain: 'Пользовательский домен',
    custom_css: 'Пользовательский CSS',
    app_logo_and_favicon: 'Логотип и фавикон приложения',
    dark_mode: 'Темный режим',
    i18n: 'Интернационализация',
  },
  user_authn: {
    title: 'Проверка подлинности пользователя',
    omni_sign_in: 'Многочисленные входы',
    password: 'Пароль',
    passwordless: 'Без пароля - Электронная почта и SMS',
    email_connector: 'Подключение электронной почты',
    sms_connector: 'Подключение SMS',
    social_connectors: 'Социальные подключения',
    standard_connectors: 'Стандартные подключения',
    built_in_email_connector: 'Встроенное подключение электронной почты',
    mfa: 'Многофакторная аутентификация',
    sso: 'Единый вход в корпоративные системы',
  },
  user_management: {
    title: 'Управление пользователями',
    user_management: 'Управление пользователями',
    roles: 'Роли',
    machine_to_machine_roles: 'Роли машины-машины',
    scopes_per_role: 'Разрешения на роль',
  },
  audit_logs: {
    title: 'Аудит журналов',
    retention: 'Сохранение',
  },
  hooks: {
    title: 'Вебхуки',
    hooks: 'Вебхуки',
  },
  organizations: {
    title: 'Организация',
    organizations: 'Организации',
    monthly_active_organization: 'Активная организация в месяц',
    allowed_users_per_org: 'Разрешенные пользователи в организации',
    invitation: 'Приглашение',
    org_roles: 'Роли организации',
    org_permissions: 'Права организации',
    just_in_time_provisioning: 'Пакетная настройка по запросу',
  },
  support: {
    title: 'Соблюдение и поддержка',
    community: 'Сообщество',
    customer_ticket: 'Техническая поддержка',
    premium: 'Премиум',
    email_ticket_support: 'Поддержка по электронной почте',
    soc2_report: 'Отчет SOC2',
    hipaa_or_baa_report: 'Отчет HIPAA/BAA',
  },
  unlimited: 'Неограниченно',
  contact: 'Связаться',
  monthly_price: '${{value, number}}/мес.',
  days_one: '{{count, number}} день',
  days_other: '{{count, number}} дней',
  add_on: 'Дополнительно',
  tier: 'Уровень{{value, number}}: ',
  paid_token_limit_tip:
    'Logto будет взимать плату за функции, выходящие за пределы вашего квоты. Вы можете использовать его бесплатно до начала начисления сборов, примерно со второго квартала 2024 года. Если вам нужны дополнительные токены, свяжитесь с нами. По умолчанию мы выставляем счет в $80 в месяц за каждый миллион токенов.',
  paid_quota_limit_tip:
    'Logto добавит плату за функции, выходящие за пределы вашего лимита квоты. Вы можете использовать его бесплатно до начала взимания платы, примерно с 2 квартала 2024 года.',
  paid_add_on_feature_tip:
    'Это дополнительная функция. Вы можете использовать ее бесплатно до начала взимания платы, примерно с 2 квартала 2024 года.',
  million: '{{value, number}} миллионов',
  mau_tip:
    'MAU (месячно активные пользователи) означает количество уникальных пользователей, которые обменивались как минимум одним токеном с Logto в биллинговом цикле.',
  tokens_tip:
    'Все виды токенов, выпущенных Logto, включая токены доступа, токены обновления и т. д.',
  mao_tip:
    'MAO (ежемесячно активная организация) означает количество уникальных организаций, у которых есть хотя бы один MAU (ежемесячно активный пользователь) в биллинговом цикле.',
  included: 'включено{{value, number}}',
  included_mao: '{{value, number}} MAO включено',
  extra_quota_price: 'Затем ${{value, number}} в месяц / за каждый после',
  per_month_each: '${{value, number}} в месяц / за каждый',
  extra_mao_price: 'Затем ${{value, number}} за MAO',
  per_month: '${{value, number}} в месяц',
};

export default Object.freeze(quota_table);
