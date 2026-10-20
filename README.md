# Adhya Mittal — MERN Portfolio

**Full Stack Assignment · Roll No. 2024btech015 · JK Lakshmipat University**

A full-stack personal portfolio for **Adhya Mittal**: student creator, visual storyteller and MERN stack developer.
Built with **React (Vite) + React Router** on the frontend and **Node.js + Express + MongoDB (Mongoose)** on the backend.

🔗 **Live site:** https://adhya-mittal.vercel.app  _(replace with your Vercel/Netlify URL)_
🔗 **API:** https://adhya-portfolio-api.onrender.com/api/health  _(replace with your Render/Railway URL)_

---

## ✨ Features

| Section | What's inside |
| --- | --- |
| **Hero** | Animated entrance, typewriter roles, gradient + photo background, **Download CV** CTA |
| **About Me** | Bio, profile photo, location & current status, scroll-triggered slide-in |
| **Skills** | Animated skill bars grouped by Frontend / Backend / Tools, hover tooltips with proficiency |
| **Projects** | 4 interactive cards (from the resume + this site) with tech badges, GitHub + live demo links, **filter by tech & sort**, detail page per project (`/projects/:slug`) |
| **CV Download** | PDF **and** Word (.docx) served by Express routes `GET /api/resume/pdf` and `GET /api/resume/docx` |
| **Timeline** | Vertical animated Education & Experience timeline |
| **Certifications** | C Programming certification, dance award, Student Council roles |
| **Contact** | Form → `POST /api/contact` → stored in MongoDB via Mongoose, optional Nodemailer email |
| **Extras** | Interactive moodboard canvas, Red Bull creator spotlight, favourites, creative work gallery |

Also: dark / light mode toggle (remembers your choice), fully responsive (mobile, tablet, desktop),
`prefers-reduced-motion` support, rate-limited contact API, and a 404 page.

## 🗂 Folder Structure

```
├── client/                 # React frontend (Vite)
│   ├── public/images/      # Photos used across the site
│   └── src/
│       ├── components/     # Hero, About, Skills, Projects, Timeline, Certifications, Footer/Contact …
│       ├── data/portfolio.js   # ← all editable content (skills, projects, timeline, certificates)
│       ├── hooks/          # useInView (scroll animations), useTheme (dark mode)
│       ├── pages/          # Home, ProjectDetail, NotFound (React Router)
│       └── config.js       # API base URL from VITE_API_URL
├── server/                 # Express backend
│   ├── assets/resume/      # Adhya_Mittal_Resume.pdf / .docx
│   ├── scripts/            # resumeData.js + generate-resume.js (rebuilds the CV files)
│   └── src/
│       ├── config/db.js    # Mongoose connection
│       ├── controllers/    # contactController.js
│       ├── models/         # Message.js
│       ├── routes/         # contact.js, resume.js
│       ├── middleware/     # 404 + error handler
│       └── utils/mailer.js # Nodemailer (optional)
├── photos/                 # Original photo files
└── render.yaml             # Render blueprint for the API
```

## 🔌 API

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Body `{ name, email, message }` → saved to MongoDB (5 req / 15 min per IP) |
| `GET` | `/api/resume/pdf` | Downloads the CV as PDF |
| `GET` | `/api/resume/docx` | Downloads the CV as Word document |

## 🛠 Local Setup

**Prerequisites:** Node.js 18+ and a MongoDB connection string (free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster or local `mongod`).

```bash
# 1. Clone
git clone https://github.com/aadhya-git/fullstack-assignment-2024btech015.git
cd fullstack-assignment-2024btech015

# 2. Backend
cd server
npm install
cp .env.example .env        # then fill in MONGO_URI (and SMTP_* if you want email alerts)
npm run dev                 # → http://localhost:5000

# 3. Frontend (new terminal)
cd client
npm install
cp .env.example .env        # VITE_API_URL=http://localhost:5000
npm run dev                 # → http://localhost:5173
```

### Updating the CV
Edit `server/scripts/resumeData.js`, then run:
```bash
cd server && npm run generate:resume
```
This regenerates `Adhya_Mittal_Resume.docx`. The PDF (`server/assets/resume/Adhya_Mittal_Resume.pdf`) is Adhya's original resume — replace that file directly when it changes.

### Editing content
All skills, projects, links, timeline entries and certificates live in `client/src/data/portfolio.js`.

## 🚀 Deployment

**Backend → Render**
1. New → Web Service → connect the repo, **Root Directory:** `server`, Build: `npm install`, Start: `npm start`
   (or use the included `render.yaml` blueprint).
2. Add environment variables: `MONGO_URI`, `CLIENT_ORIGIN` (your Vercel URL), and optionally `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `NOTIFY_EMAIL`.
3. In MongoDB Atlas → Network Access, allow `0.0.0.0/0` (Render uses dynamic IPs).

**Frontend → Vercel**
1. New Project → import the repo, **Root Directory:** `client`, framework preset **Vite**.
2. Add env var `VITE_API_URL` = your Render URL (e.g. `https://adhya-portfolio-api.onrender.com`).
3. Deploy. `client/vercel.json` rewrites all routes to `index.html` so React Router deep links work
   (`client/public/_redirects` does the same on Netlify).

## 🔐 Environment Variables

`.env` files are git-ignored — only `.env.example` templates are committed.

| File | Variable | Purpose |
| --- | --- | --- |
| `server/.env` | `MONGO_URI` | MongoDB connection string |
| | `CLIENT_ORIGIN` | Allowed frontend origin(s), comma separated |
| | `PORT` | API port (default 5000) |
| | `SMTP_*`, `NOTIFY_EMAIL` | Optional Nodemailer settings |
| `client/.env` | `VITE_API_URL` | Base URL of the Express API |

## 🧰 Tech Stack

React 19 · React Router 7 · Vite · CSS animations (IntersectionObserver) · Node.js · Express 5 · MongoDB · Mongoose · Nodemailer · express-rate-limit · docx (Word CV generation)

---

© 2026 Adhya Mittal
