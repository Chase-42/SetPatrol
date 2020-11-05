import React, { useState } from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Button, FieldSelect, Form } from '../../components';

import css from './EditListingFeaturesForm.css';

const EditListingFeaturesFormComponent = props => {
  const [key, setKey] = useState('test');
  const [options, setOptions] = useState([]);

  return (
    <FinalForm
      {...props}
      mutators={{ ...arrayMutators }}
      render={formRenderProps => {
        const {
          disabled,
          ready,
          rootClassName,
          className,
          handleSubmit,
          pristine,
          saveActionMsg,
          updated,
          updateInProgress,
          fetchErrors,
          filterConfig,
        } = formRenderProps;

        // Subcategory Keys and Option variables
        const cinemaCameraKey = 'cinema_camera_brands';
        const cinemaCameraOptions = findOptionsForSelectFilter(cinemaCameraKey, filterConfig);
        const cinemaLensesKey = 'cinema_lenses';
        const cinemaLensesOptions = findOptionsForSelectFilter(cinemaLensesKey, filterConfig);
        const stillCamerasKey = 'still_hybrid_cameras';
        const stillCamerasOptions = findOptionsForSelectFilter(stillCamerasKey, filterConfig);
        const stillLensesKey = 'still_lenses';
        const stillLensesOptions = findOptionsForSelectFilter(stillLensesKey, filterConfig);
        const cameraAccessoriesKey = 'camera_accessories';
        const cameraAccessoriesOptions = findOptionsForSelectFilter(
          cameraAccessoriesKey,
          filterConfig
        );
        const lightingElectricKey = 'lighting_electric';
        const lightingElectricOptions = findOptionsForSelectFilter(
          lightingElectricKey,
          filterConfig
        );
        const audioEquipmentKey = 'audio_equipment';
        const audioEquipmentOptions = findOptionsForSelectFilter(audioEquipmentKey, filterConfig);
        const monitorsEvfsKey = 'monitors_evfs';
        const monitorsEvfsOptions = findOptionsForSelectFilter(monitorsEvfsKey, filterConfig);
        const cameraSupportsKey = 'camera_supports';
        const cameraSupportsOptions = findOptionsForSelectFilter(cameraSupportsKey, filterConfig);
        const gripKey = 'grip';
        const gripOptions = findOptionsForSelectFilter(gripKey, filterConfig);
        const ditMediaManagmentKey = 'dit_media_management';
        const ditMediaManagmentOptions = findOptionsForSelectFilter(
          ditMediaManagmentKey,
          filterConfig
        );
        const mediaKey = 'media';
        const mediaOptions = findOptionsForSelectFilter(mediaKey, filterConfig);
        const virtualRealityAndNewTechKey = 'virtual_reality_and_new_tech';
        const virtualRealityAndNewTechOptions = findOptionsForSelectFilter(
          virtualRealityAndNewTechKey,
          filterConfig
        );
        const dronesAndVehiclesKey = 'drones_and_vehicles';
        const dronesAndVehiclesOptions = findOptionsForSelectFilter(
          dronesAndVehiclesKey,
          filterConfig
        );
        const locationsAndSpacesKey = 'locations_and_spaces';
        const locationsAndSpacesOptions = findOptionsForSelectFilter(
          locationsAndSpacesKey,
          filterConfig
        );

        // Logic to align correct category w/ subcategory
        if (props.category === 'cinema_cameras') {
          setKey(cinemaCameraKey);
          setOptions(cinemaCameraOptions);
        } else if (props.category === 'cinema_lenses') {
          setKey(cinemaLensesKey);
          setOptions(cinemaLensesOptions);
        } else if (props.category === 'still_hybrid_cameras') {
          setKey(stillCamerasKey);
          setOptions(stillCamerasOptions);
        } else if (props.category === 'still_lenses') {
          setKey(stillLensesKey);
          setOptions(stillLensesOptions);
        } else if (props.category === 'camera_accessories') {
          setKey(cameraAccessoriesKey);
          setOptions(cameraAccessoriesOptions);
        } else if (props.category === 'lighting_electric') {
          setKey(lightingElectricKey);
          setOptions(lightingElectricOptions);
        } else if (props.category === 'audio_equipment') {
          setKey(audioEquipmentKey);
          setOptions(audioEquipmentOptions);
        } else if (props.category === 'monitors_evfs') {
          setKey(monitorsEvfsKey);
          setOptions(monitorsEvfsOptions);
        } else if (props.category === 'camera_supports') {
          setKey(cameraSupportsKey);
          setOptions(cameraSupportsOptions);
        } else if (props.category === 'grip') {
          setKey(gripKey);
          setOptions(gripOptions);
        } else if (props.category === 'dit_media_management') {
          setKey(ditMediaManagmentKey);
          setOptions(ditMediaManagmentOptions);
        } else if (props.category === 'media') {
          setKey(mediaKey);
          setOptions(mediaOptions);
        } else if (props.category === 'virtual_reality_and_new_tech') {
          setKey(virtualRealityAndNewTechKey);
          setOptions(virtualRealityAndNewTechOptions);
        } else if (props.category === 'drones_and_vehicles') {
          setKey(dronesAndVehiclesKey);
          setOptions(dronesAndVehiclesOptions);
        } else if (props.category === 'locations_and_spaces') {
          setKey(locationsAndSpacesKey);
          setOptions(locationsAndSpacesOptions);
        }
        const classes = classNames(rootClassName || css.root, className);
        const submitReady = (updated && pristine) || ready;
        const submitInProgress = updateInProgress;
        const submitDisabled = disabled || submitInProgress;

        const { updateListingError, showListingsError } = fetchErrors || {};
        const errorMessage = updateListingError ? (
          <p className={css.error}>
            <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
          </p>
        ) : null;

        const errorMessageShowListing = showListingsError ? (
          <p className={css.error}>
            <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
          </p>
        ) : null;

        return (
          <Form className={classes} onSubmit={handleSubmit}>
            {errorMessage}
            {errorMessageShowListing}

            <FieldSelect
              className={css.features}
              name={key}
              id={key}
              label={'Equipment brand or category'}
            >
              <option disabled value="">
                {'Select the brand or category of your equipment...'}
              </option>
              {options.map(o => (
                <option key={o.key} value={o.key}>
                  {o.label}
                </option>
              ))}
            </FieldSelect>

            <Button
              className={css.submitButton}
              type="submit"
              inProgress={submitInProgress}
              disabled={submitDisabled}
              ready={submitReady}
            >
              {saveActionMsg}
            </Button>
          </Form>
        );
      }}
    />
  );
};

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  filterConfig: propTypes.filterConfig,
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default EditListingFeaturesForm;
