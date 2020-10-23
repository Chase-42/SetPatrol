import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionFeaturesMaybe = props => {
  console.log(props);
  const { options, publicData } = props;
  if (!publicData) {
    return null;
  }

if (publicData.category == "cinema_cameras") {
const selectedOptions = publicData && props.publicData.cinema_camera_brands.split(" ") ? props.publicData.cinema_camera_brands.split(" ") : [];
  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.amenities"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );


}else if(publicData.category == "cinema_lenses") {
const selectedOptions = publicData && props.publicData.cinema_lenses.split(" ") ? props.publicData.cinema_lenses.split(" ") : [];
  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.amenities"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );



}else{
  return null;
}


};

export default SectionFeaturesMaybe;
