import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1b2a4a] text-slate-300 border-t border-[#e5b869]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-12 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/logo-officina.svg"
                  alt="Logo Officina delle Quinte"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight text-white leading-none">
                  Officina delle Quinte
                </span>
                <span className="text-[10px] text-[#8bb2c9] font-serif italic tracking-wider mt-1">
                  il teatro comincia da te
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed pt-2">
              Associazione Culturale e Teatrale dedicata alla promozione dell'arte, del teatro e della creatività per bambini, ragazzi e famiglie.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-white text-base font-semibold tracking-wide text-[#e5b869]">
              Navigazione
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#e5b869] transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="hover:text-[#e5b869] transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/attivita" className="hover:text-[#e5b869] transition-colors">
                  I Nostri Laboratori
                </Link>
              </li>
              <li>
                <Link href="/spettacoli" className="hover:text-[#e5b869] transition-colors">
                  Gli Spettacoli
                </Link>
              </li>
              <li>
                <Link href="/galleria" className="hover:text-[#e5b869] transition-colors">
                  Galleria
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-white text-base font-semibold tracking-wide text-[#e5b869]">
              Sede & Contatti
            </h4>
            <ul className="space-y-2 text-xs leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#e5b869]">📍</span>
                <span>
                  Via delle Quinte, 12<br />
                  Borgo delle Storie
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#e5b869]">🎭</span>
                <span>Incontri su appuntamento</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#e5b869]">✉️</span>
                <span className="break-all">ciao@officinadellequinte.example</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-white text-base font-semibold tracking-wide text-[#e5b869]">
              Info & Segreteria
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              La segreteria è aperta dal Lunedì al Venerdì dalle 15:00 alle 19:00. Riceviamo anche su appuntamento.
            </p>
            <div className="pt-2">
              <Link
                href="/dove-siamo"
                className="inline-block bg-white/10 hover:bg-[#e5b869] hover:text-[#1b2a4a] text-white text-xs font-medium px-4 py-2 rounded-full border border-white/20 transition-all"
              >
                Vieni a Trovarci
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center sm:text-left">
            © Officina delle Quinte. Tutti i diritti riservati.
          </p>
          <p id="nota-demo" className="max-w-xl text-center sm:text-right text-[11px] leading-relaxed">
            Sito dimostrativo: associazione, persone, luoghi e programma sono inventati.
            Le foto di repertorio, inclusi i ritratti abbinati ai nomi inventati dei docenti, hanno funzione illustrativa:
            le persone fotografate non sono associate al progetto. Logo e mappa sono originali.
            I contatti sono fittizi e il modulo
            simula una richiesta nel browser, senza inviare o salvare dati.
            Per provarlo, usa soltanto dati inventati.
            {' '}<Link href="/privacy" className="underline hover:text-white">Dati e crediti fotografici</Link>
          </p>
        </div>

      </div>
    </footer>
  )
}