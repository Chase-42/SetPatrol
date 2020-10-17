import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  CommunityRules,
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
          <div className='rules'>
              <CommunityRules /> 
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