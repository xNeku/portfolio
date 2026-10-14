# Nicolás Díaz Ulloa - Portfolio

Live site: **https://xneku.github.io/portfolio/**

My personal portfolio. You can explore it in two ways:

- **Desktop:** a small world you walk around with W, A, S, D. Walk up to a zone (games, AI and apps, networks and systems, experience, stack) and press E to open it.
- **Mobile:** a swipeable carousel of sections.

The site is available in Spanish and English (globe button on desktop, ES/EN button on mobile).

## What it contains

- **Profile:** game development, AI and agents, networks and systems.
- **Experience:** network and systems technician at Cotelsa (Alcoa San Ciprián), IT infrastructure at the University of Oviedo, and an internship at Raiola Networks.
- **Games:** all the games on my GitHub, with the concept and technical details of the three main ones.
- **AI and automation:** how I orchestrate coding agents, plus n8n, Make, webhooks and computer vision.
- **Apps and web:** SmarTrack, GamHub, PokeRat and more.
- **Networks and systems:** what I do day to day at the plant: Cisco networking, Active Directory, industrial PCs.

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

For this to work, open the repository's **Settings > Pages** and set **Source** to **GitHub Actions**. With "Deploy from a branch", GitHub serves the raw source `index.html` instead of the build, and the page comes up blank.

### Docker and VPS

```bash
docker-compose up -d
```

The site will be at http://localhost:8085. `DEPLOYMENT_GUIDE.md` explains how to deploy to your own server, and `deploy.sh` automates it.

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
