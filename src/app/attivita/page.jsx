import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import { TheatreImage } from '@/components/TheatreImage'
import { CourseSchedule } from '@/components/CourseSchedule'
import { Faq } from '@/components/Faq'

export const metadata = { title: 'Attività e laboratori', description: 'Percorsi teatrali per bambini e ragazzi, workshop del sabato e laboratori creativi in famiglia. Programmi, orari e quote di partecipazione.' }

export default function AttivitaPage() {
  return (
    <div className="inner-editorial space-y-20 lg:space-y-28 pb-20">

      <PageIntro
        label="Formazione / Ricerca / Incontro"
        title="Il tuo spazio per sperimentare."
        description="Un percorso continuativo o un incontro per scoprire un linguaggio nuovo. Scegli come entrare in sala: il primo passo è la curiosità."
        details={["Bambini e ragazzi","Workshop aperti","Esperienze in famiglia"]}
        href="#proposte"
        action="Esplora le proposte"
      />

      <section id="proposte" className="scroll-mt-44 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        <Link
          href="/attivita/teatro"
          className="group border-b border-slate-300 pb-8 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-6">
            <TheatreImage image="attivitaTeatro" height="h-72 sm:h-96" />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold bg-[#e5b869]/20 text-[#8c6221] px-3 py-1 rounded-full border border-[#e5b869]/30">
                  Corsi & Laboratori
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#1b2a4a] group-hover:text-[#e5b869] transition-colors">
                Teatro
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Scopri i nostri corsi suddivisi per fasce d'età, tra cui i percorsi <strong>Teatro bambini</strong> (8-10 anni) e <strong>Teatro ragazzi</strong> (11-15 anni), volti allo sviluppo dell'espressività, dell'improvvisazione e del lavoro di gruppo.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-[#1b2a4a] font-medium text-sm">
            <span>Esplora i corsi di Teatro</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>

        <Link
          href="/attivita/altre-attivita-partner"
          className="group border-b border-slate-300 pb-8 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-6">
            <TheatreImage image="attivitaWorkshop" height="h-72 sm:h-96" />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold bg-[#1b2a4a]/10 text-[#1b2a4a] px-3 py-1 rounded-full border border-[#1b2a4a]/20">
                  In Collaborazione
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#1b2a4a] group-hover:text-[#e5b869] transition-colors">
                Attività Partner
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Progetti speciali, workshop creativi, incontri culturali e laboratori interdisciplinari realizzati insieme a professionisti ed enti partner del territorio.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-[#1b2a4a] font-medium text-sm">
            <span>Scopri le attività Partner</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>

      </section>

      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Tante strade per incontrare il teatro</h2>
          <p className="text-sm text-slate-600 leading-relaxed">Puoi scegliere la continuità di un gruppo settimanale oppure un incontro dedicato a una tecnica. Ogni proposta ha tempi, età di riferimento e obiettivi chiari.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['Percorsi continuativi', 'Un incontro alla settimana. Un gruppo stabile, una progressione di attività e una creazione finale da condividere con famiglie e amici.'],
            ['Workshop del sabato', 'Incontri singoli di due o tre ore dedicati a cinema, movimento, scenografia e canto. Si può partecipare anche senza frequentare i percorsi settimanali.'],
            ['Esperienze in famiglia', 'Il laboratorio di scenografia pop-up accoglie bambini dai 6 anni insieme a un adulto: si costruisce, si inventa e si porta a casa un piccolo mondo teatrale.'],
          ].map(([title, text]) => <article key={title} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4"><h3 className="font-serif text-xl text-[#1b2a4a]">{title}</h3><p className="text-sm leading-relaxed text-slate-600">{text}</p></article>)}
        </div>
      </section>

      <CourseSchedule />

      <section className="bg-[#fcfbf7] border border-slate-200 rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto space-y-7">
        <h2 className="text-3xl font-serif text-[#1b2a4a]">Dal primo incontro al tuo posto nel gruppo</h2>
        <ol className="grid md:grid-cols-3 gap-6 list-decimal list-inside text-sm text-slate-600 leading-relaxed">
          <li><strong className="text-[#1b2a4a]">Scegli una proposta.</strong> Consulta programma, fascia d’età e orari. Per i laboratori teatrali puoi cominciare con una lezione conoscitiva gratuita.</li>
          <li><strong className="text-[#1b2a4a]">Conosci il docente.</strong> Racconta aspettative e interessi; concordiamo insieme l’inserimento e condividiamo le informazioni pratiche con la famiglia.</li>
          <li><strong className="text-[#1b2a4a]">Entra nel percorso.</strong> Materiali comuni e preparazione del saggio sono inclusi nella quota. Per i workshop trovi in scheda tutto ciò che serve portare.</li>
        </ol>
      </section>

      <Faq title="Informazioni sulle attività" items={[
        { question: 'I workshop sono collegati ai percorsi teatrali?', answer: 'Sono esperienze autonome. Puoi provare un singolo linguaggio, come scenografia o lettura, oppure affiancarlo al percorso settimanale. Ogni laboratorio indica età, durata e quota.' },
        { question: 'Sono previsti costi per materiali o costumi?', answer: 'Le quote indicate comprendono materiali di uso comune, oggetti di scena e preparazione delle restituzioni. Si richiedono abiti comodi e una borraccia; eventuali capi da portare da casa vengono concordati in anticipo.' },
        { question: 'Come si organizzano gli incontri?', answer: 'I percorsi teatrali hanno una frequenza settimanale, con pause durante le festività scolastiche. I workshop sono incontri autonomi: ogni scheda presenta durata, fascia d’età e materiali.' },
      ]} />

      <section className="bg-[#1b2a4a] text-amber-50 rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto shadow-md text-center space-y-6">
        <h2 className="text-3xl font-serif text-[#e5b869]">Vuoi fare una lezione di prova?</h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Tutti i nostri corsi offrono una prima lezione conoscitiva gratuita. Contattaci per riservare il tuo posto o per richiedere informazioni sugli orari dei corsi.
        </p>
        <div>
          <Link
            href="/dove-siamo"
            className="inline-block bg-[#e5b869] hover:bg-[#d4a359] text-[#1b2a4a] font-medium text-sm px-8 py-3.5 rounded-full transition-all shadow"
          >
            Richiedi Informazioni
          </Link>
        </div>
      </section>

    </div>
  )
}