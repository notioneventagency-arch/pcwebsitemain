import Image from 'next/image'
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
      <section className="overflow-hidden border-y border-zinc-800 px-6 py-24">
        <h2 className="mb-12 text-center text-5xl font-black text-white">
          Unsere Sponsoren
        </h2>

        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-16">
            {[...sponsorLogos, ...sponsorLogos].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Sponsor ${index + 1}`}
                width={180}
                height={80}
                className="h-20 w-auto object-contain opacity-80 transition hover:opacity-100"
              />
            ))}
          </div>
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
          </button
