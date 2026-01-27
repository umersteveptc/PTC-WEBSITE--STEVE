# Property Tax Cutters Website

A modern, professional website for Property Tax Cutters built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section matching the design reference with left navy panel and right content blocks
- **About Page**: Company mission, values, and why choose us
- **Services Page**: Detailed service offerings and process
- **Contact Page**: Contact form and information
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Modern Design**: Clean typography, generous whitespace, and professional styling

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/              # Next.js App Router pages
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Home page
│   ├── about/       # About page
│   ├── services/    # Services page
│   └── contact/     # Contact page
├── components/      # React components
│   ├── Header.tsx   # Navigation header
│   ├── Footer.tsx   # Footer
│   ├── Hero.tsx     # Hero section
│   ├── Button.tsx   # Reusable button
│   ├── Card.tsx     # Reusable card
│   └── ContactForm.tsx # Contact form
└── lib/             # Utilities
    └── utils.ts     # Helper functions
```

## Design System

### Colors
- **Navy Blue**: `#213B6B` (primary background)
- **Gold**: `#D4AF37` (accent color)
- **White**: `#FFFFFF` (background and text on navy)
- **Dark Gray**: Text on white backgrounds

### Typography
- Font: Inter (Google Fonts)
- Weights: 400 (regular), 500 (medium), 700 (bold)

## License

Private - Property Tax Cutters
