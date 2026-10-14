import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, Gamepad2, X, Briefcase, Github, Linkedin, Mail, ChevronLeft, Image as ImageIcon,
  Globe, GripHorizontal, Network, Brain, Rocket, ExternalLink,
} from 'lucide-react';
import { useWindowSize } from './hooks/useWindowSize';
import { PHOTO_URL, GH, SOCIALS_DATA, UI, CONTENT, PROJECTS } from './data';

const BASE_SPEED = 9;
const KATAKANA = 'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワン0123456789'.split('');

// Clases completas (Tailwind necesita ver los nombres literales)
const COLORS = {
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/40', glow: 'rgba(16,185,129,0.3)', closeHover: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]' },
  rose: { text: 'text-rose-500', border: 'border-rose-500/50', glow: 'rgba(244,63,94,0.3)', closeHover: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.6)]' },
  cyan: { text: 'text-cyan-400', border: 'border-cyan-500/50', glow: 'rgba(34,211,238,0.3)', closeHover: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]' },
  orange: { text: 'text-orange-400', border: 'border-orange-500/50', glow: 'rgba(251,146,60,0.3)', closeHover: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.6)]' },
  violet: { text: 'text-violet-500', border: 'border-violet-500/50', glow: 'rgba(139,92,246,0.3)', closeHover: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]' },
  blue: { text: 'text-blue-500', border: 'border-blue-500/50', glow: 'rgba(59,130,246,0.3)', closeHover: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]' },
  amber: { text: 'text-amber-500', border: 'border-amber-500/50', glow: 'rgba(217,119,6,0.3)', closeHover: 'hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]' },
};

// Paletas del explorador de proyectos (juegos = rose, IA/apps = cyan)
const BROWSER = {
  rose: {
    title: 'text-rose-400', row: 'border-rose-500/20 hover:border-rose-500 hover:bg-rose-950/20', chip: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
    btn: 'bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20', back: 'text-rose-500/70 hover:text-rose-400 bg-rose-500/10 border-rose-500/20',
    media: 'border-rose-500/20 hover:border-rose-500/50', thumbOn: 'border-rose-500 bg-rose-500/10', thumbOff: 'border-white/10 bg-black/50 hover:border-rose-500/50',
    tabOn: 'bg-rose-500 text-black border-rose-500', tabOff: 'text-rose-400 border-rose-500/30 hover:border-rose-500', dot: 'bg-rose-500', hint: 'text-rose-500/50',
  },
  cyan: {
    title: 'text-cyan-300', row: 'border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-950/20', chip: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    btn: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20', back: 'text-cyan-400/70 hover:text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
    media: 'border-cyan-500/20 hover:border-cyan-500/50', thumbOn: 'border-cyan-400 bg-cyan-500/10', thumbOff: 'border-white/10 bg-black/50 hover:border-cyan-500/50',
    tabOn: 'bg-cyan-400 text-black border-cyan-400', tabOff: 'text-cyan-300 border-cyan-500/30 hover:border-cyan-400', dot: 'bg-cyan-400', hint: 'text-cyan-400/50',
  },
};

const STATUS_STYLE = {
  playable: 'text-emerald-400 border-emerald-400/30',
  wip: 'text-amber-400 border-amber-400/30',
  proto: 'text-sky-300 border-sky-300/30',
  live: 'text-emerald-400 border-emerald-400/30',
  done: 'text-emerald-400 border-emerald-400/30',
  beta: 'text-violet-300 border-violet-300/30',
  used: 'text-emerald-400 border-emerald-400/30',
};

const SOCIAL_VIEW = {
  github: { icon: <Github size={32} className="md:w-9 md:h-9" />, x: -180, color: 'text-white', border: 'border-white/50' },
  linkedin: { icon: <Linkedin size={32} className="md:w-9 md:h-9" />, x: 0, color: 'text-blue-500', border: 'border-blue-500/50' },
  email: { icon: <Mail size={32} className="md:w-9 md:h-9" />, x: 180, color: 'text-rose-400', border: 'border-rose-400/50' },
};
const SOCIALS = SOCIALS_DATA.map((s) => ({ ...s, ...SOCIAL_VIEW[s.id], y: 400 }));

const tr = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] : v);

