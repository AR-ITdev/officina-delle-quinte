import Link from 'next/link'

export function CourseSchedule() {
  return (
    <section className="max-w-6xl mx-auto px-4 space-y-8">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8c6221]">Orari e percorsi</span>
        <h2 className="text-3xl font-serif text-[#1b2a4a]">La settimana in Officina</h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">Un appuntamento fisso per conoscersi e costruire qualcosa insieme. Gli incontri accompagnano il gruppo dalle prime esperienze alla creazione di uno spettacolo condiviso.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { name: 'Teatro bambini', slug: 'teatro-bambini', day: 'Martedì', time: '17:00–18:30', age: '8–10 anni', fee: '45 € al mese', tutor: 'Nora Ventoluce', group: 'Da 6 a 12 partecipanti' },
          { name: 'Teatro ragazzi', slug: 'teatro-ragazzi', day: 'Giovedì', time: '17:30–19:30', age: '11–15 anni', fee: '55 € al mese', tutor: 'Elio Cartavento', group: 'Da 6 a 14 partecipanti' },
        ].map(course => (
          <article key={course.slug} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap justify-between gap-3 items-center">
              <h3 className="font-serif text-2xl text-[#1b2a4a]">{course.name}</h3>
              <span className="text-xs rounded-full bg-[#e5b869]/20 text-[#8c6221] px-3 py-1">{course.age}</span>
            </div>
            <p className="font-serif text-xl text-[#1b2a4a]">{course.day} <span className="whitespace-nowrap">{course.time}</span></p>
            <dl className="text-sm text-slate-600 space-y-2">
              <div className="flex flex-wrap justify-between gap-2"><dt>Docente</dt><dd>{course.tutor}</dd></div>
              <div className="flex flex-wrap justify-between gap-2"><dt>Gruppo</dt><dd>{course.group}</dd></div>
              <div className="flex flex-wrap justify-between gap-2"><dt>Quota</dt><dd>{course.fee}</dd></div>
            </dl>
            <Link href={`/attivita/teatro/${course.slug}`} className="inline-block text-sm text-[#1b2a4a] underline underline-offset-4">Programma e informazioni</Link>
          </article>
        ))}
      </div>
      <p className="text-xs text-slate-500 text-center leading-relaxed">La quota comprende incontri, materiali di uso comune e preparazione del saggio. La prima lezione conoscitiva è gratuita; i workshop hanno una quota separata.</p>
    </section>
  )
}
