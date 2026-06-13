# Tech Tutorials

A modern, responsive learning platform for AI/ML, programming, and technical interview preparation. Built with React, Vite, and React Router.

## Features

- **Tutorials** — Structured courses across AI/ML (Multimodal, LLM, CV, DL, NLP, RL, Statistics, Time Series) and programming (Python, Java, JavaScript).
- **Interview Prep** — Curated interview questions with answers, difficulty ratings, and category filters for Java, React, Python, SQL, System Design, and more.
- **Real Progress Tracking** — Viewed topics are saved to `localStorage`; progress bars show actual completion per course.
- **Client-Side Routing** — Shareable URLs for every tutorial topic and interview subject (`/tutorials/:subject/:unit/:topic`, `/interview/:subject`).
- **Light & Dark Themes** — Theme preference persists across sessions.
- **Visual Diagrams** — Mermaid-powered flowcharts and class diagrams embedded in tutorials for complex concepts.
- **One-Page & PDF Views** — View full units or subjects on a single page for focused reading or export.
- **Responsive Design** — Works on desktop, tablet, and mobile with a collapsible sidebar.

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router DOM
- **Styling:** CSS Modules + global CSS with CSS variables
- **Icons:** Lucide React
- **Diagrams:** Mermaid (lazy-loaded)
- **PDF Export:** html2pdf.js

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
  components/        # React components (Header, Sidebar, Content, LandingPage, etc.)
  data/              # Tutorial structures, content loaders, and interview questions
  styles/            # Global styles and CSS variables
  constants/         # App constants (name, slug)
  App.jsx            # Route definitions
  main.jsx           # App entry point
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home / landing page |
| `/tutorials/:subject/:unit/:topic` | Tutorial content viewer |
| `/interview` | Interview subjects landing page |
| `/interview/:subject` | Interview questions for a subject |

## Scripts

- `scripts/build-data.js` — Generates combined `tutorialData.js` and `generatedStructures.js` from `src/data/rewritten/` modules.
- `scripts/process-interview-questions.js` — Processes raw interview question files.

## Notes

- Course structures are auto-generated from the `rewritten/` module files.
- Interview subjects with zero questions are hidden from the UI.
- Vendor code is split into separate chunks (`vendor-react`, `vendor-icons`, `vendor-pdf`, `vendor-mermaid`) for faster initial load.
- The build script validates that every topic in a generated structure has matching content, failing fast on structure/content misalignment.
