import { createContext, useContext, useState, type ReactNode } from 'react'

type BookingContextValue = {
  mobileNumber: string
  setMobileNumber: (value: string) => void
  date: string
  setDate: (value: string) => void
  timeSlot: string
  setTimeSlot: (value: string) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [mobileNumber, setMobileNumber] = useState('')
  const [date, setDate] = useState('')
  const [timeSlot, setTimeSlot] = useState('')

  return (
    <BookingContext.Provider
      value={{
        mobileNumber,
        setMobileNumber,
        date,
        setDate,
        timeSlot,
        setTimeSlot,
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
