import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooking } from '../hooks/BookingContext'
import { formatDayLabel, getAvailableDays, toDateKey } from '../utils/dates'
import { getTimeSlots } from '../utils/timeSlots'

const availableDays = getAvailableDays()
const timeSlots = getTimeSlots()

export default function Calendar() {
  const navigate = useNavigate()
  const { mobileNumber, setDate, setTimeSlot } = useBooking()
  const [selectedDate, setSelectedDate] = useState('')

  useEffect(() => {
    if (!mobileNumber) {
      navigate('/')
    }
  }, [mobileNumber, navigate])

  function handleDaySelect(dateKey: string) {
    setSelectedDate(dateKey)
  }

  function handleSlotSelect(slot: string) {
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
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => handleSlotSelect(slot)}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm font-medium text-stone-900 transition-colors hover:border-stone-300 hover:bg-stone-50"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
