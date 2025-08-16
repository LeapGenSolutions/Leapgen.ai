# 🚀 LeapGen.AI Deployment Packages

## 📦 Package Contents

This directory contains everything needed to deploy LeapGen.AI to production:

### Core Deployment Files
- **`DEPLOYMENT.md`** - Comprehensive deployment guide
- **`TECHNICAL_SPECS.md`** - Technical architecture documentation
- **`PRODUCTION_CHECKLIST.md`** - Pre-deployment verification checklist

### Platform Configurations
- **`netlify.toml`** - Netlify deployment configuration
- **`vercel.json`** - Vercel deployment configuration
- **`lighthouserc.js`** - Performance testing configuration

### Docker Support
- **`docker/Dockerfile`** - Multi-stage Docker build
- **`docker/nginx.conf`** - Production nginx configuration
- **`docker/docker-compose.yml`** - Container orchestration

### CI/CD Pipeline
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow
- **`scripts/deploy.sh`** - Automated deployment script
- **`scripts/create-deployment-package.sh`** - Package creation script

### SEO & Performance
- **`public/sitemap.xml`** - Search engine sitemap
- **`public/robots.txt`** - Search engine directives

## 🚀 Quick Start Deployment

### Option 1: Netlify (Recommended)
```bash
# Using the deployment script
chmod +x scripts/deploy.sh
./scripts/deploy.sh netlify production

# Or manually
npm run build
netlify deploy --dir=dist --prod
```

### Option 2: Vercel
```bash
# Using the deployment script
./scripts/deploy.sh vercel production

# Or manually
npm run build
vercel --prod
```

### Option 3: Docker
```bash
# Using the deployment script
./scripts/deploy.sh docker production

# Or manually
docker build -f docker/Dockerfile -t leapgen-ai .
docker run -p 80:80 leapgen-ai
```

## 📋 Pre-Deployment Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Tests & Build**
   ```bash
   npm test
   npm run build
   ```

3. **Create Deployment Packages**
   ```bash
   chmod +x scripts/create-deployment-package.sh
   ./scripts/create-deployment-package.sh
   ```

4. **Follow Production Checklist**
   - Review `PRODUCTION_CHECKLIST.md`
   - Verify all items before deployment

## 🔧 Environment Configuration

### Required Setup
- Node.js 18+
- npm package manager
- Hosting platform account (Netlify/Vercel/AWS)

### Optional Configuration
```bash
# Google Analytics (if needed)
VITE_GA_TRACKING_ID=your-ga-id

# Custom API endpoints
VITE_API_BASE_URL=https://api.leapgen.ai
```

## 📊 Performance Targets

- **Lighthouse Score**: > 95
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🆘 Support

- **Documentation**: See `DEPLOYMENT.md` for detailed instructions
- **Technical Issues**: Refer to `TECHNICAL_SPECS.md`
- **Emergency**: Use rollback procedures in deployment guide

## 📝 Next Steps

1. Review all documentation files
2. Complete the production checklist
3. Test deployment on staging environment
4. Deploy to production
5. Monitor performance and functionality

For detailed instructions, start with `DEPLOYMENT.md`.

---

**Version**: 1.0.0  
**Created**: $(date +%Y-%m-%d)  
**Maintained By**: LeapGen.AI Development Team