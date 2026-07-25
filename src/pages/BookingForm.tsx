import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooking } from '../hooks/BookingContext'
import { SERVICES, type ServiceType } from '../utils/constants'
import { formatFullDate } from '../utils/dates'
import { validateBookingForm } from '../utils/validation'

const inputClassName =
  'w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200'

export default function BookingForm() {
  const navigate = useNavigate()
  const {
    mobileNumber,
    date,
    timeSlot,
    setName,
    setAge,
    setServiceType,
  } = useBooking()

  const [name, setNameInput] = useState('')
  const [age, setAgeInput] = useState('')
  const [serviceType, setServiceTypeInput] = useState<ServiceType | ''>('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!mobileNumber || !date || !timeSlot) {
      navigate('/')
    }
  }, [mobileNumber, date, timeSlot, navigate])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = { name, age, serviceType }
    const validationErrors = validateBookingForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setName(name.trim())
    setAge(age.trim())
    setServiceType(serviceType as ServiceType)
    navigate('/confirmation')
  }

  if (!mobileNumber || !date || !timeSlot) {
    return null
  }

  return (
    <section className="mx-auto max-w-md space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">Booking Form</h2>
        <p className="text-stone-600">Enter your details to complete the booking.</p>
      </div>

      <div className="rounded-lg border border-stone-200 bg-white p-4 text-sm text-stone-600">
        <p>
          <span className="font-medium text-stone-900">Date:</span> {formatFullDate(date)}
        </p>
        <p>
          <span className="font-medium text-stone-900">Time:</span> {timeSlot}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => {
              setNameInput(event.target.value)
              if (errors.name) setErrors((prev) => ({ ...prev, name: '' }))
            }}
            placeholder="Your full name"
            className={`${inputClassName} ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-stone-700">
            Age
          </label>
          <input
            id="age"
            type="number"
            min={1}
            max={120}
            inputMode="numeric"
            value={age}
            onChange={(event) => {
              setAgeInput(event.target.value)
              if (errors.age) setErrors((prev) => ({ ...prev, age: '' }))
            }}
            placeholder="Your age"
            className={`${inputClassName} ${errors.age ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
          />
          {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
        </div>

        <div>
          <label htmlFor="serviceType" className="mb-1.5 block text-sm font-medium text-stone-700">
            Service Type
          </label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(event) => {
              setServiceTypeInput(event.target.value as ServiceType | '')
              if (errors.serviceType) setErrors((prev) => ({ ...prev, serviceType: '' }))
            }}
            className={`${inputClassName} ${errors.serviceType ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800"
        >
          Submit booking
        </button>
      </form>
    </section>
  )
}
