# Portfolio Website - Fidel Iranzi

A professional, modern portfolio website showcasing web development and mobile app development projects. Built with TypeScript, featuring advanced animations, dark mode, and downloadable resume.

## ✨ Features

- **TypeScript Powered**: Type-safe, maintainable codebase
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Particle Animation**: Dynamic background particle system in hero section
- **Typing Animation**: Automated role cycling with typing effect
- **Downloadable Resume**: Generate and download professional resume as PDF
- **Scroll Animations**: Smooth scroll-triggered animations using Intersection Observer
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with advanced animations
- **Project Showcase**: Highlighting key projects with hover effects and stats
- **Skills Section**: Comprehensive display of technical skills and technologies
- **Contact Information**: Easy-to-access contact details with email and WhatsApp links
- **Back to Top**: Smooth scroll-to-top button
- **Loading Screen**: Professional loading animation

## 🚀 Technologies Used

- **TypeScript** - Type-safe JavaScript
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - No framework dependencies
- **Canvas API** - Particle system animation
- **Intersection Observer API** - Scroll animations
- **Font Awesome** - Icon library
- **Animate.css** - CSS animation library

## Projects Featured

1. **Rwanda Digital Solutions** - Web applications for Rwanda's digital transformation
2. **SpplyPlus** - Frontend development for e-commerce platform
3. **Agriculture Management System** - Tracking system for crops, sales, and farm inputs
4. **Virtual Assistant Toolkit** - Productivity tools with scheduling and email handling

## 🛠️ Setup & Development

### Quick Start (No Build Required)
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Everything is ready to use!

### Development Setup (For TypeScript editing)
1. Install dependencies:
   ```bash
   npm install
   ```

2. Watch TypeScript files for changes:
   ```bash
   npm run watch
   ```

3. Build production files:
   ```bash
   npm run build && npm run compile
   ```

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # Enhanced stylesheet with dark mode
├── app.js              # Compiled main application
├── particles.js        # Particle animation system
├── theme.js            # Dark/light theme manager
├── typing.js           # Typing animation effect
├── resume.js           # Resume generator
├── animations.js       # Scroll animation controller
├── src/                # TypeScript source files
│   ├── app.ts
│   ├── particles.ts
│   ├── theme.ts
│   ├── typing.ts
│   ├── resume.ts
│   └── animations.ts
├── dist/               # Compiled JavaScript (generated)
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
├── compile.js          # Build script
└── README.md           # Documentation
```

## 🎨 Customization

### Colors & Theme
- Light mode colors: Modify CSS `:root` variables in `styles.css`
- Dark mode colors: Modify `[data-theme="dark"]` variables in `styles.css`
- Gradient backgrounds: Update gradient values in hero section

### Content
- **Contact Info**: Update email and phone in `index.html` and `src/resume.ts`
- **Projects**: Add/edit projects in the projects section
- **Skills**: Update skills in the skills section
- **Resume**: Customize resume content in `src/resume.ts`
- **Typing Text**: Edit text array in `src/typing.ts`

### Animations
- **Particle Count**: Adjust `particleCount` in `src/particles.ts`
- **Typing Speed**: Modify speeds in `src/typing.ts`
- **Animation Timing**: Update delays in `index.html` data-aos attributes

## 🌟 Key Features Explained

### Dark Mode
- Automatically persists user preference using localStorage
- Smooth color transitions between themes
- Custom dark theme with adjusted colors for readability

### Particle System
- Canvas-based particle animation
- Particles connect when close to each other
- Responsive to window resizing
- Optimized performance with requestAnimationFrame

### Resume Generator
- Generates formatted HTML resume
- Opens in print dialog for PDF export
- Includes all projects, skills, and contact information
- Professional layout optimized for printing

### Scroll Animations
- Intersection Observer for performance
- Staggered animations for multiple elements
- Parallax effects on project images
- Counter animations for stats

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

- **Email**: fideliranzii@gmail.com
- **WhatsApp**: +250 785 139 833

---

Built with passion in Rwanda 🇷🇼
