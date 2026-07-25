import { useBooking } from '../hooks/BookingContext'

export default function Calendar() {
  const { mobileNumber } = useBooking()

  return (
    <section className="space-y-2">
      <h2 className="text-3xl font-semibold tracking-tight">Calendar</h2>
      <p className="text-stone-600">Select a date and time for your appointment.</p>
      {mobileNumber && (
        <p className="text-sm text-stone-500">Booking for {mobileNumber}</p>
      )}
    </section>
  )
}
