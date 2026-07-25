import type { QuizQuestion, QuizResult, Role, Skill } from '../types'

/**
 * Static sample content so every screen can be reviewed before the
 * generation logic and AI integration are wired up.
 */

export const placeholderRole: Role = {
  id: 'frontend-engineer',
  title: 'Frontend Engineer',
  summary:
    'Builds accessible, performant interfaces and collaborates closely with design and backend teams.',
}

export const placeholderSkills: Skill[] = [
  {
    id: 'javascript',
    name: 'JavaScript & TypeScript',
    level: 'intermediate',
    description: 'Language fundamentals, async patterns, and typing complex data structures.',
    weight: 30,
  },
  {
    id: 'react',
    name: 'React Fundamentals',
    level: 'intermediate',
    description: 'Component composition, state management, hooks, and rendering behaviour.',
    weight: 25,
  },
  {
    id: 'css',
    name: 'Modern CSS & Layout',
    level: 'foundational',
    description: 'Flexbox, grid, responsive breakpoints, and design system conventions.',
    weight: 15,
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    level: 'foundational',
    description: 'Semantic markup, keyboard navigation, and assistive technology support.',
    weight: 15,
  },
  {
    id: 'performance',
    name: 'Web Performance',
    level: 'advanced',
    description: 'Bundle budgets, rendering costs, caching, and Core Web Vitals.',
    weight: 15,
  },
]

export const placeholderQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    skillId: 'react',
    prompt: 'Which hook would you reach for to keep a value stable between renders?',
    options: [
      { id: 'a', label: 'useState' },
      { id: 'b', label: 'useRef' },
      { id: 'c', label: 'useEffect' },
      { id: 'd', label: 'useContext' },
    ],
  },
  {
    id: 'q2',
    skillId: 'css',
    prompt: 'What is the most reliable way to build a responsive two column layout?',
    options: [
      { id: 'a', label: 'Absolute positioning' },
      { id: 'b', label: 'Floats with clearfix' },
      { id: 'c', label: 'CSS grid with a media query' },
      { id: 'd', label: 'Fixed pixel widths' },
    ],
  },
  {
    id: 'q3',
    skillId: 'accessibility',
    prompt: 'Which attribute pairs a visible label with a custom form control?',
    options: [
      { id: 'a', label: 'aria-labelledby' },
      { id: 'b', label: 'title' },
      { id: 'c', label: 'placeholder' },
      { id: 'd', label: 'data-label' },
    ],
  },
]

export const placeholderResult: QuizResult = {
  roleTitle: placeholderRole.title,
  score: 78,
  totalQuestions: 18,
  correctAnswers: 14,
  breakdown: [
    { skillId: 'javascript', skillName: 'JavaScript & TypeScript', correct: 5, total: 6 },
    { skillId: 'react', skillName: 'React Fundamentals', correct: 4, total: 5 },
    { skillId: 'css', skillName: 'Modern CSS & Layout', correct: 3, total: 3 },
    { skillId: 'accessibility', skillName: 'Accessibility', correct: 1, total: 2 },
    { skillId: 'performance', skillName: 'Web Performance', correct: 1, total: 2 },
  ],
  strengths: ['Component composition', 'Responsive layout', 'Type-safe data modelling'],
  focusAreas: ['Keyboard navigation', 'Bundle size budgets', 'Caching strategies'],
}
