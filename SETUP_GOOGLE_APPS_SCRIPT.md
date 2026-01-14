# Google Apps Script for Contact Form

Create this script in your Google Sheet to receive submissions from your backend:

## Step 1: Open Your Google Sheet
1. Open the Google Sheet connected to your form at: https://docs.google.com/forms/d/e/1FAIpQLSepCuYqdkDHu0qqgumTGmxSABgNMLd_Xf37rh5yW9LZ_ICnLw/edit
2. Click **Tools → Script Editor** (or go to script.google.com)
3. Replace the default code with the script below
4. Click **Deploy → New Deployment → Select type "Web app"**
5. Execute as: Your account
6. Who has access: **Anyone**
7. **Copy the deployment URL** - you'll need this for your backend

## Step 2: Google Apps Script Code

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Full Name', 'Email Address', 'Phone Number', 'Message']);
    }
    
    // Append the new response
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Response recorded successfully',
        timestamp: new Date().toISOString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy the Script
1. Click **Deploy** button in top right
2. Select **New Deployment**
3. Choose **Web app** from the Type dropdown
4. Fill in:
   - Execute as: Your Google account
   - Who has access: **Anyone**
5. Click **Deploy**
6. Click **Copy** to copy the deployment URL
7. It will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent`

## Step 4: Update Backend API
Once you have the Google Apps Script URL, provide it to me and I'll update your backend to send submissions there instead of directly to Google Forms.

The URL will be in the format:
`https://script.google.com/macros/s/[SCRIPT_ID]/usercontent`

---

**After completing these steps, send me the Google Apps Script deployment URL, and I'll update your backend to use it.**
