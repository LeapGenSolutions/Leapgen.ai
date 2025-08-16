# LeapGen.AI

Enterprise AI platform delivering SurroundAI, DataCoffee, and Seismic solutions for customer support automation, data governance, and clinical documentation.

## Quick Start

### Development Setup
```bash
# Clone and install
git clone <repository-url>
cd leapgen-ai
npm install

# Start development server
npm run dev
```

### Production Deployment
```bash
# Build for production
npm run build

# Create deployment packages
chmod +x scripts/create-deployment-package.sh
./scripts/create-deployment-package.sh
```

## Project Overview

LeapGen.AI is a React 18.3.1 single-page application built with:
- **Framework**: Vite + TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v6
- **Performance**: Optimized for Core Web Vitals
- **SEO**: Complete meta tags, structured data, sitemap

## Key Features

- **Enterprise-Grade Performance**: Lighthouse score 95+
- **Multi-Platform Deployment**: Netlify, Vercel, Docker, AWS
- **Security-First**: CSP headers, HTTPS, vulnerability scanning
- **SEO Optimized**: Dynamic meta tags, structured data, sitemap
- **Responsive Design**: Mobile-first, accessible UI

## Documentation

- 📋 [Deployment Guide](DEPLOYMENT.md) - Platform-specific deployment instructions
- 🔧 [Technical Specifications](TECHNICAL_SPECS.md) - Architecture and implementation details
- ✅ [Production Checklist](PRODUCTION_CHECKLIST.md) - Pre-deployment verification
- 📦 [Deployment Package Guide](README_DEPLOYMENT.md) - Package contents and usage

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## Deployment Platforms

### Netlify (Recommended)
```bash
npm run build
netlify deploy --dir=dist --prod
```

### Vercel
```bash
vercel --prod
```

### Docker
```bash
docker build -f docker/Dockerfile -t leapgen-ai .
docker run -p 80:80 leapgen-ai
```

## Support

- **Documentation**: See `/docs` directory
- **Issues**: Create GitHub issue
- **Performance**: Lighthouse CI integrated
- **Security**: Automated vulnerability scanning

## License

Proprietary - LeapGen.AI Enterprise License

---

Built with ❤️ by the LeapGen.AI team