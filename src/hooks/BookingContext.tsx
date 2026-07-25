import { createContext, useContext, useState, type ReactNode } from 'react'

type BookingContextValue = {
  mobileNumber: string
  setMobileNumber: (value: string) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [mobileNumber, setMobileNumber] = useState('')

  return (
    <BookingContext.Provider value={{ mobileNumber, setMobileNumber }}>
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
