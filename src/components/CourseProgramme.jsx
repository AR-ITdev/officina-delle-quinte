import Link from 'next/link'
import { TheatreImage } from '@/components/TheatreImage'
import { Faq } from '@/components/Faq'

const programmes = {
  'teatro-bambini': {
    image: 'preparazioneBambini',
    terms: [
      { period: 'Conoscersi', title: 'Un gruppo, tante possibilità', text: 'Giochi di nome, ritmo e movimento per conoscersi. Una stoffa, una scatola o un suono diventano il punto di partenza di piccole avventure, senza copioni da imparare.' },
      { period: 'Esplorare', title: 'Personaggi in cerca di storie', text: 'Si inventano voci, camminate e incontri. Le proposte dei bambini entrano in un racconto comune, alternando scene improvvisate, disegno e costruzione di semplici oggetti.' },
      { period: 'Condividere', title: 'La nostra prima scena', text: 'Le idee raccolte diventano Le Avventure del Piccolo Marinaio. Si provano entrate, uscite e piccoli dialoghi, con un ruolo pensato per valorizzare ciascun partecipante.' },
    ],
    preparation: 'Bastano abiti comodi, calzini antiscivolo o scarpe pulite e una borraccia. Materiali e piccoli oggetti di scena sono già in sala. Il gruppo accoglie fino a 12 bambini, per dare a tutti tempo e attenzione.',
    questions: [
      { question: 'È adatto anche a un bambino timido?', answer: 'Si comincia da giochi di gruppo e attività in coppia, rispettando i tempi di ciascuno. Nessuno è chiamato a esibirsi da solo al primo incontro: anche osservare è un modo per entrare nel gioco.' },
      { question: 'I genitori possono restare alla prima lezione?', answer: 'L’accoglienza iniziale si svolge insieme al genitore. Il passaggio al gruppo viene concordato con la docente, con un breve momento di confronto al termine dell’incontro.' },
      { question: 'Serve imparare le battute a casa?', answer: 'Le scene nascono soprattutto durante il laboratorio. Piccole letture o giochi facoltativi possono accompagnare il percorso, senza trasformarlo in un compito scolastico.' },
      { question: 'Come funziona il saggio finale?', answer: 'Al termine del percorso, famiglie e amici condividono una breve storia costruita dal gruppo. Costumi semplici e materiali comuni sono compresi nella quota.' },
    ],
  },
  'teatro-ragazzi': {
    image: 'preparazioneRagazzi',
    terms: [
      { period: 'Conoscersi', title: 'Presenza e fiducia', text: 'Training di gruppo, ascolto e improvvisazioni brevi. Si esplorano lo spazio, il ritmo del dialogo e il rapporto tra voce e intenzione, creando un linguaggio comune.' },
      { period: 'Esplorare', title: 'Scrivere per la scena', text: 'Dai temi scelti dai ragazzi nascono personaggi e situazioni. Si leggono testi originali, si provano punti di vista diversi e si costruisce una drammaturgia collettiva.' },
      { period: 'Condividere', title: 'Dalla prova al pubblico', text: 'Il gruppo prepara Oltre l’Orizzonte: sequenza delle scene, relazioni tra personaggi, luci e tempi. Le prove diventano uno spazio per proporre, rivedere e scegliere insieme.' },
    ],
    preparation: 'Porta abiti che permettano di muoverti, scarpe pulite, una borraccia e un quaderno. Copioni e materiali di lavoro vengono forniti in sala. Il gruppo accoglie fino a 14 ragazzi, anche alla prima esperienza.',
    questions: [
      { question: 'Bisogna aver già fatto teatro?', answer: 'Il percorso accoglie sia chi comincia sia chi ha già partecipato a un laboratorio. Gli esercizi hanno livelli diversi di approfondimento e il lavoro di gruppo permette di imparare anche osservando gli altri.' },
      { question: 'Ci sono provini o selezioni?', answer: 'L’ingresso avviene attraverso una lezione conoscitiva e un confronto con il docente. L’obiettivo è trovare un gruppo adatto per età e percorso, senza provini o graduatorie.' },
      { question: 'Si lavora solo sulla recitazione?', answer: 'Alla recitazione si affiancano scrittura, lettura, movimento e prime scelte di messa in scena. Ogni partecipante può contribuire anche alle idee per suoni, oggetti e atmosfera dello spettacolo.' },
      { question: 'Quando si va in scena?', answer: 'Oltre l’Orizzonte conclude il percorso con una restituzione aperta a famiglie e amici. Le prove aggiuntive vengono concordate con le famiglie, rispettando gli impegni del gruppo.' },
    ],
  },
}

export function CourseProgramme({ course }) {
  const programme = programmes[course]
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8c6221]">Le fasi del percorso</span>
          <h2 className="text-3xl font-serif text-[#1b2a4a]">Un passo alla volta, fino alla scena</h2>
          <p className="text-sm text-slate-600 leading-relaxed">Ogni fase lascia spazio alle idee del gruppo. Il percorso dà continuità agli incontri e accompagna ciascuno a riconoscere i propri progressi.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {programme.terms.map((term, index) => (
            <article key={term.period} className="rounded-3xl bg-[#fcfbf7] border border-slate-200 p-6 sm:p-8 space-y-4">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-[#e5b869]/25 text-[#8c6221] font-serif text-xl">{index + 1}</span>
              <p className="text-xs font-semibold text-[#8c6221]">{term.period}</p>
              <h3 className="text-xl font-serif text-[#1b2a4a]">{term.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{term.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <TheatreImage image={programme.image} height="h-72 sm:h-96" />
        <div className="space-y-5">
          <h2 className="text-3xl font-serif text-[#1b2a4a]">La prima volta in sala</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{programme.preparation}</p>
          <p className="text-sm text-slate-600 leading-relaxed">La prova segue una lezione del gruppo e dura quanto un incontro ordinario. Arriva dieci minuti prima: ci sarà il tempo di presentarsi e conoscere lo spazio. Le famiglie ricevono indicazioni sul percorso e sulle modalità di partecipazione.</p>
          <Link href="/dove-siamo#richiesta" className="inline-block bg-[#1b2a4a] text-white rounded-full px-6 py-3 text-sm hover:bg-[#121d34]">Informazioni sulla lezione di prova</Link>
        </div>
      </section>
      <Faq title="Prima di cominciare" items={programme.questions} />
    </>
  )
}
