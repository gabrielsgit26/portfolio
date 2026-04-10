# Gabriel - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Chakra UI, featuring full internationalization support for English, Japanese, and Chinese.

## 🌟 Features

### 🎨 Modern Design
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Beautiful UI**: Built with Chakra UI for consistent, accessible components
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Dark/Light Mode**: Automatic theme switching based on system preferences

### 🌍 Internationalization (i18n)
- **Multi-Language Support**: English, Japanese (日本語), and Chinese (中文)
- **Language Detection**: Automatic language detection based on browser settings
- **Language Switcher**: Easy language switching with flag icons
- **Localized Content**: All text content is properly translated
- **Persistent Language**: Language preference saved in localStorage

### 🚀 Technical Features
- **React 18**: Latest React features and hooks
- **TypeScript**: Full type safety and better development experience
- **Vite**: Fast build tool and development server
- **Chakra UI**: Modern component library with excellent accessibility
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Form handling with validation
- **React i18next**: Professional internationalization solution

## 🗣️ Supported Languages

| Language | Code | Native Name | Flag |
|----------|------|-------------|------|
| English | `en` | English | 🇺🇸 |
| Japanese | `ja` | 日本語 | 🇯🇵 |
| Chinese | `zh` | 中文 | 🇨🇳 |

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── GamesSection.tsx # Games showcase
│   ├── Hero.tsx        # Hero section
│   ├── LanguageSwitcher.tsx # Language selector
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── Reviews.tsx     # Client reviews
│   └── Skills.tsx      # Skills section
├── locales/            # Translation files
│   ├── en.json         # English translations
│   ├── ja.json         # Japanese translations
│   └── zh.json         # Chinese translations
├── i18n.ts             # i18n configuration
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── theme.ts            # Chakra UI theme
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Gabriel"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌍 Internationalization Setup

### Adding New Languages

1. **Create translation file** in `src/locales/`
   ```json
   {
     "nav": {
       "about": "About",
       "projects": "Projects"
     }
   }
   ```

2. **Update i18n configuration** in `src/i18n.ts`
   ```typescript
   import newLang from './locales/newLang.json'
   
   const resources = {
     // ... existing languages
     newLang: {
       translation: newLang
     }
   }
   ```

3. **Add language to LanguageSwitcher** in `src/components/LanguageSwitcher.tsx`
   ```typescript
   const languages = [
     // ... existing languages
     { code: 'newLang', name: t('language.newLang'), flag: '🏳️' }
   ]
   ```

### Translation Keys Structure

The translation system uses nested keys for organization:

```json
{
  "section": {
    "subsection": {
      "key": "value"
    }
  }
}
```

Example usage in components:
```typescript
const { t } = useTranslation()
const title = t('about.features.fullstack.title')
```

## 🎨 Customization

### Theme Customization
Edit `src/theme.ts` to customize colors, fonts, and other design tokens.

### Adding New Sections
1. Create new component in `src/components/`
2. Add to `src/App.tsx`
3. Add translations for all supported languages
4. Update navigation if needed

### Styling
- **Chakra UI**: Use Chakra's built-in props for styling
- **CSS-in-JS**: Custom styles with emotion
- **Responsive Design**: Use Chakra's responsive array syntax

## 📱 Responsive Breakpoints

- **Mobile**: `base` (0px+)
- **Tablet**: `md` (768px+)
- **Desktop**: `lg` (992px+)
- **Large Desktop**: `xl` (1280px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect the Vite project
3. Deploy automatically on push to main branch

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy automatically on push to main branch

### Other Platforms
The built files in the `dist/` directory can be deployed to any static hosting service.

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build test
npm run build
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add translations for all supported languages
5. Test thoroughly
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, please open an issue on GitHub or contact:
- **Email**: smartdev55ds@gmail.com
- **Telegram**: [@crypto_bester](https://t.me/crypto_bester)
- **Skype**: live:.cid.6352489640bed289

## 🙏 Acknowledgments

- **Chakra UI** for the excellent component library
- **Framer Motion** for smooth animations
- **React i18next** for internationalization
- **Vite** for fast development experience

---

**Made with ❤️ and ☕ by Gabriel**
