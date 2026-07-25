import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooking } from '../hooks/BookingContext'
import {
  getBookedAppointmentsForDates,
  getBookedSlotKey,
} from '../services/appointmentService'
import { formatDayLabel, getAvailableDays, toDateKey } from '../utils/dates'
import { getTimeSlots } from '../utils/timeSlots'

const availableDays = getAvailableDays()
const availableDateKeys = availableDays.map(toDateKey)
const timeSlots = getTimeSlots()

export default function Calendar() {
  const navigate = useNavigate()
  const { mobileNumber, setDate, setTimeSlot } = useBooking()
  const [selectedDate, setSelectedDate] = useState('')
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set())
  const [loadingSlots, setLoadingSlots] = useState(true)

  useEffect(() => {
    if (!mobileNumber) {
      navigate('/')
    }
  }, [mobileNumber, navigate])

  useEffect(() => {
    async function loadBookedSlots() {
      try {
        const appointments = await getBookedAppointmentsForDates(availableDateKeys)
        const slots = new Set(
          appointments.map((appointment) =>
            getBookedSlotKey(appointment.appointment_date, appointment.time_slot),
          ),
        )
        setBookedSlots(slots)
      } catch {
        setBookedSlots(new Set())
      } finally {
        setLoadingSlots(false)
      }
    }

    loadBookedSlots()
  }, [])

  function handleDaySelect(dateKey: string) {
    setSelectedDate(dateKey)
  }

  function handleSlotSelect(slot: string) {
    if (bookedSlots.has(getBookedSlotKey(selectedDate, slot))) {
      return
    }

    setDate(selectedDate)
    setTimeSlot(slot)
    navigate('/booking')
  }

  if (!mobileNumber) {
    return null
  }

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">Calendar</h2>
        <p className="text-stone-600">Select a date and time for your appointment.</p>
        <p className="text-sm text-stone-500">Booking for {mobileNumber}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-stone-700">Choose a day</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {availableDays.map((day) => {
            const dateKey = toDateKey(day)
            const isSelected = selectedDate === dateKey

            return (
              <button
                key={dateKey}
                type="button"
                onClick={() => handleDaySelect(dateKey)}
                className={`rounded-lg border px-3 py-3 text-left transition-colors ${
                  isSelected
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-200 bg-white text-stone-900 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <span className="block text-sm font-medium">{formatDayLabel(day)}</span>
                <span
                  className={`block text-xs ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}
                >
                  {day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-stone-700">Choose a time</h3>
          {loadingSlots && (
            <p className="text-sm text-stone-500">Loading available slots...</p>
          )}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {timeSlots.map((slot) => {
              const isBooked = bookedSlots.has(getBookedSlotKey(selectedDate, slot))

              return (
                <button
                  key={slot}
                  type="button"
                  disabled={isBooked || loadingSlots}
                  onClick={() => handleSlotSelect(slot)}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                    isBooked
                      ? 'cursor-not-allowed border-stone-200 bg-stone-100 text-stone-400 line-through'
                      : 'border-stone-200 bg-white text-stone-900 hover:border-stone-300 hover:bg-stone-50 disabled:cursor-wait disabled:opacity-60'
                  }`}
                >
                  {slot}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
