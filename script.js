const views = {
  dashboard: "Главная",
  assistant: "AI-ассистент",
  journey: "Маршрут адаптации",
  testing: "Тестирование",
  employees: "Сотрудники",
  employeeCard: "Карточка сотрудника",
  knowledge: "База знаний",
  analytics: "Аналитика",
  settings: "Настройки",
};

const roleConfig = {
  employee: {
    id: "employee",
    label: "Новый сотрудник",
    shortLabel: "Сотрудник",
    userName: "Анна Волкова",
    initials: "АВ",
    title: "Менеджер по работе с клиентами",
    company: "АО «НоваТех»",
    accent: "Адаптация: 18-й день",
    description: "Персональный маршрут, AI-помощник и тесты для выхода на рабочую продуктивность.",
    menu: ["dashboard", "assistant", "journey", "testing", "settings"],
    summary: "Текущий маршрут синхронизирован с HR и наставником",
  },
  mentor: {
    id: "mentor",
    label: "Наставник",
    shortLabel: "Наставник",
    userName: "Екатерина Смирнова",
    initials: "ЕС",
    title: "Руководитель программы онбординга",
    company: "АО «НоваТех»",
    accent: "В сопровождении: 24 сотрудника",
    description: "Управление прогрессом команды, рисками и качеством обучения новых сотрудников.",
    menu: ["dashboard", "employees", "analytics", "settings"],
    summary: "Система выявляет сотрудников, которым нужен дополнительный разбор",
  },
  admin: {
    id: "admin",
    label: "Администратор",
    shortLabel: "Администратор",
    userName: "Алексей Петров",
    initials: "АП",
    title: "HR Tech администратор",
    company: "АО «НоваТех»",
    accent: "База знаний: 124 документа",
    description: "Управление корпоративной базой знаний, обновлениями документов и качеством ответов AI.",
    menu: ["dashboard", "knowledge", "analytics", "settings"],
    summary: "Последнее обновление базы знаний прошло без ошибок",
  },
};

const roleCards = [
  {
    id: "employee",
    title: "Новый сотрудник",
    description: "Видит персональный дашборд, маршрут адаптации, тесты и чат с AI-ассистентом.",
    features: ["План адаптации по этапам", "AI-чат по внутренним регламентам", "Тестирование и рекомендации"],
  },
  {
    id: "mentor",
    title: "Наставник",
    description: "Контролирует прогресс, видит зону риска и получает рекомендации по каждому сотруднику.",
    features: ["Таблица сотрудников и статусы", "История вопросов к AI", "Карточка сотрудника и действия"],
  },
  {
    id: "admin",
    title: "Администратор",
    description: "Загружает документы компании, обновляет базу знаний и анализирует качество онбординга.",
    features: ["Загрузка и обработка документов", "Статусы индексации", "Корпоративная аналитика"],
  },
];

const employeeTasks = [
  {
    title: "Изучить регламент общения с клиентами",
    subtitle: "Документ №4 · Стандарты сервиса",
    status: "progress",
    statusLabel: "В процессе",
  },
  {
    title: "Пройти тест по внутренним инструментам",
    subtitle: "Тест на 5 вопросов · до 17:00",
    status: "overdue",
    statusLabel: "Просрочено",
  },
  {
    title: "Задать вопрос AI-ассистенту при необходимости",
    subtitle: "Есть сохранённые ответы по CRM и отпускам",
    status: "done",
    statusLabel: "Выполнено",
  },
];

const journeySteps = [
  {
    id: "day1",
    title: "День 1",
    subtitle: "Знакомство с компанией",
    description: "Оформление доступа, знакомство с командой, обзор организационной структуры и ключевых сервисов.",
    status: "done",
    statusLabel: "Завершено",
    progress: 100,
    deadline: "10 марта",
    owner: "HR-специалист",
    outcome: "Сотрудник получил доступы и прошёл вводную сессию.",
    checklist: ["Оформлены доступы в CRM и почту", "Подписаны внутренние регламенты", "Проведено знакомство с командой"],
  },
  {
    id: "week1",
    title: "Неделя 1",
    subtitle: "Изучение внутренних процессов",
    description: "Изучение CRM, стандартов сервиса, сценариев эскалации и структуры клиентских обращений.",
    status: "progress",
    statusLabel: "В процессе",
    progress: 68,
    deadline: "18 марта",
    owner: "Наставник и AI-ассистент",
    outcome: "Сотрудник должен уверенно ориентироваться в регламентах и базовых процессах.",
    checklist: ["Изучить регламент общения с клиентами", "Разобрать сценарии эскалации", "Подготовиться к тесту по внутренним инструментам"],
  },
  {
    id: "week2",
    title: "Неделя 2",
    subtitle: "Работа с клиентскими кейсами",
    description: "Разбор типовых кейсов, самостоятельная фиксация обращений и практика ответов в CRM.",
    status: "waiting",
    statusLabel: "Ожидает",
    progress: 12,
    deadline: "25 марта",
    owner: "Наставник",
    outcome: "Сотрудник начинает работать с типовыми обращениями под контролем наставника.",
    checklist: ["Пройти 3 практических кейса", "Заполнить шаблон ответа", "Получить обратную связь по качеству коммуникации"],
  },
  {
    id: "review",
    title: "Первая проверка знаний",
    subtitle: "Оценка готовности к самостоятельной работе",
    description: "Промежуточный тест и сверка прогресса с ожиданиями роли.",
    status: "waiting",
    statusLabel: "Ожидает",
    progress: 0,
    deadline: "27 марта",
    owner: "Наставник",
    outcome: "Определяется готовность к следующему этапу и зоны для дообучения.",
    checklist: ["Пройти тестирование", "Получить разбор ошибок", "Согласовать план дообучения"],
  },
  {
    id: "finish",
    title: "Завершение адаптации",
    subtitle: "Выход на плановую нагрузку",
    description: "Финальная оценка, передача на стандартный ритм работы и закрытие плана адаптации.",
    status: "waiting",
    statusLabel: "Ожидает",
    progress: 0,
    deadline: "31 марта",
    owner: "Руководитель отдела",
    outcome: "Сотрудник закрывает маршрут адаптации и переходит в штатный процесс.",
    checklist: ["Подтвердить выполнение всех этапов", "Пройти итоговую встречу", "Закрыть план адаптации в системе"],
  },
];

const employeeDirectory = {
  anna: {
    id: "anna",
    name: "Анна Волкова",
    initials: "АВ",
    title: "Менеджер по работе с клиентами",
    department: "Команда клиентского сервиса",
    progress: 68,
    stage: "Неделя 1",
    aiQuestions: 12,
    testScore: "4/5",
    testStatus: "В процессе",
    risk: "good",
    riskLabel: "Всё хорошо",
    completedStages: ["День 1", "Знакомство с командой", "Оформление доступов"],
    tests: [
      { name: "Внутренние инструменты", result: "4/5", note: "Хороший результат" },
      { name: "Регламенты сервиса", result: "3/5", note: "Нужен повтор по эскалациям" },
    ],
    topics: [
      { label: "CRM", count: 5 },
      { label: "Регламент общения", count: 4 },
      { label: "Отпуска", count: 3 },
    ],
    recommendations: [
      "Сотрудник часто задаёт вопросы по CRM — рекомендуется дополнительный разбор.",
      "Тест по регламентам пройден ниже среднего — желательно повторное обучение.",
    ],
    history: [
      { time: "Сегодня, 11:20", topic: "Регламент общения", summary: "Запрос о стандартах ответа клиенту и сроках фиксации обращения." },
      { time: "Сегодня, 10:05", topic: "CRM", summary: "Вопрос о создании карточки обращения и назначении ответственного." },
      { time: "Вчера, 16:40", topic: "Отпуск", summary: "Порядок подачи заявки в HR-портале и сроки согласования." },
    ],
  },
  ilya: {
    id: "ilya",
    name: "Илья Соколов",
    initials: "ИС",
    title: "Специалист поддержки продаж",
    department: "Команда pre-sales",
    progress: 45,
    stage: "Неделя 1",
    aiQuestions: 20,
    testScore: "2/5",
    testStatus: "Требуется внимание",
    risk: "danger",
    riskLabel: "Нужна помощь",
    completedStages: ["День 1", "Доступы оформлены"],
    tests: [
      { name: "CRM и Service Desk", result: "2/5", note: "Критичные пробелы" },
      { name: "Регламенты сервиса", result: "3/5", note: "Частичные знания" },
    ],
    topics: [
      { label: "CRM", count: 8 },
      { label: "Service Desk", count: 7 },
      { label: "Эскалации", count: 5 },
    ],
    recommendations: [
      "Высокая частота вопросов по CRM — стоит провести дополнительную практику на реальных кейсах.",
      "Низкий результат теста по инструментам — нужен повторный разбор и повторное тестирование.",
    ],
    history: [
      { time: "Сегодня, 09:45", topic: "CRM", summary: "Как создать заявку и связать её с существующим клиентским кейсом." },
      { time: "Вчера, 17:10", topic: "Service Desk", summary: "Как эскалировать инцидент в IT-поддержку." },
      { time: "Вчера, 14:30", topic: "Регламенты", summary: "Какой срок ответа допустим для приоритетных клиентов." },
    ],
  },
  maria: {
    id: "maria",
    name: "Мария Белова",
    initials: "МБ",
    title: "Аккаунт-менеджер",
    department: "Команда удержания клиентов",
    progress: 82,
    stage: "Неделя 2",
    aiQuestions: 6,
    testScore: "5/5",
    testStatus: "Почти завершила адаптацию",
    risk: "good",
    riskLabel: "Всё хорошо",
    completedStages: ["День 1", "Неделя 1", "Тест по регламентам"],
    tests: [
      { name: "Внутренние инструменты", result: "5/5", note: "Отличный результат" },
      { name: "Клиентские регламенты", result: "5/5", note: "Без ошибок" },
    ],
    topics: [
      { label: "Клиентские кейсы", count: 3 },
      { label: "CRM", count: 2 },
      { label: "Отчётность", count: 1 },
    ],
    recommendations: [
      "Сотрудник готов к расширению набора кейсов под контролем наставника.",
      "Рекомендуется подключить к самостоятельной работе со стандартными запросами клиентов.",
    ],
    history: [
      { time: "Сегодня, 12:05", topic: "Клиентские кейсы", summary: "Проверка, как правильно закрывать повторное обращение." },
      { time: "Вчера, 15:00", topic: "CRM", summary: "Где посмотреть историю коммуникаций перед звонком." },
    ],
  },
};