// --- Mundo del modo escritorio ---
const createPOIS = (c) => [
  { id: 'profile', x: 0, y: -450, type: 'profile', color: 'emerald', title: c.hero_title, subtitle: c.hero_subtitle, label: c.hero_title },
  { id: 'games', x: -750, y: -350, type: 'browser', groups: ['games'], palette: 'rose', color: 'rose', icon: Gamepad2, label: 'GAMES', title: 'GAME DEV', subtitle: 'Godot · Unity · C++' },
  { id: 'projects', x: 750, y: -350, type: 'browser', groups: ['ai', 'apps'], palette: 'cyan', color: 'cyan', icon: Brain, label: 'IA / APPS', title: 'IA & APPS', subtitle: c.projects_title },
  { id: 'systems', x: 750, y: 350, type: 'systems', color: 'orange', icon: Network, label: c.systems_title, title: c.systems_title, subtitle: c.systems_subtitle },
  { id: 'experience', x: -750, y: 350, type: 'experience', color: 'violet', icon: Briefcase, label: c.experience_title, title: c.experience_title, subtitle: c.experience_subtitle },
  { id: 'stack', x: -1450, y: 0, type: 'stack', color: 'blue', icon: Cpu, label: c.stack_title, title: c.stack_title, subtitle: c.stack_subtitle },
  { id: 'hiring', x: 1450, y: 0, type: 'hiring', color: 'amber', icon: Rocket, label: c.why_title, title: c.why_title, subtitle: c.why_subtitle },
];

function useMatrix(canvasRef, fontSize) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d', { alpha: false });
    const columns = canvas.width / fontSize;
    const cols = [];
    for (let x = 0; x < columns; x++) cols[x] = { y: Math.random() * canvas.height, speed: Math.random() * 1.5 + 0.5 };
    const draw = () => {
      ctx.fillStyle = 'rgba(2, 2, 2, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#10b981';
      ctx.font = `${fontSize}px monospace`;
      cols.forEach((col, i) => {
        ctx.fillText(KATAKANA[Math.floor(Math.random() * KATAKANA.length)], i * fontSize, col.y);
        if (col.y > canvas.height && Math.random() > 0.985) col.y = 0;
        col.y += col.speed;
      });
    };
    const id = setInterval(draw, 50);
    return () => clearInterval(id);
  }, [canvasRef, fontSize]);
}

// --- Piezas compartidas ---
function StatusBadge({ status, ui, small }) {
  return (
    <span className={`font-black uppercase tracking-widest rounded-full border bg-black ${small ? 'text-[8px] px-2 py-0.5' : 'text-[9px] px-3 py-1'} ${STATUS_STYLE[status]}`}>
      {ui.status[status]}
    </span>
  );
}

