import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooking } from '../hooks/BookingContext'
import { SALON_NAME } from '../utils/constants'

export default function Welcome() {
  const navigate = useNavigate()
  const { setMobileNumber } = useBooking()
  const [input, setInput] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmed = input.trim()
    if (!trimmed) return

    setMobileNumber(trimmed)
    navigate('/calendar')
  }

  return (
    <section className="mx-auto max-w-md space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">{SALON_NAME}</h2>
        <p className="text-stone-600">
          Welcome! Enter your mobile number to book your next appointment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="mobile" className="mb-1.5 block text-sm font-medium text-stone-700">
            Mobile number
          </label>
          <input
            id="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="e.g. 9876543210"
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
          />
        </div>

        <button
          type="submit"
          disabled={!input.trim()}
          className="w-full rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          Continue
        </button>
      </form>
    </section>
  )
}
