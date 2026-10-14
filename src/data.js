// Contenido del portfolio (ES/EN). Editar aquí, no en App.jsx.
// Todo lo que aparece está sacado de los repos públicos de github.com/xNeku y del CV.

export const GH = 'https://github.com/xNeku';

// Cambia aquí la foto (poner el archivo nuevo en /public y apuntar a él)
export const PHOTO_URL = './NICO.png';

export const SOCIALS_DATA = [
  { id: 'github', url: GH, title: 'GitHub' },
  { id: 'linkedin', url: 'https://www.linkedin.com/in/nicolás-díaz-ulloa-5398b9314/', title: 'LinkedIn' },
  { id: 'email', url: 'mailto:nicodzu@gmail.com', title: 'Email' },
];

export const UI = {
  es: {
    close: 'Cerrar [E]', navigation: 'Navegación', interact: 'Interactuar / Cerrar',
    connect: 'CONECTAR CON', openLink: 'ABRIR ENLACE:', back: 'Volver', repo: 'Ver en GitHub',
    live: 'Probar en vivo', swipe: 'Desliza', language: 'Idioma', noFile: 'Sin archivo',
    closeHint: 'Presiona ESC o click fuera para cerrar', all: 'Todos',
    status: { playable: 'Jugable', wip: 'En desarrollo', proto: 'Prototipo', live: 'En vivo', done: 'Completado', beta: 'Beta' },
    groups: { games: 'Juegos', ai: 'IA y visión', apps: 'Apps y web', systems: 'Redes y sistemas' },
  },
  en: {
    close: 'Close [E]', navigation: 'Navigation', interact: 'Interact / Close',
    connect: 'CONNECT WITH', openLink: 'OPEN LINK:', back: 'Back', repo: 'View on GitHub',
    live: 'Try it live', swipe: 'Swipe', language: 'Language', noFile: 'No file',
    closeHint: 'Press ESC or click outside to close', all: 'All',
    status: { playable: 'Playable', wip: 'In development', proto: 'Prototype', live: 'Live', done: 'Completed', beta: 'Beta' },
    groups: { games: 'Games', ai: 'AI & vision', apps: 'Apps & web', systems: 'Networks & systems' },
  },
};

