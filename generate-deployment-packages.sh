#!/bin/bash

# Execute the comprehensive deployment package generation
echo "🚀 Starting comprehensive deployment package generation..."

# Make scripts executable
chmod +x scripts/create-deployment-package.sh
chmod +x scripts/validate-deployment.sh

# Run the deployment package generator
echo "📦 Generating deployment packages..."
./scripts/create-deployment-package.sh

echo ""
echo "🔍 Running deployment validation..."
./scripts/validate-deployment.sh

echo ""
echo "✅ COMPREHENSIVE DEPLOYMENT PACKAGE COMPLETE!"
echo ""
echo "📦 Generated packages in 'deployment-packages' directory:"
echo "   ✅ Production package (ready for immediate deployment)"
echo "   ✅ Source code package (complete development setup)"  
echo "   ✅ Docker package (container deployment ready)"
echo "   ✅ Build reports and performance audits"
echo "   ✅ Security checksums and validation"
echo "   ✅ CI/CD templates and comprehensive guides"
echo ""
echo "📖 DEPLOYMENT GUIDE: FINAL_DEPLOYMENT_PACKAGE_GUIDE.md"
echo "🚀 READY FOR PRODUCTION DEPLOYMENT!"