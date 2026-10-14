// Contenido del portfolio (ES/EN). Editar aquí, no en App.jsx.
// Todo lo que aparece está sacado de los repos públicos de github.com/xNeku y del CV.

export const GH = 'https://github.com/xNeku';

// Cambia aquí la foto (poner el archivo nuevo en /public y apuntar a él)
export const PHOTO_URL = './NICO.jpg';

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
    closeHint: 'Presiona ESC o click fuera para cerrar', all: 'Todos', featured: 'Destacado', tech: 'Apartado técnico', concept: 'Concepto',
    status: { used: 'En uso', playable: 'Jugable', wip: 'En desarrollo', proto: 'Prototipo', live: 'En vivo', done: 'Completado', beta: 'Beta' },
    groups: { games: 'Juegos', ai: 'IA y automatización', apps: 'Apps y web', systems: 'Redes y sistemas' },
  },
  en: {
    close: 'Close [E]', navigation: 'Navigation', interact: 'Interact / Close',
    connect: 'CONNECT WITH', openLink: 'OPEN LINK:', back: 'Back', repo: 'View on GitHub',
    live: 'Try it live', swipe: 'Swipe', language: 'Language', noFile: 'No file',
    closeHint: 'Press ESC or click outside to close', all: 'All', featured: 'Featured', tech: 'Technical side', concept: 'Concept',
    status: { used: 'In use', playable: 'Playable', wip: 'In development', proto: 'Prototype', live: 'Live', done: 'Completed', beta: 'Beta' },
    groups: { games: 'Games', ai: 'AI & automation', apps: 'Apps & web', systems: 'Networks & systems' },
  },
};

