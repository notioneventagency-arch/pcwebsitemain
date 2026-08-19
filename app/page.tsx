'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

const events = [
  {
    date: '29.08.2026',
    month: 'AUG',
    title: 'PADELCLUBBING',
    place: 'Padelperformance Center Wildon',
    type: 'PADEL + CLUBBING',
    status: 'tickets',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeR4HIxDmxRnfUiCjOteiQAL4J6hDuuigdbSYr2ua1cGTgL0Q/viewform?usp=header',
  },
  {
    date: '26.09.2026',
    month: 'SEP',
    title: 'PADELCLUBBING',
    place: 'Padelperformance Center Wildon',
    type: 'PADEL + CLUBBING',
    status: 'soon',
    link: '#tickets',
  },
  {
    date: '10.10.2026',
    month: 'OCT',
    title: 'PADELCLUBBING',
    place: 'Padelperformance Center Schilcherland',
    type: 'PADEL + CLUBBING',
    status: 'soon',
    link: '#tickets',
  },
  {
    date: '31.10.2026',
    month: 'OCT',
    title: 'PADELCLUBBING HALLOWEEN',
    place: 'Padelperformance Center Wildon',
    type: 'HALLOWEEN SPECIAL',
    status: 'soon',
    link: '#tickets',
  },
]

const galleryImages = [
  '/gallery/01.png',
  '/gallery/02.png',
  '/gallery/03.jpg',
  '/gallery/04.png',
]

const sponsors = [
  { image: '/sponsoren/Image1.png', name: 'Notion Agency', link: 'https://www.notionagency.at' },
  { image: '/sponsoren/Image2.png', name: 'TennisMol', link: 'https://tennismol.at/' },
  { image: '/sponsoren/Image3.png', name: 'Tapedesign', link: 'https://www.tape-design.com/' },
  { image: '/sponsoren/image.4.png', name: 'SoA Nutrition', link: 'https://soa-nutrition.at/' },
]

const nextEvent = new Date('2026-08-29T19:00:00+02:00')

