
<div align="center">

---

## About

This repository contains the source code of my personal portfolio website.

I designed and built the site from scratch to bring together my **projects, technical interests, professional experience, and things I'm currently learning** in one place.

The goal was to create something that feels more like a personal digital space than a traditional developer portfolio — **minimal, interactive, and intentionally built.**

> **Live:** [sudenurmeydan.netlify.app](https://sudenurmeydan.netlify.app/)

---

## ✦ What You'll Find

* **Selected Work** — Projects I've built and continue to explore
* **About** — A little more about me and how I approach engineering
* **Toolkit** — Technologies, frameworks, and tools I work with
* **Experience** — Professional experience and technical journey
* **Blog** — Notes, ideas, and things I'm learning

---

## Tech Stack

### Frontend

| Technology               | Purpose                            |
| ------------------------ | ---------------------------------- |
| **React 19**       | UI and component architecture      |
| **TypeScript**     | Type-safe development              |
| **Vite**           | Development and production tooling |
| **Tailwind CSS**   | Styling and design system          |
| **React Router**   | Client-side routing                |
| **react-markdown** | Markdown-based blog content        |

### Tooling & Deployment

| Technology        | Purpose                              |
| ----------------- | ------------------------------------ |
| **oxlint**  | Fast JavaScript / TypeScript linting |
| **Netlify** | Deployment and hosting               |

---

## ✦ Design & Interaction

The site is intentionally built around a few simple ideas:

* **Responsive by default** — designed for both desktop and mobile
* **Motion with purpose** — animations support navigation rather than compete with the content
* **Interactive elements** — custom cursor, scroll-based interactions, and WebGL/Three.js experiments
* **Component-driven architecture** — reusable React components instead of page-specific implementations
* **Content-driven sections** — projects, experience, and toolkit are structured as data rather than hardcoded UI

---

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/SMeydan/portfolio.git
cd portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build
npm run lint      # Run oxlint
```

---

## Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   └── ...
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── data/
│   ├── types/
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

The project follows a component-oriented structure with shared types, hooks, page-level components, and data separated from presentation where appropriate.

---

## Status

This portfolio is an ongoing project.

The content will evolve as I build new projects, learn new technologies, and find better ways to present the work.

---

## License

The source code is available for reference and learning.

You're welcome to explore the implementation and take inspiration from it, but please don't publish a copy of the site as your own portfolio.

---

<div align="center">
