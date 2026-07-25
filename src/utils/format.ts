/** Clamps a number into an inclusive range. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/** Formats a 0–100 value as a whole-number percentage. */
export function formatPercent(value: number): string {
  return `${Math.round(clamp(value, 0, 100))}%`
}
