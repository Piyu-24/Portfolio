# Piyumi Upeksha - Portfolio

A modern, professional portfolio website built with React, TypeScript, and TailwindCSS.

## 🎨 Design Features

- **Clean & Minimal**: Professional design with grayscale palette and dark blue accent color (#0066cc)
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Modern UI**: TailwindCSS utility classes for consistent styling
- **Type-Safe**: Built with TypeScript for robust code

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── AchievementBadge.tsx
│   └── SocialLinks.tsx
├── sections/            # Page sections
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx
│   └── Contact.tsx
├── data/                # Data files
│   ├── projects.ts
│   └── achievements.ts
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🛠️ Setup Instructions

1. **Install dependencies**
```bash
npm install
```

2. **Add your images**
   - Add your profile photo as `public/profile-photo.jpg`
   - Add project images in `public/projects/` folder:
     - `harvest.jpg`
     - `healthcare.jpg`
     - `gomate.jpg`
     - `vehicle-rental.jpg`
     - `novanex.jpg`

3. **Update personal information**
   - Update resume link in `src/sections/Home.tsx`
   - Update GitHub username in social links
   - Update LinkedIn URL in social links
   - Customize project details in `src/data/projects.ts`
   - Customize achievements in `src/data/achievements.ts`

4. **Start development server**
```bash
npm start
```

5. **Build for production**
```bash
npm run build
```

## 📝 Customization Guide

### Colors
The accent color is set to dark blue (#0066cc). To change it, update the `accent` color palette in `tailwind.config.js`.

### Sections
All sections are modular and can be easily modified:
- **Home**: Hero section with name, tagline, and CTA buttons
- **About**: Profile summary, academic journey, qualities, and skills
- **Projects**: Grid of project cards with hover effects
- **Achievements**: Competition awards and recognition
- **Contact**: Contact form and information
5. **Experience**: Professional timeline and achievements
6. **Achievements**: Awards, recognitions, and statistics
7. **Contact**: Contact form and information

## 🚀 Technologies Used

- **Frontend**: React 19.x with functional components and hooks
- **UI Framework**: Material-UI (MUI) v7.x
- **Styling**: Emotion (CSS-in-JS)
- **Animations**: MUI transitions and custom animations
- **Particles**: react-tsparticles for interactive background
- **Icons**: Material-UI Icons
- **Build Tool**: React Scripts

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-spa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js          # Fixed navigation bar
│   └── sections/
│       ├── Hero.js           # Hero section with particles
│       ├── About.js          # About section
│       ├── Skills.js         # Skills showcase
│       ├── Portfolio.js      # Projects portfolio
│       ├── Experience.js     # Professional experience
│       ├── Achievements.js   # Awards and recognitions
│       └── Contact.js        # Contact form and info
├── theme/
│   └── theme.js             # Material-UI theme configuration
├── assets/
│   └── images/              # Image assets
├── App.js                   # Main application component
└── index.js                 # Application entry point
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Flexible grid system
- Optimized for all screen sizes

### Interactive Elements
- Smooth scroll navigation
- Hover animations
- Loading transitions
- Particle background effects

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support

### Performance
- Optimized bundle size
- Lazy loading where applicable
- Efficient re-rendering
- Modern React patterns

## 🔧 Customization

### Adding Your Information
1. **Personal Details**: Update contact information in `Contact.js`
2. **Professional Summary**: Modify content in `About.js`
3. **Skills**: Add your technical skills in `Skills.js`
4. **Projects**: Replace project data in `Portfolio.js`
5. **Experience**: Update timeline in `Experience.js`
6. **Photo**: Add your profile image to `assets/images/`

### Theme Customization
- Colors: Modify palette in `theme/theme.js`
- Typography: Adjust font families and sizes
- Spacing: Update MUI spacing values
- Breakpoints: Modify responsive breakpoints

### Content Updates
- Replace placeholder text with your information
- Add real project images and links
- Update social media links
- Customize achievement data

## 📧 Contact Integration

The contact form is ready for integration with:
- Email services (EmailJS, Formspree)
- Backend APIs
- Serverless functions

## 🌐 Deployment

Ready for deployment on:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support or questions, please open an issue or contact through the portfolio contact form.

---

**Built with ❤️ using React and Material-UI**
