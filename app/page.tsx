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
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6">
        {/* LOGO BACKGROUND */}
 <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
  <Image
    src="/logo/Logo.1.jpg"
    alt="Logo Background"
    fill
    priority
    className="object-contain opacity-[0.04] scale-75 sm:scale-90 md:scale-100 blur-[1px]"
  />
</div>

        <div className="relative z-10">
          <h1 className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-transparent">
            PADELCLUBBING
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Padel. Music. Community.
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
      <section className="px-6 py-24">
        <h2 className="mb-14 text-center text-5xl font-black text-pink-500">
          Galerie
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Galerie Bild ${index + 1}`}
              width={600}
              height={600}
              className="h-[300px] w-full rounded-2xl object-cover"
            />
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          {galleryVideos.map((video, index) => (
            <video
              key={index}
              controls
              className="h-[400px] w-full rounded-2xl object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>

         {/* SPONSOREN */}
      <section className="px-6 py-24">
        <h2 className="mb-14 text-center text-5xl font-black text-pink-500">
          Sponsoren
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sponsorenImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Sponsoren Bild ${index + 1}`}
              width={300}
              height={300}
              className="h-[300px] w-full rounded-2xl object-cover"
            />
          ))}
        </div>
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