export const CONTENT = {
  es: {
    hero_title: 'NICOLÁS DÍAZ ULLOA',
    hero_subtitle: 'Videojuegos · IA · Redes y sistemas',
    hero_content:
      'Soy el técnico de redes y sistemas de Cotelsa en la fábrica de Alcoa de San Ciprián: por las mañanas dejo la red de la planta funcionando y por las tardes hago videojuegos y proyectos con IA. ' +
      'Estoy terminando Ingeniería Informática en la Universidad de Oviedo y tengo más de 35 repositorios públicos: juegos en Godot, Unity y C++, automatizaciones y algún experimento de visión por computador. ' +
      'Trabajo con agentes de IA a diario y me gusta aprender lo que haga falta para sacar las cosas adelante.',
    hero_tags: ['Godot', 'Unity', 'C++', 'Agentes de IA', 'Orquestación', 'Automatización', 'Redes Cisco', 'Active Directory', 'Linux / VPS'],

    experience_title: 'EXPERIENCIA',
    experience_subtitle: 'Dónde he trabajado',
    experience: [
      {
        name: 'TÉCNICO DE REDES Y SISTEMAS · COTELSA',
        period: 'Alcoa San Ciprián, Lugo · 2026 – actualidad',
        list: [
          'Cotelsa da soporte a la gestión eléctrica de la fábrica de Alcoa. Yo llevo toda la parte informática: red, sistemas y equipos.',
          'Instalo en planta switches, controladoras y puntos de acceso Wi-Fi Cisco industriales, que antes dejo configurados y probados (VLAN, direccionamiento, modo workgroup bridge).',
          'Administro las cuentas, los permisos y los equipos de la fábrica con Active Directory.',
          'Preparo PCs para uso industrial: les instalo el sistema, los configuro y, si hace falta, les cambio el hardware aprovechando material que ya hay por la planta. Cuando el hardware antiguo no cumple los requisitos de Windows, busco la forma de que se pueda instalar igualmente.',
          'Gestiono los parches y actualizaciones de los equipos de toda la planta (Windows 10 y 11), con criterios distintos según para qué se use cada uno.',
          'Participo en la conexión de red entre las plantas de Alcoa.',
        ],
      },
      {
        name: 'TÉCNICO DE INFRAESTRUCTURA IT · UNIVERSIDAD DE OVIEDO',
        period: 'EPI Gijón · nov 2025 – jun 2026',
        list: [
          'Resolvía incidencias de hardware, red y software del día a día.',
          'Automaticé con Python y Bash las instalaciones de sistema operativo y la preparación de equipos, que antes se hacían a mano.',
          'Desplegué y mantuve máquinas virtuales en redes locales.',
        ],
      },
      {
        name: 'DATA ENGINEERING Y AUTOMATIZACIÓN · RAIOLA NETWORKS',
        period: 'Prácticas · jun – sep 2024',
        list: [
          'Pipelines de datos con Python y n8n, con APIs REST y webhooks.',
          'Monté un sistema de fine-tuning y RAG para imitar el estilo de comunicación de la dirección, sacando el contenido con plugins de WordPress en PHP, flujos de Make.com y transcripciones automáticas de YouTube.',
        ],
      },
    ],

    systems_title: 'REDES Y SISTEMAS',
    systems_subtitle: 'Mi trabajo en la planta',
    systems_content:
      'En una fábrica la red no puede fallar, y de que no falle me encargo yo. Me muevo igual de cómodo con la consola de un switch que con Active Directory, con un PC al que hay que ponerle el sistema o con un script que ahorra horas de trabajo repetido. ' +
      'Esa mezcla de planta y programación es lo que me diferencia y lo que luego uso en mis propios proyectos.',
    systems_cards: [
      { name: 'RED INDUSTRIAL', list: 'Instalación y configuración de switches, controladoras y puntos de acceso Cisco: VLAN, direccionamiento, workgroup bridge y pruebas de conectividad.' },
      { name: 'ACTIVE DIRECTORY', list: 'Cuentas, permisos y equipos de toda la fábrica.' },
      { name: 'EQUIPOS INDUSTRIALES', list: 'Preparo PCs para planta: sistema operativo, ajustes, hardware reaprovechado y soluciones para instalar Windows en equipos que no cumplen los requisitos.' },
      { name: 'PARCHES Y ACTUALIZACIONES', list: 'Gestión de parches de todos los equipos de la planta (Windows 10 y 11) según el uso de cada uno.' },
      { name: 'ENLACE ENTRE PLANTAS', list: 'Conexión de red entre las distintas plantas de Alcoa.' },
      { name: 'AUTOMATIZACIÓN', list: 'Scripts en Python y Bash, n8n, Make y webhooks para quitarme de encima lo repetitivo.' },
      { name: 'MI PROPIO SERVIDOR', list: 'Un VPS que administro yo, con Docker, Nginx y GitHub Actions, donde despliego mis proyectos.' },
    ],

    stack_title: 'STACK',
    stack_subtitle: 'Con qué trabajo',
    stack: [
      { name: 'VIDEOJUEGOS', list: 'Godot 4 (GDScript y multijugador con ENet/RPC), Unity (C#), C++17/20 con raylib, diseño de sistemas y herramientas de niveles.' },
      { name: 'IA', list: 'Orquestación de agentes de código (Claude Code, Codex, Cursor) con roles separados, automatización con n8n, Make y webhooks, RAG, fine-tuning y visión por computador (OpenCV, MediaPipe).' },
      { name: 'WEB Y APPS', list: 'React, TypeScript, Three.js, Tailwind, Flutter, SwiftUI y PHP/WordPress con plugins propios. Appwrite y PocketBase de backend.' },
      { name: 'REDES', list: 'Cisco industrial, VLAN, Wi-Fi, TCP/IP y diagnóstico de problemas.' },
      { name: 'SISTEMAS', list: 'Active Directory, Linux, Bash, máquinas virtuales y puesta a punto de equipos.' },
      { name: 'BACKEND E INFRA', list: 'Python, Java/Spring Boot, SQL, Node, Docker, Nginx, Git y GitHub Actions.' },
    ],

    projects_title: 'PROYECTOS',
    projects_subtitle: 'Juegos, IA, apps y sistemas',
    projects_content:
      'Más de 30 repositorios públicos. Son prototipos que se pueden abrir y ejecutar, no copias de tutoriales. Los juegos van primero porque es lo que más disfruto haciendo.',

    why_title: 'POR QUÉ YO',
    why_subtitle: 'Un perfil poco común en una planta',
    why_content:
      'Entiendo la red de una fábrica y también sé programar lo que la rodea, así que puedo resolver un problema tanto en el armario del switch como en el código. ' +
      'Aprendo rápido, busco el porqué de los fallos en lugar de taparlos y me encuentro a gusto trabajando en equipo. ' +
      'La IA es una herramienta más de mi día a día: sé darle instrucciones claras, revisar lo que hace y darme cuenta cuando se equivoca. ' +
      'Estoy disponible en Galicia, Asturias y Madrid, o en remoto.',
    why_tags: ['Resolutivo', 'Aprendo rápido', 'Trabajo en equipo', 'Proactivo', 'Polifacético'],
  },
  en: {
    hero_title: 'NICOLÁS DÍAZ ULLOA',
    hero_subtitle: 'Games · AI · Networks & systems',
    hero_content:
      'I am the network and systems technician for Cotelsa at the Alcoa plant in San Ciprián: in the mornings I keep the plant network running, and in the afternoons I build games and AI projects. ' +
      'I am finishing my Computer Engineering degree at the University of Oviedo and have more than 35 public repositories: games in Godot, Unity and C++, automations and a few computer vision experiments. ' +
      'I work with AI agents every day and I like learning whatever it takes to get things done.',
    hero_tags: ['Godot', 'Unity', 'C++', 'AI agents', 'Orchestration', 'Automation', 'Cisco networks', 'Active Directory', 'Linux / VPS'],

    experience_title: 'EXPERIENCE',
    experience_subtitle: 'Where I have worked',
    experience: [
      {
        name: 'NETWORK AND SYSTEMS TECHNICIAN · COTELSA',
        period: 'Alcoa San Ciprián, Lugo · 2026 – present',
        list: [
          'Cotelsa supports the electrical management of the Alcoa plant. I handle everything IT: network, systems and equipment.',
          'I install industrial Cisco switches, controllers and Wi-Fi access points on the plant floor, after configuring and testing them beforehand (VLANs, addressing, workgroup bridge mode).',
          'I manage the plant’s accounts, permissions and machines with Active Directory.',
          'I prepare PCs for industrial use: I install the OS, configure them and, when needed, rework their hardware using parts already available around the plant. When older hardware does not meet Windows requirements, I find a way to get it installed anyway.',
          'I manage patching and updates for the plant’s machines (Windows 10 and 11), with different rules depending on what each one is used for.',
          'I take part in the network link between Alcoa’s plants.',
        ],
      },
      {
        name: 'IT INFRASTRUCTURE TECHNICIAN · UNIVERSITY OF OVIEDO',
        period: 'EPI Gijón · Nov 2025 – Jun 2026',
        list: [
          'Handled day-to-day hardware, network and software issues.',
          'Used Python and Bash to automate OS installs and machine setup that used to be done by hand.',
          'Deployed and maintained virtual machines on local networks.',
        ],
      },
      {
        name: 'DATA ENGINEERING & AUTOMATION · RAIOLA NETWORKS',
        period: 'Internship · Jun – Sep 2024',
        list: [
          'Data pipelines with Python and n8n, using REST APIs and webhooks.',
          'Built a fine-tuning and RAG system to mimic the management team’s communication style, pulling content through WordPress PHP plugins, Make.com flows and automatic YouTube transcripts.',
        ],
      },
    ],

    systems_title: 'NETWORKS & SYSTEMS',
    systems_subtitle: 'My work on the plant floor',
    systems_content:
      'In a factory the network cannot go down, and keeping it up is my job. I am just as comfortable with a switch console as with Active Directory, a PC that needs an OS or a script that saves hours of repetitive work. ' +
      'That mix of plant floor and programming is what sets me apart, and it is what I bring to my own projects.',
    systems_cards: [
      { name: 'INDUSTRIAL NETWORK', list: 'Installing and configuring Cisco switches, controllers and access points: VLANs, addressing, workgroup bridge and connectivity testing.' },
      { name: 'ACTIVE DIRECTORY', list: 'Accounts, permissions and machines across the whole plant.' },
      { name: 'INDUSTRIAL PCs', list: 'Preparing PCs for the plant: operating system, setup, reused hardware and workarounds to install Windows on machines that do not meet the requirements.' },
      { name: 'PATCH MANAGEMENT', list: 'Patching all the plant’s machines (Windows 10 and 11) according to how each one is used.' },
      { name: 'PLANT-TO-PLANT LINK', list: 'Network connection between Alcoa’s different plants.' },
      { name: 'AUTOMATION', list: 'Python and Bash scripts, n8n, Make and webhooks to get rid of repetitive work.' },
      { name: 'MY OWN SERVER', list: 'A VPS I run myself, with Docker, Nginx and GitHub Actions, where I deploy my projects.' },
    ],

    stack_title: 'STACK',
    stack_subtitle: 'What I work with',
    stack: [
      { name: 'GAME DEV', list: 'Godot 4 (GDScript and ENet/RPC multiplayer), Unity (C#), C++17/20 with raylib, systems design and level tooling.' },
      { name: 'AI', list: 'Orchestrating coding agents (Claude Code, Codex, Cursor) with separate roles, automation with n8n, Make and webhooks, RAG, fine-tuning and computer vision (OpenCV, MediaPipe).' },
      { name: 'WEB & APPS', list: 'React, TypeScript, Three.js, Tailwind, Flutter, SwiftUI and PHP/WordPress with my own plugins. Appwrite and PocketBase on the backend.' },
      { name: 'NETWORKING', list: 'Industrial Cisco, VLANs, Wi-Fi, TCP/IP and troubleshooting.' },
      { name: 'SYSTEMS', list: 'Active Directory, Linux, Bash, virtual machines and machine setup.' },
      { name: 'BACKEND & INFRA', list: 'Python, Java/Spring Boot, SQL, Node, Docker, Nginx, Git and GitHub Actions.' },
    ],

    projects_title: 'PROJECTS',
    projects_subtitle: 'Games, AI, apps and systems',
    projects_content:
      'More than 30 public repositories. They are prototypes you can open and run, not tutorial copies. Games come first because they are what I enjoy building most.',

    why_title: 'WHY ME',
    why_subtitle: 'An uncommon profile for a plant',
    why_content:
      'I understand a factory network and I can also write the software around it, so I can solve a problem in the switch cabinet or in the code. ' +
      'I learn fast, I look for why things fail instead of patching over them, and I enjoy working in a team. ' +
      'AI is just another tool in my day to day: I know how to give it clear instructions, review what it does and notice when it gets things wrong. ' +
      'I am available in Galicia, Asturias and Madrid, or remotely.',
    why_tags: ['Problem solver', 'Fast learner', 'Team player', 'Proactive', 'Polymath'],
  },
};