function ProjectThumb({ proj, className }) {
  return (
    <div className={`bg-gradient-to-br from-white/10 to-black border border-white/10 flex items-center justify-center overflow-hidden relative shrink-0 ${className}`}>
      {proj.icon ? (
        <img src={proj.icon} alt={proj.title} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xl font-black italic text-white/40">{proj.title.slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
}

function ProjectBrowser({ lang, groups, palette, compact }) {
  const ui = UI[lang];
  const p = BROWSER[palette];
  const [group, setGroup] = useState(groups.length > 1 ? 'all' : groups[0]);
  const [selected, setSelected] = useState(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (expanded === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); setExpanded(null); }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [expanded]);

  const list = PROJECTS.filter((pr) => groups.includes(pr.group) && (group === 'all' || pr.group === group));

  if (selected) {
    const m = selected.media[mediaIndex];
    return (
      <div className={`flex flex-col items-center w-full mx-auto ${compact ? 'gap-4 max-w-sm' : 'gap-8 max-w-2xl'}`}>
        <button onClick={() => { setSelected(null); setMediaIndex(0); }} className={`text-[10px] font-black tracking-widest uppercase flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${p.back}`}>
          <ChevronLeft size={16} /> {ui.back}
        </button>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <StatusBadge status={selected.status} ui={ui} />
          <span className="px-3 py-1 border border-white/10 text-white/50 text-[9px] font-bold rounded-full uppercase tracking-widest bg-white/5">{selected.category}</span>
        </div>
        <h2 className={`font-black italic tracking-tighter leading-[0.9] uppercase text-white ${compact ? 'text-2xl' : 'text-4xl md:text-6xl'}`}>{selected.title}</h2>
        <p className={`text-white/70 font-light leading-relaxed ${compact ? 'text-sm' : 'text-base md:text-lg'}`}>{tr(selected.desc, lang)}</p>
        {selected.tech && (
          <div className="w-full text-left">
            <h3 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-3 ${p.title}`}>{ui.tech}</h3>
            <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-white/30">
              {selected.tech.map((t, i) => (
                <li key={i} className={`text-white/75 leading-relaxed ${compact ? 'text-xs' : 'text-sm md:text-base'}`}>{tr(t, lang)}</li>
              ))}
            </ul>
          </div>
        )}

        {selected.media.length > 0 && (
          <div className="w-full flex flex-col gap-3">
            <button onClick={() => setExpanded(mediaIndex)} className={`aspect-video bg-black rounded-2xl border-2 flex items-center justify-center overflow-hidden transition-all cursor-zoom-in ${p.media}`}>
              {m?.type === 'video'
                ? <video src={m.url} autoPlay loop muted playsInline className="w-full h-full object-contain" />
                : <img src={m?.url} alt={selected.title} className="w-full h-full object-contain" />}
            </button>
            {selected.media.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1 justify-center">
                {selected.media.map((med, idx) => (
                  <button key={idx} onClick={() => setMediaIndex(idx)} className={`w-20 h-14 shrink-0 rounded-xl border-2 overflow-hidden transition-all ${mediaIndex === idx ? p.thumbOn : p.thumbOff}`}>
                    <img src={med.url} alt="" className="w-full h-full object-cover opacity-70" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 justify-center">
          {selected.stack.map((tech) => (
            <span key={tech} className={`px-3 py-1 border text-[9px] font-bold rounded-full uppercase tracking-widest ${p.chip}`}>{tech}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {selected.live && (
            <a href={selected.live} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 border font-black text-[10px] rounded-full uppercase tracking-widest transition-all ${p.btn}`}>
              <ExternalLink size={16} /> {ui.live}
            </a>
          )}
          {selected.repo && (
            <a href={selected.branch ? `${GH}/${selected.repo}/tree/${selected.branch}` : `${GH}/${selected.repo}`} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 border font-black text-[10px] rounded-full uppercase tracking-widest transition-all ${p.btn}`}>
              <Github size={16} /> {ui.repo}
            </a>
          )}
        </div>

        {createPortal(
        <AnimatePresence>
          {expanded !== null && selected.media[expanded] && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setExpanded(null)}
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4 cursor-pointer">
              <div onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center gap-4">
                {selected.media[expanded].type === 'video'
                  ? <video src={selected.media[expanded].url} autoPlay loop muted playsInline className="max-h-[80vh] object-contain rounded-2xl" />
                  : <img src={selected.media[expanded].url} alt="" className="max-h-[80vh] object-contain rounded-2xl shadow-2xl" />}
                <button onClick={() => setExpanded(null)} className="absolute top-2 right-2 bg-black/60 border border-white/20 rounded-full p-2"><X size={24} /></button>
                <p className={`text-xs uppercase tracking-widest font-black ${p.hint}`}>{ui.closeHint}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body)}
      </div>
    );
  }

  return (
    <div className={`w-full mx-auto flex flex-col gap-4 ${compact ? 'max-w-sm' : 'max-w-2xl'}`}>
      {groups.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {['all', ...groups].map((g) => (
            <button key={g} onClick={() => setGroup(g)} className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all ${group === g ? p.tabOn : p.tabOff}`}>
              {g === 'all' ? ui.all : ui.groups[g]}
            </button>
          ))}
        </div>
      )}
      {list.map((proj) => (
        <button key={proj.id} onClick={() => { setSelected(proj); setMediaIndex(0); }}
                className={`w-full text-left bg-black/40 rounded-2xl border transition-all duration-300 group flex items-center gap-4 ${compact ? 'p-3' : 'p-4 md:p-5'} ${p.row}`}>
          <ProjectThumb proj={proj} className={compact ? 'w-12 h-12 rounded-xl' : 'w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl'} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h4 className={`font-black italic uppercase tracking-wider truncate group-hover:text-white ${p.title} ${compact ? 'text-sm' : 'text-base md:text-xl'}`}>{proj.title}</h4>
              <StatusBadge status={proj.status} ui={ui} small />
            </div>
            {proj.featured && <span className="inline-block mb-1 text-[8px] font-black uppercase tracking-widest text-amber-300">★ {ui.featured}</span>}
            <p className={`text-white/50 ${compact ? 'text-xs' : 'text-xs md:text-sm'}`}>{tr(proj.short, lang)}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function CardGrid({ items, color }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {items.map((s, idx) => (
        <div key={idx} className={`p-6 md:p-7 bg-black/50 rounded-2xl md:rounded-3xl border transition-all duration-300 hover:bg-white/5 text-left ${COLORS[color].border}`}>
          <span className={`block text-[10px] md:text-[11px] font-black mb-2 uppercase tracking-widest ${COLORS[color].text}`}>{s.name}</span>
          <span className="text-sm md:text-base text-white font-medium">{s.list}</span>
        </div>
      ))}
    </div>
  );
}

function ExperienceList({ items, color, compact }) {
  return (
    <div className={`w-full flex flex-col text-left ${compact ? 'gap-3' : 'gap-5'}`}>
      {items.map((job, idx) => (
        <div key={idx} className={`bg-black/50 rounded-2xl border ${COLORS[color].border} ${compact ? 'p-4' : 'p-6 md:p-8'}`}>
          <h3 className={`font-black uppercase tracking-wider ${COLORS[color].text} ${compact ? 'text-xs' : 'text-sm md:text-base'}`}>{job.name}</h3>
          <p className="text-[11px] text-white/40 uppercase tracking-widest mb-3 mt-1">{job.period}</p>
          <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-white/30">
            {job.list.map((li, i) => (
              <li key={i} className={`text-white/75 leading-relaxed ${compact ? 'text-xs' : 'text-sm md:text-base'}`}>{li}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Tags({ tags, color }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag) => (
        <span key={tag} className={`px-3 py-1 rounded-full border bg-black/60 text-[10px] font-bold uppercase tracking-widest ${COLORS[color].border} ${COLORS[color].text}`}>{tag}</span>
      ))}
    </div>
  );
}

function PoiBody({ poi, c, lang }) {
  switch (poi.type) {
    case 'browser':
      return <ProjectBrowser lang={lang} groups={poi.groups} palette={poi.palette} />;
    case 'experience':
      return <ExperienceList items={c.experience} color={poi.color} />;
    case 'systems':
      return (
        <div className="w-full max-w-3xl flex flex-col items-center gap-8">
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">{c.systems_content}</p>
          <CardGrid items={c.systems_cards} color={poi.color} />
        </div>
      );
    case 'stack':
      return <div className="w-full max-w-4xl"><CardGrid items={c.stack} color={poi.color} /></div>;
    case 'hiring':
      return (
        <div className="w-full max-w-3xl flex flex-col items-center gap-8">
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">{c.why_content}</p>
          <Tags tags={c.why_tags} color={poi.color} />
        </div>
      );
    default:
      return (
        <div className="w-full max-w-3xl flex flex-col items-center gap-8">
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">{c.hero_content}</p>
          <Tags tags={c.hero_tags} color={poi.color} />
        </div>
      );
  }
}

// ======================= ESCRITORIO =======================
function DesktopMode() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [activePoi, setActivePoi] = useState(null);
  const [language, setLanguage] = useState('es');
  const [activeKeys, setActiveKeys] = useState({});

  const keysDown = useRef({});
  const requestRef = useRef();
  const currentPos = useRef({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const c = CONTENT[language];
  const ui = UI[language];
  const POIS = createPOIS(c);
  const nearPoi = POIS.find((p) => Math.hypot(p.x - pos.x, p.y - pos.y) < 250) || null;
  const nearSocial = SOCIALS.find((s) => Math.hypot(s.x - pos.x, s.y - pos.y) < 120) || null;

  useMatrix(canvasRef, window.innerWidth < 768 ? 16 : 24);

  useEffect(() => {
    const down = (e) => {
      const key = e.key.toLowerCase();
      keysDown.current[key] = true;
      setActiveKeys((prev) => ({ ...prev, [key]: true }));
      if (key === 'e') {
        if (activePoi) setActivePoi(null);
        else if (nearPoi) setActivePoi(nearPoi);
        else if (nearSocial) window.open(nearSocial.url, '_blank');
      }
      if (e.key === 'Escape') setActivePoi(null);
    };
    const up = (e) => {
      const key = e.key.toLowerCase();
      delete keysDown.current[key];
      setActiveKeys((prev) => ({ ...prev, [key]: false }));
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, [nearPoi, nearSocial, activePoi]);

  useEffect(() => {
    const update = () => {
      if (!activePoi) {
        let dx = 0, dy = 0;
        if (keysDown.current.w) dy -= BASE_SPEED;
        if (keysDown.current.s) dy += BASE_SPEED;
        if (keysDown.current.a) dx -= BASE_SPEED;
        if (keysDown.current.d) dx += BASE_SPEED;
        if (dx && dy) { dx *= 0.707; dy *= 0.707; }
        if (dx || dy) {
          currentPos.current.x += dx; currentPos.current.y += dy;
          setPos({ x: currentPos.current.x, y: currentPos.current.y });
        }
      }
      requestRef.current = requestAnimationFrame(update);
    };
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [activePoi]);

  const keyCap = (k) => `w-12 h-12 border-2 rounded-lg flex items-center justify-center bg-black/50 backdrop-blur transition-all ${activeKeys[k] ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)] text-emerald-400' : 'border-emerald-500/30 text-emerald-500/50'}`;

  return (
    <div className={`fixed inset-0 bg-[#020202] overflow-hidden text-white font-sans selection:bg-emerald-500 selection:text-black ${activePoi ? 'touch-auto' : 'touch-none'}`}>
      <div className="absolute top-1/2 left-1/2 pointer-events-none" style={{ transform: `translate(${-pos.x}px, ${-pos.y}px)` }}>
        <canvas ref={canvasRef} width={4000} height={4000} className="absolute -translate-x-1/2 -translate-y-1/2 z-0 opacity-40 pointer-events-none" />
        <div className="absolute w-[10000px] h-[10000px] -translate-x-1/2 -translate-y-1/2 opacity-20 z-0"
             style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.25) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <svg className="absolute inset-0 overflow-visible opacity-50 z-0">
          {POIS.map((poi) => (
            <path key={poi.id} d={`M 0 0 L ${poi.x} 0 L ${poi.x} ${poi.y}`} fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="15 15" className="animate-[dash_30s_linear_infinite]" />
          ))}
          <path d="M 0 0 L 0 400" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="15 15" className="opacity-40" />
        </svg>

        {POIS.map((poi) => {
          const near = nearPoi?.id === poi.id;
          const col = COLORS[poi.color];
          const Icon = poi.icon;
          return (
            <div key={poi.id} style={{ left: poi.x, top: poi.y }} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group pointer-events-auto z-10">
              <motion.div
                onClick={() => setActivePoi(poi)}
                whileHover={{ scale: 1.05 }}
                animate={{ scale: near ? 1.1 : 1, boxShadow: near ? `0 0 100px ${col.glow}` : '0 0 0px rgba(0,0,0,0)' }}
                className={`w-48 h-48 md:w-64 md:h-64 rounded-[2rem] border-2 bg-black/80 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-300 overflow-hidden shadow-2xl cursor-pointer ${col.border} ${col.text}`}
              >
                {poi.type === 'profile' ? (
                  <div className="flex flex-col items-center p-4 md:p-6 w-full h-full justify-between relative z-10">
                    <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-emerald-500/30 bg-emerald-950/30 overflow-hidden relative shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <img src={PHOTO_URL} alt="Nicolás Díaz Ulloa" className="w-full h-full object-cover object-[50%_35%]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    </div>
                    <h1 className="text-xl md:text-3xl font-black italic tracking-tighter leading-none text-center uppercase break-words px-2 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">{poi.title}</h1>
                  </div>
                ) : (
                  <Icon className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />
                )}
              </motion.div>
              {poi.type !== 'profile' && (
                <span className={`mt-6 md:mt-10 text-[10px] md:text-[12px] tracking-[0.5em] md:tracking-[0.7em] font-black uppercase bg-black/80 px-4 md:px-6 py-2 rounded-full backdrop-blur-lg border border-white/10 pointer-events-none ${col.text} drop-shadow-[0_0_15px_currentColor]`}>{poi.label}</span>
              )}
            </div>
          );
        })}

        {SOCIALS.map((soc) => (
          <a key={soc.id} href={soc.url} target="_blank" rel="noopener noreferrer" style={{ left: soc.x, top: soc.y }}
             className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 bg-black/80 backdrop-blur-xl flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer z-10 ${nearSocial?.id === soc.id ? 'scale-125 shadow-[0_0_50px_currentColor]' : 'hover:scale-125 hover:shadow-[0_0_50px_currentColor]'} ${soc.border} ${soc.color}`}>
            {soc.icon}
          </a>
        ))}
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
              <div className={keyCap('w')}>W</div>
              <div className="flex gap-2">
                <div className={keyCap('a')}>A</div><div className={keyCap('s')}>S</div><div className={keyCap('d')}>D</div>
              </div>
              <span className="text-[10px] tracking-widest uppercase mt-1">{ui.navigation}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest uppercase text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">{ui.interact}</span>
              <div className="w-12 h-12 border-2 border-emerald-400 rounded-lg flex items-center justify-center bg-emerald-950/50 backdrop-blur text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]">E</div>
            </div>
          </div>
          <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} aria-label={ui.language}
                  className="absolute top-8 left-8 z-30 w-12 h-12 rounded-xl bg-black/60 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all backdrop-blur pointer-events-auto">
            <Globe size={24} />
          </button>
        </>
      )}

      <AnimatePresence>
        {(nearPoi || nearSocial) && !activePoi && (
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}
                      className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 px-12 py-5 bg-emerald-500 text-black text-[12px] font-black tracking-[0.5em] rounded-full uppercase shadow-[0_0_50px_rgba(16,185,129,0.5)] z-40 border-2 border-emerald-300 pointer-events-none">
            {nearPoi ? `${ui.connect} ${nearPoi.label} [E]` : `${ui.openLink} ${nearSocial.title} [E]`}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePoi && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/98 backdrop-blur-3xl flex items-start md:items-center justify-center p-4 md:p-8 z-50 overflow-y-auto selection:bg-rose-500 selection:text-white pb-24">
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} className="max-w-7xl w-full flex flex-col gap-8 relative text-center my-auto mt-16 md:mt-auto pt-4 md:pt-0">
              <button onClick={() => setActivePoi(null)} className={`fixed top-4 right-4 transition-all p-2 flex items-center gap-2 ${COLORS[activePoi.color].text} ${COLORS[activePoi.color].closeHover} z-50 bg-black/50 rounded-full backdrop-blur`}>
                <span className="hidden md:block text-xs font-black tracking-widest uppercase opacity-50">{ui.close}</span>
                <X size={40} strokeWidth={1.5} />
              </button>
              <div className="flex flex-col items-center">
                <h3 className={`text-xs md:text-sm font-bold tracking-[0.5em] md:tracking-[0.7em] mb-4 md:mb-6 uppercase flex items-center justify-center gap-3 ${COLORS[activePoi.color].text} drop-shadow-[0_0_8px_currentColor]`}>
                  <div className="w-2 h-2 rounded-full bg-current animate-pulse shadow-[0_0_10px_currentColor]" />
                  {activePoi.subtitle}
                </h3>
                <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter mb-8 md:mb-12 leading-[0.9] uppercase text-white drop-shadow-2xl">{activePoi.title}</h2>
                {activePoi.type === 'browser' && <p className="max-w-2xl text-sm md:text-base text-white/60 mb-8 font-light">{c.projects_content}</p>}
                <PoiBody poi={activePoi} c={c} lang={language} />
              </div>
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

// ======================= MÓVIL =======================
function Section({ children, scroll = true }) {
  return (
    <div className={`w-screen h-screen flex-shrink-0 flex flex-col items-center px-5 relative ${scroll ? 'overflow-y-auto pt-20 pb-24' : 'justify-center'}`}>
      <div className="w-full max-w-sm my-auto flex flex-col gap-5">{children}</div>
    </div>
  );
}

function SectionHead({ title, subtitle, color }) {
  return (
    <div className="text-center">
      <h2 className={`text-3xl font-black italic tracking-tighter mb-1 drop-shadow-[0_0_8px_currentColor] ${COLORS[color].text}`}>{title}</h2>
      <p className="text-xs text-white/60">{subtitle}</p>
    </div>
  );
}

function MobileMode() {
  const [current, setCurrent] = useState(0);
  const [language, setLanguage] = useState('es');
  const canvasRef = useRef(null);
  const c = CONTENT[language];
  const ui = UI[language];

  useMatrix(canvasRef, 12);

  const sectionIds = ['hero', 'experience', 'systems', 'games', 'projects', 'stack', 'why', 'networks'];

  const onDragEnd = (_e, info) => {
    if (info.offset.x > 50 && current > 0) setCurrent(current - 1);
    else if (info.offset.x < -50 && current < sectionIds.length - 1) setCurrent(current + 1);
  };

  return (
    <div className="fixed inset-0 bg-[#020202] overflow-hidden text-white font-sans selection:bg-emerald-500 selection:text-black">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.25) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={onDragEnd}
                  animate={{ x: -current * 100 + '%' }} transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  className="absolute inset-0 flex h-screen z-10">
        {/* Hero */}
        <Section scroll>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="w-28 h-28 rounded-full border-4 border-emerald-500/50 bg-emerald-950/30 overflow-hidden relative shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <img src={PHOTO_URL} alt="Nicolás Díaz Ulloa" className="w-full h-full object-cover object-[50%_35%]" />
            </div>
            <div>
              <h1 className="text-4xl font-black italic tracking-tighter mb-2 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">NICOLÁS</h1>
              <p className="text-base text-emerald-300/80 font-light mb-3">{c.hero_subtitle}</p>
              <p className="text-sm text-white/65 leading-relaxed">{c.hero_content}</p>
            </div>
            <Tags tags={c.hero_tags} color="emerald" />
            <div className="flex flex-col items-center gap-1 text-emerald-500/50 text-xs mt-2">
              <GripHorizontal size={20} className="animate-pulse" />
              <span className="font-bold tracking-widest uppercase">{ui.swipe}</span>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHead title={c.experience_title} subtitle={c.experience_subtitle} color="violet" />
          <ExperienceList items={c.experience} color="violet" compact />
        </Section>

        <Section>
          <SectionHead title={c.systems_title} subtitle={c.systems_subtitle} color="orange" />
          <p className="text-sm text-white/70 leading-relaxed text-center">{c.systems_content}</p>
          <div className="flex flex-col gap-3">
            {c.systems_cards.map((s) => (
              <div key={s.name} className="p-4 bg-orange-950/20 rounded-xl border border-orange-500/30">
                <h3 className="text-xs font-black text-orange-400 mb-1 tracking-widest">{s.name}</h3>
                <p className="text-xs text-white/70">{s.list}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHead title="GAME DEV" subtitle={c.projects_content} color="rose" />
          <ProjectBrowser lang={language} groups={['games']} palette="rose" compact />
        </Section>

        <Section>
          <SectionHead title="IA & APPS" subtitle={c.projects_subtitle} color="cyan" />
          <ProjectBrowser lang={language} groups={['ai', 'apps']} palette="cyan" compact />
        </Section>

        <Section>
          <SectionHead title={c.stack_title} subtitle={c.stack_subtitle} color="blue" />
          <div className="flex flex-col gap-3">
            {c.stack.map((s) => (
              <div key={s.name} className="p-4 bg-blue-950/20 rounded-xl border border-blue-500/30">
                <h3 className="text-xs font-black text-blue-400 mb-1 tracking-widest">{s.name}</h3>
                <p className="text-xs text-white/70">{s.list}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHead title={c.why_title} subtitle={c.why_subtitle} color="amber" />
          <p className="text-sm text-white/70 leading-relaxed text-center">{c.why_content}</p>
          <Tags tags={c.why_tags} color="amber" />
        </Section>

        <Section scroll={false}>
          <h2 className="text-3xl font-black italic tracking-tighter text-emerald-500 text-center drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">{ui.connect}</h2>
          <div className="flex flex-col items-center gap-4 w-full">
            {SOCIALS.map((soc) => (
              <a key={soc.id} href={soc.url} target="_blank" rel="noopener noreferrer"
                 className={`w-full py-4 px-6 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all active:scale-95 bg-black/40 ${soc.border} ${soc.color}`}>
                {soc.icon}<span className="font-bold text-lg">{soc.title}</span>
              </a>
            ))}
          </div>
          <div className="flex gap-4 items-center justify-center">
            <span className="text-sm text-white/50 font-bold uppercase tracking-widest">{ui.language}</span>
            <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                    className="w-16 h-10 rounded-full bg-black/60 border-2 border-emerald-500/50 text-emerald-400 font-black text-sm">
              {language.toUpperCase()}
            </button>
          </div>
        </Section>
      </motion.div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {sectionIds.map((id, idx) => (
          <motion.button key={id} aria-label={id} onClick={() => setCurrent(idx)}
                         animate={{ width: current === idx ? 28 : 8, backgroundColor: current === idx ? '#10b981' : 'rgba(16, 185, 129, 0.3)' }}
                         className="h-2 rounded-full" />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const windowSize = useWindowSize();
  const isMobile = !windowSize || windowSize.width < 768;
  return isMobile ? <MobileMode /> : <DesktopMode />;
}
