/*
 * CONTENIDO DE LA WEB
 * -------------------
 * Este es el único archivo que hace falta tocar para cambiar textos, proyectos o enlaces.
 * Cada texto tiene versión en español (es) y en inglés (en).
 *
 * Para añadir un proyecto: copia uno de los bloques de "projects" y cambia sus datos.
 * "repo" es el nombre del repositorio dentro de la cuenta de GitHub de "links.githubUser".
 * Si un enlace está vacío (""), su botón no se muestra.
 * Una etiqueta puede ser un texto ("Python") o tener dos idiomas ({ es: "Biometría", en: "Biometrics" }).
 */
window.SITE = {
  links: {
    email: "isabenjumea11@gmail.com",
    phone: "+34 722 413 521",
    githubUser: "",   // ← su usuario de GitHub, p. ej. "isabenjumea"
    linkedin: "",     // ← URL completa de su LinkedIn, p. ej. "https://www.linkedin.com/in/..."
    cv: "assets/CV_Isabel_Benjumea.pdf",
  },

  name: "Isabel Benjumea Olmo",
  shortName: "Isabel Benjumea",

  ui: {
    es: {
      nav: { about: "Sobre mí", projects: "Proyectos", experience: "Experiencia", education: "Formación", skills: "Habilidades", contact: "Contacto" },
      role: "Python · Inteligencia Artificial · RAG",
      greeting: "Hola, soy",
      tagline: "Formación en Física, Data Science e IA. Construyo sistemas RAG y agentes con LLM que convierten documentos y bases de datos en respuestas fiables y con fuente.",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
      ctaContact: "Contacto",
      available: "Abierta a nuevas oportunidades",
      aboutTitle: "Sobre mí",
      aboutKicker: "// quién soy",
      aboutText: "Vengo de la Física, y de ahí me llevo la forma de pensar: modelizar, medir y no fiarme de un resultado hasta comprobarlo. Hoy trabajo con datos en Endesa, donde analizo facturación con SQL, detecto anomalías y busco qué procesos se pueden automatizar. En paralelo me especializo en IA generativa, sobre todo en sistemas RAG: cómo trocear documentos, qué embeddings usar, cómo reordenar resultados y, sobre todo, cómo evaluar que la respuesta es correcta.",
      pillars: [
        { icon: "∑", title: "Base científica", text: "Matemáticas, estadística y modelización desde el Grado en Física." },
        { icon: "⌗", title: "Datos reales", text: "SQL, detección de anomalías, KPIs y automatización en una gran energética." },
        { icon: "✦", title: "IA aplicada", text: "RAG, embeddings, Qdrant, rerankers y agentes que consultan bases de datos." },
      ],
      projectsTitle: "Proyectos",
      projectsKicker: "// lo que construyo",
      projectsIntro: "Proyectos de IA aplicada con datos públicos, pensados para resolver problemas reales y medidos de principio a fin.",
      code: "Código",
      demo: "Demo",
      experienceTitle: "Experiencia",
      experienceKicker: "// dónde trabajo",
      educationTitle: "Formación",
      educationKicker: "// qué estudio",
      skillsTitle: "Habilidades",
      skillsKicker: "// con qué trabajo",
      languagesTitle: "Idiomas",
      contactTitle: "¿Hablamos?",
      contactKicker: "// contacto",
      contactText: "Busco proyectos y equipos donde aplicar IA y datos a problemas de verdad. Escríbeme o llámame.",
      footer: "Hecho con cariño, café y Python",
      themeLabel: "Cambiar tema claro/oscuro",
      langLabel: "Switch to English",
    },
    en: {
      nav: { about: "About", projects: "Projects", experience: "Experience", education: "Education", skills: "Skills", contact: "Contact" },
      role: "Python · Artificial Intelligence · RAG",
      greeting: "Hi, I'm",
      tagline: "Background in Physics, Data Science and AI. I build RAG systems and LLM agents that turn documents and databases into reliable, sourced answers.",
      ctaProjects: "See projects",
      ctaCv: "Download CV",
      ctaContact: "Contact",
      available: "Open to new opportunities",
      aboutTitle: "About me",
      aboutKicker: "// who I am",
      aboutText: "I come from Physics, and I keep its way of thinking: model, measure, and never trust a result until it has been checked. I currently work with data at Endesa, analysing billing data with SQL, detecting anomalies and finding processes that can be automated. In parallel I specialise in generative AI, especially RAG systems: how to chunk documents, which embeddings to use, how to rerank results and, above all, how to evaluate that an answer is correct.",
      pillars: [
        { icon: "∑", title: "Scientific base", text: "Mathematics, statistics and modelling from my Physics degree." },
        { icon: "⌗", title: "Real data", text: "SQL, anomaly detection, KPIs and automation at a major energy company." },
        { icon: "✦", title: "Applied AI", text: "RAG, embeddings, Qdrant, rerankers and agents that query databases." },
      ],
      projectsTitle: "Projects",
      projectsKicker: "// what I build",
      projectsIntro: "Applied AI projects built on public data, designed to solve real problems and measured end to end.",
      code: "Code",
      demo: "Demo",
      experienceTitle: "Experience",
      experienceKicker: "// where I work",
      educationTitle: "Education",
      educationKicker: "// what I study",
      skillsTitle: "Skills",
      skillsKicker: "// what I work with",
      languagesTitle: "Languages",
      contactTitle: "Let's talk",
      contactKicker: "// contact",
      contactText: "I'm looking for projects and teams where I can apply AI and data to real problems. Drop me an email or give me a call.",
      footer: "Made with care, coffee and Python",
      themeLabel: "Toggle light/dark theme",
      langLabel: "Cambiar a español",
    },
  },

  projects: [
    {
      repo: "rag-normativa-energia",
      demo: "",
      accent: "rose",
      tags: ["Python", "Qdrant", "Embeddings", "Reranker", "RAGAS", "Streamlit"],
      es: {
        label: "RAG · Evaluación",
        title: "Asistente RAG de normativa energética",
        problem: "Encontrar una respuesta concreta en circulares de la CNMC y en el BOE puede llevar horas.",
        text: "Asistente que indexa normativa pública del sector eléctrico, recupera los fragmentos relevantes con búsqueda híbrida (densa + BM25) en Qdrant, los reordena con un reranker y responde citando el documento y el artículo de origen.",
        highlights: [
          "Comparativa de estrategias de chunking: tamaño fijo frente a semántico",
          "Evaluación con un conjunto de preguntas de referencia (recall@k y fidelidad)",
          "Cada respuesta enlaza a su fuente para poder verificarla",
        ],
      },
      en: {
        label: "RAG · Evaluation",
        title: "Energy regulation RAG assistant",
        problem: "Finding a specific answer in Spanish energy regulation (CNMC circulars, BOE) can take hours.",
        text: "An assistant that indexes public electricity-sector regulation, retrieves relevant passages with hybrid search (dense + BM25) in Qdrant, reranks them and answers citing the source document and article.",
        highlights: [
          "Comparison of chunking strategies: fixed-size vs. semantic",
          "Evaluation on a reference question set (recall@k and faithfulness)",
          "Every answer links to its source so it can be checked",
        ],
      },
    },
    {
      repo: "agente-sql-mercado-electrico",
      demo: "",
      accent: "sage",
      tags: ["Python", "LLM", "Tool calling", "PostgreSQL", "Plotly"],
      es: {
        label: "Agente · Text-to-SQL",
        title: "Agente que consulta el mercado eléctrico en lenguaje natural",
        problem: "Los datos abiertos de demanda, precios y generación existen, pero hay que saber SQL para sacarles partido.",
        text: "Se pregunta en lenguaje natural («¿qué día de 2025 tuvo el precio más alto?») y el agente genera la consulta SQL, la valida, la ejecuta sobre PostgreSQL con datos públicos de Red Eléctrica y devuelve una tabla y un gráfico.",
        highlights: [
          "Usuario de base de datos de solo lectura y validación del SQL antes de ejecutarlo",
          "El SQL generado siempre está visible: nada de cajas negras",
          "Registro de preguntas fallidas para mejorar el agente",
        ],
      },
      en: {
        label: "Agent · Text-to-SQL",
        title: "Natural-language agent for electricity market data",
        problem: "Open data on demand, prices and generation exists, but you need SQL to make use of it.",
        text: "Ask in plain language (\"which day in 2025 had the highest price?\") and the agent writes the SQL query, validates it, runs it on PostgreSQL with public Red Eléctrica data and returns a table and a chart.",
        highlights: [
          "Read-only database user and SQL validation before execution",
          "The generated SQL is always shown: no black boxes",
          "Failed questions are logged to keep improving the agent",
        ],
      },
    },
    {
      repo: "anomalias-consumo-electrico",
      demo: "",
      accent: "terra",
      tags: ["Pandas", "Scikit-learn", { es: "Series temporales", en: "Time series" }, "Power BI", "LLM"],
      es: {
        label: "ML · Anomalías",
        title: "Detección de anomalías en consumo eléctrico",
        problem: "Un pico o un hueco raro en el consumo puede ser una avería, un fraude o un error de lectura.",
        text: "Comparativa de métodos para detectar anomalías en datos públicos de contadores inteligentes: reglas estadísticas (z-score, IQR), Isolation Forest y un modelo de series temporales. Los resultados se exploran en un cuadro de mando y un LLM explica cada anomalía en lenguaje natural.",
        highlights: [
          "Tres familias de métodos comparadas con los mismos datos",
          "Cuadro de mando para revisar cada caso detectado",
          "Explicaciones en lenguaje natural para perfiles no técnicos",
        ],
      },
      en: {
        label: "ML · Anomalies",
        title: "Anomaly detection in electricity consumption",
        problem: "An odd spike or gap in consumption can be a fault, fraud or a metering error.",
        text: "A comparison of anomaly detection methods on public smart-meter data: statistical rules (z-score, IQR), Isolation Forest and a time-series model. Results are explored in a dashboard and an LLM explains each anomaly in plain language.",
        highlights: [
          "Three families of methods compared on the same data",
          "Dashboard to review every detected case",
          "Plain-language explanations for non-technical users",
        ],
      },
    },
    {
      repo: "",
      demo: "",
      accent: "sand",
      tags: [{ es: "Visión por computador", en: "Computer vision" }, "Deep Learning", { es: "Biometría", en: "Biometrics" }, { es: "Datos sintéticos", en: "Synthetic data" }],
      es: {
        label: "TFG · Universidad de Sevilla",
        title: "Resistencia ante ataques de presentación con caras y venas desde el móvil",
        problem: "Un sistema biométrico puede engañarse con una foto o una máscara: son los llamados ataques de presentación.",
        text: "Trabajo de Fin de Grado sobre biometría multimodal y visión por computador: desarrollo de modelos de IA para generar datos sintéticos, análisis de técnicas de fusión biométrica y evaluación experimental de sistemas de reconocimiento facial y venoso capturados con smartphone.",
        highlights: [
          "Generación de datos sintéticos con modelos de IA",
          "Fusión de dos rasgos biométricos: cara y venas",
          "Evaluación experimental frente a ataques de presentación",
        ],
      },
      en: {
        label: "Bachelor's thesis · University of Seville",
        title: "Presentation-attack resistance using faces and veins from smartphones",
        problem: "A biometric system can be fooled with a photo or a mask: these are called presentation attacks.",
        text: "Bachelor's thesis on multimodal biometrics and computer vision: AI models to generate synthetic data, analysis of biometric fusion techniques and experimental evaluation of face and vein recognition captured with smartphones.",
        highlights: [
          "Synthetic data generation with AI models",
          "Fusion of two biometric traits: face and veins",
          "Experimental evaluation against presentation attacks",
        ],
      },
    },
  ],

  experience: [
    {
      company: "Endesa",
      es: {
        role: "Análisis de Datos y Optimización de Procesos",
        date: "04/2026 – Actualidad",
        points: [
          "Extracción, análisis y validación de datos de facturación con SQL; detección de anomalías e incidencias.",
          "Levantamiento de procesos de reporting regulatorio, revisión de fuentes y búsqueda de oportunidades de automatización.",
          "Desarrollo y optimización de cuadros de mando para el seguimiento de KPIs.",
          "Supervisión y mejora del seguimiento de automatizaciones RPA y de su eficiencia.",
        ],
      },
      en: {
        role: "Data Analysis & Process Optimisation",
        date: "04/2026 – Present",
        points: [
          "Extraction, analysis and validation of billing data with SQL; anomaly and incident detection.",
          "Mapping of regulatory reporting processes, source review and identification of automation opportunities.",
          "Development and optimisation of KPI dashboards.",
          "Monitoring and improvement of RPA automation tracking and efficiency.",
        ],
      },
    },
    {
      company: "Drimay Consultores",
      es: {
        role: "Inteligencia Artificial y Machine Learning",
        date: "02/2026 – 05/2026",
        points: [
          "Análisis de modelos de Machine Learning y documentación técnica para estudiar soluciones de IA aplicadas a un gemelo digital en el sector agrícola.",
        ],
      },
      en: {
        role: "Artificial Intelligence & Machine Learning",
        date: "02/2026 – 05/2026",
        points: [
          "Analysis of Machine Learning models and technical documentation to study AI solutions for a digital twin in the agricultural sector.",
        ],
      },
    },
  ],

  education: [
    {
      es: { title: "Grado en Física", place: "Universidad de Sevilla", date: "2019 – Actualidad", text: "Base matemática y estadística, modelización y resolución de problemas complejos." },
      en: { title: "Bachelor's Degree in Physics", place: "University of Seville", date: "2019 – Present", text: "Mathematical and statistical foundations, modelling and complex problem solving." },
    },
    {
      es: { title: "Especialización en Data Science e Inteligencia Artificial", place: "UNIR", date: "11/2025 – 07/2026", text: "Machine Learning, Deep Learning, IA generativa, modelización predictiva y analítica avanzada." },
      en: { title: "Specialisation in Data Science & Artificial Intelligence", place: "UNIR", date: "11/2025 – 07/2026", text: "Machine Learning, Deep Learning, generative AI, predictive modelling and advanced analytics." },
    },
    {
      es: { title: "Máster en Gestión Organizacional, Competencias Clave y Analítica de Datos", place: "Universidad Camilo José Cela", date: "05/2026 – Actualidad", text: "" },
      en: { title: "Master's in Organisational Management, Key Competencies and Data Analytics", place: "Camilo José Cela University", date: "05/2026 – Present", text: "" },
    },
  ],

  skills: [
    { es: "IA y RAG", en: "AI & RAG", items: ["Embeddings", "Chunking", "Qdrant", "Rerankers", "Text-to-SQL", "LLM"] },
    { es: "Lenguajes y datos", en: "Languages & data", items: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "PostgreSQL"] },
    { es: "Visualización", en: "Visualisation", items: ["Power BI", "Matplotlib", "Seaborn", { es: "Excel avanzado", en: "Advanced Excel" }] },
    { es: "Modelización", en: "Modelling", items: ["MATLAB", "Simulink"] },
    { es: "Otras", en: "Other", items: ["Microsoft 365", "SAP"] },
  ],

  languages: {
    es: [["Español", "Nativo"], ["Inglés", "B1"]],
    en: [["Spanish", "Native"], ["English", "B1"]],
  },
};