const L = (es, en) => ({ es, en });

// group: games | ai | apps | systems
export const PROJECTS = [
  // ---------- JUEGOS ----------
  {
    id: 'dopaminelord', group: 'games', featured: true, title: 'DopamineLord', status: 'wip', category: 'Godot 4.7 · ARPG coop',
    short: L('ARPG isométrico en 2D con builds y loot como Diablo 2, y mundos por semilla y coop como Terraria.',
             '2D isometric ARPG: Diablo 2 builds and loot, Terraria style seeded worlds and co-op.'),
    desc: L('Un ARPG isométrico en 2D que mezcla lo mejor de Diablo 2 (builds, árbol de habilidades, loot y farmeo) con Terraria (mundos generados por semilla, bosses que se invocan y coop con amigos). Cada jugador crea su mundo y lo comparte, y los personajes no dependen del mundo. El mundo son anillos de biomas cada vez más difíciles, con tres ramas de combate (cuerpo a cuerpo, rango y magia) que se especializan en los niveles 25, 50 y 75, además de gemas con shaders y crafteo. El diseño, el arte y los sistemas los hago yo solo, con la IA como ayudante de código.',
            '2D isometric ARPG mixing Diablo 2 (builds, skill tree, loot and grinding) with Terraria (seeded world, summonable bosses, co-op with friends). Each player creates and shares a world; characters are independent from the world. World in biome rings of rising difficulty and three combat branches (Melee, Ranged, Magic) with specialisations at levels 25, 50 and 75, shader gems and crafting. Design, art and systems solo, with AI as coding assistant.'),
    tech: [L('Pensado para aguantar hordas de cientos de enemigos y proyectiles: los mobs dejan de ser nodos con físicas y pasan a ser simples datos que lleva un MobManager, con una rejilla espacial para que no se amontonen, repartida en 3 fases por tick.', 'Hordes: built for hundreds of mobs and projectiles. Mobs go from physics nodes to data objects handled by a MobManager, with separation through a spatial grid spread over 3 phases per tick.'),
           L('Los mobs y los proyectiles se dibujan todos juntos con MultiMesh y un shader propio, y solo los que se ven en pantalla.', 'Batched rendering: mobs and projectiles drawn with MultiMesh and a custom shader, only the visible ones.'),
           L('Resultados medidos con 400 mobs y 200 proyectiles a 60 fps: la CPU por frame baja de 8,7 a 6,6 ms, las llamadas de dibujo de ~2.300 a ~150-340 y el dibujado de proyectiles de 3,5-4,6 ms a 0,2 ms.', 'Measured (400 mobs + 200 projectiles, fixed 60 fps): CPU per frame from 8.7 to 6.6 ms, draw calls from ~2,300 to ~150-340 and projectile drawing from 3.5-4.6 to 0.2 ms.'),
           L('Herramientas de profiling hechas por mí: un panel con métricas en tiempo real y un modo de estrés que se activa con una tecla o por línea de comandos (--stress-mobs, --stress-proj).', 'Own profiling: real-time metrics panel and stress mode from keyboard and command line (--stress-mobs, --stress-proj).'),
           L('Coop de hasta 4 jugadores con un host que manda sobre mobs, loot y daño, mientras cada cliente controla su propio movimiento. Por la red solo van eventos, no el estado completo en cada frame: cada cliente recibe solo los mobs que tiene cerca, en paquetes por debajo del MTU, y los daños se agrupan en vez de mandarse uno a uno.', 'Up to 4-player co-op with an authoritative host over mobs, loot and damage; each client controls its own movement. Only events travel, not per-frame state; mobs are sent per client only when nearby, in packets under the MTU, and damage is batched.'),
           L('Todo está definido por datos (ítems, mobs, skills y gemas, cada uno con su ID). La lógica va separada de lo visual y del input, que son solo órdenes, y desde el principio funciona con mando y con teclado y ratón.', 'Data-driven design: items, mobs, skills and gems defined as data with IDs. Logic separated from visuals and input (input is orders), gamepad and keyboard from the start.'),
           L('Salto propio: la lógica ocurre en el suelo y la altura solo se dibuja en el sprite, y las paredes bloquean el salto.', 'Own jump mechanic: logic lives on the ground and height is drawn only on the sprite, with walls blocking the jump.')],
    stack: ['Godot 4.7', 'GDScript', 'MultiMesh', 'Spatial grid', 'Authoritative host', 'Profiling'], repo: 'DopamineLord', branch: 'fase-7-rendimiento', icon: null, media: [],
  },
  {
    id: 'fishmaboolla', group: 'games', title: 'Fishmaboolla', status: 'wip', category: 'Godot',
    short: L('Arcade tipo Pang con pesca rápida y roguelike: un marinero gallego y gaviotas que botan y se dividen.',
             'Pang-style arcade + quick fishing + roguelike, with a Galician sailor and splitting seagulls.'),
    desc: L('Un arcade 2D en la línea de Pang, con pesca rápida y progresión roguelike. Un marinero gallego dispara a gaviotas que botan y se dividen. El diseño está documentado entero; el arte lo dibujo yo a mano y, mientras llega, el prototipo usa formas dibujadas por código.',
            '2D Pang-style arcade combined with quick fishing and roguelike progression. A Galician sailor shoots seagulls that bounce and split. Full design documented; I draw the art by hand and the prototype uses code-drawn shapes in the meantime.'),
    stack: ['Godot 4', 'GDScript', 'Roguelike', 'Data-driven'], repo: 'fishmaboolla', icon: null, media: [],
  },
  {
    id: 'clerigo-rl', group: 'games', featured: true, title: 'Clérigo Roguelike', status: 'wip', category: 'Godot 4.7 · Roguelike',
    short: L('Roguelike isométrico: un clérigo expulsado de la Iglesia sube de la mazmorra al cielo buscando venganza.',
             'Isometric roguelike: an excommunicated cleric climbs from the dungeon to heaven seeking revenge.'),
    desc: L('Roguelike isométrico en 2D para un jugador. Un clérigo expulsado de la Iglesia sube desde una mazmorra hasta el cielo y se enfrenta a figuras religiosas corrompidas: curas, monjas, paladines y ángeles. Dispara solo al enemigo más cercano, puede saltar y combina magias y buffs como si fuera un puzle. En pixel art, con la oscuridad de Diablo 2 Resurrected y lo simple y cartoon de The Binding of Isaac. Saldrá para Windows y Mac.',
            'Single-player 2D isometric roguelike. A cleric expelled from the Church climbs from a dungeon to heaven and fights corrupted religious figures: priests, nuns, paladins and angels. Auto-fire at the nearest enemy, jumping and a puzzle-like system of combinable spells and buffs. Pixel art mixing the darkness of Diablo 2 Resurrected with the cartoon simplicity of The Binding of Isaac. Targets Windows and Mac.'),
    tech: [L('La arquitectura está montada entera con escenas de Godot (nodos y propiedades de verdad, sin crear nada por código), para que escale bien.', 'Fully scene-based Godot architecture (real nodes and properties, nothing instanced from code), built to scale.'),
           L('Es un refactor completo de DopamineLord a un solo jugador: quité la red, las clases, las skills y el loot, y adapté Player, MobManager y ProjectileManager.', 'Full single-player refactor of DopamineLord: removed networking, classes, skills and loot, and reworked Player, MobManager and ProjectileManager.'),
           L('Disparo automático que elige al enemigo más cercano, y un personaje dibujado por piezas (cuerpo, cara, manos y pies) con expresiones.', 'Auto-fire with nearest-target selection; character rendered in parts (body, face, hands, feet) with an expression system.'),
           L('Herramientas de rendimiento propias: un overlay de métricas y modos de estrés desde la línea de comandos. En pruebas headless en CPU con 400 enemigos y 200 proyectiles, cada tick de físicas cuesta unos 5-9 ms.', 'Own performance tooling: metrics overlay and stress modes from the command line. Headless CPU tests with 400 enemies and 200 projectiles at ~5-9 ms per physics tick.'),
           L('Antes de cada push, Godot en modo headless comprueba que el proyecto importa y arranca sin errores.', 'Automatic validation in headless Godot (import and boot without errors) before every push.'),
           L('Pipeline de pixel art hecho desde cero: paletas, generadores de formas y sombreado.', 'Own pixel art pipeline built from scratch: palette toolkit, shape generators and shading.'),
           L('Trabajo con IA repartiendo roles (una sesión programa y otra dirige el arte), coordinadas con reglas del repo. Una rama por fase y el merge a main lo hago yo a mano. Lo desarrollo y pruebo desde Android (editor de Godot, Termux y git).', 'AI work with separate roles (a code session and an art-direction session) coordinated by repo conventions; one branch per phase and manual merge to main. Developed and tested from Android (Godot editor + Termux + git).')],
    stack: ['Godot 4.7', 'GDScript', 'Pixel art', 'Headless CI', 'AI workflow'], repo: 'clerigo-roguelike', icon: './priesto.png', media: [{ type: 'image', url: './priesto.png' }],
  },
  {
    id: 'flashracs', group: 'games', featured: true, title: 'FlashRacs', status: 'wip', category: 'Godot 4.7 · Online · nombre provisional',
    short: L('Shooter 2D de sigilo online al estilo Duck Game: solo ves el haz de tu propia linterna.',
             'Online 2D stealth shooter in the style of Duck Game: you only see your own flashlight beam.'),
    desc: L('Un shooter 2D de plataformas online en pixel art, como Duck Game pero de sigilo: cada jugador solo ve el haz de su linterna, nadie más. Gana quien sabe escuchar, plantear la táctica y sorprender; se puede campear o ir a por todas. Hasta 8 jugadores (lo normal, 4) en lobbies privados. Es mi juego más completo y el más cerca de salir, con la idea de lanzarlo en Steam. Ahora mismo está en alpha, sin publicar.',
            'Online 2D platformer shooter in pixel art, Duck Game style but stealth: every player only sees their own flashlight beam. Sound, tactics and surprise are rewarded; you can camp or rush. Up to 8 players (usually 4) in private lobbies. My most complete game and the closest to release; the goal is a Steam launch. Status: alpha, not published.'),
    tech: [L('Multijugador online P2P con host autoritativo, un jugador por peer, preparado para meter GodotSteam más adelante.', 'Online P2P multiplayer with an authoritative host, one player per peer, designed to integrate GodotSteam later.'),
           L('Visión e iluminación dinámicas: la linterna es lo único que te deja ver el mapa, y luces, bombillas y puertas reaccionan a los objetos (por ejemplo, un pulso que apaga luces y linternas en un radio).', 'Dynamic vision and lighting: the flashlight is the only view of the map; lights, bulbs and doors interact with items (for example a pulse that turns off lights and flashlights in a radius).'),
           L('Armas y objetos con puntos fijos de aparición, un arma y un objeto a la vez, retroceso dinámico, trayectorias con previsualización, explosivos que destruyen el mapa y armas con silenciador frente a otras con fogonazo.', 'Weapons and items: fixed spawns, one weapon and one item at a time, dynamic recoil, trajectory preview, explosives that destroy the map, silenced versus flash weapons.'),
           L('Se apunta sin ratón, como en Duck Game: el ángulo es continuo y depende de hacia dónde mira el personaje y de su estado. Funciona con mando.', 'Mouse-free aiming like Duck Game: continuous angle based on facing and character state, gamepad compatible.'),
           L('Rondas con puntuación (se gana a 11) y rotación de mapas sin repetir hasta agotar la lista.', 'Rounds and scoring (to 11 points) with map rotation without repeats until the list runs out.'),
           L('Un editor de mapas web propio (FlashMapMaker) que exporta JSON, que el juego carga con un MapLoader. La idea es abrirlo a la comunidad.', 'Own web map editor (FlashMapMaker) exporting JSON; the game loads maps with a MapLoader. Meant to be opened to the community.'),
           L('Git y GitHub con una rama por fase, y escenas montadas con nodos reales en el editor de Godot.', 'Git/GitHub with one branch per phase and scenes built with real nodes in the Godot editor.')],
    stack: ['Godot 4.7', 'GDScript', 'ENet / RPC', 'Dynamic lighting', 'Map editor'], repo: 'godot-multiplayer-high-level', branch: 'escala-y-mapas', icon: null, media: [],
  },
  {
    id: 'flashmapmaker', group: 'games', title: 'FlashMapMaker', status: 'live', category: 'Level editor · Web',
    short: L('Editor de mapas en una sola página HTML para el juego multijugador.',
             'Single-page HTML map editor for the multiplayer game.'),
    desc: L('El editor de niveles que hice para el juego multijugador: una sola página HTML, sin build ni dependencias, que autoguarda en el navegador, avisa si el mapa se pasa de los límites del juego y guarda los mapas JSON directamente en el repo del juego.',
            'Level editor I built for the multiplayer game: a single HTML page with no build or dependencies, browser autosave, validation against the limits the game accepts, and direct saving of JSON maps into the game repo.'),
    stack: ['JavaScript', 'HTML/CSS', 'GitHub Pages', 'Tooling'], repo: 'FlashMapMaker', live: 'https://xneku.github.io/FlashMapMaker/', icon: './flashedico.png', media: [{ type: 'image', url: './flashedico.png' }],
  },
  {
    id: 'roguelikewaw', group: 'games', title: 'RogueLikeWaw', status: 'proto', category: 'Unity · C#',
    short: L('Survivor de oleadas con combate automático, XP y combos de elementos.',
             'Wave survivor with auto-combat, XP and elemental combos.'),
    desc: L('Prototipo de acción y supervivencia en Unity visto desde arriba (~5.000 líneas de C#): nuevo Input System, apuntado y disparo automáticos con prioridad de objetivos, oleadas de enemigos con prefabs aleatorios, vida, daño y muerte con drops de loot y gemas de XP, menú de mejoras y un sistema de combinación de elementos.',
            'Top-down action-survivor prototype in Unity (~5,000 lines of C#): new Input System, auto-target and auto-shoot with priority selection, enemy waves with randomized pools, health/damage/death with loot and XP gem drops, upgrade menu and an elemental combination system.'),
    stack: ['Unity', 'C#', 'Input System', 'Roguelike'], repo: 'RogueLikeWaw', icon: null, media: [],
  },
  {
    id: 'clerigo', group: 'games', title: 'Clerigo FPS (Unity)', status: 'proto', category: 'Unity · C#',
    short: L('Combate en primera persona con melee y magia.', 'First-person combat with melee and magic.'),
    desc: L('Prototipo de clérigo en primera persona que mezcla ataque cuerpo a cuerpo (con cooldown y raycast desde la cámara) y magia a distancia con proyectiles. Movimiento con CharacterController, cámara con ratón y enemigos con barra de vida en la interfaz.',
            'First-person cleric prototype combining melee (cooldown and camera raycast) and ranged magic with projectiles. CharacterController movement, mouse look, enemy health with UI bar and death cleanup.'),
    stack: ['Unity', 'C#', 'FPS'], repo: 'CLERIGO-gamelikewaw', icon: null, media: [],
  },
  {
    id: 'tong', group: 'games', title: 'TONG', status: 'playable', category: 'Unity · C#',
    short: L('Pong con una IA que predice la pelota y una partida completa.', 'Pong with predictive AI and a full match loop.'),
    desc: L('Un Pong 2D con la pala de la IA que predice la trayectoria, con zona muerta y vuelta a su sitio, velocidad que va subiendo hasta un tope, zonas de gol, saques con retardo y condiciones de victoria y reinicio.',
            '2D Pong-style arcade with an AI paddle (trajectory prediction, dead zone and home return), progressive speed with cap, goal zones, serve delays and win/restart conditions.'),
    stack: ['Unity', 'C#', 'AI behaviour'], repo: 'tong-unity', icon: null, media: [],
  },
  {
    id: 'pool-party', group: 'games', title: 'Pool Party', status: 'proto', category: 'C++17 · raylib',
    short: L('Bullet hell roguelike para mostrar gestión de memoria a bajo nivel.', 'Bullet hell roguelike showcasing low-level memory management.'),
    desc: L('Bullet hell roguelike en C++17 con raylib, hecho para enseñar patrones de gestión de memoria a bajo nivel. Compila con CMake en macOS y Linux.',
            'Bullet hell roguelike in C++17 with raylib, built to showcase low-level memory management patterns. Builds with CMake on macOS and Linux.'),
    stack: ['C++17', 'raylib', 'CMake'], repo: 'pool-party', icon: null, media: [],
  },
  {
    id: 'slapball', group: 'games', title: 'SlapBall', status: 'proto', category: 'C++17 · raylib',
    short: L('Voleibol ragdoll en 2D basado en físicas.', '2D ragdoll volleyball driven by physics.'),
    desc: L('Dos jugadores ragdoll a cada lado de una red, con un juego que depende de las físicas. C++17 y raylib, con CMake.',
            'Two ragdoll players on opposite sides of a net with physics-driven gameplay. C++17 and raylib, CMake build.'),
    stack: ['C++17', 'raylib', 'Physics'], repo: 'slapball', icon: null, media: [],
  },
  {
    id: 'alchemy', group: 'games', title: 'Alchemist Incremental', status: 'wip', category: 'C++20',
    short: L('Incremental de consola con arquitectura de motor: delta-time, RAII y contenido por datos.',
             'Console incremental with engine-style architecture: delta-time, RAII and data-driven content.'),
    desc: L('Un incremental de consola en C++20 con una arquitectura pensada como la de un motor: simulación con delta-time, RAII estricto, contenido definido por datos y la lógica del juego bien separada del renderizado.',
            'Console incremental game in modern C++20 with engine-minded architecture: delta-time simulation, strict RAII, data-driven content and a clean split between game logic and rendering.'),
    stack: ['C++20', 'CMake', 'Data-driven'], repo: 'Alchemy-', icon: null, media: [],
  },
  {
    id: 'withdrawal', group: 'games', title: 'Withdrawal', status: 'proto', category: 'Godot',
    short: L('Supervivencia 2D con inventario.', '2D survival with an inventory system.'),
    desc: L('Prototipo 2D de supervivencia y aventura con un inventario como singleton (stacks y límite de huecos), barra rápida y mochila con interfaz reactiva mediante señales, y objetos que se pueden inyectar en ejecución para equilibrar rápido.',
            '2D survival-adventure prototype with a singleton inventory (stacking and slot limits), hotbar and backpack with signal-driven UI and runtime item injection for fast balancing.'),
    stack: ['Godot', 'GDScript', 'Signals'], repo: 'withdrawal-godot', icon: null, media: [],
  },
  {
    id: 'nomikai', group: 'games', title: 'Nomikai', status: 'proto', category: 'Godot',
    short: L('Acción 2D con combate de coger y lanzar objetos.', '2D action with pickup-and-throw combat.'),
    desc: L('Prototipo de acción 2D: control del personaje con animaciones, recoger objetos por cercanía, objeto equipado visible gracias a puntos de anclaje y proyectiles lanzables que no te dañan a ti.',
            '2D action prototype: character controller with animations, contextual proximity pickup, equipped item shown through attach points and throwable projectiles with self-hit protection.'),
    stack: ['Godot', 'GDScript'], repo: 'nomikai-game', icon: null, media: [],
  },
  {
    id: 'movida-greed', group: 'games', title: 'Movida Greed', status: 'proto', category: 'Godot',
    short: L('Shooter de supervivencia contra oleadas de zombis, visto desde arriba.', 'Top-down survival shooter against zombie waves.'),
    desc: L('Shooter visto desde arriba en el que esquivas oleadas de zombis: apuntas con el ratón y disparas, y los zombis aparecen por temporizador desde fuera de pantalla y te persiguen.',
            'Top-down shooter where you kite zombie waves: mouse aiming, shooting, timed off-screen spawning and pursuit AI.'),
    stack: ['Godot', 'GDScript'], repo: 'movida-greed', icon: null, media: [],
  },

  // ---------- IA Y VISIÓN ----------
  {
    id: 'agents', group: 'ai', featured: true, title: 'Orquestación de agentes', status: 'used', category: 'Agentic workflow',
    short: L('Así trabajo: varios agentes de IA con roles distintos, coordinados con reglas del repositorio.',
             'How I work: several AI agents with separate roles, coordinated by repo conventions.'),
    desc: L('Así desarrollo mis juegos y apps: trabajo con varios agentes de código a la vez, cada uno con su papel (uno programa, otro hace de director de arte), y los coordino con reglas dentro del propio repositorio. No es pedirle cosas a un chat: hay reglas, validación automática y la última palabra la tengo yo antes de cada merge.',
            'This is how I build my games and apps: I run several coding agents at once, each with its own role (one writes code, another acts as art director), and coordinate them with rules kept inside the repository. It is not just asking a chatbot for things: there are rules, automatic validation, and I have the final say before every merge.'),
    tech: [L('Un fichero de reglas por repo (CLAUDE.md) y documentos de diseño donde cada decisión está marcada como DECIDIDO, PROPUESTA o ABIERTO, para que cada agente sepa qué es definitivo y qué no.', 'Per-repo rules files (CLAUDE.md) and design documents with every decision marked DECIDED, PROPOSED or OPEN, so each agent knows what is firm.'),
           L('Antes de cada push, validación automática con Godot headless (importa y arranca sin errores), además de pruebas de estrés con métricas.', 'Automatic validation in headless Godot (import and error-free boot) before every push, plus stress tests with metrics.'),
           L('Una rama por fase y merge manual a main: la IA propone y yo reviso y decido.', 'One branch per phase and manual merge to main: the AI proposes, I review and decide.'),
           L('Herramientas: Claude Code, Codex y Cursor. El flujo completo también me funciona desde una tablet Android (Termux y git).', 'Tools: Claude Code, Codex and Cursor. Full workflow also from an Android tablet (Termux + git).')],
    stack: ['Claude Code', 'Codex', 'Cursor', 'Multi-agent', 'CLAUDE.md', 'Headless CI'], repo: null, icon: null, media: [],
  },
  {
    id: 'automation', group: 'ai', featured: true, title: 'Automatización con IA', status: 'used', category: 'n8n · Make · Webhooks',
    short: L('Pipelines con n8n, Make, webhooks y Python que conectan sistemas y mueven los datos solos.',
             'Pipelines with n8n, Make.com, webhooks and Python that connect systems and move data on their own.'),
    desc: L('Automatizaciones que conectan plataformas sin tener que tocarlas a mano: webhooks que lanzan escenarios en n8n y Make, scripts de Python y plugins de WordPress en PHP hechos por mí como fuente de datos. Lo usé en Raiola para extraer contenido en masa y alimentar un sistema de RAG y fine-tuning.',
            'Automations that connect platforms without touching them by hand: webhooks that trigger n8n and Make scenarios, Python scripts and WordPress PHP plugins I wrote as the data source. I used them at Raiola to pull content in bulk and feed a RAG and fine-tuning system.'),
    tech: [L('Webhooks y APIs REST como pegamento entre WordPress, YouTube, Make y n8n.', 'Webhooks and REST APIs as glue between WordPress, YouTube, Make.com and n8n.'),
           L('Pipelines de datos en Python: recoger, transformar y sincronizar.', 'Data pipelines in Python: ingestion, transformation and syncing.'),
           L('IA para limpiar y normalizar el corpus de entrenamiento antes del fine-tuning.', 'AI to normalise the training corpus before fine-tuning.')],
    stack: ['n8n', 'Make.com', 'Webhooks', 'Python', 'REST APIs', 'WordPress/PHP'], repo: null, icon: null, media: [],
  },
  {
    id: 'rag', group: 'ai', title: 'RAG + Fine-tuning', status: 'done', category: 'AI · Data pipeline',
    short: L('Sistema que imita el estilo de comunicación de una dirección ejecutiva.',
             'System to replicate an executive team’s communication style.'),
    desc: L('Proyecto de mis prácticas en Raiola Networks. Extracción de contenido en masa con plugins de WordPress en PHP, flujos de Make.com y transcripción automática de YouTube, todo orquestado con scripts de Python míos y con IA para limpiar el corpus de entrenamiento. El código no es público.',
            'Internship project at Raiola Networks. Bulk content extraction through WordPress PHP plugins, Make.com flows and automatic YouTube transcription, orchestrated with custom Python scripts and AI to normalise the training corpus. Code is not public.'),
    stack: ['Python', 'n8n', 'Make.com', 'WordPress/PHP', 'Webhooks'], repo: null, icon: null, media: [],
  },
  {
    id: 'instrumento-ai', group: 'ai', title: 'Instrumento AI', status: 'proto', category: 'Computer vision',
    short: L('Toca un instrumento con gestos de la mano delante de la webcam.', 'Control an instrument with hand gestures through the webcam.'),
    desc: L('Detecta en tiempo real los puntos de la mano con MediaPipe, sigue los dedos desde la webcam y manda mensajes OSC para controlar software de audio externo.',
            'Real-time hand landmark detection with MediaPipe, finger tracking from webcam frames and OSC message output to drive external audio software.'),
    stack: ['Python', 'OpenCV', 'MediaPipe', 'OSC'], repo: 'instrumento-ai', icon: null, media: [],
  },
  {
    id: 'smokecam', group: 'ai', title: 'SmokeCam', status: 'proto', category: 'Computer vision',
    short: L('Detecta el gesto de llevarse la mano a la boca en tiempo real.', 'Event detection from hand-to-mouth proximity in real time.'),
    desc: L('Sigue cara y manos en tiempo real, detecta el gesto midiendo la distancia entre la mano y la boca y muestra en pantalla el estado y un contador.',
            'Real-time face and hand tracking, a hand-to-mouth distance heuristic to detect the gesture and an on-screen HUD with state and counter.'),
    stack: ['Python', 'OpenCV', 'MediaPipe'], repo: 'smokecam', icon: null, media: [],
  },

  // ---------- APPS Y WEB ----------
  {
    id: 'smartrack', group: 'apps', title: 'SmarTrack', status: 'beta', category: 'macOS native',
    short: L('App nativa de productividad para macOS que sincroniza con Obsidian.', 'Native macOS productivity app with Obsidian sync.'),
    desc: L('App de macOS (~5.000 líneas de Swift) para tareas, rutinas, retos de hábitos y eventos. Con prioridades y categorías, rachas, calendario semanal, sincronización en tiempo real con Obsidian en Markdown, notificaciones y widget. Solo usa frameworks de Apple: SwiftData, SwiftUI y WidgetKit. La uso todos los días.',
            'macOS app (~5,000 lines of Swift) for tasks, routines, habit challenges and events. Priorities and categories, streaks, weekly calendar, real-time Obsidian Markdown sync, notifications and widget. 100% Apple frameworks: SwiftData, SwiftUI and WidgetKit. I use it daily.'),
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'WidgetKit'], repo: 'SmarTrack', icon: null,
    media: [{ type: 'image', url: './SmarTrack1.png' }, { type: 'image', url: './SmarTrack2.png' }],
  },
  {
    id: 'pokerat', group: 'apps', title: 'PokeRat', status: 'done', category: 'Python desktop',
    short: L('Herramienta que lee las partidas guardadas de Pokémon y analiza tu equipo.', 'Tool that reads Pokémon save files and analyses your team.'),
    desc: L('Herramienta de escritorio en Python (Tkinter) que lee los archivos de guardado .rxdata, analiza tu equipo y el del rival y ayuda en los combates. Incluye un script extra para depurar los IDs internos de los movimientos.',
            'Python desktop tool (Tkinter) that inspects .rxdata save files, analyses your team and the rival and supports battle decisions. Includes an extra script to debug internal move IDs.'),
    stack: ['Python', 'Tkinter', 'Pillow', 'rubymarshal'], repo: 'pokemonhub', icon: './PokeRatIco.png',
    media: [{ type: 'image', url: './PokeRat1.png' }, { type: 'image', url: './PokeRat2.png' }, { type: 'image', url: './PokeRat3.png' }],
  },
  {
    id: 'gamhub', group: 'apps', title: 'GamHub', status: 'proto', category: 'Flutter + PocketBase',
    short: L('Red social de videojuegos: app en Flutter con backend PocketBase en Docker.', 'Social gaming app: Flutter client with a PocketBase backend in Docker.'),
    desc: L('App móvil en Flutter con login, pestañas (Feed, Biblioteca y Perfil) y un backend PocketBase que se levanta con Docker Compose. En mi GitHub hay más prototipos en Flutter (jub, myhub, newhub y smokenow).',
            'Flutter mobile app with login, tab structure (Feed, Library, Profile) and a PocketBase backend brought up with Docker Compose. More Flutter prototypes on my GitHub (jub, myhub, newhub, smokenow).'),
    stack: ['Flutter', 'Dart', 'PocketBase', 'Docker Compose'], repo: 'gamhub', icon: null, media: [],
  },
  {
    id: 'social-game', group: 'apps', title: 'Social Game Project', status: 'proto', category: 'React · TypeScript',
    short: L('Web social con login, perfiles y publicaciones.', 'Social web app with auth, profiles and posts.'),
    desc: L('Prototipo de red social en React y TypeScript: rutas públicas y privadas, estado de autenticación con contexto, capa de datos con React Query y Appwrite, y una interfaz con Tailwind y Radix/shadcn.',
            'Social web app prototype in React and TypeScript: public/private routes, context-based auth state, React Query and Appwrite data layer, UI with Tailwind and Radix/shadcn.'),
    stack: ['React', 'TypeScript', 'Appwrite', 'Tailwind'], repo: 'social-game-project', icon: null, media: [],
  },
  {
    id: 'wp-plugin', group: 'apps', title: 'Plugin WordPress', status: 'proto', category: 'PHP · WordPress',
    short: L('Plugin propio con shortcodes y datos de la API de WordPress.org.', 'Own plugin with shortcodes and WordPress.org API data.'),
    desc: L('Plugin de WordPress en PHP que consulta la API de WordPress.org, recibe el slug con ACF y muestra los datos mediante shortcodes. Forma parte de mi trabajo con plugins propios y webhooks para n8n y Make.',
            'PHP WordPress plugin that queries the WordPress.org API, uses ACF for the slug input and renders data through shortcodes. Part of my work with own plugins and webhooks for n8n and Make.'),
    stack: ['PHP', 'WordPress', 'ACF'], repo: 'php-learning-plugin-extractor', icon: null, media: [],
  },
  {
    id: 'portfolio-3d', group: 'apps', title: 'Portfolio 3D', status: 'proto', category: 'React · Three.js',
    short: L('Portfolio animado con Three.js y React Three Fiber.', 'Animated portfolio with Three.js and React Three Fiber.'),
    desc: L('Portfolio de una sola página con secciones animadas y componentes 3D hechos con Three.js, React Three Fiber y Framer Motion.',
            'One-page portfolio with animated sections and 3D components using Three.js, React Three Fiber and Framer Motion.'),
    stack: ['React', 'Three.js', 'R3F', 'Framer Motion'], repo: 'n3ku-portfolio-react', icon: null, media: [],
  },
  {
    id: 'portfolio-web', group: 'apps', title: 'Este portfolio', status: 'live', category: 'React 19 · Vite',
    short: L('El mundo que estás recorriendo: React 19, Vite, Tailwind 4 y Framer Motion.', 'The world you are walking through: React 19, Vite, Tailwind 4, Framer Motion.'),
    desc: L('Portfolio interactivo con un modo juego (WASD y E) en escritorio y un carrusel en móvil. Hecho con React 19, Vite, Tailwind CSS 4 y Framer Motion, en español e inglés, con despliegue automático en GitHub Pages y también en Docker y Nginx.',
            'Interactive portfolio with a game mode (WASD and E) on desktop and a swipe carousel on mobile. React 19, Vite, Tailwind CSS 4 and Framer Motion, bilingual ES/EN, auto-deployed to GitHub Pages and also available on Docker/Nginx.'),
    stack: ['React 19', 'Vite', 'Tailwind 4', 'Framer Motion', 'Docker'], repo: 'portfolio', icon: null, media: [],
  },
];

// Destacados primero y en este orden; el resto conserva el orden del archivo.
const RANK = { flashracs: 0, 'clerigo-rl': 1, dopaminelord: 2, agents: 0, automation: 1 };
PROJECTS.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || (RANK[a.id] ?? 0) - (RANK[b.id] ?? 0));
