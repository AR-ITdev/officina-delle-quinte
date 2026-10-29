import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import { TheatreImage } from '@/components/TheatreImage'
import { Faq } from '@/components/Faq'

export const metadata = { title: 'Workshop e attività partner', description: 'Cinema, movimento, scenografia e canto: quattro workshop del sabato con programmi, materiali, fasce d’età e quote di partecipazione.' }

export default function AltreAttivitaPartnerPage() {
  const partnerActivities = [
    {
      title: "CineFactory Junior",
      partner: "Collettivo Fotogramma di Carta",
      category: "Cinema & Video",
      description: "Laboratorio teorico e pratico di regia e recitazione cinematografica per ragazzi. Gli allievi imparano a stare davanti alla macchina da presa e realizzano un vero cortometraggio.",
      colorTag: "bg-[#1b2a4a] text-amber-50",
      schedule: "3 ore · 12–16 anni · 25 €",
      id: 'cinefactory',
      image: 'workshopCinema',
      work: 'Si parte da una breve situazione e si prova a raccontarla con tre inquadrature. A turno si sperimentano recitazione, regia e ripresa, fino a realizzare una sequenza di gruppo.',
      materials: 'Attrezzatura condivisa in sala; porta un quaderno. Gruppo da 6 a 10 partecipanti. Le riprese restano un esercizio interno e non vengono pubblicate.',
    },
    {
      title: "Corpo, Voce e Movimento",
      partner: "Atelier Passi di Nuvola",
      category: "Danza & Espressione",
      description: "Percorso dedicato all'espressività corporea e all'uso consapevole dello spazio scenico, integrando tecniche di danza contemporanea e movimento creativo per attori.",
      colorTag: "bg-[#e5b869] text-slate-900",
      schedule: "3 ore · Dai 16 anni · 25 €",
      id: 'movimento',
      image: 'workshopMovimento',
      work: 'Dopo un riscaldamento dolce si lavora su peso, direzione e ritmo. A coppie si costruiscono piccole scene senza parole, per scoprire quante intenzioni può contenere un gesto.',
      materials: 'Abiti comodi, calzini antiscivolo e borraccia. Non è richiesta preparazione nella danza. Gruppo da 6 a 12 partecipanti.',
    },
    {
      title: "Disegno & Scenografia Pop-Up",
      partner: "Bottega dei Mondi di Cartone",
      category: "Arti Visive & Scenografia",
      description: "Workshop manuali e creativi per la realizzazione di elementi scenografici, maschere e costumi teatrali utilizzando materiali di riciclo e tecniche di pop-up.",
      colorTag: "bg-[#8bb2c9] text-slate-900",
      schedule: "2 ore · Dai 6 anni · 18 € a coppia",
      id: 'scenografia',
      image: 'workshopScenografia',
      work: 'Un adulto e un bambino progettano insieme un teatro in miniatura. Si scelgono ambientazione, colori e personaggi, poi si sperimentano fondali e quinte mobili per raccontare una breve storia.',
      materials: 'Carta, cartone, colori e strumenti sono inclusi. Ogni coppia porta a casa il proprio piccolo teatro. Fino a 8 coppie adulto-bambino.',
    },
    {
      title: "Voce in Musica & Canto Scenico",
      partner: "Ensemble delle Sette Lune",
      category: "Musica & Canto",
      description: "Corsi dedicati all'impostazione vocale, al ritmo e al canto per il musical e il teatro musicale, con l'obiettivo di preparare gli allievi alle esibizioni corali e soliste.",
      colorTag: "bg-[#1b2a4a] text-amber-50",
      schedule: "3 ore · Dai 14 anni · 25 €",
      id: 'canto',
      image: 'workshopVoce',
      work: 'Si esplorano respiro, articolazione e ritmo con esercizi accessibili anche a chi comincia. Parole e semplici melodie diventano un breve quadro corale costruito insieme.',
      materials: 'Borraccia e abiti comodi; testi e tracce vengono forniti. Nessuna conoscenza musicale richiesta. Gruppo da 6 a 12 partecipanti.',
    },
  ]

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
        label="Workshop / Linguaggi in dialogo"
        title="Altri modi di fare scena."
        description="Cinema, movimento, scenografia e canto. Incontri autonomi per cambiare prospettiva e lavorare con professionisti di linguaggi diversi."
        details={["Quattro linguaggi","Incontri di 2 o 3 ore","Materiali condivisi"]}
        href="#workshop"
        action="Scegli un laboratorio"
      />

      <section id="workshop" className="workshop-list scroll-mt-44 max-w-6xl mx-auto px-4 space-y-16">
        {partnerActivities.map(item => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-44"
          >
              <div className="relative">
                <TheatreImage image={item.image} height="h-80 sm:h-[480px]" />
                <span className={`absolute top-3 right-3 font-serif text-xs px-3 py-1 rounded-full shadow font-semibold ${item.colorTag}`}>
                  {item.category}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-serif text-[#1b2a4a]">
                    {item.title}
                  </h2>
                </div>

                <p className="text-xs font-semibold text-[#8c6221] tracking-wide">
                  Partner: {item.partner}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed pt-2">
                  {item.description}
                </p>
                <h3 className="text-lg font-serif text-[#1b2a4a] pt-3">Cosa faremo insieme</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.work}</p>
                <p className="text-xs text-slate-500 leading-relaxed bg-white border border-slate-100 p-4 rounded-xl">{item.materials}</p>
              </div>
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-3 items-center justify-between text-xs text-slate-500">
              <span className="leading-relaxed">{item.schedule}</span>
              <Link
                href="/dove-siamo#richiesta"
                className="text-[#1b2a4a] font-medium hover:underline"
              >
                Info & Iscrizioni →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <Faq title="Partecipare a un workshop" items={[
        { question: 'Posso partecipare a un solo incontro?', answer: 'Sì, ogni workshop è un’esperienza completa e autonoma. Scegli il linguaggio che ti incuriosisce e verifica la fascia d’età; la frequenza dei percorsi settimanali non è necessaria.' },
        { question: 'Come si svolge l’accoglienza?', answer: 'Si arriva dieci minuti prima per conoscere il conduttore e preparare i materiali. L’incontro alterna una parte guidata e un momento di creazione; alla fine c’è spazio per condividere ciò che è nato.' },
        { question: 'Che cosa comprende la quota?', answer: 'Comprende conduzione e materiali descritti nella scheda. Per Scenografia Pop-Up la quota di 18 € riguarda una coppia composta da un adulto e un bambino. Gli altri importi sono per partecipante.' },
        { question: 'Le attività vengono fotografate o registrate?', answer: 'L’eventuale uso di immagini viene concordato separatamente con i partecipanti o con chi esercita la responsabilità genitoriale. Le riprese del laboratorio cinema sono esercizi didattici interni, senza pubblicazione automatica.' },
      ]} />

      <section className="bg-[#1b2a4a] text-amber-50 rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto shadow-md text-center space-y-6">
        <h2 className="text-3xl font-serif text-[#e5b869]">Sei un'associazione o un insegnante?</h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Siamo sempre aperti a nuove collaborazioni per ampliare la nostra offerta formativa e culturale. Proponi il tuo progetto o richiedi l'uso dei nostri spazi.
        </p>
        <div>
          <Link
            href="/dove-siamo"
            className="inline-block bg-[#e5b869] hover:bg-[#d4a359] text-[#1b2a4a] font-medium text-sm px-8 py-3.5 rounded-full transition-all shadow"
          >
            Proponi una Collaborazione
          </Link>
        </div>
      </section>

    </div>
  )
}