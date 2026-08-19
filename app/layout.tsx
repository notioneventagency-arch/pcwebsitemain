import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PADELCLUBBING',
  description: 'PADEL. MUSIC. COMMUNITY.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' }],
  },
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303] px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-sm font-black tracking-[0.18em]">PADELCLUBBING</div>
          <div className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/30">PADEL · PEOPLE · VIBES</div>
          <div className="mt-5 text-xs text-white/25">© 2026 Padelclubbing · Steiermark, Austria</div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
          <a href="/impressum" className="transition hover:text-[#d6b46a]">Impressum</a>
          <a href="/datenschutz" className="transition hover:text-[#d6b46a]">Datenschutz</a>
          <a href="https://www.instagram.com/padelclubbing/" target="_blank" rel="noreferrer" className="transition hover:text-[#d6b46a]">Instagram</a>
        </nav>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
