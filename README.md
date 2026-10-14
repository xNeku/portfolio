# Portfolio de Nicolás Díaz Ulloa

Web: **https://xneku.github.io/portfolio/**

Portfolio personal con dos formas de recorrerlo:

- **Escritorio:** un pequeño mundo que se explora con las teclas W, A, S, D. Cada zona (juegos, IA y apps, redes y sistemas, experiencia, stack) se abre acercándote y pulsando E.
- **Móvil:** un carrusel por secciones que se desliza con el dedo.

La web está en español e inglés (botón del globo en escritorio, botón ES/EN en móvil).

## Qué contiene

- Perfil: desarrollo de videojuegos, IA y agentes, redes y sistemas.
- Experiencia: Cotelsa (técnico de redes), Universidad de Oviedo e internship en Raiola Networks.
- Juegos: todos los de mi GitHub, con concepto y apartado técnico en los tres principales.
- IA y automatización: orquestación de agentes, n8n, Make, webhooks, visión por computador.
- Apps y web: SmarTrack, GamHub, PokeRat y otras.
- Redes y sistemas: lo que hago en planta con Cisco industrial, Linux y automatización.

## Tecnologías

React 19, Vite 7, Tailwind CSS 4, Framer Motion y lucide-react. Servido con Nginx en Docker o con GitHub Pages.

## Ejecutarlo en local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Se abre en http://localhost:5173/portfolio/ (la ruta `/portfolio/` es la base configurada en `vite.config.js`).

Para generar la versión de producción y probarla:

```bash
npm run build
npm run preview
```

## Cómo cambiar el contenido

Todo el texto y los datos están en `src/data.js`, en español e inglés:

- `PHOTO_URL`: foto del perfil. El archivo va en `public/`.
- `CONTENT`: textos del perfil, experiencia, redes y sistemas, stack y apartado "por qué yo".
- `PROJECTS`: lista de proyectos. Cada uno tiene grupo (`games`, `ai`, `apps`), estado, descripción, apartado técnico (`tech`), tecnologías, repositorio y capturas (`media`). Los marcados con `featured: true` salen primero.

La lógica y el diseño están en `src/App.jsx`.

## Despliegue

### GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica la web cada vez que se hace push a `main`.

Para que funcione, en el repositorio hay que ir a **Settings > Pages** y poner **Source: GitHub Actions**. Si está en "Deploy from a branch", GitHub publica el `index.html` del código fuente en lugar del build y la página sale en blanco.

### Docker y VPS

```bash
docker-compose up -d
```

La web queda en http://localhost:8085. Para desplegar en un servidor propio hay más detalle en `DEPLOYMENT_GUIDE.md`, y `deploy.sh` automatiza el proceso.

## Estructura

```
src/
  App.jsx        Mundo de escritorio, carrusel móvil y componentes
  data.js        Textos, proyectos y enlaces (ES/EN)
  hooks/         useWindowSize
public/          Foto, capturas e iconos
Dockerfile       Build y servido con Nginx
nginx.conf       Configuración de Nginx
.github/         Workflow de GitHub Pages
```

## Contacto

- GitHub: https://github.com/xNeku
- LinkedIn: https://www.linkedin.com/in/nicolás-díaz-ulloa-5398b9314/
- Email: nicodzu@gmail.com
