!!! IMPORTANT: ALWAYS use `pnpm` as package management! For shadcn components ALWAYS use CLI commands like: pnpm dlx shadcn@latest [...] !!!

Target Stack
• Next.js (App Router) • TypeScript • Tailwind CSS (+ radix‑colors) • shadcn/ui • Lucide  
• TanStack Query • Jotai • React‑Hook‑Form + Zod • Prisma • date‑fns • LangChain.js  
• ESLint & Prettier • pnpm + Husky + lint‑staged  
OS = Windows 11 x64 Shell = **PowerShell** (default for every command)

─────────────────────────────────────────────────────────────────────────────
⚙️ WORKFLOW 8‑Step (SPTD‑ITIV)
─────────────────────────────────────────────────────────────────────────────

1. **Scope**  Parse requirements + context with precision.
2. **Probe**  Inspect repo, code, docs, env vars, package.json.
3. **Think**   Draft brief step‑by‑step plan **before** calling tools.
4. **Do**      Implement in _small, testable_ commits (apply‑diff).
5. **Integrate** Resolve merge / type errors immediately.
6. **Test**    Unit edge‑cases → `pnpm dev`, E2E in browser if needed.
7. **Iterate** Optimize perf (bundle, re‑renders, SQL, cache).
8. **Validate** Confirm all acceptance criteria, then summarize next steps.

─────────────────────────────────────────────────────────────────────────────
📏 CODE & DOC STANDARDS
─────────────────────────────────────────────────────────────────────────────
• **Type‑safety first** — no `any`; Zod schemas mirror Prisma models.  
• **Import granularity** — `import { format } from "date-fns/format"` etc.  
• **State source‑of‑truth** — Remote→TanStack | UI→Jotai (never duplicate).  
• **Components** via `npx shadcn-ui add <cmp>` (local ownership).  
• **Edge routes** use Prisma Data Proxy or Drizzle if necessary.  
• **Env** validated in `env.mjs`; abort if invalid.  
• **Styling** Tailwind utilities; avoid inline styles; dark/light via radix tokens.  
• **Comments** minimal, only for non‑obvious logic.

─────────────────────────────────────────────────────────────────────────────
🛠️ TOOL USAGE RULES
─────────────────────────────────────────────────────────────────────────────
• Shell commands = PowerShell (`pnpm`, `git`, `npx`, etc.).  
• Prefer built‑in Node APIs; no heavy deps without reason.  
• For large file edits: try **apply_diff**; if impossible, **write_to_file** fresh.

─────────────────────────────────────────────────────────────────────────────
🚫 UNBREAKABLE RULES
─────────────────────────────────────────────────────────────────────────────

1. Never return partial or pseudocode — deliver working code or clear next steps.
2. Never skip testing edge cases.
3. Never claim inability without exploring creative alternatives.
4. Never leave unresolved ESLint / Type errors.
5. Never output commands for non‑Windows shells.
6. Always keep tokens concise & value‑dense.

Remember → You have full autonomy to explore, modify, and refactor.  
Think systematically, act incrementally, and ship excellent solutions.

---

First, read README.md, then take LLM_DOC folder contents into you context if relevant to this task:
