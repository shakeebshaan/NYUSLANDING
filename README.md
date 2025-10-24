# Seen - Credit Building Landing Page

A modern, production-ready landing page for Seen, a credit-building fintech application. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Optimized performance with smooth animations
- 📱 Mobile-first approach
- 🔄 Smooth scrolling animations and parallax effects
- 🎯 Production-ready build configuration
- ♿ Accessibility features
- 🚀 Fast loading times with code splitting

## Tech Stack

- **React 19** - Latest React version for optimal performance
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shakeebshaan/nyus_landing_page.git
cd nyus_landing_page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
nyus_landing_page/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── FeatureShowcase.tsx
│   ├── DynamicCards.tsx
│   └── ...
├── hooks/              # Custom React hooks
│   └── useOnScreen.ts
├── styles.css          # Global styles and Tailwind imports
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── vite.config.ts      # Vite configuration

```

## Key Improvements Made

### Performance Optimizations
- ✅ Implemented `requestAnimationFrame` for smooth scroll animations
- ✅ Code splitting with React vendor chunks
- ✅ Optimized image loading
- ✅ CSS minification and tree-shaking
- ✅ Production-ready Tailwind CSS setup

### Animation Enhancements
- ✅ Fixed scroll-triggered animations
- ✅ Smooth marquee animations for testimonials
- ✅ Parallax effects on hero section
- ✅ Optimized scrollytelling feature showcase

### Code Quality
- ✅ TypeScript for type safety
- ✅ Proper event listener cleanup
- ✅ Performance-focused scroll handlers
- ✅ Semantic HTML structure

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

The `dist` folder contains static files that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Firebase Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Metrics

The site is optimized for:
- Fast initial load time
- Smooth 60fps animations
- Minimal bundle size
- Efficient resource loading

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is proprietary software for Seen by Snap Finance.

## Contact

For questions or support, please contact the development team.
