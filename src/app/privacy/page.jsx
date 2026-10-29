import Link from 'next/link'
import { PHOTOS, PHOTO_LICENSE } from '@/data/photos'

export const metadata = { title: 'Dati e crediti fotografici' }

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      <section className="bg-gradient-to-b from-[#f4f7f4] to-[#dbe4dc] rounded-3xl p-8 sm:p-12 border border-slate-900/10">
        <h1 className="text-3xl sm:text-4xl font-serif text-[#1b2a4a]">Dati e crediti fotografici</h1>
      </section>
      <section className="space-y-5 text-sm text-slate-600 leading-relaxed">
        <h2 className="text-2xl font-serif text-[#1b2a4a]">Il modulo di contatto</h2>
        <p>Il modulo verifica i campi soltanto nel browser. Il contenuto resta nella pagina fino alla verifica o alla sua chiusura: non viene inviato, archiviato o usato per effettuare prenotazioni. Per provarlo, utilizza esclusivamente dati inventati.</p>
        <h2 className="text-2xl font-serif text-[#1b2a4a]">Navigazione e servizi esterni</h2>
        <p>Il sito non integra strumenti di analisi, pubblicità, mappe esterne o cookie di profilazione. Immagini e logo sono serviti localmente. L&apos;applicazione non scrive i dati del modulo in cookie o nella memoria persistente del browser.</p>
        <p>Il servizio che ospita il sito può trattare i dati tecnici necessari a erogare le pagine, secondo le proprie impostazioni e condizioni.</p>
        <Link href="/dove-siamo" className="inline-block text-[#1b2a4a] underline">Torna ai contatti</Link>
      </section>
      <section id="crediti" className="space-y-5 text-sm text-slate-600 leading-relaxed scroll-mt-40">
        <h2 className="text-2xl font-serif text-[#1b2a4a]">Crediti fotografici</h2>
        <p>Le fotografie sono immagini di repertorio scaricate da Pexels e utilizzate secondo la <a href={PHOTO_LICENSE} target="_blank" rel="noopener noreferrer" className="text-[#1b2a4a] underline">licenza Pexels</a>, che consente l’uso gratuito sui siti web, anche commerciali. Non sono immagini di pubblico dominio: i diritti restano ai rispettivi autori.</p>
        <p>Le persone e i luoghi fotografati non rappresentano l’associazione immaginaria, i suoi docenti o i suoi allievi. I ritratti fotografici della pagina Chi siamo sono abbinati a nomi e ruoli inventati esclusivamente per illustrare la demo: le persone fotografate non partecipano al progetto e non lo promuovono. Le immagini sono state ridimensionate e convertite in WebP; in alcune sezioni è applicato un ritaglio di visualizzazione. La galleria raccoglie anche le immagini della homepage, utilizzando gli stessi file locali. Logo e mappa sono stati creati per questo sito.</p>
        <ul className="space-y-3">
          {Object.entries(PHOTOS).map(([key, photo]) => <li key={key} className="border-b border-slate-200 pb-3"><a href={photo.source} target="_blank" rel="noopener noreferrer" className="text-[#1b2a4a] underline">{photo.alt}</a><span className="block text-xs mt-1">{photo.author ? `Foto di ${photo.author} su Pexels` : 'Foto di repertorio su Pexels · attribuzione nella fonte originale'}</span></li>)}
        </ul>
        <p className="text-xs text-slate-500">Non sono presenti marchi Pexels nel logo o elementi che suggeriscano una collaborazione con gli autori.</p>
      </section>
    </div>
  )
}
