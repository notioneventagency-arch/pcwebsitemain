import Image from 'next/image'

const upcomingEvents = [
  {
    title: 'All White Padel Night',
    date: '30 Mai 2026',
    place: 'Padelperformance Center Wildon',
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSeR4HIxDmxRnfUiCjOteiQAL4J6hDuuigdbSYr2ua1cGTgL0Q/viewform?usp=header',
  },
  {
    title: 'Sommerfest',
    date: '27 Juni 2026',
    place: 'Padelperformance Center Wildon',
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdqreRks-GfVrj6mno0t8QD-msGKGOh1sc3a4pndE4BH_Ut2A/viewform?usp=header',
  },
  {
    title: 'PADELCLUBBING Finals',
    date: '09 August 2026',
    place: 'Munich Rooftop Club',
    formLink: 'https://forms.gle/DEINLINK3',
  },
]

const galleryImages = [
  '/gallery/event1-1.jpg',
  '/gallery/event1-2.jpg',
  '/gallery/event1-3.jpg',
  '/gallery/event1-4.jpg',
]

const galleryVideos = ['/gallery/event1-video.mp4']

const sponsorLogos = [
  '/sponsors/redbull.png',
  '/sponsors/head.png',
  '/sponsors/bullpadel.png',
  '/sponsors/sixt.png',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Hintergrund-Logo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src="/Image (2).png"
            alt="PadelClubbing Background Logo"
            className="w-[800px] opacity-[0.05] animate-pulse"
          />
        </div>

        <div className="relative z-10">
          <h1 className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
            PADELCLUBBING
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Sport. Music. Community.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="px-6 py-24">
        <h2 className="mb-14 text-center text-5xl font-black text-cyan-400">
          Upcoming Events
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div
      </section>

      {/* CONTACT */}
      <section className="px-6 py-24">
        <h2 className="mb-14 text-center text-5xl font-black text-cyan-400">
          Kontakt
        </h2>

        <form
          action="https://formspree.io/f/xwvyavjd"
          method="POST"
          className="mx-auto max-w-2xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Nachricht"
            rows={6}
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
            required
          />

          <button
            type="submit"
            className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Nachricht senden
          </button>
        </form>
      </section>

      {/* IMPRESSUM */}
      <section
        id="impressum"
        className="border-t border-zinc-800 px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-zinc-400">
          <h2 className="mb-8 text-4xl font-black text-white">
            Impressum
          </h2>

          <div className="space-y-4 leading-relaxed">
            <p>
              <strong>PADELCLUBBING</strong>
            </p>

            <p>
              Max Mustermann
              <br />
              Musterstraße 1
              <br />
              8410 Wildon
              <br />
              Österreich
            </p>

            <p>
              E-Mail: info@padelclubbing.com
            </p>

            <p>
              Telefon: +43 660 0000000
            </p>

            <p>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              <br />
              Max Mustermann
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
