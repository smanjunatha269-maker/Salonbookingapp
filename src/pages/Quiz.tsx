import Button from '../components/Button'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/constants'
import { placeholderQuestions, placeholderRole } from '../utils/placeholderData'

export default function Quiz() {
  useDocumentTitle('Quiz')

  const total = placeholderQuestions.length

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Step 2"
        title="Practice quiz"
        description={`A short set of questions drawn from the skills mapped for ${placeholderRole.title}.`}
      />

      <Card className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">Progress</span>
          <span className="text-slate-500">0 of {total} answered</span>
        </div>
        <ProgressBar value={0} label="Quiz progress" />
      </Card>

      <div className="space-y-4">
        {placeholderQuestions.map((question, index) => (
          <QuestionCard key={question.id} question={question} index={index} total={total} />
        ))}
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Scoring is not connected yet — answers are not recorded.
        </p>
        <div className="flex gap-2">
          <Button to={ROUTES.skills} variant="secondary">
            Back to skills
          </Button>
          <Button to={ROUTES.results}>View results</Button>
        </div>
      </div>
    </div>
  )
}
