import Link from 'next/link'
import Image from 'next/image'
import { TheatreImage } from '@/components/TheatreImage'
import { Faq } from '@/components/Faq'
import { HOME_STORY, PHOTOS } from '@/data/photos'

const courses = [
  { title: 'Teatro bambini', slug: 'teatro-bambini', age: '8–10 anni', image: 'percorsoBambini', schedule: 'Martedì · 17:00–18:30', text: 'Corpo, voce e invenzione. Un percorso per esplorare il linguaggio teatrale, dare forma alle idee e costruire una storia con il gruppo.' },
  { title: 'Teatro ragazzi', slug: 'teatro-ragazzi', age: '11–15 anni', image: 'percorsoRagazzi', schedule: 'Giovedì · 17:30–19:30', text: 'Improvvisazione, scrittura e interpretazione. Dalle prime intuizioni alla costruzione di personaggi e scene, fino a una creazione collettiva.' },
]

const agenda = [
  { format: '3 ore', category: 'Workshop · Cinema', title: 'CineFactory Junior', text: 'Inquadratura, intenzione, punto di vista. Una mattina per sperimentare come cambia una scena davanti alla macchina da presa.', href: '/attivita/altre-attivita-partner#cinefactory', image: 'agendaCinema' },
  { format: '2 ore', category: 'Laboratorio · Scenografia', title: 'Lo spazio diventa racconto', text: 'Fondali, quinte e materiali di recupero: adulti e bambini progettano un piccolo spazio scenico e le sue possibilità.', href: '/attivita/altre-attivita-partner#scenografia', image: 'agendaArte' },
  { format: 'Dai 6 anni', category: 'Spettacolo · Per famiglie', title: 'La Città delle Tasche', text: 'Una sarta, un desiderio smarrito e una città piena di storie. Teatro d’oggetti e narrazione, a pochi passi dal pubblico.', href: '/spettacoli#citta-delle-tasche', image: 'agendaSpettacolo' },
]

