import Image from 'next/image'

export const metadata = {
  title: 'Impressum | Padelclubbing',
  description: 'Impressum von Padelclubbing',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="mb-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition hover:text-[#d6b46a]">
          <Image src="/logo/Logo.1.jpg" alt="Padelclubbing" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          ← Zurück zu Padelclubbing
        </a>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-12">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Legal</div>
          <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Impressum.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
            Angaben gemäß den für Websites in Österreich geltenden Informations- und Offenlegungspflichten.
          </p>

          <div className="mt-12 space-y-10 text-sm leading-7 text-white/65">
            <section>
              <h2 className="text-lg font-black text-white">Medieninhaber und Betreiber</h2>
              <p className="mt-3">
                <strong className="text-white">PADELCLUBBING</strong><br />
                Verantwortlicher / Betreiber: <strong className="text-[#d6b46a]">wird ergänzt</strong><br />
                Vorläufiger Organisationsort: Padelperformance Center Wildon<br />
                Wildon, Steiermark, Österreich
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">Kontakt</h2>
              <p className="mt-3">
                E-Mail: <strong className="text-[#d6b46a]">wird ergänzt</strong><br />
                Telefon: <strong className="text-[#d6b46a]">wird ergänzt</strong><br />
                Instagram: @padelclubbing
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">Unternehmensangaben</h2>
              <p className="mt-3">
                Rechtsform: <strong className="text-[#d6b46a]">wird ergänzt</strong><br />
                UID-Nummer: <strong className="text-[#d6b46a]">wird ergänzt</strong><br />
                Firmenbuchnummer: <strong className="text-[#d6b46a]">falls vorhanden – wird ergänzt</strong><br />
                Firmenbuchgericht: <strong className="text-[#d6b46a]">falls vorhanden – wird ergänzt</strong>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">Unternehmensgegenstand / Tätigkeitsbereich</h2>
              <p className="mt-3">
                Planung, Organisation und Durchführung von Padel- und Clubbing-Veranstaltungen sowie damit verbundene Event-, Community- und Marketingaktivitäten.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">Grundlegende Richtung</h2>
              <p className="mt-3">
                Die Website informiert über Padelclubbing Veranstaltungen, Termine, Anmeldemöglichkeiten, Partner und Aktivitäten der Padelclubbing Community.
              </p>
            </section>

            <section className="rounded-2xl border border-[#d6b46a]/20 bg-[#d6b46a]/[0.05] p-5 text-sm text-white/55">
              <strong className="text-[#d6b46a]">Hinweis zur vorläufigen Version:</strong><br />
              Die Betreiber-, Kontakt-, Adress- und Unternehmensdaten werden ergänzt, sobald die endgültigen rechtlichen Daten feststehen. Der Padelperformance Center Wildon ist derzeit nur als vorläufiger Organisationsort angegeben und nicht als Ersatz für die ladungsfähige Anschrift des tatsächlichen Betreibers.
            </section>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/30">
            Stand: August 2026
          </div>
        </div>
      </div>
    </main>
  )
}
