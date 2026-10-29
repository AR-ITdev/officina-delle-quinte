import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1b2a4a]/95 backdrop-blur-md text-amber-50 shadow-md border-b border-[#e5b869]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform active:scale-95"
        >
          <div className="relative w-10 h-12 sm:w-12 sm:h-14 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo-officina.svg"
              alt="Logo Officina delle Quinte"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl tracking-tight text-white group-hover:text-[#e5b869] transition-colors leading-none">
              Officina delle Quinte
            </span>
            <span className="text-[10px] sm:text-xs text-[#8bb2c9] font-serif italic tracking-wider mt-1">
              il teatro comincia da te
            </span>
          </div>
        </Link>

        <nav aria-label="Navigazione principale" className="hidden lg:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          <Link
            href="/"
            className="text-white hover:text-[#e5b869] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e5b869] hover:after:w-full after:transition-all"
          >
            Home
          </Link>
          <Link
            href="/chi-siamo"
            className="text-slate-200 hover:text-[#e5b869] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e5b869] hover:after:w-full after:transition-all"
          >
            Chi Siamo
          </Link>
          <Link
            href="/attivita"
            className="text-slate-200 hover:text-[#e5b869] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e5b869] hover:after:w-full after:transition-all"
          >
            Attività
          </Link>
          <Link
            href="/spettacoli"
            className="text-slate-200 hover:text-[#e5b869] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e5b869] hover:after:w-full after:transition-all"
          >
            Spettacoli
          </Link>
          <Link
            href="/galleria"
            className="text-slate-200 hover:text-[#e5b869] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e5b869] hover:after:w-full after:transition-all"
          >
            Galleria
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/dove-siamo"
            className="shrink-0 bg-[#e5b869] hover:bg-[#d4a359] text-[#1b2a4a] font-medium text-xs sm:text-sm px-3 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            Dove Siamo
          </Link>
        </div>

      </div>

      <div className="lg:hidden border-t border-white/10 bg-[#15223c] px-4 py-2.5 overflow-x-auto">
        <nav aria-label="Navigazione mobile" className="flex items-center justify-between gap-4 text-xs whitespace-nowrap">
          <Link href="/" className="text-slate-200 hover:text-[#e5b869]">Home</Link>
          <Link href="/chi-siamo" className="text-slate-200 hover:text-[#e5b869]">Chi Siamo</Link>
          <Link href="/attivita" className="text-slate-200 hover:text-[#e5b869]">Attività</Link>
          <Link href="/spettacoli" className="text-slate-200 hover:text-[#e5b869]">Spettacoli</Link>
          <Link href="/galleria" className="text-slate-200 hover:text-[#e5b869]">Galleria</Link>
        </nav>
      </div>
    </header>
  )
}