import { SERVICES, type ServiceType } from './constants'

export type BookingFormData = {
  name: string
  age: string
  serviceType: string
}

export type BookingFormErrors = Partial<Record<keyof BookingFormData, string>>

export function validateBookingForm(data: BookingFormData): BookingFormErrors {
  const errors: BookingFormErrors = {}
  const trimmedName = data.name.trim()
  const trimmedAge = data.age.trim()

  if (!trimmedName) {
    errors.name = 'Name is required.'
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!trimmedAge) {
    errors.age = 'Age is required.'
  } else if (!/^\d+$/.test(trimmedAge)) {
    errors.age = 'Age must be a valid number.'
  } else {
    const age = Number(trimmedAge)
    if (age < 1 || age > 120) {
      errors.age = 'Age must be between 1 and 120.'
    }
  }

  if (!data.serviceType) {
    errors.serviceType = 'Please select a service.'
  } else if (!SERVICES.includes(data.serviceType as ServiceType)) {
    errors.serviceType = 'Please select a valid service.'
  }

  return errors
}
