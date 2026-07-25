import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooking } from '../hooks/BookingContext'
import {
  getLatestAppointmentByPhone,
  type Appointment,
} from '../services/appointmentService'
import { SALON_NAME } from '../utils/constants'
import { formatFullDate } from '../utils/dates'

export default function MyBooking() {
  const navigate = useNavigate()
  const { mobileNumber } = useBooking()
  const [appointment, setAppointment] = useState<Appointment | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!mobileNumber) {
      navigate('/')
      return
    }

    async function loadAppointment() {
      try {
        const data = await getLatestAppointmentByPhone(mobileNumber)
        if (!data) {
          setError('No booking found.')
          return
        }
        setAppointment(data)
      } catch {
        setError('Failed to load booking details.')
      } finally {
        setLoading(false)
      }
    }

    loadAppointment()
  }, [mobileNumber, navigate])

  if (!mobileNumber) {
    return null
  }

  return (
    <section className="mx-auto max-w-md space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">My Booking</h2>
        <p className="text-stone-600">Your upcoming appointment at {SALON_NAME}.</p>
      </div>

      {loading && (
        <p className="text-sm text-stone-500">Loading booking details...</p>
      )}

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {appointment && (
        <div className="space-y-3 rounded-lg border border-stone-200 bg-white p-5 text-sm text-stone-600">
          <p>
            <span className="font-medium text-stone-900">Name:</span> {appointment.name}
          </p>
          <p>
            <span className="font-medium text-stone-900">Phone:</span> {appointment.phone}
          </p>
          <p>
            <span className="font-medium text-stone-900">Date:</span>{' '}
            {formatFullDate(appointment.appointment_date)}
          </p>
          <p>
            <span className="font-medium text-stone-900">Time:</span> {appointment.time_slot}
          </p>
          <p>
            <span className="font-medium text-stone-900">Service:</span>{' '}
            {appointment.service_type}
          </p>
        </div>
      )}
    </section>
  )
}
