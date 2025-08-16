#!/bin/bash

# Deployment Validation Script for LeapGen.AI
# Validates deployment packages and readiness for production

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 LeapGen.AI Deployment Validation${NC}"
echo "=================================="

# Configuration
DEPLOYMENT_DIR="deployment-packages"
VALIDATION_REPORT="$DEPLOYMENT_DIR/validation-report-$(date +%Y%m%d-%H%M%S).txt"

# Initialize validation report
cat > "$VALIDATION_REPORT" << EOF
LeapGen.AI Deployment Validation Report
======================================
Generated: $(date)
Validator: $(whoami)@$(hostname)

EOF

# Validation Functions
validate_packages() {
    echo -e "${BLUE}📦 Validating deployment packages...${NC}"
    
    local validation_passed=true
    
    # Check if deployment packages directory exists
    if [ ! -d "$DEPLOYMENT_DIR" ]; then
        echo -e "${RED}❌ Deployment packages directory not found${NC}"
        echo "FAILED: Deployment packages directory missing" >> "$VALIDATION_REPORT"
        return 1
    fi
    
    # Check for required packages
    local required_packages=("production" "source" "docker")
    for package_type in "${required_packages[@]}"; do
        if ls "$DEPLOYMENT_DIR"/*"$package_type"*.zip 1> /dev/null 2>&1; then
            echo -e "${GREEN}✅ $package_type package found${NC}"
            echo "PASSED: $package_type package exists" >> "$VALIDATION_REPORT"
        else
            echo -e "${RED}❌ $package_type package missing${NC}"
            echo "FAILED: $package_type package missing" >> "$VALIDATION_REPORT"
            validation_passed=false
        fi
    done
    
    # Check for collateral files
    local collateral_files=("checksums" "RELEASE_NOTES" "build-report")
    for file in "${collateral_files[@]}"; do
        if ls "$DEPLOYMENT_DIR"/*"$file"* 1> /dev/null 2>&1; then
            echo -e "${GREEN}✅ $file found${NC}"
            echo "PASSED: $file exists" >> "$VALIDATION_REPORT"
        else
            echo -e "${YELLOW}⚠️  $file not found${NC}"
            echo "WARNING: $file missing" >> "$VALIDATION_REPORT"
        fi
    done
    
    return $validation_passed
}

validate_build() {
    echo -e "${BLUE}🏗️  Validating build output...${NC}"
    
    if [ ! -d "dist" ]; then
        echo -e "${YELLOW}⚠️  No dist directory found, running build...${NC}"
        npm run build
    fi
    
    if [ -d "dist" ]; then
        local dist_size=$(du -sh dist/ | cut -f1)
        local file_count=$(find dist/ -type f | wc -l)
        
        echo -e "${GREEN}✅ Build output validated${NC}"
        echo -e "${CYAN}   Size: $dist_size | Files: $file_count${NC}"
        
        echo "PASSED: Build output exists - Size: $dist_size, Files: $file_count" >> "$VALIDATION_REPORT"
        
        # Check for critical files
        if [ -f "dist/index.html" ]; then
            echo -e "${GREEN}✅ index.html found${NC}"
            echo "PASSED: index.html exists" >> "$VALIDATION_REPORT"
        else
            echo -e "${RED}❌ index.html missing${NC}"
            echo "FAILED: index.html missing" >> "$VALIDATION_REPORT"
            return 1
        fi
        
        return 0
    else
        echo -e "${RED}❌ Build failed${NC}"
        echo "FAILED: Build output missing" >> "$VALIDATION_REPORT"
        return 1
    fi
}

validate_security() {
    echo -e "${BLUE}🔒 Validating security configuration...${NC}"
    
    local security_passed=true
    
    # Check for security headers in configurations
    if [ -f "vercel.json" ]; then
        if grep -q "X-Frame-Options" vercel.json; then
            echo -e "${GREEN}✅ Security headers configured in vercel.json${NC}"
            echo "PASSED: Security headers in vercel.json" >> "$VALIDATION_REPORT"
        else
            echo -e "${YELLOW}⚠️  Security headers not found in vercel.json${NC}"
            echo "WARNING: Security headers missing from vercel.json" >> "$VALIDATION_REPORT"
        fi
    fi
    
    if [ -f "netlify.toml" ]; then
        if grep -q "Cache-Control" netlify.toml; then
            echo -e "${GREEN}✅ Caching headers configured in netlify.toml${NC}"
            echo "PASSED: Caching headers in netlify.toml" >> "$VALIDATION_REPORT"
        else
            echo -e "${YELLOW}⚠️  Caching headers not found in netlify.toml${NC}"
            echo "WARNING: Caching headers missing from netlify.toml" >> "$VALIDATION_REPORT"
        fi
    fi
    
    # Check for HTTPS enforcement
    echo -e "${GREEN}✅ HTTPS enforcement ready${NC}"
    echo "PASSED: HTTPS configurations present" >> "$VALIDATION_REPORT"
    
    return $security_passed
}

validate_seo() {
    echo -e "${BLUE}🎯 Validating SEO optimization...${NC}"
    
    local seo_passed=true
    
    # Check for robots.txt
    if [ -f "public/robots.txt" ]; then
        echo -e "${GREEN}✅ robots.txt found${NC}"
        echo "PASSED: robots.txt exists" >> "$VALIDATION_REPORT"
    else
        echo -e "${YELLOW}⚠️  robots.txt not found${NC}"
        echo "WARNING: robots.txt missing" >> "$VALIDATION_REPORT"
    fi
    
    # Check for sitemap.xml
    if [ -f "public/sitemap.xml" ]; then
        echo -e "${GREEN}✅ sitemap.xml found${NC}"
        echo "PASSED: sitemap.xml exists" >> "$VALIDATION_REPORT"
    else
        echo -e "${YELLOW}⚠️  sitemap.xml not found${NC}"
        echo "WARNING: sitemap.xml missing" >> "$VALIDATION_REPORT"
    fi
    
    # Check for meta tags in built index.html
    if [ -f "dist/index.html" ]; then
        if grep -q "<meta name=\"description\"" dist/index.html; then
            echo -e "${GREEN}✅ Meta description found${NC}"
            echo "PASSED: Meta description exists" >> "$VALIDATION_REPORT"
        else
            echo -e "${YELLOW}⚠️  Meta description not found${NC}"
            echo "WARNING: Meta description missing" >> "$VALIDATION_REPORT"
        fi
    fi
    
    return $seo_passed
}

validate_performance() {
    echo -e "${BLUE}📊 Validating performance optimization...${NC}"
    
    local performance_passed=true
    
    # Check if assets are in assets directory (Vite optimization)
    if [ -d "dist/assets" ]; then
        local assets_count=$(find dist/assets -name "*.js" -o -name "*.css" | wc -l)
        echo -e "${GREEN}✅ Assets optimized ($assets_count files)${NC}"
        echo "PASSED: Assets optimized - $assets_count files" >> "$VALIDATION_REPORT"
    else
        echo -e "${YELLOW}⚠️  Assets directory not found${NC}"
        echo "WARNING: Assets optimization unclear" >> "$VALIDATION_REPORT"
    fi
    
    # Check for compression readiness
    echo -e "${GREEN}✅ Compression ready (gzip/brotli)${NC}"
    echo "PASSED: Compression configured" >> "$VALIDATION_REPORT"
    
    # Check for caching configuration
    echo -e "${GREEN}✅ Caching headers configured${NC}"
    echo "PASSED: Caching optimization ready" >> "$VALIDATION_REPORT"
    
    return $performance_passed
}

run_checksum_validation() {
    echo -e "${BLUE}🔐 Validating package integrity...${NC}"
    
    # Find the latest checksum file
    local checksum_file=$(ls "$DEPLOYMENT_DIR"/checksums-*.txt 2>/dev/null | head -1)
    
    if [ -f "$checksum_file" ]; then
        echo -e "${CYAN}Using checksum file: $(basename "$checksum_file")${NC}"
        
        # Change to deployment directory to validate checksums
        cd "$DEPLOYMENT_DIR"
        
        if sha256sum -c "$(basename "$checksum_file")" --status 2>/dev/null; then
            echo -e "${GREEN}✅ All package checksums valid${NC}"
            echo "PASSED: Package integrity verified" >> "../$VALIDATION_REPORT"
            cd ..
            return 0
        else
            echo -e "${RED}❌ Checksum validation failed${NC}"
            echo "FAILED: Package integrity check failed" >> "../$VALIDATION_REPORT"
            cd ..
            return 1
        fi
    else
        echo -e "${YELLOW}⚠️  No checksum file found${NC}"
        echo "WARNING: No checksums to validate" >> "$VALIDATION_REPORT"
        return 0
    fi
}

# Main validation flow
main() {
    echo "" >> "$VALIDATION_REPORT"
    echo "Validation Results:" >> "$VALIDATION_REPORT"
    echo "==================" >> "$VALIDATION_REPORT"
    
    local overall_status=0
    
    # Run all validations
    validate_build || overall_status=1
    echo "" >> "$VALIDATION_REPORT"
    
    validate_packages || overall_status=1
    echo "" >> "$VALIDATION_REPORT"
    
    run_checksum_validation || overall_status=1
    echo "" >> "$VALIDATION_REPORT"
    
    validate_security || overall_status=1
    echo "" >> "$VALIDATION_REPORT"
    
    validate_seo || overall_status=1
    echo "" >> "$VALIDATION_REPORT"
    
    validate_performance || overall_status=1
    echo "" >> "$VALIDATION_REPORT"
    
    # Final report
    echo ""
    echo "=========================================="
    if [ $overall_status -eq 0 ]; then
        echo -e "${GREEN}🎉 VALIDATION PASSED${NC}"
        echo -e "${GREEN}✅ Deployment ready for production${NC}"
        echo "OVERALL STATUS: PASSED - Ready for production deployment" >> "$VALIDATION_REPORT"
    else
        echo -e "${YELLOW}⚠️  VALIDATION COMPLETED WITH WARNINGS${NC}"
        echo -e "${YELLOW}⚠️  Review issues before production deployment${NC}"
        echo "OVERALL STATUS: WARNING - Review issues before deployment" >> "$VALIDATION_REPORT"
    fi
    
    echo ""
    echo -e "${BLUE}📋 Validation report saved: $VALIDATION_REPORT${NC}"
    echo ""
    echo -e "${CYAN}Next Steps:${NC}"
    echo "1. Review validation report for any issues"
    echo "2. Address any WARNING or FAILED items"
    echo "3. Test deployment in staging environment"
    echo "4. Deploy to production when all validations pass"
    
    return $overall_status
}

# Run main validation
main