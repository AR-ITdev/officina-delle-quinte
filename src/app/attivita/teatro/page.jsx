import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import { TheatreImage } from '@/components/TheatreImage'
import { CourseSchedule } from '@/components/CourseSchedule'
import { Faq } from '@/components/Faq'

export const metadata = { title: 'Laboratori teatrali', description: 'Teatro bambini e Teatro ragazzi: percorsi teatrali settimanali per 8–10 e 11–15 anni. Orari, metodo e prima lezione conoscitiva.' }

export default function TeatroPage() {
  return (
    <div className="inner-editorial space-y-20 lg:space-y-28 pb-20">

      <div className="max-w-6xl mx-auto px-4 pt-4">
        <Link
          href="/attivita"
          className="inline-flex items-center text-xs font-medium text-slate-500 hover:text-[#1b2a4a] transition-colors gap-1"
        >
          ← Torna a tutte le attività
        </Link>
      </div>

      <PageIntro
        label="La scuola / Il lavoro in sala"
        title="Crescere dentro una storia."
        description="Voce, corpo e immaginazione trovano spazio in due percorsi pensati per età diverse. Si impara facendo teatro, insieme agli altri."
        details={["8–10 e 11–15 anni","Un incontro settimanale","Prima lezione gratuita"]}
        href="#percorsi"
        action="Trova il tuo percorso"
      />

      <section id="percorsi" className="scroll-mt-44 max-w-6xl mx-auto px-4 grid sm:grid-cols-2 gap-10">

        <Link
          href="/attivita/teatro/teatro-bambini"
          className="group border-b border-slate-300 pb-8 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-5">
            <div className="relative">
              <TheatreImage image="indiceBambini" height="h-72 sm:h-96" />
              <span className="absolute top-3 right-3 bg-[#e5b869] text-slate-900 font-serif font-bold text-xs px-3 py-1 rounded-full shadow z-10">
                8 - 10 anni
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-serif text-[#1b2a4a] group-hover:text-[#e5b869] transition-colors">
                  Teatro bambini
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Un primo e giocoso approccio alla drammatizzazione, alla scoperta della propria voce, al movimento nello spazio e all'uso della libera immaginazione.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-[#1b2a4a] font-medium text-sm">
            <span>Scopri il corso Teatro bambini</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>

        <Link
          href="/attivita/teatro/teatro-ragazzi"
          className="group border-b border-slate-300 pb-8 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-5">
            <div className="relative">
              <TheatreImage image="indiceRagazzi" height="h-72 sm:h-96" />
              <span className="absolute top-3 right-3 bg-[#1b2a4a] text-amber-50 font-serif text-xs px-3 py-1 rounded-full shadow z-10">
                11 - 15 anni
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-serif text-[#1b2a4a] group-hover:text-[#e5b869] transition-colors">
                  Teatro ragazzi
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Percorso dedicato allo studio dell'interpretazione, all'improvvisazione guidata, alla costruzione del personaggio e alla messa in scena finale.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-[#1b2a4a] font-medium text-sm">
            <span>Scopri il corso Teatro ragazzi</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>

      </section>

      <CourseSchedule />

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <TheatreImage image="metodoCorsi" height="h-72 sm:h-96" />
        <div className="space-y-5">
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Il teatro si impara facendolo, insieme</h2>
          <p className="text-sm text-slate-600 leading-relaxed">Ogni incontro alterna un momento di riscaldamento, una proposta di ricerca e un lavoro condiviso. Si parte dal gioco nei gruppi dei più piccoli, per arrivare gradualmente al testo e alla costruzione del personaggio con i ragazzi.</p>
          <p className="text-sm text-slate-600 leading-relaxed">Il docente propone una direzione e raccoglie ciò che emerge in sala. La scena prende forma attraverso tentativi, ascolto e confronto: le idee dei partecipanti entrano davvero nel lavoro finale.</p>
          <p className="text-sm text-slate-600 leading-relaxed">A metà percorso dedichiamo un incontro alle famiglie per raccontare il lavoro svolto. La restituzione finale rende visibile il viaggio del gruppo, senza gare o classifiche.</p>
        </div>
      </section>

      <Faq title="Scegliere il percorso" items={[
        { question: 'Qual è il gruppo più adatto?', answer: 'L’età è il primo riferimento: il percorso bambini accoglie la fascia 8–10 anni, quello ragazzi la fascia 11–15. La lezione conoscitiva permette di valutare insieme anche il ritmo e le esigenze del partecipante.' },
        { question: 'Si può entrare in un gruppo già avviato?', answer: 'L’inserimento viene valutato insieme al docente, in base ai posti disponibili e al lavoro in corso. La lezione conoscitiva aiuta a capire se è il momento adatto per entrare nel gruppo.' },
        { question: 'Cosa succede se si salta una lezione?', answer: 'È utile avvisare prima dell’incontro. Il docente aiuta il partecipante a ritrovare il filo alla lezione successiva; le assenze individuali non prevedono recuperi separati o riduzioni della quota mensile.' },
      ]} />

      <section className="bg-[#1b2a4a] text-amber-50 rounded-3xl p-8 sm:p-10 max-w-6xl mx-auto shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-2xl font-serif text-[#e5b869]">Dalle prove allo spettacolo</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Tutti i corsi di teatro culminano con la realizzazione di uno spettacolo vero e proprio in teatro aperto al pubblico, ad amici e famiglie.
          </p>
        </div>
        <Link
          href="/spettacoli"
          className="shrink-0 bg-white/10 hover:bg-[#e5b869] hover:text-[#1b2a4a] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full border border-white/20 transition-all"
        >
          Vedi gli Spettacoli
        </Link>
      </section>

    </div>
  )
}