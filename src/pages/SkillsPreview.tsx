import Badge from '../components/Badge'
import Button from '../components/Button'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import SkillCard from '../components/SkillCard'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/constants'
import { placeholderRole, placeholderSkills } from '../utils/placeholderData'

export default function SkillsPreview() {
  useDocumentTitle('Skills Preview')

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Step 1"
        title="Skills preview"
        description="These are the competencies the quiz will cover. Coverage shows how much of the quiz is spent on each area."
      />

      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-slate-900">{placeholderRole.title}</h2>
            <Badge tone="indigo">Sample role</Badge>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600">
            {placeholderRole.summary}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button to={ROUTES.home} variant="secondary" size="sm">
            Change role
          </Button>
          <Button to={ROUTES.quiz} size="sm">
            Start quiz
          </Button>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      <p className="text-sm text-slate-500">
        Skill generation is not connected yet — this list is sample content for layout review.
      </p>
    </div>
  )
}
