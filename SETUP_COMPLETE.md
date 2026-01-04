# Google Sheets + Apps Script Integration Guide

## 📋 What You're Getting

Your contact form will automatically save responses to a Google Sheet using this flow:

```
Browser Form → Backend API → Google Apps Script → Google Sheet
```

**No database needed.** Everything stores in Google Sheets.

---

## 🚀 Complete Setup (10 minutes)

### Part 1: Deploy Google Apps Script (5 min)

**Step 1:** Open your Google Form for editing
- URL: https://docs.google.com/forms/d/e/1FAIpQLSepCuYqdkDHu0qqgumTGmxSABgNMLd_Xf37rh5yW9LZ_ICnLw/edit

**Step 2:** Open Script Editor
- Click **Tools → Script Editor** (opens in new tab)

**Step 3:** Copy the script code
- In your project, open file: `google-apps-script.gs`
- Select all code (Ctrl+A / Cmd+A)
- Copy it (Ctrl+C / Cmd+C)

**Step 4:** Paste into Script Editor
- In Google Script Editor, delete any default code
- Paste your copied code
- Click **Save** (Ctrl+S)

**Step 5:** Deploy the Web App
- Click **Deploy** button (top right)
- If this is first time: click **New Deployment**
- Select **Type** → Choose **Web app**
- Configure:
  - **Execute as:** Your Google account (the one owning the Sheet)
  - **Who has access:** **Anyone** (critical!)
- Click **Deploy**
- Copy the shown URL (looks like): `https://script.google.com/macros/s/ABC123xyz/usercontent`

**Step 6:** Test it works
- In Script Editor, find the dropdown showing function names
- Select **testDoPost**
- Click **Run** (play button)
- Open your Google Sheet → should see a test row added

---

### Part 2: Configure Backend (3 min)

**Step 1:** Create/edit `.env.local` file

In terminal:
```bash
cd /Users/abhedyatechservicespvtltd/online-training/devops-job-support
touch .env.local
```

**Step 2:** Add your Apps Script URL

Open `.env.local` and add:
```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/usercontent
```

Replace `YOUR_SCRIPT_ID_HERE` with the actual ID from Step 5 above.

**Step 3:** Restart server

```bash
npm run dev
```

---

### Part 3: Test Everything (2 min)

**Option A: Via Browser**
1. Go to: http://localhost:3000/contact
2. Fill in form with:
   - Name: `John Doe`
   - Email: `john@example.com`
   - Phone: `+12015551234` (must have +)
   - Message: `Test message`
3. Click Submit
4. Check your Google Sheet → new row should appear!

**Option B: Via Terminal**

```bash
curl -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+14155552671",
    "message": "Testing integration"
  }'
```

Expected response:
```json
{
  "success": true,
  "submissionId": "sub_1234567890_xyz",
  "message": "Thank you! Your message has been received and recorded in our system.",
  "googleSheetUpdated": true
}
```

---

## ✅ Verification Checklist

- [ ] Google Apps Script created and deployed
- [ ] Deployment URL copied
- [ ] `.env.local` file created with URL
- [ ] Server restarted (`npm run dev`)
- [ ] Test form submission successful
- [ ] Data appears in Google Sheet within 1-2 seconds

---

## 🔧 Troubleshooting

### Problem: "Anyone" permission not available
**Solution:**
1. Go back to Script Editor
2. Click **Deploy → View deployments**
3. Click the edit icon on your deployment
4. Change permissions to **"Anyone"**
5. Click **Update**

### Problem: Data not appearing in Sheet
**Checklist:**
1. Is `.env.local` created? → `ls -la .env.local`
2. Is URL correct? → `cat .env.local`
3. Is server restarted? → Stop with Ctrl+C, run `npm run dev` again
4. Check server logs for errors when you submit
5. Make sure Apps Script deployment shows "Anyone" has access

### Problem: "Phone must include country code" error
**Solution:** Phone must start with `+` followed by country code
- ✅ Correct: `+12015551234`
- ❌ Wrong: `2015551234`

### Problem: Form says "Thank You" but Sheet not updated
**Check:**
1. Is the Apps Script URL complete in `.env.local`?
2. Try the `testDoPost()` function in Script Editor to verify it works
3. Check that Sheet has the header row with column names

---

## 📊 What Happens Behind the Scenes

1. **User submits form** at `/contact`
2. **Browser sends** JSON to `/api/contact` endpoint
3. **Backend validates** email, phone format, required fields
4. **Backend stores** locally (fallback)
5. **Backend POSTs** JSON to your Apps Script URL
6. **Apps Script receives** the data
7. **Apps Script appends** a row to your Google Sheet
8. **User sees** "Thank You" message

---

## 📁 Files Involved

| File | Purpose |
|------|---------|
| `google-apps-script.gs` | The script code you deploy to Google |
| `app/api/contact/route.ts` | Backend API that receives submissions |
| `.env.local` | Your Apps Script URL (secret) |
| `app/contact/page.tsx` | The form component users see |

---

## 🎓 Understanding the Setup

- **Google Apps Script**: A lightweight backend that runs in Google's cloud
- **Web App deployment**: Makes the script accessible via a public URL
- **Apps Script doPost()**: Function that receives POST requests (JSON data)
- **appendRow()**: Adds data as a new row in the Sheet
- **Why "Anyone"**: Allows requests from your website

---

## 📝 Your Google Form Link
https://docs.google.com/forms/d/e/1FAIpQLSepCuYqdkDHu0qqgumTGmxSABgNMLd_Xf37rh5yW9LZ_ICnLw/edit

## 💻 Your Website Form
http://localhost:3000/contact

---

## 🎯 Next Steps

After confirming integration works:

1. **Customize Sheet**: Add/remove columns as needed
2. **Enhance validation**: Add more checks in backend if needed
3. **Deploy to production**: Update `.env` with same Apps Script URL
4. **Share Sheet**: Give team members view/edit access to Sheet

---

## Need Extra Help?

**View stored submissions locally:**
```bash
curl http://localhost:3000/api/contact | jq .
```

**Check what error occurred:**
- Keep terminal with `npm run dev` running visible
- Submit form
- Look at terminal logs for detailed error messages

**Verify URL is set:**
```bash
cat .env.local | grep GOOGLE_APPS_SCRIPT
```
