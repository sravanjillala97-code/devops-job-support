#!/bin/bash
# Quick setup script for Google Apps Script integration

echo "🚀 Google Sheets Integration Setup"
echo "===================================="
echo ""
echo "Step 1: Deploy Google Apps Script"
echo "   • Open: https://docs.google.com/forms/d/e/1FAIpQLSepCuYqdkDHu0qqgumTGmxSABgNMLd_Xf37rh5yW9LZ_ICnLw/edit"
echo "   • Tools → Script Editor"
echo "   • Paste code from: google-apps-script.gs"
echo "   • Deploy → New Deployment → Web app"
echo "   • Who has access: Anyone"
echo "   • COPY the deployment URL"
echo ""
echo "Step 2: Add URL to .env.local"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "   Creating .env.local..."
    cat > .env.local << 'EOF'
# Google Apps Script Webhook URL
# Get this from: Deploy → Manage deployments → Copy the URL
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=
EOF
    echo "   ✅ .env.local created"
else
    echo "   ℹ️  .env.local already exists"
fi

echo ""
echo "Step 3: Add your Apps Script URL"
echo "   Edit .env.local and paste your URL after GOOGLE_APPS_SCRIPT_WEBHOOK_URL="
echo ""
echo "Step 4: Restart server"
echo "   npm run dev"
echo ""
echo "Step 5: Test"
echo "   • Go to: http://localhost:3000/contact"
echo "   • Or: curl -X POST http://localhost:3000/api/contact ..."
echo ""
echo "✅ All set! Check your Google Sheet for responses"
