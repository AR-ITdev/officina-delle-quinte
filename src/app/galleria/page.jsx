import { PageIntro } from '@/components/PageIntro'
import Link from 'next/link'

import { GalleryGrid } from '@/components/GalleryGrid'
import { GALLERY } from '@/data/photos'

export const metadata = { title: 'Galleria', description: 'Un percorso fotografico tra palcoscenico, lettura del copione e lavoro di gruppo. Esplora la raccolta per tema e apri le immagini a tutto schermo.' }

export default function GalleriaPage() {
  return (
    <div className="inner-editorial space-y-20 lg:space-y-28 pb-20">

      <PageIntro
        label="Sguardi / Palco / Dietro le quinte"
        title="Dentro la scena."
        description="Le immagini incontrate in homepage continuano qui: prove, costumi, oggetti e luci. Una raccolta da esplorare con calma, dal lavoro in sala all’incontro con il pubblico."
        details={[`${GALLERY.length} fotografie`, 'Tre percorsi visivi', 'Immagini apribili a tutto schermo']}
        href="#raccolta"
        action="Esplora la raccolta"
      />

      <section className="max-w-3xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-3xl font-serif text-[#1b2a4a]">Il teatro comincia molto prima dello spettacolo</h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Un cerchio di sedie, il margine di un copione, una luce che cambia: sono dettagli che raccontano il lavoro teatrale. Questa raccolta segue il filo che unisce ascolto, ricerca e presenza scenica, dal primo confronto fino al momento di entrare.</p>
      </section>
      <GalleryGrid />

      <section className="bg-[#1b2a4a] text-amber-50 rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto shadow-md text-center space-y-6">
        <h2 className="text-3xl font-serif text-[#e5b869]">La Prossima Storia Comincia con Te</h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Unisciti ai nostri corsi e scopri il piacere di costruire una storia da portare in scena insieme.
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