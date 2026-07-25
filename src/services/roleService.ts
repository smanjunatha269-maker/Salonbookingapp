import type { Skill } from '../types'

/**
 * Placeholder for the skills breakdown request. The AI integration is not
 * wired up yet, so nothing calls this in the current scaffold.
 */
export async function fetchSkillsForRole(_role: string): Promise<Skill[]> {
  throw new Error('fetchSkillsForRole is not implemented yet')
}
