import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY } from '../../util/types';
import config from '../../config';

import css from './ListingPage.css';

const SectionViewReplacement = props => {
  const {
    replacement,
  } = props;

 /* const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'ListingPage.perNight'
    : isDaily
    ? 'ListingPage.perDay'
    : 'ListingPage.perUnit';
*/
  return (
      <div className={css.sectionFeatures}>

          <h2 className={css.replacementTitle}>Replacement Price</h2>
          <p className={css.replacement}>{replacement.amount}</p>
      </div>
  );
};

export default SectionViewReplacement;
