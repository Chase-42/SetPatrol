import React from 'react';
import { bool, func, node, number, string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './SearchFiltersPrimary.css';

const SearchFiltersPrimaryComponent = props => {

  const {
    rootClassName,
    className,
    children,
    sortByComponent,
    listingsAreLoaded,
    resultsCount,
    searchInProgress,
    isSecondaryFiltersOpen,
    toggleSecondaryFiltersOpen,
    selectedSecondaryFiltersCount,
  } = props;

   const search = window.location.search;
   const params = new URLSearchParams(search);
   const urlCategory = params.get('pub_category');
   let newChildren = [];

  const renObjData = props.children.map(function(child, idx) {
    if(child.key == 'SearchFiltersPrimary.dates'){
      newChildren = newChildren.concat(child);
    }
    if(child.key == 'SearchFiltersPrimary.price'){
      newChildren = newChildren.concat(child);
    }
    if(child.key == 'SearchFiltersPrimary.keyword'){
      newChildren = newChildren.concat(child);
    }
    if(child.key == 'SearchFiltersPrimary.category'){
      newChildren = newChildren.concat(child);
    }
      console.log(child.key);
    if(urlCategory == 'cinema_cameras' && child.key == 'SearchFiltersPrimary.cinema_camera_brands'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'cinema_lenses' && child.key == 'SearchFiltersPrimary.cinema_lenses'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'still_hybrid_cameras' && child.key == 'SearchFiltersPrimary.still_hybrid_cameras'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'still_lenses' && child.key == 'SearchFiltersPrimary.still_lenses'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'camera_accessories' && child.key == 'SearchFiltersPrimary.camera_accessories'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'lighting_electric' && child.key == 'SearchFiltersPrimary.lighting_electric'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'audio_equipment' && child.key == 'SearchFiltersPrimary.audio_equipment'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'camera_supports' && child.key == 'SearchFiltersPrimary.camera_supports'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'monitors_evfs' && child.key == 'SearchFiltersPrimary.monitors_evfs'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'grip' && child.key == 'SearchFiltersPrimary.grip'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'dit_media_management' && child.key == 'SearchFiltersPrimary.dit_media_management'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'media' && child.key == 'SearchFiltersPrimary.media'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'virtual_reality_and_new_tech' && child.key == 'SearchFiltersPrimary.virtual_reality_and_new_tech'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'drones_and_vehicles' && child.key == 'SearchFiltersPrimary.drones_and_vehicles'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'locations_and_spaces' && child.key == 'SearchFiltersPrimary.locations_and_spaces'){
      newChildren = newChildren.concat(child);
    }
  });


  const hasNoResult = listingsAreLoaded && resultsCount === 0;
  const classes = classNames(rootClassName || css.root, className);

  const toggleSecondaryFiltersOpenButtonClasses =
    isSecondaryFiltersOpen || selectedSecondaryFiltersCount > 0
      ? css.searchFiltersPanelOpen
      : css.searchFiltersPanelClosed;
  const toggleSecondaryFiltersOpenButton = toggleSecondaryFiltersOpen ? (
    <button
      className={toggleSecondaryFiltersOpenButtonClasses}
      onClick={() => {
        toggleSecondaryFiltersOpen(!isSecondaryFiltersOpen);
      }}
    >
      <FormattedMessage
        id="SearchFiltersPrimary.moreFiltersButton"
        values={{ count: selectedSecondaryFiltersCount }}
      />
    </button>
  ) : null;

  return (
    <div className={classes}>
      <div className={css.searchOptions}>
        {listingsAreLoaded ? (
          <div className={css.searchResultSummary}>
            <span className={css.resultsFound}>
              <FormattedMessage
                id="SearchFiltersPrimary.foundResults"
                values={{ count: resultsCount }}
              />
            </span>
          </div>
        ) : null}
        {sortByComponent}
      </div>

      <div className={css.filters}>
        {newChildren}
        {toggleSecondaryFiltersOpenButton}
      </div>

      {hasNoResult ? (
        <div className={css.noSearchResults}>
          <FormattedMessage id="SearchFiltersPrimary.noResults" />
        </div>
      ) : null}

      {searchInProgress ? (
        <div className={css.loadingResults}>
          <FormattedMessage id="SearchFiltersPrimary.loadingResults" />
        </div>
      ) : null}
    </div>
  );
};

SearchFiltersPrimaryComponent.defaultProps = {
  rootClassName: null,
  className: null,
  resultsCount: null,
  searchInProgress: false,
  isSecondaryFiltersOpen: false,
  toggleSecondaryFiltersOpen: null,
  selectedSecondaryFiltersCount: 0,
  sortByComponent: null,
};

SearchFiltersPrimaryComponent.propTypes = {
  rootClassName: string,
  className: string,
  listingsAreLoaded: bool.isRequired,
  resultsCount: number,
  searchInProgress: bool,
  isSecondaryFiltersOpen: bool,
  toggleSecondaryFiltersOpen: func,
  selectedSecondaryFiltersCount: number,
  sortByComponent: node,
};

const SearchFiltersPrimary = SearchFiltersPrimaryComponent;

export default SearchFiltersPrimary;
