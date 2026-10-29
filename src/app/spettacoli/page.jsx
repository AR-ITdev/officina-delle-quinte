import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import { TheatreImage } from '@/components/TheatreImage'
import { Faq } from '@/components/Faq'

export const metadata = { title: 'Spettacoli e produzioni', description: 'La Città delle Tasche e le restituzioni dei laboratori Teatro bambini e Teatro ragazzi: storie, durate e informazioni per la visita a teatro.' }

export default function SpettacoliPage() {
  const produzioni = [
    {
      title: "La Città delle Tasche",
      category: "Produzione Originale",
      tag: "Per famiglie",
      tagColor: "bg-[#e5b869] text-slate-900",
      description: "In una città dove tutti conservano i sogni in tasca, una sarta trova un desiderio rimasto senza proprietario. Un racconto di oggetti, incontri e piccole possibilità, dedicato a tutta la famiglia.",
      id: 'citta-delle-tasche',
      image: 'spettacoloOggetti',
      details: "50 minuti · Dai 6 anni · Ingresso 8 €",
      note: 'Teatro d’oggetti e narrazione si incontrano in una storia sul valore dei desideri piccoli. La scena cambia con stoffe, scatole e suoni dal vivo, lasciando al pubblico il piacere di completare il paesaggio con l’immaginazione.',
    },
    {
      title: "Le Avventure del Piccolo Marinaio",
      category: "Teatro Ragazzi",
      tag: "Saggio Teatro bambini",
      tagColor: "bg-[#e5b869] text-[#1b2a4a]",
      description: "La messa in scena finale del laboratorio Teatro bambini (8-10 anni). Una favola marinaresca sull'amicizia e il coraggio, scritta e interpretata dai nostri allievi più giovani.",
      id: 'piccolo-marinaio',
      image: 'spettacoloBambini',
      details: "45 minuti · Ingresso libero",
      note: 'Una mappa incompleta e un equipaggio pieno di idee guidano i personaggi attraverso isole inventate. La restituzione raccoglie i giochi e le storie nate durante il percorso, con piccoli ruoli corali e oggetti costruiti in laboratorio.',
    },
    {
      title: "Oltre l'Orizzonte",
      category: "Prosa Contemporanea",
      tag: "Saggio Teatro ragazzi",
      tagColor: "bg-[#1b2a4a] text-white",
      description: "Il saggio finale del laboratorio Teatro ragazzi (11-15 anni). Una drammaturgia originale che esplora i temi del cambiamento, della crescita e della scoperta di sé.",
      id: 'oltre-orizzonte',
      image: 'spettacoloRagazzi',
      details: "60 minuti · Ingresso libero",
      note: 'Un gruppo si trova davanti a una porta che nessuno ha ancora aperto. Attraverso scene brevi e scrittura collettiva, i ragazzi raccontano aspettative, amicizie e cambiamenti, alternando momenti corali e dialoghi a due.',
    },
  ]

  return (
    <div className="inner-editorial space-y-20 lg:space-y-28 pb-20">

      <PageIntro
        label="Produzioni / Creazioni collettive"
        title="Le storie incontrano il pubblico."
        description="Oggetti che prendono vita, piccoli equipaggi e orizzonti da esplorare. Le produzioni della compagnia e le creazioni dei laboratori condividono lo stesso palcoscenico."
        details={["Teatro d’oggetti","Scrittura collettiva","Per famiglie e nuovi pubblici"]}
        href="#produzioni"
        action="Scopri le storie in scena"
      />

      <section id="produzioni" className="production-list scroll-mt-44 max-w-6xl mx-auto px-4 space-y-16">
        {produzioni.map(spettacolo => (
          <article
            key={spettacolo.id}
            id={spettacolo.id}
            className="scroll-mt-44 grid md:grid-cols-5 gap-8 lg:gap-14 items-center border-b border-slate-300 pb-16"
          >

            <div className="md:col-span-2 relative h-80 sm:h-[480px]">
              <TheatreImage image={spettacolo.image} height="h-full" />
              <span className={`absolute top-4 right-4 font-serif font-bold text-xs px-3 py-1 rounded-full shadow z-10 ${spettacolo.tagColor}`}>
                {spettacolo.tag}
              </span>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#e5b869]">
                  {spettacolo.category}
                </span>
                <h2 className="text-3xl font-serif text-[#1b2a4a]">
                  {spettacolo.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base pt-2">
                  {spettacolo.description}
                </p>
                <p className="text-xs font-medium text-[#1b2a4a]">{spettacolo.details}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{spettacolo.note}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-4">
                <span>Regia: Elio Cartavento / Nora Ventoluce</span>
                <Link
                  href="/dove-siamo#richiesta"
                  className="text-[#1b2a4a] font-medium hover:underline shrink-0"
                >
                  Informazioni e posti →
                </Link>
              </div>
            </div>

          </article>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {[
          ['Prima del sipario', 'La sala apre trenta minuti prima dell’inizio. Arrivare con un po’ di anticipo permette di sistemarsi con calma e accompagnare i bambini alla scoperta dello spazio.'],
          ['Un pubblico di tutte le età', 'Ogni titolo indica un’età consigliata e la durata. Per La Città delle Tasche i bambini partecipano accompagnati da un adulto; i saggi accolgono famiglie e amici.'],
          ['Una serata condivisa', 'Durante lo spettacolo chiediamo di silenziare i telefoni e lasciare le fotocamere in borsa. Dopo il saluto finale c’è tempo per incontrare il gruppo e raccontarsi le emozioni della scena.'],
        ].map(([title, text]) => <article key={title} className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-[#fcfbf7] space-y-4"><h2 className="font-serif text-2xl text-[#1b2a4a]">{title}</h2><p className="text-sm text-slate-600 leading-relaxed">{text}</p></article>)}
      </section>

      <Faq title="Organizzare la visita a teatro" items={[
        { question: 'Dove si svolgono gli appuntamenti?', answer: 'Gli spettacoli si tengono nella sala di Via delle Quinte 12, a Borgo delle Storie. L’accesso del pubblico è segnalato dal cortile accanto al Giardino delle Voci.' },
        { question: 'Anche per i saggi a ingresso libero occorre un posto?', answer: 'La sala ha una capienza raccolta. Per organizzare al meglio l’accoglienza è previsto un confronto con la segreteria anche per gli appuntamenti gratuiti, indicando il numero di adulti e bambini.' },
        { question: 'Posso segnalare esigenze di accessibilità?', answer: 'Prima della visita è possibile indicare il supporto necessario per l’ingresso e la sistemazione in sala, senza comunicare dati sanitari. Questo aiuta a concordare tempi e modalità di accoglienza.' },
      ]} />

      <section className="bg-[#1b2a4a] text-amber-50 rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto shadow-md text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#e5b869]/20 text-[#e5b869] px-4 py-1 rounded-full text-xs font-semibold tracking-wide border border-[#e5b869]/30">
           In Viaggio
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-white">Le Nostre Tournée</h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Progettiamo spettacoli che possano incontrare il pubblico anche in biblioteche, scuole e piccoli spazi culturali. Per ogni proposta valutiamo insieme durata, fascia d’età, dimensioni della scena e necessità tecniche. Sei un organizzatore? Raccontaci il tuo spazio e il pubblico che vorresti coinvolgere.
        </p>
        <div>
          <Link
            href="/dove-siamo"
            className="inline-block bg-[#e5b869] hover:bg-[#d4a359] text-[#1b2a4a] font-medium text-sm px-8 py-3.5 rounded-full transition-all shadow"
          >
            Richiedi Info Distribuzione
          </Link>
        </div>
      </section>

    </div>
  )
}