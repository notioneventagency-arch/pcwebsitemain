import Image from 'next/image'

const upcomingEvents = [
  {
    title: 'Miami Neon Padel Night',
    date: '12 Juli 2026',
    place: 'Berlin Indoor Arena',
  },
  {
    title: 'Summer Club Tournament',
    date: '26 Juli 2026',
    place: 'Hamburg Beach Courts',
  },
  {
    title: 'PADELCLUBBING Finals',
    date: '09 August 2026',
    place: 'Munich Rooftop Club',
  },
]

const gallery = [1, 2, 3, 4]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 via-black to-cyan-500/10" />

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,0,140,0.5),transparent_40%),radial-gradient(circle_at_bottom,rgba(0,255,255,0.4),transparent_40%)]" />

        <div className="relative z-10 max-w-6xl">
          <Image
            src="/logo.jpg"
            alt="PADELCLUBBING Logo"
            width={360}
            height={360}
            className="mx-auto mb-8 rounded-3xl border border-pink-500/30 shadow-[0_0_50px_rgba(255,0,128,0.6)]"
          />

          <h1 className="bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-300 bg-clip-text text-6xl font-extrabold tracking-widest text-transparent md:text-8xl">
            PADELCLUBBING
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300 md:text-2xl">
            Die Community für exklusive Padel Tennis Turniere, Clubbing Events,
            Night Sessions und unvergessliche Partys.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#events"
              className="rounded-full border border-pink-500 bg-pink-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
            >
              Events entdecken
            </a>

            <a
              href="https://instagram.com/padelclubbing"
              target="_blank"
              className="rounded-full border border-cyan-400 px-8 py-4 text-lg font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              @padelclubbing
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-5xl font-black uppercase tracking-wide text-pink-500">
              Padel trifft Clubbing
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-zinc-300">
              PADELCLUBBING verbindet sportliche Turniere mit einer luxuriösen
              Clubbing Experience. Unsere Events kombinieren Matches, DJs,
              Neon-Lights, Rooftop Partys und exklusive Community Vibes.
            </p>
            <p className="text-lg leading-relaxed text-zinc-400">
              Die Website bietet Platz für vergangene Events mit Fotos und
              Videos sowie kommende Turniere inklusive Anmeldung und Promotion.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/hero.jpg"
              alt="Padel Event"
              width={700}
              height={700}
              className="rounded-3xl border border-cyan-500/30 shadow-[0_0_60px_rgba(0,255,255,0.3)]"
            />
          </div>
        </div>
      </section>

      <section id="events" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-5xl font-black uppercase tracking-wide text-cyan-400">
              Upcoming Events
            </h2>
            <p className="mt-4 text-zinc-400">
              Neue Turniere, Clubbing Nights und Special Events.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-3xl border border-pink-500/20 bg-black/60 p-8 shadow-[0_0_30px_rgba(255,0,140,0.15)] backdrop-blur"
              >
                <div className="mb-4 inline-block rounded-full border border-cyan-400 px-4 py-1 text-sm text-cyan-300">
                  LIVE EVENT
                </div>
                <h3 className="mb-4 text-3xl font-bold text-white">
                  {event.title}
                </h3>
                <p className="mb-2 text-zinc-300">📅 {event.date}</p>
                <p className="mb-8 text-zinc-400">📍 {event.place}</p>

                <button className="w-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 px-6 py-3 font-bold text-black transition hover:scale-105">
                  Jetzt anmelden
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-5xl font-black uppercase tracking-wide text-pink-500">
              Event Galerie
            </h2>
            <p className="mt-4 text-zinc-400">
              Fotos und Videos von vergangenen PADELCLUBBING Nächten.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-3xl border border-cyan-500/20"
              >
                <Image
                  src="/hero.jpg"
                  alt="Event Gallery"
                  width={400}
                  height={500}
                  className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xl font-bold text-white">PADEL NIGHT</p>
                  <p className="text-sm text-cyan-300">Highlights & Aftermovie</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-pink-500/20 px-6 py-12 text-center">
        <h3 className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-4xl font-black text-transparent">
          PADELCLUBBING
        </h3>

        <p className="mt-4 text-zinc-400">
          Padel Tennis • Clubbing • Tournaments • Community
        </p>

        <a
          href="https://instagram.com/padelclubbing"
          target="_blank"
          className="mt-6 inline-block text-lg font-bold text-cyan-300"
        >
          Instagram: @padelclubbing
        </a>
      </footer>
    </main>
  )
}
