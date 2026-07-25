import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../utils/constants'
import { cn } from '../utils/cn'

const steps = [
  { to: ROUTES.skills, label: 'Skills' },
  { to: ROUTES.quiz, label: 'Quiz' },
  { to: ROUTES.results, label: 'Results' },
]

export default function Stepper() {
  const { pathname } = useLocation()
  const currentIndex = steps.findIndex((step) => step.to === pathname)

  if (currentIndex === -1) return null

  return (
    <div className="border-b border-slate-200 bg-slate-100/70">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 px-6 py-3 text-sm">
        {steps.map((step, index) => {
          const isCurrent = index === currentIndex
          const isComplete = index < currentIndex

          return (
            <li key={step.to} className="flex items-center gap-3">
              <Link
                to={step.to}
                aria-current={isCurrent ? 'step' : undefined}
                className={cn(
                  'flex items-center gap-2 rounded-full py-1 pl-1 pr-3 transition-colors',
                  isCurrent
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900',
                )}
              >
                <span
                  className={cn(
                    'grid size-6 place-items-center rounded-full text-xs font-semibold',
                    isCurrent && 'bg-indigo-600 text-white',
                    isComplete && 'bg-indigo-100 text-indigo-700',
                    !isCurrent && !isComplete && 'bg-slate-200 text-slate-600',
                  )}
                >
                  {index + 1}
                </span>
                {step.label}
              </Link>
              {index < steps.length - 1 && (
                <span aria-hidden="true" className="h-px w-6 bg-slate-300 sm:w-10" />
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
