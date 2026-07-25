import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooking } from '../hooks/BookingContext'
import { SALON_NAME } from '../utils/constants'
import { formatFullDate } from '../utils/dates'

export default function Confirmation() {
  const navigate = useNavigate()
  const { mobileNumber, date, timeSlot, name, age, serviceType } = useBooking()

  useEffect(() => {
    if (!mobileNumber || !date || !timeSlot || !name || !age || !serviceType) {
      navigate('/')
    }
  }, [mobileNumber, date, timeSlot, name, age, serviceType, navigate])

  if (!mobileNumber || !date || !timeSlot || !name || !age || !serviceType) {
    return null
  }

  return (
    <section className="mx-auto max-w-md space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">Confirmation</h2>
        <p className="text-stone-600">Your appointment has been scheduled at {SALON_NAME}.</p>
      </div>

      <div className="space-y-3 rounded-lg border border-stone-200 bg-white p-4 text-sm text-stone-600">
        <p>
          <span className="font-medium text-stone-900">Name:</span> {name}
        </p>
        <p>
          <span className="font-medium text-stone-900">Age:</span> {age}
        </p>
        <p>
          <span className="font-medium text-stone-900">Mobile:</span> {mobileNumber}
        </p>
        <p>
          <span className="font-medium text-stone-900">Service:</span> {serviceType}
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
