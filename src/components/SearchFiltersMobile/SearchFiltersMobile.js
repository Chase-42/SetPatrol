import React, { Component } from 'react';
import { bool, func, object, node, number, shape, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { withRouter } from 'react-router-dom';

import routeConfiguration from '../../routeConfiguration';
import { createResourceLocatorString } from '../../util/routes';
import { ModalInMobile, Button } from '../../components';
import css from './SearchFiltersMobile.css';

class SearchFiltersMobileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isFiltersOpenOnMobile: false, initialQueryParams: null };

    this.openFilters = this.openFilters.bind(this);
    this.cancelFilters = this.cancelFilters.bind(this);
    this.closeFilters = this.closeFilters.bind(this);
    this.resetAll = this.resetAll.bind(this);
  }

  // Open filters modal, set the initial parameters to current ones
  openFilters() {
    const { onOpenModal, urlQueryParams } = this.props;
    onOpenModal();
    this.setState({ isFiltersOpenOnMobile: true, initialQueryParams: urlQueryParams });
  }

  // Close the filters by clicking cancel, revert to the initial params
  cancelFilters() {
    const { history, onCloseModal } = this.props;

    history.push(
      createResourceLocatorString(
        'SearchPage',
        routeConfiguration(),
        {},
        this.state.initialQueryParams
      )
    );
    onCloseModal();
    this.setState({ isFiltersOpenOnMobile: false, initialQueryParams: null });
  }

  // Close the filter modal
  closeFilters() {
    this.props.onCloseModal();
    this.setState({ isFiltersOpenOnMobile: false });
  }

  // Reset all filter query parameters
  resetAll(e) {
    this.props.resetAll(e);

    // blur event target if event is passed
    if (e && e.currentTarget) {
      e.currentTarget.blur();
    }
  }

  render() {
    const {
      rootClassName,
      className,
      children,
      sortByComponent,
      listingsAreLoaded,
      resultsCount,
      searchInProgress,
      showAsModalMaxWidth,
      onMapIconClick,
      onManageDisableScrolling,
      selectedFiltersCount,
      intl,
    } = this.props;

    const search = window.location.search;
   const params = new URLSearchParams(search);
   const urlCategory = params.get('pub_category');
   let newChildren = [];

  const renObjData = this.props.children.map(function(child, idx) {
    if(child.key == 'SearchFiltersMobile.dates'){
      newChildren = newChildren.concat(child);
    }
    if(child.key == 'SearchFiltersMobile.price'){
      newChildren = newChildren.concat(child);
    }
    if(child.key == 'SearchFiltersMobile.keyword'){
      newChildren = newChildren.concat(child);
    }
    if(child.key == 'SearchFiltersMobile.category'){
      newChildren = newChildren.concat(child);
    }
      console.log(child.key);
    if(urlCategory == 'cinema_cameras' && child.key == 'SearchFiltersMobile.cinema_camera_brands'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'cinema_lenses' && child.key == 'SearchFiltersMobile.cinema_lenses'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'still_hybrid_cameras' && child.key == 'SearchFiltersMobile.still_hybrid_cameras'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'still_lenses' && child.key == 'SearchFiltersMobile.still_lenses'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'camera_accessories' && child.key == 'SearchFiltersMobile.camera_accessories'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'lighting_electric' && child.key == 'SearchFiltersMobile.lighting_electric'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'audio_equipment' && child.key == 'SearchFiltersMobile.audio_equipment'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'camera_supports' && child.key == 'SearchFiltersMobile.camera_supports'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'monitors_evfs' && child.key == 'SearchFiltersMobile.monitors_evfs'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'grip' && child.key == 'SearchFiltersMobile.grip'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'dit_media_management' && child.key == 'SearchFiltersMobile.dit_media_management'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'media' && child.key == 'SearchFiltersMobile.media'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'virtual_reality_and_new_tech' && child.key == 'SearchFiltersMobile.virtual_reality_and_new_tech'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'drones_and_vehicles' && child.key == 'SearchFiltersMobile.drones_and_vehicles'){
      newChildren = newChildren.concat(child);
    }
    if(urlCategory == 'locations_and_spaces' && child.key == 'SearchFiltersMobile.locations_and_spaces'){
      newChildren = newChildren.concat(child);
    }
  });

    const classes = classNames(rootClassName || css.root, className);

    const resultsFound = (
      <FormattedMessage id="SearchFiltersMobile.foundResults" values={{ count: resultsCount }} />
    );
    const noResults = <FormattedMessage id="SearchFiltersMobile.noResults" />;
    const loadingResults = <FormattedMessage id="SearchFiltersMobile.loadingResults" />;
    const filtersHeading = intl.formatMessage({ id: 'SearchFiltersMobile.heading' });
    const modalCloseButtonMessage = intl.formatMessage({ id: 'SearchFiltersMobile.cancel' });

    const showListingsLabel = intl.formatMessage(
      { id: 'SearchFiltersMobile.showListings' },
      { count: resultsCount }
    );

    const filtersButtonClasses =
      selectedFiltersCount > 0 ? css.filtersButtonSelected : css.filtersButton;

    return (
      <div className={classes}>
        <div className={css.searchResultSummary}>
          {listingsAreLoaded && resultsCount > 0 ? resultsFound : null}
          {listingsAreLoaded && resultsCount === 0 ? noResults : null}
          {searchInProgress ? loadingResults : null}
        </div>
        <div className={css.buttons}>
          <Button rootClassName={filtersButtonClasses} onClick={this.openFilters}>
            <FormattedMessage
              id="SearchFiltersMobile.filtersButtonLabel"
              className={css.mapIconText}
            />
          </Button>
          {sortByComponent}
          <div className={css.mapIcon} onClick={onMapIconClick}>
            <FormattedMessage id="SearchFiltersMobile.openMapView" className={css.mapIconText} />
          </div>
        </div>
        <ModalInMobile
          id="SearchFiltersMobile.filters"
          isModalOpenOnMobile={this.state.isFiltersOpenOnMobile}
          onClose={this.cancelFilters}
          showAsModalMaxWidth={showAsModalMaxWidth}
          onManageDisableScrolling={onManageDisableScrolling}
          containerClassName={css.modalContainer}
          closeButtonMessage={modalCloseButtonMessage}
        >
          <div className={css.modalHeadingWrapper}>
            <span className={css.modalHeading}>{filtersHeading}</span>
            <button className={css.resetAllButton} onClick={e => this.resetAll(e)}>
              <FormattedMessage id={'SearchFiltersMobile.resetAll'} />
            </button>
          </div>
          {this.state.isFiltersOpenOnMobile ? (
            <div className={css.filtersWrapper}>{newChildren}</div>
          ) : null}

          <div className={css.showListingsContainer}>
            <Button className={css.showListingsButton} onClick={this.closeFilters}>
              {showListingsLabel}
            </Button>
          </div>
        </ModalInMobile>
      </div>
    );
  }
}

SearchFiltersMobileComponent.defaultProps = {
  rootClassName: null,
  className: null,
  sortByComponent: null,
  resultsCount: null,
  searchInProgress: false,
  selectedFiltersCount: 0,
};

SearchFiltersMobileComponent.propTypes = {
  rootClassName: string,
  className: string,
  urlQueryParams: object.isRequired,
  sortByComponent: node,
  listingsAreLoaded: bool.isRequired,
  resultsCount: number,
  searchInProgress: bool,
  showAsModalMaxWidth: number.isRequired,
  onMapIconClick: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  onOpenModal: func.isRequired,
  onCloseModal: func.isRequired,
  resetAll: func.isRequired,
  selectedFiltersCount: number,

  // from injectIntl
  intl: intlShape.isRequired,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

const SearchFiltersMobile = injectIntl(withRouter(SearchFiltersMobileComponent));

export default SearchFiltersMobile;
