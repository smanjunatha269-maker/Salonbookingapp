export type SkillLevel = 'foundational' | 'intermediate' | 'advanced'

export interface Role {
  id: string
  title: string
  summary: string
}

export interface Skill {
  id: string
  name: string
  level: SkillLevel
  description: string
  /** Share of the quiz dedicated to this skill, 0–100. */
  weight: number
}

export interface QuizOption {
  id: string
  label: string
}

export interface QuizQuestion {
  id: string
  skillId: string
  prompt: string
  options: QuizOption[]
}

export interface SkillScore {
  skillId: string
  skillName: string
  correct: number
  total: number
}

export interface QuizResult {
  roleTitle: string
  score: number
  totalQuestions: number
  correctAnswers: number
  breakdown: SkillScore[]
  strengths: string[]
  focusAreas: string[]
}
