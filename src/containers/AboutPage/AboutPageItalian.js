import React from 'react';
import ReactPlayer from 'react-player';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import alberto from './Alberto_01.jpg';
import fran from './Francesco_02.jpg';
import heloise from './Heloise_02.jpg';
import morgane from './Morgane.jpg';
import michele from './Michele_02.jpg';
import chase from './Chase_02.jpg';
import andras from './Andras.jpg';
import natasha from './Natasha.jpg';
import elizabeth from './Elizabeth.jpg';
import SetPatrolPromo from './SetPatrolPromo.mp4';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  function changeOpacity(e) {
    e.target.style.opacity = 1;
  }

  function changeOpacityBack(e) {
    e.target.style.opacity = 0.5;
  }

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <h1 className={css.pageTitle}>About Us</h1>
              <div className={css.aboutText}>
                <p>
                  SetPatrol e’ la piu’ grande comunita’ Europea per Filmmakers creata da Filmmakers. La missione di SetPatrol e’ quella di risolvere un problema che ogni Filmmaker incontra: il costo e la disponibilità’ di attrezzatura professionale da noleggiare o comprare.
                  La nostra priorita’ e’ di essere una piattaforma democratica che dia la possibilita’ ad ogni creativo di collaborare.

                </p>
                <p>
                 SetPatrol e’ un mercato virtuale dove chi ha bisogno di attrezzatura professionale per foto o video puo’ trovare altri utenti disposti a noleggiarla.
                  C’e’ un grosso problema nell'industria audiovisiva, e SetPatrol ha il compito di risolverlo.
                  In quanto creatori, lavoriamo in un settore focalizzato sui risultati. I clienti non vogliono rinunciare a lavori creativi ben fatti, e noi siamo vittime del nostro stesso successo; alimentiamo un mercato in forte domanda, con tempi di esecuzione brevissimi, ed constanti spese per nuova attrezzatura.

                </p>
                <p>
                 La nostra piattaforma da’ agli artisti accesso agli attrezzi necessari per raggiungere la stabilita’ finanziaria di cui hanno bisogno per focalizzarsi sulla creazione. Gli utenti possono pubblicare annunci per ogni tipo di attrezzatura foto/video, noleggiare direttamente da altri professionisti, e guadagnare mentre l’attrezzatura rimane inutilizzata. 
                </p>
              </div>
              <div className={css.aboutVideo}>
                 <ReactPlayer
          className='react-player'
          url={SetPatrolPromo} width='100%'          height='100%'  controls       />
</div>
              <h1 className={css.pageTitle}>The Crew</h1>

              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={alberto}
                  alt="Alberto Innella."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>Alberto Innella</h2>
                <p>CEO & Founder</p>
              </div>

              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={fran}
                  alt="Francesco Del Pozzo."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>Francesco Del Pozzo</h2>
                <p>Director of Marketing</p>
              </div>

              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={heloise}
                  alt="Heloise Wilson."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>Heloise Wilson</h2>
                <p>Director of Operations</p>
              </div>

              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={morgane}
                  alt="Morgane Kendregan."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>Morgane Kendregan</h2>
                <p>Program Manager</p>
              </div>

              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={andras}
                  alt="András Szén."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>András Szén</h2>
                <p>Art Director</p>
              </div>

              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={chase}
                  alt="Chase Collins."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>Chase Collins</h2>
                <p>Head of Technology</p>
              </div>

              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={michele}
                  alt="Michele Di Buono."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>Michele Di Buono</h2>
                <p>Web Designer</p>
              </div>
              
              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={elizabeth}
                  alt="Elizabeth Karen."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>Elizabeth Karen</h2>
                <p>Junior of Technology</p>
              </div>
              <div className={css.theCrew}>
                <img
                  className={css.crewImage}
                  src={natasha}
                  alt="Natasha Nodine."
                  onMouseEnter={changeOpacity}
                  onMouseLeave={changeOpacityBack}
                />
                <h2 className={css.crewHeader}>Natasha Nodine</h2>
                <p>Junior of Technology</p>
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

export default AboutPage;
