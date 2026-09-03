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
    date: '26.09.2026',
    isoDate: '2026-09-26T19:00:00+02:00',
    month: 'SEP',
    title: 'OPEN HOUSE DAY',
    place: 'Padelperformance Center Wildon',
    type: 'PADEL + CLUBBING',
    status: 'tickets',
    link: 'https://www.eventim-light.com/at/a/6a869e1a063f1234326108b5/e/6a9025484bdb9199e6b262b3',
    image: '/logo/Logo.2.jpg',
    flyer: '',
    time: '10:00',
  },
  {
    date: '31.10.2026',
    isoDate: '2026-10-31T19:00:00+02:00',
    month: 'OCT',
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
    date: '28.11.2026',
    isoDate: '2026-11-28T19:00:00+02:00',
    month: 'NOV',
    title: 'PADELCLUBBING 80 & 90s Edition',
    place: 'Padelperformance Center Wildon',
    type: 'PADEL + CLUBBING',
    status: 'tickets',
    link: 'https://www.eventim-light.com/at/a/6a869e1a063f1234326108b5/e/6a97d82f4bdb9199e6b28335',
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
    status: 'tickets',
    link: 'https://www.eventim-light.com/at/a/6a869e1a063f1234326108b5/e/6a97c0f663f006f7c3b81b32',
    image: '/logo/Logo.2.jpg',
    flyer: '',
    time: '19:00',
  },
]

export const nextEvent = events[0]
