import Button from '../components/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/constants'

export default function NotFound() {
  useDocumentTitle('Page not found')

  return (
    <div className="mx-auto max-w-md space-y-5 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-600">404</p>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Page not found</h1>
      <p className="text-slate-600">
        The page you were looking for does not exist. Head back home to start a new prep session.
      </p>
      <Button to={ROUTES.home}>Back to home</Button>
    </div>
  )
}
