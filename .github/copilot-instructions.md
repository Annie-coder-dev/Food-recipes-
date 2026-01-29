# AI Coding Agent Instructions

## Project Overview
**Food Recipes** is a React + Vite application displaying food recipes from the DummyJSON API. It demonstrates core React patterns: component composition, state management with hooks, and styling with Tailwind CSS.

## Architecture & Data Flow

### Component Hierarchy
```
App (root)
├── Header (static UI)
└── Recipe (state manager)
    └── FoodCard (presentational, receives recipe prop)
```

### Key Data Flow
1. **Recipe.jsx** fetches recipes from `https://dummyjson.com/recipe` on mount (`useEffect`)
2. Stores array in state: `recipes` 
3. Maps recipes to **FoodCard** components (each recipe renders as a card)
4. FoodCard displays: image, name, truncated instructions, rating, tags, and "View" button

### Important Notes
- **No routing**: Single-page app, all recipes display on one page
- **No state management library**: Uses React hooks (`useState`, `useEffect`) only
- **External API**: Relies on DummyJSON API - network errors affect UX
- **Image handling**: Recipe objects have `image` URL field; card uses `object-cover` to maintain aspect ratio

## Development Workflow

### Common Commands
```bash
npm run dev      # Start Vite dev server (HMR enabled)
npm run build    # Build production bundle
npm run lint     # Run ESLint (eslint .)
npm run preview  # Preview production build locally
```

**Development Pattern**: Use `npm run dev`, edit files, and HMR refreshes automatically via Vite.

## Styling & Conventions

### Tailwind CSS
- **Framework**: @tailwindcss/vite (v4) with React plugin
- **Pattern**: All styling via utility classes (no CSS files except index.css)
- **Example**: Header uses `bg-red-600`, `text-white`, `shadow-md`
- **Colors**: Red theme dominates (red-300, red-400, red-500, red-600)

### Component Patterns
- **Functional components** with default exports
- **Props only** for child data (FoodCard receives `recipe` prop)
- **className with template strings** when needed for dynamic classes
- **Responsive**: Uses Tailwind utilities (e.g., `py-4`, `px-7`) but **lacks mobile breakpoints** - opportunity for enhancement

## Key Files & Responsibilities

| File | Purpose |
|------|---------|
| [src/App.jsx](src/App.jsx) | Root component, composition point |
| [src/components/Recipe.jsx](src/components/Recipe.jsx) | Data fetching, state management, list rendering |
| [src/components/FoodCard.jsx](src/components/FoodCard.jsx) | Presentational card UI with recipe display |
| [src/components/Header.jsx](src/components/Header.jsx) | Static header, branding |
| [vite.config.js](vite.config.js) | Vite + React + Tailwind configuration |
| [eslint.config.js](eslint.config.js) | ESLint rules (React hooks enforcement) |

## Debugging & Common Issues

1. **API Fails Silently**: Recipe.jsx has try-catch but only logs errors to console. No error UI shown to user.
2. **Key Warning**: FoodCard uses index `i` as key in map - will cause issues if recipe list changes.
3. **Image Loading**: No loading state or error handling for broken image URLs.
4. **Truncation**: Shows first two instruction strings with hardcoded ".." - fragile if API structure changes.

## Extending This Codebase

When adding features:
- **New components**: Keep functional, use props for data, add to component folder
- **Styling**: Always use Tailwind utilities, maintain red theme consistency
- **State**: Add to Recipe.jsx if global (fetched data), use `useState` hooks
- **Error Handling**: Improve try-catch blocks to show user-facing messages
- **Testing**: No test infrastructure present - would need Jest/Vitest setup

## ESLint Configuration
[eslint.config.js](eslint.config.js) enforces `react-hooks` rules. Watch for warnings about:
- Missing dependencies in `useEffect`
- Rules of hooks violations
