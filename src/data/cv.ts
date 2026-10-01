// Todo el contenido del CV vive aquí, en español e inglés.
// Los campos traducibles son { es, en }; `localize(lang)` devuelve la versión de un idioma.

export type Lang = "es" | "en"
type L = { es: string; en: string }

export type Area = "java" | "python" | "web" | "cpp" | "ml"

type ProjectSrc = {
  slug: string
  name: L
  period: L
  kind: "ia" | "propio"
  areas: Area[]
  summary: L
  highlights: L[]
  stack: string[]
  links?: { label: L; href: string }[]
  note?: L
  /** Capturas en public/proyectos/<slug>/ (de 1 a 4). */
  images?: { file: string; alt: L }[]
}

const same = (s: string): L => ({ es: s, en: s })
const code: L = { es: "Código", en: "Code" }

const profileSrc = {
  name: "Jesús Emmanuel García",
  title: { es: "Ingeniero en Computación · Ingeniero de Software", en: "Computer Engineer · Software Engineer" },
  tagline: {
    es: "Backend, full-stack y Machine Learning. Construyo sistemas completos, de la base de datos a la interfaz, y trabajo a diario con agentes de IA.",
    en: "Backend, full-stack and Machine Learning. I build complete systems, from the database to the interface, and work with AI agents every day.",
  },
  location: same("Guadalajara, Jalisco, MX"),
  email: "polar1183@gmail.com",
  phone: "(+52) 33-3060-9463",
  phoneHref: "tel:+523330609463",
  github: "https://github.com/ByEmmanuel",
  pdf: "/cv-jesus-emmanuel-garcia.pdf",
}

const aboutSrc: L[] = [
  {
    es: "Estudiante de Ingeniería en Computación en la Universidad de Guadalajara (CUCEI, generación 2023), en 7.º semestre y a un año de graduarme. 21 años y 3 años de experiencia desarrollando con Java, de forma autónoma y autodidacta.",
    en: "Computer Engineering student at the University of Guadalajara (CUCEI, class of 2023), in my 7th semester and one year from graduating. 21 years old, with 3 years of experience developing in Java, self-driven and self-taught.",
  },
  {
    es: "Me interesan la arquitectura de software, las bases de datos y el Machine Learning. Investigo optimización de ML (modelos de espacio de estados como Mamba y marcos de RL como VAPO) y despliego modelos de pesos abiertos en local.",
    en: "I'm interested in software architecture, databases and Machine Learning. I research ML optimization (state space models such as Mamba and RL frameworks such as VAPO) and deploy open-weight models locally.",
  },
  {
    es: "Trabajo en equipo bajo SCRUM, me adapto rápido y sé traducir conceptos técnicos complejos a un lenguaje claro para perfiles no técnicos. Mi entorno de desarrollo es Arch Linux, ajustado a mano.",
    en: "I work well in SCRUM teams, adapt quickly and can explain complex technical concepts clearly to non-technical audiences. My development environment is a hand-tuned Arch Linux setup.",
  },
]

const skillsSrc: { group: L; items: string[] }[] = [
  { group: { es: "Lenguajes", en: "Languages" }, items: ["Java", "Python", "TypeScript", "JavaScript", "C++", "C", "SQL", "Zsh / Bash"] },
  { group: same("Backend"), items: ["Spring Boot", "Hibernate / JPA", "JPQL", "FastAPI", "Flask", "REST APIs", "WebSockets"] },
  { group: { es: "Frontend y móvil", en: "Frontend & mobile" }, items: ["React", "React Native", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "JavaFX", "HTML / CSS"] },
  { group: { es: "Bases de datos", en: "Databases" }, items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "SQLite", "Prisma", "SQLAlchemy"] },
  { group: same("Machine Learning"), items: ["scikit-learn", "XGBoost", "LightGBM", "CatBoost", "PyMC", "Optuna", "pandas / NumPy", "SciPy"] },
  { group: { es: "IA y automatización", en: "AI & automation" }, items: ["Claude Code", "Anthropic API", "MCP", "LM Studio", "Qwen / Gemma", "Docling", "n8n", "Zapier"] },
  { group: { es: "Infraestructura", en: "Infrastructure" }, items: ["Docker", "Docker Compose", "NGINX", "Linux (Arch)", "systemd", "Git / GitHub"] },
  { group: { es: "Herramientas", en: "Tools" }, items: ["IntelliJ IDEA", "VS Code", "CLion", "Postman", "Webots", "LaTeX", "Microsoft Office"] },
]

const softSkillsSrc: L[] = [
  { es: "Pensamiento analítico y resolución de problemas", en: "Analytical thinking and problem solving" },
  { es: "Proactividad", en: "Proactivity" },
  { es: "Organización", en: "Organization" },
  { es: "Comunicación efectiva", en: "Effective communication" },
  { es: "Trabajo en equipo", en: "Teamwork" },
  { es: "Aprendizaje continuo de nuevas tecnologías", en: "Continuous learning of new technologies" },
]

