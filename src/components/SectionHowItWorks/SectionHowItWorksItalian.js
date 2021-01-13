import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.css';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className='how'>
    <div id='grid' className={classes}>
      <div className={css.title}>
        <span id="SectionHowItWorks.titleLineOne">COME FUNZIONA!</span>
      </div>

      <div id='grid'  className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
          <h1 className='center'><i className="fa fa-id-badge" aria-hidden="true"></i></h1>
            <span id="SectionHowItWorks" className={css.stepHeader}>1 Inserisci i tuoi dati:</span>
          </h2>
          <p>
            <span id="SectionHowItWorks.part1Text"> Carica una foto e scrivi una breve descrizione personale, del tuo lavoro, interessi, i tuoi social media e la tua professione. Queste informazioni aiuteranno a creare la credibilita’ necessaria per noleggiatori ed altri utenti di sapere che sei una persona in carne ed ossa! Solo la tua descrizione personale e i tuoi annunci saranno visibili da altri utenti. Il tuo indirizzo, email e numero di telefono rimangono confidenziali e protetti nel nostro database.</span>
          </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
            <h1 className='center'><i className="fa fa-money"></i></h1>
            <span id="SectionHowItWorks" className={css.stepHeader}>2 Inserisci una modalita’ di pagamento per ricevere gli introiti dei tuoi noleggi:</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">Per accettare i pagamenti per i noleggi della tua attrezzatura, devi creare il tuo profilo nella sezione pagamento qui. Noi usiamo Paypal, perche’ e’ riconosciuto e sicuro per i pagamenti in tutto il mondo. SetPatrol non ha accesso ai dati bancari, solo Paypal ne e’ in possesso</span>
             </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
          <h1 className='center'><i className="fa fa-camera-retro"></i></h1>
            <span id="SectionHowItWorks" className={css.stepHeader}>3 Inserisci la tua attrezzatura: </span>
          </h2>
          <p>
            <span id="SectionHowItWorks"> Per creare un annuncio con la tua attrezzatura ci vogliono pochi minuti! Inserisci i dettagli di quello che vuoi noleggiare, e non dimenticare di inserire le foto. Noi ti raccomandiamo di usare un valore compreso tra il 2% ed il 5% del costo della tua attrezzatura come prezzo per il noleggio. Quando un altro utente vorra’ noleggiare la tua attrezzatura ti arrivera’ una email con la rischiesta.</span>
            </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
          <h1 className='center'><i class="fa fa-cog" aria-hidden="true"></i></h1>
            <span id="SectionHowItWorks" className={css.stepHeader}>4 Cerca e trova l’attrezzatura che ti serve</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">Cerca nel motore di ricerca di SetPatrol quello che ti serve. Puoi cercare attraverso parole chiave, categorie oppure citta’. Quando trovi quello che vui noleggiare, scegli le date, e manda una richiesta al possessore attraverso il pulsante “Richiesta di Noleggio”. Quando l’altro utente avra’ accettato la tua richiesta, scegli dove e quando incontrarvi per la presa in consegna.</span>
             </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
            <h1 className='center'><i class="fa fa-exchange" aria-hidden="true"></i></h1>
            <span id="SectionHowItWorks" className={css.stepHeader}>5 Scambiati l’attrezzatura</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">Durante la presa in consegna , assicurati che il noleggiatori controlli che sia tutto in ordine. Ora e’ il momento di creare qualcosa di unico!</span>
             </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
            <h1 className='center'><i class="fa fa-star" aria-hidden="true"></i></h1>
            <span id="SectionHowItWorks"  className={css.stepHeader}>6 Review</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">Alla fine del noleggio, il noeggiatore verra’ pagato, e non dimenticare di scrivere una review, questo aiutera’ i futuri utenti.</span>
             </p>
        </div>
      </div>

      <div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
      </div>
    </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
