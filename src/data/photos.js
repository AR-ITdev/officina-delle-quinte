export const PHOTO_LICENSE = 'https://www.pexels.com/license/'

export const PHOTOS = {
  ...EDITORIAL_MEDIA,
  elio: {
    src: '/images/portrait-220453.webp',
    alt: 'Ritratto fotografico di repertorio: un uomo con occhiali e un sorriso',
    source: 'https://www.pexels.com/photo/man-smiling-behind-wall-220453/',
    position: '50% 35%',
  },
  nora: {
    src: '/images/portrait-415829.webp',
    alt: 'Ritratto fotografico di repertorio: una donna su fondo giallo',
    author: 'Pixabay',
    source: 'https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/',
    position: '50% 35%',
  },
  prove: {
    src: '/images/prove-palco.webp',
    alt: 'Un gruppo di attori adulti seduti in cerchio prova un testo sul palcoscenico',
    author: 'cottonbro studio',
    source: 'https://www.pexels.com/photo/group-of-people-sitting-on-chair-on-stage-6896181/',
    position: '50% 65%',
  },
  copione: {
    src: '/images/lettura-copione.webp',
    alt: 'Lettura del copione e confronto durante una prova teatrale',
    author: 'cottonbro studio',
    source: 'https://www.pexels.com/photo/group-of-people-discussing-about-the-script-6896184/',
    position: '50% 45%',
  },
  scena: {
    src: '/images/lavoro-scena.webp',
    alt: 'Tre interpreti adulti lavorano su un dialogo e sui gesti di una scena',
    author: 'cottonbro studio',
    source: 'https://www.pexels.com/photo/three-people-discussing-something-6896219/',
    position: '50% 35%',
  },
  voce: {
    src: '/images/voce-testo.webp',
    alt: 'Un’interprete legge un copione durante le prove',
    author: 'cottonbro studio',
    source: 'https://www.pexels.com/photo/woman-holding-a-script-6896191/',
    position: '50% 45%',
  },
  sipario: {
    src: '/images/sipario.webp',
    alt: 'La luce di un riflettore disegna un cerchio sul velluto rosso del sipario',
    author: 'cottonbro studio',
    source: 'https://www.pexels.com/photo/spotlight-on-a-red-curtain-4722571/',
    position: '50% 65%',
  },
  scenografia: {
    src: '/images/scenografia.webp',
    alt: 'Un pennello e una tavolozza con colori vivaci per il lavoro creativo',
    author: 'Daian Gan',
    source: 'https://www.pexels.com/photo/shallow-focus-photography-of-paintbrush-102127/',
    position: 'center',
  },
}

export const GALLERY = [
  { photo: 'apertura', title: 'Il corpo e lo spazio', category: 'Palcoscenico', label: '01 / Abitare il personaggio', caption: 'La presenza scenica comincia da un gesto e dal modo in cui si abita il palcoscenico.' },
  { photo: 'scenaCostumi', title: 'La presenza dell’altro', category: 'Palcoscenico', label: '02 / Entrare in relazione', caption: 'Due personaggi, una distanza e un’intenzione: il dialogo vive anche prima delle parole.' },
  { photo: 'guardaroba', title: 'Oggetti, stoffe, dettagli', category: 'Dietro le quinte', label: '03 / Costruire un mondo', caption: 'Costumi e accessori aspettano di diventare parte della storia. Ogni scelta contribuisce al mondo della scena.' },
  { photo: 'trucco', title: 'Il tempo dietro le quinte', category: 'Dietro le quinte', label: '04 / Prepararsi alla scena', caption: 'Il camerino è un luogo di concentrazione: prepararsi significa trovare il tempo e il volto del personaggio.' },
  { photo: 'heroScena', title: 'Il teatro è uno spazio da abitare', category: 'Palcoscenico', caption: 'La luce trasforma lo spazio: presenze, distanze e movimento danno forma al racconto.' },
  { photo: 'percorsoBambini', title: 'Dare colore alle idee', category: 'Laboratori', caption: 'Pennelli, materiali e immaginazione aprono nuove possibilità al racconto teatrale.' },
  { photo: 'percorsoRagazzi', title: 'Una scena da costruire insieme', category: 'Laboratori', caption: 'Il lavoro a due permette di esplorare intenzioni e reazioni, cercando un ritmo condiviso.' },
  { photo: 'metodoHome', title: 'Ascoltare il gruppo', category: 'Laboratori', caption: 'Ci si ferma, si osserva e si riparte. Il confronto fa parte della creazione tanto quanto la prova.' },
  { photo: 'allestimento', title: 'Lo spazio prende forma', category: 'Dietro le quinte', caption: 'Prima del pubblico, il palco è un’officina: attrezzature, luci e oggetti trovano il proprio posto.' },
  { photo: 'movimentoScena', title: 'Il momento di entrare', category: 'Palcoscenico', caption: 'Dalle quinte alla luce del palco, il lavoro preparatorio incontra lo sguardo del pubblico.' },
  { photo: 'agendaCinema', title: 'Il copione passa di mano', category: 'Laboratori', caption: 'Una pagina diventa un invito a provare. Le parole cambiano quando incontrano una voce e un corpo.' },
  { photo: 'agendaArte', title: 'Un’architettura per le storie', category: 'Palcoscenico', caption: 'Anche il teatro che accoglie il pubblico partecipa al racconto, con prospettive, vuoti e balconate.' },
  { photo: 'agendaSpettacolo', title: 'La sala in attesa', category: 'Palcoscenico', caption: 'Poltrone e sipario custodiscono un momento di sospensione, prima che lo spettacolo cominci.' },
  { photo: 'progetti', title: 'Entrare nel personaggio', category: 'Palcoscenico', caption: 'Costume, postura e ascolto trasformano una relazione in una situazione teatrale.' },
  { photo: 'prove', title: 'Il cerchio delle prove', category: 'Laboratori', caption: 'Un testo passa di voce in voce. Il lavoro collettivo comincia dall’ascolto, ancora prima del movimento.' },
  { photo: 'copione', title: 'Dentro le parole', category: 'Laboratori', caption: 'Una pausa, un’intenzione, un punto di vista diverso: il confronto trasforma una pagina in una scena.' },
  { photo: 'scena', title: 'Il gesto incontra la storia', category: 'Laboratori', caption: 'Le relazioni tra i personaggi prendono forma attraverso distanze, sguardi e piccoli gesti.' },
  { photo: 'voce', title: 'Appunti dal lavoro sul testo', category: 'Dietro le quinte', caption: 'Rileggere, provare e ricominciare: ogni battuta trova il proprio ritmo insieme alle altre.' },
  { photo: 'sipario', title: 'L’ultima luce prima di entrare', category: 'Palcoscenico', caption: 'Dietro il velluto c’è un gruppo pronto a condividere il lavoro fatto. Davanti, una storia ancora da scoprire.' },
  { photo: 'scenografia', title: 'I colori di un mondo possibile', category: 'Dietro le quinte', caption: 'Un dettaglio dipinto a mano può cambiare l’atmosfera di una scena: il racconto continua anche sul tavolo dei materiali.' },
]

export const HOME_STORY = ['apertura', 'scenaCostumi', 'guardaroba', 'trucco'].map(photo => GALLERY.find(item => item.photo === photo))
import { EDITORIAL_MEDIA } from './editorial-photos'