const mentorEmployees = [
  { id: "anna", progress: 68, aiQuestions: 12, testScore: "4/5", state: "В процессе", risk: "good", riskLabel: "Всё хорошо" },
  { id: "ilya", progress: 45, aiQuestions: 20, testScore: "2/5", state: "Требуется внимание", risk: "danger", riskLabel: "Нужна помощь" },
  { id: "maria", progress: 82, aiQuestions: 6, testScore: "5/5", state: "Почти завершила адаптацию", risk: "warn", riskLabel: "Риск" },
];

const knowledgeBaseSeed = [
  { id: 1, name: "Регламент общения с клиентами.pdf", category: "Регламенты", format: "PDF", status: "processed", statusLabel: "Обработан" },
  { id: 2, name: "Порядок оформления отпусков.docx", category: "Инструкции", format: "DOCX", status: "processed", statusLabel: "Обработан" },
  { id: 3, name: "Инструкция по CRM.pdf", category: "Обучение", format: "PDF", status: "processing", statusLabel: "В обработке" },
  { id: 4, name: "FAQ для новых сотрудников.docx", category: "FAQ", format: "DOCX", status: "error", statusLabel: "Ошибка" },
];

const analyticsData = {
  metrics: [
    { label: "Средний прогресс адаптации", value: "63%", trend: "+8% за месяц", tone: "good" },
    { label: "Завершили онбординг", value: "42%", trend: "+5 п.п.", tone: "good" },
    { label: "Средний результат тестов", value: "4.1/5", trend: "Стабильно", tone: "warn" },
    { label: "Среднее число вопросов к AI", value: "11", trend: "Ниже на 2", tone: "good" },
  ],
  weeklyProgress: {
    labels: ["Нед. 1", "Нед. 2", "Нед. 3", "Нед. 4", "Нед. 5", "Нед. 6"],
    values: [38, 44, 49, 56, 61, 63],
  },
  popularQuestions: [
    { label: "CRM и фиксация обращений", value: 84 },
    { label: "Оформление отпусков", value: 67 },
    { label: "Регламент общения с клиентами", value: 58 },
    { label: "Эскалация инцидентов", value: 46 },
  ],
  riskEmployees: [
    { name: "Илья Соколов", note: "Низкий результат теста и высокая частота вопросов по CRM", risk: "danger" },
    { name: "Кирилл Морозов", note: "Слабый прогресс по маршруту на 2-й неделе", risk: "warn" },
    { name: "Ольга Ким", note: "Не завершён обязательный модуль по регламентам", risk: "warn" },
  ],
  segments: [
    { label: "Завершили", value: "42%", color: "#2563eb" },
    { label: "В процессе", value: "45%", color: "#60a5fa" },
    { label: "В группе риска", value: "13%", color: "#bfdbfe" },
  ],
};

const assistantSeed = [
  {
    role: "user",
    text: "Где я могу посмотреть регламент общения с клиентами?",
    time: "10:12",
  },
  {
    role: "ai",
    text: "Регламент общения с клиентами находится в разделе «Стандарты сервиса», документ №4. Основные правила: отвечать клиенту не позднее 15 минут, использовать деловой стиль, фиксировать обращения в CRM.",
    time: "10:12",
  },
  {
    role: "user",
    text: "Как оформить отпуск?",
    time: "10:14",
  },
  {
    role: "ai",
    text: "Заявка на отпуск оформляется через внутренний HR-портал не позднее чем за 14 календарных дней до предполагаемой даты. Подробная инструкция содержится в документе «Порядок оформления отпусков».",
    time: "10:14",
  },
  {
    role: "user",
    text: "К кому обращаться, если не работает CRM?",
    time: "10:17",
  },
  {
    role: "ai",
    text: "При проблемах с CRM необходимо создать заявку в IT-поддержку через Service Desk или написать ответственному специалисту отдела автоматизации.",
    time: "10:17",
  },
];

const sourceItems = [
  { title: "Стандарты сервиса · Документ №4", note: "Актуальная версия от 03.03.2026 · Используется в ответах на вопросы по клиентскому сервису." },
  { title: "Порядок оформления отпусков", note: "Обновлено HR-департаментом · SLA ответа 14 календарных дней." },
  { title: "Инструкция по CRM", note: "Версия 2.1 · Раздел интеграций и инцидентов." },
];

const testQuestions = [
  {
    id: "q1",
    question: "Где находится регламент общения с клиентами?",
    topic: "регламент",
    correct: 1,
    options: ["В разделе «Финансы», документ №2", "В разделе «Стандарты сервиса», документ №4", "В личном кабинете наставника"],
  },
  {
    id: "q2",
    question: "В какой срок нужно подать заявку на отпуск?",
    topic: "отпуск",
    correct: 0,
    options: ["Не позднее чем за 14 календарных дней", "За 3 рабочих дня", "В день начала отпуска"],
  },
  {
    id: "q3",
    question: "Что нужно сделать при проблемах с CRM?",
    topic: "crm",
    correct: 2,
    options: ["Написать в общий чат отдела", "Подождать окончания рабочего дня", "Создать заявку в IT-поддержку через Service Desk"],
  },
  {
    id: "q4",
    question: "Какой стиль общения с клиентом требуется по регламенту?",
    topic: "коммуникация",
    correct: 1,
    options: ["Свободный разговорный", "Деловой стиль с фиксацией обращения в CRM", "Только письменный без звонков"],
  },
  {
    id: "q5",
    question: "Кто помогает сотруднику пройти сложные кейсы на этапе адаптации?",
    topic: "наставник",
    correct: 2,
    options: ["Только HR-специалист", "Только IT-поддержка", "Наставник и AI-ассистент"],
  },
];

const settingsByRole = {
  employee: [
    {
      title: "Уведомления по этапам",
      description: "Напоминания о дедлайнах, тестах и новых рекомендациях AI-ассистента.",
      status: "Включено",
    },
    {
      title: "Эскалация к наставнику",
      description: "Если AI не уверен в ответе, запрос автоматически передаётся наставнику.",
      status: "Активно",
    },
    {
      title: "Профиль сотрудника",
      description: "Должность: Менеджер по работе с клиентами · Подразделение: клиентский сервис.",
      status: "Синхронизировано с HRIS",
    },
  ],
  mentor: [
    {
      title: "Сигналы риска",
      description: "Система отмечает сотрудников с низким прогрессом или слабым результатом тестов.",
      status: "Порог: 50% и ниже",
    },
    {
      title: "Ежедневная сводка",
      description: "Утром приходит отчёт по группе: статус тестов, вопросы к AI и отклонения от графика.",
      status: "09:00 по местному времени",
    },
    {
      title: "Доступ к истории AI",
      description: "Просмотр тем, по которым сотрудники чаще всего запрашивают подсказки.",
      status: "Открыт для текущей команды",
    },
  ],
  admin: [
    {
      title: "Индекс базы знаний",
      description: "Обновление происходит после загрузки документов и ручного запуска переиндексации.",
      status: "Последний запуск: сегодня, 09:42",
    },
    {
      title: "Интеграция с корпоративным хранилищем",
      description: "Подключены папки HR, клиентского сервиса и внутренних регламентов.",
      status: "3 источника активны",
    },
    {
      title: "Политика качества ответов",
      description: "AI отвечает только на основе документов со статусом «Обработан».",
      status: "Контроль включён",
    },
  ],
};

