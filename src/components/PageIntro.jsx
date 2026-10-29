import Link from 'next/link'

export function PageIntro({ label, title, description, details, href, action }) {
  return (
    <section className="page-intro max-w-6xl mx-auto px-4 pt-8 sm:pt-12">
      <p className="editorial-label text-[#8c6221]">{label}</p>
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-7 lg:gap-16 items-end mt-6">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#1b2a4a]">{title}</h1>
        <div className="space-y-6">
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{description}</p>
          <Link href={href} className="inline-flex items-center gap-6 min-h-11 text-sm text-[#1b2a4a] underline underline-offset-4">{action}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-300 pt-5 mt-10 text-xs text-slate-600">
        {details.map(detail => <li key={detail}>{detail}</li>)}
      </ul>
    </section>
  )
}
