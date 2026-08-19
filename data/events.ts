export type EventItem = {
  date: string
  isoDate: string
  month: string
  title: string
  place: string
  type: string
  status: 'tickets' | 'soon' | 'soldout'
  link: string
  image: string
  flyer: string
  time: string
}

// ==============================
// EVENTS: HIER REGELMÄSSIG ÄNDERN
// ==============================
// Neues Event einfach kopieren und anpassen.
// Bilder kommen nach /public/events/
// Flyer kommen nach /public/flyers/
// Google-Form-Link bei "link" eintragen.

export const events: EventItem[] = [
  {
    date: '29.08.2026',
    isoDate: '2026-08-29T19:00:00+02:00',
    month: 'AUG',
    title: 'PADELCLUBBING',
    place: 'Padelperformance Center Wildon',
    type: 'PADEL + CLUBBING',
    status: 'tickets',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeR4HIxDmxRnfUiCjOteiQAL4J6hDuuigdbSYr2ua1cGTgL0Q/viewform?usp=header',
    image: '/logo/Logo.2.jpg',
    flyer: '',
    time: '19:00',
  },
  {
    date: '26.09.2026',
    isoDate: '2026-09-26T19:00:00+02:00',
    month: 'SEP',
    title: 'PADELCLUBBING',
    place: 'Padelperformance Center Wildon',
    type: 'PADEL + CLUBBING',
    status: 'soon',
    link: '#events',
    image: '/logo/Logo.2.jpg',
    flyer: '',
    time: '19:00',
  },
  {
    date: '10.10.2026',
    isoDate: '2026-10-10T19:00:00+02:00',
    month: 'OCT',
    title: 'PADELCLUBBING',
    place: 'Padelperformance Center Schilcherland',
    type: 'PADEL + CLUBBING',
    status: 'soon',
    link: '#events',
    image: '/logo/Logo.2.jpg',
    flyer: '',
    time: '19:00',
  },
  {
    date: '31.10.2026',
    isoDate: '2026-10-31T19:00:00+01:00',
    month: 'OCT',
    title: 'PADELCLUBBING HALLOWEEN',
    place: 'Padelperformance Center Wildon',
    type: 'HALLOWEEN SPECIAL',
    status: 'soon',
    link: '#events',
    image: '/logo/Logo.2.jpg',
    flyer: '',
    time: '19:00',
  },
]

export const nextEvent = events[0]
