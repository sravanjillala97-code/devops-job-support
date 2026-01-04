# DevOps Job Support Website - Quick Start Guide

## ✅ Contact Form Google Sheet Integration

Your contact form is set up and ready! Now connect it to your Google Sheet.

### Step 1: Create Google Apps Script (5 minutes)

1. Open your Google Sheet connected to the form
2. Click **Tools → Script Editor**
3. Copy-paste this code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSheet();
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Full Name', 'Email Address', 'Phone Number', 'Message']);
    }
    
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ]);
    
    return ContentService.createTextOutput(
      JSON.stringify({success: true, message: 'Response recorded'})
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({success: false, error: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy → New Deployment → Web app**
5. Execute as: Your account | Who has access: **Anyone**
6. Copy the deployment URL

### Step 2: Update Environment Variable

Create `.env.local` and add:
```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent
```

### Step 3: Restart Server

```bash
npm run dev
```

### Done! 🎉

Form submissions will now automatically appear in your Google Sheet.

---

## 🚀 Getting Started

The development server is currently running at:
- **Local**: http://localhost:3000
- Open this URL in your browser to see your website

## 📱 What Was Built

### Pages Created:
1. **Home Page** (/) - Complete landing page with:
   - Hero section with WhatsApp/Call CTAs
   - Services overview
   - How It Works section
   - Tools & Technologies
   - Pricing plans
   - Client testimonials
   - FAQ accordion
   - Contact CTA section

2. **Services Page** (/services) - Detailed service descriptions with typical issues

3. **Pricing Page** (/pricing) - Pricing tiers, comparison table, free consultation

4. **Contact Page** (/contact) - Contact form with WhatsApp/Phone/Email buttons

### Key Features:
✓ Fully responsive (mobile, tablet, desktop)
✓ Dark mode support
✓ Smooth scroll animations
✓ Active navbar section highlighting
✓ SEO optimized with metadata
✓ Accessible (ARIA labels, keyboard navigation)
✓ Professional SaaS design

## 🎨 How to Customize

### Step 1: Update Contact Information
Edit `src/content/site.ts`:

```typescript
contact: {
  whatsapp: "+1234567890",  // ⚠️ Replace with YOUR WhatsApp number
  phone: "+1234567890",      // ⚠️ Replace with YOUR phone
  email: "support@devopsjobsupport.com",  // ⚠️ Replace with YOUR email
}
```

### Step 2: Update Pricing
Edit `src/content/site.ts` under `pricing.tiers`:
- Change prices
- Modify features
- Update descriptions

### Step 3: Customize Colors
Edit `tailwind.config.ts`:
- Change `primary` colors (blue shades)
- Change `accent` colors (green shades)

### Step 4: Add/Remove Services
Edit `src/content/site.ts` under `services` array

### Step 5: Update Testimonials
Edit `src/content/site.ts` under `testimonials` array

## 📝 Important Next Steps

### 1. Update Contact Details (Required)
The current contact details are placeholders. Update them in `src/content/site.ts`:
- WhatsApp number
- Phone number
- Email address

### 2. Test All Features
- Click all navigation links
- Test contact form
- Try WhatsApp/Call buttons
- Check mobile responsiveness

### 3. Deploy to Production
When ready, deploy to Vercel:
```bash
# In the devops-job-support directory
git init
git add .
git commit -m "Initial commit"
# Push to GitHub
# Then deploy via vercel.com
```

## 🔧 Development Commands

```bash
# Development server (already running)
npm run dev

# Stop server: Press Ctrl+C in terminal

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## 📂 File Structure Overview

```
devops-job-support/
├── src/content/site.ts      ← EDIT THIS! (All website content)
├── app/
│   ├── page.tsx             ← Home page
│   ├── services/page.tsx    ← Services page
│   ├── pricing/page.tsx     ← Pricing page
│   └── contact/page.tsx     ← Contact page
├── src/components/
│   ├── ui/                  ← Reusable components
│   ├── layout/              ← Navbar & Footer
│   └── sections/            ← Page sections
└── tailwind.config.ts       ← Design customization
```

## 🎯 Quick Customization Examples

### Change Hero Headline
```typescript
// In src/content/site.ts
hero: {
  headline: "Your Custom Headline Here",
  subtext: "Your custom description",
}
```

### Add New FAQ
```typescript
// In src/content/site.ts, faqs array
{
  id: 9,
  question: "New question?",
  answer: "Your answer here.",
}
```

### Change Primary Color
```typescript
// In tailwind.config.ts
primary: {
  600: '#YOUR_COLOR_HEX',
}
```

## 🐛 Common Issues

### Port 3000 in use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then restart: npm run dev
```

### Changes not showing?
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

## 📞 Support Resources

- Full README: `/README.md`
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

## ✨ Final Checklist Before Launch

- [ ] Update contact information (WhatsApp, phone, email)
- [ ] Review and customize pricing
- [ ] Update testimonials with real ones
- [ ] Test on mobile devices
- [ ] Test all contact buttons
- [ ] Update metadata in `app/layout.tsx` with real domain
- [ ] Deploy to Vercel
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)

---

**Your website is live at:** http://localhost:3000

**Next Steps:**
1. Open http://localhost:3000 in your browser
2. Update `src/content/site.ts` with your real information
3. Customize colors and design as needed
4. Deploy to production when ready!

Happy building! 🚀
