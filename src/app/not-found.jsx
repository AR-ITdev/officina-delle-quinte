import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-[#f4f7f4] to-[#dbe4dc] rounded-3xl p-8 sm:p-16 text-center space-y-6">
      <p className="text-sm text-slate-600">404</p>
      <h1 className="text-4xl font-serif text-[#1b2a4a]">Questa scena deve ancora cominciare</h1>
      <p className="text-slate-600">La pagina cercata non è disponibile. Il prossimo percorso ti aspetta tra i nostri laboratori.</p>
      <Link href="/" className="inline-block bg-[#1b2a4a] text-white px-6 py-3 rounded-full">Torna alla home</Link>
    </section>
  )
}
