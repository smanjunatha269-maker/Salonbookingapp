import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">Welcome</h2>
        <p className="text-stone-600">
          Book your next salon appointment in a few simple steps.
        </p>
      </div>
      <Link
        to="/calendar"
        className="inline-flex rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800"
      >
        Get started
      </Link>
    </section>
  )
}
