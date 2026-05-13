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
    title: 'PADELCLUBBING ',
    date: 'XXX Juli 2026',
    place: 'tbd',
    formLink: 'https://forms.gle/DEINLINK3',
  },
]

const galleryImages = [
  '/gallery/01.png',
  '/gallery/02.png',
  '/gallery/03.jpg',
  '/gallery/04.png',
]

const galleryVideos = ['/gallery/Adobe Express - TAPEDESIGN KURZVIDEO.mp4']

const sponsorenImages = [
  '/sponsoren/Image1.png',
  '/sponsoren/Image2.png',
  '/sponsoren/Image3.png',
  '/sponsoren/Image1.png',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
<div className="fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]" />

  <div className="absolute bottom-[-250px] right-[-200px] h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[160px]" />
</div>
      {/* NAVIGATION */}
<header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-black/70 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
    {/* LOGO */}
    <a
      href="#top"
      className="flex items-center gap-3 transition hover:opacity-80"
    >
      <Image
        src="/logo/Logo.1.jpg"
        alt="PADELCLUBBING Logo"
        width={45}
        height={45}
        className="rounded-full object-cover"
      />

      <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-lg font-black text-transparent hidden sm:block">
        PADELCLUBBING
      </span>
    </a>

    {/* NAVIGATION LINKS */}
    <nav className="flex items-center gap-4 md:gap-8 text-sm md:text-base font-semibold text-zinc-300">
      <a
        href="#events"
        className="transition hover:text-cyan-400"
      >
        Events
      </a>

      <a
        href="#gallery"
        className="transition hover:text-pink-400"
      >
        Galerie
      </a>

      <a
        href="#sponsoren"
        className="transition hover:text-cyan-400"
      >
        Sponsoren
      </a>

      <a
        href="#kontakt"
        className="transition hover:text-pink-400"
      >
        Kontakt
      </a>

      <a
        href="#impressum"
        className="transition hover:text-cyan-400"
      >
        Impressum
      </a>
    </nav>
  </div>
</header>
      {/* HERO */}
      <section
  id="top"
  className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6"
>
        {/* LOGO BACKGROUND */}
<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
  <Image
    src="/logo/Logo.2.jpg"
    alt="Background Logo"
    width={1200}
    height={1200}
    priority
    className="opacity-[0.20] blur-[1px] object-contain"
  />
</div>

        <div className="relative z-10">
          <h1 className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-transparent">
            PADELCLUBBING
          </h1>

         <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-zinc-400">
  Padel. Music. Community.
</p>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="px-6 py-24">
        <h2 className="mb-14 text-center text-5xl font-black text-cyan-400">
          Upcoming Events
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
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
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-24">
        <h2 className="mb-14 text-center text-5xl font-black text-pink-500">
          Galerie
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Galerie Bild ${index + 1}`}
              width={600}
              height={600}
              className="h-[220px] sm:h-[260px] md:h-[300px] w-full rounded-2xl object-cover"
            />
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          {galleryVideos.map((video, index) => (
            <video
              key={index}
              controls
              className="h-[240px] md:h-[400px] w-full rounded-2xl object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>

         {/* SPONSOREN */}
     <section id="sponsoren" className="px-6 py-24">
  <h2 className="mb-14 text-center text-3xl sm:text-4xl md:text-5xl font-black text-pink-500">
    Sponsoren
  </h2>

  <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
    {sponsorenImages.map((image, index) => (
      <div
        key={index}
        className="flex items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4 backdrop-blur-sm"
      >
        <Image
          src={image}
          alt={`Sponsoren Bild ${index + 1}`}
          width={300}
          height={160}
          className="h-[120px] w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
</section>
      
      {/* CONTACT */}
      <section id="kontakt" className="px-6 py-24">
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
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-3 md:p-4 text-white outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-3 md:p-4 text-white outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Nachricht"
            rows={6}
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-3 md:p-4 text-white outline-none"
            required
          />

          <button
            type="submit"
            className="w-full md:w-auto rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:scale-105"
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
              Padelclubbing
              <br />
              Musterstraße 1
              <br />
              8410 Wildon
              <br />
              Österreich
            </p>

            <p>
              E-Mail: thepadelclubbing@gmail.com
            </p>

            <p>
              Telefon: +43 664 1259454     /  +43 676 7808458
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

