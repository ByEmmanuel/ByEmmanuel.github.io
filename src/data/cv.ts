// Todo el contenido del CV vive aquí. Edita este archivo para actualizar la página.

export type Link = { label: string; href: string }

export type Project = {
  name: string
  period: string
  kind: "ia" | "propio"
  summary: string
  highlights: string[]
  stack: string[]
  links?: Link[]
  note?: string
}

export const profile = {
  name: "Jesús Emmanuel García",
  title: "Ingeniero en Computación · Ingeniero de Software",
  tagline:
    "Backend, full-stack y Machine Learning. Construyo sistemas completos, de la base de datos a la interfaz, y trabajo a diario con agentes de IA.",
  location: "Guadalajara, Jalisco, MX",
  email: "polar1183@gmail.com",
  phone: "(+52) 33-3060-9463",
  github: "https://github.com/ByEmmanuel",
  portfolio: "https://byemmanuel.github.io",
  pdf: "/cv-jesus-emmanuel-garcia.pdf",
}

export const about = [
  "Estudiante de Ingeniería en Computación en la Universidad de Guadalajara (CUCEI, generación 2023), en 7.º semestre y a un año de graduarme. 21 años y 3 años de experiencia desarrollando con Java, de forma autónoma y autodidacta.",
  "Me interesan la arquitectura de software, las bases de datos y el Machine Learning. Investigo optimización de ML (modelos de espacio de estados como Mamba y marcos de RL como VAPO) y despliego modelos de pesos abiertos en local.",
  "Trabajo en equipo bajo SCRUM, me adapto rápido y sé traducir conceptos técnicos complejos a un lenguaje claro para perfiles no técnicos. Mi entorno de desarrollo es Arch Linux, ajustado a mano.",
]

export const skills: { group: string; items: string[] }[] = [
  { group: "Lenguajes", items: ["Java", "Python", "TypeScript", "JavaScript", "C++", "C", "SQL", "Zsh / Bash"] },
  { group: "Backend", items: ["Spring Boot", "Hibernate / JPA", "JPQL", "FastAPI", "REST APIs", "WebSockets", "HTTP"] },
  { group: "Frontend y móvil", items: ["React", "React Native", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "JavaFX", "HTML / CSS"] },
  { group: "Bases de datos", items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "SQLite", "Prisma", "SQLAlchemy"] },
  { group: "Machine Learning", items: ["scikit-learn", "XGBoost", "LightGBM", "CatBoost", "PyMC", "Optuna", "pandas / NumPy", "SciPy"] },
  { group: "IA y automatización", items: ["Claude Code", "Anthropic API", "MCP", "LM Studio", "Qwen / Gemma", "Docling", "n8n", "Zapier"] },
  { group: "Infraestructura", items: ["Docker", "Docker Compose", "NGINX", "Linux (Arch)", "systemd", "Git / GitHub"] },
  { group: "Herramientas", items: ["IntelliJ IDEA", "VS Code", "CLion", "Postman", "Webots", "LaTeX", "Microsoft Office"] },
]

export const softSkills = [
  "Pensamiento analítico y resolución de problemas",
  "Proactividad",
  "Organización",
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Aprendizaje continuo de nuevas tecnologías",
]

