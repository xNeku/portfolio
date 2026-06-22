# 🎨 Portfolio - React + Vite

Portfolio personal desarrollado con React 19, Vite y Tailwind CSS.

## 🚀 Quick Start

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Accesible en http://localhost:5173
```

### Compilación para Producción

```bash
# Compilar proyecto
npm run build

# Previsualizar build (opcional)
npm run preview

# Los archivos compilados están en /dist
```

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── main.jsx          # Punto de entrada React
│   ├── App.jsx           # Componente principal
│   ├── index.css         # Estilos globales
│   └── assets/           # Imágenes y recursos
├── public/               # Archivos estáticos
├── dist/                 # Build compilado (generado)
├── index.html            # HTML principal
├── package.json          # Dependencias
├── vite.config.js        # Configuración Vite
├── tailwind.config.js    # Configuración Tailwind
├── postcss.config.js     # Configuración PostCSS
├── Dockerfile            # Configuración Docker
├── docker-compose.yml    # Orquestación Docker
├── nginx.conf            # Configuración Nginx
└── DEPLOYMENT_GUIDE.md   # Guía de despliegue
```

## 🛠 Stack Tecnológico

- **React 19** - Framework UI
- **Vite 7** - Build tool y dev server
- **Tailwind CSS 4** - Utilidades de estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Nginx** - Web server en producción
- **Docker** - Containerización

## 📦 Dependencias Principales

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "framer-motion": "^12.34.4",
  "lucide-react": "^0.576.0",
  "@tailwindcss/postcss": "^4.2.1"
}
```

## 🐳 Despliegue con Docker

### Build local
```bash
docker build -t portfolio:latest .
```

### Ejecutar localmente
```bash
docker-compose up -d
# Accesible en http://localhost:8085
```

### Logs
```bash
docker-compose logs -f
```

### Detener
```bash
docker-compose down
```

## 🌐 Despliegue en VPS

Ver [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) para instrucciones completas.

### Despliegue rápido:
```bash
chmod +x deploy.sh
./deploy.sh
```

El script automáticamente:
- Compila la imagen Docker
- Transfiere archivos al VPS (79.137.45.35)
- Inicia los contenedores
- Verifica que esté funcionando

## ✅ Pre-despliegue Checklist

Ver [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) para verificar todos los puntos antes de compartir con empresas.

## 🔒 Seguridad

- ✓ Headers de seguridad configurados en nginx
- ✓ Gzip compression habilitado
- ✓ Cache estratégico para assets
- ✓ HTTPS con Let's Encrypt (en producción)
- ✓ SPA routing configurado

## 📊 Optimizaciones de Producción

- ✓ Tree-shaking habilitado
- ✓ Code splitting por vendor
- ✓ Minificación con Terser
- ✓ Source maps deshabilitados
- ✓ Console.log removido en build
- ✓ Imágenes optimizadas


---

**Última actualización:** Junio 2026
**Versión:** 1.0.0
