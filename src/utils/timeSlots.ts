function formatTime(hour: number, minute: number): string {
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  const displayMinute = String(minute).padStart(2, '0')

  return `${displayHour}:${displayMinute} ${period}`
}

export function getTimeSlots(): string[] {
  const slots: string[] = []

  for (let hour = 9; hour < 18; hour++) {
    slots.push(formatTime(hour, 0))
    slots.push(formatTime(hour, 30))
  }

  return slots
}