export const featuredProjects: Project[] = [
  {
    name: "Predicciones Mundial",
    period: "Jun 2026",
    kind: "ia",
    summary:
      "Sistema de Machine Learning para predecir partidos y simular el torneo de la Copa del Mundo, con API y página web propias.",
    highlights: [
      "Motor Elo propio y constructor de features a partir de datos de Kaggle y StatsBomb guardados en PostgreSQL",
      "Ensamble de gradient boosting (XGBoost, LightGBM, CatBoost) con hiperparámetros optimizados en Optuna",
      "Modelo bayesiano en PyMC y simulación Monte Carlo del torneo completo",
      "API en FastAPI que consume una interfaz en React + Vite",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "CatBoost", "PyMC", "Optuna", "PostgreSQL", "FastAPI", "React"],
  },
  {
    name: "Gelatina Nuclear · Robot Mini-Sumo",
    period: "Sep 2026",
    kind: "ia",
    summary:
      "Robot mini-sumo de competición (10 × 10 cm, 500 g) diseñado y medido en Webots, escrito para correr en el robot físico sin reescribir el algoritmo.",
    highlights: [
      "Algoritmo en C99 puro desacoplado del hardware mediante una capa HAL: el mismo código corre en simulación y en Arduino",
      "La simulación usa solo piezas que se pueden comprar (motores N20, Arduino Nano, 3 sensores VL53L0X): BOM de 1174 MXN",
      "Pruebas físicas automatizadas (reposo, sensores, locomoción, empuje, caída) y bitácora navegable de cada versión del algoritmo",
      "En simulación, 20 asaltos con 13 victorias, 5 derrotas y 2 empates, con resultados deterministas",
    ],
    stack: ["C99", "Webots", "Arduino", "Make", "Python"],
    links: [
      { label: "Código", href: "https://github.com/ByEmmanuel/Mini-Sumo" },
      { label: "Bitácora", href: "https://byemmanuel.github.io/Sumo_Page/" },
    ],
  },
  {
    name: "Gestor de fallas de infraestructura",
    period: "Sep 2026",
    kind: "ia",
    summary:
      "Sistema de tickets para reportar, priorizar y dar seguimiento a las fallas de infraestructura de un centro universitario. Propuesta para el proyecto modular.",
    highlights: [
      "Clasifica reportes en texto libre y prioriza por impacto × urgencia con compromisos de atención (SLA de 4 h a 1 semana)",
      "Agrupa reportes repetidos con similitud de Jaccard y escala la prioridad automáticamente a los 3, 5 y 8 reportes",
      "Tablero con analítica: mapa de calor edificio × categoría, cumplimiento de SLA, percentil 90 y costo por tipo de falla",
      "Base de demostración con 850 reportes en 16 edificios y 6 meses de historia",
    ],
    stack: ["Java 21", "Spring Boot", "Spring Data JPA", "Maven", "JUnit"],
  },
  {
    name: "Criba",
    period: "Sep 2026",
    kind: "ia",
    summary:
      "Libera espacio en iCloud Photos: analiza las fotos en local, permite revisarlas en una web estilo Tinder y borra solo lo aprobado, con respaldo verificado antes.",
    highlights: [
      "Pipeline de sincronización por lotes con vigilancia de espacio en disco e índice en SQLite",
      "API en FastAPI (solo localhost) con miniaturas en caché y una interfaz en Next.js + shadcn",
      "Clasificador entrenado con las decisiones del usuario y detección de categorías y fotos parecidas",
      "Borrado seguro: descarga el original a un SSD externo, lo verifica y solo después lo elimina",
    ],
    stack: ["Python", "FastAPI", "SQLite", "Next.js", "shadcn/ui", "Tailwind"],
  },
  {
    name: "Proyecto BD · Predicción de calificaciones",
    period: "Jul 2026",
    kind: "ia",
    summary:
      "Aplicación web full-stack que predice calificaciones de alumnos con modelos estadísticos y simulación Monte Carlo.",
    highlights: [
      "Backend en FastAPI que procesa los modelos estadísticos y expone una API REST",
      "Frontend en React (Vite) servido detrás de NGINX",
      "PostgreSQL que se inicializa sola con el esquema y los datos precargados",
      "Totalmente dockerizado: se levanta en cualquier equipo con un solo docker-compose up",
    ],
    stack: ["Python", "FastAPI", "SciPy", "React", "PostgreSQL", "Docker", "NGINX"],
    links: [{ label: "Código", href: "https://github.com/ByEmmanuel/Proyecto_DB" }],
  },
  {
    name: "SCVT · System Control Version Tokens",
    period: "Sep 2026",
    kind: "ia",
    summary:
      "Muestra cuánto queda de la suscripción de IA y cuándo se reinicia el límite, con el mismo dato en todos los dispositivos.",
    highlights: [
      "Lee el uso desde el servidor del proveedor, no de logs locales, para que cada máquina vea el mismo número",
      "Integración en el prompt de zsh, en el banner de inicio y en la statusLine de Claude Code",
      "Caché y lock por máquina (unas 20 peticiones por hora como máximo), reintentos y respeto de Retry-After ante un 429",
      "Notificaciones de escritorio al cruzar el 80 % y el 95 % del límite. Sin dependencias externas",
    ],
    stack: ["Python", "Zsh", "Linux", "Claude Code"],
    links: [{ label: "Código", href: "https://github.com/ByEmmanuel/Session_Visualizer" }],
  },
  {
    name: "Extractor de estados de cuenta",
    period: "Sep 2026",
    kind: "ia",
    summary:
      "Convierte estados de cuenta en PDF a Markdown limpio para usarlos como contexto de un LLM y extrae las cifras clave verificadas contra el propio PDF.",
    highlights: [
      "Reconstruye la tabla de movimientos con Docling (análisis de layout, tablas y OCR)",
      "Extrae el pago para no generar intereses, el total de cargos y la fecha límite de pago",
      "Corre 100 % en local: ningún PDF ni su contenido sale de la máquina",
    ],
    stack: ["Python", "Docling", "OCR", "uv", "pytest"],
    links: [{ label: "Código", href: "https://github.com/ByEmmanuel/Pdf-To-Text" }],
  },
  {
    name: "Financial Tracker",
    period: "Ago 2026",
    kind: "ia",
    summary:
      "Aplicación de finanzas personales con registro de transacciones y cuentas, y sincronización opcional hacia Notion.",
    highlights: [
      "Modelos Transaction, Account y SystemLog con Prisma sobre SQLite",
      "Endpoint de sincronización hacia una base de datos de Notion",
      "Evolucionó a un dashboard local conectado a Notion en solo lectura, con modo demo y pruebas en Vitest",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "Notion API"],
    links: [{ label: "Código", href: "https://github.com/ByEmmanuel/Financial_Tracker" }],
  },
  {
    name: "Auto Scheduler",
    period: "Ago 2026",
    kind: "ia",
    summary:
      "Pipeline que extrae las tareas pendientes de Google Classroom y las sincroniza como eventos en Google Calendar.",
    highlights: [
      "Autenticación OAuth 2.0 con las APIs de Google Classroom y Google Calendar",
      "Evita duplicados y maneja zonas horarias",
      "Dashboard web para revisar las tareas sincronizadas",
    ],
    stack: ["Python", "Flask", "Google APIs", "OAuth 2.0", "SQLite"],
    links: [{ label: "Código", href: "https://github.com/ByEmmanuel/Auto_Scheduler" }],
  },
  {
    name: "Copia App BBVA (México)",
    period: "Nov 2023 – Ene 2024",
    kind: "propio",
    summary:
      "Aplicación bancaria diseñada desde cero con login y gestión de transacciones, inspirada en la app móvil de BBVA.",
    highlights: [
      "Varias versiones, con base de datos configurada en MariaDB / MySQL",
      "Escalable a nivel de interfaz, base de datos e implementación de API / WebSockets",
      "Cifrado de contraseñas y arquitectura MVC",
    ],
    stack: ["Java", "MariaDB", "MySQL", "WebSockets"],
    links: [{ label: "Código", href: "https://github.com/ByEmmanuel/App-Banco" }],
  },
  {
    name: "CalorieTracker & FinancialTracker",
    period: "May – Oct 2025",
    kind: "propio",
    summary:
      "App móvil para dar seguimiento a la alimentación y a las finanzas personales.",
    highlights: [
      "Frontend en React Native y servicios backend en Spring Boot",
      "MySQL y MongoDB, todo en contenedores Docker",
      "Enfoque en la seguridad de la API, con pentesting de la app desde Linux",
    ],
    stack: ["React Native", "Spring Boot", "SQL", "MongoDB", "Docker"],
    note: "Repositorio privado",
  },
]

