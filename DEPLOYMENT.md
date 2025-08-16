# LeapGen.AI Deployment Guide

## 🚀 Production Deployment Guide

This comprehensive guide covers deploying LeapGen.AI to various hosting platforms with enterprise-grade configuration.

## 📋 Pre-Deployment Checklist

- [ ] All tests pass locally
- [ ] Production build completes successfully 
- [ ] Environment variables configured
- [ ] SSL certificates prepared
- [ ] Domain configuration ready
- [ ] Analytics tracking setup

## 🏗️ Build Process

### Local Production Build
```bash
# Install dependencies
npm install

# Create production build
npm run build

# Test production build locally
npm run preview
```

### Build Output
- **Output Directory**: `dist/`
- **Entry Point**: `index.html`
- **Assets**: Optimized and bundled in `dist/assets/`

## 🌐 Hosting Platform Deployments

### 1. Netlify (Recommended)

**Quick Deploy:**
```bash
# Build settings
Build command: npm run build
Publish directory: dist
```

**netlify.toml Configuration:**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production.environment]
  NODE_ENV = "production"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 2. Vercel

**Deploy Command:**
```bash
npx vercel --prod
```

**vercel.json Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. AWS S3 + CloudFront

**S3 Bucket Configuration:**
```bash
# Upload files to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Set bucket policy for public read
aws s3api put-bucket-policy --bucket your-bucket-name --policy file://bucket-policy.json
```

**CloudFront Distribution Settings:**
- **Origin**: S3 bucket
- **Default Root Object**: `index.html`
- **Error Pages**: 403, 404 → `/index.html` (200)
- **Cache Behaviors**:
  - `/assets/*`: Cache for 1 year
  - `/*.js`, `/*.css`: Cache for 1 year
  - `/`: Cache for 1 hour

### 4. Traditional Web Servers

#### Apache Configuration
```apache
<VirtualHost *:80>
    ServerName leapgen.ai
    DocumentRoot /var/www/leapgen
    
    # Handle SPA routing
    <Directory /var/www/leapgen>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    # Cache static assets
    <LocationMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
    </LocationMatch>
</VirtualHost>
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name leapgen.ai;
    root /var/www/leapgen;
    index index.html;
    
    # Handle SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

## 🔧 Environment Configuration

### Required Environment Variables
No environment variables are required for basic deployment. The application uses:
- Built-in analytics configuration
- Static site generation
- Client-side routing

### Optional Configuration
For enhanced analytics and tracking:
```bash
# Google Analytics (if needed)
VITE_GA_TRACKING_ID=your-ga-id

# Custom API endpoints (if applicable)
VITE_API_BASE_URL=https://api.leapgen.ai
```

## 🔒 Security Configuration

### SSL/TLS Setup
```bash
# Using Let's Encrypt with Certbot
sudo certbot --nginx -d leapgen.ai -d www.leapgen.ai
```

### Security Headers
```nginx
# Add to Nginx config
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

## 📊 Performance Optimization

### Recommended Settings
- **Gzip Compression**: Enabled
- **Brotli Compression**: Enabled (if supported)
- **HTTP/2**: Enabled
- **Asset Caching**: 1 year for static assets
- **HTML Caching**: 1 hour

### CDN Configuration
```javascript
// CloudFront cache behaviors
{
  "PathPattern": "/assets/*",
  "TargetOriginId": "S3-leapgen",
  "ViewerProtocolPolicy": "redirect-to-https",
  "CachePolicyId": "cache-optimized",
  "TTL": {
    "DefaultTTL": 31536000,
    "MaxTTL": 31536000
  }
}
```

## 🚦 Health Checks & Monitoring

### Health Check Endpoint
The application serves a static `index.html` which can be used for health checks:
```bash
curl -f https://leapgen.ai/ || exit 1
```

### Monitoring Setup
```bash
# Using UptimeRobot or similar
Monitor URL: https://leapgen.ai
Check interval: 5 minutes
Alert contacts: admin@leapgen.ai
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      # Deploy to Netlify
      - uses: netlify/actions/cli@master
        with:
          args: deploy --dir=dist --prod
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

## 🆘 Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - Ensure SPA routing is configured
   - Add rewrite rules to serve `index.html`

2. **Assets Not Loading**
   - Check build output in `dist/` folder
   - Verify asset paths are relative

3. **Performance Issues**
   - Enable compression (gzip/brotli)
   - Configure proper caching headers
   - Use CDN for static assets

### Debug Commands
```bash
# Check build output
npm run build && ls -la dist/

# Test production build locally
npm run preview

# Analyze bundle size
npx vite-bundle-analyzer dist/
```

## 📞 Support

For deployment support:
- **Technical Issues**: Create issue in repository
- **Enterprise Support**: Contact LeapGen.AI support team
- **Documentation**: Refer to this guide and platform-specific docs

---

**Version**: 1.0.0  
**Last Updated**: $(date +%Y-%m-%d)  
**Maintained By**: LeapGen.AI Development Team