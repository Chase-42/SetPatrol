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

} else if(publicData.category == "still_hybrid_cameras") {
  
const selectedOptions = publicData && props.publicData.still_hybrid_cameras.split(" ") ? props.publicData.still_hybrid_cameras.split(" ") : [];
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

} else if(publicData.category == "still_lenses") {
  
const selectedOptions = publicData && props.publicData.still_lenses.split(" ") ? props.publicData.still_lenses.split(" ") : [];
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

} else if(publicData.category == "camera_accessories") {
  
const selectedOptions = publicData && props.publicData.camera_accessories.split(" ") ? props.publicData.camera_accessories.split(" ") : [];
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

} else if(publicData.category == "lighting_electric") {
  
const selectedOptions = publicData && props.publicData.lighting_electric.split(" ") ? props.publicData.lighting_electric.split(" ") : [];
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

} else if(publicData.category == "audio_equipment") {
  
const selectedOptions = publicData && props.publicData.audio_equipment.split(" ") ? props.publicData.audio_equipment.split(" ") : [];
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

} else if(publicData.category == "monitors_evfs") {
  
const selectedOptions = publicData && props.publicData.monitors_evfs.split(" ") ? props.publicData.monitors_evfs.split(" ") : [];
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

} else if(publicData.category == "camera_supports") {
  
const selectedOptions = publicData && props.publicData.camera_supports.split(" ") ? props.publicData.camera_supports.split(" ") : [];
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

} else if(publicData.category == "grip") {
  
const selectedOptions = publicData && props.publicData.grip.split(" ") ? props.publicData.grip.split(" ") : [];
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

} else{
  return null;
}


};

export default SectionFeaturesMaybe;
