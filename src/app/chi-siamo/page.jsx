import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import { TheatreImage } from '@/components/TheatreImage'

export const metadata = { title: 'Chi siamo', description: 'La storia, le persone e il metodo di Officina delle Quinte: una bottega teatrale che mette al centro ascolto, creatività e lavoro di gruppo.' }

export default function ChiSiamoPage() {
  return (
    <div className="inner-editorial space-y-20 lg:space-y-28 pb-20">

      <PageIntro
        label="Persone / Metodo / Spazi"
        title="Una bottega, tante voci."
        description="Il teatro nasce dalle persone. Ci incontriamo per ascoltare, fare ricerca e trasformare le idee del gruppo in storie da condividere."
        details={["Direzione artistica","Piccoli gruppi","Un lavoro condiviso"]}
        href="#persone"
        action="Conosci chi guida l’Officina"
      />

      <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e5b869]">
            L'Associazione
          </span>
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Officina delle Quinte</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            <strong>Officina delle Quinte</strong> nasce dalla passione condivisa per le arti performative e dalla volontà di creare uno spazio aperto dove la fantasia incontra la disciplina teatrale.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Siamo un'associazione culturale e compagnia teatrale che crede fermamente nel valore pedagogico e umano del teatro. Attraverso i nostri corsi, spettacoli e laboratori esperienziali, offriamo a bambini, ragazzi ed adulti un luogo sicuro dove esplorare la propria voce, scoprire il proprio talento e crescere insieme.
          </p>
        </div>

        <TheatreImage image="storia" height="h-72 sm:h-96" />
      </section>

      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Da una sala prove a un luogo da condividere</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">L’Officina prende forma attorno a un piccolo gruppo di lettura. Sedie spostate in cerchio, una valigia di oggetti e il desiderio di raccontare: da quegli incontri nasce l’idea di affiancare alla compagnia un laboratorio aperto al quartiere.</p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Oggi il calendario intreccia percorsi per bambini e ragazzi, giornate creative con le famiglie e spettacoli. La dimensione resta quella di una bottega: gruppi raccolti, lavoro artigianale e attenzione alle persone, dalla prima prova all’ultima replica.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            ['01', 'Le prime letture', 'Un gruppo di voci e un appuntamento serale: le storie diventano un’occasione di incontro.'],
            ['02', 'I laboratori crescono', 'Nascono i percorsi per età e le prime restituzioni condivise con famiglie e amici.'],
            ['03', 'Nuovi linguaggi', 'Cinema, movimento, scenografia e canto entrano nel programma dei sabati creativi.'],
          ].map(([step, title, text]) => <article key={step} className="border-t-2 border-[#e5b869] pt-5 space-y-3"><p className="text-sm font-semibold text-[#8c6221]">{step}</p><h3 className="font-serif text-xl text-[#1b2a4a]">{title}</h3><p className="text-sm leading-relaxed text-slate-600">{text}</p></article>)}
        </div>
      </section>

      <section className="bg-[#fcfbf7] border border-amber-900/10 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl font-serif text-[#1b2a4a]">I Nostri Pilastri</h2>
          <p className="text-slate-600 text-sm">Cosa guida il nostro lavoro quotidiano dentro e fuori dalla scena.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">Inclusività</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Il teatro è un linguaggio universale. Ogni studente viene accolto per la sua unicità, senza giudizio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">Creatività</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Incoraggiamo la ricerca personale, il gioco scenico e la sperimentazione di nuove forme d'arte.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
            <h3 className="font-serif text-lg text-[#1b2a4a] font-bold">Comunità</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Creiamo legami forti tra allievi, famiglie e territorio, facendo del gruppo la vera forza di ogni progetto.
            </p>
          </div>
        </div>
      </section>

      <section id="persone" className="scroll-mt-44 max-w-5xl mx-auto px-4 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e5b869]">
            Direzione Artistica
          </span>
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Chi Guida l'Officina</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="flex flex-col space-y-6 border-b border-slate-300 pb-8">
            <TheatreImage image="elio" height="h-96 sm:h-[480px]" />
            <div className="space-y-2 w-full">
              <div className="flex flex-wrap gap-2 justify-between items-baseline">
                <h3 className="text-2xl font-serif text-[#1b2a4a]">Elio Cartavento</h3>
                <span className="text-xs font-semibold text-[#8c6221] bg-[#e5b869]/20 px-2.5 py-1 rounded-full">
                  Regista & Fondatore
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pt-2">
                Cura la regia delle creazioni collettive e il laboratorio dei ragazzi. Parte da giochi di improvvisazione e piccoli esercizi di scrittura per accompagnare il gruppo dalla prima idea alla scena.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6 border-b border-slate-300 pb-8">
            <TheatreImage image="nora" height="h-96 sm:h-[480px]" />
            <div className="space-y-2 w-full">
              <div className="flex flex-wrap gap-2 justify-between items-baseline">
                <h3 className="text-2xl font-serif text-[#1b2a4a]">Nora Ventoluce</h3>
                <span className="text-xs font-semibold text-[#8c6221] bg-[#e5b869]/20 px-2.5 py-1 rounded-full">
                  Attrice & Pedagoga
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pt-2">
                Segue il gioco teatrale dei bambini e i percorsi di voce e movimento. Con oggetti, racconti e musica crea occasioni per esplorare le emozioni, ascoltare gli altri e trovare il proprio modo di esprimersi.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#8c6221] font-semibold">Il nostro metodo</span>
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Prima la persona, poi il personaggio</h2>
          <p className="text-sm text-slate-600 leading-relaxed">Una proposta teatrale funziona quando lascia spazio a chi la abita. Per questo alterniamo attività strutturate e momenti di invenzione: si sperimenta una tecnica, la si mette alla prova e si racconta al gruppo ciò che si è scoperto.</p>
          <p className="text-sm text-slate-600 leading-relaxed">L’errore entra nel processo creativo. Una battuta dimenticata può aprire una scena diversa; una timidezza può diventare un modo originale di ascoltare. Il docente accompagna questi passaggi e costruisce un clima in cui ci si sente liberi di provare.</p>
          <p className="text-sm text-slate-600 leading-relaxed">Con le famiglie manteniamo un confronto sui tempi e sugli obiettivi del percorso. A guidarci sono la partecipazione e la qualità delle relazioni, insieme alla cura del lavoro scenico.</p>
        </div>
        <TheatreImage image="metodo" height="h-96 sm:h-[480px]" />
      </section>

      <section className="max-w-5xl mx-auto bg-[#fcfbf7] border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-7">
        <h2 className="text-3xl font-serif text-[#1b2a4a]">Gli spazi della nostra bottega</h2>
        <div className="grid sm:grid-cols-2 gap-8 text-sm text-slate-600 leading-relaxed">
          <div className="space-y-3"><h3 className="text-xl font-serif text-[#1b2a4a]">La sala del movimento</h3><p>Uno spazio libero da arredi fissi, dove sedie e oggetti cambiano posto a seconda del lavoro. Qui si svolgono training, giochi di gruppo e prove, con un piccolo impianto audio e luci per sperimentare l’atmosfera della scena.</p></div>
          <div className="space-y-3"><h3 className="text-xl font-serif text-[#1b2a4a]">Il tavolo delle idee</h3><p>Copioni, carta, stoffe e materiali di recupero: una zona dedicata alla scrittura e alla costruzione di oggetti. È anche il luogo in cui ci fermiamo a parlare, raccogliere le proposte e preparare il prossimo incontro.</p></div>
        </div>
      </section>

      <section className="bg-[#1b2a4a] text-amber-50 rounded-3xl p-8 sm:p-12 text-center max-w-5xl mx-auto space-y-6 shadow-md">
        <h2 className="text-3xl font-serif">Trova il tuo posto in sala</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
          Vieni a scoprire la nostra sede, partecipa a una lezione di prova gratuita o semplicemente vieni a conoscerci.
        </p>
        <div>
          <Link
            href="/attivita"
            className="inline-block bg-[#e5b869] hover:bg-[#d4a359] text-[#1b2a4a] font-medium text-sm px-8 py-3.5 rounded-full transition-all shadow"
          >
            Scopri i Nostri Laboratori
          </Link>
        </div>
      </section>

    </div>
  )
}