const projectsSrc: ProjectSrc[] = [
  {
    slug: "predicciones-mundial",
    name: { es: "Predicciones Mundial", en: "World Cup Predictions" },
    period: { es: "Jun 2026", en: "Jun 2026" },
    kind: "ia",
    areas: ["python", "ml", "web"],
    summary: {
      es: "Sistema de Machine Learning para predecir partidos y simular el torneo de la Copa del Mundo, con API y página web propias.",
      en: "Machine Learning system that predicts matches and simulates the World Cup tournament, with its own API and website.",
    },
    highlights: [
      {
        es: "Motor Elo propio y constructor de features a partir de datos de Kaggle y StatsBomb guardados en PostgreSQL",
        en: "Custom Elo engine and feature builder over Kaggle and StatsBomb data stored in PostgreSQL",
      },
      {
        es: "Ensamble de gradient boosting (XGBoost, LightGBM, CatBoost) con hiperparámetros optimizados en Optuna",
        en: "Gradient boosting ensemble (XGBoost, LightGBM, CatBoost) with hyperparameters tuned in Optuna",
      },
      {
        es: "Modelo bayesiano en PyMC y simulación Monte Carlo del torneo completo",
        en: "Bayesian model in PyMC and Monte Carlo simulation of the full tournament",
      },
      { es: "API en FastAPI que consume una interfaz en React + Vite", en: "FastAPI backend consumed by a React + Vite interface" },
    ],
    stack: ["Python", "XGBoost", "LightGBM", "CatBoost", "PyMC", "Optuna", "PostgreSQL", "FastAPI", "React"],
  },
  {
    slug: "mini-sumo",
    name: { es: "Gelatina Nuclear · Robot Mini-Sumo", en: "Gelatina Nuclear · Mini-Sumo Robot" },
    period: { es: "Sep 2026", en: "Sep 2026" },
    kind: "ia",
    areas: ["cpp", "python"],
    summary: {
      es: "Robot mini-sumo de competición (10 × 10 cm, 500 g) diseñado y medido en Webots, escrito para correr en el robot físico sin reescribir el algoritmo.",
      en: "Competition mini-sumo robot (10 × 10 cm, 500 g) designed and measured in Webots, written to run on the physical robot without rewriting the algorithm.",
    },
    highlights: [
      {
        es: "Algoritmo en C99 puro desacoplado del hardware mediante una capa HAL: el mismo código corre en simulación y en Arduino",
        en: "Pure C99 algorithm decoupled from hardware through a HAL layer: the same code runs in simulation and on Arduino",
      },
      {
        es: "La simulación usa solo piezas que se pueden comprar (motores N20, Arduino Nano, 3 sensores VL53L0X): BOM de 1174 MXN",
        en: "The simulation only uses parts that can actually be bought (N20 motors, Arduino Nano, 3 VL53L0X sensors): a 1,174 MXN BOM",
      },
      {
        es: "Pruebas físicas automatizadas (reposo, sensores, locomoción, empuje, caída) y bitácora navegable de cada versión del algoritmo",
        en: "Automated physics tests (rest, sensors, locomotion, pushing, falling) and a browsable log of every algorithm version",
      },
      {
        es: "En simulación, 20 asaltos con 13 victorias, 5 derrotas y 2 empates, con resultados deterministas",
        en: "In simulation, 20 rounds with 13 wins, 5 losses and 2 draws, with deterministic results",
      },
    ],
    stack: ["C99", "Webots", "Arduino", "Make", "Python"],
    links: [
      { label: code, href: "https://github.com/ByEmmanuel/Mini-Sumo" },
      { label: { es: "Bitácora", en: "Lab log" }, href: "https://byemmanuel.github.io/Sumo_Page/" },
    ],
    images: [
      { file: "1.webp", alt: { es: "Vista general del laboratorio Mini-Sumo", en: "Mini-Sumo lab overview" } },
      { file: "2.webp", alt: { es: "Historial de versiones del algoritmo", en: "Algorithm version history" } },
      { file: "3.webp", alt: { es: "Código del controlador publicado", en: "Published controller code" } },
    ],
  },
  {
    slug: "gestor-fallas",
    name: { es: "Gestor de fallas de infraestructura", en: "Infrastructure Issue Tracker" },
    period: { es: "Sep 2026", en: "Sep 2026" },
    kind: "ia",
    areas: ["java"],
    summary: {
      es: "Sistema de tickets para reportar, priorizar y dar seguimiento a las fallas de infraestructura de un centro universitario. Propuesta para el proyecto modular.",
      en: "Ticketing system to report, prioritize and track infrastructure failures across a university campus. Proposal for my capstone project.",
    },
    highlights: [
      {
        es: "Clasifica reportes en texto libre y prioriza por impacto × urgencia con compromisos de atención (SLA de 4 h a 1 semana)",
        en: "Classifies free-text reports and prioritizes by impact × urgency with service commitments (SLAs from 4 h to 1 week)",
      },
      {
        es: "Agrupa reportes repetidos con similitud de Jaccard y escala la prioridad automáticamente a los 3, 5 y 8 reportes",
        en: "Groups duplicate reports using Jaccard similarity and escalates priority automatically at 3, 5 and 8 reports",
      },
      {
        es: "Tablero con analítica: mapa de calor edificio × categoría, cumplimiento de SLA, percentil 90 y costo por tipo de falla",
        en: "Analytics dashboard: building × category heatmap, SLA compliance, 90th percentile and cost per failure type",
      },
      {
        es: "Base de demostración con 850 reportes en 16 edificios y 6 meses de historia",
        en: "Demo dataset with 850 reports across 16 buildings and 6 months of history",
      },
    ],
    stack: ["Java 21", "Spring Boot", "Spring Data JPA", "Maven", "JUnit", "Chart.js"],
    images: [
      { file: "1.webp", alt: { es: "Tablero con indicadores y entrada contra capacidad", en: "Dashboard with KPIs and intake vs. capacity" } },
      { file: "2.webp", alt: { es: "Mapa de calor edificio por tipo de falla", en: "Building by failure type heatmap" } },
      { file: "3.webp", alt: { es: "Mapa del campus con carga por edificio", en: "Campus map with load per building" } },
      { file: "4.webp", alt: { es: "Analítica de tiempos y cumplimiento de SLA", en: "Resolution time and SLA analytics" } },
    ],
  },
  {
    slug: "criba",
    name: same("Criba"),
    period: { es: "Sep 2026", en: "Sep 2026" },
    kind: "ia",
    areas: ["python", "ml", "web"],
    summary: {
      es: "Libera espacio en iCloud Photos: analiza las fotos en local, permite revisarlas en una web estilo Tinder y borra solo lo aprobado, con respaldo verificado antes.",
      en: "Frees up iCloud Photos storage: analyzes photos locally, lets you review them in a Tinder-style web app and deletes only what you approve, after a verified backup.",
    },
    highlights: [
      {
        es: "Pipeline de sincronización por lotes con vigilancia de espacio en disco e índice en SQLite",
        en: "Batch sync pipeline with disk-space monitoring and a SQLite index",
      },
      {
        es: "API en FastAPI (solo localhost) con miniaturas en caché y una interfaz en Next.js + shadcn",
        en: "FastAPI backend (localhost only) with cached thumbnails and a Next.js + shadcn interface",
      },
      {
        es: "Clasificador entrenado con las decisiones del usuario y detección de categorías y fotos parecidas",
        en: "Classifier trained on the user's decisions, plus category and near-duplicate detection",
      },
      {
        es: "Borrado seguro: descarga el original a un SSD externo, lo verifica y solo después lo elimina",
        en: "Safe deletion: downloads the original to an external SSD, verifies it and only then deletes it",
      },
    ],
    stack: ["Python", "FastAPI", "SQLite", "Next.js", "shadcn/ui", "Tailwind"],
  },
  {
    slug: "proyecto-bd",
    name: { es: "Proyecto BD · Predicción de calificaciones", en: "DB Project · Grade Prediction" },
    period: { es: "Jul 2026", en: "Jul 2026" },
    kind: "ia",
    areas: ["python", "ml", "web"],
    summary: {
      es: "Aplicación web full-stack que predice calificaciones de alumnos con modelos estadísticos y simulación Monte Carlo.",
      en: "Full-stack web app that predicts student grades using statistical models and Monte Carlo simulation.",
    },
    highlights: [
      {
        es: "1,000 simulaciones Monte Carlo con cadenas de Markov por alumno, con intervalo de confianza del 95 % del promedio final",
        en: "1,000 Monte Carlo simulations with Markov chains per student, with a 95% confidence interval for the final GPA",
      },
      {
        es: "API REST en FastAPI y frontend en React (Vite) detrás de NGINX, con kardex por alumno y distribuciones normal y binomial",
        en: "FastAPI REST API and React (Vite) frontend behind NGINX, with per-student transcripts and normal and binomial distributions",
      },
      {
        es: "PostgreSQL que se inicializa sola con el esquema y los datos precargados",
        en: "Self-initializing PostgreSQL with the schema and preloaded data",
      },
      {
        es: "Totalmente dockerizado: se levanta en cualquier equipo con un solo docker-compose up",
        en: "Fully dockerized: runs on any machine with a single docker-compose up",
      },
    ],
    stack: ["Python", "FastAPI", "SciPy", "React", "PostgreSQL", "Docker", "NGINX"],
    links: [{ label: code, href: "https://github.com/ByEmmanuel/Proyecto_DB" }],
    images: [
      {
        file: "1.webp",
        alt: { es: "Simulación Monte Carlo + cadenas de Markov del promedio final", en: "Monte Carlo + Markov chain simulation of the final GPA" },
      },
      { file: "2.webp", alt: { es: "Distribución normal y binomial de calificaciones", en: "Normal and binomial grade distributions" } },
      { file: "3.webp", alt: { es: "Kardex del alumno con su trayectoria curricular", en: "Student transcript with curriculum progress" } },
    ],
  },
  {
    slug: "scvt",
    name: same("SCVT · System Control Version Tokens"),
    period: { es: "Sep 2026", en: "Sep 2026" },
    kind: "ia",
    areas: ["python"],
    summary: {
      es: "Muestra cuánto queda de la suscripción de IA y cuándo se reinicia el límite, con el mismo dato en todos los dispositivos.",
      en: "Shows how much of your AI subscription is left and when the limit resets, with the same number on every device.",
    },
    highlights: [
      {
        es: "Lee el uso desde el servidor del proveedor, no de logs locales, para que cada máquina vea el mismo número",
        en: "Reads usage from the provider's server, not local logs, so every machine sees the same number",
      },
      {
        es: "Integración en el prompt de zsh, en el banner de inicio y en la statusLine de Claude Code",
        en: "Integrates into the zsh prompt, the startup banner and the Claude Code statusLine",
      },
      {
        es: "Caché y lock por máquina (unas 20 peticiones por hora como máximo), reintentos y respeto de Retry-After ante un 429",
        en: "Per-machine cache and lock (about 20 requests per hour at most), retries, and honors Retry-After on a 429",
      },
      {
        es: "Notificaciones de escritorio al cruzar el 80 % y el 95 % del límite. Sin dependencias externas",
        en: "Desktop notifications at 80% and 95% of the limit. No external dependencies",
      },
    ],
    stack: ["Python", "Zsh", "Linux", "Claude Code"],
    links: [{ label: code, href: "https://github.com/ByEmmanuel/Session_Visualizer" }],
  },
  {
    slug: "extractor-pdf",
    name: { es: "Extractor de estados de cuenta", en: "Bank Statement Extractor" },
    period: { es: "Sep 2026", en: "Sep 2026" },
    kind: "ia",
    areas: ["python", "ml"],
    summary: {
      es: "Convierte estados de cuenta en PDF a Markdown limpio para usarlos como contexto de un LLM y extrae las cifras clave verificadas contra el propio PDF.",
      en: "Converts PDF bank statements into clean Markdown to use as LLM context, and extracts the key figures verified against the PDF itself.",
    },
    highlights: [
      {
        es: "Reconstruye la tabla de movimientos con Docling (análisis de layout, tablas y OCR)",
        en: "Rebuilds the transactions table with Docling (layout analysis, tables and OCR)",
      },
      {
        es: "Extrae el pago para no generar intereses, el total de cargos y la fecha límite de pago",
        en: "Extracts the no-interest payment, total charges and payment due date",
      },
      {
        es: "Corre 100 % en local: ningún PDF ni su contenido sale de la máquina",
        en: "Runs 100% locally: no PDF or its contents ever leaves the machine",
      },
    ],
    stack: ["Python", "Docling", "OCR", "uv", "pytest"],
    links: [{ label: code, href: "https://github.com/ByEmmanuel/Pdf-To-Text" }],
  },
  {
    slug: "financial-tracker",
    name: same("Financial Tracker"),
    period: { es: "Ago 2026", en: "Aug 2026" },
    kind: "ia",
    areas: ["web"],
    summary: {
      es: "Aplicación de finanzas personales con registro de transacciones y cuentas, y sincronización opcional hacia Notion.",
      en: "Personal finance app that records transactions and accounts, with optional sync to Notion.",
    },
    highlights: [
      {
        es: "Modelos Transaction, Account y SystemLog con Prisma sobre SQLite",
        en: "Transaction, Account and SystemLog models with Prisma on SQLite",
      },
      { es: "Endpoint de sincronización hacia una base de datos de Notion", en: "Sync endpoint to a Notion database" },
      {
        es: "Evolucionó a un dashboard local conectado a Notion en solo lectura, con modo demo y pruebas en Vitest",
        en: "Evolved into a local read-only Notion dashboard with a demo mode and Vitest tests",
      },
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "Notion API"],
    links: [{ label: code, href: "https://github.com/ByEmmanuel/Financial_Tracker" }],
  },
  {
    slug: "auto-scheduler",
    name: same("Auto Scheduler"),
    period: { es: "Ago 2026", en: "Aug 2026" },
    kind: "ia",
    areas: ["python", "web"],
    summary: {
      es: "Pipeline que extrae las tareas pendientes de Google Classroom y las sincroniza como eventos en Google Calendar.",
      en: "Pipeline that pulls pending assignments from Google Classroom and syncs them as Google Calendar events.",
    },
    highlights: [
      {
        es: "Autenticación OAuth 2.0 con las APIs de Google Classroom y Google Calendar",
        en: "OAuth 2.0 authentication with the Google Classroom and Google Calendar APIs",
      },
      { es: "Evita duplicados y maneja zonas horarias", en: "Avoids duplicates and handles time zones" },
      {
        es: "Tablero web (Flask + React) por días con tareas atrasadas, recordatorios, alertas y repetición; corre como servicio de systemd",
        en: "Day-by-day web board (Flask + React) with overdue tasks, reminders, alerts and recurrence; runs as a systemd service",
      },
    ],
    stack: ["Python", "Flask", "React", "Google APIs", "OAuth 2.0", "SQLite"],
    links: [{ label: code, href: "https://github.com/ByEmmanuel/Auto_Scheduler" }],
    images: [
      { file: "1.webp", alt: { es: "Resumen del día al abrir el tablero", en: "Daily summary when opening the board" } },
      { file: "2.webp", alt: { es: "Tablero de tareas por día", en: "Day-by-day task board" } },
      { file: "3.webp", alt: { es: "Creación de una tarea con alertas y repetición", en: "Creating a task with alerts and recurrence" } },
    ],
  },
  {
    slug: "app-banco",
    name: { es: "Copia App BBVA (México)", en: "BBVA App Clone (Mexico)" },
    period: { es: "Nov 2023 – Ene 2024", en: "Nov 2023 – Jan 2024" },
    kind: "propio",
    areas: ["java"],
    summary: {
      es: "Aplicación bancaria diseñada desde cero con login y gestión de transacciones, inspirada en la app móvil de BBVA.",
      en: "Banking app designed from scratch with login and transaction management, inspired by the BBVA mobile app.",
    },
    highlights: [
      {
        es: "Varias versiones, con base de datos configurada en MariaDB / MySQL",
        en: "Several versions, with a MariaDB / MySQL database",
      },
      {
        es: "Escalable a nivel de interfaz, base de datos e implementación de API / WebSockets",
        en: "Designed to scale across the interface, database and API / WebSockets layers",
      },
      { es: "Cifrado de contraseñas y arquitectura MVC", en: "Password encryption and MVC architecture" },
    ],
    stack: ["Java", "MariaDB", "MySQL", "WebSockets"],
    links: [{ label: code, href: "https://github.com/ByEmmanuel/App-Banco" }],
  },
  {
    slug: "calorie-tracker",
    name: same("CalorieTracker & FinancialTracker"),
    period: { es: "May – Oct 2025", en: "May – Oct 2025" },
    kind: "propio",
    areas: ["java", "web"],
    summary: {
      es: "App móvil para dar seguimiento a la alimentación y a las finanzas personales.",
      en: "Mobile app to track nutrition and personal finances.",
    },
    highlights: [
      { es: "Frontend en React Native y servicios backend en Spring Boot", en: "React Native frontend with Spring Boot backend services" },
      { es: "MySQL y MongoDB, todo en contenedores Docker", en: "MySQL and MongoDB, all running in Docker containers" },
      {
        es: "Enfoque en la seguridad de la API, con pentesting de la app desde Linux",
        en: "Focus on API security, including pentesting the app from Linux",
      },
    ],
    stack: ["React Native", "Spring Boot", "SQL", "MongoDB", "Docker"],
    note: { es: "Repositorio privado", en: "Private repository" },
  },
]

