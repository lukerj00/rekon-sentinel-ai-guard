```
# Project Map: aiRekon - AI-Augmented Security Intelligence

This document provides an overview of the aiRekon website project, detailing its structure, core functionalities, and technology stack.

## 1. Application Structure

The project is a React application built with Vite and TypeScript, following a component-based architecture.

* **Entry Point:** `index.html` serves as the main HTML file, defining the basic page structure, title, and metadata for SEO and social sharing.
* **Main Application:** `src/main.tsx` renders the primary `App` component into the DOM.
* **Routing:** `src/App.tsx` sets up client-side routing using `react-router-dom`, defining routes for the home page (`/`) and a 404 Not Found page (`*`).
* **Pages:**
    * `src/pages/Index.tsx`: The main landing page, composed of various sections (Hero, Problem, Solutions, Why aiRekon, Clients, Footer).
    * `src/pages/NotFound.tsx`: A simple 404 error page for non-existent routes.
* **Components:**
    * `src/components/Header.tsx`: Navigation bar with logo, menu links, and a "Request Demo" button.
    * `src/components/HeroSection.tsx`: The main introductory section with a headline, sub-headline, key benefits, call-to-action buttons, and client logos.
    * `src/components/ProblemSection.tsx`: Describes challenges faced by security teams, using cards to highlight specific problems.
    * `src/components/SolutionsSection.tsx`: Presents aiRekon's AI-augmented security solutions with detailed features and core AI capabilities.
    * `src/components/WhyAiRekonSection.tsx`: Explains the company's unique advantages, including data, expertise, efficiency, and architecture, along with statistics.
    * `src/components/ClientsSection.tsx`: Showcases client testimonials and trust indicators like ISO 27001, SOC 2, and GDPR.
    * `src/components/Footer.tsx`: Provides a call-to-action, company contact information, solution links, company links, and legal notices.
    * `src/components/TypewriterText.tsx`: A reusable component for animating text in a typewriter style.
    * `src/components/ScrollAnimatedSection.tsx`: A wrapper component for animating sections as they scroll into view using `framer-motion` and `react-intersection-observer`.
    * `src/components/ui/`: Contains various UI components from `shadcn-ui`, such as `Button`, `Card`, `Input`, `Toaster`, `Tooltip`, etc..
* **Hooks:**
    * `src/hooks/use-mobile.tsx`: A custom hook to detect if the user is on a mobile device based on a breakpoint.
    * `src/hooks/use-toast.ts`: A custom hook for managing toast notifications.
* **Utilities:** `src/lib/utils.ts` provides utility functions, including `cn` for combining Tailwind CSS classes.
* **Styling:**
    * `src/index.css`: Imports Tailwind CSS and defines custom CSS variables for a "Navy Blue-Grey Theme" and custom utility classes for gradients and animations.
    * `src/App.css`: Contains basic application-wide CSS, including styles for the root element, logo, and card.
    * `tailwind.config.ts`: Configures Tailwind CSS, including custom colors, border radii, keyframes, and animations for the design system.
    * `postcss.config.js`: PostCSS configuration for Tailwind CSS and Autoprefixer.
* **Configuration Files:**
    * `package.json`: Defines project metadata, scripts (`dev`, `build`, `lint`, `preview`), and lists all dependencies and dev dependencies.
    * `package-lock.json`: Records the exact dependency tree.
    * `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configuration files for the project, application, and Node.js environment respectively.
    * `vite.config.ts`: Vite build configuration, including the React plugin and `lovable-tagger` for development mode.
    * `eslint.config.js`: ESLint configuration for linting TypeScript and React code.
    * `.gitignore`: Specifies files and directories to be ignored by Git version control.
    * `components.json`: Configuration for `shadcn-ui` components, defining styles, aliases, and file paths.
    * `public/robots.txt`: Directives for web crawlers, allowing all user agents to access the site.

## 2. Functionalities

The website is a static marketing site designed to showcase aiRekon's security intelligence solutions.

* **Homepage Display:** The `Index` page integrates several sections to present information about aiRekon.
* **Responsive Header & Navigation:** A sticky header (`Header.tsx`) with a logo and navigation links provides easy access to different sections of the page.
* **Dynamic Text & Animations:**
    * `TypewriterText.tsx` is used across various sections (Hero, Solutions, Why aiRekon, Problem) to create a dynamic typing effect for headlines.
    * `ScrollAnimatedSection.tsx` implements scroll-triggered animations for major sections of the homepage, enhancing visual engagement.
    * The `HeroSection` includes floating elements and pulse animations (`index.css`) to create a dynamic and security-themed visual experience.
* **Client Showcase:** The `ClientsSection` displays client logos, industry information, investment details, and a testimonial to build trust and credibility.
* **Call-to-Action (CTA):** Multiple sections, including the Hero and Footer, feature "Request Demo" or "Get Demo" buttons, indicating a primary conversion goal.
* **Information Display:**
    * The `ProblemSection` clearly outlines key challenges in security using icon-supported cards.
    * The `SolutionsSection` details the company's main offerings, "SecureEvent Pro" and "SecureFlight Pro," including their features and underlying AI technologies.
    * The `WhyAiRekonSection` emphasizes the company's competitive advantages and key statistics.
* **Footer Navigation and Contact:** The footer provides essential links and contact information, along with legal disclaimers.

## 3. Database (Supabase)

The `README.md` file mentions **Supabase** as a project information source, specifically its project URL: `https://lovable.dev/projects/4a4f7355-406e-42de-9cdc-8a9bc0c678bf`.

However, the provided repository files do **not** contain direct database schema definitions, API interaction code (e.g., Supabase client initialization or queries), or detailed table/column descriptions. Therefore, specific database functionalities or structures cannot be mapped from the current codebase. Any database interactions would likely occur server-side or through a separate API layer not present in these frontend files.
```