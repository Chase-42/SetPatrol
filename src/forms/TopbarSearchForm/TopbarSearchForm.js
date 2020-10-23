import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as FinalForm, Field } from 'react-final-form';
import { intlShape, injectIntl } from '../../util/reactIntl';
import classNames from 'classnames';
import { Form, LocationAutocompleteInput } from '../../components';
import IconHourGlass from '../../components/LocationAutocompleteInput/IconHourGlass';

import css from './TopbarSearchForm.css';

const identity = v => v;

class TopbarSearchFormComponent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.searchInput = React.createRef();
  }
  onChange(location) {
    if (location.selectedPlace) {
      // Note that we use `onSubmit` instead of the conventional
      // `handleSubmit` prop for submitting. We want to autosubmit
      // when a place is selected, and don't require any extra
      // validations for the form.
      this.props.onSubmit({ location });
      // blur search input to hide software keyboard
      if (this.searchInput) {
        this.searchInput.blur();
      }
    }
  }
  onSubmit(values) {
    this.props.onSubmit({ keywords: values.keywords });

    // blur search input to hide software keyboard
    if (this.searchInput.current) {
      this.searchInput.current.blur();
    }
  }

  render() {
    return (
      <div className={css.searchContainer}>
        <FinalForm
          {...this.props}
          onSubmit={this.onSubmit}
          render={formRenderProps => {
            const { rootClassName, className, intl, isMobile, handleSubmit } = formRenderProps;
            const classes = classNames(rootClassName, className);

            return (
              <Form className={classes} onSubmit={handleSubmit} style={{ borderRight: 'none' }}>
                <Field
                  name="keywords"
                  render={({ input, meta }) => {
                    return (
                      <div className={css.searchDiv}>
                        <div className={css.icon}>
                          <IconHourGlass />
                        </div>
                        <input
                          className={isMobile ? css.mobileInput : css.desktopInput}
                          {...input}
                          id="keyword-search"
                          ref={this.searchInput}
                          type="text"
                          placeholder={intl.formatMessage({
                            id: 'TopbarSearchFormKeyword.placeholder',
                          })}
                          autoComplete="off"
                        />
                      </div>
                    );
                  }}
                />
              </Form>
            );
          }}
        />
        <FinalForm
          {...this.props}
          render={formRenderProps => {
            const { rootClassName, className, desktopInputRoot, intl, isMobile } = formRenderProps;

            const classes = classNames(rootClassName, className);
            const desktopInputRootClass = desktopInputRoot || css.desktopInputRoot;

            // Allow form submit only when the place has changed
            const preventFormSubmit = e => e.preventDefault();

            return (
              <Form className={classes} onSubmit={preventFormSubmit}>
                <Field
                  name="location"
                  format={identity}
                  render={({ input, meta }) => {
                    const { onChange, ...restInput } = input;

                    // Merge the standard onChange function with custom behaviur. A better solution would
                    // be to use the FormSpy component from Final Form and pass this.onChange to the
                    // onChange prop but that breaks due to insufficient subscription handling.
                    // See: https://github.com/final-form/react-final-form/issues/159
                    const searchOnChange = value => {
                      onChange(value);
                      this.onChange(value);
                    };

                    const searchInput = { ...restInput, onChange: searchOnChange };
                    return (
                      <LocationAutocompleteInput
                        className={isMobile ? css.mobileInputRoot : desktopInputRootClass}
                        iconClassName={isMobile ? css.mobileIcon : css.desktopIcon}
                        inputClassName={isMobile ? css.mobileInput : css.desktopInput}
                        predictionsClassName={
                          isMobile ? css.mobilePredictions : css.desktopPredictions
                        }
                        predictionsAttributionClassName={
                          isMobile ? css.mobilePredictionsAttribution : null
                        }
                        placeholder={intl.formatMessage({
                          id: 'TopbarSearchFormLocation.placeholder',
                        })}
                        closeOnBlur={!isMobile}
                        inputRef={node => {
                          this.searchInput = node;
                        }}
                        input={searchInput}
                        meta={meta}
                      />
                    );
                  }}
                />
              </Form>
            );
          }}
        />
      </div>
    );
  }
}

const { func, string, bool } = PropTypes;

TopbarSearchFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  desktopInputRoot: null,
  isMobile: false,
};

TopbarSearchFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  desktopInputRoot: string,
  onSubmit: func.isRequired,
  isMobile: bool,

  // from injectIntl
  intl: intlShape.isRequired,
};

const TopbarSearchForm = injectIntl(TopbarSearchFormComponent);

export default TopbarSearchForm;