const otherProjectsSrc: { name: L; description: L; stack: string; href?: string }[] = [
  {
    name: { es: "Sistema de Tickets", en: "Ticket System" },
    description: {
      es: "Gestor de tickets y citas con MVC, patrón DAO y CRUD completo. Fui líder del equipo.",
      en: "Ticket and appointment manager with MVC, the DAO pattern and full CRUD. I led the team.",
    },
    stack: "C++ · CMake",
    href: "https://github.com/ByEmmanuel/Sistema_De_Tickets",
  },
  {
    name: same("Hotel Alura"),
    description: {
      es: "Gestión hotelera: reservas para clientes y herramientas de administración.",
      en: "Hotel management: bookings for guests and admin tools.",
    },
    stack: "Java · Oracle ONE",
    href: "https://github.com/ByEmmanuel/Proyecto-Hotel-Alura",
  },
  {
    name: { es: "SIIAU Auto-Evaluación", en: "SIIAU Auto-Evaluation" },
    description: {
      es: "Script que automatiza el llenado de la evaluación docente del SIIAU (UdeG).",
      en: "Script that automates filling out the SIIAU teacher evaluation (UdeG).",
    },
    stack: "JavaScript",
    href: "https://github.com/ByEmmanuel/siiau-script",
  },
  {
    name: same("TabCaddy / TabNest"),
    description: {
      es: "Extensión de Chrome para organizar pestañas, con un servicio local que guarda todo.",
      en: "Chrome extension to organize tabs, backed by a local service that stores everything.",
    },
    stack: "Manifest V3 · React · FastAPI · SQLite",
  },
  {
    name: same("aico"),
    description: {
      es: "Orquestación local de agentes de Claude Code con rutinas, Skills, MCP y un enjambre con límite de concurrencia.",
      en: "Local orchestration of Claude Code agents with routines, Skills, MCP and a concurrency-capped swarm.",
    },
    stack: "Claude Code · Bash · YAML",
  },
  {
    name: { es: "Videos de Lenguajes Formales", en: "Formal Languages Videos" },
    description: {
      es: "Videos educativos en 1080p60 con animaciones generadas en código, voz sintetizada en local y banda sonora propia.",
      en: "1080p60 educational videos with code-generated animations, locally synthesized narration and an original soundtrack.",
    },
    stack: "Python · Manim · Piper TTS · FFmpeg",
  },
  {
    name: same("Programming Problems"),
    description: {
      es: "Soluciones a problemas de entrevistas y programación competitiva de varias plataformas.",
      en: "Solutions to interview and competitive programming problems from several platforms.",
    },
    stack: "C++ · Java",
    href: "https://github.com/ByEmmanuel/Programming-Problems",
  },
  {
    name: same("Universidad"),
    description: {
      es: "Repositorio con los proyectos y apuntes de la carrera (C, C++, Java, Python, ensamblador).",
      en: "Repository with my coursework projects and notes (C, C++, Java, Python, assembly).",
    },
    stack: "C · C++ · Java · Python",
    href: "https://github.com/ByEmmanuel/Universidad",
  },
]

