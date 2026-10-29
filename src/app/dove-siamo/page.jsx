'use client'

import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import { useState } from 'react'
import { Faq } from '@/components/Faq'
import { TheatreImage } from '@/components/TheatreImage'

export default function DoveSiamoPage() {
  const [verified, setVerified] = useState(false)

  function verifyRequest(event) {
    event.preventDefault()
    const message = event.currentTarget.elements.namedItem('messaggio')
    if (!message.value.trim()) {
      message.setCustomValidity('Scrivi un messaggio con almeno una parola.')
      message.reportValidity()
      return
    }
    setVerified(true)
    event.currentTarget.reset()
  }

  return (
    <div className="inner-editorial space-y-20 lg:space-y-28 pb-20">

      <PageIntro
        label="Lo spazio / Le persone / Il primo incontro"
        title="Il teatro comincia da un incontro."
        description="Una domanda su un percorso, il desiderio di provare o un progetto da costruire insieme. Qui trovi i riferimenti e le informazioni per conoscere l’Officina."
        details={["Borgo delle Storie","Ricevimento su appuntamento","Prima lezione conoscitiva"]}
        href="#richiesta"
        action="Informazioni sulla prova"
      />

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-stretch">

        <div className="bg-[#fcfbf7] border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm h-full">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#e5b869]">
                Officina delle Quinte
              </span>
              <h2 className="text-2xl font-serif text-[#1b2a4a]">I Nostri Riferimenti</h2>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-lg">📍</span>
                <div>
                  <strong className="block text-[#1b2a4a] font-medium">Sede Operativa:</strong>
                  Via delle Quinte 12, Borgo delle Storie
                </div>
              </li>

              <li className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-lg">📞</span>
                <div>
                  <strong className="block text-[#1b2a4a] font-medium">Segreteria:</strong>
                  Dal lunedì al venerdì, 15:00–19:00
                </div>
              </li>

              <li className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-lg">✉️</span>
                <div>
                  <strong className="block text-[#1b2a4a] font-medium">Email:</strong>
                  <span className="break-all">ciao@officinadellequinte.example</span>
                </div>
              </li>

              <li className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-lg">📬</span>
                <div>
                  <strong className="block text-[#1b2a4a] font-medium">Teatro bambini · 8–10 anni:</strong>
                  Martedì, 17:00–18:30
                </div>
              </li>

              <li className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-lg">🏛️</span>
                <div>
                  <strong className="block text-[#1b2a4a] font-medium">Teatro ragazzi · 11–15 anni:</strong>
                  Giovedì, 17:30–19:30
                </div>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <span className="block text-center bg-[#1b2a4a]/5 text-[#1b2a4a] text-xs font-medium py-3 rounded-full border border-[#1b2a4a]/10">
              Ricevimento unicamente su appuntamento
            </span>
          </div>
        </div>

        <div id="richiesta" className="scroll-mt-40 bg-[#fcfbf7] border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm h-full">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e5b869]">
              Scrivici un Messaggio
            </span>
            <h2 className="text-2xl font-serif text-[#1b2a4a]">Richiedi Info o Prova</h2>
          </div>

          <form className="space-y-3.5 flex-1 flex flex-col justify-between" autoComplete="off" onSubmit={verifyRequest} onChange={() => setVerified(false)}>
            <div className="space-y-3.5">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="nome" className="text-xs font-semibold text-slate-700">Nome e Cognome *</label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    maxLength={100}
                    pattern=".*\S.*"
                    type="text"
                    placeholder="Ada Inventata"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#1b2a4a]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700">Email *</label>
                  <input
                    id="email"
                    name="email"
                    required
                    maxLength={254}
                    type="email"
                    placeholder="ada@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#1b2a4a]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="telefono" className="text-xs font-semibold text-slate-700">Telefono</label>
                  <input
                    id="telefono"
                    name="telefono"
                    maxLength={30}
                    type="tel"
                    placeholder="Facoltativo"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#1b2a4a]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="interesse" className="text-xs font-semibold text-slate-700">Interesse</label>
                  <select id="interesse" name="interesse" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#1b2a4a]">
                    <option>Informazioni Generali</option>
                    <option>Teatro bambini (8-10 anni)</option>
                    <option>Teatro ragazzi (11-15 anni)</option>
                    <option>Workshop del sabato</option>
                    <option>Scenografia per famiglie</option>
                    <option>Spettacoli & Tournée</option>
                    <option>Collaborazioni e progetti per le scuole</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="messaggio" className="text-xs font-semibold text-slate-700">Messaggio *</label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  required
                  maxLength={2000}
                  onInput={event => event.currentTarget.setCustomValidity('')}
                  rows={3}
                  placeholder="Scrivi qui la tua richiesta..."
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#1b2a4a] resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1b2a4a] hover:bg-[#121d34] text-white text-xs font-medium py-3 rounded-full transition-all shadow mt-2"
            >
              Verifica Richiesta
            </button>
            <p role="status" aria-live="polite" className="text-xs text-[#1b2a4a] leading-relaxed">
              {verified ? 'Richiesta verificata nel browser. Nessun messaggio è stato inviato e nessuna prenotazione è stata effettuata.' : ''}
            </p>
          </form>
        </div>

      </section>

      <section className="max-w-6xl mx-auto px-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl font-serif text-[#1b2a4a]">Come Raggiungerci</h2>
          <span className="text-xs text-slate-500">Borgo delle Storie · Via delle Quinte 12</span>
        </div>
        <div className="relative w-full h-80 sm:h-96 bg-[#dbe4dc] rounded-3xl overflow-hidden border border-slate-200">
          <Image src="/images/quartiere.svg" alt="Mappa illustrata del quartiere di fantasia: Piazza dei Racconti, Giardino delle Voci e Officina delle Quinte" fill sizes="(max-width: 1200px) 100vw, 1152px" className="object-contain" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <TheatreImage image="visita" height="h-72 sm:h-96" />
        <div className="space-y-5">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8c6221]">Prima di entrare in sala</span>
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Una visita senza fretta</h2>
          <p className="text-sm text-slate-600 leading-relaxed">L’ingresso dell’Officina si apre sul cortile accanto al Giardino delle Voci, a pochi passi da Piazza dei Racconti. Durante i laboratori la sala è riservata al gruppo: per conoscere gli spazi scegliamo un momento dedicato, prima o dopo gli incontri.</p>
          <p className="text-sm text-slate-600 leading-relaxed">Per una lezione di prova considera dieci minuti di anticipo. Per gli spettacoli l’accoglienza del pubblico comincia mezz’ora prima dell’orario indicato. Se arrivi con un bambino, puoi accompagnarlo fino all’incontro con il docente.</p>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
            <h3 className="font-serif text-xl text-[#1b2a4a]">Raccontaci che cosa cerchi</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Per orientarti tra i corsi bastano la fascia d’età e il percorso di interesse. Per un workshop indica il titolo; per uno spettacolo, il titolo e il numero di persone. Evita dati sanitari o informazioni personali non necessarie.</p>
          </div>
        </div>
      </section>

      <Faq title="Le informazioni utili, prima della visita" items={[
        { question: 'Quando è aperta la segreteria?', answer: 'Dal lunedì al venerdì, dalle 15:00 alle 19:00. Gli incontri in presenza si svolgono su appuntamento, per lasciare ai docenti il tempo di seguire i gruppi in sala.' },
        { question: 'È possibile conoscere il docente prima di iniziare?', answer: 'La lezione conoscitiva comprende un breve momento di accoglienza e un confronto al termine. È l’occasione per raccontare interessi, aspettative e dubbi sul percorso.' },
        { question: 'Come segnalare un’esigenza di accessibilità?', answer: 'Indica il supporto pratico che potrebbe essere utile per la visita o la partecipazione. Non occorre descrivere diagnosi o inviare documentazione sanitaria.' },
        { question: 'Accogliete progetti di scuole e associazioni?', answer: 'Valutiamo percorsi di avvicinamento al teatro, letture e laboratori su misura. Per impostare una proposta sono utili fascia d’età, numero di partecipanti, periodo e obiettivi educativi.' },
      ]} />

    </div>
  )
}