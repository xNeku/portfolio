#!/bin/bash

# Script de mantenimiento del portfolio en VPS
# Uso: ./maintenance.sh [comando]

set -e

VPS_USER="neku"
VPS_IP="79.137.45.35"
PROJECT_DIR="/home/neku/portfolio"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_menu() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}Portfolio - Menu de Mantenimiento${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo -e "\nOpciones:"
    echo "1. Ver estado del contenedor"
    echo "2. Ver logs (últimas 50 líneas)"
    echo "3. Ver logs en tiempo real"
    echo "4. Reiniciar aplicación"
    echo "5. Ver certificado SSL"
    echo "6. Renovar certificado SSL manualmente"
    echo "7. Ver uso de disco"
    echo "8. Limpiar datos de Docker"
    echo "9. Actualizar aplicación (git pull + rebuild)"
    echo "10. Verificar conectividad DNS"
    echo "11. Ejecutar múltiples comandos"
    echo "0. Salir"
    echo ""
}

execute_on_vps() {
    ssh ${VPS_USER}@${VPS_IP} "$1"
}

# Option 1: Ver estado
status() {
    echo -e "\n${YELLOW}Estado del contenedor:${NC}"
    execute_on_vps "cd ${PROJECT_DIR} && docker-compose ps"

    echo -e "\n${YELLOW}¿Está accesible?${NC}"
    RESPONSE=$(ssh ${VPS_USER}@${VPS_IP} "curl -s -o /dev/null -w '%{http_code}' http://localhost:80")
    if [ "$RESPONSE" = "200" ] || [ "$RESPONSE" = "301" ]; then
        echo -e "${GREEN}✓ Respondiendo con HTTP ${RESPONSE}${NC}"
    else
        echo -e "${RED}✗ Error: HTTP ${RESPONSE}${NC}"
    fi
}

# Option 2: Ver logs (últimas 50 líneas)
logs_tail() {
    echo -e "\n${YELLOW}Últimas 50 líneas de logs:${NC}"
    execute_on_vps "cd ${PROJECT_DIR} && docker-compose logs --tail=50 portfolio-app"
}

# Option 3: Logs en tiempo real
logs_follow() {
    echo -e "\n${YELLOW}Logs en tiempo real (Ctrl+C para salir):${NC}"
    ssh -t ${VPS_USER}@${VPS_IP} "cd ${PROJECT_DIR} && docker-compose logs -f portfolio-app"
}

# Option 4: Reiniciar
restart() {
    echo -e "\n${YELLOW}Reiniciando aplicación...${NC}"
    execute_on_vps "cd ${PROJECT_DIR} && docker-compose restart"
    echo -e "${GREEN}✓ Aplicación reiniciada${NC}"
    sleep 2
    status
}

# Option 5: Ver certificado SSL
cert_info() {
    echo -e "\n${YELLOW}Información de certificados SSL:${NC}"
    execute_on_vps "sudo certbot certificates" || echo "Certbot no está instalado o no hay certificados"
}

# Option 6: Renovar certificado
cert_renew() {
    echo -e "\n${YELLOW}Renovando certificado SSL...${NC}"
    execute_on_vps "sudo certbot renew --force-renewal" || echo -e "${RED}Error al renovar certificado${NC}"
    execute_on_vps "cd ${PROJECT_DIR} && docker-compose restart"
    echo -e "${GREEN}✓ Certificado renovado y aplicación reiniciada${NC}"
}

# Option 7: Uso de disco
disk_usage() {
    echo -e "\n${YELLOW}Uso de disco en VPS:${NC}"
    execute_on_vps "df -h | grep -E '^/dev/|Filesystem'"

    echo -e "\n${YELLOW}Uso en directorio del proyecto:${NC}"
    execute_on_vps "du -sh ${PROJECT_DIR}/*"
}

# Option 8: Limpiar Docker
cleanup() {
    echo -e "\n${YELLOW}⚠️  Limpiando datos de Docker...${NC}"
    echo "Esto eliminará:"
    echo "  - Contenedores detenidos"
    echo "  - Redes no usadas"
    echo "  - Volúmenes no usados"
    echo "  - Imágenes dangling"
    echo ""
    read -p "¿Continuar? (s/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        execute_on_vps "docker system prune -af"
        echo -e "${GREEN}✓ Limpieza completada${NC}"
    else
        echo "Cancelado"
    fi
}

# Option 9: Actualizar aplicación
update_app() {
    echo -e "\n${YELLOW}Actualizando aplicación...${NC}"

    read -p "¿Tu proyecto usa Git? (s/n) " -n 1 -r
    echo

    if [[ $REPLY =~ ^[Ss]$ ]]; then
        echo -e "${YELLOW}Haciendo git pull...${NC}"
        execute_on_vps "cd ${PROJECT_DIR} && git pull origin main"
    else
        echo -e "${YELLOW}Saltando git pull (no estás usando Git)${NC}"
    fi

    echo -e "${YELLOW}Rebuildeando aplicación...${NC}"
    execute_on_vps "cd ${PROJECT_DIR} && docker-compose up -d --build"

    echo -e "${GREEN}✓ Aplicación actualizada${NC}"
    sleep 3
    status
}

# Option 10: Verificar DNS
check_dns() {
    read -p "Ingresa tu dominio (ej: tunombre-portfolio.com): " DOMAIN

    echo -e "\n${YELLOW}Verificando DNS para ${DOMAIN}...${NC}"

    # Desde máquina local
    echo -e "\n${BLUE}Desde tu máquina:${NC}"
    nslookup ${DOMAIN} 2>/dev/null || dig ${DOMAIN} || echo "No se pudo resolver"

    # Desde el VPS
    echo -e "\n${BLUE}Desde el VPS:${NC}"
    execute_on_vps "nslookup ${DOMAIN}" || echo "No se pudo resolver desde VPS"

    echo -e "\n${BLUE}IP esperada: 79.137.45.35${NC}"
}

# Option 11: Comandos múltiples
bulk_commands() {
    echo -e "\n${YELLOW}Ejecutar comandos personalizados${NC}"
    read -p "Ingresa el comando (ej: 'docker ps'): " CMD
    execute_on_vps "$CMD"
}

# Main loop
if [ $# -eq 0 ]; then
    while true; do
        print_menu
        read -p "Selecciona opción (0-11): " choice

        case $choice in
            1) status ;;
            2) logs_tail ;;
            3) logs_follow ;;
            4) restart ;;
            5) cert_info ;;
            6) cert_renew ;;
            7) disk_usage ;;
            8) cleanup ;;
            9) update_app ;;
            10) check_dns ;;
            11) bulk_commands ;;
            0)
                echo -e "${GREEN}¡Hasta luego!${NC}"
                exit 0
                ;;
            *)
                echo -e "${RED}Opción inválida${NC}"
                ;;
        esac

        echo ""
        read -p "Presiona Enter para continuar..."
    done
else
    # Si se pasa comando como argumento
    case $1 in
        status) status ;;
        logs) logs_tail ;;
        logs-live) logs_follow ;;
        restart) restart ;;
        cert) cert_info ;;
        renew-cert) cert_renew ;;
        disk) disk_usage ;;
        cleanup) cleanup ;;
        update) update_app ;;
        dns) check_dns ;;
        *)
            echo "Uso: $0 [status|logs|logs-live|restart|cert|renew-cert|disk|cleanup|update|dns]"
            exit 1
            ;;
    esac
fi
