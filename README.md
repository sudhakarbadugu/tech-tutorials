# Tech Tutorials

A modern, responsive learning platform for AI/ML, programming, and technical interview preparation. Built with React, Vite, and React Router.

## Features

- **Tutorials** — Structured courses across AI/ML (AI, Multimodal, LLM, CV, DL, NLP, RL, ML Algorithms), programming & web (Python, Java, JavaScript, HTML, CSS, React, Angular, React Native), and data (Statistics, Time Series, Imaging).
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
- **Syntax Highlighting:** Shiki
- **PDF Export:** html2pdf.js
- **Testing:** Vitest + Testing Library (jsdom)

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

# Run tests (watch mode)
npm test

# Run tests once
npm run test:run
```

## Project Structure

```
src/
  components/        # React components (Header, Sidebar, Content, LandingPage, etc.)
  data/              # Tutorial structures, content loaders, and interview questions
  styles/            # Global styles and CSS variables
  constants/         # App constants (brand, etc.)
  utils/             # Shared utilities
  assets/            # Static assets
  test/              # Test setup and helpers
  App.jsx            # Route definitions
  main.jsx           # App entry point
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home / landing page |
| `/tutorials/:subject/:unit?/:topic?` | Tutorial content viewer |
| `/interview` | Interview subjects landing page |
| `/interview/:subject` | Interview questions for a subject |
| `/interview/mock` | Mock interview practice |
| `/interview/revision` | Revision deck |
| `/interview/paths` | Study paths |
| `/interview/path/:pathId` | Individual study path |

## Scripts

- `scripts/build-data.js` — Generates combined `tutorialData.js` and `generatedStructures.js` from `src/data/rewritten/` modules.
- `scripts/audit-interview-content.js` — Audits interview content for consistency and missing fields.
- `scripts/fix-interview-content.js` — Fixes common issues in interview content files.
- `scripts/fix-interview-code-escaping.cjs` — Repairs code-block escaping in interview content.
- `scripts/add-keypoints.cjs` — Adds key points to interview questions.
- `scripts/generate-related-tutorials.cjs` — Generates related-tutorials metadata.

## Notes

- Course structures are auto-generated from the `rewritten/` module files.
- Interview subjects with zero questions are hidden from the UI.
- Vendor code is split into separate chunks (`vendor-react`, `vendor-icons`, `vendor-pdf`, `vendor-mermaid`, `vendor-shiki`) for faster initial load.
- The build script validates that every topic in a generated structure has matching content, failing fast on structure/content misalignment.
