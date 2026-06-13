#!/bin/bash
# Deploy script for Tech Tutorials App
# Usage: ./deploy.sh [build_number]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR"
BUILD_NUM="${1:-$(date +%Y%m%d%H%M)}"
NGINX_ROOT="/var/www/html/tech-tutorials"
CLOUDFLARE_TUNNEL_NAME="tech-tutorials"

echo "🚀 Tech Tutorials Deployment"
echo "=================================="
echo "Build number: $BUILD_NUM"
echo ""

# Step 1: Build data
echo "📦 Step 1: Building combined data file..."
node "$PROJECT_DIR/scripts/build-data.js"

# Step 2: Update build number in App.jsx
echo "🔢 Step 2: Updating build number..."
CURRENT_BUILD=$(grep -oP "const BUILD = '\K[^']+" "$PROJECT_DIR/src/App.jsx" 2>/dev/null || echo "")
if [ -z "$CURRENT_BUILD" ]; then
    echo "   BUILD constant not found, skipping build update"
else
    sed -i "s/const BUILD = '[^']*'/const BUILD = '$BUILD_NUM'/" "$PROJECT_DIR/src/App.jsx"
    echo "   Build: $BUILD_NUM"
fi

# Step 3: Build the app
echo "🏗️  Step 3: Building React app..."
cd "$PROJECT_DIR"
npm run build

# Step 4: Install nginx if not present
echo "🌐 Step 4: Setting up nginx..."
NGINX_BIN="/usr/sbin/nginx"
if ! command -v $NGINX_BIN &> /dev/null; then
    echo "   Installing nginx..."
    apt-get update -qq && apt-get install -y -qq nginx
    NGINX_BIN="/usr/sbin/nginx"
fi

# Step 5: Copy build to nginx root
echo "📁 Step 5: Copying build to nginx..."
mkdir -p "$NGINX_ROOT"
rm -rf "$NGINX_ROOT"/*
cp -r "$PROJECT_DIR/dist"/* "$NGINX_ROOT/"

# Step 6: Configure nginx
echo "⚙️  Step 6: Configuring nginx..."
cat > /etc/nginx/sites-available/tech-tutorials << 'EOF'
server {
    listen 8080;
    listen [::]:8080;
    server_name localhost;
    root /var/www/html/tech-tutorials;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 1000;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable site
if [ ! -L /etc/nginx/sites-enabled/tech-tutorials ]; then
    ln -sf /etc/nginx/sites-available/tech-tutorials /etc/nginx/sites-enabled/
fi

# Remove default site if it exists
if [ -L /etc/nginx/sites-enabled/default ]; then
    rm -f /etc/nginx/sites-enabled/default
fi

# Test nginx config
$NGINX_BIN -t

# Restart nginx
systemctl restart nginx 2>/dev/null || service nginx restart 2>/dev/null || $NGINX_BIN -s reload 2>/dev/null || $NGINX_BIN

echo "✅ Nginx serving at http://localhost:8080"

# Step 7: Install cloudflared if not present
echo "☁️  Step 7: Setting up Cloudflare tunnel..."
CLOUDFLARED_BIN="/usr/local/bin/cloudflared"

if [ ! -f "$CLOUDFLARED_BIN" ]; then
    echo "   Installing cloudflared..."
    ARCH=$(uname -m)
    if [ "$ARCH" = "x86_64" ]; then
        CF_ARCH="amd64"
    elif [ "$ARCH" = "aarch64" ]; then
        CF_ARCH="arm64"
    else
        CF_ARCH="amd64"
    fi
    TMP_CF="/tmp/cloudflared-$$"
    rm -f "$TMP_CF" 2>/dev/null || true
    wget -q --show-progress "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-${CF_ARCH}" -O "$TMP_CF"
    chmod +x "$TMP_CF"
    mv "$TMP_CF" "$CLOUDFLARED_BIN"
    echo "   ✅ cloudflared installed"
else
    echo "   ✅ cloudflared already installed"
fi

# Step 8: Start cloudflare tunnel
echo "🌐 Step 8: Starting Cloudflare tunnel..."

# Kill any existing tunnel
pkill -f "cloudflared tunnel" 2>/dev/null || true

# Start new tunnel in background
nohup cloudflared tunnel --url http://localhost:8080 > /tmp/cloudflared.log 2>&1 &
sleep 8

# Extract the public URL
CF_URL=$(grep -oP 'https://[a-zA-Z0-9-]+\.trycloudflare\.com' /tmp/cloudflared.log | head -1)

if [ -n "$CF_URL" ]; then
    echo ""
    echo "========================================"
    echo "🎉 DEPLOYMENT SUCCESSFUL!"
    echo "========================================"
    echo ""
    echo "📱 Public URL: $CF_URL"
    echo "🏠 Local URL:  http://localhost:8080"
    echo "🔢 Build:      $BUILD_NUM"
    echo ""
    echo "Cloudflare tunnel logs: /tmp/cloudflared.log"
    echo "========================================"
    
    # Save URL for reference
    echo "$CF_URL" > /tmp/tech-tutorials-url.txt
    echo "$BUILD_NUM" > /tmp/tech-tutorials-build.txt
else
    echo "⚠️  Cloudflare tunnel started but URL not yet available."
    echo "   Check logs: tail -f /tmp/cloudflared.log"
    echo "   Local URL: http://localhost:8080"
fi

echo ""
echo "Done! ✅"
