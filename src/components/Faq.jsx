export function Faq({ title, items }) {
  return (
    <section className="max-w-5xl mx-auto px-4 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl font-serif text-[#1b2a4a]">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.map(({ question, answer }) => (
          <details key={question} className="faq-item bg-[#fcfbf7] border border-slate-200 rounded-2xl px-5 sm:px-7">
            <summary className="cursor-pointer py-5 font-serif text-lg text-[#1b2a4a]">{question}</summary>
            <p className="pb-6 text-sm text-slate-600 leading-relaxed max-w-3xl">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
