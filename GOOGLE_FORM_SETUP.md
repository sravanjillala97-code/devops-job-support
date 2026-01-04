# 🎯 Google Form Integration - Action Items

## Your Setup Instructions

Your backend is **ready**. Now you need to:

### 1️⃣ Create Google Apps Script (ONE TIME SETUP - 5 min)

**Where:** Open Google Sheet connected to your form
- Form: https://docs.google.com/forms/d/e/1FAIpQLSepCuYqdkDHu0qqgumTGmxSABgNMLd_Xf37rh5yW9LZ_ICnLw/edit
- Click **Tools → Script Editor**

**What:** Copy the code from `SETUP_GOOGLE_APPS_SCRIPT.md`

**Deploy:** 
- Click **Deploy → New Deployment → Web app**
- Execute as: Your account
- Who has access: **Anyone**
- Click **Deploy**
- **COPY THE URL** - it looks like:
```
https://script.google.com/macros/s/[SCRIPT_ID]/usercontent
```

### 2️⃣ Add URL to `.env.local` (1 min)

Create/edit `.env.local` in the `devops-job-support` folder:

```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/[YOUR_SCRIPT_ID]/usercontent
```

### 3️⃣ Restart Your Server (1 min)

```bash
cd /Users/abhedyatechservicespvtltd/online-training/devops-job-support
npm run dev
```

### 4️⃣ Test It! (1 min)

Submit through form at: http://localhost:3000/contact

Or test via curl:
```bash
curl -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+12015551234",
    "message": "Test message"
  }'
```

## That's It! 🎉

After that, every form submission will appear in your Google Sheet automatically.

---

## Current Status

✅ Contact form working at http://localhost:3000/contact
✅ Backend API receiving submissions
✅ Local storage of data
⏳ **PENDING:** Google Apps Script webhook URL from you
⏳ **PENDING:** Environment variable setup

## Need Help?

Check these files:
- `SETUP_GOOGLE_APPS_SCRIPT.md` - Detailed script setup
- `QUICKSTART.md` - Quick reference
- `app/api/contact/route.ts` - Backend code (already configured)
