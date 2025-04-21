````markdown
# Next.js + shadcn/ui Starter Kit

> **Purpose:** Ultra‑lean scaffold for single‑page **and** hybrid‑rendered apps.  
> **Audience:** AI‑driven tooling (IDE assistants, code‑gen bots).  
> **Goal:** Minimize boilerplate, enforce type‑safety, and keep bundles thin.

---

## ⚡ Prerequisites

| Tool           | Version | Notes                                                         |
| -------------- | ------- | ------------------------------------------------------------- |
| **Node.js**    | ≥ 18.18 | Uses built‑in `fetch`; LTS recommended.                       |
| **pnpm**       | ≥ 8     | `corepack enable && corepack prepare pnpm@latest --activate`. |
| **TypeScript** | ^5.4    | Checked via `typescript` peer dep.                            |

---

## 🗂️ Stack Snapshot

| Layer        | Library                                       | Core Role                                                     |
| ------------ | --------------------------------------------- | ------------------------------------------------------------- |
| Framework    | **Next.js (App Router)**                      | SSR / SSG / SPA export, file‑based routing                    |
| Styling & UI | **Tailwind CSS** · **shadcn/ui** · **Lucide** | Utility‑first styling, accessible components, icon set        |
| Animations   | **Framer Motion**                             | 60 fps interactions (use `LazyMotion` for selective features) |
| Server‑State | **@tanstack/react‑query**                     | Fetch / cache / sync remote data                              |
| Local‑State  | **Jotai**                                     | Atomic UI & ephemeral state                                   |
| Forms        | **react‑hook‑form** + **Zod**                 | Minimal‑re‑render forms with type‑safe validation             |
| Dates        | **date‑fns**                                  | Immutable, tree‑shakable utilities                            |
| DB           | **Prisma**                                    | Typed ORM (+ Data Proxy for edge)                             |
| AI           | **LangChain.js**                              | LLM helpers (agents, retrievers, vector stores)               |
| Tooling      | **TypeScript ESLint** · **Prettier**          | Static analysis & auto‑format                                 |

---

## 🚀 First‑Run Guide

```bash
# 1 — Clone & rename
npx degit your‑org/next‑shadcn‑kit my‑proj
cd my‑proj

# 2 — Bootstrap env
cp .env.example .env          # DATABASE_URL, OPENAI_API_KEY, …

# 3 — Install, migrate, seed
pnpm i
pnpm prisma db push --preview-feature && pnpm prisma db seed

# 4 — Run
pnpm dev                      # http://localhost:3000
```
````

Prod build:

```bash
pnpm build                    # SSG + SSR
pnpm start
```

---

## 📁 Project Layout

```text
.
 ├─ doc/            # LLM context/documentation for core libraries
├─ app/            # Route groups & pages (Server Components by default)
│  └─ layout.tsx
├─ components/     # shadcn‑generated UI pieces
├─ lib/
│  ├─ api/         # fetchers & TanStack Query hooks (REST/GraphQL)
│  ├─ atoms/       # Jotai stores (UI‑only state)
│  ├─ ai/          # LangChain chains, agents, prompt factories
│  ├─ prisma/      # Prisma client instance (src/lib/prisma/client.ts)
│  └─ utils.ts     # Helpers (cn, formatters, etc.)
├─ generated/
│  └─ prisma/      # Auto‑generated Prisma client code
├─ styles/
│  └─ globals.css  # Tailwind base + radix colors
├─ prisma/
│  └─ schema.prisma
└─ env.mjs         # Zod‑validated env vars
```

---

## 🪄 shadcn Component Generation

```bash
# Add a component
npx shadcn@latest add button

# Re‑initialise tokens / regenerate types
pnpm dlx shadcn@latest init
```

All code is copied locally—edit freely.

---

## ⚙️ Key Conventions

| Topic               | Rule                                                                          |
| ------------------- | ----------------------------------------------------------------------------- |
| **Imports**         | Deep‑import `date-fns/…` & `@langchain/…` to keep chunks slim.                |
| **Source‑of‑Truth** | *Remote* → React Query · *UI/transient* → Jotai (never both).                 |
| **Animations**      | Wrap heavy features with `<LazyMotion features={domAnimation}>`.              |
| **Prisma @ Edge**   | Use **Data Proxy** or swap to **Drizzle** if bundle limits hit.               |
| **Env**             | Runtime secrets validated in `env.mjs`; app exits on invalid config.          |
| **Styling**         | Tailwind extended with **@radix-ui/colors** + optional `tailwindcss-animate`. |
| **Linting**         | Flat ESLint (`eslint.config.mjs`) with strict type‑checking.                  |
| **Commit Hooks**    | `lint-staged` runs `eslint --fix` & `prettier` on staged files.               |

---

## 🧩 RSC / SSR Guidelines

- **Data‑fetching** lives in **Server Components**; only promote to `"use client"` when interactive.
- Provide `loading.tsx` per route group for Suspense skeletons.
- Prefer `<Suspense>` boundaries over imperative spinners.
- Keep client bundles small: no LangChain, Prisma, or Framer Motion in Server Components unless required.

---

## 🛠️ Scripts

| Command    | Description            |
| ---------- | ---------------------- |
| `dev`      | Start dev server       |
| `build`    | Compile for production |
| `start`    | Run prod server        |
| `studio`   | Open **Prisma Studio** |
| `lint`     | ESLint analysis        |
| `format`   | Prettier write         |
| `generate` | `prisma generate`      |

---

## 🧠 AI Integration Cheatsheet

```ts
// lib/ai/chat.ts
import { ChatOpenAI } from "@langchain/openai"; // granular import
export const llm = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  temperature: 0.2,
});
```

- Store embeddings via **@langchain/community/vectorstores/prisma**.
- Keep prompts in `lib/ai/prompts/*.ts` alongside agents/retrievers.

---

## 🏎️ Performance Checklist

- ✅ `next/image` for all media.
- ✅ Dynamic‑import LangChain & Framer Motion.
- ✅ `next/font` (local) to eliminate FOUT.
- ✅ `reactStrictMode: true` + `experimental.turbo` in `next.config.ts`.
- ✅ Analyze bundles with `pnpm exec next build && pnpm exec next analyze` (optional dev dep `@next/bundle-analyzer`).

---

## 🚀 Deploy

```bash
# One‑time project link
vercel link          # selects org/project & copies env vars

# Ship
vercel --prod
```

_(Cloudflare Pages or Netlify work equally—just set env vars & Prisma Data Proxy)._

---

## ✨ Roadmap (Opt‑In)

1. **Turbopack** (dev‑only) once stable.
2. **PWA** via `next-pwa` (offline fallback, installability).
3. **Drizzle ORM** adapter path for edge‑only routes.
