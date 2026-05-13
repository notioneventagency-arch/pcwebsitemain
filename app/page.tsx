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
  {
    image: '/sponsoren/Image1.png',
    link: 'https://www.notionagency.at',
    name: 'Notion Agency',
  },

  {
    image: '/sponsoren/Image2.png',
    link: 'https://tennismol.at/?srsltid=AfmBOorWXvNaF9EqWT-4nePL4Gk2AL2kcMPTTUMUO9I0AF1cOUBr92_I',
    name: 'TennisMol',
  },

  {
    image: '/sponsoren/Image3.png',
    link: 'https://www.tape-design.com/',
    name: 'Tapedesign',
  },

  {
    image: '/sponsoren/Image4.png',
    link: 'https://redbull.com',
    name: 'Red Bull',
  },
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
<header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-black/40 backdrop-blur-xl">
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
          <h1 className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            PADELCLUBBING
          </h1>

         <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-zinc-400">
  Padel. Music. Community.
</p>
        </div>
      </section>
      {/* COUNTDOWN */}
<section className="px-6 py-20 text-center">
  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
    Next Event
  </p>

  <h2 className="mt-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-black text-transparent">
    30 MAI 2026
  </h2>

  <p className="mt-6 text-xl text-zinc-300">
    All White Padel Night
  </p>
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
                className="mt-6 inline-block rounded-full bg-pink-500 px-6 py-3 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]"
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
    {sponsorenImages.map((sponsor, index) => (
      <a
        key={index}
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
      >
        <Image
          src={sponsor.image}
          alt={sponsor.name}
          width={300}
          height={160}
          className="h-[120px] w-full object-contain"
        />
      </a>
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

   {/* SOCIAL MEDIA */}
<section className="px-6 py-20">
  <h2 className="mb-10 text-center text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400">
    Follow Us
  </h2>

  <div className="flex flex-wrap items-center justify-center gap-6">
    
    <a
      href="https://www.instagram.com/padelclubbing?igsh=cDNkaWVlZ2xramQz&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-pink-500 bg-pink-500/10 px-8 py-4 font-bold text-pink-400 transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
    >
      Instagram
    </a>

    <a
      href="https://chat.whatsapp.com/KZkvvK08zmpILxD8YPwNAr?mode=gi_t"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-green-500 bg-green-500/10 px-8 py-4 font-bold text-green-400 transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
    >
      WhatsApp
    </a>

  </div>
</section>
      {/* IMPRESSUM */}
    <footer
  id="impressum"
  className="border-t border-white/10 bg-black/40 px-6 py-16 backdrop-blur-xl"
>
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
    
    {/* LEFT */}
    <div>
      <h2 className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-3xl font-black text-transparent">
        PADELCLUBBING
      </h2>

      <p className="mt-4 text-zinc-400">
        Padel. Music. Community.
      </p>
    </div>

    {/* CENTER */}
    <div className="text-center text-zinc-500">
      <p>Padelclubbing</p>
      <p>Wildon, Österreich</p>
      <p>thepadelclubbing@gmail.com</p>
    </div>

    {/* RIGHT */}
    <div className="flex gap-4">
      <a
        href="#"
        className="rounded-full border border-pink-500 px-5 py-2 text-pink-400 transition hover:bg-pink-500 hover:text-black"
      >
        Instagram
      </a>

      <a
        href="#"
        className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
      >
        WhatsAPP
      </a>
    </div>
  </div>

  <div className="mt-12 text-center text-sm text-zinc-600">
    © 2026 PADELCLUBBING — All Rights Reserved
  </div>
</footer>
</main>
  )
}