const timelineSrc: { date: L; title: L; text: L }[] = [
  {
    date: same("2023"),
    title: { es: "Oracle ONE · Java", en: "Oracle ONE · Java" },
    text: {
      es: "Retos de Alura como el Encriptador de Texto y el Conversor de Monedas.",
      en: "Alura challenges such as the Text Encryptor and the Currency Converter.",
    },
  },
  {
    date: same("2023"),
    title: { es: "Inicio de Ingeniería en Computación", en: "Started Computer Engineering" },
    text: { es: "Universidad de Guadalajara, CUCEI.", en: "University of Guadalajara, CUCEI." },
  },
  {
    date: { es: "Nov 2023 – Ene 2024", en: "Nov 2023 – Jan 2024" },
    title: { es: "Copia App BBVA", en: "BBVA App Clone" },
    text: { es: "Primera app grande en Java con base de datos.", en: "First large Java app with a database." },
  },
  {
    date: same("2024"),
    title: { es: "Spring Boot y Sistema de Tickets", en: "Spring Boot and Ticket System" },
    text: {
      es: "Primera API en Spring Boot y Hotel Alura; lideré el Sistema de Tickets en C++.",
      en: "First Spring Boot API and Hotel Alura; led the C++ Ticket System team.",
    },
  },
  {
    date: { es: "May – Oct 2025", en: "May – Oct 2025" },
    title: same("CalorieTracker & FinancialTracker"),
    text: { es: "React Native + Spring Boot con enfoque en seguridad.", en: "React Native + Spring Boot with a security focus." },
  },
  {
    date: same("2025 – 2026"),
    title: same("ICPC"),
    text: { es: "Torneos de programación en la UdeG.", en: "Programming contests at UdeG." },
  },
  {
    date: same("2026"),
    title: { es: "Machine Learning y agentes de IA", en: "Machine Learning and AI agents" },
    text: {
      es: "Predicciones Mundial, Mini-Sumo, Gestor de fallas, Criba y más, desarrollados con Claude Code.",
      en: "World Cup Predictions, Mini-Sumo, Issue Tracker, Criba and more, built with Claude Code.",
    },
  },
]

