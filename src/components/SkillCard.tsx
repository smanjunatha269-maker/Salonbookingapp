import Badge from './Badge'
import Card from './Card'
import ProgressBar from './ProgressBar'
import { SKILL_LEVEL_LABELS } from '../utils/constants'
import type { Skill } from '../types'

const levelTones = {
  foundational: 'emerald',
  intermediate: 'indigo',
  advanced: 'amber',
} as const

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-900">{skill.name}</h3>
        <Badge tone={levelTones[skill.level]}>{SKILL_LEVEL_LABELS[skill.level]}</Badge>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-slate-600">{skill.description}</p>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Quiz coverage</span>
          <span className="font-medium text-slate-700">{skill.weight}%</span>
        </div>
        <ProgressBar value={skill.weight} label={`${skill.name} quiz coverage`} />
      </div>
    </Card>
  )
}
