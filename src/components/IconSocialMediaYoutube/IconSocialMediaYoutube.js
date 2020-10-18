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
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
     <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M65 283 c4 -10 10 -37 12 -60 6 -47 23 -49 23 -3 0 16 4 40 10 54 11 30 3 34 -16 9 -13 -17 -13 -17 -14 0 0 9 -5 17 -11 17 -7 0 -8 -7 -4 -17z"/>
<path d="M124 257 c-10 -27 0 -72 16 -72 11 0 15 11 15 39 0 40 -20 61 -31 33z m26 -32 c0 -14 -4 -25 -10 -25 -5 0 -10 11 -10 25 0 14 5 25 10 25 6 0 10 -11 10 -25z"/>
<path d="M182 228 c-2 -41 0 -47 18 -45 17 1 20 8 18 47 -1 43 -2 44 -5 8 -2 -21 -8 -38 -13 -38 -5 0 -11 17 -13 38 -3 34 -4 34 -5 -10z"/>
<path d="M37 153 c-12 -11 -8 -128 5 -141 8 -8 47 -12 109 -12 77 0 99 3 110 16 14 17 17 112 5 133 -8 12 -217 16 -229 4z m63 -23 c0 -5 -4 -10 -10 -10 -5 0 -10 -20 -10 -45 0 -25 -4 -45 -10 -45 -5 0 -10 18 -10 39 0 22 -3 46 -6 55 -5 12 0 16 20 16 14 0 26 -4 26 -10z m86 -23 c8 -4 14 -24 14 -42 0 -28 -4 -35 -20 -35 -18 0 -20 6 -19 58 0 31 3 50 6 42 3 -8 12 -19 19 -23z m-66 -57 c5 0 11 15 13 33 3 28 4 26 5 -10 2 -37 -1 -43 -18 -43 -17 0 -20 6 -18 43 1 36 2 38 5 10 2 -18 8 -33 13 -33z m130 56 c0 -2 3 -11 6 -20 4 -11 1 -16 -10 -16 -9 0 -16 -8 -15 -17 0 -11 3 -13 6 -5 2 6 9 9 14 6 6 -3 5 -11 -2 -20 -9 -11 -15 -11 -25 -3 -14 12 -19 61 -7 72 7 8 33 10 33 3z"/>
<path d="M170 64 c0 -14 4 -23 10 -19 6 3 10 15 10 26 0 10 -4 19 -10 19 -5 0 -10 -12 -10 -26z"/>
</g>
    </svg>
  );
};

IconSocialMediaYoutube.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

IconSocialMediaYoutube.propTypes = { rootClassName: string, className: string };

export default IconSocialMediaYoutube;
