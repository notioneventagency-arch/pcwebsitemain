import Image from 'next/image'

const upcomingEvents = [
  {
    title: 'All White Padel Night',
    date: '30 Mai 2026',
    place: 'Padelperformance Center Wildon',
    formLink: 'https://forms.gle/DEINLINK1',
  },
  {
    title: 'Sommerfest',
    date: '27 Juni 2026',
    place: 'Padelperformance Center Wildon',
    formLink: 'https://forms.gle/DEINLINK2',
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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
          PADELCLUBBING
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Sport. Music. Community.
        </p>
      </section>

      {/* EVENTS */}
      <section className="px-6 py-24">
        <h2 className="mb-14 text-center text-5xl font-black text-cyan-400">
          Upcoming Events
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h3 className="text-2xl font-bold text-white">
                {event.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {event.date}
              </p>

              <p className="text-zinc-500">
                {event.place}
              </p>

}

      {/* IMPRESSUM */}
      <section id="impressum" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="mb-6 text-3xl font-black text-pink-500">Impressum</h2>

          <div className="space-y-2 text-zinc-300">
            <p>PADELCLUBBING</p>
            <p>Max Mustermann</p>
            <p>Musterstraße 1</p>
            <p>8401 Kalsdorf bei Graz</p>
            <p>Österreich</p>
            <p>E-Mail: thepadelclubbing@gmail.com</p>
            <p>Telefon: +43 676 7808458  /  +43 664 1234567</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 px-4 py-8 text-center text-sm text-zinc-500">
        © 2026 PADELCLUBBING. Alle Rechte vorbehalten.
      </footer>
    </main>
  )
}
