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
]

const galleryImages = [
  '/gallery/01.jpg',
  '/gallery/02.jpg',
  '/gallery/03.jpg',
  '/gallery/04.jpg',
  '/gallery/05.jpg',
  '/gallery/06.jpg',
]

const sponsors = [
  '/sponsors/sponsor1.png',
  '/sponsors/sponsor2.png',
  '/sponsors/sponsor3.png',
  '/sponsors/sponsor4.png',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* LOGO BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/logo/logo.png"
            alt="Logo Background"
            width={900}
            height={900}
            className="opacity-[0.06] object-contain animate-pulse"
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
}
