import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory store for submissions (optional, for fallback)
const submissions: any[] = [];

// Email configuration - must be set in environment
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || '';
const SMTP_HOST = process.env.SMTP_HOST || '';
const SMTP_PORT = process.env.SMTP_PORT || '587';
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';

// Create email transporter
let transporter: any = null;

if (SMTP_HOST && SMTP_USER && SMTP_PASSWORD && RECIPIENT_EMAIL) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT),
    secure: SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields: name, email, phone, message',
          receivedFields: { name: !!name, email: !!email, phone: !!phone, message: !!message }
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (should start with +)
    if (!phone.startsWith('+')) {
      return NextResponse.json(
        { success: false, error: 'Phone must include country code (e.g., +1234567890)' },
        { status: 400 }
      );
    }

    // Create submission object with unique ID
    const submission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Store locally as backup immediately
    submissions.push(submission);
    console.log(`💾 Submission stored locally: ${submission.id}`);

    // Return success immediately to frontend
    // Backend will handle email sending asynchronously
    const immediateResponse = NextResponse.json(
      {
        success: true,
        submissionId: submission.id,
        message: 'Thank you! Your message has been received.',
      },
      { status: 200 }
    );

    // Send email asynchronously (non-blocking)
    if (transporter && RECIPIENT_EMAIL) {
      // Fire and forget - don't wait for response
      (async () => {
        try {
          console.log(`📧 Sending email notification: ${submission.id}`);
          
          const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
    }
    .content {
      padding: 30px;
    }
    .content p {
      margin: 0 0 20px 0;
      color: #666;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      background-color: #f9f9f9;
    }
    table th {
      background-color: #667eea;
      color: white;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      border: 1px solid #ddd;
    }
    table td {
      padding: 12px;
      border: 1px solid #ddd;
    }
    table tr:nth-child(even) {
      background-color: #f0f0f0;
    }
    table tr:hover {
      background-color: #e8e8e8;
    }
    .label {
      font-weight: 600;
      color: #333;
      width: 150px;
      background-color: #f0f0f0;
    }
    .message-box {
      background-color: #f0f7ff;
      border-left: 4px solid #667eea;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      background-color: #f9f9f9;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #ddd;
      font-size: 12px;
      color: #999;
    }
    .submission-id {
      background-color: #e8f5e9;
      padding: 10px;
      border-radius: 4px;
      font-family: monospace;
      margin: 10px 0;
    }
    .reply-note {
      background-color: #fff3cd;
      border: 1px solid #ffc107;
      padding: 12px;
      border-radius: 4px;
      margin: 15px 0;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 New Contact Form Submission</h1>
    </div>
    
    <div class="content">
      <p>You have received a new message from your contact form. Here are the details:</p>
      
      <table>
        <tr>
          <th colspan="2">Contact Information</th>
        </tr>
        <tr>
          <td class="label">Full Name</td>
          <td>${submission.name}</td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td><a href="mailto:${submission.email}">${submission.email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td><a href="tel:${submission.phone}">${submission.phone}</a></td>
        </tr>
        <tr>
          <td class="label">Submission Date</td>
          <td>${new Date(submission.timestamp).toLocaleString()}</td>
        </tr>
      </table>
      
      <h3 style="margin-top: 25px; margin-bottom: 10px; color: #667eea;">Message</h3>
      <div class="message-box">${submission.message}</div>
      
      <div class="reply-note">
        ✉️ To reply directly, use the email address: <strong>${submission.email}</strong>
      </div>
      
      <div class="submission-id">
        <strong>Submission ID:</strong> ${submission.id}
      </div>
    </div>
    
    <div class="footer">
      <p>This is an automated email from your contact form. Please do not reply to this email.</p>
      <p style="margin: 10px 0 0 0; font-size: 11px;">Generated on ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
          `;

          await transporter.sendMail({
            from: SMTP_USER,
            to: RECIPIENT_EMAIL,
            subject: `New Contact Form Submission from ${submission.name}`,
            html: emailContent,
            replyTo: submission.email,
          });

          console.log(`✅ Email sent successfully: ${submission.id}`);
        } catch (error) {
          console.error(`⚠️ Failed to send email: ${error}`);
        }
      })();
    } else {
      console.log('ℹ️ Email configuration not complete. Please set RECIPIENT_EMAIL, SMTP_HOST, SMTP_USER, and SMTP_PASSWORD.');
    }

    return immediateResponse;
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to process form submission. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// GET endpoint - retrieve stored submissions (admin use)
export async function GET(request: NextRequest) {
  // Optional: Add authentication check here in production
  return NextResponse.json(
    {
      message: 'Contact submissions',
      count: submissions.length,
      googleAppsScriptConfigured: !!GOOGLE_APPS_SCRIPT_URL,
      submissions: submissions
        .map(s => ({
          id: s.id,
          name: s.name,
          email: s.email,
          phone: s.phone,
          timestamp: s.timestamp,
          messagePreview: s.message.substring(0, 80) + (s.message.length > 80 ? '...' : '')
        }))
        .reverse()
        .slice(0, 50), // Return last 50
    },
    { status: 200 }
  );
}



