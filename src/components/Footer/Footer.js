import React from 'react';
import { string } from 'prop-types';
import { FaEnvelope, FaHome } from 'react-icons/fa';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  IconSocialMediaYoutube,
  IconSocialMediaLinkedIn,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './Footer.css';

const renderSocialMediaLinks = intl => {
  const {
    siteFacebookPage,
    siteInstagramPage,
    siteYoutubePage,
    siteLinkedInPage,
    siteTwitterHandle,
  } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToYoutube = intl.formatMessage({ id: 'Footer.goToYoutube' });
  const goToLinkedIn = intl.formatMessage({ id: 'Footer.goToLinkedIn' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;

  const youtubeLink = siteYoutubePage ? (
    <ExternalLink
      key="linkToYoutube"
      href={siteYoutubePage}
      className={css.icon}
      title={goToYoutube}
    >
      <IconSocialMediaYoutube />
    </ExternalLink>
  ) : null;

  const linkedInLink = siteLinkedInPage ? (
    <ExternalLink
      key="linkToLinkedIn"
      href={siteLinkedInPage}
      className={css.icon}
      title={goToLinkedIn}
    >
      <IconSocialMediaLinkedIn />
    </ExternalLink>
  ) : null;
  return [fbLink, twitterLink, instragramLink, youtubeLink, linkedInLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <div className={css.organization}>
                <ul className={css.list}>
                <li className={css.listItem}>
                    <NamedLink name="NewListingPage" className={css.link}>
                      <FormattedMessage id="Footer.toNewListingPage" />
                    </NamedLink>
                  </li>
        
                  <li className={css.listItem}>
                    <FormattedMessage id="Insurance Policy" />
                  </li>
        
                  <li className={css.listItem}>
                    <NamedLink name="LandingPage" className={css.copyrightLink}>
                      <FormattedMessage id="Get Started" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="LandingPage" className={css.copyrightLink}>
                      <FormattedMessage id="Find Equipment" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="LandingPage" className={css.copyrightLink}>
                      <FormattedMessage id="Blog" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
            </div>


            <div className={css.infoLinks}>
              <ul className={css.list}>
                {/* <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li> */}
                {/* <li className={css.listItem}>
                  <NamedLink name="AboutPage" className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li> */}
                <li className={css.listItem}>
                  <NamedLink name="FAQPage" className={css.link}>
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="CommunityRulesPage" className={css.link}>
                    <span id="Footer">Community Rules</span>
                  </NamedLink>
                </li>
              </ul>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className={css.extraLinks}>
              <div className={css.contactFooter}>
                <p>
                  <FaHome size="15px" style={{ marginRight: '2%', marginLeft: '-4%' }} /> Marino Mart Fairview D d02,
                  Dublin, Ireland
                </p>
                <p><a href="mailto:ask@setpatrol.com">
                  <FaEnvelope size="12px" style={{ marginRight: '2%', marginLeft: '-6%' }} /> ask@setpatrol.com
                </a></p>
              </div>
              <div className={css.someLinks}>{socialMediaLinks}</div>
              {/* <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
