import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Gamepad2, X, Briefcase, User, Github, Linkedin, Mail, ChevronLeft, Image as ImageIcon, Film, Globe, GripHorizontal } from 'lucide-react';
import { useWindowSize } from './hooks/useWindowSize';

// --- CONFIGURACIÓN DE MEDIOS ---
const PHOTO_URL = "./NICO.png";

// --- CONFIGURACIÓN FÍSICAS ---
const BASE_SPEED = 9;

// --- IDIOMAS ---
const TRANSLATIONS = {
  es: {
    hero_subtitle: "Developer Full Stack | Data Engineer",
    hero_content: "Estudiante de último año de Ingeniería Informática (Universidad de Oviedo, 2026). 2+ años trabajando con GenAI y data automation. Experiencia en Raiola Networks (Jun-Sep 2024) diseñando pipelines ETL y APIs. Actualmente en IT Infrastructure de la universidad. Problem-solver apasionado por código limpio, arquitectura escalable y soluciones end-to-end. 30+ proyectos en GitHub demostrando versatilidad en múltiples stacks.",
    experience_title: "EXPERIENCIA",
    experience_subtitle: "Laboral & Académica",
    experience_raiola: "RAIOLA NETWORKS (Jun-Sep 2024)",
    experience_raiola_desc: "Backend & Data Automation Developer. Diseñé pipelines ETL complejos con Python + n8n. APIs REST y webhooks para integración de sistemas. Scripts Python para transformación de datos. Resultado: Automaticé procesos manuales del equipo ejecutivo.",
    experience_uniovi: "UNIVERSIDAD DE OVIEDO (Nov 2025 - Presente)",
    experience_uniovi_desc: "IT Infrastructure Technician. Gestión de VMs, automatización con Python/Bash, CI/CD basics, troubleshooting.",
    stack_title: "STACK TÉCNICO",
    stack_subtitle: "Tecnologías & Herramientas",
    stack_backend: "BACKEND",
    stack_backend_desc: "Java (Advanced), Spring Boot, REST APIs, Design Patterns, SOLID. Python (Advanced), ETL, Scripts.",
    stack_frontend: "FRONTEND",
    stack_frontend_desc: "React, Hooks, Modern JS, Tailwind CSS, Responsive Design.",
    stack_data: "DATA",
    stack_data_desc: "SQL (Relational Design), n8n/Make.com, Python Data Processing.",
    stack_ia: "IA",
    stack_ia_desc: "Agentes LLM, RAG Systems, Fine-tuning, Prompt Engineering, Claude API, LangChain.",
    stack_devops: "DEVOPS",
    stack_devops_desc: "Docker, Git/GitHub, Linux/Bash, CI/CD basics, Nginx.",
    projects_title: "PROYECTOS",
    projects_subtitle: "Arquitectura & Resultados",
    projects_content: "4 proyectos destacables que demuestran arquitectura escalable, problem-solving y versatilidad técnica. Desde AI/Data pipelines, Full Stack Web hasta aplicaciones nativas. Cada proyecto representa un problema real resuelto de forma profesional. Selecciona uno para detalles.",
    project_rag_short: "Sistema RAG + Fine-tuning para replicar comunicaciones ejecutivas.",
    project_rag_desc: "Sistema end-to-end que combina RAG con fine-tuning de LLM para replicar el estilo comunicativo de un director ejecutivo. Pipeline de datos desde WordPress, YouTube y webhooks (Make.com). Procesa información en tiempo real, la estructura en embeddings y genera respuestas contextualizadas. Demuestra integración completa: Data Engineering → AI → API REST.",
    project_pokerat_short: "App que accede a archivos del juego y analiza tu equipo en tiempo real.",
    project_pokerat_desc: "Herramienta full stack que accede al archivo de guardado de juegos de Pokémon y analiza en tiempo real tu equipo. Detecta tipologías, predice debilidades, sugiere sinergias y optimizaciones. Interfaz personalizada, integración con GitHub API, exportación de reportes y análisis detallado de datos. Demuestra: arquitectura limpia, I/O file handling, análisis de datos complejos, UX awareness, versionado profesional con Git.",
    project_portfolio_short: "Portfolio interactivo con React, Vite, Tailwind y animaciones.",
    project_portfolio_desc: "Portfolio personal con experiencia interactiva. Tecnologías modernas: React 19, Vite, Tailwind CSS 4, Framer Motion. Completamente responsive, optimizado para producción, desplegado en Docker/Nginx con CI/CD. SEO optimizado y accesible. Sistema multiidioma (ES/EN) implementado.",
    project_smartrack_short: "App de productividad nativa para macOS con sincronización Obsidian.",
    project_smartrack_desc: "Aplicación macOS completa para gestión de tareas, rutinas, desafíos de hábitos y eventos. Características: Task Management con prioridades y categorías, Routine Tracker con streaks, Habit Challenges con análisis gráfico, Calendar & Week View interactivo, Obsidian Integration (sincronización en tiempo real con markdown), Notifications inteligentes, macOS Widget. Zero dependencies - 100% Apple frameworks. Persistencia con SwiftData, UI con SwiftUI NavigationSplitView, WidgetKit para widgets, y File Watching con security-scoped bookmarks. Proyecto real que uso diariamente.",
    why_title: "POR QUÉ",
    why_subtitle: "Contratarme es contratar...",
    why_content: "Velocidad de aprendizaje comprobada: Múltiples stacks en múltiples proyectos. Problem-solver: Soluciones end-to-end reales en producción. Trabajo independiente y en equipo. Código limpio y mantenible (evidencia en GitHub). Reconozco qué no sé, pregunto, aprendo. 30+ proyectos públicos. Disponibilidad inmediata. Remoto + Relocation (Asturias/Galicia/Madrid). Interesado en crecer con el equipo.",
    close_button: "Cerrar [E]",
    navigation: "Navegación",
    interact: "Interactuar / Cerrar",
    connect_with: "CONECTAR CON",
    open_link: "ABRIR ENLACE:",
    back_to_projects: "Volver a proyectos",
    view_repo: "Ver en GitHub",
  },
  en: {
    hero_subtitle: "Full Stack Developer | Data Engineer",
    hero_content: "Final year Computer Science student (University of Oviedo, 2026). 2+ years working with GenAI and data automation. Experience at Raiola Networks (Jun-Sep 2024) designing ETL pipelines and APIs. Currently in IT Infrastructure at university. Problem-solver passionate about clean code, scalable architecture and end-to-end solutions. 30+ projects on GitHub demonstrating versatility across multiple stacks.",
    experience_title: "EXPERIENCE",
    experience_subtitle: "Professional & Academic",
    experience_raiola: "RAIOLA NETWORKS (Jun-Sep 2024)",
    experience_raiola_desc: "Backend & Data Automation Developer. Designed complex ETL pipelines with Python + n8n. REST APIs and webhooks for system integration. Python scripts for data transformation. Result: Automated manual processes from executive team.",
    experience_uniovi: "UNIVERSITY OF OVIEDO (Nov 2025 - Present)",
    experience_uniovi_desc: "IT Infrastructure Technician. VM management, automation with Python/Bash, CI/CD basics, troubleshooting. Available: Remote + Relocation (Asturias/Galicia/Madrid).",
    stack_title: "TECHNICAL STACK",
    stack_subtitle: "Technologies & Tools",
    stack_backend: "BACKEND",
    stack_backend_desc: "Java (Advanced), Spring Boot, REST APIs, Design Patterns, SOLID. Python (Advanced), ETL, Scripts.",
    stack_frontend: "FRONTEND",
    stack_frontend_desc: "React, Hooks, Modern JS, Tailwind CSS, Responsive Design.",
    stack_data: "DATA",
    stack_data_desc: "SQL (Relational Design), n8n/Make.com, Python Data Processing.",
    stack_ia: "AI",
    stack_ia_desc: "LLM Agents, RAG Systems, Fine-tuning, Prompt Engineering, Claude API, LangChain.",
    stack_devops: "DEVOPS",
    stack_devops_desc: "Docker, Git/GitHub, Linux/Bash, CI/CD basics, Nginx.",
    projects_title: "PROJECTS",
    projects_subtitle: "Architecture & Results",
    projects_content: "4 standout projects demonstrating scalable architecture, problem-solving and technical versatility. From AI/Data pipelines, Full Stack Web to native applications. Each project represents a real problem solved professionally. Select one for details.",
    project_rag_short: "RAG System + Fine-tuning to replicate executive communications.",
    project_rag_desc: "End-to-end system combining RAG with LLM fine-tuning to replicate executive communication style. Data pipeline from WordPress, YouTube and webhooks (Make.com). Processes information in real-time, structures it into embeddings and generates contextualized responses. Demonstrates complete integration: Data Engineering → AI → REST API.",
    project_pokerat_short: "App that accesses game files and analyzes your team in real-time.",
    project_pokerat_desc: "Full stack tool that accesses Pokémon game save files and analyzes your team in real-time. Detects typologies, predicts weaknesses, suggests synergies and optimizations. Custom interface, GitHub API integration, report export and detailed data analysis. Demonstrates: clean architecture, I/O file handling, complex data analysis, UX awareness, professional versioning with Git.",
    project_portfolio_short: "Interactive portfolio with React, Vite, Tailwind and animations.",
    project_portfolio_desc: "Personal portfolio with interactive experience. Modern technologies: React 19, Vite, Tailwind CSS 4, Framer Motion. Fully responsive, production-optimized, deployed on Docker/Nginx with CI/CD. SEO optimized and accessible. Multi-language system (ES/EN) implemented.",
    project_smartrack_short: "Native macOS productivity app with Obsidian synchronization.",
    project_smartrack_desc: "Complete macOS application for task management, routines, habit challenges and events. Features: Task Management with priorities and categories, Routine Tracker with streaks, Habit Challenges with graphical analysis, Interactive Calendar & Week View, Obsidian Integration (real-time markdown sync), Smart Notifications, macOS Widget. Zero dependencies - 100% Apple frameworks. Persistence with SwiftData, UI with SwiftUI NavigationSplitView, WidgetKit for widgets, and File Watching with security-scoped bookmarks. Real project I use daily.",
    why_title: "WHY",
    why_subtitle: "Hiring me means hiring...",
    why_content: "Proven learning speed: Multiple stacks across multiple projects. Problem-solver: Real end-to-end solutions in production. Independent and team work. Clean, maintainable code (evidence on GitHub). I recognize what I don't know, ask questions, learn. 30+ public projects. Immediate availability. Interested in growing with the team.",
    close_button: "Close [E]",
    navigation: "Navigation",
    interact: "Interact / Close",
    connect_with: "CONNECT WITH",
    open_link: "OPEN LINK:",
    back_to_projects: "Back to projects",
    view_repo: "View on GitHub",
  }
};

