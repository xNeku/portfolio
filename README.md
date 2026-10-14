# Nicolás Díaz Ulloa - Portfolio

Live site: **https://xneku.github.io/portfolio/**

Personal portfolio with two ways to explore it:

- **Desktop:** a small world you walk around with W, A, S, D. Each zone (games, AI and apps, networks and systems, experience, stack) opens when you get close and press E.
- **Mobile:** a swipeable carousel of sections.

The site is available in Spanish and English (globe button on desktop, ES/EN button on mobile).

## What it contains

- Profile: game development, AI and agents, networks and systems.
- Experience: Cotelsa (network technician), University of Oviedo and an internship at Raiola Networks.
- Games: every game on my GitHub, with concept and technical details for the three main ones.
- AI and automation: agent orchestration, n8n, Make, webhooks, computer vision.
- Apps and web: SmarTrack, GamHub, PokeRat and others.
- Networks and systems: industrial Cisco, Linux and automation work done on the plant floor.

## Tech stack

React 19, Vite 7, Tailwind CSS 4, Framer Motion and lucide-react. Served with Nginx in Docker or with GitHub Pages.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

It opens at http://localhost:5173/portfolio/ (`/portfolio/` is the base path set in `vite.config.js`).

To build the production version and try it:

```bash
npm run build
npm run preview
```

## Changing the content

All text and data live in `src/data.js`, in Spanish and English:

- `PHOTO_URL`: profile photo. The file goes in `public/`.
- `CONTENT`: profile, experience, networks and systems, stack and "why me" texts.
- `PROJECTS`: project list. Each one has a group (`games`, `ai`, `apps`), status, description, technical section (`tech`), technologies, repository and screenshots (`media`). Projects with `featured: true` are shown first.

Logic and layout are in `src/App.jsx`.

## Deployment

### GitHub Pages

The workflow `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

For it to work, go to the repository **Settings > Pages** and set **Source: GitHub Actions**. If it is set to "Deploy from a branch", GitHub publishes the source `index.html` instead of the build and the page is blank.

### Docker and VPS

```bash
docker-compose up -d
```

The site is then available at http://localhost:8085. More detail on deploying to your own server is in `DEPLOYMENT_GUIDE.md`, and `deploy.sh` automates the process.

## Structure

```
src/
  App.jsx        Desktop world, mobile carousel and components
  data.js        Texts, projects and links (ES/EN)
  hooks/         useWindowSize
public/          Photo, screenshots and icons
Dockerfile       Build and serve with Nginx
nginx.conf       Nginx configuration
.github/         GitHub Pages workflow
```

## Contact

- GitHub: https://github.com/xNeku
- LinkedIn: https://www.linkedin.com/in/nicolás-díaz-ulloa-5398b9314/
- Email: nicodzu@gmail.com
