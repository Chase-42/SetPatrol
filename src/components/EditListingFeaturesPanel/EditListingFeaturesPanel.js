import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';

import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureListing } from '../../util/data';
import { EditListingFeaturesForm } from '../../forms';
import { ListingLink } from '../../components';

import css from './EditListingFeaturesPanel.css';

const EditListingFeaturesPanel = props => {
  const {
    rootClassName,
    className,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingFeaturesPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingFeaturesPanel.createListingTitle" />
  );

  const cinema_camera_brands = publicData && publicData.cinema_camera_brands;
  const cinema_lenses = publicData && publicData.cinema_lenses;
  const still_hybrid_cameras = publicData && publicData.still_hybrid_cameras;
  const still_lenses = publicData && publicData.still_lenses;
  const camera_accessories = publicData && publicData.camera_accessories;
  const lighting_electric = publicData && publicData.lighting_electric;
  const audio_equipment = publicData && publicData.audio_equipment;
  const monitors_evfs = publicData && publicData.monitors_evfs;
  const camera_supports = publicData && publicData.camera_supports;
  const grip = publicData && publicData.grip;
  const dit_media_management = publicData && publicData.grip;
  const media = publicData && publicData.media;
  const virtual_reality_and_new_tech = publicData && publicData.virtual_reality_and_new_tech;
  const drones_and_vehicles = publicData && publicData.drones_and_vehicles;
  const locations_and_spaces = publicData && publicData.locations_and_spaces;

  const initialValues = {
    cinema_camera_brands,
    cinema_lenses,
    still_hybrid_cameras,
    still_lenses,
    camera_accessories,
    lighting_electric,
    audio_equipment,
    monitors_evfs,
    camera_supports,
    grip,
    dit_media_management,
    media,
    virtual_reality_and_new_tech,
    drones_and_vehicles,
    locations_and_spaces,
  };

  const category = props.listing.attributes.publicData.category;
  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingFeaturesForm
        className={css.form}
        initialValues={initialValues}
        onSubmit={values => {
          const {
            cinema_camera_brands = [],
            cinema_lenses = [],
            still_hybrid_cameras = [],
            still_lenses = [],
            camera_accessories = [],
            lighting_electric = [],
            audio_equipment = [],
            monitors_evfs = [],
            camera_supports = [],
            grip = [],
            dit_media_management = [],
            media = [],
            virtual_reality_and_new_tech = [],
            drones_and_vehicles = [],
            locations_and_spaces = [],
          } = values;

          const updatedValues = {
            publicData: {
              cinema_camera_brands,
              cinema_lenses,
              still_hybrid_cameras,
              still_lenses,
              camera_accessories,
              lighting_electric,
              audio_equipment,
              monitors_evfs,
              camera_supports,
              grip,
              dit_media_management,
              media,
              virtual_reality_and_new_tech,
              drones_and_vehicles,
              locations_and_spaces,
            },
          };
          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        category={category}
      />
    </div>
  );
};

EditListingFeaturesPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
};

const { bool, func, object, string } = PropTypes;

EditListingFeaturesPanel.propTypes = {
  rootClassName: string,
  className: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingFeaturesPanel;
