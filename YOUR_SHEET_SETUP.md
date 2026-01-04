# 🎯 Your Google Sheet Integration - Final Setup

## Your Sheet Information

**Sheet ID:** `1dyLk9-Ti9QSwnQrggVbkniODVpVbFMA4zAlKl2ljviw`

**Open your Sheet:** https://docs.google.com/spreadsheets/d/1dyLk9-Ti9QSwnQrggVbkniODVpVbFMA4zAlKl2ljviw/edit

---

## ⚡ Quick Setup (5 minutes)

### Step 1: Open Script Editor

1. Open your Sheet (link above)
2. Click **Tools → Script Editor**
3. Delete any existing code

### Step 2: Copy & Paste the Script

1. In your project, open: `google-apps-script.gs`
2. Copy ALL the code
3. Paste into Google Script Editor
4. Click **Save**

### Step 3: Deploy as Web App

1. Click **Deploy** (top right)
2. Select **New Deployment** (if first time)
3. **Type:** Web app
4. **Execute as:** Your Google account
5. **Who has access:** Anyone
6. Click **Deploy**
7. **Copy the URL** shown (format: `https://script.google.com/macros/s/ABC123/usercontent`)

### Step 4: Add to Environment

In terminal:
```bash
cd /Users/abhedyatechservicespvtltd/online-training/devops-job-support
```

Edit/create `.env.local`:
```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent
```

(Replace with your actual URL from Step 3)

### Step 5: Restart & Test

```bash
npm run dev
```

Go to: http://localhost:3000/contact

Fill form and submit → Check your Google Sheet! ✅

---

## ✅ Verification

After submitting the form:

1. **Check Google Sheet**: https://docs.google.com/spreadsheets/d/1dyLk9-Ti9QSwnQrggVbkniODVpVbFMA4zAlKl2ljviw/edit

2. **You should see:**
   - Header row: Timestamp, Full Name, Email Address, Phone Number, Message, Submission ID
   - Your submitted data in a new row

3. **Expected columns:**
   | Timestamp | Full Name | Email Address | Phone Number | Message | Submission ID |
   |-----------|-----------|----------------|--------------|---------|---------------|
   | 1/4/2026 3:15:22 PM | John Doe | john@example.com | +12015551234 | Test message | sub_... |

---

## Troubleshooting

### Nothing appears in Sheet after submit

**Check:**
1. Is `.env.local` created with the URL?
   ```bash
   cat .env.local
   ```

2. Is server restarted?
   ```bash
   npm run dev
   ```

3. Check permissions on Apps Script deployment:
   - Go back to Script Editor
   - Click **Deploy → View deployments**
   - Edit your deployment
   - Change "Who has access" to **"Anyone"**
   - Click **Update**

4. Watch server logs when you submit form:
   - Look for: `📤 Submitting to Google Sheet`
   - Look for: `✅ Google Sheet response`

### Form shows error

- **Phone:** Must start with `+` (e.g., `+12015551234`)
- **Email:** Must be valid (e.g., `user@example.com`)
- **All fields:** Must be filled

### "Permission denied" error

In Google Script Editor:
1. Click **Deploy → View deployments**
2. Click the edit icon ✎
3. Change **"Who has access"** to **"Anyone"**
4. Click **Update**

---

## Testing

### Via Browser
1. http://localhost:3000/contact
2. Fill in form
3. Submit
4. Check your Sheet

### Via curl
```bash
curl -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+12015551234",
    "message": "Testing"
  }'
```

Expected response:
```json
{
  "success": true,
  "submissionId": "sub_...",
  "message": "Thank you! Your message has been received and recorded in our system.",
  "googleSheetUpdated": true
}
```

---

## Important Details

✅ **Sheet ID is built-in:**
- The script has your Sheet ID: `1dyLk9-Ti9QSwnQrggVbkniODVpVbFMA4zAlKl2ljviw`
- No need to configure it further

✅ **Form fields match:**
- Full Name → name
- Email Address → email
- Phone Number → phone
- Message → message

✅ **Automatic headers:**
- First submission automatically creates headers
- Or you can manually create them first

---

## Quick Commands

```bash
# Check environment variable
cat .env.local | grep GOOGLE_APPS_SCRIPT

# View stored submissions
curl http://localhost:3000/api/contact | jq .

# Start server
npm run dev

# Stop server
# Press Ctrl+C
```

---

## Success Indicators

✅ Form page loads: http://localhost:3000/contact
✅ Form submits without error
✅ Response shows `"googleSheetUpdated": true`
✅ Server logs show `✅ Google Sheet response`
✅ New row appears in your Sheet within 1-2 seconds
✅ Data matches what you entered

---

## Your Setup is Complete! 🎉

**What's working:**
- Contact form
- Backend API
- Google Apps Script (ready to deploy)
- Your specific Google Sheet configured

**Next:** Deploy the Apps Script and you're live!

