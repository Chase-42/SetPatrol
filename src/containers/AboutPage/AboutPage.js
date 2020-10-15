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
                  SetPatrol is an European community for filmmakers made by filmmakers. SetPatrol’s main mission is to solve problems that every filmmaker faces; the cost and availability of professional gear to rent and buy. It is our first priority to be a democratized platform for all storytellers to interact and collaborate.
                </p>
                <p>
                  SetPatrol is a marketplace where people who need high-end photography and film equipment can find people who are willing to rent it out. There is a huge problem in the film industry and SetPatrol is trying to change all that. As StoryTellers we work in a field focused on results. Clients are fixated on beautiful, dramatic and creative work. We are victims of our own success; a high demand market, quick turnarounds and forever revamped equipment.
                </p>
                <p>
                  Our platform gives artists access to the tools they need and the financial freedom they desire in order to focus on their craft. Users can list every type of photo/video related piece of equipment, rent it directly to other professionals, and make money while they aren’t using it.
                </p>
              </div>

              <ReactPlayer 
                className={css.aboutVideo}          
                url='https://vimeo.com/406087884'
                width='100%'/>

              <h1 className={css.pageTitle}>The Crew</h1>
              
              <div  className={css.theCrew} >
                <img className={css.crewImage} src={alberto} alt="Alberto Innella." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
                <h2 className={css.crewHeader}>Alberto Innella</h2>
                <p>CEO & Founder</p>
              </div>

              <div className={css.theCrew} >
                <img className={css.crewImage} src={fran} alt="Francesco Del Pozzo." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
                <h2 className={css.crewHeader}>Francesco Del Pozzo</h2>
                <p>Director of Marketing</p>
              </div>

              <div className={css.theCrew}>
                <img className={css.crewImage} src={heloise} alt="Heloise Wilson." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
                <h2 className={css.crewHeader}>Heloise Wilson</h2>
                <p>Director of Operations</p>
              </div>

              <div className={css.theCrew}>
                <img className={css.crewImage} src={morgane} alt="Morgane Kendregan." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
                <h2 className={css.crewHeader}>Morgane Kendregan</h2>
                <p>Program Manager</p>
              </div>

              <div className={css.theCrew}>
                <img className={css.crewImage} src={michele} alt="Michele Di Buono." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
                <h2 className={css.crewHeader}>Michele Di Buono</h2>
                <p>Art Director</p>
              </div>

              <div className={css.theCrew}>
                <img className={css.crewImage} src={chase} alt="Chase Collins." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
                <h2 className={css.crewHeader}>Chase Collins</h2>
                <p>Head of Technology</p>
              </div>


              <div className={css.theCrew}>
                <img className={css.crewImage} src={andras} alt="András Szén." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
                <h2 className={css.crewHeader}>András Szén</h2>
                <p>Art Director</p>
              </div>

              <div className={css.theCrew}>
                <img className={css.crewImage} src={elizabeth} alt="Elizabeth Karen." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
                <h2 className={css.crewHeader}>Elizabeth Karen</h2>
                <p>Junior of Technology</p>
              </div>
              <div className={css.theCrew}>
                <img className={css.crewImage} src={natasha} alt="Natasha Nodine." onMouseEnter={changeOpacity} onMouseLeave={changeOpacityBack} />
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
