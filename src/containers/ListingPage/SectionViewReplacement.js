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

const replacementNumber = Number(replacement.amount);

function currencyFormat(num) {
   return '€' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  return (
      <div className={css.sectionFeatures}>

          <h2 className={css.replacementTitle}>Replacement Price</h2>
          <p className={css.replacement}>{currencyFormat(replacementNumber)}</p>
      </div>
  );
};

export default SectionViewReplacement;