const icpcSrc: L[] = [
  {
    es: "Participación activa en el Torneo de Programación ICPC 2025 (Universidad de Guadalajara)",
    en: "Active participant in the ICPC 2025 Programming Contest (University of Guadalajara)",
  },
  {
    es: "Participación en el Torneo de Programación ICPC 2026 (Universidad de Guadalajara)",
    en: "Participant in the ICPC 2026 Programming Contest (University of Guadalajara)",
  },
  {
    es: "Desarrollo de algoritmos eficientes en C++ y Java y resolución de problemas bajo presión competitiva",
    en: "Efficient algorithm design in C++ and Java and problem solving under competitive pressure",
  },
  {
    es: "Mejora continua en lógica, análisis de casos y trabajo en equipo",
    en: "Continuous improvement in logic, case analysis and teamwork",
  },
]

const aiKnowledgeSrc: { title: L; text: L }[] = [
  {
    title: { es: "Investigación y modelos", en: "Research and models" },
    text: {
      es: "Modelos de espacio de estados (Mamba), frameworks de Reinforcement Learning (VAPO) y fundamentos de ingeniería neuro-simbólica.",
      en: "State space models (Mamba), Reinforcement Learning frameworks (VAPO) and neuro-symbolic engineering fundamentals.",
    },
  },
  {
    title: { es: "Despliegue de LLMs", en: "LLM deployment" },
    text: {
      es: "Cuantización y despliegue local offline con LM Studio; experimentación con modelos de pesos abiertos (Qwen, Gemma).",
      en: "Quantization and offline local deployment with LM Studio; experimenting with open-weight models (Qwen, Gemma).",
    },
  },
  {
    title: { es: "IA generativa por API", en: "Generative AI via API" },
    text: {
      es: "Claude Code y la API de Anthropic para generar contenido, analizar contexto y construir soluciones automatizadas con LLMs.",
      en: "Claude Code and the Anthropic API to generate content, analyze context and build automated LLM-powered solutions.",
    },
  },
  {
    title: { es: "Automatización", en: "Automation" },
    text: {
      es: "n8n (flujos complejos, nodos personalizados e integraciones web) y Zapier.",
      en: "n8n (complex workflows, custom nodes and web integrations) and Zapier.",
    },
  },
  {
    title: { es: "Infraestructura", en: "Infrastructure" },
    text: {
      es: "Scripting en Python y Zsh, diseño de esquemas en PostgreSQL y administración de entornos Arch Linux.",
      en: "Python and Zsh scripting, PostgreSQL schema design and Arch Linux administration.",
    },
  },
]

