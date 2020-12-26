import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './FAQPage.css';
import calender1 from './calender1.png';
import calender2 from './calender2.png';
import { render } from 'enzyme';

const FAQPage = () => {


const mouseOver = e => e.target.style.color = '#050752'

const mouseLeave = e => e.target.style.color = '#00C9C0'

const toggleClickKeywords = e => {
  const text = e.target.parentElement.children[1]
  if (text.style.display === 'inline-block'){
    text.style.display = 'none'
  } else {    
    text.style.display = 'inline-block'
  }
}

  return (
    <StaticPage
      title="Frequently Asked Questions"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FAQPage',
        description: 'Frequently asked questions in SetPatrol marketplace.',
        name: 'Frequently Asked Questions',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Question 1?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Answer: Lorem ipsum',
            },
          },
        ],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar> 
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1 className={css.pageTitle}>Frequently Asked Questions</h1>
          <div>
            <br></br>
          <div>
              <h3 onMouseLeave={mouseLeave} onMouseEnter={mouseOver} onClick={toggleClickKeywords}>1. INIZIARE</h3>
              <div className='text' style={{ display: 'none' } }>
                <p><strong>-Che cos'è SetPatrol?</strong></p>
                <p>SetPatrol è una piattaforma europea che unisce tutti i registi per condividere e noleggiare attrezzature personali, spazi in studio e altro ancora. Quando non lo usi, non lasciare che la tua attrezzatura personale rimanga a casa ad arrugginirsi. Affittalo, guadagna e aiuta altri narratori a livello locale. Basta un semplice clic qui XXXXX per creare il tuo profilo GRATUITO, elencare la tua attrezzatura, seguire altri creativi e iniziare a collaborare. Siamo qui per aiutarti a creare.</p>
                <p><strong>Come funziona?</strong></p>
                <p>Imposta rapidamente il tuo profilo e puoi iniziare a navigare! Inizia a elencare la tua attrezzatura o a contattare gli utenti per un noleggio. Ogni utente viene controllato e verificato e tutte le apparecchiature elencate sono da noi assicurate. Entrambe le parti concordano su una tabella di qualità e sicurezza e potete decidere insieme dove ritirare gli articoli. Così semplice.</p>
                <p><strong>-C'è una tassa per usare SetPatrol?</strong></p>
                <p>Affitti</p>
                <p>Per i noleggi, SetPatrol addebita ai proprietari delle apparecchiature una commissione di servizio del 15% su ogni transazione.</p>
                <p>Addebitiamo inoltre una commissione comunitaria del 5% all'affittuario per ogni transazione.</p>
                <p><strong>Comprare vendere</strong></p>
                <p>Per le transazioni di acquisto e vendita, è prevista una bassa commissione del 5% per i venditori.</p>
                <p>L'acquirente paga la commissione per l'elaborazione del pagamento. Questo è 2,6% + 0,30 centesimi per i pagamenti con carta di credito, o 0,8% con un massimo di $ 5 per i pagamenti bancari ACH.</p>
                <p><strong>-Che tipo di cose posso elencare?</strong></p>
                <p>Qualsiasi attrezzatura è accettata nella nostra piattaforma democratizzata per i creativi video. Dall'attrezzatura utilizzata nella creazione di contenuti visivi, agli spazi degli studi, ai consigli e alle competenze. Troveremo una casa per farti guadagnare!</p>
                <p><strong>-Dove si trova SetPatrol?</strong></p>
                <p>Siamo un servizio virtuale! SetPatrol è stato creato per fornire ai creatori un modo migliore per noleggiare e vendere attrezzatura online, comodamente da casa tua. Iscriviti ora, per connetterti e collaborare all'interno del tuo quartiere.</p>
                <p><strong>-Come ci si iscrive? Costa qualcosa?</strong></p>
                <p>È facile e veloce iscriversi a SetPatrol ed è anche gratuito! SetPatrol è libero di aderire; non ci sono quote di iscrizione o canoni mensili e non ci sono commissioni per elencare le apparecchiature. (Il modo in cui guadagniamo è che prendiamo una parte di ogni transazione, quindi guadagniamo solo quando guadagni).</p>
                <p><strong>-E se non ci sono attrezzature nella mia zona?</strong></p>
                <p>Il nostro obiettivo è mantenere ed espandere un inventario diversificato di attrezzature che i nostri membri possono noleggiare.
                Sebbene ci sforziamo di avere quante più opzioni possibili per la produzione, comprendiamo che potremmo non avere ancora tutto. Se c'è qualcosa di specifico che stai cercando ma non riesci a trovare, faccelo sapere e faremo tutto il possibile per portare questi articoli nel nostro mercato in futuro.
                </p>
              </div>
            </div>
       <br></br>
            <div>
              <h3 onMouseLeave={mouseLeave} onMouseEnter={mouseOver} onClick={toggleClickKeywords}>2. CREARE IL TUO PROFILO UTENTE</h3>
              <div className='text' style={{ display: 'none' } }>
              <p><strong>Chi può unirsi a Set Patrol? Devo risiedere in Europa?</strong></p>
             <p>Chiunque! I nostri annunci sono offerti in tutta Europa, ma se risiedi altrove e stai visitando, benvenuto! Puoi creare il tuo profilo utente qui.</p>
             <p><strong>Devo utilizzare un account Facebook per registrarmi?</strong></p>
              <p>No, tutto ciò di cui hai bisogno è un account paypal per essere pagato o pagare gli utenti.</p>
              <p><strong>Che tipo di foto funzionano meglio per le inserzioni?</strong></p>
              <p>Siamo tutti abili creativi in ​​SetPatrol, segui il tuo intuito. Un'immagine a colori che mostri i dettagli dell'attrezzatura è molto utile. Puoi scrivere quello che hai ma perché non mostrarlo, con una foto ben illuminata e in alta definizione!</p>
               </div>
            </div>
            <br></br>
            <div>
              <h3 onMouseLeave={mouseLeave} onMouseEnter={mouseOver} onClick={toggleClickKeywords}>3. IDENTIFICAZIONE E VERIFICA</h3>
              <div className='text' style={{ display: 'none' } }>
                <p><strong>Qual è il tuo processo di verifica? Perché devo fornire un ID?</strong></p>
                <p>Al fine di creare una comunità sicura, ci aspettiamo che tutti gli utenti verifichino le loro e-mail, numeri di telefono e ID tramite semplici passaggi di codice o collegamento.</p>
                <p>Per diventare un affittuario o un noleggiatore top ti consigliamo di diventare un SUPER PATROLLER confermando la tua identità. Dovrai aggiungere il tuo nome legale e indirizzo o una foto di un documento d'identità (patente di guida, passaporto o carta d'identità nazionale). Inoltre, ti verrà chiesto di scattare una nuova foto di te stesso in modo che possiamo garantire che tutte queste foto corrispondano.</p>
                <p><strong>Perché dovrei collegare il mio portfolio / reel / vimeo ecc.?</p></strong>
                <p>Incoraggiamo vivamente tutti i nostri membri ad aggiungere il maggior numero possibile di link sociali. Ciò include qualsiasi sito Web di portfolio, collegamenti a lavori o crediti.</p>
                <p>Quando aggiungi questi collegamenti nelle impostazioni del tuo account, verranno visualizzati nella pagina del tuo profilo nella sezione "Informazioni su di me". È un ottimo modo per mostrare il tuo lavoro, evidenziare le tue capacità ed esperienze e aiutare gli altri membri a conoscerti. In qualità di nuovo membro del sito, in particolare, compilare il più possibile il tuo profilo significa che le tue richieste di noleggio hanno maggiori probabilità di essere accettate.</p>

                <p>Guarda il video di seguito su come aggiornare facilmente il tuo profilo per includere collegamenti ai tuoi profili social e alla tua esperienza nel settore:</p>

                <p><strong>-Come posso verificare il mio ID?</p></strong>
                <p>La sicurezza è la nostra massima priorità in SetPatrol. La nostra comunità si basa sulla fiducia e siamo orgogliosi di aver creato uno dei modi più sicuri per condividere le apparecchiature con altre persone.</p>
                <p>Lavoriamo duramente per proteggere tutti i nostri membri assicurandoci che ogni persona che utilizza il sito sia chi dice di essere. In questo modo, sai sempre con chi stai parlando.</p>
              </div>
            </div>
            <br></br>
            <div>
              <h3 onMouseLeave={mouseLeave} onMouseEnter={mouseOver} onClick={toggleClickKeywords}>4. FIDUCIA E SICUREZZA</h3>
              <div className='text' style={{ display: 'none' } }>
                <p><strong>Cosa succede ai miei dati ID? Come si verificano gli account degli utenti?</p><s/trong>
                <p>Siamo seri riguardo al controllo e alla sicurezza di SetPatrol. Il sistema di controllo SetPatrol è progettato per garantire che la nostra comunità abbia i membri più affidabili. È incredibilmente efficace nel tenere i cattivi attori fuori dalla piattaforma.</p>
                <p>Il sistema di controllo SetPatrol combina algoritmi di apprendimento automatico che sfruttano una vasta rete di dati sulla prevenzione delle frodi, insieme alla revisione umana. Ogni persona che affitta su SetPatrol è stata esaminata dal nostro team. Inoltre non controlliamo l'affittuario solo una volta, ma ogni volta che noleggia. Ciò significa che la nostra comunità è di alta qualità, affidabile e professionale. Per controllare i membri di SetPatrol, raccogliamo informazioni personali (come un documento d'identità con foto rilasciato dallo stato, indirizzo, numero di telefono, data di nascita) e utilizziamo strumenti automatici così come le revisioni del team SetPatrol per verificare che sia accurato. A volte ci vogliono uno o due giorni. Se sei di fretta, possiamo accelerare il processo! Inviaci un'e-mail a ask@SetPatrol.com.</p>

                <p>Penso che qualcuno stia utilizzando la piattaforma in modo fraudolento, cosa devo fare?</p>
                <p>Se sospetti attività fraudolente su SetPatrol, prendi nota del nome e dell'attività del membro e avvisaci immediatamente.</p>

              </div>
            </div>
            <br></br>
            <div>
              <h3 onMouseLeave={mouseLeave} onMouseEnter={mouseOver} onClick={toggleClickKeywords}>5. AFFITTO DI ATTREZZATURE</h3>
              <div className='text' style={{ display: 'none' } }>
              <p><strong>Com'è il processo di noleggio?</strong></p>

              <p>È molto facile!</p>

              <p>Richiesta: il noleggiatore seleziona la marcia su Set Patrol, immette il metodo di pagamento, sceglie un'assicurazione.</p>

              <p><strong>Accettazione: il proprietario accetta la richiesta di noleggio.</strong></p>
              <p>Addebito: una volta che il proprietario accetta la richiesta di noleggio, viene addebitato sulla carta del locatario e il denaro viene inviato al conto bancario del proprietario.</p>

              <p>Entrambi gli utenti accettano di incontrarsi in un luogo e in un orario conveniente per entrambi. Consigliamo un luogo pubblico se possibile: un parco o una caffetteria.</p>
              Riceverete quindi entrambi un pacchetto di check in e check out, il nostro contratto di noleggio, per assicurarvi che l'attrezzatura funzioni bene.</p>

              <p>Ritiro: entrambi gli utenti devono presentare i propri ID e ispezionare tutti gli articoli, quindi controllarli elettronicamente (un processo molto semplice).</p>

              <p>Restituzione e ispezione: quando il noleggiatore restituisce l'attrezzatura, il proprietario deve ispezionare tutti gli articoli per assicurarsi che siano nelle stesse condizioni in cui erano quando il noleggiatore ha ritirato per la prima volta. Se il proprietario scopre che l'attrezzatura NON è nelle stesse condizioni, deve segnalare la discrepanza al noleggiatore ea Set Patrol entro un'ora.</p>

              <p><strong>I fine settimana contano come un giorno</strong></p>
              <p>Offriamo uno sconto per il fine settimana: i fine settimana contano come 1 giorno (sabato + domenica). Sappiamo che molti di voi creano contenuti nei fine settimana, come sempre Set Patrol è un'opzione più conveniente per voi.
              Esempio: i tuoi giorni di riprese sono sabato e domenica. Il ritiro è venerdì, il ritiro è lunedì. Ti verrà addebitato un giorno di riprese.</p>
              <p><strong>Come devo prepararmi per ritirare o noleggiare l'attrezzatura?</strong></p>
              <p>Prima di ritirare, gli utenti dovrebbero discutere di come verrà imballato l'articolo: una custodia per pellicani, una custodia per fotocamera ecc. Assicurati che l'attrezzatura sia pronta e imballata prima dell'arrivo del noleggiatore, entrambe le parti dovrebbero avere il loro accordo per il check-in e un documento d'identità pronto come bene.</p>

              <p><strong>Qual è la quota comunitaria che addebiti?</strong></p>

              <p>Addebitiamo agli affittuari una commissione comunitaria del 5% su ogni prenotazione.</p>
              <p>Questa commissione aiuta a coprire i costi di verifica dell'identità, sicurezza, servizio clienti, miglioramenti delle funzionalità, mitigazione delle controversie e elaborazione delle carte di credito sostenuti dalla comunità.</p>

              <p><strong>Supportate la spedizione o il corriere di consegna? Posso farmi spedire o consegnare l'attrezzatura?</strong></p>
              <p>Stiamo lavorando per fornire l'opzione di spedizione migliore e più sicura. Per ora incoraggiamo gli affittuari e gli affittuari a incontrarsi nei bar locali per scambiare affitti. Puoi supportare contemporaneamente tre locali contemporaneamente (caffè, attrezzature e registi !!)</p>

              <p><strong>Posso prolungare un noleggio?</strong></p>
              <p>A volte i tuoi piani cambiano e devi tenere gli attrezzi più a lungo del previsto. Ecco i passaggi se devi modificare le date del tuo noleggio.</p>
              <p>Affittuari:</p>
              <p>Si prega di contattare il proprietario dell'attrezzatura e chiedere di prolungare il noleggio. Finché l'attrezzatura è disponibile per il periodo esteso e il proprietario acconsente all'estensione, può modificare le date del noleggio utilizzando il pulsante Modifica ordine. Le estensioni sono interamente a discrezione del proprietario: se rifiuta la tua richiesta, devi restituire l'attrezzatura alla data di ritorno esistente.</p>

              <p><strong>Come posso contattare il proprietario / noleggiatore?</strong></p>
              <p>puoi semplicemente inviare un messaggio al proprietario prima del noleggio facendo clic sul pulsante "Contatto" sotto il nome del proprietario nella pagina dell'elenco o "Contatta il proprietario" nella pagina del profilo del proprietario.</p>


              <p><strong>Come faccio a sapere con certezza che l'attrezzatura funziona bene? Cosa succede se, una volta che inizio ad usarlo, finisce per essere difettoso?</strong></p>
              <p>In Set Patrol, tutti vengono controllati durante la creazione di un profilo e per ogni transazione. Abbiamo un sistema protetto che include la verifica del contatto e dell'ID. Tutte le parti, prima delle transazioni, devono compilare un contratto di affitto e un modulo di check out che attesti che tutto è in buono stato, lo stesso al ritorno. Se sorge un problema, diciamo problemi tecnici non previsti dai moduli di check out, la nostra assicurazione lo coprirà.</p>


               
              <p><strong>E se sto noleggiando l'attrezzatura e finisco per averne bisogno all'ultimo minuto?</strong></p>
              <p>Se annulli entro 2 ore dall'accettazione della richiesta, non verrà applicata alcuna penale. In qualità di noleggiatore, se annulli entro 48 ore dall'orario di ritiro, ci riserviamo il diritto di addebitare una commissione fino al 50% del costo del noleggio, su richiesta del proprietario.</p>
              <p>Se il proprietario annulla entro 24 ore dall'orario di ritiro, ci riserviamo il diritto di addebitare una commissione fino al 100% del costo del noleggio.</p>

              <p><strong>Ho perso qualcosa che avevo affittato. Cosa dovrei fare?</strong></p>
              <p>Se hai smarrito un noleggio o ti è stato rubato qualcosa, mantieni la calma: faccelo sapere - Invia un'e-mail con oggetto "Richiesta di copertura assicurativa" a ask@setpatrol.com includendo quanto segue:</p>
              <ul>
              <li>Il tuo nome</li>
              <li>Il tuo numero di telefono.</li>
              <li>Dettagli del noleggio (nome del proprietario dell'attrezzatura, attrezzatura noleggiata, data, luogo).</li>
              <li>Una descrizione dell'incidente con il maggior numero di dettagli possibile.</li>
              <li>Dillo al Rentee.</li>
              <li>Presentare un rapporto alla polizia se vengono rubati oggetti.</li>
              </ul>

              <p><strong>Posso mandare qualcun altro a ritirare l'attrezzatura per me?</strong></p>
              <p>Quando sei impegnato a coordinare la tua produzione, a volte avrai bisogno di qualcun altro per gestire il ritiro o la consegna dell'attrezzatura. Su ShareGrid, aggiungerai quella persona al noleggio come "Persona autorizzata".</p>
            </div> 
          </div>
          <br></br>
           <div>
              <h3 onMouseLeave={mouseLeave} onMouseEnter={mouseOver} onClick={toggleClickKeywords}>6. DANNI</h3>
              <div className='text' style={{ display: 'none' } }> 
              <p><strong>E se danneggio l'attrezzatura?</strong></p>
              <p>Le cose accadono! Inviaci un'e-mail a ---- così possiamo risolverlo insieme. Lavoreremo insieme per trovare una soluzione con la nostra copertura assicurativa, sia attraverso una soluzione sostitutiva che alternativa.</p>
              <p><strong>Esiste un contratto tra proprietari e affittuari?</strong></p>
              <p>Sì. Sia i proprietari che gli affittuari riceveranno una lista di controllo digitale prima del ritiro.</p>
              <p><strong>Cosa sono i fogli di controllo digitali?</strong>
              </p><p>Affittuari e proprietari utilizzano fogli di controllo digitali per registrare le condizioni dell'attrezzatura noleggiata prima e dopo ogni noleggio. Questa lista di controllo è obbligatoria. In questo modo, tutti sono chiari sulle condizioni dell'attrezzatura e, in caso di problemi durante il noleggio, possiamo aiutarti a risolvere le cose più rapidamente</p>
              <p>Affittuari:</p>
              <p>Riceverai un link il giorno del ritiro tramite e-mail e messaggio di testo. Completalo con il proprietario nel luogo di ritiro.</p>
              <p>Proprietari: riceverai un link il giorno della riconsegna tramite e-mail e SMS. Completalo con l'affittuario nel luogo di restituzione. Assicurati di testare accuratamente l'attrezzatura e annota eventuali elementi mancanti o danni.</p>

              <hr></hr>
              <h3>ATTREZZATURA D'ACQUISTO CON SET PATROL VENDITA DI ATTREZZATURA</h3>
              <p><strong>Perché dovrei vendere la mia attrezzatura tramite Set Patrol?</strong></p>
              <p>Set Patrol è una piattaforma controllata e protetta con utenti verificati. Ciò consente a tutte le tue transazioni di essere al sicuro, al contrario di un normale sito web di seconda mano o di un gruppo Facebook.</p>
              <p><strong>Quanto costa vendere un articolo su ShareGrid?</strong></p>
              <p>Prendiamo una percentuale del 5% per ogni transazione tra venditore e acquirente. L'inserzione è sempre gratuita.</p>
              <p>Cosa devo fare quando qualcuno fa un'offerta per acquistare il mio articolo?
              Riceverai una notifica sul tuo account Set Patrol e tramite e-mail.</p>
              <p><strong>Quando vengo pagato per una vendita?</strong></p>
              <p>Entro 3-5 giorni lavorativi.</p>
              <p><strong>Addebitate tasse sugli acquisti?</strong></p>
              <p>Noi non. Puoi decidere di aggiungere le tasse al prezzo nel tuo annuncio.</p>
            </div>
          <br></br>
           <div>
              <h3 onMouseLeave={mouseLeave} onMouseEnter={mouseOver} onClick={toggleClickKeywords}>QUOTAZIONE DI ATTREZZATURE E GESTIONE DEL NOLEGGIO</h3>
              <div className='text' style={{ display: 'none' } }> 
              <p><strong>Cosa significa se una richiesta dice che SetPatrol sta rivedendo questo noleggio '? Perché non posso accettare la richiesta?</strong></p>
              <p>Sono necessari un paio di giorni per esaminare ogni scheda e assicurarci che sia conforme ai nostri standard di sicurezza. Se hai fretta, inviaci un'e-mail a ask@setpatrol.com in modo che possiamo ospitarti.</p>
              <p><strong>Devo pagare per elencare l'attrezzatura?</strong></p>
              <p>No, è sempre gratuito!</p>
              <p><strong>Posso modificare la disponibilità del mio annuncio?</strong></p>
              <p>Ovviamente, finché l'articolo non è stato ancora noleggiato, sentiti libero di apportare modifiche.</p>
              <p><strong>Posso pubblicare un pacchetto di attrezzature?</strong></p>
              <p>Ovviamente crei i tuoi elenchi. Sentiti libero, ad esempio, di elencare un corpo macchina e i suoi obiettivi.</p>
              <p><strong>E se volessi rimuovere un articolo dall'elenco?</strong></p>
              <p>Sei responsabile al 100% delle tue inserzioni, sentiti libero di rimuovere un articolo dall'elenco finché non viene affittato.</p>
              <p><strong>Fissate i prezzi o io?</strong></p>
              <p>Stabilisci sempre i tuoi prezzi! Sentiti libero di navigare per vedere cosa offrono gli altri elenchi.</p>
              <p><strong>-Devo pagare le tasse sul reddito ottenuto da SetPatrol?</strong></p>
              <p>Poiché Set Patrol opera in tutti i paesi dell'Unione Europea, con varie legislazioni fiscali, sei responsabile del deposito delle tue tasse con i tuoi guadagni di Set Patrol. Ti consigliamo di parlare con il tuo commercialista.</p>

            </div>
           </div>
           
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
