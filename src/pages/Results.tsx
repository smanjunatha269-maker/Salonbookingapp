import Button from '../components/Button'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import ProgressBar from '../components/ProgressBar'
import ScoreRing from '../components/ScoreRing'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/constants'
import { placeholderResult } from '../utils/placeholderData'

export default function Results() {
  useDocumentTitle('Results')

  const { score, correctAnswers, totalQuestions, breakdown, strengths, focusAreas } =
    placeholderResult

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Step 3"
        title="Your results"
        description={`A read on where you stand for ${placeholderResult.roleTitle}, with the areas worth another pass.`}
      />

      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        <Card className="flex flex-col items-center justify-center gap-4 py-8">
          <ScoreRing value={score} caption={`${correctAnswers} of ${totalQuestions} correct`} />
          <Button to={ROUTES.quiz} variant="secondary" size="sm">
            Retake quiz
          </Button>
        </Card>

        <Card className="space-y-5">
          <h2 className="font-semibold text-slate-900">Score by skill</h2>
          <ul className="space-y-4">
            {breakdown.map((item) => (
              <li key={item.skillId} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">{item.skillName}</span>
                  <span className="text-slate-500">
                    {item.correct}/{item.total}
                  </span>
                </div>
                <ProgressBar
                  value={(item.correct / item.total) * 100}
                  label={`${item.skillName} score`}
                />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="font-semibold text-slate-900">Strengths</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {strengths.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-3">
          <h2 className="font-semibold text-slate-900">Focus areas</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Results are sample content — scoring and AI feedback are not implemented yet.
        </p>
        <Button to={ROUTES.home} variant="secondary">
          Prepare for another role
        </Button>
      </div>
    </div>
  )
}
