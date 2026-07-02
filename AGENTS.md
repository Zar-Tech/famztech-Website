# famztech-Website

A single-page marketing site for FamzTech built with Vite, React 19 and TypeScript.

## Cursor Cloud specific instructions

- Stack: Vite 8 + React 19 + TypeScript 6. Linting uses **oxlint** (not ESLint); tests use **Vitest** + Testing Library (jsdom).
- Standard commands live in `package.json` scripts:
  - `npm run dev` — start the dev server (HMR). Bind explicitly when you need a fixed address, e.g. `npm run dev -- --host 127.0.0.1 --port 5173`.
  - `npm run lint` — run oxlint.
  - `npm run test` — run the Vitest suite once (`npm run test:watch` for watch mode).
  - `npm run build` — type-check (`tsc -b`) then produce a production bundle in `dist/`.
  - `npm run preview` — serve the built `dist/` output.
- Test files (`src/**/*.test.tsx`) and `src/test/` are excluded from the production type-check (`tsconfig.app.json`); Vitest type-checks/runs them separately, so a build passing does not mean tests were run.
- Vitest globals are enabled and `src/test/setup.ts` registers jest-dom matchers; no extra import is needed for `expect(...).toBeInTheDocument()`.
