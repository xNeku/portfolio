# ✅ Checklist de Despliegue

## Antes de Desplegar

- [ ] Código limpio y sin errores de consola
- [ ] Optimizar imágenes (reducir tamaño)
- [ ] Verificar que esté responsive (móvil, tablet, desktop)
- [ ] Probar todos los links internos
- [ ] Revisar ortografía
- [ ] Compilar localmente: `npm run build`
- [ ] Probar build localmente: `npm run preview`

## Despliegue en VPS

### Paso 1: Preparación del VPS
- [ ] VPS accesible vía SSH: `ssh neku@79.137.45.35`
- [ ] Docker instalado en VPS
- [ ] Docker Compose instalado en VPS
- [ ] Permisos correctos en directorio del proyecto

### Paso 2: Transferencia de Archivos
- [ ] Todos los archivos de configuración subidos:
  - [ ] Dockerfile
  - [ ] docker-compose.yml
  - [ ] nginx.conf
  - [ ] .dockerignore
  - [ ] package.json
  - [ ] package-lock.json
  - [ ] index.html
  - [ ] public/
  - [ ] src/

### Paso 3: Build y Deploy
- [ ] Imagen Docker compilada
- [ ] Contenedor iniciado: `docker-compose up -d`
- [ ] Contenedor corriendo: `docker ps | grep portfolio-app`
- [ ] Accesible en http://VPS_IP:8085

## Configuración de Dominio

### Paso 1: Comprar Dominio
- [ ] Dominio elegido y comprado
- [ ] Credenciales guardadas en lugar seguro
- [ ] Acceso al panel de control del registrador

### Paso 2: Configurar DNS
- [ ] Record A configurado:
  - [ ] Nombre: @
  - [ ] Valor: 79.137.45.35
  - [ ] TTL: 3600
- [ ] (Opcional) CNAME para www configurado
- [ ] DNS propagado (verificar: `nslookup tunombre-portfolio.com`)

### Paso 3: HTTPS con Let's Encrypt
- [ ] Certbot instalado en VPS
- [ ] Certificado SSL generado
- [ ] Certificado válido: `sudo certbot certificates`
- [ ] nginx.conf actualizado para HTTPS
- [ ] Docker reiniciado: `docker-compose restart`
- [ ] HTTPS funcionando: acceder a https://tunombre-portfolio.com

### Paso 4: Renovación Automática
- [ ] Crontab configurada para renovar certificados
- [ ] Comando de renovación funcionando

## Verificación Final

### Accesibilidad
- [ ] Portfolio accesible en http://VPS_IP:8085
- [ ] Portfolio accesible en http://tunombre-portfolio.com
- [ ] Portfolio accesible en https://tunombre-portfolio.com
- [ ] www.tunombre-portfolio.com redirige correctamente

### Funcionalidad
- [ ] Todas las páginas cargan correctamente
- [ ] Links internos funcionan
- [ ] Links externos funcionan
- [ ] Formularios funcionan (si existen)
- [ ] Imágenes cargan correctamente
- [ ] Diseño responsive funciona

### Performance
- [ ] Página carga en menos de 3 segundos
- [ ] Sin errores en consola del navegador
- [ ] Sin advertencias de seguridad
- [ ] Imágenes optimizadas

### Seguridad
- [ ] Certificado SSL válido
- [ ] Headers de seguridad presentes:
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
  - [ ] X-XSS-Protection
- [ ] No hay contenido sin HTTPS (mixed content)

## Compartir con Empresas

- [ ] URL anotada para compartir
- [ ] Verificado en diferentes navegadores:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Verificado en dispositivos móviles:
  - [ ] iPhone
  - [ ] Android
- [ ] Mensaje de bienvenida/descripción del portfolio preparado

## Monitoreo Continuo

- [ ] Logs monitoreados regularmente: `docker-compose logs -f`
- [ ] Certificado SSL monitorear renovación
- [ ] Espacio en disco del VPS (al menos 10% libre)
- [ ] Actualizaciones de seguridad en VPS

## Notas

```
Fecha de despliegue: ___________
Dominio: ___________
IP del VPS: 79.137.45.35
Usuario SSH: neku
Puerto: 8085

Observaciones:
_________________________________
_________________________________
```

---

**¡Listo para compartir con empresas!** 🚀
