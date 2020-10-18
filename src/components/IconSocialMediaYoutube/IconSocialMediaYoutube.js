import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './IconSocialMediaYoutube.css';

const IconSocialMediaYoutube = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <svg
      className={classes}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
     <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M47 165 c8 -53 9 -53 21 -5 8 33 8 39 -3 30 -10 -8 -14 -7 -18 2 -3 7 -3 -5 0 -27z"/>
<path d="M80 150 c0 -21 4 -30 13 -27 6 2 12 14 12 27 0 13 -6 25 -12 28 -9 2 -13 -7 -13 -28z m17 -12 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z"/>
<path d="M121 153 c-1 -23 4 -33 14 -33 11 0 15 10 14 33 -2 28 -2 29 -7 7 l-5 -25 -8 25 c-7 23 -7 23 -8 -7z"/>
<path d="M24 96 c-3 -7 -4 -31 -2 -52 l3 -39 75 0 75 0 0 50 0 50 -73 3 c-56 2 -74 0 -78 -12z m39 -14 c-6 -4 -13 -21 -15 -37 -3 -29 -4 -29 -9 8 -4 32 -2 37 16 37 12 0 16 -3 8 -8z m67 -38 c0 -15 -6 -24 -15 -24 -11 0 -15 11 -15 36 0 31 2 35 15 24 8 -7 15 -23 15 -36z m-40 1 c0 -14 -4 -25 -10 -25 -5 0 -10 11 -10 25 0 14 5 25 10 25 6 0 10 -11 10 -25z m80 0 c0 -16 -6 -25 -15 -25 -9 0 -15 9 -15 25 0 16 6 25 15 25 9 0 15 -9 15 -25z"/>
<path d="M111 44 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
</g>
    </svg>
  );
};

IconSocialMediaYoutube.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

IconSocialMediaYoutube.propTypes = { rootClassName: string, className: string };

export default IconSocialMediaYoutube;