function getInitialState() {
  return {
    role: null,
    view: "start",
    selectedEmployee: "anna",
    selectedJourneyStep: "week1",
    chatMessages: assistantSeed.map((message) => ({ ...message })),
    knowledgeDocs: knowledgeBaseSeed.map((doc) => ({ ...doc })),
    sourcePanelOpen: true,
    uploadModalOpen: false,
    uploadCategory: "Обучение",
    testAnswers: {},
    lastTestResult: {
      score: 4,
      total: 5,
      level: "Хороший",
      recommendation: "Рекомендуется повторить блок по оформлению отпусков и правилам работы в CRM.",
    },
    knowledgeSyncing: false,
    toast: null,
  };
}

let state = getInitialState();
let toastTimer = null;
let processingTimer = null;
let suppressHashChange = false;

const icons = {
  logo:
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12.5 12 5l7 7.5"/><path d="M7 14.5V18a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.5"/><path d="M10 11h4"/></svg>',
  dashboard:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="4" rx="2"/><rect x="14" y="10" width="7" height="11" rx="2"/><rect x="3" y="13" width="7" height="8" rx="2"/></svg>',
  assistant:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 10h10"/><path d="M7 14h6"/><path d="M12 21c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8c0 1.84.73 3.53 1.96 4.88L4 22l3.46-1.38A10 10 0 0 0 12 21Z"/></svg>',
  journey:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 19c0-3.5 2.5-6 6-6h8"/><path d="M19 13V5"/><path d="M19 5l-3 3"/><circle cx="7" cy="19" r="2"/><circle cx="19" cy="5" r="2"/></svg>',
  testing:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11 11 13l4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.84 0 3.55.55 4.97 1.5"/><path d="M21 5v6h-6"/></svg>',
  employees:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  knowledge:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 17A2.5 2.5 0 0 0 4 19.5V6a2 2 0 0 1 2-2h14v13"/><path d="M8 7h8"/><path d="M8 11h6"/></svg>',
  analytics:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-7"/></svg>',
  settings:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.66 1.66 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06A1.66 1.66 0 0 0 15 19.4a1.66 1.66 0 0 0-1 .6 1.66 1.66 0 0 0-.4 1.1V21a2 2 0 0 1-4 0v-.09a1.66 1.66 0 0 0-.4-1.1 1.66 1.66 0 0 0-1-.6 1.66 1.66 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.66 1.66 0 0 0 4.6 15a1.66 1.66 0 0 0-.6-1 1.66 1.66 0 0 0-1.1-.4H2.8a2 2 0 0 1 0-4h.09a1.66 1.66 0 0 0 1.1-.4 1.66 1.66 0 0 0 .6-1 1.66 1.66 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.66 1.66 0 0 0 9 4.6c.39 0 .76-.14 1.05-.4a1.66 1.66 0 0 0 .55-1.2V2.8a2 2 0 1 1 4 0v.09c0 .46.2.9.55 1.2.29.26.66.4 1.05.4.49 0 .96-.19 1.31-.53l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.66 1.66 0 0 0 19.4 9c0 .39.14.76.4 1.05.3.35.74.55 1.2.55h.09a2 2 0 1 1 0 4H21c-.46 0-.9.2-1.2.55-.26.29-.4.66-.4 1.05Z"/></svg>',
  upload:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M20 16.5v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2.5"/></svg>',
  arrow:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m9 18 6-6-6-6"/></svg>',
  spark:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/></svg>',
  shield:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 7 3v5c0 5-3.4 9.3-7 10-3.6-.7-7-5-7-10V6l7-3Z"/></svg>',
  bell:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10.3 20a2 2 0 0 0 3.4 0"/></svg>',
  back:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m15 18-6-6 6-6"/><path d="M9 12h10"/></svg>',
};

