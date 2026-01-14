// Google Apps Script - Deploy as Web App
// This script receives form submissions and adds them to your Google Sheet

function doPost(e) {
  try {
    Logger.log('📨 Received POST request');
    
    // Parse incoming JSON data
    const data = JSON.parse(e.postData.contents);
    Logger.log('📦 Parsed data: ' + JSON.stringify(data));
    
    // Use the spreadsheet that this script is bound to
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log('✅ Spreadsheet opened (bound to script)');
    
    const sheet = spreadsheet.getActiveSheet();
    Logger.log('✅ Sheet retrieved: ' + sheet.getName());
    
    // Create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      Logger.log('📝 Creating header row');
      sheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email Address',
        'Phone Number',
        'Message',
        'Submission ID'
      ]);
    }
    
    // Append new response row
    Logger.log('📝 Appending data row');
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || '',
      data.submissionId || ''
    ]);
    
    Logger.log('✅ Row appended successfully');
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Response recorded successfully in Google Sheet',
        timestamp: new Date().toISOString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error
    Logger.log('❌ ERROR: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
        stack: error.stack,
        timestamp: new Date().toISOString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to test locally in Apps Script
function testDoPost() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+12015551234",
    message: "This is a test message",
    submissionId: "test-" + Date.now()
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const response = doPost(e);
  Logger.log('Test Response: ' + response.getContent());
  return response.getContent();
}