// --- REDES SOCIALES ---
const SOCIALS = [
  { id: 'github', x: -180, y: 400, icon: <Github size={32} className="md:w-9 md:h-9" />, url: "https://github.com/xNeku", title: "GitHub", color: "text-white", border: "border-white/50" },
  { id: 'linkedin', x: 0, y: 400, icon: <Linkedin size={32} className="md:w-9 md:h-9" />, url: "https://www.linkedin.com/in/nicolás-díaz-ulloa-5398b9314/", title: "LinkedIn", color: "text-blue-500", border: "border-blue-500/50" },
  { id: 'email', x: 180, y: 400, icon: <Mail size={32} className="md:w-9 md:h-9" />, url: "mailto:nicodzu@gmail.com", title: "Email", color: "text-rose-400", border: "border-rose-400/50" }
];

// --- BASE DE DATOS DE PROYECTOS (PROFESIONALES) ---
const createPROJECTS = (t, lang) => [
  {
    id: 'rag-director',
    title: 'RAG Director Clone',
    category: 'AI/Data Pipeline',
    status: lang === 'es' ? 'Completado' : 'Completed',
    statusColor: 'text-emerald-400 border-emerald-400/30',
    short: t.project_rag_short,
    desc: t.project_rag_desc,
    stack: ['Python', 'Claude API', 'LangChain', 'n8n', 'Make.com', 'Webhooks', 'PostgreSQL'],
    github_url: "https://github.com/xNeku",
    icon: null,
    iconPlaceholder: <Terminal size={24} />,
    media: []
  },
  {
    id: 'pokerat',
    title: 'PokeRat v1.0',
    category: 'Full Stack Python',
    status: lang === 'es' ? 'Completado' : 'Completed',
    statusColor: 'text-emerald-400 border-emerald-400/30',
    short: t.project_pokerat_short,
    desc: t.project_pokerat_desc,
    stack: ['Python', 'GitHub API', 'CLI', 'Data Analysis', 'Git'],
    github_url: "https://github.com/xNeku/pokemonhub",
    icon: '/PokeRatIco.png',
    iconPlaceholder: <Terminal size={24} />,
    media: [
      { type: 'image', url: './PokeRat1.png' },
      { type: 'image', url: './PokeRat2.png' },
      { type: 'image', url: './PokeRat3.png' }
    ]
  },
  {
    id: 'portfolio-web',
    title: 'Portfolio Web',
    category: lang === 'es' ? 'Frontend Moderno' : 'Modern Frontend',
    status: lang === 'es' ? 'En vivo' : 'Live',
    statusColor: 'text-emerald-400 border-emerald-400/30',
    short: t.project_portfolio_short,
    desc: t.project_portfolio_desc,
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Docker', 'Nginx'],
    github_url: "https://github.com/xNeku/portfolio",
    icon: null,
    iconPlaceholder: <Terminal size={24} />,
    media: []
  },
  {
    id: 'smartrack',
    title: 'SmarTrack',
    category: 'macOS Native App',
    status: lang === 'es' ? 'Beta' : 'Beta',
    statusColor: 'text-emerald-400 border-emerald-400/30',
    short: t.project_smartrack_short,
    desc: t.project_smartrack_desc,
    stack: ['Swift 5.9', 'SwiftUI', 'SwiftData', 'WidgetKit', 'UserNotifications', 'macOS 14+'],
    github_url: "https://github.com/xNeku/SmarTrack",
    icon: null,
    iconPlaceholder: <Terminal size={24} />,
    media: [
      { type: 'image', url: './SmarTrack1.png' },
      { type: 'image', url: './SmarTrack2.png' }
    ]
  }
];

