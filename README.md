# S. Ramya — Portfolio

Modern full-stack developer portfolio built with React.

## 🎨 Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Teal Dark | `#133336` | Backgrounds, footer |
| Teal Mid | `#285F6B` | Gradients, borders |
| Teal Bright | `#367D8A` | Primary accent, links |
| Amber | `#FBBF24` | Secondary accent, highlights |
| Coral | `#E07B6A` | Tertiary accent |
| Navy Deep | `#0D1B2A` | Main background |

## 📁 Project Structure
```
ramya-portfolio/
├── public/
│   ├── index.html
│   └── photo.jpg          ← ⚠️ Add YOUR photo here
│
├── src/
│   ├── data/
│   │   └── content.js     ← ✏️ Edit ALL your info here
│   │
│   ├── hooks/
│   │   ├── useMagneticCursor.js
│   │   ├── useScrollReveal.js
│   │   └── useActiveSection.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── GlitchText.jsx
│   │   ├── GridBackground.jsx
│   │   ├── SectionLabel.jsx
│   │   ├── TechTicker.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx        ← Name, role, photo, stats
│   │   ├── About.jsx       ← Bio, education, career goal
│   │   ├── Skills.jsx      ← Tech logos (Python, Java, React...)
│   │   ├── Experience.jsx  ← ADVI + Livewire internships
│   │   ├── Projects.jsx    ← SMS Spam, Food App, Currency
│   │   └── Contact.jsx     ← Form + social links
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

## 🚀 Quick Start
```bash
npm install
npm start
```

## 📸 Adding Your Photo
1. Copy your photo to `public/photo.jpg`
2. The Hero section will display it automatically

## ✏️ Customize Content
Edit `src/data/content.js` to update:
- Personal info, email, social links
- About bio text
- Skills list
- Internship experience
- Projects (title, desc, tags, links)

## 🌐 Deploy to Vercel
```bash
npm run build
# Then drag the /build folder to vercel.com
# or: npx vercel --prod
```
