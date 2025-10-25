# Portfolio Website

A modern, responsive portfolio website built with Angular 19 and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a frontend developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations and hover effects
- **Skills Showcase**: Animated progress bars for technical skills
- **Project Gallery**: Interactive project cards with live previews
- **Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Animation**: Custom loading screen with progress indicator

## 🛠️ Technologies Used

- **Angular 19**: Latest version of Angular framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **SCSS**: Enhanced CSS with variables and mixins
- **Angular CLI**: Development and build tools

## 📁 Project Structure

```
src/
├── app/
│   ├── about/           # About section component
│   ├── contact/         # Contact form component
│   ├── home/            # Hero section component
│   ├── portfolio/       # Main portfolio component
│   ├── projects/        # Projects showcase component
│   ├── skills/          # Skills section component
│   ├── loading-indicator/ # Loading screen component
│   ├── app.component.*  # Main app component
│   ├── app.routes.ts    # Routing configuration
│   └── app.config.ts    # App configuration
├── styles.scss          # Global styles and animations
└── index.html           # Main HTML file
```

## 🎨 Design Features

- **Color Scheme**: Purple, pink, and blue gradient theme
- **Typography**: Modern font stack with proper hierarchy
- **Animations**: CSS animations and transitions
- **Glassmorphism**: Frosted glass effects for modern look
- **Custom Scrollbar**: Styled scrollbar with gradient colors

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Sections

1. **Hero Section**: Introduction with animated background
2. **About**: Personal information and experience
3. **Skills**: Technical skills with progress indicators
4. **Projects**: Featured projects with interactive cards
5. **Contact**: Contact form and social media links

## 🎨 Customization

### Colors
Update the color scheme in `src/styles.scss`:
```scss
:root {
  --primary-color: #8b5cf6;
  --secondary-color: #ec4899;
  --accent-color: #06b6d4;
}
```

### Content
Update personal information in the respective component files:
- `src/app/home/home.component.html` - Hero section
- `src/app/about/about.component.html` - About section
- `src/app/skills/skills.component.html` - Skills section
- `src/app/projects/projects.component.html` - Projects section
- `src/app/contact/contact.component.html` - Contact section

## 🚀 Deployment

### Build for Production
```bash
ng build --configuration production
```

### Deploy to GitHub Pages
```bash
ng build --configuration production --base-href "https://yourusername.github.io/portfolio-website/"
npx angular-cli-ghpages --dir=dist/portfolio-website
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Name**: Pooja
- **Email**: pooja@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Made with ❤️ using Angular and Tailwind CSS