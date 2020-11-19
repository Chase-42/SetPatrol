import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

// Import css from existing CSS Modules file:
import css from './ListingPage.css';

// Create new React component
const SectionViewCancelationPolicy = props => {
  // Component's props should include all the possible options (from config)
  // and listing's publicData
 // const { options, publicData } = props;
  //const selectedOption = publicData && publicData.view ? publicData.view : null;

  // Don't return anything if public data doesn't contain view field
  // That's why we named this component as SectionViewMaybe
 // if (!publicData || !selectedOption) {
 //   return null;
 // }

  // Find selected options label
 // const optionConfig = options.find(o => o.key === selectedOption);
 // const optionLabel = optionConfig ? optionConfig.label : null;
  return (

    <div className={css.sectionCancelationPolicy}>
      <h2 className={css.cancelationPolicyTitle}>
        Cancelation Policy
      </h2>
      <p className={css.cancelationPolicy}>
        Cancel within 2 hours of making the booking and you will receive a full refund. Cancel within 48 hours of the rental start date and you will receive a 50% refund. Cancel within 24 hours of the rental start date and the rental may be non-refundable. <b>Cancellation fees are imposed at owner's discretion.</b>
      </p>
    </div>
  );
};

export default SectionViewCancelationPolicy;
