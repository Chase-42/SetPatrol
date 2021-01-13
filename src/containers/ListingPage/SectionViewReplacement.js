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
const aStr = String(replacementNumber);
const res = aStr.slice(aStr.length-2);
const res1 = aStr.slice(0, -2);
const newReplacemtNumber = res1 + '.' + res;

console.log(replacementNumber);

function currencyFormat(num) {
   return '€' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
  return (
      <div className={css.sectionFeatures}>

          <h2 className={css.replacementTitle}>Replacement Price</h2>
          <p className={css.replacement}>{currencyFormat(newReplacemtNumber)}</p>
      </div>
  );
};

export default SectionViewReplacement;
