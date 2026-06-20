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

## 🔧 Comandos Útiles

```bash
# Linting
npm run lint

# Formatear código (si tienes prettier configurado)
npm run format

# Limpiar instalación de node_modules
rm -rf node_modules package-lock.json
npm install

# Limpiar build anterior
rm -rf dist

# Build + Preview local
npm run build && npm run preview
```

## 🚨 Troubleshooting

### "Port already in use"
```bash
# Ver qué proceso usa el puerto
lsof -i :5173

# O cambiar el puerto en vite.config.js
```

### "Module not found"
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install
```

### Build muy lento
```bash
# Verificar que source maps están deshabilitados en vite.config.js
# El proyecto ya viene optimizado en vite.config.js
```

## 📝 Notas para Empresas

Cuando compartas este portfolio:
1. Asegúrate de que esté en HTTPS
2. Verifica que cargue rápido (< 3s)
3. Prueba en móviles
4. Revisa la ortografía
5. Verifica todos los links
6. Prueba en diferentes navegadores

## 📧 Contacto

Email: nicogamer07yt@gmail.com

---

**Última actualización:** Junio 2026
**Versión:** 1.0.0