function icon(name) {
  return icons[name] || icons.spark;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getDefaultView(role) {
  return roleConfig[role].menu[0];
}

function isViewAllowed(role, view) {
  if (!role || !roleConfig[role]) {
    return false;
  }

  return roleConfig[role].menu.includes(view) || (role === "mentor" && view === "employeeCard");
}

function setHash() {
  let nextHash = "start";

  if (!state.role) {
    nextHash = "start";
  } else if (state.view === "employeeCard") {
    nextHash = `${state.role}/employee-card/${state.selectedEmployee}`;
  } else {
    nextHash = `${state.role}/${state.view}`;
  }

  if (window.location.hash.replace("#", "") === nextHash) {
    return;
  }

  suppressHashChange = true;
  window.location.hash = nextHash;
  window.setTimeout(() => {
    suppressHashChange = false;
  }, 0);
}

function parseHash() {
  const raw = window.location.hash.replace("#", "");
  if (!raw || raw === "start") {
    state = getInitialState();
    return;
  }

  const [role, view, id] = raw.split("/");
  if (!roleConfig[role]) {
    state = getInitialState();
    return;
  }

  const nextState = {
    ...getInitialState(),
    role,
    view: getDefaultView(role),
  };

  if (view === "employee-card" && role === "mentor") {
    nextState.view = "employeeCard";
    nextState.selectedEmployee = employeeDirectory[id] ? id : "anna";
  } else if (isViewAllowed(role, view)) {
    nextState.view = view;
  }

  state = nextState;
}

function navigate(view, extra = {}) {
  if (!state.role && view !== "start") {
    return;
  }

  state = { ...state, ...extra, view };
  setHash();
  render();
}

function selectRole(role) {
  state = {
    ...getInitialState(),
    role,
    view: getDefaultView(role),
  };
  setHash();
  render();
}

function resetToStart() {
  state = getInitialState();
  setHash();
  render();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  state.toast = message;
  render();

  toastTimer = window.setTimeout(() => {
    state.toast = null;
    render();
  }, 2800);
}

function formatStatusClass(status) {
  switch (status) {
    case "done":
    case "processed":
      return "status-done";
    case "progress":
    case "processing":
      return "status-progress";
    case "overdue":
    case "error":
      return "status-overdue";
    default:
      return "status-waiting";
  }
}

function formatTableBadge(status) {
  switch (status) {
    case "good":
    case "processed":
      return "success";
    case "warn":
    case "processing":
      return "warning";
    case "danger":
    case "error":
      return "danger";
    default:
      return "neutral";
  }
}

function renderProgressBar(value) {
  return `
    <div class="progress-bar" aria-label="Прогресс ${value}%">
      <span style="width:${value}%"></span>
    </div>
  `;
}

function renderLanding() {
  return `
    <div class="landing-shell">
      <div class="landing-topbar">
        <div class="brand">
          <div class="brand-mark">${icon("logo")}</div>
          <div>
            <div class="brand-title">AI-платформа для адаптации новых сотрудников</div>
            <div class="brand-subtitle">Заявка СтС-619106. Крылов Роберт Николаев Николай</div>
          </div>
        </div>
        <div class="status-pill primary">Готово для демонстрации на desktop</div>
      </div>

      <section class="landing-hero">
        <div class="hero-copy">
          <div class="hero-badge">${icon("spark")} Современная платформа онбординга и обучения</div>
          <h1 class="hero-title">прототип сервиса для быстрого вывода новых сотрудников в рабочий ритм</h1>
          <p class="hero-description">
            Прототип показывает, как сотрудники, наставники и администраторы работают в одной системе:
            проходят маршрут адаптации, получают ответы на основе внутренних документов, отслеживают риски и
            обновляют корпоративную базу знаний.
          </p>
          <div class="hero-stats">
            <div class="stat-card">
              <strong>63%</strong>
              <div>Средний прогресс адаптации по компании</div>
            </div>
            <div class="stat-card">
              <strong>4.1/5</strong>
              <div>Средний балл по тестам</div>
            </div>
            <div class="stat-card">
              <strong>11</strong>
              <div>Среднее число вопросов к AI</div>
            </div>
          </div>
          <div class="hero-actions">
            <button class="primary-btn" data-action="jump-role" data-role="employee">Открыть демо сотрудника ${icon("arrow")}</button>
            <button class="ghost-btn" data-action="jump-role" data-role="mentor">Перейти к кабинету наставника</button>
          </div>
        </div>

        <div class="preview-panel">
          <div class="preview-stack">
            <div class="preview-head">
              <div>
                <div class="sidebar-heading">Сценарий демонстрации</div>
                <h2 class="section-title">Сквозной путь адаптации</h2>
              </div>
              <div class="status-pill">АО «НоваТех» · B2B SaaS</div>
            </div>
            <div class="preview-card">
              <div class="row-between">
                <div>
                  <div class="sidebar-heading">Новый сотрудник</div>
                  <strong>Анна Волкова</strong>
                  <div class="muted">Менеджер по работе с клиентами</div>
                </div>
                <div class="progress-ring" style="--value:68"><span>68%</span></div>
              </div>
            </div>
            <div class="mini-grid">
              <div class="floating-card">
                <div class="sidebar-heading">Что дальше</div>
                <strong>Неделя 2</strong>
                <div class="muted">Практика на клиентских кейсах</div>
              </div>
              <div class="floating-card">
                <div class="sidebar-heading">Статус AI</div>
                <strong>124</strong>
                <div class="muted">Документа доступны для ответов</div>
              </div>
            </div>
            <div class="preview-card">
              <div class="sidebar-heading">Ключевая ценность</div>
              <ul class="feature-list">
                <li>Персональный маршрут адаптации и наглядный прогресс</li>
                <li>AI-ассистент отвечает только на основе внутренних документов</li>
                <li>Наставник видит сигналы риска и рекомендуемые действия</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Выбор сценария</div>
            <h2 class="section-title">Выберите роль для входа в прототип</h2>
          </div>
          <div class="status-pill">Все экраны открываются внутри приложения</div>
        </div>
        <div class="role-grid">
          ${roleCards
            .map(
              (role) => `
                <article class="role-card">
                  <div class="role-icon">${icon(role.id === "mentor" ? "employees" : role.id === "admin" ? "knowledge" : "assistant")}</div>
                  <div>
                    <h3 class="role-title">${role.title}</h3>
                    <p class="role-description">${role.description}</p>
                  </div>
                  <ul class="feature-list">
                    ${role.features.map((feature) => `<li>${feature}</li>`).join("")}
                  </ul>
                  <div class="role-actions">
                    <button class="primary-btn" data-action="select-role" data-role="${role.id}">Открыть интерфейс</button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderSidebar() {
  const role = roleConfig[state.role];
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">${icon("logo")}</div>
        <div>
          <div class="brand-title">AI-платформа</div>
          <div class="brand-subtitle">${role.company}</div>
        </div>
      </div>

      <div class="profile-card">
        <div class="profile-head">
          <div class="avatar">${escapeHtml(role.initials)}</div>
          <div>
            <strong>${escapeHtml(role.userName)}</strong>
            <div class="muted">${escapeHtml(role.title)}</div>
          </div>
        </div>
        <div class="status-pill primary">${escapeHtml(role.label)}</div>
        <div class="muted">${escapeHtml(role.accent)}</div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-heading">Навигация</div>
        <div class="menu-list">
          ${role.menu
            .map((view) => {
              const label = views[view];
              const isActive = state.view === view;
              const badge = view === "analytics" ? "4" : view === "assistant" ? "AI" : view === "knowledge" ? "KB" : "";
              return `
                <button class="menu-item ${isActive ? "is-active" : ""}" data-action="navigate" data-view="${view}">
                  <span class="menu-item-main">
                    <span class="menu-icon">${icon(view)}</span>
                    <span>${label}</span>
                  </span>
                  ${badge ? `<span class="menu-badge">${badge}</span>` : ""}
                </button>
              `;
            })
            .join("")}
          ${
            state.role === "mentor" && state.view === "employeeCard"
              ? `
                <button class="menu-item is-active" data-action="navigate" data-view="employeeCard">
                  <span class="menu-item-main">
                    <span class="menu-icon">${icon("employees")}</span>
                    <span>Карточка сотрудника</span>
                  </span>
                  <span class="menu-badge">1</span>
                </button>
              `
              : ""
          }
        </div>
      </div>

      <div class="sidebar-footer">
        <div class="context-card">
          <div class="sidebar-heading">Контекст роли</div>
          <p class="panel-description">${escapeHtml(role.summary)}</p>
        </div>
        <button class="ghost-btn" data-action="back-to-start">${icon("back")} Сменить роль</button>
      </div>
    </aside>
  `;
}

function renderTopbar() {
  const role = roleConfig[state.role];
  const title = state.view === "employeeCard" ? "Карточка сотрудника" : views[state.view];
  const subtitleMap = {
    dashboard: "Операционная картина по текущему статусу",
    assistant: "Корпоративный AI-чат по внутренним документам компании",
    journey: "Пошаговый маршрут адаптации и контроль сроков",
    testing: "Оценка знаний после изучения материалов",
    employees: "Команда новых сотрудников и сигналы риска",
    employeeCard: "Детальная аналитика по сотруднику и история AI-запросов",
    knowledge: "Загрузка документов и обновление базы знаний",
    analytics: "Метрики адаптации и результативность обучения",
    settings: "Параметры роли, уведомлений и доступа",
  };

  return `
    <header class="topbar">
      <div class="topbar-title-group">
        <div class="sidebar-heading">${escapeHtml(role.company)}</div>
        <h1 class="page-title">${escapeHtml(title)}</h1>
        <div class="muted">${subtitleMap[state.view]}</div>
      </div>
      <div class="topbar-meta">
        <div class="status-pill">${escapeHtml(role.label)}</div>
        <div class="status-pill primary">${escapeHtml(role.userName)}</div>
        <div class="avatar">${escapeHtml(role.initials)}</div>
      </div>
    </header>
  `;
}

function renderEmployeeDashboard() {
  return `
    <div class="dashboard-grid">
      <section class="page-card hero-panel span-12">
        <div class="hero-panel-layout">
          <div>
            <div class="eyebrow">Добро пожаловать, Анна</div>
            <h2 class="section-title" style="font-size:2rem;">Менеджер по работе с клиентами</h2>
            <p class="hero-subtitle">
              План адаптации синхронизирован с наставником. Сегодня система рекомендует завершить работу с регламентами и подготовиться к тесту по внутренним инструментам.
            </p>
            <div class="page-actions">
              <button class="primary-btn" data-action="navigate" data-view="assistant">Открыть AI-ассистента</button>
              <button class="secondary-btn" data-action="navigate" data-view="journey">Перейти к маршруту адаптации</button>
            </div>
          </div>
          <div class="progress-ring" style="--value:68"><span>68%</span></div>
        </div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Общий прогресс адаптации</div>
        <div class="metric-value">68%</div>
        ${renderProgressBar(68)}
        <div class="metric-trend good">+14% за последние 7 дней</div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Следующий этап адаптации</div>
        <div class="metric-value">Неделя 2</div>
        <div class="muted">Работа с клиентскими кейсами и самостоятельное ведение типовых обращений.</div>
        <div class="status-pill">Старт: 19 марта</div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Ближайший тест</div>
        <div class="metric-value">Сегодня, 17:00</div>
        <div class="muted">Тест по внутренним инструментам: CRM, HR-портал и маршруты эскалации.</div>
        <button class="ghost-btn" data-action="navigate" data-view="testing">Открыть тест</button>
      </section>

      <section class="page-card span-7">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Что нужно сделать сегодня</div>
            <h3 class="section-title">Фокус на ключевых задачах</h3>
          </div>
          <div class="status-pill">3 задачи</div>
        </div>
        <ul class="task-list">
          ${employeeTasks
            .map(
              (task) => `
                <li class="task-item">
                  <div class="task-head">
                    <strong>${escapeHtml(task.title)}</strong>
                    <span class="status-pill ${formatStatusClass(task.status)}">${escapeHtml(task.statusLabel)}</span>
                  </div>
                  <div class="meta-text">${escapeHtml(task.subtitle)}</div>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>

      <section class="page-card span-5">
        <div class="sidebar-heading">Рекомендации AI-ассистента</div>
        <h3 class="section-title">На что обратить внимание</h3>
        <ul class="recommendations-list">
          <li class="task-item">
            <strong>Повторить порядок работы в CRM</strong>
            <div class="meta-text">Система заметила, что вопросы по CRM повторялись 5 раз за два дня.</div>
          </li>
          <li class="task-item">
            <strong>Уточнить правила эскалации сложных обращений</strong>
            <div class="meta-text">Это повысит результат следующего теста по внутренним процессам.</div>
          </li>
          <li class="task-item">
            <strong>Сохранить документ про отпуска в избранное</strong>
            <div class="meta-text">Документ часто используется новыми сотрудниками на первой неделе адаптации.</div>
          </li>
        </ul>
      </section>
    </div>
  `;
}

function renderAssistant() {
  return `
    <div class="chat-layout">
      <section class="chat-card">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">AI-ассистент</div>
            <h2 class="section-title">Корпоративный чат по внутренним регламентам</h2>
          </div>
          <div class="status-pill primary">Ответы только на основе внутренних документов</div>
        </div>

        <div class="chat-thread" id="chat-thread">
          ${state.chatMessages
            .map(
              (message, index) => `
                <div class="chat-message ${message.role}">
                  <div class="chat-bubble">
                    ${escapeHtml(message.text)}
                    ${
                      message.role === "ai"
                        ? `
                          <div class="chat-actions">
                            <button class="quick-chip" data-action="show-source">Показать источник</button>
                            <button class="quick-chip" data-action="clarify-question">Уточнить вопрос</button>
                            <button class="quick-chip" data-action="mentor-help">Связаться с наставником</button>
                          </div>
                        `
                        : ""
                    }
                  </div>
                  <div class="chat-meta">
                    <span>${message.role === "ai" ? "AI-ассистент" : "Сотрудник"}</span>
                    <span>·</span>
                    <span>${escapeHtml(message.time)}</span>
                    ${
                      message.role === "ai"
                        ? '<span>· Ответ сформирован на основе внутренних документов компании</span>'
                        : ""
                    }
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>

        <form id="chat-form">
          <div class="chat-input-row">
            <input
              id="chat-input"
              class="chat-input"
              type="text"
              placeholder="Напишите вопрос по регламентам, отпуску, CRM или внутренним процессам"
            />
            <button class="primary-btn" type="submit">Отправить</button>
          </div>
        </form>
      </section>

      <aside class="assistant-side">
        <div class="side-panel">
          <div class="sidebar-heading">Эскалация</div>
          <h3 class="section-title">Нужна помощь наставника</h3>
          <p class="panel-description">Если ответ AI оказался недостаточным, запрос можно перевести в очередь наставника с сохранением контекста диалога.</p>
          <button class="primary-btn" data-action="mentor-help">Нужна помощь наставника</button>
        </div>

        <div class="side-panel">
          <div class="sidebar-heading">Быстрые вопросы</div>
          <div class="card-list">
            <button class="ghost-btn" data-action="quick-question" data-value="Как оформить отпуск?">Как оформить отпуск?</button>
            <button class="ghost-btn" data-action="quick-question" data-value="Где найти инструкцию по CRM?">Где найти инструкцию по CRM?</button>
            <button class="ghost-btn" data-action="quick-question" data-value="Как эскалировать обращение клиента?">Как эскалировать обращение клиента?</button>
          </div>
        </div>

        ${
          state.sourcePanelOpen
            ? `
              <div class="side-panel">
                <div class="sidebar-heading">Источники ответа</div>
                <div class="source-card">
                  <strong>Подтверждённые документы</strong>
                  <p class="panel-description">AI показывает только документы со статусом «Обработан» из корпоративной базы знаний.</p>
                </div>
                <ul class="source-list">
                  ${sourceItems
                    .map(
                      (item) => `
                        <li class="source-item">
                          <strong>${escapeHtml(item.title)}</strong>
                          <div class="meta-text">${escapeHtml(item.note)}</div>
                        </li>
                      `,
                    )
                    .join("")}
                </ul>
              </div>
            `
            : ""
        }
      </aside>
    </div>
  `;
}

function renderJourney() {
  const selected = journeySteps.find((step) => step.id === state.selectedJourneyStep) || journeySteps[1];

  return `
    <div class="timeline-grid">
      <section class="page-card">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Маршрут адаптации</div>
            <h2 class="section-title">Пошаговый путь сотрудника</h2>
          </div>
          <div class="status-pill primary">Текущий прогресс · 68%</div>
        </div>
        <div class="timeline-stack">
          ${journeySteps
            .map(
              (step) => `
                <article
                  class="timeline-card ${step.id === selected.id ? "is-selected" : ""}"
                  data-action="select-step"
                  data-step="${step.id}"
                >
                  <div class="timeline-head">
                    <div>
                      <div class="sidebar-heading">${escapeHtml(step.title)}</div>
                      <h3 class="timeline-title">${escapeHtml(step.subtitle)}</h3>
                    </div>
                    <span class="status-pill ${formatStatusClass(step.status)}">${escapeHtml(step.statusLabel)}</span>
                  </div>
                  <p class="panel-description">${escapeHtml(step.description)}</p>
                  <div class="timeline-progress">
                    ${renderProgressBar(step.progress)}
                    <div class="meta-row">
                      <span>Прогресс: ${step.progress}%</span>
                      <span>·</span>
                      <span>Дедлайн: ${escapeHtml(step.deadline)}</span>
                    </div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <aside class="detail-card">
        <div class="detail-header">
          <div class="sidebar-heading">Детали этапа</div>
          <h3 class="section-title">${escapeHtml(selected.title)} · ${escapeHtml(selected.subtitle)}</h3>
          <p class="panel-description">${escapeHtml(selected.outcome)}</p>
        </div>
        <div class="detail-columns">
          <div class="detail-stat">
            <div class="sidebar-heading">Статус</div>
            <strong>${escapeHtml(selected.statusLabel)}</strong>
          </div>
          <div class="detail-stat">
            <div class="sidebar-heading">Дедлайн</div>
            <strong>${escapeHtml(selected.deadline)}</strong>
          </div>
          <div class="detail-stat">
            <div class="sidebar-heading">Ответственный</div>
            <strong>${escapeHtml(selected.owner)}</strong>
          </div>
          <div class="detail-stat">
            <div class="sidebar-heading">Прогресс</div>
            <strong>${selected.progress}%</strong>
          </div>
        </div>
        <div>
          <div class="sidebar-heading">Что входит в этап</div>
          <ul class="check-list feature-list">
            ${selected.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      </aside>
    </div>
  `;
}

function renderTesting() {
  return `
    <div class="test-grid">
      <section class="question-list">
        <div class="summary-card">
          <div class="row-between">
            <div>
              <div class="sidebar-heading">Проверка знаний</div>
              <h2 class="section-title">Тест по изученным материалам</h2>
            </div>
            <div class="status-pill primary">Тест сгенерирован автоматически на основе базы знаний</div>
          </div>
          <div class="muted">5 вопросов по CRM, отпуску, регламентам сервиса и роли наставника в адаптации.</div>
        </div>

        ${testQuestions
          .map(
            (question, index) => `
              <article class="question-card">
                <div class="question-head">
                  <strong>${index + 1}. ${escapeHtml(question.question)}</strong>
                  <span class="pill">${escapeHtml(question.topic)}</span>
                </div>
                <div class="answer-list">
                  ${question.options
                    .map(
                      (option, optionIndex) => `
                        <label class="answer-item">
                          <input
                            type="radio"
                            name="${question.id}"
                            value="${optionIndex}"
                            ${state.testAnswers[question.id] === optionIndex ? "checked" : ""}
                          />
                          <span>${escapeHtml(option)}</span>
                        </label>
                      `,
                    )
                    .join("")}
                </div>
              </article>
            `,
          )
          .join("")}

        <div class="form-actions">
          <button class="primary-btn" data-action="submit-test">Завершить тест</button>
          <button class="ghost-btn" data-action="prefill-demo-test">Заполнить демонстрационный ответ</button>
        </div>
      </section>

      <aside class="summary-stack">
        <div class="result-card">
          <div class="sidebar-heading">Итоговый результат</div>
          <div class="metric-value">${state.lastTestResult.score}/${state.lastTestResult.total}</div>
          <div class="status-pill primary">Уровень: ${escapeHtml(state.lastTestResult.level)}</div>
          <p class="panel-description">${escapeHtml(state.lastTestResult.recommendation)}</p>
        </div>

        <div class="summary-card">
          <div class="sidebar-heading">Контекст теста</div>
          <ul class="task-list">
            <li class="task-item">
              <strong>Источник вопросов</strong>
              <div class="meta-text">Корпоративная база знаний и утверждённые регламенты компании.</div>
            </li>
            <li class="task-item">
              <strong>Статус попытки</strong>
              <div class="meta-text">Последняя попытка сохранена в карточке сотрудника и доступна наставнику.</div>
            </li>
            <li class="task-item">
              <strong>Рекомендация системы</strong>
              <div class="meta-text">Повторите блоки с ошибками и задайте AI-ассистенту уточняющие вопросы перед следующей попыткой.</div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  `;
}

function renderMentorDashboard() {
  return `
    <div class="dashboard-grid">
      <section class="page-card hero-panel span-12">
        <div class="hero-panel-layout">
          <div>
            <div class="eyebrow">Наставник · Операционный дашборд</div>
            <h2 class="section-title" style="font-size:2rem;">Состояние онбординга по группе новых сотрудников</h2>
            <p class="hero-subtitle">
              Система объединяет прогресс по маршруту, вопросы к AI и результаты тестирования, чтобы наставник видел сотрудников,
              которым нужно внимание уже сегодня.
            </p>
          </div>
          <div class="mini-metrics">
            <div class="mini-metric">
              <div class="sidebar-heading">Активные сотрудники</div>
              <strong>24</strong>
            </div>
            <div class="mini-metric">
              <div class="sidebar-heading">Требуют внимания</div>
              <strong>3</strong>
            </div>
            <div class="mini-metric">
              <div class="sidebar-heading">Средний прогресс</div>
              <strong>64%</strong>
            </div>
            <div class="mini-metric">
              <div class="sidebar-heading">Средний тест</div>
              <strong>4.0/5</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Вопросы к AI сегодня</div>
        <div class="metric-value">76</div>
        <div class="metric-trend warn">+9 к вчерашнему дню</div>
        <div class="muted">Наибольшая нагрузка приходится на темы CRM и клиентских регламентов.</div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Сотрудники группы риска</div>
        <div class="metric-value">3</div>
        <div class="metric-trend danger">Нужна дополнительная работа</div>
        <div class="muted">Причины: низкий балл тестов, затянутая адаптация и частые повторяющиеся вопросы.</div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Ближайшая проверка знаний</div>
        <div class="metric-value">Сегодня</div>
        <div class="muted">До 17:00 нужно завершить промежуточный тест по внутренним инструментам.</div>
        <button class="ghost-btn" data-action="navigate" data-view="employees">Перейти к сотрудникам</button>
      </section>

      <section class="table-card span-12">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Список новых сотрудников</div>
            <h3 class="section-title">Кого стоит посмотреть в первую очередь</h3>
          </div>
          <div class="status-pill">Обновлено 5 минут назад</div>
        </div>
        ${renderEmployeesTable(true)}
      </section>
    </div>
  `;
}

function renderEmployeesTable(withHeadingActions = false) {
  return `
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Сотрудник</th>
            <th>Этап адаптации</th>
            <th>Общий прогресс</th>
            <th>Вопросов AI</th>
            <th>Статус теста</th>
            <th>Требует внимания</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${mentorEmployees
            .map((item) => {
              const employee = employeeDirectory[item.id];
              return `
                <tr class="employee-row">
                  <td>
                    <div class="employee-head">
                      <div class="mini-avatar">${escapeHtml(employee.initials)}</div>
                      <div>
                        <strong>${escapeHtml(employee.name)}</strong>
                        <div class="muted">${escapeHtml(employee.title)}</div>
                      </div>
                    </div>
                  </td>
                  <td>${escapeHtml(employee.stage)}</td>
                  <td>
                    <div class="meta-row">
                      <span>${item.progress}%</span>
                    </div>
                    ${renderProgressBar(item.progress)}
                  </td>
                  <td>${item.aiQuestions}</td>
                  <td><span class="table-badge ${formatTableBadge(item.risk)}">${escapeHtml(item.testScore)}</span></td>
                  <td>
                    <span class="risk-indicator ${item.risk}"></span>
                    <span style="margin-left:10px;">${escapeHtml(item.state)}</span>
                  </td>
                  <td>
                    <button class="secondary-btn" data-action="open-employee" data-employee="${item.id}">Открыть карточку сотрудника</button>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
    ${
      withHeadingActions
        ? `<div class="table-note">Зелёный индикатор — всё хорошо, жёлтый — риск, красный — нужна помощь.</div>`
        : ""
    }
  `;
}

function renderEmployeesPage() {
  return `
    <div class="dashboard-grid">
      <section class="table-card span-12">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Сотрудники</div>
            <h2 class="section-title">Мониторинг адаптации по каждому новичку</h2>
          </div>
          <div class="toolbar-actions">
            <span class="status-pill">24 активных</span>
            <span class="status-pill primary">3 в зоне риска</span>
          </div>
        </div>
        ${renderEmployeesTable(false)}
      </section>
    </div>
  `;
}

function renderEmployeeCard() {
  const employee = employeeDirectory[state.selectedEmployee] || employeeDirectory.anna;

  return `
    <div class="employee-card-grid">
      <section class="page-card span-12">
        <div class="row-between">
          <div>
            <button class="ghost-btn" data-action="navigate" data-view="employees">${icon("back")} К списку сотрудников</button>
            <div style="height:14px;"></div>
            <div class="sidebar-heading">Карточка сотрудника</div>
            <h2 class="section-title">${escapeHtml(employee.name)}</h2>
            <p class="panel-description">${escapeHtml(employee.title)} · ${escapeHtml(employee.department)}</p>
          </div>
          <div class="progress-ring" style="--value:${employee.progress}"><span>${employee.progress}%</span></div>
        </div>
      </section>

      <section class="page-card span-4">
        <div class="sidebar-heading">Статус адаптации</div>
        <div class="metric-value">${employee.progress}%</div>
        ${renderProgressBar(employee.progress)}
        <div class="status-pill ${formatTableBadge(employee.risk) === "success" ? "status-done" : formatTableBadge(employee.risk) === "warning" ? "status-progress" : "status-overdue"}">
          ${escapeHtml(employee.riskLabel)}
        </div>
      </section>

      <section class="page-card span-4">
        <div class="sidebar-heading">Результаты тестов</div>
        <ul class="task-list">
          ${employee.tests
            .map(
              (test) => `
                <li class="task-item">
                  <strong>${escapeHtml(test.name)}</strong>
                  <div class="meta-row">
                    <span class="table-badge ${test.result === "5/5" ? "success" : test.result === "4/5" ? "warning" : "danger"}">${escapeHtml(test.result)}</span>
                    <span>${escapeHtml(test.note)}</span>
                  </div>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>

      <section class="page-card span-4">
        <div class="sidebar-heading">Пройденные этапы</div>
        <ul class="task-list">
          ${employee.completedStages
            .map(
              (stage) => `
                <li class="task-item">
                  <strong>${escapeHtml(stage)}</strong>
                  <span class="status-pill status-done">Завершено</span>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>

      <section class="page-card span-6">
        <div class="sidebar-heading">Темы, по которым сотрудник чаще всего спрашивает AI</div>
        <div class="list-inline">
          ${employee.topics
            .map((topic) => `<span class="pill">${escapeHtml(topic.label)} · ${topic.count}</span>`)
            .join("")}
        </div>
        <div class="muted">Чем чаще тема повторяется, тем выше вероятность, что сотруднику нужен дополнительный разбор.</div>
      </section>

      <section class="page-card span-6">
        <div class="sidebar-heading">Рекомендации системы наставнику</div>
        <ul class="recommendations-list">
          ${employee.recommendations
            .map(
              (item) => `
                <li class="task-item">
                  <strong>${escapeHtml(item)}</strong>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>

      <section class="page-card span-12">
        <div class="sidebar-heading">История взаимодействия с AI-ассистентом</div>
        <ul class="history-list">
          ${employee.history
            .map(
              (item) => `
                <li class="history-item">
                  <div class="history-head">
                    <strong>${escapeHtml(item.topic)}</strong>
                    <span class="status-pill">${escapeHtml(item.time)}</span>
                  </div>
                  <div class="meta-text">${escapeHtml(item.summary)}</div>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>
    </div>
  `;
}

function renderAdminDashboard() {
  const processedCount = state.knowledgeDocs.filter((doc) => doc.status === "processed").length;
  const processingCount = state.knowledgeDocs.filter((doc) => doc.status === "processing").length;
  const errorCount = state.knowledgeDocs.filter((doc) => doc.status === "error").length;

  return `
    <div class="dashboard-grid">
      <section class="page-card hero-panel span-12">
        <div class="hero-panel-layout">
          <div>
            <div class="eyebrow">Администратор · Операционный центр знаний</div>
            <h2 class="section-title" style="font-size:2rem;">Контроль базы знаний и качества ответов AI</h2>
            <p class="hero-subtitle">
              Здесь администратор загружает документы компании, отслеживает их обработку и поддерживает
              актуальность ответов, которые получают новые сотрудники и наставники.
            </p>
            <div class="page-actions">
              <button class="primary-btn" data-action="navigate" data-view="knowledge">Открыть базу знаний</button>
              <button class="secondary-btn" data-action="navigate" data-view="analytics">Посмотреть аналитику</button>
            </div>
          </div>
          <div class="mini-metrics">
            <div class="mini-metric">
              <div class="sidebar-heading">Обработано</div>
              <strong>${processedCount}</strong>
            </div>
            <div class="mini-metric">
              <div class="sidebar-heading">В обработке</div>
              <strong>${processingCount}</strong>
            </div>
            <div class="mini-metric">
              <div class="sidebar-heading">Ошибки</div>
              <strong>${errorCount}</strong>
            </div>
            <div class="mini-metric">
              <div class="sidebar-heading">Последнее обновление</div>
              <strong>09:42</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Индекс знаний</div>
        <div class="metric-value">98.2%</div>
        <div class="metric-trend good">Актуальность источников</div>
        <div class="muted">Ответы формируются только по обработанным документам без ошибок индексации.</div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Новые документы за неделю</div>
        <div class="metric-value">14</div>
        <div class="metric-trend warn">3 ждут проверки</div>
        <div class="muted">Больше всего изменений в инструкциях по CRM и HR-процессам.</div>
      </section>

      <section class="metric-card span-4">
        <div class="sidebar-heading">Стабильность обработки</div>
        <div class="metric-value">1 ошибка</div>
        <div class="metric-trend danger">Нужна повторная загрузка</div>
        <div class="muted">Документ FAQ для новых сотрудников требует повторной обработки.</div>
      </section>
    </div>
  `;
}

function renderKnowledgeBase() {
  const processedCount = state.knowledgeDocs.filter((doc) => doc.status === "processed").length;
  const processingCount = state.knowledgeDocs.filter((doc) => doc.status === "processing").length;
  const errorCount = state.knowledgeDocs.filter((doc) => doc.status === "error").length;

  return `
    <div class="knowledge-grid">
      <section class="page-card">
        <div class="knowledge-toolbar">
          <div>
            <div class="sidebar-heading">База знаний</div>
            <h2 class="section-title">Загрузка и обработка документов компании</h2>
            <p class="panel-description">Документы попадают в базу знаний и становятся доступны AI после успешной обработки.</p>
          </div>
          <div class="toolbar-actions">
            <button class="primary-btn" data-action="open-upload-modal">${icon("upload")} Загрузить документ</button>
            <button class="secondary-btn" data-action="refresh-knowledge">${state.knowledgeSyncing ? "Обновление..." : "Обновить базу знаний"}</button>
          </div>
        </div>

        <div class="metric-grid">
          <div class="metric-card">
            <div class="sidebar-heading">Обработано</div>
            <div class="metric-value">${processedCount}</div>
            <div class="metric-trend good">Документы доступны AI</div>
          </div>
          <div class="metric-card">
            <div class="sidebar-heading">В обработке</div>
            <div class="metric-value">${processingCount}</div>
            <div class="metric-trend warn">Ожидают индексации</div>
          </div>
          <div class="metric-card">
            <div class="sidebar-heading">Ошибка</div>
            <div class="metric-value">${errorCount}</div>
            <div class="metric-trend danger">Требуется проверка</div>
          </div>
          <div class="metric-card">
            <div class="sidebar-heading">Источник AI</div>
            <div class="metric-value">124</div>
            <div class="metric-trend good">Актуальных документов</div>
          </div>
        </div>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Категория</th>
                <th>Формат</th>
                <th>Статус обработки</th>
              </tr>
            </thead>
            <tbody>
              ${state.knowledgeDocs
                .map(
                  (doc) => `
                    <tr>
                      <td><strong>${escapeHtml(doc.name)}</strong></td>
                      <td><span class="doc-pill">${escapeHtml(doc.category)}</span></td>
                      <td>${escapeHtml(doc.format)}</td>
                      <td><span class="table-badge ${formatTableBadge(doc.status)}">${escapeHtml(doc.statusLabel)}</span></td>
                    </tr>
                  `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function renderLineChart() {
  const width = 560;
  const height = 220;
  const padding = 24;
  const max = 70;
  const min = 30;
  const { values, labels } = analyticsData.weeklyProgress;

  const points = values
    .map((value, index) => {
      const x = padding + (index * (width - padding * 2)) / (values.length - 1);
      const y = height - padding - ((value - min) / (max - min)) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;
  const guides = [0, 1, 2, 3].map((index) => {
    const y = padding + (index * (height - padding * 2)) / 3;
    return `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(148, 163, 184, 0.18)" stroke-dasharray="4 8"/>`;
  });

  return `
    <svg class="line-chart" viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(37, 99, 235, 0.24)"/>
          <stop offset="100%" stop-color="rgba(37, 99, 235, 0.02)"/>
        </linearGradient>
      </defs>
      ${guides.join("")}
      <polygon points="${areaPoints}" fill="url(#chartFill)"></polygon>
      <polyline points="${points}" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></polyline>
      ${values
        .map((value, index) => {
          const x = padding + (index * (width - padding * 2)) / (values.length - 1);
          const y = height - padding - ((value - min) / (max - min)) * (height - padding * 2);
          return `
            <circle cx="${x}" cy="${y}" r="5" fill="#ffffff" stroke="#2563eb" stroke-width="3"></circle>
            <text x="${x}" y="${height - 6}" text-anchor="middle" fill="#8aa0bd" font-size="11">${labels[index]}</text>
          `;
        })
        .join("")}
    </svg>
  `;
}

function renderAnalytics() {
  return `
    <div class="analytics-grid">
      ${analyticsData.metrics
        .map(
          (metric) => `
            <section class="metric-card span-3">
              <div class="sidebar-heading">${escapeHtml(metric.label)}</div>
              <div class="metric-value">${escapeHtml(metric.value)}</div>
              <div class="metric-trend ${metric.tone}">${escapeHtml(metric.trend)}</div>
            </section>
          `,
        )
        .join("")}

      <section class="chart-card span-7">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Динамика по компании</div>
            <h3 class="section-title">Средний прогресс адаптации</h3>
          </div>
          <div class="status-pill">6 недель</div>
        </div>
        ${renderLineChart()}
      </section>

      <section class="chart-card span-5">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Завершение онбординга</div>
            <h3 class="section-title">Текущий срез</h3>
          </div>
          <div class="status-pill primary">42%</div>
        </div>
        <div class="donut-wrap">
          <div class="donut-chart" style="--value:42"><span>42%</span></div>
          <div class="segment-list">
            ${analyticsData.segments
              .map(
                (segment) => `
                  <div class="segment-item">
                    <span class="meta-row"><span class="legend-dot" style="background:${segment.color};"></span>${escapeHtml(segment.label)}</span>
                    <strong>${escapeHtml(segment.value)}</strong>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="chart-card span-7">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Популярные вопросы к AI</div>
            <h3 class="section-title">Какие темы чаще всего спрашивают</h3>
          </div>
          <div class="status-pill">Последние 30 дней</div>
        </div>
        <div class="bar-chart">
          ${analyticsData.popularQuestions
            .map(
              (question) => `
                <div class="bar-row">
                  <div>${escapeHtml(question.label)}</div>
                  <div class="bar-track">
                    <span class="bar-fill" style="width:${question.value}%"></span>
                  </div>
                  <strong>${question.value}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="chart-card span-5">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Сотрудники группы риска</div>
            <h3 class="section-title">Кому нужен дополнительный контроль</h3>
          </div>
          <div class="status-pill">${analyticsData.riskEmployees.length}</div>
        </div>
        <ul class="risk-list">
          ${analyticsData.riskEmployees
            .map(
              (employee) => `
                <li class="risk-item">
                  <div class="history-head">
                    <strong>${escapeHtml(employee.name)}</strong>
                    <span class="risk-indicator ${employee.risk}"></span>
                  </div>
                  <div class="meta-text">${escapeHtml(employee.note)}</div>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>
    </div>
  `;
}

function renderSettings() {
  const items = settingsByRole[state.role];
  return `
    <div class="settings-grid">
      <section class="page-card span-4">
        <div class="sidebar-heading">Профиль роли</div>
        <h2 class="section-title">${escapeHtml(roleConfig[state.role].label)}</h2>
        <p class="panel-description">${escapeHtml(roleConfig[state.role].description)}</p>
        <div class="mini-metrics">
          <div class="mini-metric">
            <div class="sidebar-heading">Компания</div>
            <strong>${escapeHtml(roleConfig[state.role].company)}</strong>
          </div>
          <div class="mini-metric">
            <div class="sidebar-heading">Пользователь</div>
            <strong>${escapeHtml(roleConfig[state.role].userName)}</strong>
          </div>
        </div>
      </section>

      <section class="page-card span-8">
        <div class="sidebar-heading">Настройки и параметры</div>
        <ul class="settings-list">
          ${items
            .map(
              (item) => `
                <li class="settings-item">
                  <div class="history-head">
                    <strong>${escapeHtml(item.title)}</strong>
                    <span class="status-pill primary">${escapeHtml(item.status)}</span>
                  </div>
                  <div class="meta-text">${escapeHtml(item.description)}</div>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>
    </div>
  `;
}

function renderPageBody() {
  if (state.role === "employee") {
    switch (state.view) {
      case "dashboard":
        return renderEmployeeDashboard();
      case "assistant":
        return renderAssistant();
      case "journey":
        return renderJourney();
      case "testing":
        return renderTesting();
      case "settings":
        return renderSettings();
      default:
        return renderEmployeeDashboard();
    }
  }

  if (state.role === "mentor") {
    switch (state.view) {
      case "dashboard":
        return renderMentorDashboard();
      case "employees":
        return renderEmployeesPage();
      case "employeeCard":
        return renderEmployeeCard();
      case "analytics":
        return renderAnalytics();
      case "settings":
        return renderSettings();
      default:
        return renderMentorDashboard();
    }
  }

  if (state.role === "admin") {
    switch (state.view) {
      case "dashboard":
        return renderAdminDashboard();
      case "knowledge":
        return renderKnowledgeBase();
      case "analytics":
        return renderAnalytics();
      case "settings":
        return renderSettings();
      default:
        return renderAdminDashboard();
    }
  }

  return "";
}

function renderApp() {
  return `
    <div class="app-shell">
      ${renderSidebar()}
      <main class="main-shell">
        ${renderTopbar()}
        <div class="page-body">
          ${renderPageBody()}
        </div>
      </main>
      ${state.uploadModalOpen ? renderUploadModal() : ""}
      ${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ""}
    </div>
  `;
}

function renderUploadModal() {
  return `
    <div class="modal-backdrop">
      <div class="modal-card">
        <div class="row-between">
          <div>
            <div class="sidebar-heading">Загрузка документа</div>
            <h3 class="section-title">Добавить новый источник в базу знаний</h3>
          </div>
          <button class="icon-btn" data-action="close-upload-modal">Закрыть</button>
        </div>
        <div class="field">
          <label for="upload-category">Категория</label>
          <select id="upload-category">
            <option ${state.uploadCategory === "Регламенты" ? "selected" : ""}>Регламенты</option>
            <option ${state.uploadCategory === "Инструкции" ? "selected" : ""}>Инструкции</option>
            <option ${state.uploadCategory === "FAQ" ? "selected" : ""}>FAQ</option>
            <option ${state.uploadCategory === "Обучение" ? "selected" : ""}>Обучение</option>
          </select>
        </div>
        <div class="modal-dropzone">
          <div class="brand-mark" style="margin:0 auto;">${icon("upload")}</div>
          <strong>Перетащите PDF или DOCX либо выберите файл</strong>
          <div class="muted">После загрузки документ получит статус «В обработке» и станет доступен AI после индексации.</div>
          <input id="upload-files" type="file" accept=".pdf,.doc,.docx" multiple />
        </div>
      </div>
    </div>
  `;
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = state.role ? renderApp() : renderLanding();

  const chatThread = document.getElementById("chat-thread");
  if (chatThread) {
    chatThread.scrollTop = chatThread.scrollHeight;
  }
}

function getCurrentTime() {
  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function getAssistantReply(question) {
  const value = question.toLowerCase();

  if (value.includes("регламент") || value.includes("клиент")) {
    return "Регламент общения с клиентами находится в разделе «Стандарты сервиса», документ №4. Рекомендую открыть блок с нормой ответа до 15 минут и правилами фиксации обращения в CRM.";
  }

  if (value.includes("отпуск")) {
    return "Заявка на отпуск оформляется через внутренний HR-портал не позднее чем за 14 календарных дней до планируемой даты. Инструкция находится в документе «Порядок оформления отпусков».";
  }

  if (value.includes("crm")) {
    return "Инструкция по CRM находится в разделе «Обучение». При сбое нужно создать заявку в Service Desk и зафиксировать инцидент в карточке клиента, если обращение уже открыто.";
  }

  if (value.includes("эскала")) {
    return "Для эскалации сложного обращения откройте карточку клиента в CRM, выберите тип обращения и отметьте ответственного по линии эскалации. Подробности есть в регламенте сервиса и инструкции по CRM.";
  }

  return "Я нашёл несколько связанных документов в базе знаний. Уточните процесс, систему или тип документа, и я дам более точный ответ на основе внутренних материалов компании.";
}

function submitChatMessage(messageText) {
  const text = messageText.trim();
  if (!text) {
    showToast("Введите вопрос для AI-ассистента.");
    return;
  }

  state.chatMessages.push({
    role: "user",
    text,
    time: getCurrentTime(),
  });

  state.chatMessages.push({
    role: "ai",
    text: getAssistantReply(text),
    time: getCurrentTime(),
  });

  render();
}

function handleTestSubmit() {
  const answeredCount = Object.keys(state.testAnswers).length;
  if (answeredCount !== testQuestions.length) {
    showToast("Ответьте на все 5 вопросов, чтобы завершить тест.");
    return;
  }

  const score = testQuestions.reduce((total, question) => {
    return total + (state.testAnswers[question.id] === question.correct ? 1 : 0);
  }, 0);

  const wrongTopics = testQuestions
    .filter((question) => state.testAnswers[question.id] !== question.correct)
    .map((question) => question.topic);

  let level = "Хороший";
  if (score === 5) {
    level = "Отличный";
  } else if (score <= 2) {
    level = "Нужно повторение";
  } else if (score === 3) {
    level = "Достаточный";
  }

  const recommendationMap = {
    отпуск: "Рекомендуется повторить блок по оформлению отпусков и работе с HR-порталом.",
    crm: "Рекомендуется повторить блок по правилам работы в CRM и маршрутам эскалации.",
    регламент: "Рекомендуется ещё раз пройти блок по стандартам сервиса и деловому стилю общения.",
    коммуникация: "Стоит пересмотреть правила коммуникации с клиентами и сроки ответа.",
    наставник: "Стоит уточнить роли наставника и AI-ассистента в процессе адаптации.",
  };

  const firstWrongTopic = wrongTopics[0];
  state.lastTestResult = {
    score,
    total: testQuestions.length,
    level,
    recommendation: firstWrongTopic
      ? recommendationMap[firstWrongTopic]
      : "Результат высокий. Можно переходить к следующему этапу адаптации без дополнительных материалов.",
  };

  render();
  showToast(`Тест завершён. Результат: ${score}/${testQuestions.length}.`);
}

function prefillDemoAnswers() {
  state.testAnswers = {
    q1: 1,
    q2: 0,
    q3: 1,
    q4: 1,
    q5: 2,
  };
  render();
  showToast("Демонстрационные ответы подставлены.");
}

function handleKnowledgeRefresh() {
  if (state.knowledgeSyncing) {
    return;
  }

  state.knowledgeSyncing = true;
  render();

  window.clearTimeout(processingTimer);
  processingTimer = window.setTimeout(() => {
    state.knowledgeDocs = state.knowledgeDocs.map((doc) => {
      if (doc.status === "processing") {
        return { ...doc, status: "processed", statusLabel: "Обработан" };
      }

      return doc;
    });
    state.knowledgeSyncing = false;
    render();
    showToast("База знаний обновлена. Новые документы доступны AI.");
  }, 1600);
}

function handleFileUpload(files) {
  if (!files.length) {
    return;
  }

  const nextId = Math.max(0, ...state.knowledgeDocs.map((doc) => doc.id)) + 1;
  const uploadedDocs = Array.from(files).map((file, index) => {
    const extension = file.name.split(".").pop()?.toUpperCase() || "FILE";
    return {
      id: nextId + index,
      name: file.name,
      category: state.uploadCategory,
      format: extension,
      status: "processing",
      statusLabel: "В обработке",
    };
  });

  state.knowledgeDocs = [...uploadedDocs, ...state.knowledgeDocs];
  state.uploadModalOpen = false;
  render();
  showToast(`Добавлено документов: ${uploadedDocs.length}. Запущена обработка.`);
  handleKnowledgeRefresh();
}

function handleAction(actionTarget) {
  const { action } = actionTarget.dataset;

  switch (action) {
    case "select-role":
    case "jump-role":
      selectRole(actionTarget.dataset.role);
      return;
    case "back-to-start":
      resetToStart();
      return;
    case "navigate":
      if (actionTarget.dataset.view === "employeeCard" && state.role === "mentor") {
        navigate("employeeCard");
        return;
      }
      navigate(actionTarget.dataset.view);
      return;
    case "open-employee":
      navigate("employeeCard", { selectedEmployee: actionTarget.dataset.employee });
      return;
    case "select-step":
      state.selectedJourneyStep = actionTarget.dataset.step;
      render();
      return;
    case "mentor-help":
      showToast("Запрос наставнику отправлен вместе с контекстом диалога.");
      return;
    case "show-source":
      state.sourcePanelOpen = !state.sourcePanelOpen;
      render();
      return;
    case "clarify-question": {
      const input = document.getElementById("chat-input");
      if (input) {
        input.value = "Уточни, какой документ описывает процесс шаг за шагом.";
        input.focus();
      }
      return;
    }
    case "quick-question": {
      const input = document.getElementById("chat-input");
      if (input) {
        input.value = actionTarget.dataset.value;
        input.focus();
      }
      return;
    }
    case "submit-test":
      handleTestSubmit();
      return;
    case "prefill-demo-test":
      prefillDemoAnswers();
      return;
    case "open-upload-modal":
      state.uploadModalOpen = true;
      render();
      return;
    case "close-upload-modal":
      state.uploadModalOpen = false;
      render();
      return;
    case "refresh-knowledge":
      handleKnowledgeRefresh();
      return;
    default:
      return;
  }
}

document.addEventListener("click", (event) => {
  if (state.uploadModalOpen && event.target instanceof HTMLElement && event.target.classList.contains("modal-backdrop")) {
    state.uploadModalOpen = false;
    render();
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    return;
  }

  handleAction(actionTarget);
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "chat-form") {
    return;
  }

  event.preventDefault();
  const input = document.getElementById("chat-input");
  if (!input) {
    return;
  }

  submitChatMessage(input.value);
  input.value = "";
});

document.addEventListener("change", (event) => {
  const target = event.target;

  if (target instanceof HTMLInputElement && target.type === "radio" && target.name.startsWith("q")) {
    state.testAnswers[target.name] = Number(target.value);
    return;
  }

  if (target.id === "upload-category") {
    state.uploadCategory = target.value;
    return;
  }

  if (target.id === "upload-files" && target instanceof HTMLInputElement) {
    handleFileUpload(target.files ? Array.from(target.files) : []);
  }
});

window.addEventListener("hashchange", () => {
  if (suppressHashChange) {
    return;
  }

  parseHash();
  render();
});

parseHash();
render();
