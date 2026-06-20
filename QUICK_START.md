# 🚀 Quick Start - Despliegue en 5 Minutos

## Si ya todo está listo, solo sigue esto:

### 1️⃣ Desplegar en VPS (5 min)

```bash
chmod +x deploy.sh
./deploy.sh
```

Espera a que termine. ✅ Tu app estará en: `http://79.137.45.35:8085`

---

### 2️⃣ Comprar Dominio (10 min)

Elige uno:
- **Namecheap** - `namecheap.com`
- **Google Domains** - `domains.google.com`
- **GoDaddy** - `godaddy.com`

Busca un dominio tipo:
- `tunombre-portfolio.com`
- `tnombre-dev.com`
- `portfoliotnombre.com`

Costo: ~$10-15 USD/año

---

### 3️⃣ Apuntar Dominio a VPS (5 min)

Una vez comprado el dominio:

1. Ve a tu registrador (Namecheap, Google Domains, etc.)
2. Busca la sección "DNS" o "Name Servers"
3. Busca "A Record"
4. Crea/edita un registro:

```
Type: A
Name: @ (o dejar vacío)
Value: 79.137.45.35
TTL: 3600
```

Para www (opcional):
```
Type: CNAME
Name: www
Value: tunombre-portfolio.com
TTL: 3600
```

⏳ Espera 5-30 minutos a que se propague

Verificar:
```bash
nslookup tunombre-portfolio.com
```

---

### 4️⃣ Agregar HTTPS (5 min)

Una vez que el dominio apunte correctamente:

```bash
ssh neku@79.137.45.35

# Instalar certbot (solo primera vez)
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# Generar certificado
sudo certbot certonly --standalone \
  --email nicogamer07yt@gmail.com \
  -d tunombre-portfolio.com \
  -d www.tunombre-portfolio.com
```

Luego actualizar `nginx.conf` con la sección HTTPS (ver DEPLOYMENT_GUIDE.md) y reiniciar.

---

## ✅ ¡Listo! Resultados:

| URL | Estado |
|-----|--------|
| `http://79.137.45.35:8085` | ✅ Funciona (en despliegue) |
| `http://tunombre-portfolio.com` | ✅ Funciona (después de DNS) |
| `https://tunombre-portfolio.com` | ✅ Seguro (después de HTTPS) |

---

## 📋 Checklist Antes de Compartir con Empresas

- [ ] Portfolio carga sin errores
- [ ] Todo es HTTPS (https://tunombre-portfolio.com)
- [ ] Carga en menos de 3 segundos
- [ ] Se ve bien en móviles
- [ ] Todos los links funcionan
- [ ] Revisar ortografía
- [ ] Revisar email de contacto

---

## 🆘 Si algo sale mal:

### "Mi dominio no conecta"
```bash
# Verificar que DNS apunta correctamente
nslookup tunombre-portfolio.com
# Debería mostrar: 79.137.45.35

# Si no aparece la IP, espera más tiempo (puede tardar 48h)
```

### "Puerto 8085 no responde"
```bash
# Verificar contenedor en VPS
ssh neku@79.137.45.35
docker ps
docker-compose logs

# Si no está corriendo:
cd ~/portfolio
docker-compose up -d --build
```

### "HTTPS no funciona"
```bash
# Verificar certificado en VPS
sudo certbot certificates

# Si el certificado es para otro dominio, regenerar
sudo certbot renew --force-renewal
```

---

## 📞 Contactos Útiles

- **Namecheap Support**: https://www.namecheap.com/support/
- **Docker Docs**: https://docs.docker.com/
- **Let's Encrypt**: https://letsencrypt.org/

---

**¿Todo funciona?** ✅ ¡Comparte el enlace con empresas!

**¿Tienes dudas?** 👉 Ver `DEPLOYMENT_GUIDE.md` para detalles completos.