export const CONTENT = {
  es: {
    hero_title: 'NICOLÁS DÍAZ ULLOA',
    hero_subtitle: 'Game Dev · IA · Redes y Sistemas',
    hero_content:
      'Técnico de redes en una planta industrial de ALCOA y, fuera de horas, desarrollador de videojuegos y de apps con IA. ' +
      'Estudio los últimos créditos de Ingeniería Informática (Universidad de Oviedo). Configuro switches y puntos de acceso Cisco industriales por el día ' +
      'y por la noche monto juegos en Godot, Unity y C++, automatizaciones y prototipos de visión por computador, todo en repositorios públicos (35+) ' +
      'y desplegado en mi propio VPS. Aprendo rápido, depuro con paciencia y trabajo cómodo dirigiendo agentes de IA como parte del flujo normal.',
    hero_tags: ['Godot', 'Unity', 'C++', 'IA / Agentes', 'Redes Cisco', 'Linux / VPS'],

    experience_title: 'EXPERIENCIA',
    experience_subtitle: 'Trabajo y prácticas',
    experience: [
      {
        name: 'TÉCNICO DE REDES · COTELSA (subcontrata de ALCOA)',
        period: 'Lugo · 2026 – Actualidad',
        list: [
          'Configuración y pruebas de equipamiento de red industrial: switches Cisco serie IE por consola y puntos de acceso Wi-Fi industriales Cisco.',
          'Puesta en marcha y validación de un punto de acceso en modo workgroup bridge (VLAN, direccionamiento de gestión, antena) con comprobación de conectividad extremo a extremo.',
          'Adaptación de ficheros de configuración existentes a equipos nuevos.',
        ],
      },
      {
        name: 'TÉCNICO DE INFRAESTRUCTURA IT · UNIVERSIDAD DE OVIEDO',
        period: 'EPI Gijón · Nov 2025 – Jun 2026',
        list: [
          'Resolución de incidencias de hardware, red y software en el entorno académico.',
          'Automatización con Python y Bash de instalaciones de sistema operativo y puesta a punto de entornos, sustituyendo procesos manuales por scripts versionados.',
          'Despliegue y mantenimiento de máquinas virtuales en redes locales.',
        ],
      },
      {
        name: 'DATA ENGINEERING Y AUTOMATIZACIÓN · RAIOLA NETWORKS',
        period: 'Prácticas · Jun – Sep 2024',
        list: [
          'Pipelines de datos con Python y n8n; APIs REST y webhooks.',
          'Sistema de fine-tuning + RAG para reproducir el estilo de comunicación de la dirección: extracción masiva con plugins PHP de WordPress, flujos de Make.com y transcripción automática de YouTube.',
        ],
      },
    ],

    systems_title: 'REDES Y SISTEMAS',
    systems_subtitle: 'Lo que hago en la planta',
    systems_content:
      'Trabajo con red industrial real: la que mantiene una fábrica funcionando. Me muevo con soltura entre la consola del switch, el servidor Linux y el script que automatiza lo repetitivo. ' +
      'Esa mezcla es la que luego aplico a mis propios proyectos: mi infraestructura es un VPS que administro yo mismo.',
    systems_cards: [
      { name: 'RED INDUSTRIAL', list: 'Cisco IE (switches), Wi-Fi industrial Cisco, workgroup bridge, VLAN, direccionamiento, consola serie (PuTTY).' },
      { name: 'SISTEMAS', list: 'Linux/Bash, máquinas virtuales, instalaciones automatizadas de SO, resolución de incidencias.' },
      { name: 'DEVOPS PERSONAL', list: 'VPS propio con Docker, Nginx y Compose; cPanel; GitHub Actions para desplegar.' },
      { name: 'AUTOMATIZACIÓN', list: 'Python, n8n, Make.com, webhooks y APIs REST para integrar sistemas.' },
    ],

    stack_title: 'STACK',
    stack_subtitle: 'Tecnologías y herramientas',
    stack: [
      { name: 'VIDEOJUEGOS', list: 'Godot 4 (GDScript, multijugador ENet/RPC), Unity (C#), C++17/20 con raylib, diseño de sistemas y herramientas de nivel.' },
      { name: 'IA', list: 'Agentes de código (Claude Code, Codex, Cursor), prompt engineering, RAG y fine-tuning, visión por computador (OpenCV, MediaPipe).' },
      { name: 'WEB Y APPS', list: 'React, TypeScript, Three.js, Tailwind, Flutter, SwiftUI, PHP/WordPress (plugins propios), Appwrite, PocketBase.' },
      { name: 'REDES', list: 'Cisco industrial, VLAN, Wi-Fi corporativo, TCP/IP, troubleshooting.' },
      { name: 'BACKEND Y DATOS', list: 'Python, Java/Spring Boot, SQL, Node/Express, n8n y Make.com.' },
      { name: 'INFRA', list: 'Linux, Docker, Nginx, Git/GitHub Actions, VPS, cPanel.' },
    ],

    projects_title: 'PROYECTOS',
    projects_subtitle: 'Juegos, IA, apps y sistemas',
    projects_content:
      'Más de 30 repositorios públicos. Son prototipos que se pueden abrir y ejecutar, no copias de tutoriales. Los juegos van primero: es lo que más disfruto construyendo.',

    why_title: 'POR QUÉ YO',
    why_subtitle: 'Un perfil poco habitual en planta',
    why_content:
      'Entiendo la red industrial y también sé programar el software que la rodea. ' +
      'Aprendo rápido (varios motores y lenguajes en proyectos reales), busco la causa de los fallos en lugar de parchearlos y me gusta trabajar en equipo. ' +
      'Me muevo bien con la IA como herramienta de trabajo: sé dirigirla, revisar lo que genera y detectar cuándo se equivoca. ' +
      'Disponible para trabajo remoto o presencial en Galicia, Asturias y Madrid.',
    why_tags: ['Resolutivo', 'Aprendo rápido', 'Trabajo en equipo', 'Proactivo', 'Polifacético'],
  },
  en: {
    hero_title: 'NICOLÁS DÍAZ ULLOA',
    hero_subtitle: 'Game Dev · AI · Networks & Systems',
    hero_content:
      'Network technician at an ALCOA industrial plant and, off the clock, a game developer and AI app builder. ' +
      'Finishing my Computer Engineering degree (University of Oviedo). By day I configure industrial Cisco switches and access points; ' +
      'by night I build games in Godot, Unity and C++, automations and computer vision prototypes, all in public repositories (35+) ' +
      'and deployed on my own VPS. I learn fast, debug patiently, and I am comfortable directing AI coding agents as part of my normal workflow.',
    hero_tags: ['Godot', 'Unity', 'C++', 'AI / Agents', 'Cisco networks', 'Linux / VPS'],

    experience_title: 'EXPERIENCE',
    experience_subtitle: 'Work and internships',
    experience: [
      {
        name: 'NETWORK TECHNICIAN · COTELSA (ALCOA subcontractor)',
        period: 'Lugo, Spain · 2026 – Present',
        list: [
          'Configuring and testing industrial network equipment: Cisco IE-series switches over console and Cisco industrial Wi-Fi access points.',
          'Set up and validated a workgroup-bridge access point (VLAN, management addressing, antenna) and verified end-to-end connectivity.',
          'Adapting existing switch configuration files to new devices.',
        ],
      },
      {
        name: 'IT INFRASTRUCTURE TECHNICIAN · UNIVERSITY OF OVIEDO',
        period: 'EPI Gijón · Nov 2025 – Jun 2026',
        list: [
          'Solved day-to-day hardware, network and software issues in the academic environment.',
          'Used Python and Bash to automate OS installs and environment setup, replacing manual procedures with version-controlled scripts.',
          'Deployed and maintained virtual machines on local networks.',
        ],
      },
      {
        name: 'DATA ENGINEERING & AUTOMATION · RAIOLA NETWORKS',
        period: 'Internship · Jun – Sep 2024',
        list: [
          'Data pipelines with Python and n8n; REST APIs and webhooks.',
          'Fine-tuning + RAG system to reproduce the management team’s communication style: bulk extraction through WordPress PHP plugins, Make.com flows and automatic YouTube transcription.',
        ],
      },
    ],

    systems_title: 'NETWORKS & SYSTEMS',
    systems_subtitle: 'What I do on the plant floor',
    systems_content:
      'I work with real industrial networking: the kind that keeps a factory running. I move comfortably between the switch console, the Linux server and the script that automates the repetitive part. ' +
      'That mix is what I bring to my own projects: my infrastructure is a VPS I administer myself.',
    systems_cards: [
      { name: 'INDUSTRIAL NETWORK', list: 'Cisco IE switches, Cisco industrial Wi-Fi, workgroup bridge, VLANs, addressing, serial console (PuTTY).' },
      { name: 'SYSTEMS', list: 'Linux/Bash, virtual machines, automated OS installs, incident troubleshooting.' },
      { name: 'PERSONAL DEVOPS', list: 'Own VPS with Docker, Nginx and Compose; cPanel; GitHub Actions to deploy.' },
      { name: 'AUTOMATION', list: 'Python, n8n, Make.com, webhooks and REST APIs to integrate systems.' },
    ],

    stack_title: 'STACK',
    stack_subtitle: 'Technologies & tools',
    stack: [
      { name: 'GAME DEV', list: 'Godot 4 (GDScript, ENet/RPC multiplayer), Unity (C#), C++17/20 with raylib, systems design and level tooling.' },
      { name: 'AI', list: 'Coding agents (Claude Code, Codex, Cursor), prompt engineering, RAG and fine-tuning, computer vision (OpenCV, MediaPipe).' },
      { name: 'WEB & APPS', list: 'React, TypeScript, Three.js, Tailwind, Flutter, SwiftUI, PHP/WordPress (own plugins), Appwrite, PocketBase.' },
      { name: 'NETWORKING', list: 'Industrial Cisco, VLANs, enterprise Wi-Fi, TCP/IP, troubleshooting.' },
      { name: 'BACKEND & DATA', list: 'Python, Java/Spring Boot, SQL, Node/Express, n8n and Make.com.' },
      { name: 'INFRA', list: 'Linux, Docker, Nginx, Git/GitHub Actions, VPS, cPanel.' },
    ],

    projects_title: 'PROJECTS',
    projects_subtitle: 'Games, AI, apps and systems',
    projects_content:
      '30+ public repositories. They are prototypes you can open and run, not tutorial copies. Games come first: it is what I enjoy building the most.',

    why_title: 'WHY ME',
    why_subtitle: 'An unusual profile for a plant',
    why_content:
      'I understand industrial networking and I can also write the software around it. ' +
      'I learn fast (several engines and languages in real projects), I look for the cause of a fault instead of patching it, and I like working in a team. ' +
      'I am good with AI as a working tool: I know how to direct it, review what it produces and tell when it is wrong. ' +
      'Available remote or on-site in Galicia, Asturias and Madrid.',
    why_tags: ['Problem solver', 'Fast learner', 'Team player', 'Proactive', 'Polymath'],
  },
};

