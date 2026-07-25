import { clamp, formatPercent } from '../utils/format'

const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

interface ScoreRingProps {
  /** Score between 0 and 100. */
  value: number
  caption?: string
}

export default function ScoreRing({ value, caption }: ScoreRingProps) {
  const percent = clamp(value, 0, 100)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-32">
        <svg viewBox="0 0 128 128" className="size-full -rotate-90">
          <circle cx="64" cy="64" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="10" className="text-slate-200" />
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - percent / 100)}
            className="text-indigo-600"
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-3xl font-semibold tracking-tight text-slate-900">
            {formatPercent(percent)}
          </span>
        </div>
      </div>
      {caption && <p className="text-sm text-slate-500">{caption}</p>}
    </div>
  )
}
