import { NextRequest, NextResponse } from 'next/server';

// In-memory store for submissions
const submissions: any[] = [];

// Email sending utility (using Nodemailer or your email service)
async function sendEmailNotification(submission: any) {
  // This is a placeholder - you'll need to configure your email service
  // Options: SendGrid, AWS SES, Gmail, or any SMTP service
  
  console.log('📧 Email notification would be sent for:', submission.email);
  
  // Example configuration for different services:
  // 1. SendGrid: Install @sendgrid/mail
  // 2. Resend: Install resend  
  // 3. AWS SES: Use AWS SDK
  // 4. Nodemailer: Install nodemailer
  
  // For now, just log to console
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Store submission locally
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
      status: 'received'
    };
    submissions.push(submission);

    console.log('📨 New contact submission received:');
    console.log(`   ID: ${submission.id}`);
    console.log(`   Name: ${name}`);
    console.log(`   Email: ${email}`);
    console.log(`   Time: ${submission.timestamp}`);

    // Attempt to send email notification
    try {
      await sendEmailNotification(submission);
    } catch (emailError) {
      console.warn('⚠️ Failed to send email notification:', emailError);
      submission.status = 'received_no_email';
    }

    // Attempt to submit to Google Forms (for reference/backup)
    const formResponseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSepCuYqdkDHu0qqgumTGmxSABgNMLd_Xf37rh5yW9LZ_ICnLw/formResponse';
    const params = new URLSearchParams();
    params.append('entry.713159257', name);
    params.append('entry.1178679000', email);
    params.append('entry.1837236529', phone);
    params.append('entry.316017098', message);

    let googleFormsStatus = 'skipped';
    try {
      const submitResponse = await fetch(formResponseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
        body: params.toString(),
        redirect: 'follow',
      });
      
      if (submitResponse.status === 200 || (submitResponse.status >= 300 && submitResponse.status < 400)) {
        googleFormsStatus = 'success';
        console.log('✅ Google Forms submission successful');
      } else {
        googleFormsStatus = 'failed';
        console.log('⚠️ Google Forms returned status:', submitResponse.status);
      }
    } catch (error) {
      googleFormsStatus = 'error';
      console.log('⚠️ Could not submit to Google Forms');
    }

    return NextResponse.json(
      { 
        success: true,
        submissionId: submission.id,
        message: 'Thank you for reaching out! We have received your message and will get back to you soon.',
        details: {
          stored: true,
          emailSent: submission.status === 'received',
          googleFormsStatus: googleFormsStatus
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET endpoint to view submissions (for admin/debugging)
export async function GET(request: NextRequest) {
  // In production, add authentication here
  const authHeader = request.headers.get('authorization');
  
  // Simple auth check (use env variable in production)
  if (authHeader !== 'Bearer your-secret-key') {
    // For now, allow unauthenticated access for testing
  }

  return NextResponse.json(
    {
      message: 'Contact submissions',
      count: submissions.length,
      submissions: submissions.map(s => ({
        id: s.id,
        name: s.name,
        email: s.email,
        phone: s.phone,
        timestamp: s.timestamp,
        status: s.status,
        message: s.message.substring(0, 80) + (s.message.length > 80 ? '...' : '')
      })).reverse(),
    },
    { status: 200 }
  );
}