// --- BASE DE DATOS DEL MUNDO ---
const createPOIS = (t) => [
  {
    id: 1, x: 0, y: -450, title: "NICOLÁS DÍAZ ULLOA", type: 'profile',
    color: "text-emerald-400", borderColor: "border-emerald-500/40",
    subtitle: t.hero_subtitle,
    content: t.hero_content,
    tags: ["Full Stack", "Backend", "Data Engineering", "Python", "Java", "React"]
  },
  {
    id: 2, x: 700, y: 350, title: t.experience_title, icon: <Briefcase className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />, type: 'experience',
    color: "text-violet-500", borderColor: "border-violet-500/50",
    subtitle: t.experience_subtitle,
    content: "",
    skills: [
      {
        name: t.experience_raiola,
        list: t.experience_raiola_desc
      },
      {
        name: t.experience_uniovi,
        list: t.experience_uniovi_desc
      }
    ]
  },
  {
    id: 3, x: -700, y: 350, title: t.stack_title, icon: <Cpu className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />, type: 'stack',
    color: "text-blue-500", borderColor: "border-blue-500/50",
    subtitle: t.stack_subtitle,
    content: "",
    skills: [
      { name: t.stack_backend, list: t.stack_backend_desc },
      { name: t.stack_frontend, list: t.stack_frontend_desc },
      { name: t.stack_data, list: t.stack_data_desc },
      { name: t.stack_ia, list: t.stack_ia_desc },
      { name: t.stack_devops, list: t.stack_devops_desc }
    ]
  },
  {
    id: 4, x: -700, y: -350, title: t.projects_title, icon: <Terminal className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />, type: 'projects',
    color: "text-rose-500", borderColor: "border-rose-500/50",
    subtitle: t.projects_subtitle,
    content: t.projects_content,
    tags: ["Python", "Java", "React", "SQL", "APIs", "Architecture"]
  },
  {
    id: 5, x: 700, y: -350, title: t.why_title, icon: <Gamepad2 className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />, type: 'hiring',
    color: "text-amber-500", borderColor: "border-amber-500/50",
    subtitle: t.why_subtitle,
    content: t.why_content,
    tags: ["Problem-solving", "Clean Code", "Versátil", "Humilde", "Productivo"]
  },
];