const L = (es, en) => ({ es, en });

// group: games | ai | apps | systems
export const PROJECTS = [
  // ---------- JUEGOS ----------
  {
    id: 'dopaminelord', group: 'games', title: 'DopamineLord', status: 'wip', category: 'Godot 4.7',
    short: L('ARPG isométrico 2D: builds y loot tipo Diablo 2, mundos por semilla tipo Terraria.',
             '2D isometric ARPG: Diablo 2 style builds and loot, Terraria style seeded worlds.'),
    desc: L('ARPG isométrico 2D en Godot que mezcla builds, loot y árbol de habilidades de Diablo 2 con mundos por semilla, bosses y progresión por hitos de Terraria. Coop de hasta 4 jugadores y mando desde el principio. El diseño completo y las decisiones viven en documentos dentro del repo.',
            '2D isometric ARPG in Godot mixing Diablo 2 builds, loot and skill tree with Terraria style seeded worlds, bosses and milestone progression. Up to 4-player co-op and controller support from day one. Full design and decisions are documented in the repo.'),
    stack: ['Godot 4', 'GDScript', 'Co-op', 'Game design'], repo: 'DopamineLord', icon: './priesto.png', media: [{ type: 'image', url: './priesto.png' }],
  },
  {
    id: 'fishmaboolla', group: 'games', title: 'Fishmaboolla', status: 'wip', category: 'Godot',
    short: L('Arcade tipo Pang + pesca exprés + roguelike, con un marinero gallego y gaviotas que se dividen.',
             'Pang-style arcade + quick fishing + roguelike, with a Galician sailor and splitting seagulls.'),
    desc: L('Arcade 2D tipo Pang combinado con pesca exprés y progresión roguelike. Un marinero gallego dispara a gaviotas que botan y se dividen. Diseño completo documentado; el arte lo dibujo yo a mano y el prototipo usa formas dibujadas por código mientras tanto.',
            '2D Pang-style arcade combined with quick fishing and roguelike progression. A Galician sailor shoots seagulls that bounce and split. Full design documented; I draw the art by hand and the prototype uses code-drawn shapes in the meantime.'),
    stack: ['Godot 4', 'GDScript', 'Roguelike', 'Data-driven'], repo: 'fishmaboolla', icon: null, media: [],
  },
  {
    id: 'godot-mp', group: 'games', title: 'Godot Multiplayer Arena', status: 'playable', category: 'Godot 4 · Multiplayer',
    short: L('Arena 2D en red con lobby, clases, armas y habilidades (ENet, RPC).',
             'Networked 2D arena with lobby, classes, weapons and abilities (ENet, RPC).'),
    desc: L('Prototipo de arena 2D en red con la API multijugador de alto nivel de Godot 4 (ENet). Flujo host/cliente con sala y desconexiones, control por autoridad y sincronización remota, sistema de clases y armas con recursos de datos, disparo, gadgets arrojadizos, habilidades con cooldown y puntuación.',
            'Networked 2D arena prototype using Godot 4 high-level multiplayer (ENet). Host/client flow with rooms and disconnect handling, authority-based control and remote sync, class and weapon data resources, shooting, throwable gadgets, cooldown abilities and scoring.'),
    stack: ['Godot 4', 'ENet', 'RPC', 'GDScript'], repo: 'godot-multiplayer-high-level', icon: null, media: [],
  },
  {
    id: 'flashmapmaker', group: 'games', title: 'FlashMapMaker', status: 'live', category: 'Level editor · Web',
    short: L('Editor de mapas en una sola página HTML para el juego multijugador.',
             'Single-page HTML map editor for the multiplayer game.'),
    desc: L('Editor de niveles que construí para el juego multijugador: una sola página HTML sin build ni dependencias, autoguardado en el navegador, validación de los límites que acepta el juego y guardado directo de mapas JSON en el repo del juego.',
            'Level editor I built for the multiplayer game: a single HTML page with no build or dependencies, browser autosave, validation against the limits the game accepts, and direct saving of JSON maps into the game repo.'),
    stack: ['JavaScript', 'HTML/CSS', 'GitHub Pages', 'Tooling'], repo: 'FlashMapMaker', live: 'https://xneku.github.io/FlashMapMaker/', icon: './flashedico.png', media: [{ type: 'image', url: './flashedico.png' }],
  },
  {
    id: 'roguelikewaw', group: 'games', title: 'RogueLikeWaw', status: 'proto', category: 'Unity · C#',
    short: L('Survivor de oleadas con auto-combate, XP y combos elementales.',
             'Wave survivor with auto-combat, XP and elemental combos.'),
    desc: L('Prototipo top-down de acción y supervivencia en Unity (~5.000 líneas de C#): nuevo Input System, auto-apuntado y disparo con selección por prioridad, oleadas de enemigos con pools aleatorios, vida/daño/muerte con drops de loot y gemas de XP, menú de mejoras y sistema de combinación de elementos.',
            'Top-down action-survivor prototype in Unity (~5,000 lines of C#): new Input System, auto-target and auto-shoot with priority selection, enemy waves with randomized pools, health/damage/death with loot and XP gem drops, upgrade menu and an elemental combination system.'),
    stack: ['Unity', 'C#', 'Input System', 'Roguelike'], repo: 'RogueLikeWaw', icon: null, media: [],
  },
  {
    id: 'clerigo', group: 'games', title: 'Clerigo', status: 'proto', category: 'Unity · C#',
    short: L('Combate en primera persona con melee y magia.', 'First-person combat with melee and magic.'),
    desc: L('Prototipo de clérigo en primera persona que combina ataque cuerpo a cuerpo (cooldown y raycast desde cámara) y magia a distancia con proyectiles. Movimiento con CharacterController, cámara con ratón, vida de enemigos con barra de UI y limpieza al morir.',
            'First-person cleric prototype combining melee (cooldown and camera raycast) and ranged magic with projectiles. CharacterController movement, mouse look, enemy health with UI bar and death cleanup.'),
    stack: ['Unity', 'C#', 'FPS'], repo: 'CLERIGO-gamelikewaw', icon: null, media: [],
  },
  {
    id: 'tong', group: 'games', title: 'TONG', status: 'playable', category: 'Unity · C#',
    short: L('Pong con IA predictiva y bucle de partida completo.', 'Pong with predictive AI and a full match loop.'),
    desc: L('Arcade 2D tipo Pong con pala controlada por IA (predicción de trayectoria, zona muerta y vuelta a posición), velocidad progresiva con tope, zonas de gol, saques con retardo y condiciones de victoria y reinicio.',
            '2D Pong-style arcade with an AI paddle (trajectory prediction, dead zone and home return), progressive speed with cap, goal zones, serve delays and win/restart conditions.'),
    stack: ['Unity', 'C#', 'AI behaviour'], repo: 'tong-unity', icon: null, media: [],
  },
  {
    id: 'pool-party', group: 'games', title: 'Pool Party', status: 'proto', category: 'C++17 · raylib',
    short: L('Bullet hell roguelike con gestión de memoria a bajo nivel.', 'Bullet hell roguelike showcasing low-level memory management.'),
    desc: L('Bullet hell roguelike en C++17 con raylib, pensado para mostrar patrones de gestión de memoria a bajo nivel. Compila con CMake en macOS y Linux.',
            'Bullet hell roguelike in C++17 with raylib, built to showcase low-level memory management patterns. Builds with CMake on macOS and Linux.'),
    stack: ['C++17', 'raylib', 'CMake'], repo: 'pool-party', icon: null, media: [],
  },
  {
    id: 'slapball', group: 'games', title: 'SlapBall', status: 'proto', category: 'C++17 · raylib',
    short: L('Voleibol ragdoll 2D guiado por físicas.', '2D ragdoll volleyball driven by physics.'),
    desc: L('Dos jugadores ragdoll a ambos lados de una red, con jugabilidad dirigida por físicas. C++17 y raylib, con build CMake.',
            'Two ragdoll players on opposite sides of a net with physics-driven gameplay. C++17 and raylib, CMake build.'),
    stack: ['C++17', 'raylib', 'Physics'], repo: 'slapball', icon: null, media: [],
  },
  {
    id: 'alchemy', group: 'games', title: 'Alchemist Incremental', status: 'wip', category: 'C++20',
    short: L('Incremental de consola con arquitectura de motor: delta-time, RAII y contenido por datos.',
             'Console incremental with engine-style architecture: delta-time, RAII and data-driven content.'),
    desc: L('Juego incremental de consola en C++20 con arquitectura pensada como la de un motor: simulación con delta-time, RAII estricto, contenido dirigido por datos y separación limpia entre lógica de juego y renderizado.',
            'Console incremental game in modern C++20 with engine-minded architecture: delta-time simulation, strict RAII, data-driven content and a clean split between game logic and rendering.'),
    stack: ['C++20', 'CMake', 'Data-driven'], repo: 'Alchemy-', icon: null, media: [],
  },
  {
    id: 'withdrawal', group: 'games', title: 'Withdrawal', status: 'proto', category: 'Godot',
    short: L('Supervivencia 2D con sistema de inventario.', '2D survival with an inventory system.'),
    desc: L('Prototipo de supervivencia y aventura 2D con inventario como singleton (stacks y límite de slots), barra rápida y mochila con UI reactiva por señales, e inyección de objetos en ejecución para balancear rápido.',
            '2D survival-adventure prototype with a singleton inventory (stacking and slot limits), hotbar and backpack with signal-driven UI and runtime item injection for fast balancing.'),
    stack: ['Godot', 'GDScript', 'Signals'], repo: 'withdrawal-godot', icon: null, media: [],
  },
  {
    id: 'nomikai', group: 'games', title: 'Nomikai', status: 'proto', category: 'Godot',
    short: L('Acción 2D con combate de recoger y lanzar objetos.', '2D action with pickup-and-throw combat.'),
    desc: L('Prototipo de acción 2D: control del personaje con animaciones, recogida contextual por proximidad, objeto equipado visible mediante puntos de anclaje y proyectiles arrojadizos con protección contra autodaño.',
            '2D action prototype: character controller with animations, contextual proximity pickup, equipped item shown through attach points and throwable projectiles with self-hit protection.'),
    stack: ['Godot', 'GDScript'], repo: 'nomikai-game', icon: null, media: [],
  },
  {
    id: 'movida-greed', group: 'games', title: 'Movida Greed', status: 'proto', category: 'Godot',
    short: L('Shooter top-down de supervivencia contra oleadas de zombis.', 'Top-down survival shooter against zombie waves.'),
    desc: L('Shooter top-down donde se esquivan oleadas de zombis: apuntado con ratón, disparo, spawn temporizado desde fuera de pantalla e IA de persecución.',
            'Top-down shooter where you kite zombie waves: mouse aiming, shooting, timed off-screen spawning and pursuit AI.'),
    stack: ['Godot', 'GDScript'], repo: 'movida-greed', icon: null, media: [],
  },

  // ---------- IA Y VISIÓN ----------
  {
    id: 'rag', group: 'ai', title: 'RAG + Fine-tuning', status: 'done', category: 'AI · Data pipeline',
    short: L('Sistema para replicar el estilo de comunicación de una dirección ejecutiva.',
             'System to replicate an executive team’s communication style.'),
    desc: L('Proyecto de prácticas en Raiola Networks. Extracción masiva de contenido con plugins PHP de WordPress, flujos de Make.com y transcripción automática de YouTube, orquestado con scripts Python propios y con IA para normalizar el corpus de entrenamiento. Código no público.',
            'Internship project at Raiola Networks. Bulk content extraction through WordPress PHP plugins, Make.com flows and automatic YouTube transcription, orchestrated with custom Python scripts and AI to normalise the training corpus. Code is not public.'),
    stack: ['Python', 'n8n', 'Make.com', 'WordPress/PHP', 'Webhooks'], repo: null, icon: null, media: [],
  },
  {
    id: 'instrumento-ai', group: 'ai', title: 'Instrumento AI', status: 'proto', category: 'Computer vision',
    short: L('Controla un instrumento con gestos de la mano a través de la webcam.', 'Control an instrument with hand gestures through the webcam.'),
    desc: L('Detección de puntos de la mano en tiempo real con MediaPipe, seguimiento de dedos desde la webcam y salida de mensajes OSC para controlar software de audio externo.',
            'Real-time hand landmark detection with MediaPipe, finger tracking from webcam frames and OSC message output to drive external audio software.'),
    stack: ['Python', 'OpenCV', 'MediaPipe', 'OSC'], repo: 'instrumento-ai', icon: null, media: [],
  },
  {
    id: 'smokecam', group: 'ai', title: 'SmokeCam', status: 'proto', category: 'Computer vision',
    short: L('Detección de eventos por proximidad mano-boca en tiempo real.', 'Event detection from hand-to-mouth proximity in real time.'),
    desc: L('Seguimiento de cara y manos en tiempo real, heurística de distancia mano-boca para detectar el gesto y HUD en pantalla con estado y contador.',
            'Real-time face and hand tracking, a hand-to-mouth distance heuristic to detect the gesture and an on-screen HUD with state and counter.'),
    stack: ['Python', 'OpenCV', 'MediaPipe'], repo: 'smokecam', icon: null, media: [],
  },

  // ---------- APPS Y WEB ----------
  {
    id: 'smartrack', group: 'apps', title: 'SmarTrack', status: 'beta', category: 'macOS native',
    short: L('App nativa de productividad para macOS con sincronización Obsidian.', 'Native macOS productivity app with Obsidian sync.'),
    desc: L('App de macOS (~5.000 líneas de Swift) para tareas, rutinas, retos de hábitos y eventos. Prioridades y categorías, rachas, calendario semanal, sincronización en tiempo real con Obsidian en Markdown, notificaciones y widget. 100% frameworks de Apple: SwiftData, SwiftUI y WidgetKit. La uso a diario.',
            'macOS app (~5,000 lines of Swift) for tasks, routines, habit challenges and events. Priorities and categories, streaks, weekly calendar, real-time Obsidian Markdown sync, notifications and widget. 100% Apple frameworks: SwiftData, SwiftUI and WidgetKit. I use it daily.'),
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'WidgetKit'], repo: 'SmarTrack', icon: null,
    media: [{ type: 'image', url: './SmarTrack1.png' }, { type: 'image', url: './SmarTrack2.png' }],
  },
  {
    id: 'pokerat', group: 'apps', title: 'PokeRat', status: 'done', category: 'Python desktop',
    short: L('Herramienta que lee partidas guardadas de Pokémon y analiza tu equipo.', 'Tool that reads Pokémon save files and analyses your team.'),
    desc: L('Herramienta de escritorio en Python (Tkinter) que inspecciona los archivos de guardado .rxdata, analiza el equipo y al rival y da apoyo de combate. Incluye un script extra para depurar los IDs internos de los movimientos.',
            'Python desktop tool (Tkinter) that inspects .rxdata save files, analyses your team and the rival and supports battle decisions. Includes an extra script to debug internal move IDs.'),
    stack: ['Python', 'Tkinter', 'Pillow', 'rubymarshal'], repo: 'pokemonhub', icon: './PokeRatIco.png',
    media: [{ type: 'image', url: './PokeRat1.png' }, { type: 'image', url: './PokeRat2.png' }, { type: 'image', url: './PokeRat3.png' }],
  },
  {
    id: 'gamhub', group: 'apps', title: 'GamHub', status: 'proto', category: 'Flutter + PocketBase',
    short: L('Red social de videojuegos: app Flutter con backend PocketBase en Docker.', 'Social gaming app: Flutter client with a PocketBase backend in Docker.'),
    desc: L('App móvil en Flutter con login, estructura de pestañas (Feed, Biblioteca, Perfil) y backend PocketBase levantado con Docker Compose. Hay más prototipos Flutter en mi GitHub (jub, myhub, newhub, smokenow).',
            'Flutter mobile app with login, tab structure (Feed, Library, Profile) and a PocketBase backend brought up with Docker Compose. More Flutter prototypes on my GitHub (jub, myhub, newhub, smokenow).'),
    stack: ['Flutter', 'Dart', 'PocketBase', 'Docker Compose'], repo: 'gamhub', icon: null, media: [],
  },
  {
    id: 'social-game', group: 'apps', title: 'Social Game Project', status: 'proto', category: 'React · TypeScript',
    short: L('Web social con auth, perfiles y publicaciones.', 'Social web app with auth, profiles and posts.'),
    desc: L('Prototipo de red social en React y TypeScript: rutas públicas y privadas, estado de autenticación con contexto, capa de datos con React Query y Appwrite, UI con Tailwind y Radix/shadcn.',
            'Social web app prototype in React and TypeScript: public/private routes, context-based auth state, React Query and Appwrite data layer, UI with Tailwind and Radix/shadcn.'),
    stack: ['React', 'TypeScript', 'Appwrite', 'Tailwind'], repo: 'social-game-project', icon: null, media: [],
  },
  {
    id: 'wp-plugin', group: 'apps', title: 'Plugin WordPress', status: 'proto', category: 'PHP · WordPress',
    short: L('Plugin propio con shortcodes y datos de la API de WordPress.org.', 'Own plugin with shortcodes and WordPress.org API data.'),
    desc: L('Plugin de WordPress en PHP que consulta la API de WordPress.org, usa ACF para introducir el slug y muestra los datos con shortcodes. Parte de mi trabajo con plugins propios y webhooks para n8n y Make.',
            'PHP WordPress plugin that queries the WordPress.org API, uses ACF for the slug input and renders data through shortcodes. Part of my work with own plugins and webhooks for n8n and Make.'),
    stack: ['PHP', 'WordPress', 'ACF'], repo: 'php-learning-plugin-extractor', icon: null, media: [],
  },
  {
    id: 'portfolio-3d', group: 'apps', title: 'Portfolio 3D', status: 'proto', category: 'React · Three.js',
    short: L('Portfolio animado con Three.js y React Three Fiber.', 'Animated portfolio with Three.js and React Three Fiber.'),
    desc: L('Portfolio de una página con secciones animadas y componentes 3D con Three.js, React Three Fiber y Framer Motion.',
            'One-page portfolio with animated sections and 3D components using Three.js, React Three Fiber and Framer Motion.'),
    stack: ['React', 'Three.js', 'R3F', 'Framer Motion'], repo: 'n3ku-portfolio-react', icon: null, media: [],
  },
  {
    id: 'portfolio-web', group: 'apps', title: 'Este portfolio', status: 'live', category: 'React 19 · Vite',
    short: L('El mundo que estás recorriendo: React 19, Vite, Tailwind 4, Framer Motion.', 'The world you are walking through: React 19, Vite, Tailwind 4, Framer Motion.'),
    desc: L('Portfolio interactivo con modo juego (WASD y E) en escritorio y carrusel en móvil. React 19, Vite, Tailwind CSS 4 y Framer Motion, bilingüe ES/EN, con despliegue automático en GitHub Pages y también en Docker/Nginx.',
            'Interactive portfolio with a game mode (WASD and E) on desktop and a swipe carousel on mobile. React 19, Vite, Tailwind CSS 4 and Framer Motion, bilingual ES/EN, auto-deployed to GitHub Pages and also available on Docker/Nginx.'),
    stack: ['React 19', 'Vite', 'Tailwind 4', 'Framer Motion', 'Docker'], repo: 'portfolio', icon: null, media: [],
  },
];