export const otherProjects: { name: string; description: string; stack: string; href?: string }[] = [
  {
    name: "Sistema de Tickets",
    description: "Gestor de tickets y citas con MVC, patrón DAO y CRUD completo. Fui líder del equipo.",
    stack: "C++ · CMake",
    href: "https://github.com/ByEmmanuel/Sistema_De_Tickets",
  },
  {
    name: "Hotel Alura",
    description: "Gestión hotelera: reservas para clientes y herramientas de administración.",
    stack: "Java · Oracle ONE",
    href: "https://github.com/ByEmmanuel/Proyecto-Hotel-Alura",
  },
  {
    name: "SIIAU Auto-Evaluación",
    description: "Script que automatiza el llenado de la evaluación docente del SIIAU (UdeG).",
    stack: "JavaScript",
    href: "https://github.com/ByEmmanuel/siiau-script",
  },
  {
    name: "TabCaddy / TabNest",
    description: "Extensión de Chrome para organizar pestañas, con un servicio local que guarda todo.",
    stack: "Manifest V3 · React · FastAPI · SQLite",
  },
  {
    name: "aico",
    description: "Orquestación local de agentes de Claude Code con rutinas, Skills, MCP y un enjambre con límite de concurrencia.",
    stack: "Claude Code · Bash · YAML",
  },
  {
    name: "Videos de Lenguajes Formales",
    description: "Videos educativos en 1080p60 con animaciones generadas en código, voz sintetizada en local y banda sonora propia.",
    stack: "Python · Manim · Piper TTS · FFmpeg",
  },
  {
    name: "Programming Problems",
    description: "Soluciones a problemas de entrevistas y programación competitiva de varias plataformas.",
    stack: "C++ · Java",
    href: "https://github.com/ByEmmanuel/Programming-Problems",
  },
  {
    name: "Universidad",
    description: "Repositorio con los proyectos y apuntes de la carrera (C, C++, Java, Python, ensamblador).",
    stack: "C · C++ · Java · Python",
    href: "https://github.com/ByEmmanuel/Universidad",
  },
]

