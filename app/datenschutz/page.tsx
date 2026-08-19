import Image from 'next/image'

export const metadata = {
  title: 'Datenschutz | Padelclubbing',
  description: 'Datenschutzerklärung von Padelclubbing',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="mb-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition hover:text-[#d6b46a]">
          <Image src="/logo/Logo.1.jpg" alt="Padelclubbing" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          ← Zurück zu Padelclubbing
        </a>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-12">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#d6b46a]">Legal</div>
          <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] sm:text-7xl">Datenschutz.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
            Informationen über die Verarbeitung personenbezogener Daten auf der Padelclubbing Website.
          </p>

          <div className="mt-12 space-y-10 text-sm leading-7 text-white/65">
            <section>
              <h2 className="text-lg font-black text-white">1. Verantwortlicher</h2>
              <p className="mt-3">
                Verantwortlicher für die Verarbeitung personenbezogener Daten ist derzeit:<br />
                <strong className="text-white">PADELCLUBBING</strong><br />
                Verantwortlicher: <strong className="text-[#d6b46a]">wird ergänzt</strong><br />
                Anschrift: <strong className="text-[#d6b46a]">wird ergänzt</strong><br />
                E-Mail: <strong className="text-[#d6b46a]">wird ergänzt</strong>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">2. Besuch der Website</h2>
              <p className="mt-3">
                Beim Aufruf dieser Website können technisch notwendige Daten verarbeitet werden, die für die Bereitstellung, Sicherheit und Stabilität der Website erforderlich sind. Dazu können insbesondere IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seiten, Browser- und Geräteinformationen sowie technische Protokolldaten gehören.
              </p>
              <p className="mt-3">
                Die Website wird über Vercel bereitgestellt. Dabei können technische Verbindungsdaten an den Hosting-Anbieter übermittelt und in Server- bzw. Sicherheitslogs verarbeitet werden. Die konkrete Konfiguration und die jeweils geltenden Datenschutzinformationen des Hosting-Anbieters sind zu beachten.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">3. Kontaktaufnahme</h2>
              <p className="mt-3">
                Wenn du uns per E-Mail oder über andere bereitgestellte Kontaktmöglichkeiten kontaktierst, verarbeiten wir die von dir übermittelten Daten zur Bearbeitung deiner Anfrage. Die Daten werden nur so lange gespeichert, wie dies für die Bearbeitung und gegebenenfalls zur Erfüllung gesetzlicher Aufbewahrungspflichten erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">4. Event-Anmeldung über Google Forms</h2>
              <p className="mt-3">
                Für die Anmeldung zu einzelnen Padelclubbing Veranstaltungen verwenden wir derzeit Google Forms. Wenn du ein Anmeldeformular öffnest oder ausfüllst, können personenbezogene Daten an Google bzw. die von Google eingesetzten technischen Dienste übermittelt und dort verarbeitet werden.
              </p>
              <p className="mt-3">
                Welche Daten konkret verarbeitet werden, hängt vom jeweiligen Formular und den dort abgefragten Feldern ab. Bitte beachte vor der Übermittlung die im jeweiligen Google-Formular angezeigten Hinweise. Für die Verarbeitung durch Google gelten zusätzlich die Datenschutzinformationen von Google.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">5. Instagram</h2>
              <p className="mt-3">
                Auf der Website können Links zu unserem Instagram-Auftritt enthalten sein. Beim Anklicken eines solchen Links verlässt du unsere Website und wechselst zu Instagram. Für die anschließende Verarbeitung personenbezogener Daten ist Instagram bzw. Meta verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">6. Cookies und ähnliche Technologien</h2>
              <p className="mt-3">
                Die Website wird grundsätzlich ohne unnötige Tracking- oder Marketing-Cookies betrieben. Technisch erforderliche Speicherungen oder vergleichbare Technologien können eingesetzt werden, soweit sie für den Betrieb der Website notwendig sind.
              </p>
              <p className="mt-3">
                Sollten künftig Analyse-, Marketing-, Social-Media- oder andere zustimmungspflichtige Dienste eingebunden werden, wird die Website entsprechend ergänzt und – soweit erforderlich – eine Einwilligungsmöglichkeit bereitgestellt.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">7. Deine Rechte</h2>
              <p className="mt-3">
                Betroffene Personen haben nach Maßgabe der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen.
              </p>
              <p className="mt-3">
                Wenn eine Verarbeitung auf einer Einwilligung beruht, kann diese grundsätzlich jederzeit mit Wirkung für die Zukunft widerrufen werden.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black text-white">8. Beschwerderecht</h2>
              <p className="mt-3">
                Wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen Datenschutzrecht verstößt, kannst du dich an die zuständige Datenschutzaufsichtsbehörde wenden.
              </p>
            </section>

            <section className="rounded-2xl border border-[#d6b46a]/20 bg-[#d6b46a]/[0.05] p-5 text-sm text-white/55">
              <strong className="text-[#d6b46a]">Wichtiger Hinweis zur vorläufigen Version:</strong><br />
              Diese Datenschutzerklärung ist als vorläufige Website-Fassung für den aktuellen Aufbau gedacht. Vor dem endgültigen Livegang sollte sie anhand der tatsächlich eingesetzten Dienste, Formulare, Hosting-Einstellungen, Schriftarten, Analyse-Tools, eingebundenen Inhalte und der endgültigen Betreiber-/Unternehmensdaten rechtlich geprüft und vervollständigt werden.
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
