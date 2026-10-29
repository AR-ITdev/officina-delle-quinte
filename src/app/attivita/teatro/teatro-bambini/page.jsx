import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import { TheatreImage } from '@/components/TheatreImage'
import { CourseProgramme } from '@/components/CourseProgramme'

export const metadata = { title: 'Teatro bambini · 8–10 anni', description: 'Gioco teatrale, voce e immaginazione per bambini da 8 a 10 anni. Martedì 17:00–18:30, programma del percorso e informazioni per le famiglie.' }

export default function TeatroBambiniPage() {
  return (
    <div className="inner-editorial space-y-20 lg:space-y-28 pb-20">

      <div className="max-w-6xl mx-auto px-4 pt-4">
        <Link
          href="/attivita/teatro"
          className="inline-flex items-center text-xs font-medium text-slate-500 hover:text-[#1b2a4a] transition-colors gap-1"
        >
          ← Torna ai percorsi di Teatro
        </Link>
      </div>

      <PageIntro
        label="Teatro bambini / 8–10 anni"
        title="Il gioco diventa scena."
        description="Una scatola può essere una nave, un gesto può iniziare un’avventura. Il gruppo scopre la propria voce e costruisce piccole storie da abitare insieme."
        details={["Martedì · 17:00–18:30","Da 6 a 12 bambini","45 € al mese"]}
        href="#informazioni"
        action="Orari e prima lezione"
      />

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e5b869]">
            Il Percorso Formativo
          </span>
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Primi passi sul palcoscenico</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Il laboratorio <strong>Teatro bambini</strong> è stato pensato appositamente per accompagnare i bambini della scuola primaria alla scoperta delle proprie potenzialità espressive.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Attraverso esercitazioni ludiche, favole recitate e improvvisazioni guidate, i ragazzi imparano ad ascoltare il proprio corpo, a modulare la voce e a collaborare attivamente con i compagni per creare piccole storie condivise.
          </p>
        </div>

        <TheatreImage image="corsoBambini" height="h-80 sm:h-[480px]" />
      </section>

      <section className="bg-[#fcfbf7] border border-slate-200 rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Cosa Impareremo</h2>
          <p className="text-slate-600 text-sm">Gli elementi chiave su cui lavoriamo durante il percorso.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">

            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">Uso della Voce</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Giochi fonetici per articolare bene le parole, proiettare la voce nello spazio e vincere la timidezza.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">

            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">I Personaggi</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Invenzione e trasformazione: come indossare i panni di un personaggio usando postura, gesti e travestimenti.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">

            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">Lavoro di Squadra</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Imparare l'ascolto reciproco, il rispetto dei tempi scenici e l'importanza del gruppo dentro e fuori la scena.
            </p>
          </div>
        </div>
      </section>

      <section id="informazioni" className="scroll-mt-44 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        <div className="bg-[#1b2a4a] text-amber-50 rounded-3xl p-6 sm:p-8 space-y-4 md:col-span-1 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e5b869]">
              Info Corso
            </span>
            <h3 className="text-2xl font-serif">Calendario</h3>

            <ul className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-4">
              <li className="flex justify-between">
                <span className="font-medium text-white">Giorno:</span>
                <span>Ogni Martedì</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white">Orario:</span>
                <span>17:00 – 18:30</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white">Frequenza:</span>
                <span>1 Incontro/Settimana</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white">Durata:</span>
                <span>Percorso continuativo</span>
              </li>
              <li className="flex justify-between gap-3"><span className="font-medium text-white">Quota:</span><span>45 € / mese</span></li>
              <li className="flex justify-between gap-3"><span className="font-medium text-white">Docente:</span><span>Nora Ventoluce</span></li>
            </ul>
          </div>

          <div className="pt-4">
            <span className="inline-block w-full text-center bg-[#e5b869] text-[#1b2a4a] text-xs font-bold py-2 rounded-full">
              Saggio Finale Incluso
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 md:col-span-2 flex flex-col justify-between shadow-sm">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-[#1b2a4a]">Come si svolge una lezione tipo?</h3>
            <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside leading-relaxed">
              <li><strong>Riscaldamento ed Accoglienza (15 min):</strong> Giochi di movimento e cerchio delle emozioni.</li>
              <li><strong>Esercizi Teatrali & Improvvisazione (45 min):</strong> Giochi di ruolo, lavoro sul ritmo e uso degli oggetti scenici.</li>
              <li><strong>Lavoro sulla Storia e sul Saggio (30 min):</strong> Costruzione e memorizzazione delle battute per lo spettacolo finale.</li>
            </ol>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Prima lezione di prova sempre gratuita e senza impegno.
            </p>
            <Link
              href="/dove-siamo"
              className="bg-[#1b2a4a] hover:bg-[#121d34] text-white text-xs font-medium px-6 py-2.5 rounded-full transition-all shrink-0"
            >
              Informazioni sulla prova
            </Link>
          </div>
        </div>

      </section>

      <CourseProgramme course="teatro-bambini" />
    </div>
  )
}