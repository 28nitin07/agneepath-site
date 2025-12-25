# Sponsors Page Setup Guide

This guide explains how to update sponsor logos and information on the sponsors page.

## Quick Overview

The sponsors page displays clickable cards with sponsor logos. Each card:
- Shows the sponsor's logo (or a placeholder icon if no logo)
- Is clickable and redirects to the sponsor's website
- Has hover animations (lift, scale, name overlay)

## File Structure

```
mainsite/
├── public/
│   └── sponsors/           # Place sponsor logos here
│       ├── sponsor1.png
│       ├── sponsor2.png
│       └── ...
├── lib/
│   └── sponsors-data.ts    # Sponsor data configuration
└── app/
    └── sponsors/
        └── page.tsx        # Sponsors page component
```

## Step 1: Prepare Sponsor Logos

### Logo Requirements
- **Format:** PNG, JPG, or SVG
- **Recommended Size:** 800x800px minimum (square)
- **Background:** Transparent or white (PNG recommended)
- **File Size:** Under 500KB each for optimal loading

### Logo Naming Convention
Use lowercase with hyphens:
- ✅ `red-bull.png`
- ✅ `nike-sports.png`
- ✅ `coca-cola.png`
- ❌ `Red Bull.png`
- ❌ `Nike_Sports.png`

## Step 2: Add Logos to Public Folder

1. Place all sponsor logos in `/public/sponsors/` directory:
   ```bash
   mkdir -p public/sponsors
   ```

2. Copy your logo files:
   ```bash
   cp /path/to/logos/*.png public/sponsors/
   ```

3. Verify files are in place:
   ```bash
   ls public/sponsors/
   ```

## Step 3: Update Sponsor Data

Edit `/lib/sponsors-data.ts` to add or update sponsor information:

```typescript
export const sponsors: Sponsor[] = [
  {
    id: "1",                              // Unique ID (increment for each)
    name: "Red Bull",                     // Sponsor name (shown on hover)
    logo: "/sponsors/red-bull.png",       // Path to logo file
    website: "https://www.redbull.com"    // Sponsor website URL
  },
  {
    id: "2",
    name: "Nike",
    logo: "/sponsors/nike-sports.png",
    website: "https://www.nike.com"
  },
  // Add more sponsors here...
];
```

### Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier (use sequential numbers: "1", "2", "3"...) |
| `name` | Yes | Sponsor name displayed on hover overlay |
| `logo` | No | Path to logo file in `/public/sponsors/`. If omitted, shows placeholder icon |
| `website` | No | URL to sponsor's website. If omitted, card won't be clickable |

## Step 4: Test Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/sponsors`

3. Verify:
   - ✅ All logos load correctly
   - ✅ Cards have hover animations
   - ✅ Clicking cards opens sponsor websites in new tab
   - ✅ Name overlays appear on hover

## Step 5: Build and Deploy

1. Build the production version:
   ```bash
   npm run build
   ```

2. Test the build:
   ```bash
   npm start
   ```

3. Deploy to server:
   ```bash
   git add .
   git commit -m "Update sponsors"
   git push origin main
   ```

   The CI/CD pipeline will automatically deploy to production.

## Common Issues & Solutions

### Issue: Logo Not Showing

**Symptoms:** Placeholder icon appears instead of logo

**Solutions:**
1. Check file path matches exactly in `sponsors-data.ts`
2. Verify file exists in `/public/sponsors/`
3. Check file extension (.png vs .jpg)
4. Clear browser cache and rebuild

### Issue: Logo Looks Blurry

**Solutions:**
1. Use higher resolution image (minimum 800x800px)
2. Ensure original logo is high quality
3. Use PNG format for better quality

### Issue: Logo Too Large/Small

**Solution:**
The card automatically scales logos with padding. If issues persist:
- Ensure logo has transparent background
- Logo should be square or nearly square aspect ratio
- Trim excess whitespace from image

### Issue: Card Not Clickable

**Solutions:**
1. Verify `website` field is filled in `sponsors-data.ts`
2. Ensure URL includes `https://` or `http://`
3. Check browser console for errors

## Advanced Customization

### Change Grid Layout

Edit `/app/sponsors/page.tsx` line 54:

```tsx
// Current: 1-4 columns responsive
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"

// More sponsors per row:
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"

// Fewer sponsors per row:
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
```

### Adjust Card Size

Edit `/app/sponsors/page.tsx` line 70:

```tsx
<div className="relative aspect-square ...">
```

Change `aspect-square` to:
- `aspect-video` - wider cards (16:9)
- `aspect-[4/3]` - slightly wider (4:3)
- Keep `aspect-square` - current square cards (1:1)

### Modify Animations

Edit `/app/sponsors/page.tsx` line 64:

```tsx
whileHover={{ y: -8, scale: 1.02 }}  // Lift up 8px, grow 2%
whileTap={{ scale: 0.98 }}            // Shrink 2% when clicked
```

Adjust values:
- Increase `y` (negative) for higher lift: `y: -12`
- Increase `scale` for more growth: `scale: 1.05`
- Remove for no animation

### Change Hover Overlay Color

Edit `/app/sponsors/page.tsx` line 95:

```tsx
// Current: Black with 60% opacity
className="... from-black/60 to-transparent ..."

// Change to other colors:
className="... from-blue-900/70 to-transparent ..."    // Blue
className="... from-gray-900/80 to-transparent ..."    // Darker gray
className="... from-white/90 to-transparent ..."       // White
```

## Example: Adding a New Sponsor

Let's add "Adidas" as a sponsor:

1. **Prepare logo:**
   - Save as `adidas.png` (800x800px, transparent background)

2. **Copy to public folder:**
   ```bash
   cp ~/Downloads/adidas.png public/sponsors/
   ```

3. **Add to sponsors-data.ts:**
   ```typescript
   {
     id: "13",
     name: "Adidas",
     logo: "/sponsors/adidas.png",
     website: "https://www.adidas.com"
   },
   ```

4. **Test:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/sponsors
   ```

5. **Deploy:**
   ```bash
   npm run build
   git add .
   git commit -m "Add Adidas sponsor"
   git push origin main
   ```

## Bulk Update Script

To update all sponsors at once, create a script:

```bash
#!/bin/bash
# update-sponsors.sh

# Copy all logos
cp sponsor-logos/*.png public/sponsors/

# Remind to update data
echo "✅ Logos copied to public/sponsors/"
echo "⚠️  Don't forget to update lib/sponsors-data.ts"
```

## Best Practices

1. **Consistency:** Use same image dimensions for all logos
2. **Optimization:** Compress images before uploading (use TinyPNG or ImageOptim)
3. **Backup:** Keep original high-res logos in a separate folder
4. **Testing:** Always test locally before deploying
5. **Version Control:** Commit logo files to Git (they're small enough)

## Contact

For technical issues, contact the development team or refer to:
- Main README: `/README.md`
- CI/CD Setup: `/documentation/CICD_SETUP.md`
