import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooking } from '../hooks/BookingContext'
import { formatFullDate } from '../utils/dates'

export default function BookingForm() {
  const navigate = useNavigate()
  const { mobileNumber, date, timeSlot } = useBooking()

  useEffect(() => {
    if (!mobileNumber || !date || !timeSlot) {
      navigate('/')
    }
  }, [mobileNumber, date, timeSlot, navigate])

  if (!mobileNumber || !date || !timeSlot) {
    return null
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">Booking Form</h2>
        <p className="text-stone-600">Enter your details to complete the booking.</p>
      </div>

      <div className="rounded-lg border border-stone-200 bg-white p-4 text-sm text-stone-600">
        <p>
          <span className="font-medium text-stone-900">Mobile:</span> {mobileNumber}
        </p>
        <p>
          <span className="font-medium text-stone-900">Date:</span> {formatFullDate(date)}
        </p>
        <p>
          <span className="font-medium text-stone-900">Time:</span> {timeSlot}
        </p>
      </div>
    </section>
  )
}
