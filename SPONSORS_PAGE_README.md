# Sponsors Page - Agneepath 7.0

A minimalistic, professional sponsors catalogue page built with Next.js 16, Framer Motion animations, and shadcn/ui components.

## Features

- **Elegant Design**: Clean, minimalistic design with professional aesthetics
- **Smooth Animations**: Powered by Framer Motion with stagger effects, hover animations, and reveal effects
- **Responsive Layout**: Fully responsive grid system that adapts to different screen sizes
- **Tier System**: Organized sponsor categories (Title, Platinum, Gold, Silver, Bronze, Associate)
- **Interactive Cards**: Hover effects with scale, gradient overlays, and shine animations
- **Accessible**: Built with semantic HTML and proper ARIA attributes

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Components**: shadcn/ui (Card, Badge)
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## File Structure

```
ag-site/
├── app/
│   ├── sponsors/
│   │   ├── page.tsx          # Main sponsors page component
│   │   └── metadata.ts       # Page metadata
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── ui/
│       ├── card.tsx          # Card component
│       └── badge.tsx         # Badge component
└── lib/
    ├── utils.ts              # Utility functions (cn)
    └── sponsors-data.ts      # Sponsors data and types
```

## Customization

### Adding/Editing Sponsors

Edit the `lib/sponsors-data.ts` file to modify sponsor information:

```typescript
export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Your Company Name",
    tier: "Title",  // Title | Platinum | Gold | Silver | Bronze | Associate
    description: "Company description",
    industry: "Industry category",
    website: "https://example.com"  // Optional
  },
  // Add more sponsors...
];
```

### Modifying Tier Colors

Update tier colors in the `sponsorTiers` array in `lib/sponsors-data.ts`:

```typescript
export const sponsorTiers = [
  { 
    tier: "Title", 
    color: "from-purple-500 to-pink-500",  // Tailwind gradient classes
    description: "Primary Event Partner" 
  },
  // ...
];
```

### Styling

The page uses Tailwind CSS with custom CSS variables defined in `app/globals.css`. Modify these variables to change the color scheme:

- `--background`, `--foreground`: Main colors
- `--primary`, `--secondary`: Component colors
- `--border`, `--ring`: Border and focus styles

## Animations

The page features several animation effects:

1. **Page Load**: Hero section fades in with stagger effect
2. **Scroll Reveal**: Sections animate into view as you scroll
3. **Hover Effects**: Cards lift up and show gradient overlays
4. **Shine Effect**: Animated shine passes over cards on hover
5. **Progress Bars**: Animated underlines for tier headers

## Accessing the Page

Once the development server is running:

```bash
pnpm dev
```

Visit: `http://localhost:3000/sponsors`

## Production Build

```bash
pnpm build
pnpm start
```

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- External link indicators
- Keyboard navigation support
- ARIA attributes where needed
- High contrast color schemes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled for animations

## License

© 2026 Agneepath. All rights reserved.
