import { NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Welcome' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/booking', label: 'Booking' },
  { to: '/confirmation', label: 'Confirmation' },
]

export default function Layout() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold tracking-tight">Salon Booking</h1>
          <nav className="flex gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}
