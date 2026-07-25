import { clamp } from '../utils/format'
import { cn } from '../utils/cn'

interface ProgressBarProps {
  /** Completion between 0 and 100. */
  value: number
  label?: string
  className?: string
}

export default function ProgressBar({ value, label, className }: ProgressBarProps) {
  const percent = clamp(value, 0, 100)

  return (
    <div
      className={cn('h-2 w-full overflow-hidden rounded-full bg-slate-200', className)}
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-full rounded-full bg-indigo-600 transition-all" style={{ width: `${percent}%` }} />
    </div>
  )
}
