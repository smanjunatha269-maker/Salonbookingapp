import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Welcome from './pages/Welcome'
import Calendar from './pages/Calendar'
import BookingForm from './pages/BookingForm'
import Confirmation from './pages/Confirmation'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="booking" element={<BookingForm />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
