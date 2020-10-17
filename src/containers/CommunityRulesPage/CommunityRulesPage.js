import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer
} from '../../components';

import css from './CommunityRulesPage.css';

const CommunityRulesPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="CommunityRulesPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'CommunityRulesPage',
        description: 'Community Rules Page',
        name: 'CommunityRulesPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className='container'>
              <h1>SetPatrol Community Rules</h1>
              <p>These Community Rules, together with our Terms of Service and Privacy Policy, constitute the agreement between you and SetPatrol. If you do not want to agree to the Community Rules, you must not use SetPatrol.</p>
              <p>Please take these rules seriously and honor them in the spirit in which they are intended. We will do our best to enforce them consistently and fairly, and ultimately we’ll try to do what we think is best in each situation.</p>
            <h1>SetPatrol Rentals</h1>
            <h2>Owners</h2>
                <ul>
                    <li>Keep it clean.</li>
                </ul>
            <p>Make sure all of your gear is tested, cleaned, and fully functional.</p>
                <ul>
                    <li>Commit to the rental.</li>
                </ul>
            <p>Only accept requests you intend to proceed with. Your renter is depending on you and your equipment.</p>
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default CommunityRulesPage;