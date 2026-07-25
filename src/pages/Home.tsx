import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Card from '../components/Card'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { APP_NAME, ROUTES } from '../utils/constants'

const steps = [
  {
    title: 'Describe the role',
    description: 'Paste a job title or a full description to set the target for your prep.',
  },
  {
    title: 'Review the skills',
    description: 'See the competencies that matter most, weighted by how often they come up.',
  },
  {
    title: 'Practise and review',
    description: 'Work through a focused quiz, then read a breakdown of where to improve.',
  },
]

const suggestedRoles = [
  'Frontend Engineer',
  'Data Analyst',
  'Product Manager',
  'DevOps Engineer',
  'UX Designer',
]

export default function Home() {
  useDocumentTitle('Home')
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate(ROUTES.skills)
  }

  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <Badge tone="indigo">Interview preparation, focused</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Know exactly what to study for your next role
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            {APP_NAME} turns a job description into a clear skills map, a practice quiz, and an
            honest read on where you stand — so your prep time goes where it counts.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl space-y-3">
            <label htmlFor="role" className="block text-sm font-medium text-slate-700">
              Which role are you preparing for?
            </label>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <input
                id="role"
                name="role"
                type="text"
                placeholder="e.g. Frontend Engineer at a fintech startup"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
              />
              <Button type="submit" size="md" className="shrink-0">
                Preview skills
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-slate-500">Popular:</span>
              {suggestedRoles.map((role) => (
                <Link
                  key={role}
                  to={ROUTES.skills}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-700"
                >
                  {role}
                </Link>
              ))}
            </div>
          </form>
        </div>

        <Card className="space-y-5 bg-gradient-to-br from-white to-indigo-50/70">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Your prep plan</p>
            <Badge>Preview</Badge>
          </div>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-3.5">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-900">{step.title}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button to={ROUTES.skills} variant="secondary" className="w-full">
            See an example plan
          </Button>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Built for focused practice
          </h2>
          <p className="max-w-2xl text-slate-600">
            Three screens, no busywork. Each one answers a single question about your readiness.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              to: ROUTES.skills,
              title: 'Skills Preview',
              body: 'The competencies behind the role, ranked by importance.',
            },
            {
              to: ROUTES.quiz,
              title: 'Quiz',
              body: 'Short, targeted questions that mirror real interview scope.',
            },
            {
              to: ROUTES.results,
              title: 'Results',
              body: 'A score breakdown with strengths and clear focus areas.',
            },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <span
                    aria-hidden="true"
                    className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-600"
                  >
                    &rarr;
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
