import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './SupportPage.css';

const SupportPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Support Page"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'SupportPage',
        description: 'Support in SetPatrol marketplace.',
        name: 'Support',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Support</h1>

          <div>
            <h3>Comming soon</h3>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default SupportPage;