const certificationsSrc: { title: L; issuer: L; detail?: L }[] = [
  {
    title: { es: "Java (6 meses) y Spring Boot (3 meses)", en: "Java (6 months) and Spring Boot (3 months)" },
    issuer: same("Oracle ONE · Next Education"),
  },
  { title: { es: "Curso de Prompt Engineering", en: "Prompt Engineering Course" }, issuer: same("Platzi"), detail: { es: "Julio 2026", en: "July 2026" } },
  {
    title: { es: "Pensamiento Crítico para usar Inteligencia Artificial", en: "Critical Thinking for Using Artificial Intelligence" },
    issuer: same("Platzi"),
    detail: { es: "Julio 2026", en: "July 2026" },
  },
  {
    title: { es: "Introducción a la Inteligencia Artificial", en: "Introduction to Artificial Intelligence" },
    issuer: same("Platzi"),
    detail: { es: "Julio 2026", en: "July 2026" },
  },
  { title: { es: "Diseño de Experiencia de Usuario (UX)", en: "User Experience (UX) Design" }, issuer: same("Google") },
  { title: { es: "Manejo de Redes Sociales", en: "Social Media Management" }, issuer: same("Google") },
  {
    title: { es: "Diseño Gráfico, graduado con honores académicos", en: "Graphic Design, graduated with academic honors" },
    issuer: { es: "Preparatoria 4 UdeG", en: "UdeG High School No. 4" },
  },
]

