# 🚀 Gayani | Portfolio Website

A modern, animated 2026-style personal portfolio built with React, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Animated custom cursor** with smooth trailing effect
- **Page transitions** with Framer Motion (AnimatePresence)
- **React Router** for client-side routing (5 pages)
- **Typing animation** on the hero section
- **Morphing profile image** with orbit effect
- **Scroll-triggered animations** using react-intersection-observer
- **Animated skill bars** that fill on scroll
- **Project filter** (All / Client / Personal)
- **Contact form** (ready for FormSpree or EmailJS)
- **Fully responsive** (mobile + desktop)
- **Vercel ready** with `vercel.json` SPA rewrites

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx          ← Custom animated cursor
│   │   ├── Navbar.jsx          ← Sticky nav with active indicator
│   │   ├── Footer.jsx
│   │   ├── PageTransition.jsx  ← Route transition wrapper
│   │   └── SectionHeading.jsx  ← Reusable section titles
│   ├── pages/
│   │   ├── Home.jsx            ← Hero with profile animation
│   │   ├── About.jsx           ← Timeline experience & education
│   │   ├── Skills.jsx          ← Animated skill bars
│   │   ├── Projects.jsx        ← Filterable project cards
│   │   └── Contact.jsx         ← Contact form + info
│   ├── App.jsx                 ← Router + layout
│   ├── main.jsx
│   └── index.css               ← Tailwind + custom animations
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json                 ← Vercel SPA routing
```

---

## 🛠️ Setup & Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

---

## 🌐 Deploy to Vercel

### Option A – Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

### Option B – GitHub + Vercel Dashboard

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**

3. Import your GitHub repo

4. Vercel auto-detects Vite settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Click **Deploy** ✅

> The `vercel.json` file handles SPA routing so React Router works correctly.

---

## 🎨 Customization

### Add Your Real Photo
Replace the emoji in `Home.jsx` and `About.jsx`:
```jsx
// In Home.jsx, replace the emoji div with:
<img src="/your-photo.jpg" alt="Rasanga" className="w-full h-full object-cover" />
```
Place your image in the `/public` folder.

### Update Contact Links
Edit `Footer.jsx` and `Contact.jsx` with your real GitHub, LinkedIn, and email links.

### Make Contact Form Work
Use [FormSpree](https://formspree.io) (free):
1. Create account → New Form → get your endpoint
2. Replace `handleSubmit` in `Contact.jsx`:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })
  if (res.ok) setStatus('sent')
}
```

### Update CV Download
Place your CV PDF in the `/public` folder as `Rasanga_CV.pdf`

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^18 | UI library |
| react-router-dom | ^6 | Client-side routing |
| framer-motion | ^11 | Animations |
| react-type-animation | ^3 | Typing effect |
| react-intersection-observer | ^9 | Scroll triggers |
| lucide-react | ^0.263 | Icons |
| tailwindcss | ^3.4 | Styling |
| vite | ^5 | Build tool |

---

## 📝 License

MIT — Free to use and customize.
