interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="space-y-3">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
      {description && <p className="max-w-2xl text-slate-600">{description}</p>}
    </header>
  )
}
