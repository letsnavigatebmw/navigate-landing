# Navigate Landing Page

A high-performance React landing page for Navigate, the property intelligence platform for real estate professionals.

## Design Features

- **Dark Theme**: Sleek slate and purple color scheme
- **Responsive**: Mobile-first design
- **High Performance**: Built with Vite + React
- **Styled**: Tailwind CSS for rapid development
- **Icons**: Lucide React for consistent iconography

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## Setup & Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder.

## Deployment to Vercel

### Option 1: Connect GitHub (Recommended)
1. Push this repo to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import the GitHub repo
4. Vercel will auto-detect Vite and deploy

### Option 2: Deploy from CLI
```bash
npm install -g vercel
vercel
```

## DNS Configuration (GoHighLevel)

After deploying to Vercel:

1. You'll get a Vercel URL (e.g., `navigate-landing-xxxx.vercel.app`)
2. In GoHighLevel:
   - Go to DNS settings for `navigatenow.com`
   - Add a CNAME record:
     - **Name**: `get`
     - **Value**: `cname.vercel-dns.com.` (Vercel will provide the exact value)
   - Save and wait for DNS to propagate (~5-15 minutes)

3. Configure custom domain in Vercel dashboard:
   - Go to your project settings
   - Add custom domain: `get.navigatenow.com`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with form
│   ├── Pricing.jsx         # Pricing cards
│   ├── WhatYouGet.jsx      # Features grid
│   ├── TakeAction.jsx      # Two-column benefits
│   ├── SampleReport.jsx    # Sample report mockup
│   ├── Comparison.jsx      # Feature comparison table
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Customization

All sections are modular and easy to customize:

- **Colors**: Edit `tailwind.config.js` to change the purple/slate theme
- **Copy**: Update component text directly
- **Forms**: Hook up the Hero form submission to your backend
- **CTA Links**: Update button hrefs to your actual sign-up flow

## Key Sections

| Section | Purpose |
|---------|---------|
| Header | Navigation & pricing pills |
| Hero | Main CTA with email capture form |
| Pricing | Standard ($4.99) vs Comprehensive ($19.99) |
| Features | Grid of key benefits |
| Benefits | Two-column action items |
| Sample Report | Mockup of actual report format |
| Comparison | Feature comparison table |
| Footer | Links & branding |

## Next Steps

1. **Hook up form submission** - Connect Hero form to your email/CRM service
2. **Update testimonials** - Replace sample testimonial with real customer
3. **Add analytics** - Integrate with Google Analytics or similar
4. **SEO optimization** - Add meta tags, structured data
5. **Payment integration** - Connect Stripe or payment processor

## Support

For issues or customizations, reach out to your development team.

---

Built with ❤️ for Navigate
