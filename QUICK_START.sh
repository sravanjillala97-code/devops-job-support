#!/usr/bin/env bash
# Google Sheets Integration - Quick Start Card

cat << 'EOF'

╔══════════════════════════════════════════════════════════════╗
║          GOOGLE SHEETS INTEGRATION - QUICK START            ║
╚══════════════════════════════════════════════════════════════╝

📋 THE SETUP (5 STEPS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣  COPY THE SCRIPT
    File: google-apps-script.gs
    Select all code (Ctrl+A or Cmd+A)
    Copy it (Ctrl+C or Cmd+C)

2️⃣  OPEN GOOGLE SCRIPT EDITOR
    Go to: https://docs.google.com/forms/.../edit
    Menu: Tools → Script Editor
    Paste your code
    Save (Ctrl+S or Cmd+S)

3️⃣  DEPLOY AS WEB APP
    Button: Deploy (top right)
    Type: Web app
    Execute as: Your account
    Access: Anyone ⭐ IMPORTANT
    Click: Deploy

4️⃣  COPY THE URL
    Deployment shows URL:
    https://script.google.com/macros/s/ABC123/usercontent
    Copy the entire URL

5️⃣  ADD TO ENVIRONMENT
    Terminal:
    cd devops-job-support
    echo 'GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://...' > .env.local
    
    Or edit .env.local in editor and add:
    GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://...

🔄 RESTART & TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    npm run dev

    Then go to: http://localhost:3000/contact
    Fill & submit → Check Google Sheet ✅

🆘 NEED HELP?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    Detailed Steps:   DEPLOYMENT_GUIDE.md
    Full Guide:       SETUP_COMPLETE.md
    Troubleshooting:  SETUP_COMPLETE.md → Troubleshooting section

⚠️  REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    • Phone must be: +1234567890 (with +)
    • Email must be: user@example.com
    • Google access: Set to "Anyone"
    • Restart server after .env.local change

EOF
