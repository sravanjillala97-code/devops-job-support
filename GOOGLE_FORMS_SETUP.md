# Google Forms Integration Setup Guide

## Problem Identified
The contact form is successfully receiving submissions on the backend, but **Google Forms' formResponse endpoint rejects direct POST requests** (returns HTTP 400).

## Current Status
✅ **Local Storage**: Submissions are now stored on the backend
✅ **Form Submission**: Contact form sends data to `/api/contact`
✅ **Data Validation**: All fields are validated
⚠️ **Google Sheets**: Data not reaching Google Sheets (formResponse endpoint rejects submissions)

## Solutions

### Solution 1: Use Google Apps Script (RECOMMENDED)
This is the most reliable way to integrate with Google Forms/Sheets.

#### Steps:
1. Open your Google Sheet associated with the form
2. Go to **Tools → Script Editor**
3. Create a new script with this content:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add header row if empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Message']);
  }
  
  // Add the new response
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.message
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({success: true, message: 'Response recorded'})
  ).setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy → New Deployment**
5. Select type: **Web app**
6. Execute as: Your account
7. Who has access: **Anyone**
8. Click **Deploy** and copy the deployment URL

#### Update Backend API:
Replace the Google Forms URL with your Google Apps Script URL in `/api/contact/route.ts`:

```typescript
const webAppUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // e.g., https://script.google.com/macros/d/...
```

### Solution 2: Use Backend Database (CURRENTLY IMPLEMENTED)
The backend is already storing submissions in memory. To make this permanent:

1. Add a database like PostgreSQL, MongoDB, or Firebase
2. Submissions are captured and stored
3. Send daily digest emails to your inbox
4. Manual export to Google Sheets if needed

### Solution 3: Manual Webhook Integration
Update the backend to:
1. Store all submissions in a database
2. Send you email notifications
3. Provide an admin dashboard to view submissions

## Recommended Next Steps

1. **Set up Google Apps Script webhook** (Solution 1) - Takes 5 minutes
2. Update the backend to use the webhook URL
3. Test with new submissions

## Testing

To verify the setup:
```bash
# Test the contact form
curl -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"+12015551234","message":"Test message"}'

# Check stored submissions
curl "http://localhost:3000/api/contact"
```

## Files Modified
- `/app/api/contact/route.ts` - Backend API with local storage

## What's NOT Working Anymore
- Direct Google Forms formResponse submission (Google rejects it)
- Browser-based form submission to Google Forms

## What's Working
- Backend API receives and stores all submissions
- Form validation (phone format, required fields)
- Local storage of submissions
- Ready to integrate with Google Apps Script or database
