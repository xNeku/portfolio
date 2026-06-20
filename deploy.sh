#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
VPS_USER="neku"
VPS_IP="79.137.45.35"
VPS_PORT="8085"
PROJECT_DIR="/home/neku/portfolio"
REPO_URL="." # Local path or GitHub URL

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Portfolio Deployment Script${NC}"
echo -e "${BLUE}========================================${NC}"

# Step 1: Build Docker image locally
echo -e "\n${YELLOW}[1/5] Building Docker image...${NC}"
docker build -t portfolio:latest .
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker image built successfully${NC}"

# Step 2: Prepare deployment files
echo -e "\n${YELLOW}[2/5] Preparing deployment files...${NC}"
tar --exclude='node_modules' --exclude='.git' --exclude='dist' \
    --exclude='.env.local' --exclude='*.log' \
    -czf portfolio-deploy.tar.gz \
    Dockerfile docker-compose.yml nginx.conf .dockerignore
echo -e "${GREEN}✓ Deployment package created${NC}"

# Step 3: Transfer files to VPS
echo -e "\n${YELLOW}[3/5] Transferring files to VPS...${NC}"
scp -P 22 portfolio-deploy.tar.gz ${VPS_USER}@${VPS_IP}:${PROJECT_DIR}/
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ File transfer failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Files transferred${NC}"

# Step 4: Deploy on VPS
echo -e "\n${YELLOW}[4/5] Deploying on VPS...${NC}"
ssh -t ${VPS_USER}@${VPS_IP} << 'REMOTE_COMMANDS'
set -e

echo "Extracting deployment files..."
cd ~/portfolio
tar -xzf portfolio-deploy.tar.gz

echo "Stopping existing container..."
docker-compose down 2>/dev/null || true

echo "Building and starting new container..."
docker-compose up -d --build

echo "Waiting for container to be healthy..."
sleep 5

# Check if container is running
if docker ps | grep -q portfolio-app; then
    echo "✓ Container is running"
else
    echo "✗ Container failed to start"
    docker-compose logs
    exit 1
fi

REMOTE_COMMANDS

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Deployed successfully${NC}"

# Step 5: Verify deployment
echo -e "\n${YELLOW}[5/5] Verifying deployment...${NC}"
echo -e "${BLUE}Checking if service is accessible...${NC}"

RESPONSE=$(ssh ${VPS_USER}@${VPS_IP} "curl -s -o /dev/null -w '%{http_code}' http://localhost:${VPS_PORT}")

if [ "$RESPONSE" = "200" ]; then
    echo -e "${GREEN}✓ Service is running and responding${NC}"
else
    echo -e "${YELLOW}⚠ Service returned HTTP $RESPONSE (expected 200)${NC}"
fi

# Cleanup
rm -f portfolio-deploy.tar.gz

echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Complete! 🎉${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "${BLUE}Access your portfolio:${NC}"
echo -e "  ${YELLOW}http://${VPS_IP}:${VPS_PORT}${NC}"
echo -e "\n${BLUE}Next steps:${NC}"
echo -e "  1. Point your domain to ${VPS_IP}"
echo -e "  2. Set up HTTPS with Let's Encrypt (see DEPLOYMENT_GUIDE.md)"
echo -e "  3. Configure DNS records"
