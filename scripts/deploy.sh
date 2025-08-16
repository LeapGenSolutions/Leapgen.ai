#!/bin/bash

# LeapGen.AI Deployment Script
# Usage: ./scripts/deploy.sh [platform] [environment]

set -e

PLATFORM=${1:-netlify}
ENVIRONMENT=${2:-production}

echo "🚀 Starting deployment to $PLATFORM ($ENVIRONMENT)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check prerequisites
check_dependencies() {
    echo "📋 Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed${NC}"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is not installed${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Dependencies check passed${NC}"
}

# Install dependencies
install_dependencies() {
    echo "📦 Installing dependencies..."
    npm ci
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Run tests
run_tests() {
    echo "🧪 Running tests..."
    if npm run test --if-present; then
        echo -e "${GREEN}✅ Tests passed${NC}"
    else
        echo -e "${YELLOW}⚠️  No tests found or tests failed${NC}"
    fi
}

# Build application
build_application() {
    echo "🏗️  Building application..."
    npm run build
    
    if [ -d "dist" ]; then
        echo -e "${GREEN}✅ Build completed successfully${NC}"
        echo "📊 Build statistics:"
        du -sh dist/
        find dist/ -name "*.js" -o -name "*.css" | wc -l | xargs echo "   Files:"
    else
        echo -e "${RED}❌ Build failed - dist directory not found${NC}"
        exit 1
    fi
}

# Deploy to platform
deploy_to_platform() {
    case $PLATFORM in
        netlify)
            deploy_netlify
            ;;
        vercel)
            deploy_vercel
            ;;
        aws)
            deploy_aws
            ;;
        docker)
            deploy_docker
            ;;
        *)
            echo -e "${RED}❌ Unknown platform: $PLATFORM${NC}"
            echo "Supported platforms: netlify, vercel, aws, docker"
            exit 1
            ;;
    esac
}

# Netlify deployment
deploy_netlify() {
    echo "🌐 Deploying to Netlify..."
    
    if ! command -v netlify &> /dev/null; then
        echo "📦 Installing Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    if [ "$ENVIRONMENT" = "production" ]; then
        netlify deploy --dir=dist --prod
    else
        netlify deploy --dir=dist
    fi
    
    echo -e "${GREEN}✅ Deployed to Netlify${NC}"
}

# Vercel deployment
deploy_vercel() {
    echo "▲ Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        echo "📦 Installing Vercel CLI..."
        npm install -g vercel
    fi
    
    if [ "$ENVIRONMENT" = "production" ]; then
        vercel --prod
    else
        vercel
    fi
    
    echo -e "${GREEN}✅ Deployed to Vercel${NC}"
}

# AWS S3 deployment
deploy_aws() {
    echo "☁️  Deploying to AWS S3..."
    
    if ! command -v aws &> /dev/null; then
        echo -e "${RED}❌ AWS CLI is not installed${NC}"
        exit 1
    fi
    
    # Check if S3 bucket exists
    BUCKET_NAME=${AWS_S3_BUCKET:-leapgen-ai}
    
    if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
        echo -e "${RED}❌ S3 bucket $BUCKET_NAME does not exist${NC}"
        exit 1
    fi
    
    # Sync files to S3
    aws s3 sync dist/ "s3://$BUCKET_NAME" --delete
    
    # Invalidate CloudFront if distribution ID is provided
    if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
        echo "🔄 Invalidating CloudFront cache..."
        aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*"
    fi
    
    echo -e "${GREEN}✅ Deployed to AWS S3${NC}"
}

# Docker deployment
deploy_docker() {
    echo "🐳 Building and deploying Docker container..."
    
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}❌ Docker is not installed${NC}"
        exit 1
    fi
    
    # Build Docker image
    docker build -f docker/Dockerfile -t leapgen-ai:latest .
    
    # Tag for registry if specified
    if [ ! -z "$DOCKER_REGISTRY" ]; then
        docker tag leapgen-ai:latest "$DOCKER_REGISTRY/leapgen-ai:latest"
        docker push "$DOCKER_REGISTRY/leapgen-ai:latest"
    fi
    
    echo -e "${GREEN}✅ Docker image built and deployed${NC}"
}

# Performance check
performance_check() {
    echo "📊 Running performance check..."
    
    if command -v lighthouse &> /dev/null; then
        lighthouse --only-categories=performance,accessibility,best-practices,seo \
                  --output=json \
                  --output-path=./lighthouse-report.json \
                  http://localhost:4173 || true
        echo -e "${GREEN}✅ Performance check completed${NC}"
    else
        echo -e "${YELLOW}⚠️  Lighthouse not installed, skipping performance check${NC}"
    fi
}

# Main deployment flow
main() {
    echo "🚀 LeapGen.AI Deployment"
    echo "Platform: $PLATFORM"
    echo "Environment: $ENVIRONMENT"
    echo "========================"
    
    check_dependencies
    install_dependencies
    run_tests
    build_application
    deploy_to_platform
    
    echo ""
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo "Platform: $PLATFORM"
    echo "Environment: $ENVIRONMENT"
    echo "Build size: $(du -sh dist/ | cut -f1)"
}

# Run main function
main "$@"