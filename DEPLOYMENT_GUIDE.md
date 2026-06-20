# Guía de Despliegue - Portfolio React

## 📋 Requisitos Previos

- **VPS**: Ubuntu 20.04+ con acceso SSH
- **Software en tu máquina**:
  - Docker instalado
  - SSH configurado
  - Acceso SSH a: `neku@79.137.45.35`

## 🚀 Despliegue Rápido (Recomendado)

### 1. Usando el Script de Despliegue

```bash
chmod +x deploy.sh
./deploy.sh
```

El script automáticamente:
- ✓ Compila la imagen Docker
- ✓ Transfiere archivos al VPS
- ✓ Inicia los contenedores
- ✓ Verifica que esté funcionando

## 🔧 Despliegue Manual

### 1. Preparar archivos en el VPS

```bash
ssh neku@79.137.45.35
```

```bash
# Crear directorio del proyecto
mkdir -p ~/portfolio
cd ~/portfolio

# Clonar o subir archivos del proyecto
# Opción A: Si tienes repositorio Git
git clone <tu-repo> .

# Opción B: O copiar archivos manualmente
# Asegúrate de tener:
# - Dockerfile
# - docker-compose.yml
# - nginx.conf
# - .dockerignore
# - package.json
# - package-lock.json
# - src/
# - public/
# - index.html
```

### 2. Construir e iniciar con Docker Compose

```bash
cd ~/portfolio
docker-compose up -d --build
```

### 3. Verificar que está funcionando

```bash
# Chequear estado del contenedor
docker ps | grep portfolio-app

# Ver logs
docker-compose logs -f

# Probar localmente
curl http://localhost:8085
```

## 🌐 Configurar Dominio

### 1. Elegir Proveedor de Dominio

Opciones populares:
- **Namecheap** (buena relación precio/servicio)
- **Google Domains** (integración con Google)
- **GoDaddy** (interfaz intuitiva)
- **Domain.com** (precios competitivos)

### 2. Comprar el Dominio

1. Ve a tu proveedor favorito
2. Busca tu dominio (ej: `tunombre-portfolio.com`)
3. Completa la compra
4. Anota las credenciales (username/password)

### 3. Configurar DNS

Una vez comprado, necesitas apuntar el dominio a tu VPS:

#### Opción A: A Record (Recomendado)

En el panel de DNS de tu registrador:

```
Record Type: A
Name: @ (o dejar vacío)
Value: 79.137.45.35
TTL: 3600 (o default)
```

Para subdominios (ej: www):
```
Record Type: CNAME
Name: www
Value: tunombre-portfolio.com
TTL: 3600
```

#### Opción B: Nameservers (Si usas servicio de DNS externo)

Si prefieres usar Cloudflare o similar:
1. Crea cuenta en Cloudflare (es gratis)
2. Agrega tu sitio
3. Copia los nameservers de Cloudflare
4. En tu registrador, cambia los nameservers
5. Configura los registros A en Cloudflare

### 4. Esperar Propagación

Los cambios DNS pueden tardar 24-48 horas en propagarse completamente.

Verificar estado:
```bash
# Desde tu máquina local
nslookup tunombre-portfolio.com
dig tunombre-portfolio.com

# O usa online: https://www.whatsmydns.net
```

## 🔒 HTTPS con Let's Encrypt (Importante!)

Una vez que el dominio apunte a tu IP:

### 1. Instalar Certbot en el VPS

```bash
ssh neku@79.137.45.35

# Actualizar paquetes
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# O si usas Docker:
docker run --rm -it \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/lib/letsencrypt:/var/lib/letsencrypt \
  -p 80:80 \
  certbot/certbot certify -d tunombre-portfolio.com \
  --standalone
```

### 2. Actualizar docker-compose.yml para HTTPS

```yaml
version: '3.8'

services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: portfolio-app
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
      - /etc/letsencrypt:/etc/letsencrypt:ro
    networks:
      - portfolio-network

networks:
  portfolio-network:
    driver: bridge
```

### 3. Actualizar nginx.conf para HTTPS

```nginx
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name _;

    # Certificados SSL
    ssl_certificate /etc/letsencrypt/live/tunombre-portfolio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tunombre-portfolio.com/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    charset utf-8;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript
               application/x-javascript application/xml+rss
               application/javascript application/json;
    gzip_min_length 1000;

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### 4. Renovación Automática de Certificados

```bash
# En el VPS, editar crontab
crontab -e

# Agregar línea:
0 0 1 * * /usr/bin/certbot renew --quiet --post-hook "systemctl reload nginx"
```

## 📊 Monitoreo y Mantenimiento

### Ver Logs de la Aplicación

```bash
ssh neku@79.137.45.35
cd ~/portfolio
docker-compose logs -f portfolio-app
```

### Reiniciar la Aplicación

```bash
cd ~/portfolio
docker-compose restart
```

### Actualizar el Portfolio

```bash
# Desde tu máquina local
git push origin main  # Si usas Git

# En el VPS:
ssh neku@79.137.45.35
cd ~/portfolio
git pull origin main
docker-compose up -d --build
```

### Limpiar Recursos Docker

```bash
# Dejar espacio en disco
docker system prune -a
docker volume prune
```

## 🐛 Troubleshooting

### "Port already in use"
```bash
# Ver qué proceso usa el puerto
sudo lsof -i :80
sudo lsof -i :443

# Matar el proceso si es necesario
sudo kill -9 <PID>
```

### Dominio no conecta
1. Verificar que DNS apunte correctamente: `nslookup tunombre-portfolio.com`
2. Verificar que el contenedor esté corriendo: `docker ps`
3. Chequear firewall del VPS:
   ```bash
   sudo ufw status
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   ```

### HTTPS no funciona
1. Verificar certificado: `sudo certbot certificates`
2. Chequear logs de nginx: `docker-compose logs portfolio-app`
3. Renovar certificado manualmente: `sudo certbot renew --force-renewal`

## 📱 Checklist Final

- [ ] Dominio comprado y apuntando a VPS
- [ ] DNS propagado (verificar con `nslookup`)
- [ ] Aplicación corriendo en Docker
- [ ] HTTP redirige a HTTPS
- [ ] Certificado SSL válido
- [ ] Portfolio accesible en tu dominio
- [ ] Formularios de contacto funcionan (si existen)
- [ ] Performance aceptable
- [ ] Responsive en móviles

## 🚨 Importante para Empresas

Antes de compartir con empresas:
1. ✓ Verificar que todo esté en HTTPS
2. ✓ Probar en diferentes navegadores
3. ✓ Probar en móviles
4. ✓ Verificar links de contacto
5. ✓ Revisar ortografía y diseño
6. ✓ Optimizar imágenes (velocidad de carga)
7. ✓ Agregar analytics (Google Analytics opcional)

## 💡 Tips Adicionales

### Agregar Analytics (Opcional)
```html
<!-- En index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Performance
- Imágenes optimizadas (usar WebP)
- Código minificado (Vite ya lo hace)
- CSS crítico inlineado
- Lazy loading de imágenes

### SEO
- Meta tags apropiados en index.html
- Favicon configurado
- Open Graph tags para redes sociales
- Sitemap.xml (opcional)

---

**¿Necesitas ayuda?** Revisa los logs con `docker-compose logs -f`
