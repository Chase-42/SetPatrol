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
        <span id="SectionHowItWorks.titleLineOne">How it Works!</span>
      </div>

      <div id='grid'  className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <span id="SectionHowItWorks">1. Fill out your profile</span>
          </h2>
          <p>
            <span id="SectionHowItWorks.part1Text">Upload a photo and add a short description of yourself, your work, interests, social media and job title. This will help build trust with prospective renters and give them confidence that you're a real human being! Only your public description and listings will be viewable by other members. Your address, email and phone number remain confidential to protect your safety.</span>
          </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
            <span id="SectionHowItWorks">2. Set up payments to rent out gear you own:</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">In order to accept payments for rentals of gear you own, you must set up your payments profile here. We use Paypal, which is the trusted payment for many business. SetPatrol does not see or save your bank information, only PayPal has access to it.</span>
          </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
            <span id="SectionHowItWorks">3. List your gear</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">Creating new listings takes only a few minutes! Provide details about your equipment and make sure to add a photo. We recommend setting a price between 2% and 5% of the current value. When someone wants to rent, they'll send you an email or make a request.</span>
          </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
            <span id="SectionHowItWorks">4. Find gear you need</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">Search on SetPatrol database to find what you need. You can search by keyword, category, location or owner. When you find equipment to rent, choose dates, and send a request to the owner of the equipment via the “Request Gear” button. When the owner accepts your request, set up a time and place to meet for the equipment pickup.</span>
          </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
            <span id="SectionHowItWorks">5. Equipment handoff</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">During the equipment handoff, make sure the renter checks that the equipment is what they expected and that it is in good working condition. Now go make something beautiful!</span>
          </p>
        </div>

        <div id='grid'  className={css.step}>
          <h2 className={css.stepTitle}>
            <span id="SectionHowItWorks">6. Review</span>
          </h2>
          <p>
            <span id="SectionHowItWorks">After the rental is complete, pay it forward and don’t forget to leave a rating and review of your renter. This really helps other users.</span>
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
