# Professional Portfolio SPA

A sophisticated, responsive single-page application built with React and Material-UI, showcasing professional skills, experience, and projects.

## 🌟 Features

- **Modern Design**: Clean, professional interface with nude/neutral color palette and technology accents
- **Dark/Light Mode**: Toggle between themes with automatic preference detection
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Interactive Elements**: Smooth animations, particle background, and engaging user interactions
- **Material-UI Components**: Consistent, accessible design system
- **Component Architecture**: Well-organized, reusable React components

## 🎨 Design Specifications

### Color Palette
- **Primary Nude Tones**: #E6D2C7, #D3BBA8, #C2A58A
- **Secondary Tech Accents**: #2D3142 (dark blue), #4F5D75 (slate)
- **Optional Accent**: #00A8E8 (tech blue)

### Typography
- **Headers**: Poppins (clean, modern sans-serif)
- **Body Text**: Roboto (readable, professional)

## 📱 Sections

1. **Hero/Home**: Professional headline with particle background and call-to-action
2. **About**: Professional summary and educational background
3. **Skills**: Technical proficiency with visual progress indicators
4. **Portfolio**: Featured projects with detailed modals
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
