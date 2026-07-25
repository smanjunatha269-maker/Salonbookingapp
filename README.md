# RolePrep AI

A React + Vite + Tailwind CSS front end for role-focused interview preparation: describe a role,
review the skills that matter, work through a practice quiz, and read the results.

This is a UI scaffold. Skill generation, quiz scoring, and the AI integration are not implemented
yet — every screen renders sample content from `src/utils/placeholderData.ts`.

## Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router 7
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run oxlint |

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/skills` | Skills Preview |
| `/quiz` | Quiz |
| `/results` | Results |
| `*` | Not Found |

## Project structure

```
src/
├── components/   Reusable UI (layout, navbar, cards, progress, score ring)
├── pages/        One component per route
├── services/     Placeholder API/AI boundary, not implemented yet
├── hooks/        Small UI hooks (document title, scroll restoration)
├── utils/        Class name helper, constants, formatting, sample data
└── types/        Shared domain types (Role, Skill, QuizQuestion, QuizResult)
```

## Next steps

1. Implement `fetchSkillsForRole` in `src/services/roleService.ts`.
2. Implement `generateQuiz` and `scoreQuiz` in `src/services/quizService.ts`.
3. Replace the placeholder data in the pages with real state passed between routes.
