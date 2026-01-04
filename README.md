# DevOps Job Support Website

A modern, professional, high-converting website built with Next.js, TypeScript, and Tailwind CSS for a DevOps job support service. This website helps DevOps engineers, cloud engineers, and freshers get real-time expert help with CI/CD, Kubernetes, Terraform, cloud deployments, and more.

## 🚀 Features

- **Modern Design**: Clean, professional SaaS-style design with smooth animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Built-in metadata, OpenGraph tags, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and high contrast ratios
- **Performance**: Optimized with Next.js App Router and server components
- **Easy to Customize**: All content centralized in a single configuration file

## 📋 Pages

1. **Home (Landing Page)**
   - Hero section with strong CTA
   - Trust signals and benefits
   - Services overview
   - How it works process
   - Tools and technologies
   - Pricing plans
   - Client testimonials
   - FAQ accordion
   - Final CTA section

2. **Services Page**
   - Detailed service descriptions
   - Typical issues solved
   - CTAs for each service

3. **Pricing Page**
   - Three pricing tiers
   - Comparison table
   - Free consultation section

4. **Contact Page**
   - Multiple contact methods
   - Contact form with validation
   - WhatsApp/Phone/Email buttons

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd devops-job-support
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customizing Content

All website content is centralized in one file for easy editing:

**File**: `src/content/site.ts`

### What You Can Edit:

1. **Site Information**
   ```typescript
   name: "Your Service Name"
   description: "Your description"
   tagline: "Your tagline"
   ```

2. **Contact Details**
   ```typescript
   contact: {
     whatsapp: "+1234567890",  // Replace with your WhatsApp number
     phone: "+1234567890",      // Replace with your phone
     email: "your@email.com",   // Replace with your email
   }
   ```

3. **Hero Section**
   - Update headline and subtext
   - Modify CTA button text

4. **Services**
   - Add/remove services
   - Update descriptions and details
   - Modify typical issues list

5. **Pricing**
   - Change pricing tiers
   - Update features and prices
   - Modify disclaimers

6. **Testimonials**
   - Add/remove testimonials
   - Update names, roles, and content

7. **FAQs**
   - Add new questions
   - Update existing answers

### Example: Changing Contact Info

```typescript
// In src/content/site.ts
contact: {
  whatsapp: "+919876543210",  // Your actual WhatsApp number
  phone: "+919876543210",      // Your phone number
  email: "support@yourcompany.com",  // Your email
  telegram: "yourtelegram",    // Your Telegram handle
},
```

## 🎨 Customizing Design

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Blue shades - change these hex codes
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  accent: {
    // Green shades - change these hex codes
    500: '#22c55e',
    600: '#16a34a',
  }
}
```

### Fonts

Change the font in `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

   That's it! Vercel will automatically detect Next.js and configure everything.

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### Other Hosting

For other platforms (AWS, DigitalOcean, etc.):

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📁 Project Structure

```
devops-job-support/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── src/
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── layout/        # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/      # Page sections
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Tools.tsx
│   │       ├── Pricing.tsx
│   │       ├── Testimonials.tsx
│   │       ├── FAQ.tsx
│   │       └── CTA.tsx
│   └── content/
│       └── site.ts        # All website content (EDIT THIS!)
├── public/                # Static files
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🔧 Common Customizations

### Adding a New Service

Edit `src/content/site.ts`:

```typescript
services: [
  // ... existing services
  {
    id: "new-service",
    title: "New Service Name",
    description: "Service description",
    icon: "icon-name", // lucide-react icon name
    details: [
      "Detail 1",
      "Detail 2",
    ],
    typicalIssues: [
      "Issue 1",
      "Issue 2",
    ],
  },
]
```

### Adding a New Testimonial

Edit `src/content/site.ts`:

```typescript
testimonials: [
  // ... existing testimonials
  {
    id: 7,
    name: "Client Name",
    role: "Job Title at Company",
    content: "Testimonial text here...",
    rating: 5,
    avatar: "CN", // Initials
  },
]
```

### Adding a New FAQ

Edit `src/content/site.ts`:

```typescript
faqs: [
  // ... existing FAQs
  {
    id: 9,
    question: "Your question?",
    answer: "Your detailed answer here.",
  },
]
```

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### TypeScript errors

```bash
# Check for errors
npx tsc --noEmit

# If you see errors, check the file paths in imports
```

### Styling not working

```bash
# Clear Next.js cache and restart
rm -rf .next
npm run dev
```

## 📞 Support

If you need help customizing or deploying this website:

- Review the code comments for guidance
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available for personal and commercial use.

## 🎯 SEO Tips

1. **Update metadata** in `app/layout.tsx` with your actual domain
2. **Add Google Analytics** by including the script in `app/layout.tsx`
3. **Create a sitemap** using Next.js sitemap generation
4. **Add robots.txt** in the `public` folder
5. **Optimize images** by using Next.js Image component
6. **Add schema markup** for better search results

## 🔐 Security Notes

- Never commit sensitive data (API keys, passwords)
- Use environment variables for sensitive config
- Keep dependencies updated: `npm audit fix`

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