const languagesSrc: { name: L; level: L }[] = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
  { name: { es: "Inglés", en: "English" }, level: { es: "B1 oral y escrito", en: "B1 spoken and written" } },
]

const educationSrc = {
  degree: { es: "Ingeniería en Computación", en: "B.S. in Computer Engineering" },
  school: {
    es: "Universidad de Guadalajara (CUCEI) · 2023 – presente · 7.º semestre",
    en: "University of Guadalajara (CUCEI) · 2023 – present · 7th semester",
  },
}

const uiSrc = {
  nav: {
    about: { es: "Sobre mí", en: "About" },
    stack: same("Stack"),
    projects: { es: "Proyectos", en: "Projects" },
    timeline: { es: "Trayectoria", en: "Timeline" },
    ai: { es: "IA", en: "AI" },
    icpc: same("ICPC"),
    education: { es: "Formación", en: "Education" },
    contact: { es: "Contacto", en: "Contact" },
  },
  controls: {
    images: { es: "Imágenes", en: "Images" },
    yes: { es: "Sí", en: "On" },
    no: { es: "No", en: "Off" },
    detail: { es: "Detalle", en: "Detail" },
    brief: { es: "Breve", en: "Brief" },
    full: { es: "Completo", en: "Full" },
    language: { es: "Idioma", en: "Language" },
  },
  hero: {
    seeProjects: { es: "Ver proyectos", en: "See projects" },
    downloadPdf: { es: "Descargar PDF", en: "Download PDF" },
  },
  sections: {
    about: { kicker: { es: "01 · Perfil", en: "01 · Profile" }, title: { es: "Sobre mí", en: "About me" } },
    softSkills: { es: "Habilidades", en: "Soft skills" },
    stack: { kicker: { es: "02 · Skills técnicas", en: "02 · Technical skills" }, title: same("Stack") },
    projects: { kicker: { es: "03 · Proyectos", en: "03 · Projects" }, title: { es: "Proyectos y experiencia", en: "Projects and experience" } },
    timeline: { kicker: { es: "04 · Trayectoria", en: "04 · Timeline" }, title: { es: "Trayectoria", en: "Journey so far" } },
    ai: { kicker: { es: "05 · Especialización", en: "05 · Specialization" }, title: { es: "IA y automatización", en: "AI and automation" } },
    icpc: { kicker: { es: "06 · Programación competitiva", en: "06 · Competitive programming" }, title: same("ICPC") },
    education: {
      kicker: { es: "07 · Educación", en: "07 · Education" },
      title: { es: "Formación y certificaciones", en: "Education and certifications" },
    },
    languages: { es: "Idiomas", en: "Languages" },
    contact: { kicker: { es: "08 · Contacto", en: "08 · Contact" }, title: { es: "Hablemos", en: "Let's talk" } },
  },
  projects: {
    iaTitle: { es: "Construidos con agentes de IA", en: "Built with AI agents" },
    iaText: {
      es: "Proyectos donde uso agentes de IA (Claude Code) durante todo el desarrollo: diseño de arquitectura, esquemas de base de datos e integración de APIs externas, para resolver problemas reales.",
      en: "Projects where I use AI agents (Claude Code) throughout development: architecture design, database schemas and external API integration, to solve real problems.",
    },
    ownTitle: { es: "Proyectos propios", en: "Personal projects" },
    ownText: { es: "Desarrollados de forma tradicional, de principio a fin.", en: "Built the traditional way, end to end." },
    otherTitle: { es: "Otros proyectos", en: "Other projects" },
    filterAll: { es: "Todos", en: "All" },
    filterLabel: { es: "Filtrar por tecnología", en: "Filter by technology" },
    empty: { es: "Ningún proyecto coincide con este filtro.", en: "No projects match this filter." },
    gallery: { es: "Galería", en: "Gallery" },
    close: { es: "Cerrar", en: "Close" },
    showDetails: { es: "Ver detalles", en: "Show details" },
    prev: { es: "Anterior", en: "Previous" },
    next: { es: "Siguiente", en: "Next" },
  },
  areas: {
    java: same("Java"),
    python: same("Python"),
    web: same("Web / JS"),
    cpp: same("C / C++"),
    ml: same("Machine Learning"),
  } satisfies Record<Area, L>,
  contact: {
    email: { es: "Correo", en: "Email" },
    phone: { es: "Teléfono", en: "Phone" },
    github: same("GitHub"),
    location: { es: "Ubicación", en: "Location" },
  },
  meta: {
    title: { es: "Jesús Emmanuel García · CV", en: "Jesús Emmanuel García · Resume" },
    description: {
      es: "Ingeniero en Computación e Ingeniero de Software en Guadalajara. Backend, full-stack, Machine Learning y desarrollo con agentes de IA.",
      en: "Computer and Software Engineer in Guadalajara, Mexico. Backend, full-stack, Machine Learning and development with AI agents.",
    },
  },
}

