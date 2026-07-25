import Card from './Card'
import type { QuizQuestion } from '../types'

interface QuestionCardProps {
  question: QuizQuestion
  index: number
  total: number
}

export default function QuestionCard({ question, index, total }: QuestionCardProps) {
  return (
    <Card className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
          Question {index + 1} of {total}
        </p>
        <h3 className="text-lg font-semibold text-slate-900">{question.prompt}</h3>
      </div>

      <fieldset className="space-y-2.5">
        <legend className="sr-only">{question.prompt}</legend>
        {question.options.map((option) => (
          <label
            key={option.id}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50/50 has-checked:border-indigo-500 has-checked:bg-indigo-50"
          >
            <input
              type="radio"
              name={question.id}
              value={option.id}
              className="size-4 accent-indigo-600"
            />
            {option.label}
          </label>
        ))}
      </fieldset>
    </Card>
  )
}
