import { createContext, useContext, useState, type ReactNode } from 'react'
import type { ServiceType } from '../utils/constants'

type BookingContextValue = {
  mobileNumber: string
  setMobileNumber: (value: string) => void
  date: string
  setDate: (value: string) => void
  timeSlot: string
  setTimeSlot: (value: string) => void
  name: string
  setName: (value: string) => void
  age: string
  setAge: (value: string) => void
  serviceType: ServiceType | ''
  setServiceType: (value: ServiceType | '') => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [mobileNumber, setMobileNumber] = useState('')
  const [date, setDate] = useState('')
  const [timeSlot, setTimeSlot] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [serviceType, setServiceType] = useState<ServiceType | ''>('')

  return (
    <BookingContext.Provider
      value={{
        mobileNumber,
        setMobileNumber,
        date,
        setDate,
        timeSlot,
        setTimeSlot,
        name,
        setName,
        age,
        setAge,
        serviceType,
        setServiceType,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
