import Image from 'next/image'

const upcomingEvents = [
  {
    title: 'All White Padel Night',
    date: '30 Mai 2026',
    place: 'Padelperformance Center Wildon',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeR4HIxDmxRnfUiCjOteiQAL4J6hDuuigdbSYr2ua1cGTgL0Q/viewform?usp=header',
  },
  {
    title: 'Sommerfest',
    date: '27 Juni 2026',
    place: 'Padelperformance Center Wildon',
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdqreRks-GfVrj6mno0t8QD-msGKGOh1sc3a4pndE4BH_Ut2A/viewform?usp=header',
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
      <section className="relative flex min-h-screen items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 via-black to-cyan-500/10" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Image
            src="/logo.jpg"
            alt="PADELCLUBBING Logo"
            width={320}
            height={320}
            className="mx-auto mb-8 w-48 rounded-3xl border border-pink-500/30 shadow-[0_0_50px_rgba(255,0,128,0.6)] sm:w-64 md:w-80"
          />

          <h1 className="bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-300 bg-clip-text text-4xl font-extrabold tracking-widest text-transparent sm:text-6xl md:text-8xl">
            PADELCLUBBING
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-zinc-300 sm:text-lg md:text-2xl">
            Die Community für exklusive Padel Tennis Turniere, Clubbing Events,
            Night Sessions und unvergessliche Partys.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#events"
              className="w-full rounded-full bg-pink-500 px-8 py-4 font-bold text-black transition hover:scale-105 sm:w-auto"
            >
              Events entdecken
            </a>

            <a
              href="https://instagram.com/padelclubbing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-cyan-400 px-8 py-4 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black sm:w-auto"
            >
              @padelclubbing
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-black uppercase tracking-wide text-pink-500 sm:text-5xl">
              Padel trifft Clubbing
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-zinc-300">
              PADELCLUBBING verbindet sportliche Turniere mit einer luxuriösen
              Clubbing Experience.
            </p>
            <p className="text-lg leading-relaxed text-zinc-400">
              Fotos, Videos, Turniere und Community Events auf einer Plattform.
            </p>
          </div>

          <Image
            src="/hero.jpg"
            alt="Padel Event"
            width={700}
            height={700}
            className="rounded-3xl border border-cyan-500/30 shadow-[0_0_60px_rgba(0,255,255,0.3)]"
          />
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bg-zinc-950 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-black text-cyan-400 sm:text-5xl">
            Upcoming Events
          </h2>

         <div className="grid gap-6 md:grid-cols-3">
  {upcomingEvents.map((event) => (
    <div
      key={event.title}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h3 className="text-xl font-bold text-white">
        {event.title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {event.date}
      </p>

      <p className="text-zinc-500">
        {event.place}
      </p>

      <a
        href={event.formLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-pink-500 px-6 py-3 font-bold text-black transition hover:scale-105"
      >
        Jetzt anmelden
      </a>
    </div>
  ))}
</div>

      {/* GALERIE */}
      <section id="gallery" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-black text-pink-500 sm:text-5xl">
            Galerie
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Galerie Bild ${index + 1}`}
                width={600}
                height={600}
                className="rounded-2xl object-cover w-full h-[300px]"
              />
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {galleryVideos.map((src, index) => (
              <video key={index} controls className="w-full rounded-2xl">
                <source src={src} type="video/mp4" />
                Dein Browser unterstützt dieses Videoformat nicht.
              </video>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="contact" className="bg-zinc-950 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-black text-cyan-400 sm:text-5xl">
            Kontakt
          </h2>

          <form
  action="https://formspree.io/f/xwvyavjd"
  method="POST"
  className="space-y-6"
>
  
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-xl bg-zinc-900 px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              required
              className="w-full rounded-xl bg-zinc-900 px-4 py-3"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Nachricht"
              required
              className="w-full rounded-xl bg-zinc-900 px-4 py-3"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-pink-500 px-6 py-4 font-bold text-black"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>

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
