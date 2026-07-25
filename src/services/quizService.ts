import type { QuizQuestion, QuizResult, Skill } from '../types'

/** Placeholder for question generation. Not implemented in this scaffold. */
export async function generateQuiz(_skills: Skill[]): Promise<QuizQuestion[]> {
  throw new Error('generateQuiz is not implemented yet')
}

/** Placeholder for answer scoring. Not implemented in this scaffold. */
export async function scoreQuiz(
  _questions: QuizQuestion[],
  _answers: Record<string, string>,
): Promise<QuizResult> {
  throw new Error('scoreQuiz is not implemented yet')
}
