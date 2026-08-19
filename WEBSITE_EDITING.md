# Padelclubbing Website – einfach bearbeiten

Die Website ist so aufgebaut, dass du im Alltag möglichst wenig Code anfassen musst.

## 1. Events ändern

Öffne:
`data/events.ts`

Dort kannst du Datum, Uhrzeit, Location, Eventname und Google-Forms-Link ändern.

### Neues Event
Ein bestehendes Event kopieren und diese Werte anpassen:
- `date`
- `isoDate`
- `month`
- `title`
- `place`
- `type`
- `status`
- `link`
- `image`
- `flyer`
- `time`

## 2. Eventbilder

Ordner:
`public/events/`

Empfehlung:
`29-08-2026.jpg`
`26-09-2026.jpg`
`10-10-2026.jpg`
`31-10-2026-halloween.jpg`

Danach in `data/events.ts` den Pfad eintragen, z.B.:
`image: '/events/29-08-2026.jpg'`

## 3. Flyer

Ordner:
`public/flyers/`

Flyer hochladen und in `data/events.ts` eintragen:
`flyer: '/flyers/29-08-2026.jpg'`

Wenn `flyer: ''` leer ist, wird kein Flyer-Button angezeigt.

## 4. Galerie

Bilder nach:
`public/gallery/`

Danach die gewünschten Dateien in:
`data/gallery.ts`

eintragen.

## 5. Sponsoren und Links

Öffne:
`data/site.ts`

Dort sind Instagram, WhatsApp, E-Mail, Website und die Sponsor-Links zentral gesammelt.

## 6. Google Forms bleibt vorerst

Bei `link` einfach weiterhin den jeweiligen Google-Forms-Link eintragen. Später kann dort ohne Umbau der Website ein echter Ticket-/Payment-Link eingesetzt werden.

## 7. Veröffentlichung

Nach dem Speichern/Commit in GitHub baut Vercel die Website automatisch neu.

## Wichtig

`app/page.tsx` musst du normalerweise NICHT mehr bearbeiten. Die laufenden Änderungen gehören in `data/events.ts`, `data/gallery.ts` und `data/site.ts` sowie in die Ordner unter `public/`.
