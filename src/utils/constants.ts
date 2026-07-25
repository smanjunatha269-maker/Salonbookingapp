export const APP_NAME = 'RolePrep AI'

export const APP_TAGLINE = 'Prepare for the role, not just the interview.'

export const ROUTES = {
  home: '/',
  skills: '/skills',
  quiz: '/quiz',
  results: '/results',
} as const

export const NAV_LINKS = [
  { to: ROUTES.home, label: 'Home' },
  { to: ROUTES.skills, label: 'Skills' },
  { to: ROUTES.quiz, label: 'Quiz' },
  { to: ROUTES.results, label: 'Results' },
] as const

export const SKILL_LEVEL_LABELS = {
  foundational: 'Foundational',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const
