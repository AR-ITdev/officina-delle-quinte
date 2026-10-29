import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import { TheatreImage } from '@/components/TheatreImage'
import { CourseProgramme } from '@/components/CourseProgramme'

export const metadata = { title: 'Teatro ragazzi · 11–15 anni', description: 'Recitazione, improvvisazione e scrittura scenica per ragazzi da 11 a 15 anni. Giovedì 17:30–19:30, dalle prime prove alla creazione collettiva.' }

export default function TeatroRagazziPage() {
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
        label="Teatro ragazzi / 11–15 anni"
        title="Una voce. Il tuo punto di vista."
        description="Improvvisare, scrivere, interpretare. Un laboratorio dove le domande dei ragazzi diventano personaggi, relazioni e una creazione collettiva."
        details={["Giovedì · 17:30–19:30","Da 6 a 14 ragazzi","55 € al mese"]}
        href="#informazioni"
        action="Orari e prima lezione"
      />

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e5b869]">
            Il Percorso Formativo
          </span>
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Espressione e Consapevolezza Scenica</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Il laboratorio <strong>Teatro ragazzi</strong> è rivolto ai ragazzi della scuola secondaria che desiderano mettersi in gioco, affinare la dizione e approfondire la costruzione del personaggio.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Attraverso un approccio dinamico e coinvolgente, i ragazzi affrontano testi d'autore e drammaturgie moderne, sviluppando senso critico, empatia e lavoro d'insieme.
          </p>
        </div>

        <TheatreImage image="corsoRagazzi" height="h-80 sm:h-[480px]" />
      </section>

      <section className="bg-[#fcfbf7] border border-slate-200 rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Cosa Impareremo</h2>
          <p className="text-slate-600 text-sm">I pilastri fondamentali del lavoro dell'attore per questo livello.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">

            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">Dizione & Proiezione</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tecniche di respirazione diaframmatica, articolazione vocale e controllo dell'emissione della voce sul palco.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">

            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">Analisi del Testo</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Studio delle motivazioni dei personaggi, sotto-testi e relazioni drammatiche all'interno di una scena.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">

            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">Improvvisazione Guidata</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sviluppo della prontezza di riflessi scenica, gestione degli imprevisti e presenza fisica nello spazio.
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
                <span>Ogni Giovedì</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white">Orario:</span>
                <span>17:30 – 19:30</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white">Frequenza:</span>
                <span>1 Incontro/Settimana (2h)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white">Durata:</span>
                <span>Percorso continuativo</span>
              </li>
              <li className="flex justify-between gap-3"><span className="font-medium text-white">Quota:</span><span>55 € / mese</span></li>
              <li className="flex justify-between gap-3"><span className="font-medium text-white">Docente:</span><span>Elio Cartavento</span></li>
            </ul>
          </div>

          <div className="pt-4">
            <span className="inline-block w-full text-center bg-[#e5b869] text-[#1b2a4a] text-xs font-bold py-2 rounded-full">
              Spettacolo Teatrale Finale
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 md:col-span-2 flex flex-col justify-between shadow-sm">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-[#1b2a4a]">Come si svolge una lezione tipo?</h3>
            <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside leading-relaxed">
              <li><strong>Riscaldamento Vocale e Corporeo (20 min):</strong> Esercizi di dizione, postura e training corale.</li>
              <li><strong>Tecnica ed Improvvisazione (50 min):</strong> Esercizi a coppie o in gruppo su situazioni drammatiche e comiche.</li>
              <li><strong>Allestimento dello Spettacolo (50 min):</strong> Lettura a tavolino, assegnazione dei ruoli e prove di regia per la messa in scena.</li>
            </ol>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Prima lezione di prova gratuita e senza impegno.
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

      <CourseProgramme course="teatro-ragazzi" />
    </div>
  )
}