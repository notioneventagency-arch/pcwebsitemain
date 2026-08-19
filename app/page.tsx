'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { events, nextEvent } from '@/data/events'
import { galleryImages } from '@/data/gallery'
import { site, sponsors } from '@/data/site'

function Countdown() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const values = useMemo(() => {
    const diff = Math.max(0, new Date(nextEvent.isoDate).getTime() - now.getTime())
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }, [now])

  return (
    <div className="mx-auto mt-8 grid max-w-xl grid-cols-4 gap-2 sm:gap-4">
      {Object.entries(values).map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] px-2 py-4 backdrop-blur-xl">
          <div className="text-2xl font-black tracking-tight sm:text-4xl">{String(value).padStart(2, '0')}</div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/40">{label}</div>
        </div>
      ))}
    </div>
  )
}

function EventCard({ event, index }: { event: (typeof events)[number]; index: number }) {
  const external = event.link.startsWith('http')
  const hasFlyer = Boolean(event.flyer)

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-[#d6b46a]/40 hover:bg-white/[0.055]">
      <div className="relative h-44 overflow-hidden bg-[#111]">
        <Image src={event.image || '/logo/Logo.2.jpg'} alt={event.title} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-xl border border-white/15 bg-black/55 px-3 py-2 text-center backdrop-blur-md">
          <div className="text-2xl font-black leading-none">{event.date.slice(0, 2)}</div>
          <div className="mt-1 text-[9px] font-bold tracking-[0.25em] text-[#d6b46a]">{event.month}</div>
        </div>
        <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
          {event.status === 'tickets' ? 'Anmeldung offen' : event.status === 'soldout' ? 'Sold out' : 'Coming soon'}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#d6b46a]">{event.type}</div>
            <h3 className="mt-2 text-2xl font-black sm:text-3xl">{event.title}</h3>
            <p className="mt-2 text-sm text-white/45">{event.place} · {event.time}</p>
          </div>
          <span className="hidden text-[10px] font-black text-white/20 sm:block">0{index + 1}</span>
        </div>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5">
          {event.status !== 'soldout' && (
            <a href={event.link} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="rounded-full bg-white px-5 py-2.5 text-xs font-black text-black transition hover:bg-[#d6b46a]">
              {event.status === 'tickets' ? 'Platz sichern →' : 'Mehr erfahren →'}
            </a>
          )}
          {hasFlyer && (
            <a href={event.flyer} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-bold text-white/80 transition hover:bg-white/10">
              Flyer ansehen
            </a>
          )}
        </div>
      </div>
    </article>
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
          <a href="#events" className="rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black transition hover:scale-105">Tickets</a>
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
              <h1 className="text-6xl font-black leading-[.86] tracking-[-0.06em] sm:text-8xl lg:text-[9.5rem]">PADEL<br /><span className="font-serif font-medium italic text-[#d6b46a]">meets</span><br />CLUBBING.</h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">Sport trifft Musik, Menschen und echtes Nightlife. Exklusive Padel-Events mit Turnier, Drinks, DJ &amp; Community.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#events" className="group rounded-full bg-[#d6b46a] px-7 py-4 text-center text-sm font-black uppercase tracking-wider text-black transition hover:-translate-y-1">Nächstes Event <span className="ml-2">→</span></a>
                <a href="#experience" className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10">Was dich erwartet</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[560px] lg:justify-self-end">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#d6b46a]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#101010] shadow-2xl">
                <Image src="/logo/Logo.2.jpg" alt="Padelclubbing Logo" width={1024} height={1024} priority className="aspect-square w-full object-contain p-8 opacity-95" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 pt-28">
                  <div className="flex items-end justify-between">
                    <div><div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d6b46a]">Next up</div><div className="mt-1 text-2xl font-black">{nextEvent.date.slice(0, 5)} · WILDON</div></div>
                    <div className="rounded-full border border-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white/60">Limited spots</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">PADEL · MUSIC · COMMUNITY · EXPERIENCE</div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[['04', 'Events 2026'], ['01', 'Community'], ['100%', 'Good Vibes'], ['∞', 'Memories']].map(([big, small]) => <div key={small}><div className="text-3xl font-black sm:text-4xl">{big}</div><div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/35">{small}</div></div>)}
        </div>
      </section>

      <section id="events" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Save the date</div><h2 className="mt-3 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Upcoming <span className="font-serif font-medium italic text-white/40">events.</span></h2></div>
            <p className="max-w-sm text-sm leading-6 text-white/40">Sichere dir deinen Platz frühzeitig. Unsere Events sind bewusst klein gehalten – für bessere Stimmung und echte Community.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">{events.map((event, index) => <EventCard key={event.date} event={event} index={index} />)}</div>
        </div>
      </section>

      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#d6b46a]/20 bg-[#d6b46a]/[0.06] p-8 text-center sm:p-12">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Countdown · Next Event</div>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">{nextEvent.date} · WILDON</h2>
          <p className="mt-3 text-sm text-white/45">{nextEvent.place}</p>
          <Countdown />
        </div>
      </section>

      <section id="experience" className="relative overflow-hidden border-y border-white/10 px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end"><div><div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Not just a tournament</div><h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">More than<br /><span className="font-serif font-medium italic text-[#d6b46a]">padel.</span></h2></div><p className="max-w-xl text-lg leading-8 text-white/45">Bei Padelclubbing geht es nicht nur um Punkte. Gute Musik, neue Leute, Drinks, Licht und eine Atmosphäre, die man nicht nach dem letzten Ball beendet.</p></div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[['01', 'PADEL', 'Americano, Matches & Competition'], ['02', 'DJ & MUSIC', 'Soundtrack für den ganzen Abend'], ['03', 'PEOPLE', 'Community statt anonymer Event'], ['04', 'VIBE', 'Sport trifft Nightlife']].map(([num, title, text]) => <div key={num} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6"><div className="text-[10px] font-black text-[#d6b46a]">{num}</div><h3 className="mt-10 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-white/40">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl"><div className="mb-12"><div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">The moments</div><h2 className="mt-3 text-5xl font-black sm:text-7xl">Inside the <span className="font-serif font-medium italic text-white/40">vibe.</span></h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{galleryImages.map((image, index) => <div key={image} className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"><Image src={image} alt={`Padelclubbing Event ${index + 1}`} fill className="object-cover transition duration-700 group-hover:scale-105" /></div>)}</div>
        </div>
      </section>

      <section id="partners" className="border-t border-white/10 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl"><div className="text-center"><div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Supported by</div><h2 className="mt-3 text-4xl font-black sm:text-6xl">Our partners.</h2></div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">{sponsors.map((sponsor) => <a key={sponsor.name} href={sponsor.link} target="_blank" rel="noreferrer" className="flex min-h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-white/20 hover:bg-white/[0.06]"><Image src={sponsor.image} alt={sponsor.name} width={240} height={100} className="max-h-16 w-auto object-contain" /></a>)}</div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-6 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d6b46a]/20 bg-[#d6b46a]/[0.06] p-8 text-center sm:p-12"><div className="text-3xl font-black sm:text-5xl">Join the Padelclubbing community.</div><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45">Events, neue Termine, Fotos und spontane Community-News direkt aufs Handy.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href={site.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-wider text-black">Instagram ↗</a>{site.whatsapp ? <a href={site.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-wider">WhatsApp Community ↗</a> : null}</div></div></section>

      <footer className="border-t border-white/10 px-5 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between sm:text-left"><div>PADELCLUBBING · PADEL · PEOPLE · VIBES</div><div>© 2026 Padelclubbing</div></div></footer>
    </main>
  )
}
