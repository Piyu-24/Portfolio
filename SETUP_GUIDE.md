# 🚀 Portfolio Setup & Customization Guide

## Quick Start Checklist

### 1. ✅ Images to Add
Place these images in the specified locations:

**Profile Photo:**
- `public/profile-photo.jpg` - Your professional photo (recommended: square, min 800x800px)

**Project Images:**
- `public/projects/harvest.jpg` - HarvestSoftware project
- `public/projects/healthcare.jpg` - Healthcare Queue System
- `public/projects/gomate.jpg` - GoMate Travel App
- `public/projects/vehicle-rental.jpg` - Vehicle Rental Web
- `public/projects/novanex.jpg` - NovaNex Embedded System

### 2. 🔗 Links to Update

**Resume Link** (`src/sections/Home.tsx` - Line 78)
```tsx
href="https://drive.google.com/your-resume-link"  // Replace with your Google Drive link
```

**GitHub Username** (Multiple files - search for "Piyu-24")
- `src/sections/Home.tsx`
- `src/sections/Projects.tsx`
- `src/sections/Contact.tsx`
- `src/components/SocialLinks.tsx`

**LinkedIn URL** (Multiple files - search for "piyumi-upeksha")
- Update with your actual LinkedIn username

**Project GitHub/Demo Links** (`src/data/projects.ts`)
```tsx
github: "#",      // Replace with actual GitHub repo URL
liveDemo: "#",    // Replace with actual live demo URL or remove if N/A
```

### 3. 📝 Content to Customize

**About Section** (`src/sections/About.tsx`)
- Profile summary text (lines 72-84)
- Academic timeline details
- Qualities and attributes

**Projects** (`src/data/projects.ts`)
- Update project descriptions
- Add/remove contributions
- Update technology stacks
- Add actual GitHub repo links
- Add live demo URLs

**Achievements** (`src/data/achievements.ts`)
- Update with your actual achievements
- Add more competitions/awards
- Update years and positions

**Contact Information** (`src/sections/Contact.tsx`)
- Email: upekshabbc@gmail.com (update if needed)
- Phone: +94 704520551 (update if needed)
- Location: Moratuwa, Sri Lanka (update if needed)

### 4. 🎨 Theme Customization

**Accent Color** (`tailwind.config.js`)
Current: Dark Blue (#0066cc)

To change the accent color, update the `accent` color palette:
```js
colors: {
  accent: {
    50: '#e6f1ff',   // Lightest shade
    500: '#0066cc',  // Main color - CHANGE THIS
    900: '#001429',  // Darkest shade
  },
}
```

**Alternative Color Suggestions:**
- Yellow: #F59E0B
- Purple: #7C3AED
- Dark Blue: #0066cc (current)

### 5. 🏃 Run the Project

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm start

# Build for production
npm run build
```

### 6. 📱 Test Responsiveness

After starting the dev server, test on:
- Mobile (320px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px+)

### 7. 🌐 Deployment Options

**Vercel (Recommended - Easiest)**
```bash
npm install -g vercel
vercel
```

**Netlify**
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `build`

**GitHub Pages**
```bash
npm install --save-dev gh-pages
```
Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run: `npm run deploy`

## 🎯 Important Files Reference

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main app component, combines all sections |
| `src/sections/Home.tsx` | Hero section with name & photo |
| `src/sections/About.tsx` | About, timeline, skills |
| `src/sections/Projects.tsx` | Projects grid |
| `src/sections/Achievements.tsx` | Awards & achievements |
| `src/sections/Contact.tsx` | Contact form & info |
| `src/data/projects.ts` | Project data array |
| `src/data/achievements.ts` | Achievement data array |
| `tailwind.config.js` | Theme & colors |
| `src/index.css` | Global styles |

## 🐛 Common Issues

**Issue: Images not showing**
- Ensure images are in `public/` folder
- File names match exactly (case-sensitive)
- Check image formats (jpg, png, webp)

**Issue: TypeScript errors**
- Run: `npm install`
- Check tsconfig.json exists
- Restart VS Code

**Issue: Tailwind not working**
- Ensure postcss.config.js exists
- Ensure tailwind.config.js exists
- Check index.css has @tailwind directives
- Restart dev server

**Issue: Build fails**
- Fix all TypeScript errors
- Remove unused imports
- Check all file paths are correct

## ✨ Enhancement Ideas

1. **Add Blog Section**: Create a blog with Medium/Dev.to integration
2. **Add Testimonials**: Include recommendations from colleagues
3. **Add Resume Timeline**: Visual resume with downloadable PDF
4. **Add Skills Progress Bars**: Animated skill level indicators
5. **Add Project Filters**: Filter projects by technology
6. **Add Dark Mode**: Implement theme toggle
7. **Add Analytics**: Google Analytics or Plausible
8. **Add Contact Form Backend**: Integrate with EmailJS or Formspree

## 📧 Need Help?

If you encounter any issues:
1. Check this guide first
2. Review error messages in console
3. Check browser DevTools
4. Search GitHub issues for similar problems

---

Good luck with your portfolio! 🚀
