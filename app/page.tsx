import Image from 'next/image'
                src={src}
                alt={`Galerie Bild ${index + 1}`}
                width={600}
                height={600}
                className="rounded-2xl object-cover"
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
            action="https://formspree.io/f/DEINE_FORM_ID"
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
            <p>E-Mail: info@padelclubbing.com</p>
            <p>Telefon: +43 664 1234567</p>
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
