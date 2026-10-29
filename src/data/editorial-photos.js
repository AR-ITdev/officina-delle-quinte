const cottonbro = 'cottonbro studio'

const EDITORIAL_PHOTOS = {
  heroScena: [2210543, 'group-of-people-standing-on-concrete-floor-2210543', 'Ann H', 'Figure sul palcoscenico immerse in una luce blu, tra riflessi e controluce', '50% 50%'],
  scenaCostumi: [6899772, 'man-and-woman-on-the-stage-6899772', cottonbro, 'Due interpreti in costume durante una scena illuminata teatralmente', '50% 45%'],
  guardaroba: [4716541, 'assorted-items-on-black-table-4716541', cottonbro, 'Accessori, costumi e materiali disposti in un camerino teatrale', 'center'],
  trucco: [5065835, 'actress-doing-makeup-while-reflecting-in-mirror-at-work-5065835', 'Kamaji Ogino', 'Un’artista si prepara davanti allo specchio del camerino', 'center'],
  allestimento: [29858811, 'empty-theater-stage-with-ladders-and-equipment-29858811', 'Martin De Arriba', 'Un palcoscenico in allestimento con scale e attrezzatura tecnica', 'center'],
  movimentoScena: [10708007, 'ballerinas-on-stage-10708007', 'Fabricio Lira', 'Figure di danzatrici su un palco attraversato dalla luce', '50% 50%'],
  apertura: [6899928, 'people-on-stage-6899928', cottonbro, 'Interpreti in costume su un palcoscenico, osservati dalle quinte', '50% 50%'],
  percorsoBambini: [2219040, 'brown-paint-brush-2219040', 'Ekrulila', 'Pennelli e colori su una tavolozza, materiali per il lavoro scenico', 'center'],
  percorsoRagazzi: [6896222, 'man-and-woman-standing-side-by-side-6896222', cottonbro, 'Due interpreti preparano una scena durante le prove', '50% 40%'],
  metodoHome: [6896194, 'group-of-people-having-a-meeting-6896194', cottonbro, 'Un gruppo si confronta con il regista durante una prova', '50% 55%'],
  agendaCinema: [6896188, 'man-giving-a-paper-to-another-man-6896188', cottonbro, 'Scambio di un copione tra interpreti sul palco', 'center'],
  agendaArte: [15473491, 'balcony-on-theatre-15473491', 'Fidan Nazim qizi', 'Architettura di una balconata teatrale in bianco e nero', 'center'],
  agendaSpettacolo: [12616961, 'red-theater-chairs-near-red-curtains-12616961', 'Ann H', 'Poltrone e quinte di un teatro prima dello spettacolo', '50% 55%'],
  progetti: [6899930, 'man-turning-his-back-on-another-man-6899930', cottonbro, 'Due interpreti in costume lavorano a una scena teatrale', '50% 45%'],
  storia: [7991182, 'empty-seats-7991182', 'Tima Miroshnichenko', 'Una platea silenziosa con file di poltrone rosse', 'center'],
  metodo: [6896192, 'people-having-a-meeting-6896192', cottonbro, 'Confronto tra interpreti e regista durante il lavoro in sala', 'center'],
  attivitaTeatro: [6896221, 'group-of-people-having-a-meeting-6896221', cottonbro, 'Un gruppo impegnato in una prova di recitazione', 'center'],
  attivitaWorkshop: [6896331, 'two-men-having-a-discussion-6896331', cottonbro, 'Due interpreti discutono le intenzioni di una scena', 'center'],
  indiceBambini: [23331176, 'leather-chairs-in-a-theater-23331176', 'luchik', 'Dettaglio delle sedute numerate di una sala teatrale', 'center'],
  indiceRagazzi: [6896196, 'man-laughing-beside-a-woman-studying-6896196', cottonbro, 'Una pausa di confronto tra due interpreti durante la lettura', 'center'],
  metodoCorsi: [6896182, 'woman-in-white-long-sleeve-shirt-holding-papers-6896182', cottonbro, 'Un’interprete lavora sulle pagine del copione', 'center'],
  corsoBambini: [22908923, 'seats-in-a-movie-theater-22908923', 'Matt Richmond', 'File di poltrone rosse in una sala vuota', 'center'],
  preparazioneBambini: [27758151, 'a-red-chair-in-a-theater-27758151', 'MG Shawn', 'Una poltrona rossa nella luce soffusa di una sala', 'center'],
  corsoRagazzi: [6896313, 'three-people-on-stage-6896313', cottonbro, 'Interpreti provano una scena e le relazioni tra personaggi', '50% 40%'],
  preparazioneRagazzi: [6894159, 'man-in-white-outerwear-sitting-on-chair-6894159', cottonbro, 'Un interprete seduto studia il testo durante le prove', 'center'],
  workshopCinema: [6896218, 'man-and-woman-acting-on-stage-6896218', cottonbro, 'Due interpreti lavorano su una scena sotto la guida del regista', 'center'],
  workshopMovimento: [6896323, 'man-and-woman-sitting-on-floor-6896323', cottonbro, 'Due interpreti esplorano una scena seduti sul pavimento', 'center'],
  workshopScenografia: [18665399, 'elegant-interior-with-seats-18665399', 'Esra Korkmaz', 'Interno teatrale con dettagli architettonici e illuminazione calda', 'center'],
  workshopVoce: [6896189, 'woman-standing-beside-a-man-6896189', cottonbro, 'Due interpreti lavorano su dialogo e presenza vocale', 'center'],
  spettacoloOggetti: [12165875, 'people-performing-on-theater-stage-12165875', 'Fthdgrl', 'Un gruppo di interpreti durante una rappresentazione teatrale', 'center'],
  spettacoloBambini: [35657609, 'empty-theater-seats-in-dramatic-lighting-35657609', 'Yunuen Zempoaltecatl', 'Sedute teatrali nella luce che precede lo spettacolo', 'center'],
  spettacoloRagazzi: [6896223, 'man-hugging-a-woman-on-stage-6896223', cottonbro, 'Un incontro tra personaggi durante una prova sul palco', 'center'],
  visita: [36357715, 'red-velvet-theater-seats-in-empty-auditorium-36357715', 'canshotz', 'Poltrone di velluto rosso in un auditorium vuoto', 'center'],
}

export const EDITORIAL_MEDIA = Object.fromEntries(
  Object.entries(EDITORIAL_PHOTOS).map(([key, [id, slug, author, alt, position]]) => [
    key,
    { src: `/images/editorial-${id}.webp`, source: `https://www.pexels.com/photo/${slug}/`, author, alt, position },
  ])
)
