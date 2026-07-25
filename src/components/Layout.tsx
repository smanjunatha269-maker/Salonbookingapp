import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Stepper from './Stepper'
import { useScrollToTop } from '../hooks/useScrollToTop'

export default function Layout() {
  useScrollToTop()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Stepper />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 sm:py-14">
        <div className="animate-rise">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
