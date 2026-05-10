# Gemvie Franco — Portfolio

Personal portfolio site for Gemvie Frank Franco, eCommerce Data Specialist.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v3** (styling)
- **Framer Motion** (animations)
- **Recharts** (SEO chart)
- **Lucide React** (icons)

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add your card images

Copy your two card image files into `src/assets/`:

```
src/assets/card-front.png   ← the front of the DK Metcalf card
src/assets/card-back.png    ← the back of the DK Metcalf card
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy on Vercel, Netlify, or any static host.

---

## File Structure

```
gemvie-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.ts
├── postcss.config.js
└── src/
    ├── main.tsx            ← entry point
    ├── App.tsx             ← root component, section order
    ├── index.css           ← design tokens + global styles
    ├── assets/
    │   ├── card-front.png  ← ⚠️  YOU MUST ADD THIS
    │   └── card-back.png   ← ⚠️  YOU MUST ADD THIS
    └── components/
        ├── Section.tsx     ← FadeIn animation wrapper
        ├── Nav.tsx
        ├── Hero.tsx
        ├── Stats.tsx
        ├── Services.tsx
        ├── Work.tsx
        ├── WhyMe.tsx
        ├── About.tsx
        └── Contact.tsx
```

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo in the Vercel dashboard — it auto-detects Vite.