function Countdown() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const values = useMemo(() => {
    const diff = Math.max(0, nextEvent.getTime() - now.getTime())
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }, [now])

  return (
    <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
      {Object.entries(values).map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] px-2 py-4 backdrop-blur-xl">
          <div className="text-2xl sm:text-4xl font-black tracking-tight">{String(value).padStart(2, '0')}</div>
          <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/40">{label}</div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#d6b46a] selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-20rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#d6b46a]/10 blur-[140px]" />
        <div className="absolute right-[-15rem] top-[35%] h-[30rem] w-[30rem] rounded-full bg-[#163c47]/30 blur-[140px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/logo/Logo.1.jpg" alt="Padelclubbing" width={48} height={48} className="h-11 w-11 rounded-full object-cover ring-1 ring-white/20" />
            <div className="hidden sm:block">
              <div className="text-sm font-black tracking-[0.18em]">PADELCLUBBING</div>
              <div className="text-[9px] uppercase tracking-[0.28em] text-white/40">Padel · People · Vibes</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-white/60 md:flex">
            <a className="transition hover:text-white" href="#events">Events</a>
            <a className="transition hover:text-white" href="#experience">Experience</a>
            <a className="transition hover:text-white" href="#gallery">Gallery</a>
            <a className="transition hover:text-white" href="#partners">Partners</a>
          </nav>

          <a href="#events" className="rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black transition hover:scale-105">
            Tickets
          </a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(214,180,106,.13),transparent_34%),linear-gradient(180deg,transparent_55%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/60 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#d6b46a]" /> Steiermark · Austria · Est. 2025
              </div>
              <h1 className="text-6xl font-black leading-[.86] tracking-[-0.06em] sm:text-8xl lg:text-[9.5rem]">
                PADEL<br /><span className="font-serif font-medium italic text-[#d6b46a]">meets</span><br />CLUBBING.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                Sport trifft Musik, Menschen und echtes Nightlife. Exklusive Padel-Events mit Turnier, Drinks, DJ &amp; Community.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#events" className="group rounded-full bg-[#d6b46a] px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-black transition hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(214,180,106,.2)]">
                  Nächstes Event <span className="ml-2 transition group-hover:ml-3">→</span>
                </a>
                <a href="#experience" className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10">
                  Was dich erwartet
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:justify-self-end">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#d6b46a]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#101010] shadow-2xl">
                <Image src="/logo/Logo.2.jpg" alt="Padelclubbing Logo" width={1024} height={1024} priority className="aspect-square w-full object-contain p-8 opacity-95" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 pt-28">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d6b46a]">Next up</div>
                      <div className="mt-1 text-2xl font-black">29 AUG · WILDON</div>
                    </div>
                    <div className="rounded-full border border-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white/60">Limited spots</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            PADEL · MUSIC · COMMUNITY · EXPERIENCE
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            ['04', 'Events 2026'],
            ['01', 'Community'],
            ['100%', 'Good Vibes'],
            ['∞', 'Memories'],
          ].map(([big, small]) => (
            <div key={small}><div className="text-3xl font-black sm:text-4xl">{big}</div><div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/35">{small}</div></div>
          ))}
        </div>
      </section>

      <section id="events" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Save the date</div>
              <h2 className="mt-3 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Upcoming <span className="font-serif font-medium italic text-white/40">events.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/40">Sichere dir deinen Platz frühzeitig. Unsere Events sind bewusst klein gehalten – für bessere Stimmung und echte Community.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {events.map((event, index) => (
              <article key={event.date} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#d6b46a]/40 hover:bg-white/[0.055] sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-5">
                    <div className="min-w-[76px] rounded-2xl border border-white/10 bg-black/30 px-3 py-4 text-center">
                      <div className="text-2xl font-black leading-none">{event.date.slice(0,2)}</div>
                      <div className="mt-1 text-[9px] font-bold tracking-[0.25em] text-[#d6b46a]">{event.month}</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">{event.type}</div>
                      <h3 className="mt-2 text-2xl font-black sm:text-3xl">{event.title}</h3>
                      <p className="mt-2 text-sm text-white/45">{event.place}</p>
                    </div>
                  </div>
                  <span className="hidden text-[10px] font-black text-white/20 sm:block">0{index + 1}</span>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">{event.status === 'tickets' ? 'Anmeldung geöffnet' : 'Ticketshop folgt'}</span>
                  <a href={event.link} target={event.link.startsWith('http') ? '_blank' : undefined} rel={event.link.startsWith('http') ? 'noreferrer' : undefined} className="rounded-full bg-white px-5 py-2.5 text-xs font-black text-black transition group-hover:bg-[#d6b46a]">
                    {event.status === 'tickets' ? 'Platz sichern →' : 'Mehr erfahren →'}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#d6b46a]/20 bg-[#d6b46a]/[0.06] p-8 text-center sm:p-12">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Countdown · Next Event</div>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">29 AUGUST 2026 · WILDON</h2>
          <p className="mt-3 text-sm text-white/45">Padelperformance Center Wildon</p>
          <Countdown />
        </div>
      </section>

      <section id="experience" className="relative overflow-hidden border-y border-white/10 px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Not just a tournament</div>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">More than<br /><span className="font-serif font-medium italic text-[#d6b46a]">padel.</span></h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/45">Bei Padelclubbing geht es nicht nur um Punkte. Es geht um den Abend danach: gute Musik, neue Leute, Drinks, Licht und eine Atmosphäre, die man nicht nach dem letzten Ball beendet.</p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'PADEL', 'Americano & besondere Turnierformate'],
              ['02', 'DJ & MUSIC', 'Club-Vibes direkt am Court'],
              ['03', 'PEOPLE', 'Community statt Einzelkämpfer'],
              ['04', 'VIBE', 'Drinks · Licht · Nightlife'],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d6b46a]/30">
                <div className="text-xs font-black text-[#d6b46a]">{number}</div>
                <h3 className="mt-10 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/40">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-5">
            <div><div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">The vibe</div><h2 className="mt-3 text-5xl font-black sm:text-7xl">Inside the <span className="font-serif font-medium italic text-white/40">club.</span></h2></div>
            <a href="https://www.instagram.com/padelclubbing" target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white/60 transition hover:border-white/30 hover:text-white sm:block">Instagram ↗</a>
          </div>
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[230px] md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={image} className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <Image src={image} alt={`Padelclubbing Event ${index + 1}`} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tickets" className="px-5 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Ticketing</div>
              <h2 className="mt-3 text-4xl font-black sm:text-6xl">Ein Klick.<br />Dein Platz.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">Wir stellen den bisherigen Google-Forms-Prozess Schritt für Schritt auf einen richtigen Ticketshop um – mit Online-Zahlung, Bestätigung und digitalem Ticket.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:min-w-[300px]">
              <div className="text-xs font-black uppercase tracking-wider">Geplant</div>
              <div className="mt-5 space-y-3 text-sm text-white/50">
                <div>✓ Online-Ticket</div>
                <div>✓ Zahlung per Karte / Wallet</div>
                <div>✓ Automatische Bestätigung</div>
                <div>✓ QR-Code am Eingang</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="border-y border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30">Powered by</div>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Partners &amp; Friends</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {sponsors.map((sponsor) => (
              <a key={sponsor.name} href={sponsor.link} target="_blank" rel="noreferrer" className="flex h-32 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.035] p-6 grayscale transition hover:grayscale-0 hover:border-[#d6b46a]/30">
                <Image src={sponsor.image} alt={sponsor.name} width={260} height={120} className="max-h-20 w-full object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Community</div>
          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">Be part of it.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">Neue Events, freie Plätze, Gewinnspiele und Behind-the-Scenes direkt in unsere Community.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://www.instagram.com/padelclubbing" target="_blank" rel="noreferrer" className="rounded-full bg-white px-7 py-4 text-sm font-black text-black transition hover:bg-[#d6b46a]">Instagram ↗</a>
            <a href="https://chat.whatsapp.com/KZkvvK08zmpILxD8YPwNAr?mode=gi_t" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10">WhatsApp Community</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-white/30 md:flex-row md:items-center">
          <div><span className="font-black text-white">PADELCLUBBING</span> · Padel. People. Vibes.</div>
          <div>Wildon · Steiermark · Austria · © 2026</div>
          <a href="mailto:thepadelclubbing@gmail.com" className="transition hover:text-white">thepadelclubbing@gmail.com</a>
        </div>
      </footer>
    </main>
  )
}
