# JennaEvePortfolio - Project Documentation

## Project Overview
This project is a modern, interactive portfolio website built using **React** and **Vite**. It features a component-based architecture, smooth client-side routing, and rich animations. The application is designed for high performance and a polished user experience, utilizing advanced libraries for motion and 3D graphics.

## Tech Stack
- **Core Framework:** React (v18+)
- **Build Tool:** Vite
- **Routing:** react-router-dom
- **Animations:** Framer Motion
- **3D / Graphics:** @react-three/fiber (Three.js), @react-three/drei
- **Scrolling:** Lenis (for smooth scrolling)
- **Linting/Code Quality:** ESLint
- **Deployment:** Vercel

## Project Structure
The codebase follows a standard React + Vite structure:

- **`src/`**: Contains the source code.
  - **`main.jsx`**: The application entry point. Initializes the React root and wraps the app in `BrowserRouter`.
  - **`App.jsx`**: The core layout component. It handles the main routing logic, page transitions (via `AnimatePresence`), and global layout elements (Header/Footer).
  - **`pages/`**: Contains individual page components corresponding to different routes.
  - **`components/`**: Reusable UI components used across the application.
- **`public/`**: Static assets (images, icons, etc.) served directly.
- **`vite.config.js`**: Configuration file for the Vite build tool.
- **`vercel.json`**: Configuration for deployment on the Vercel platform.
- **`package.json`**: Defines dependencies and scripts (start, build, lint).

## Key Features & Architecture

### 1. Routing & Layout
- The application uses `react-router-dom` for single-page application (SPA) routing.
- `App.jsx` serves as the central hub, defining routes and wrapping them with `AnimatePresence` to enable smooth page transition animations.

### 2. Animations & Interactions
- **Framer Motion** is heavily utilized for component entry/exit animations and interactive gestures.
- **Smooth Scrolling** is implemented using `lenis` to provide a premium feel to the navigation experience.

### 3. 3D Playground
- The project includes an interactive "playground" section leveraging **React Three Fiber**, enabling performant 3D graphics and interactions within the React component tree.

## Development
- **Start Dev Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Lint:** `npm run lint`