// DESKTOP MODE COMPONENT
function DesktopMode() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [activePoi, setActivePoi] = useState(null);
  const [isNearPoi, setIsNearPoi] = useState(null);
  const [isNearSocial, setIsNearSocial] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [expandedMediaIndex, setExpandedMediaIndex] = useState(null);
  const [language, setLanguage] = useState('es');
  const [activeKeys, setActiveKeys] = useState({});

  const keysDown = useRef({});
  const requestRef = useRef();
  const currentPos = useRef({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const matrixStateRef = useRef([]);

  const t = TRANSLATIONS[language];
  const POIS = createPOIS(t);
  const PROJECTS_DATA = createPROJECTS(t, language);

  const triggerAction = () => {
    if (activePoi) {
      setActivePoi(null);
      setSelectedProject(null);
    } else {
      if (isNearPoi) setActivePoi(isNearPoi);
      else if (isNearSocial) window.open(isNearSocial.url, '_blank');
    }
  };

  useEffect(() => {
    const handleDown = (e) => {
      const key = e.key.toLowerCase();
      keysDown.current[key] = true;
      setActiveKeys(prev => ({ ...prev, [key]: true }));
      if (key === 'e') triggerAction();
      if (e.key === 'Escape') {
        if (expandedMediaIndex !== null) {
          setExpandedMediaIndex(null);
        } else {
          setActivePoi(null);
          setSelectedProject(null);
        }
      }
    };
    const handleUp = (e) => {
      const key = e.key.toLowerCase();
      delete keysDown.current[key];
      setActiveKeys(prev => ({ ...prev, [key]: false }));
    };
    window.addEventListener('keydown', handleDown);
    window.addEventListener('keyup', handleUp);
    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('keyup', handleUp);
    };
  }, [isNearPoi, isNearSocial, activePoi, expandedMediaIndex]);

  const handleVirtualDown = (key) => { keysDown.current[key] = true; setActiveKeys(prev => ({ ...prev, [key]: true })); };
  const handleVirtualUp = (key) => { delete keysDown.current[key]; setActiveKeys(prev => ({ ...prev, [key]: false })); };

  const update = () => {
    if (activePoi) return requestRef.current = requestAnimationFrame(update);
    let dx = 0, dy = 0;
    if (keysDown.current['w']) dy -= BASE_SPEED;
    if (keysDown.current['s']) dy += BASE_SPEED;
    if (keysDown.current['a']) dx -= BASE_SPEED;
    if (keysDown.current['d']) dx += BASE_SPEED;
    if (dx !== 0 && dy !== 0) { dx *= 0.707; dy *= 0.707; }
    if (dx !== 0 || dy !== 0) {
      currentPos.current.x += dx; currentPos.current.y += dy;
      setPos({ x: currentPos.current.x, y: currentPos.current.y });
    }
    requestRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    const fontSize = window.innerWidth < 768 ? 16 : 24;
    const columns = canvas.width / fontSize;

    matrixStateRef.current = [];
    for (let x = 0; x < columns; x++) {
      matrixStateRef.current[x] = {
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.5,
        chars: "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワン0123456789".split("")
      };
    }

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(2, 2, 2, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#10b981";
      ctx.font = `${fontSize}px monospace`;
      matrixStateRef.current.forEach((column, i) => {
        const text = column.chars[Math.floor(Math.random() * column.chars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, column.y);
        if (column.y > canvas.height && Math.random() > 0.985) column.y = 0;
        column.y += column.speed;
      });
    };
    const matrixInterval = setInterval(drawMatrix, 50);
    return () => clearInterval(matrixInterval);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [activePoi]);

  useEffect(() => {
    const nearP = POIS.find(poi => Math.hypot(poi.x - pos.x, poi.y - pos.y) < 250);
    const nearS = SOCIALS.find(soc => Math.hypot(soc.x - pos.x, soc.y - pos.y) < 120);
    setIsNearPoi(nearP || null);
    setIsNearSocial(nearS || null);
  }, [pos, POIS]);

  const getCloseButtonColor = (poi) => {
    if (!poi) return 'text-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]';
    if (poi.color === 'text-violet-500') return 'text-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]';
    if (poi.color === 'text-blue-500') return 'text-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]';
    if (poi.color === 'text-amber-500') return 'text-amber-500 hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]';
    if (poi.color === 'text-rose-500') return 'text-rose-500 hover:shadow-[0_0_30px_rgba(244,63,94,0.6)]';
    return 'text-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]';
  };

  return (
    <div className={`fixed inset-0 bg-[#020202] overflow-hidden text-white font-sans selection:bg-emerald-500 selection:text-black ${activePoi ? 'touch-auto' : 'touch-none'}`}>

      <div className="absolute top-1/2 left-1/2 pointer-events-none" style={{ transform: `translate(${-pos.x}px, ${-pos.y}px)` }}>

        <canvas ref={canvasRef} width={4000} height={4000} className="absolute -translate-x-1/2 -translate-y-1/2 z-0 opacity-40 pointer-events-none" />

        <div className="absolute w-[10000px] h-[10000px] -translate-x-1/2 -translate-y-1/2 opacity-20 z-0"
             style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.25) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <svg className="absolute inset-0 overflow-visible opacity-50 z-0">
          {POIS.map(poi => (
            <path key={poi.id} d={`M 0 0 L ${poi.x} 0 L ${poi.x} ${poi.y}`} fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="15 15" className="animate-[dash_30s_linear_infinite]" />
          ))}
          <path d={`M 0 0 L 0 400`} fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="15 15" className="opacity-40" />
        </svg>

        {POIS.map(poi => {
          const isHoveredOrNear = isNearPoi?.id === poi.id;
          return (
            <div key={poi.id} style={{ left: poi.x, top: poi.y }} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group pointer-events-auto z-10">
              <motion.div
                onClick={() => { setActivePoi(poi); setSelectedProject(null); }}
                whileHover={{ scale: 1.05 }}
                animate={{
                  scale: isHoveredOrNear ? 1.1 : 1,
                  boxShadow: isHoveredOrNear ? `0 0 100px ${poi.color === 'text-emerald-400' ? 'rgba(16,185,129,0.3)' : poi.color === 'text-violet-500' ? 'rgba(139,92,246,0.3)' : poi.color === 'text-blue-500' ? 'rgba(59,130,246,0.3)' : poi.color === 'text-amber-500' ? 'rgba(217,119,6,0.3)' : 'rgba(244,63,94,0.3)'}` : '0 0 0px rgba(0,0,0,0)'
                }}
                className={`w-48 h-48 md:w-64 md:h-64 rounded-[2rem] border-2 bg-black/80 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-300 overflow-hidden shadow-2xl cursor-pointer ${poi.borderColor} ${poi.color}`}
              >
                {poi.type === 'profile' ? (
                  <div className="flex flex-col items-center p-4 md:p-6 w-full h-full justify-between relative z-10">
                    <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-emerald-500/30 bg-emerald-950/30 overflow-hidden flex items-center justify-center relative shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      {PHOTO_URL ? <img src={PHOTO_URL} alt="Nico" className="w-full h-full object-cover scale-125" /> : <User className="w-12 h-12 md:w-16 md:h-16 text-emerald-400/50" />}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    </div>
                    <h1 className="text-xl md:text-3xl font-black italic tracking-tighter leading-none text-center uppercase break-words px-2 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">{poi.title}</h1>
                  </div>
                ) : (
                  poi.icon
                )}
              </motion.div>
              {(poi.type === 'icon' || poi.type === 'projects' || poi.type === 'experience' || poi.type === 'stack' || poi.type === 'hiring') && (
                <span className={`mt-6 md:mt-10 text-[10px] md:text-[12px] tracking-[0.5em] md:tracking-[0.7em] font-black uppercase bg-black/80 px-4 md:px-6 py-2 rounded-full backdrop-blur-lg border border-white/10 pointer-events-none ${poi.color} drop-shadow-[0_0_15px_currentColor]`}>{poi.title}</span>
              )}
            </div>
          );
        })}

        {SOCIALS.map(soc => {
          const isHoveredOrNear = isNearSocial?.id === soc.id;
          return (
            <a key={soc.id} href={soc.url} target="_blank" rel="noopener noreferrer"
               style={{ left: soc.x, top: soc.y }}
               className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 bg-black/80 backdrop-blur-xl flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer z-10
                          ${isHoveredOrNear ? 'scale-125 shadow-[0_0_50px_currentColor]' : 'hover:scale-125 hover:shadow-[0_0_50px_currentColor]'}
                          ${soc.border} ${soc.color}`}
            >
              {soc.icon}
            </a>
          );
        })}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-20">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-emerald-400 bg-emerald-500/20 backdrop-blur-md relative shadow-[0_0_30px_rgba(16,185,129,0.6)]">
          <div className="absolute inset-0 bg-emerald-400 opacity-40 animate-ping rounded-full" />
          <div className="absolute inset-1 bg-emerald-300 rounded-full" />
        </div>
      </div>

      {!activePoi && (
        <>
          <div className="hidden md:flex absolute top-8 right-8 flex-col items-end gap-6 z-30 text-emerald-500/50 font-black text-sm pointer-events-none select-none">
            <div className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center bg-black/50 backdrop-blur transition-all ${activeKeys['w'] ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)] text-emerald-400' : 'border-emerald-500/30 text-emerald-500/50'}`}>W</div>
              <div className="flex gap-2">
                <div className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center bg-black/50 backdrop-blur transition-all ${activeKeys['a'] ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)] text-emerald-400' : 'border-emerald-500/30 text-emerald-500/50'}`}>A</div>
                <div className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center bg-black/50 backdrop-blur transition-all ${activeKeys['s'] ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)] text-emerald-400' : 'border-emerald-500/30 text-emerald-500/50'}`}>S</div>
                <div className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center bg-black/50 backdrop-blur transition-all ${activeKeys['d'] ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)] text-emerald-400' : 'border-emerald-500/30 text-emerald-500/50'}`}>D</div>
              </div>
              <span className="text-[10px] tracking-widest uppercase mt-1">{t.navigation}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest uppercase text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">{t.interact}</span>
              <div className="w-12 h-12 border-2 border-emerald-400 rounded-lg flex items-center justify-center bg-emerald-950/50 backdrop-blur text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]">E</div>
            </div>
          </div>

          <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="absolute top-8 left-8 z-30 w-12 h-12 rounded-xl bg-black/60 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all backdrop-blur md:pointer-events-auto pointer-events-auto">
            <Globe size={24} />
          </button>
        </>
      )}

      <AnimatePresence>
        {(isNearPoi || isNearSocial) && !activePoi && (
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}
                      className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 px-12 py-5 bg-emerald-500 text-black text-[12px] font-black tracking-[0.5em] rounded-full uppercase shadow-[0_0_50px_rgba(16,185,129,0.5)] z-40 border-2 border-emerald-300 pointer-events-none">
            {isNearPoi ? `${t.connect_with} ${isNearPoi.title} [E]` : `${t.open_link} ${isNearSocial.title} [E]`}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePoi && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/98 backdrop-blur-3xl flex items-start md:items-center justify-center p-4 md:p-8 z-50 overflow-y-auto selection:bg-rose-500 selection:text-white pb-24">

            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} className="max-w-7xl w-full flex flex-col gap-8 relative text-center my-auto mt-16 md:mt-auto pt-4 md:pt-0">

              <button onClick={() => { setActivePoi(null); setSelectedProject(null); }} className={`absolute top-4 right-4 md:top-4 md:right-4 transition-all p-2 flex items-center gap-2 ${getCloseButtonColor(activePoi)} z-50 bg-black/50 rounded-full backdrop-blur`}>
                <span className="hidden md:block text-xs font-black tracking-widest uppercase opacity-50">{t.close_button}</span>
                <X size={40} className="md:w-[40px] md:h-[40px]" strokeWidth={1.5} />
              </button>

              {activePoi.type === 'projects' && selectedProject ? (
                <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
                  <div className="flex flex-col items-center w-full">
                    <button onClick={() => setSelectedProject(null)} className="mb-6 text-[9px] md:text-[10px] font-black tracking-widest uppercase flex items-center gap-2 text-rose-500/70 hover:text-rose-400 transition-colors bg-rose-500/10 px-4 py-2 rounded-full border border-rose-500/20">
                      <ChevronLeft size={16} /> {t.back_to_projects}
                    </button>

                    <div className="flex items-center gap-3 mb-4 flex-wrap justify-center">
                      <span className={`px-3 py-1 border text-[9px] font-bold rounded-full uppercase tracking-widest ${selectedProject.statusColor} bg-black`}>{selectedProject.status}</span>
                      <span className="px-3 py-1 border border-white/10 text-white/50 text-[9px] font-bold rounded-full uppercase tracking-widest bg-white/5">{selectedProject.category}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter mb-6 leading-[0.85] uppercase text-white drop-shadow-lg">{selectedProject.title}</h2>
                    <p className="text-base md:text-lg text-white/70 mb-8 font-light leading-relaxed">{selectedProject.desc}</p>
                  </div>

                  {selectedProject.media.length > 0 && (
                    <div className="w-full flex flex-col gap-4">
                      <button onClick={() => setExpandedMediaIndex(mediaIndex)} className="aspect-video bg-black rounded-[2rem] border-2 border-rose-500/20 flex items-center justify-center overflow-hidden relative shadow-[inset_0_0_50px_rgba(0,0,0,1)] group hover:border-rose-500/50 transition-all cursor-zoom-in">
                        {selectedProject.media[mediaIndex]?.url ? (
                          selectedProject.media[mediaIndex].type === 'video' ? (
                            <video src={selectedProject.media[mediaIndex].url} autoPlay loop muted className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          ) : (
                            <img src={selectedProject.media[mediaIndex].url} alt="Screenshot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          )
                        ) : (
                          <div className="flex flex-col items-center text-rose-500/20">
                            {selectedProject.media[mediaIndex]?.type === 'video' ? <Film className="w-10 h-10 md:w-16 md:h-16" /> : <ImageIcon className="w-10 h-10 md:w-16 md:h-16" />}
                            <span className="mt-2 md:mt-4 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Sin archivo</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-[2rem] flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-rose-500/20 border border-rose-500/50 rounded-full p-3 backdrop-blur-sm">
                              <ImageIcon size={24} className="text-rose-400" />
                            </div>
                          </div>
                        </div>
                      </button>
                      <div className="flex gap-4 overflow-x-auto pb-2 snap-x justify-center">
                        {selectedProject.media.map((med, idx) => (
                          <button key={idx} onClick={() => setMediaIndex(idx)} className={`w-20 h-14 md:w-24 md:h-16 shrink-0 rounded-xl border-2 flex items-center justify-center overflow-hidden transition-all snap-start ${mediaIndex === idx ? 'border-rose-500 bg-rose-500/10' : 'border-white/10 bg-black/50 hover:border-rose-500/50'}`}>
                            {med.url ? (
                              med.type === 'video' ? <video src={med.url} className="w-full h-full object-cover opacity-50" /> : <img src={med.url} className="w-full h-full object-cover opacity-50" />
                            ) : (
                              med.type === 'video' ? <Film size={16} className="text-white/20" /> : <ImageIcon size={16} className="text-white/20" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 justify-center items-center">
                    {selectedProject.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[9px] font-bold rounded-full uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {selectedProject.github_url && (
                    <a href={selectedProject.github_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 font-black text-[10px] rounded-full uppercase tracking-widest hover:bg-rose-500/20 transition-all">
                      <Github size={16} />
                      {t.view_repo}
                    </a>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <h3 className={`text-xs md:text-sm font-bold tracking-[0.5em] md:tracking-[0.7em] mb-4 md:mb-6 uppercase flex items-center justify-center gap-3 ${activePoi.color} drop-shadow-[0_0_8px_currentColor]`}>
                    <div className={`w-2 h-2 rounded-full bg-current animate-pulse shadow-[0_0_10px_currentColor]`} />
                    {activePoi.subtitle}
                  </h3>
                  <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 md:mb-12 leading-[0.85] uppercase text-white drop-shadow-2xl">{activePoi.title}</h2>

                  {activePoi.type === 'projects' ? (
                    <div className="w-full max-w-2xl flex flex-col gap-4">
                      {PROJECTS_DATA.map(proj => (
                        <button key={proj.id} onClick={() => { setSelectedProject(proj); setMediaIndex(0); }} className="w-full text-left p-4 md:p-6 bg-black/40 rounded-2xl md:rounded-3xl border border-rose-500/20 hover:border-rose-500 hover:bg-rose-950/20 transition-all duration-300 group flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                          <div className="w-full md:w-16 h-32 md:h-16 rounded-xl md:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-rose-500/50 transition-all shrink-0 overflow-hidden relative">
                            {proj.icon ? (
                              <img src={proj.icon} alt={proj.title} className="w-full h-full object-cover md:group-hover:scale-110 transition-transform" />
                            ) : (
                              <div className="md:group-hover:scale-110 transition-transform">{proj.iconPlaceholder}</div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
                            <h4 className="absolute bottom-2 left-3 text-lg font-black italic uppercase tracking-wider text-white md:hidden z-10 drop-shadow-md">{proj.title}</h4>
                          </div>
                          <div className="flex-1 w-full">
                            <div className="hidden md:flex justify-between items-center mb-2">
                              <h4 className="text-xl font-black italic uppercase tracking-wider group-hover:text-rose-400 transition-colors">{proj.title}</h4>
                              <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${proj.statusColor}`}>{proj.status}</span>
                            </div>
                            <div className="md:hidden mb-2">
                              <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${proj.statusColor}`}>{proj.status}</span>
                            </div>
                            <p className="text-xs md:text-sm text-white/50">{proj.short}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full max-w-3xl flex flex-col items-center">
                      <p className="text-base md:text-lg text-white/70 mb-8 md:mb-12 font-light leading-relaxed">{activePoi.content}</p>
                      {activePoi.skills && (
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                          {activePoi.skills.map((s, idx) => (
                            <div key={idx} className={`p-6 md:p-8 bg-black/50 rounded-2xl md:rounded-3xl border transition-all duration-300 group ${activePoi.borderColor} hover:bg-white/5 text-left`}>
                              <span className={`block text-[10px] md:text-[11px] font-black mb-2 md:mb-3 uppercase tracking-widest ${activePoi.color}`}>{s.name}</span>
                              <span className="text-base md:text-lg text-white font-medium">{s.list}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {expandedMediaIndex !== null && selectedProject && selectedProject.media[expandedMediaIndex]?.url && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      onClick={() => setExpandedMediaIndex(null)}
                      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4 cursor-pointer">

            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center gap-4">

              {selectedProject.media[expandedMediaIndex].type === 'video' ? (
                <video src={selectedProject.media[expandedMediaIndex].url} autoPlay loop muted className="w-full h-full object-contain rounded-2xl shadow-2xl" />
              ) : (
                <img src={selectedProject.media[expandedMediaIndex].url} alt="Expanded" className="w-full h-full object-contain rounded-2xl shadow-2xl" />
              )}

              <button onClick={() => setExpandedMediaIndex(null)}
                      className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 border border-rose-500/30 hover:border-rose-500 rounded-full p-2 transition-all backdrop-blur">
                <X size={24} className="text-rose-400" />
              </button>

              <div className="flex gap-3 items-center justify-center">
                {selectedProject.media.map((_, idx) => (
                  <button key={idx} onClick={() => setExpandedMediaIndex(idx)}
                          className={`transition-all rounded-full border ${expandedMediaIndex === idx ? 'w-3 h-3 bg-rose-500 border-rose-500' : 'w-2 h-2 bg-rose-500/30 border-rose-500/30 hover:border-rose-500'}`} />
                ))}
              </div>

              <p className="text-rose-500/50 text-xs uppercase tracking-widest font-black">Presiona ESC o click fuera para cerrar</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes dash { to { stroke-dashoffset: -300; } }
        body { background-color: #020202; }
      `}</style>
    </div>
  );
}

// MOBILE MODE COMPONENT
function MobileMode() {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [language, setLanguage] = useState('es');
  const [mediaIndex, setMediaIndex] = useState(0);
  const [expandedMediaIndex, setExpandedMediaIndex] = useState(null);

  const carouselRef = useRef(null);
  const matrixStateRef = useRef([]);
  const canvasRef = useRef(null);

  const t = TRANSLATIONS[language];
  const PROJECTS_DATA = createPROJECTS(t, language);

  const sections = [
    { id: 'hero' },
    { id: 'experience' },
    { id: 'stack' },
    { id: 'projects' },
    { id: 'why' },
    { id: 'networks' }
  ];

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const { offset } = info;

    if (offset.x > swipeThreshold && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else if (offset.x < -swipeThreshold && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    const fontSize = 12;
    const columns = canvas.width / fontSize;

    matrixStateRef.current = [];
    for (let x = 0; x < columns; x++) {
      matrixStateRef.current[x] = {
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.5,
        chars: "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワン0123456789".split("")
      };
    }

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(2, 2, 2, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#10b981";
      ctx.font = `${fontSize}px monospace`;
      matrixStateRef.current.forEach((column, i) => {
        const text = column.chars[Math.floor(Math.random() * column.chars.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, column.y);
        if (column.y > canvas.height && Math.random() > 0.985) column.y = 0;
        column.y += column.speed;
      });
    };
    const matrixInterval = setInterval(drawMatrix, 50);
    return () => clearInterval(matrixInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#020202] overflow-hidden text-white font-sans selection:bg-emerald-500 selection:text-black">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.25) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <motion.div
        ref={carouselRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={{ x: -currentSection * 100 + '%' }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="absolute inset-0 flex h-screen z-10"
      >
        {/* Hero Section */}
        <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-6 relative">
          <div className="flex flex-col items-center gap-8">
            <div className="w-32 h-32 rounded-full border-4 border-emerald-500/50 bg-emerald-950/30 overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              {PHOTO_URL ? <img src={PHOTO_URL} alt="Nico" className="w-full h-full object-cover scale-125" /> : <User className="w-16 h-16 text-emerald-400/50" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-black italic tracking-tighter mb-4 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">NICOLÁS</h1>
              <p className="text-lg text-emerald-300/80 font-light mb-2">{t.hero_subtitle}</p>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm">{t.hero_content}</p>
            </div>
          </div>
          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-emerald-500/50 text-xs">
            <GripHorizontal size={20} className="animate-pulse" />
            <span className="font-bold tracking-widest uppercase">{language === 'es' ? 'Desliza' : 'Swipe'}</span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-6 relative overflow-y-auto pb-20">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <h2 className="text-4xl font-black italic tracking-tighter mb-2 text-violet-500 text-center drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">{t.experience_title}</h2>
            <p className="text-center text-sm text-white/60 mb-4">{t.experience_subtitle}</p>

            <div className="flex flex-col gap-4">
              <div className="p-6 bg-violet-950/20 rounded-2xl border border-violet-500/30">
                <h3 className="text-base font-black text-violet-400 mb-2">{t.experience_raiola}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{t.experience_raiola_desc}</p>
              </div>
              <div className="p-6 bg-violet-950/20 rounded-2xl border border-violet-500/30">
                <h3 className="text-base font-black text-violet-400 mb-2">{t.experience_uniovi}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{t.experience_uniovi_desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stack Section */}
        <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-6 relative overflow-y-auto pb-20">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <h2 className="text-4xl font-black italic tracking-tighter mb-2 text-blue-500 text-center drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">{t.stack_title}</h2>
            <p className="text-center text-sm text-white/60 mb-4">{t.stack_subtitle}</p>

            <div className="flex flex-col gap-3">
              {[
                { name: t.stack_backend, desc: t.stack_backend_desc },
                { name: t.stack_frontend, desc: t.stack_frontend_desc },
                { name: t.stack_data, desc: t.stack_data_desc },
                { name: t.stack_ia, desc: t.stack_ia_desc },
                { name: t.stack_devops, desc: t.stack_devops_desc }
              ].map((skill, idx) => (
                <div key={idx} className="p-4 bg-blue-950/20 rounded-xl border border-blue-500/30">
                  <h3 className="text-sm font-black text-blue-400 mb-1">{skill.name}</h3>
                  <p className="text-xs text-white/70">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-6 relative overflow-y-auto pb-20">
          {selectedProject ? (
            <div className="w-full max-w-sm flex flex-col gap-6">
              <button onClick={() => setSelectedProject(null)} className="mb-4 text-[9px] font-black tracking-widest uppercase flex items-center gap-2 text-rose-500/70 hover:text-rose-400 transition-colors bg-rose-500/10 px-4 py-2 rounded-full border border-rose-500/20 w-fit mx-auto">
                <ChevronLeft size={16} /> {t.back_to_projects}
              </button>

              <div className="text-center mb-4">
                <h2 className="text-3xl font-black italic tracking-tighter mb-2 text-rose-400">{selectedProject.title}</h2>
                <p className="text-xs text-white/50 mb-4 px-3">{selectedProject.desc}</p>
              </div>

              {selectedProject.media.length > 0 && (
                <div className="flex flex-col gap-3">
                  <button onClick={() => setExpandedMediaIndex(mediaIndex)} className="aspect-video bg-black rounded-xl border-2 border-rose-500/20 flex items-center justify-center overflow-hidden relative">
                    {selectedProject.media[mediaIndex]?.url ? (
                      selectedProject.media[mediaIndex].type === 'video' ? (
                        <video src={selectedProject.media[mediaIndex].url} autoPlay loop muted className="w-full h-full object-cover" />
                      ) : (
                        <img src={selectedProject.media[mediaIndex].url} alt="Screenshot" className="w-full h-full object-cover" />
                      )
                    ) : (
                      <div className="flex flex-col items-center text-rose-500/20">
                        <ImageIcon className="w-8 h-8" />
                      </div>
                    )}
                  </button>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.media.map((med, idx) => (
                      <button key={idx} onClick={() => setMediaIndex(idx)} className={`w-16 h-12 shrink-0 rounded-lg border-2 flex items-center justify-center overflow-hidden transition-all ${mediaIndex === idx ? 'border-rose-500 bg-rose-500/10' : 'border-white/10 bg-black/50'}`}>
                        {med.url ? (med.type === 'video' ? <video src={med.url} className="w-full h-full object-cover opacity-50" /> : <img src={med.url} className="w-full h-full object-cover opacity-50" />) : <ImageIcon size={12} className="text-white/20" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 justify-center">
                {selectedProject.stack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[8px] font-bold rounded-full uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject.github_url && (
                <a href={selectedProject.github_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 font-black text-[9px] rounded-full uppercase tracking-widest hover:bg-rose-500/20 transition-all mx-auto">
                  <Github size={14} /> {t.view_repo}
                </a>
              )}
            </div>
          ) : (
            <div className="w-full max-w-sm flex flex-col gap-6">
              <h2 className="text-4xl font-black italic tracking-tighter mb-2 text-rose-500 text-center drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]">{t.projects_title}</h2>
              <p className="text-center text-xs text-white/60 mb-4">{t.projects_content}</p>

              <div className="flex flex-col gap-3">
                {PROJECTS_DATA.map(proj => (
                  <button key={proj.id} onClick={() => { setSelectedProject(proj); setMediaIndex(0); }} className="text-left p-4 bg-rose-950/20 rounded-xl border border-rose-500/30 hover:border-rose-500 hover:bg-rose-950/40 transition-all">
                    <h3 className="text-sm font-black text-rose-400 mb-1">{proj.title}</h3>
                    <p className="text-xs text-white/60">{proj.short}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Why Section */}
        <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-6 relative overflow-y-auto pb-20">
          <div className="w-full max-w-sm flex flex-col gap-6 text-center">
            <h2 className="text-4xl font-black italic tracking-tighter mb-2 text-amber-500 drop-shadow-[0_0_8px_rgba(217,119,6,0.8)]">{t.why_title}</h2>
            <p className="text-sm text-amber-300/80 font-light mb-2">{t.why_subtitle}</p>
            <p className="text-sm text-white/70 leading-relaxed">{t.why_content}</p>
          </div>
        </div>

        {/* Networks + Language Section */}
        <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-6 relative gap-12">
          <h2 className="text-3xl font-black italic tracking-tighter text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">{t.connect_with}</h2>

          <div className="flex flex-col items-center gap-6 w-full max-w-xs">
            {SOCIALS.map(soc => (
              <a key={soc.id} href={soc.url} target="_blank" rel="noopener noreferrer"
                 className={`w-full py-4 px-6 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all active:scale-95 ${soc.border} ${soc.color} bg-black/40 hover:bg-black/60`}>
                {soc.icon}
                <span className="font-bold text-lg">{soc.title}</span>
              </a>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-sm text-white/50 font-bold uppercase tracking-widest">Idioma</span>
            <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                    className="w-16 h-10 rounded-full bg-black/60 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all backdrop-blur font-black text-sm">
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Section Indicators */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {sections.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrentSection(idx)}
            animate={{
              width: currentSection === idx ? 32 : 8,
              backgroundColor: currentSection === idx ? '#10b981' : 'rgba(16, 185, 129, 0.3)'
            }}
            className="h-2 rounded-full transition-colors"
          />
        ))}
      </div>

      {/* Expanded Media Modal */}
      <AnimatePresence>
        {expandedMediaIndex !== null && selectedProject && selectedProject.media[expandedMediaIndex]?.url && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      onClick={() => setExpandedMediaIndex(null)}
                      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4 cursor-pointer">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-full w-full max-h-[90vh] flex flex-col items-center gap-4">
              {selectedProject.media[expandedMediaIndex].type === 'video' ? (
                <video src={selectedProject.media[expandedMediaIndex].url} autoPlay loop muted className="w-full h-full object-contain rounded-2xl shadow-2xl" />
              ) : (
                <img src={selectedProject.media[expandedMediaIndex].url} alt="Expanded" className="w-full h-full object-contain rounded-2xl shadow-2xl" />
              )}
              <button onClick={() => setExpandedMediaIndex(null)}
                      className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 border border-rose-500/30 hover:border-rose-500 rounded-full p-2 transition-all backdrop-blur">
                <X size={24} className="text-rose-400" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// MAIN APP COMPONENT - Responsive Mode Selector
export default function App() {
  const windowSize = useWindowSize();
  const isMobile = !windowSize || windowSize.width < 768;

  return isMobile ? <MobileMode /> : <DesktopMode />;
}
