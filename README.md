# Officina delle Quinte

Sito dimostrativo di un laboratorio teatrale immaginario, realizzato con Next.js
16.4.3 e React 19. Mantiene palette blu e oro e l'articolazione delle pagine originali.
La homepage usa una hero fotografica a tutta larghezza, una sequenza visiva
tra palco e quinte, percorsi formativi, metodo, processo creativo, una fascia
fotografica immersiva, agenda, collaborazioni, informazioni pratiche e FAQ.
La mongolfiera resta soltanto nel marchio, senza decorazioni animate.
Le pagine interne condividono un'apertura editoriale, titoli ampi, informazioni
di orientamento e collegamenti alle sezioni. Workshop e produzioni alternano
fotografie grandi e contenuti; i docenti hanno ritratti fotografici, non disegni.

## Avvio

```sh
npm ci
npm run dev
```

Per la versione di produzione:

```sh
npm run build
npm start
```

## Contenuti e funzionamento

- I contenuti sono nelle pagine di `src/app`, senza CMS, Studio, CLI Sanity o
  pannello amministrativo. Il sito non richiede variabili d'ambiente.
- Identità, persone, partner, indirizzo, calendario e prezzi sono inventati.
  La nota dimostrativa si trova nel footer, senza banner in testata.
- Logo e mappa SVG in `public` sono originali. Le 41 fotografie
  di repertorio sono scaricate da Pexels con licenza gratuita per siti web,
  convertite in WebP e servite localmente, senza hotlink o richieste esterne.
  Non ritraggono soci, allievi o sedi dell'associazione immaginaria. I due
  ritratti di "Chi siamo" illustrano nomi e ruoli inventati; le persone
  fotografate non sono associate al progetto, come dichiarato nel footer
  e nei crediti.
- Ogni fotografia ha una collocazione distinta nelle pagine editoriali.
  La galleria raccoglie le 14 fotografie della homepage e sei immagini
  aggiuntive, senza duplicare i file. Le quattro immagini del racconto visivo
  in homepage rimandano alla rispettiva scheda della galleria; titoli e
  didascalie sono definiti nella stessa raccolta dati. Queste quattro immagini
  aprono la galleria nello stesso ordine della homepage; la prima fotografia
  viene caricata subito anche prima dello scorrimento.
- Fonti, autori e collegamento alla licenza sono elencati in `src/data/photos.js`,
  `src/data/editorial-photos.js` e nella pagina pubblica `/privacy#crediti`.
  La licenza Pexels consente l'uso
  gratuito anche commerciale; le immagini non sono di pubblico dominio.
- I programmi includono obiettivi, orari settimanali, quote, tre fasi di lavoro
  e FAQ. I workshop indicano materiali, gruppi e attività; il cartellone riporta
  durate e informazioni per il pubblico.
- I contenuti sono senza stagioni, anni o date di eventi: workshop e spettacoli
  sono presentati come proposte, con durata e pubblico di riferimento.
  Anche il copyright nel footer e' privo di anno.
- Le sole dipendenze applicative sono Next.js, React e React DOM; Tailwind CSS
  e il suo plugin PostCSS sono usati dalla build. Non sono presenti librerie
  per CMS, icone, animazioni o gallerie esterne.
- I percorsi si chiamano Teatro bambini e Teatro ragazzi. Le vecchie URL dei
  corsi reindirizzano in modo permanente alle nuove pagine.
- La galleria permette di filtrare per categoria e aprire le fotografie in
  una finestra modale. Sono disponibili controlli precedente/successiva,
  frecce della tastiera ed Escape per chiudere.
- Il modulo contatti valida i campi nel browser e mostra l'esito locale.
  Non invia email, non prenota e non salva dati. Usare soltanto dati inventati.
- L'indirizzo email usa il dominio riservato `.example`; non è un recapito
  operativo. La mappa è un'illustrazione locale di un luogo immaginario.
- Non sono integrati analytics, mappe esterne o sistemi di tracciamento.
- I metadati `noindex, nofollow` e `robots.txt` escludono l'indicizzazione
  della demo. Le vecchie rotte amministrative restituiscono 404.

## Pubblicazione della demo

Usare un hosting compatibile con Next.js e Node.js >= 20.9, con `npm ci`,
`npm run build` e `npm start` (oppure il preset Next.js dell'hosting).
Le immagini ottimizzate richiedono il runtime Next.js: non e' configurato
un export HTML statico. Per il dominio pubblico configurare HTTPS sull'hosting.

La pubblicazione mantiene contatti fittizi, modulo locale, nota dimostrativa e
`noindex`: e' una demo navigabile per il portfolio, senza raccolta di richieste
o prenotazioni. Un sito operativo richiederebbe recapiti reali, gestione del
modulo e informazioni privacy adeguate al servizio e all'hosting scelti.
