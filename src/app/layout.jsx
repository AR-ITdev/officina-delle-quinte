import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: { default: 'Officina delle Quinte', template: '%s | Officina delle Quinte' },
  description: 'Laboratori teatrali per bambini e ragazzi, spettacoli e percorsi creativi di Officina delle Quinte.',
  robots: { index: false, follow: false },
  icons: { icon: '/logo-officina.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased">
        <a href="#contenuto" className="skip-link">Vai al contenuto</a>
        <Header />
        <main id="contenuto" className="site-main flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}