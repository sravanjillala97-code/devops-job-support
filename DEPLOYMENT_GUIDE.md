# Google Apps Script Deployment - Step by Step

## TL;DR - 5 Minute Setup

```
1. Copy: google-apps-script.gs
2. Paste into: Google Script Editor (from Form)
3. Deploy as: Web app (Anyone access)
4. Copy URL
5. Add to .env.local
6. Restart npm run dev
7. Done ✅
```

---

## Detailed Steps with Screenshots

### Step 1️⃣: Open Your Google Form

**Go to:**
```
https://docs.google.com/forms/d/e/1FAIpQLSepCuYqdkDHu0qqgumTGmxSABgNMLd_Xf37rh5yW9LZ_ICnLw/edit
```

You should see your form in Google Forms editor.

---

### Step 2️⃣: Open Script Editor

In Google Form, click:
```
Tools → Script Editor
```

A new tab opens with Google Apps Script editor.

---

### Step 3️⃣: Clear Default Code

Delete any code that's already there. Leave it blank.

---

### Step 4️⃣: Copy the Script Code

In your project, open:
```
google-apps-script.gs
```

Copy ALL the code in that file.

---

### Step 5️⃣: Paste into Script Editor

Paste the copied code into Google Apps Script editor.

Click **Save** (Ctrl+S or Cmd+S)

---

### Step 6️⃣: Deploy as Web App

Click the **Deploy** button (top right)

If this is first time, click **New Deployment**

---

### Step 7️⃣: Select Type "Web app"

In the dialog that appears:

```
Type: Web app  ← SELECT THIS
Execute as: [Your account]
Who has access: Anyone  ← SELECT THIS
```

Click **Deploy**

---

### Step 8️⃣: Copy Your URL

A popup shows your deployment URL:

```
https://script.google.com/macros/s/SCRIPT_ID_ABC123/usercontent
```

**Copy the entire URL** (click the copy button or select all with Ctrl+A, Cmd+C)

---

### Step 9️⃣: Add to .env.local

Open your project folder in terminal:

```bash
cd /Users/abhedyatechservicespvtltd/online-training/devops-job-support
```

Create or edit `.env.local`:

```bash
nano .env.local
```

Add this line:

```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/SCRIPT_ID_ABC123/usercontent
```

(Paste your actual URL from Step 8)

Save: Press Ctrl+X, then Y, then Enter (or Cmd+S if using VSCode)

---

### Step 🔟: Restart Server

In your terminal:

```bash
# Stop current server (Ctrl+C)
npm run dev
```

You should see:
```
  ▲ Next.js 16.1.1
  ✓ Ready in 1234ms
```

---

### Step 1️⃣1️⃣: Test It!

Open browser:
```
http://localhost:3000/contact
```

Fill in the form:
- Name: John Doe
- Email: john@example.com
- Phone: +12015551234
- Message: Test message

Click **Submit**

---

### Step 1️⃣2️⃣: Verify Success

You should see: "Thank you! Your message has been received..."

Now check your Google Sheet:

1. Go to the Sheet connected to your Form
2. You should see a NEW ROW with your submission data
3. It appears within 1-2 seconds

---

## If Data Doesn't Appear

### Checklist:

1. **Is .env.local created?**
   ```bash
   ls -la .env.local
   ```
   If missing, create it.

2. **Is URL correct in .env.local?**
   ```bash
   cat .env.local
   ```
   Should show: `GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/...`

3. **Is server restarted?**
   - Stop with: Ctrl+C
   - Start with: `npm run dev`
   - Wait for "Ready in..."

4. **Check server logs**
   - When you submit, watch the terminal
   - Look for: `📤 Submitting to Google Sheet`
   - If error, it will show in logs

5. **Check Apps Script permission**
   - Go back to Script Editor
   - Click: Deploy → View deployments
   - Click the edit icon
   - Make sure: "Who has access" = **Anyone**
   - Click: Update

6. **Test the Apps Script directly**
   - In Script Editor
   - Top dropdown: select `testDoPost`
   - Click: Run (play button)
   - Check your Sheet for test row

---

## Test Your Setup

### Via curl command:

```bash
curl -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Setup Test",
    "email": "setup@example.com",
    "phone": "+12015551234",
    "message": "Testing setup"
  }'
```

Expected response:
```json
{
  "success": true,
  "googleSheetUpdated": true
}
```

---

## Common Errors & Fixes

| Error | Fix |
|-------|-----|
| "Permission denied" | Change Apps Script to "Anyone" access |
| No data in Sheet | Check .env.local has URL, restart server |
| Form shows error | Check phone format (+12015551234), email format |
| localhost:3000 doesn't work | Server not running, do: `npm run dev` |
| Can't access Script Editor | Not logged into Google account |

---

## Success Indicators

✅ Form page loads at http://localhost:3000/contact
✅ Form submits without error
✅ Response shows "googleSheetUpdated": true
✅ Server logs show "✅ Google Sheet response:"
✅ New row appears in your Google Sheet
✅ Row contains your submitted data

---

## That's It! 🎉

Your contact form is now connected to Google Sheets.

Every submission automatically saves to the Sheet.

No database needed. No complex setup. Just Google Sheets.