export default function HomePage() {
  return (
    <div className="home-editorial space-y-20 lg:space-y-28 pb-16">
      <section className="theatre-hero bg-[#101a2d] text-white">
        <div className="theatre-hero-stage relative isolate">
          <Image src={PHOTOS.heroScena.src} alt={PHOTOS.heroScena.alt} fill sizes="100vw" loading="eager" fetchPriority="high" className="object-cover -z-20" style={{ objectPosition: PHOTOS.heroScena.position }} />
          <div className="theatre-hero-shade absolute inset-0 -z-10" />
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24 flex flex-col justify-center min-h-[660px] sm:min-h-[740px]">
          <div className="max-w-2xl space-y-7">
            <p className="editorial-label text-[#e5b869]">Officina delle Quinte / Laboratorio teatrale</p>
            <h1 className="font-serif text-[2.9rem] sm:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight">Il teatro è uno spazio da <em className="font-normal text-[#e5b869]">abitare.</em></h1>
            <p className="font-serif text-xl sm:text-2xl text-slate-200 leading-relaxed max-w-lg">Formazione, ricerca e storie da portare in scena. Insieme.</p>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg">Una bottega teatrale aperta alle nuove generazioni, alle famiglie e a chi cerca un incontro con la scena. Percorsi settimanali, workshop e spettacoli: il lavoro comincia dalle persone e prende forma nelle loro idee.</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link href="/attivita/teatro" className="editorial-button bg-[#e5b869] text-[#1b2a4a] hover:bg-[#f1cd92]">Esplora i percorsi <span aria-hidden="true">↗</span></Link>
              <Link href="/spettacoli" className="editorial-button border border-white/35 hover:bg-white/10">Scopri gli spettacoli <span aria-hidden="true">↗</span></Link>
            </div>
            <p className="text-xs text-slate-300 border-t border-white/20 pt-5 leading-relaxed">Borgo delle Storie · Percorsi e laboratori per tutte le età<br />Una prima lezione conoscitiva per trovare il proprio percorso.</p>
          </div>
          </div>
        </div>
        <div className="bg-[#1b2a4a] border-t border-white/15">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3">
          {[
            ['01 / Formazione', 'Il tempo per sperimentare', '/attivita/teatro'],
            ['02 / Laboratori aperti', 'L’incontro tra linguaggi', '/attivita/altre-attivita-partner'],
            ['03 / Spettacoli', 'La scena incontra il pubblico', '/spettacoli'],
          ].map(([label, title, href]) => <Link key={href} href={href} className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-white/15 hover:bg-white/5 transition-colors"><p className="editorial-label text-[#e5b869]">{label}</p><p className="font-serif text-lg mt-2">{title} <span aria-hidden="true">↗</span></p></Link>)}
        </div>
        </div>
      </section>

      <section className="space-y-9">
        <div className="flex flex-wrap gap-6 items-end justify-between">
          <div className="space-y-4"><p className="editorial-label text-[#8c6221]">Un racconto per immagini</p><h2 className="font-serif text-4xl sm:text-5xl text-[#1b2a4a]">La scena, prima delle parole.</h2></div>
          <Link href="/galleria" className="text-sm text-[#1b2a4a] underline underline-offset-4">Entra nella galleria ↗</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {HOME_STORY.map((item, index) => <figure key={item.photo} className={index % 2 ? 'sm:pt-12' : ''}><Link href={`/galleria#foto-${item.photo}`} className="block rounded-2xl hover:opacity-90 transition-opacity" aria-label={`Guarda in galleria: ${item.title}`}><TheatreImage image={item.photo} height="h-60 sm:h-80 lg:h-96" /></Link><figcaption className="pt-4 space-y-2"><p className="editorial-label text-[#8c6221]">{item.label}</p><p className="font-serif text-lg sm:text-xl text-[#1b2a4a]">{item.title}</p></figcaption></figure>)}
        </div>
        <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">Il lavoro teatrale vive nei dettagli: un gesto trattenuto, una distanza che cambia, un oggetto che trova un significato diverso. È da questa attenzione che prendono forma i percorsi, le prove e l’incontro con il pubblico.</p>
      </section>

      <section className="max-w-6xl mx-auto px-2 space-y-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-end">
          <div className="space-y-4"><p className="editorial-label text-[#8c6221]">Formazione / Percorsi teatrali</p><h2 className="text-4xl sm:text-5xl font-serif text-[#1b2a4a]">Trovare la propria voce.<br />Costruire una scena comune.</h2></div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Gruppi raccolti, un appuntamento ogni settimana e un progetto che cresce nel tempo. Due percorsi dedicati a età diverse, un approccio condiviso: ascoltare, sperimentare e dare valore al contributo di ciascuno.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map(course => <article key={course.slug} className="bg-[#fcfbf7] border border-slate-200 rounded-2xl overflow-hidden">
            <TheatreImage image={course.image} height="h-64 sm:h-72" />
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-start justify-between gap-4"><h3 className="font-serif text-3xl text-[#1b2a4a]">{course.title}</h3><span className="editorial-label text-[#8c6221] whitespace-nowrap pt-2">{course.age}</span></div>
              <p className="text-sm text-slate-600 leading-relaxed">{course.text}</p>
              <div className="flex flex-wrap justify-between gap-4 border-t border-slate-200 pt-5 text-sm"><p className="text-slate-500">{course.schedule}</p><Link href={`/attivita/teatro/${course.slug}`} className="text-[#1b2a4a] underline underline-offset-4">Programma e dettagli ↗</Link></div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-2 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <TheatreImage image="metodoHome" height="h-80 sm:h-[480px]" />
        <div className="space-y-6">
          <p className="editorial-label text-[#8c6221]">Il metodo / Una pratica condivisa</p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#1b2a4a]">Le idee hanno bisogno<br />di spazio. E di ascolto.</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Una sala prove è un luogo in cui provare possibilità. Si lavora sul corpo e sul respiro, si legge un testo, si cambia prospettiva. Ogni proposta diventa materia da trasformare con gli altri.</p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Il docente dà continuità alla ricerca e accompagna il gruppo nelle scelte. La restituzione finale raccoglie questo processo: una forma scenica costruita attraverso tentativi, confronto e cura del dettaglio.</p>
          <Link href="/chi-siamo" className="inline-block text-sm text-[#1b2a4a] underline underline-offset-4">Le persone e il nostro metodo ↗</Link>
        </div>
      </section>

      <section className="bg-[#eaefeb] rounded-2xl p-7 sm:p-12 lg:p-14 space-y-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4"><p className="editorial-label text-[#8c6221]">Dall’intuizione alla scena</p><h2 className="text-4xl font-serif text-[#1b2a4a]">Un processo creativo,<br />tre momenti di lavoro.</h2></div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed self-end max-w-lg">La formazione segue il ritmo di una creazione: prima si raccolgono possibilità, poi si cercano relazioni e infine si sceglie che cosa condividere con il pubblico.</p>
        </div>
        <TheatreImage image="allestimento" height="h-64 sm:h-[420px]" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['01', 'Esplorare', 'Voce, movimento, improvvisazione. Si parte da esercizi accessibili e da stimoli diversi per conoscere il gruppo e ampliare il proprio linguaggio.'],
            ['02', 'Comporre', 'Le intuizioni diventano scene. Testi, immagini e oggetti entrano in relazione, mentre il gruppo costruisce personaggi e sceglie una direzione.'],
            ['03', 'Condividere', 'La prova incontra uno sguardo esterno. Le restituzioni e gli spettacoli aprono il lavoro a famiglie, amici e a chi desidera conoscere l’Officina.'],
          ].map(([number, title, text]) => <article key={number} className="border-t border-[#1b2a4a]/25 pt-6 space-y-4"><p className="editorial-label text-[#8c6221]">{number}</p><h3 className="font-serif text-2xl text-[#1b2a4a]">{title}</h3><p className="text-sm text-slate-600 leading-relaxed">{text}</p></article>)}
        </div>
      </section>

      <section className="theatre-photo-band relative isolate text-white bg-[#101a2d]">
        <Image src={PHOTOS.movimentoScena.src} alt={PHOTOS.movimentoScena.alt} fill sizes="100vw" className="object-cover -z-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a2d]/90 via-[#101a2d]/35 to-[#101a2d]/10" />
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 min-h-[480px] sm:min-h-[600px] flex flex-col justify-end">
          <p className="editorial-label text-[#e5b869]">Presenza / Movimento / Ricerca</p>
          <h2 className="font-serif text-4xl sm:text-6xl max-w-xl mt-5">C’è un momento<br />in cui tutto prende vita.</h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-md mt-6">Il respiro trova il ritmo, il gruppo diventa una scena. Il teatro è il tempo condiviso tra chi crea e chi guarda.</p>
          <Link href="/spettacoli" className="mt-7 inline-block w-fit text-sm underline underline-offset-4">Scopri gli appuntamenti in scena ↗</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-2 space-y-10">
        <div className="flex flex-wrap gap-6 items-end justify-between"><div className="space-y-4"><p className="editorial-label text-[#8c6221]">Workshop / Creazioni / Spettacoli</p><h2 className="font-serif text-4xl sm:text-5xl text-[#1b2a4a]">Esperienze da vivere.</h2></div><Link href="/attivita/altre-attivita-partner" className="text-sm text-[#1b2a4a] underline underline-offset-4">Il programma dei workshop ↗</Link></div>
        <div className="grid md:grid-cols-3 gap-7">
          {agenda.map(event => <article key={event.href} className="space-y-5">
            <TheatreImage image={event.image} height="h-64" />
            <div className="flex justify-between gap-3 items-center border-b border-slate-200 pb-4"><span className="font-serif text-xl text-[#1b2a4a]">{event.format}</span><span className="text-xs text-slate-500">{event.category}</span></div>
            <h3 className="font-serif text-2xl text-[#1b2a4a]">{event.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{event.text}</p>
            <Link href={event.href} className="inline-block text-sm text-[#1b2a4a] underline underline-offset-4">Esplora l’appuntamento ↗</Link>
          </article>)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-2 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-6">
          <p className="editorial-label text-[#8c6221]">Scuole / Spazi culturali / Collaborazioni</p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#1b2a4a]">Il teatro continua<br />fuori dalla sala.</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Un laboratorio in biblioteca, una lettura a scuola, una creazione per uno spazio culturale. Progettiamo esperienze che mettano in relazione persone, luoghi e linguaggi, partendo dal contesto in cui si svolgono.</p>
          <ul className="space-y-3 text-sm text-slate-600 border-y border-slate-200 py-5"><li>Percorsi educativi di avvicinamento al teatro</li><li>Letture e narrazioni per pubblici diversi</li><li>Workshop di voce, movimento e scrittura scenica</li></ul>
          <Link href="/dove-siamo#richiesta" className="inline-block text-sm text-[#1b2a4a] underline underline-offset-4">Raccontaci il tuo progetto ↗</Link>
        </div>
        <TheatreImage image="progetti" height="h-80 sm:h-[480px]" />
      </section>

      <section className="bg-[#1b2a4a] rounded-2xl text-white p-7 sm:p-12 lg:p-14 grid md:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
        <div className="space-y-6">
          <p className="editorial-label text-[#e5b869]">Vieni a conoscere l’Officina</p>
          <h2 className="text-4xl sm:text-5xl font-serif">Il primo passo<br />è un incontro.</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">Una lezione conoscitiva per entrare nel lavoro del gruppo, parlare con il docente e trovare il percorso più adatto. Puoi cominciare anche senza esperienze precedenti.</p>
          <Link href="/dove-siamo#richiesta" className="editorial-button bg-[#e5b869] text-[#1b2a4a] hover:bg-[#f1cd92]">Informazioni sulla prova ↗</Link>
        </div>
        <dl className="divide-y divide-white/20 text-sm">
          {[
            ['Dove', 'Via delle Quinte 12, Borgo delle Storie'],
            ['Segreteria', 'Dal lunedì al venerdì, 15:00–19:00'],
            ['I percorsi', 'Un incontro alla settimana, in piccoli gruppi'],
            ['Prima di arrivare', 'Incontri su appuntamento. Per le prove, abiti comodi e una borraccia.'],
          ].map(([label, text]) => <div key={label} className="py-5 first:pt-0 space-y-2"><dt className="editorial-label text-[#e5b869]">{label}</dt><dd className="text-slate-200 leading-relaxed">{text}</dd></div>)}
        </dl>
      </section>

      <Faq title="Prima di entrare in scena" items={[
        { question: 'Da quale attività posso cominciare?', answer: 'I percorsi teatrali accolgono bambini da 8 a 10 anni e ragazzi da 11 a 15. I workshop del sabato includono proposte per adulti e famiglie, con età e durata indicate in ogni scheda.' },
        { question: 'Come si svolge la prima lezione?', answer: 'Si partecipa a un incontro ordinario del gruppo, con un momento di accoglienza e un confronto finale con il docente. La lezione conoscitiva è gratuita e permette di capire come si lavora in sala.' },
        { question: 'Posso partecipare soltanto agli spettacoli?', answer: 'Gli spettacoli sono aperti anche a chi non frequenta i corsi. Ogni scheda presenta durata, pubblico consigliato e informazioni per organizzare la visita.' },
      ]} />
    </div>
  )
}