export const icpc = [
  "Participación activa en el Torneo de Programación ICPC 2025 (Universidad de Guadalajara)",
  "Participación en el Torneo de Programación ICPC 2026 (Universidad de Guadalajara)",
  "Desarrollo de algoritmos eficientes en C++ y Java y resolución de problemas bajo presión competitiva",
  "Mejora continua en lógica, análisis de casos y trabajo en equipo",
]

export const aiKnowledge: { title: string; text: string }[] = [
  {
    title: "Investigación y modelos",
    text: "Modelos de espacio de estados (Mamba), frameworks de Reinforcement Learning (VAPO) y fundamentos de ingeniería neuro-simbólica.",
  },
  {
    title: "Despliegue de LLMs",
    text: "Cuantización y despliegue local offline con LM Studio; experimentación con modelos de pesos abiertos (Qwen, Gemma).",
  },
  {
    title: "IA generativa por API",
    text: "Claude Code y la API de Anthropic para generar contenido, analizar contexto y construir soluciones automatizadas con LLMs.",
  },
  {
    title: "Automatización",
    text: "n8n (flujos complejos, nodos personalizados e integraciones web) y Zapier.",
  },
  {
    title: "Infraestructura",
    text: "Scripting en Python y Zsh, diseño de esquemas en PostgreSQL y administración de entornos Arch Linux.",
  },
]

export const certifications: { title: string; issuer: string; detail?: string }[] = [
  { title: "Java (6 meses) y Spring Boot (3 meses)", issuer: "Oracle ONE · Next Education" },
  { title: "Curso de Prompt Engineering", issuer: "Platzi", detail: "Julio 2026" },
  { title: "Pensamiento Crítico para usar Inteligencia Artificial", issuer: "Platzi", detail: "Julio 2026" },
  { title: "Introducción a la Inteligencia Artificial", issuer: "Platzi", detail: "Julio 2026" },
  { title: "Diseño de Experiencia de Usuario (UX)", issuer: "Google" },
  { title: "Manejo de Redes Sociales", issuer: "Google" },
  { title: "Diseño Gráfico, graduado con honores académicos", issuer: "Preparatoria 4 UdeG" },
]

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B1 oral y escrito" },
]
