'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { GALLERY, PHOTOS } from '@/data/photos'
import { TheatreImage } from '@/components/TheatreImage'

const categories = ['Tutte', ...new Set(GALLERY.map(item => item.category))]

export function GalleryGrid() {
  const [category, setCategory] = useState('Tutte')
  const [selected, setSelected] = useState(null)
  const dialog = useRef(null)
  const visible = category === 'Tutte' ? GALLERY : GALLERY.filter(item => item.category === category)

  function openPhoto(item) {
    setSelected(item)
    dialog.current.showModal()
  }

  function step(direction) {
    const index = visible.findIndex(item => item.photo === selected.photo)
    setSelected(visible[(index + direction + visible.length) % visible.length])
  }

  return (
    <section id="raccolta" className="scroll-mt-44 max-w-6xl mx-auto px-4 space-y-8" aria-label="Raccolta fotografica">
      <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filtra le fotografie">
        {categories.map(item => (
          <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`min-h-11 rounded-full px-5 py-2 text-sm border transition-colors ${category === item ? 'bg-[#1b2a4a] text-white border-[#1b2a4a]' : 'bg-white text-[#1b2a4a] border-slate-200 hover:bg-[#eaefeb]'}`}>{item}</button>
        ))}
      </div>
      <p role="status" className="text-center text-xs text-slate-500">{visible.length} fotografie · Seleziona un’immagine per aprirla</p>
      <div className="gallery-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 items-start">
        {visible.map((item, index) => (
          <article id={`foto-${item.photo}`} key={item.photo} className="scroll-mt-44">
            <button type="button" aria-label={`Apri foto: ${item.title}`} onClick={() => openPhoto(item)} className="block relative w-full text-left hover:opacity-90 transition-opacity">
              <TheatreImage image={item.photo} height="h-80" loading={index === 0 ? 'eager' : 'lazy'} />
              <span className="absolute top-3 left-3 bg-[#1b2a4a]/90 text-amber-50 text-xs px-3 py-1 rounded-full">{item.category}</span>
              <span className="absolute bottom-3 right-3 rounded-full bg-white/90 text-[#1b2a4a] w-9 h-9 flex items-center justify-center text-xl" aria-hidden="true">+</span>
            </button>
            <div className="pt-5 space-y-3">
              <h2 className="font-serif text-xl text-[#1b2a4a]">{item.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
      <dialog ref={dialog} aria-labelledby="gallery-title" className="gallery-dialog rounded-3xl bg-[#fcfbf7] text-[#1b2a4a] p-0" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current.close() }} onKeyDown={event => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault()
          step(event.key === 'ArrowRight' ? 1 : -1)
        }
      }}>
        {selected && <div className="p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 id="gallery-title" className="font-serif text-xl sm:text-2xl">{selected.title}</h2>
            <button autoFocus type="button" onClick={() => dialog.current.close()} className="shrink-0 rounded-full border border-slate-300 px-4 min-h-11 text-sm">Chiudi</button>
          </div>
          <div className="relative h-[55vh] sm:h-[65vh] bg-[#15223c] rounded-2xl overflow-hidden">
            <Image src={PHOTOS[selected.photo].src} alt={PHOTOS[selected.photo].alt} fill sizes="(max-width: 1024px) 95vw, 1100px" className="object-contain" />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{selected.caption}</p>
          <div className="flex justify-between gap-4 items-center">
            <button type="button" onClick={() => step(-1)} className="min-h-11 px-4 rounded-full border border-slate-300 text-sm">← Precedente</button>
            <span className="text-xs text-slate-500" aria-live="polite">{visible.findIndex(item => item.photo === selected.photo) + 1} / {visible.length}</span>
            <button type="button" onClick={() => step(1)} className="min-h-11 px-4 rounded-full bg-[#1b2a4a] text-white text-sm">Successiva →</button>
          </div>
        </div>}
      </dialog>
    </section>
  )
}