// --- Localización -----------------------------------------------------------

type Localized<T> = T extends L
  ? string
  : T extends readonly (infer U)[]
    ? Localized<U>[]
    : T extends object
      ? { [K in keyof T]: Localized<T[K]> }
      : T

function isL(v: unknown): v is L {
  return typeof v === "object" && v !== null && "es" in v && "en" in v && Object.keys(v).length === 2
}

function pick<T>(value: T, lang: Lang): Localized<T> {
  if (isL(value)) return value[lang] as Localized<T>
  if (Array.isArray(value)) return value.map((v) => pick(v, lang)) as Localized<T>
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, pick(v, lang)])) as Localized<T>
  }
  return value as Localized<T>
}

const source = {
  profile: profileSrc,
  about: aboutSrc,
  skills: skillsSrc,
  softSkills: softSkillsSrc,
  projects: projectsSrc,
  otherProjects: otherProjectsSrc,
  timeline: timelineSrc,
  icpc: icpcSrc,
  aiKnowledge: aiKnowledgeSrc,
  certifications: certificationsSrc,
  languages: languagesSrc,
  education: educationSrc,
  ui: uiSrc,
}

export type CV = Localized<typeof source>
export type Project = CV["projects"][number]

export function localize(lang: Lang): CV {
  return pick(source, lang)
}
