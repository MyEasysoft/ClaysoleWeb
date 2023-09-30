import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { isScrollingDisabled } from '../../ducks/ui.duck';
import { LayoutSideNavigation, Page, UserNav, H3 } from '../../components';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import FooterContainer from '../FooterContainer/FooterContainer';

import {
  shipping,
  shippingClear,
  resetPassword,
} from '../ShippingPage/ShippingPage.duck';
import { logout } from '../../ducks/auth.duck';
import css from './ShippingPage.module.css';

export const ShippingPageComponent = props => {
  const {
    shippingError,
    shippingInProgress,
    currentUser,
    onChange,
    onLogout,
    onSubmitShipping,
    onResetPassword,
    resetPasswordInProgress,
    resetPasswordError,
    accountSales,
    scrollingDisabled,
    intl,
  } = props;

  const handleShipping = values => {
    return onSubmitShipping(values).then(() => {
      onLogout();
    });
  };

  useEffect(() => {
    return onChange();
  }, []);

  const pageDetails = (
    <div className={css.details}>
      <FormattedMessage
        id={
          shippingError?.status == 409
            ? 'ShippingPage.error'
            : 'ShippingPage.details'
        }
        values={{ errorCause: shippingError?.message }}
      />
    </div>
  );

  const title = intl.formatMessage({ id: 'ShippingPage.title' });

  return (
    <Page title={title} scrollingDisabled={scrollingDisabled}>
      <LayoutSideNavigation
        topbar={
          <>
            <TopbarContainer
              currentPage="ShippingPage"
              desktopClassName={css.desktopTopbar}
              mobileClassName={css.mobileTopbar}
            />
            <UserNav currentPage="ShippingPage" />
          </>
        }
        sideNav={null}
        useAccountSettingsNav
        currentPage="ShippingPage"
        footer={<FooterContainer />}
      >
        <div className={css.content}>
          <H3 as="h1" className={css.title}>
            <FormattedMessage id="ShippingPage.heading" />
          </H3>
          {pageDetails}
        </div>
      </LayoutSideNavigation>
    </Page>
  );
};

ShippingPageComponent.defaultProps = {
  shippingError: null,
  currentUser: null,
  resetPasswordInProgress: false,
  resetPasswordError: null,
};

const { bool, func } = PropTypes;

ShippingPageComponent.propTypes = {
  shippingError: propTypes.error,
  shippingInProgress: bool.isRequired,
  currentUser: propTypes.currentUser,
  onChange: func.isRequired,
  onSubmitShipping: func.isRequired,
  accountSalesd: bool.isRequired,
  scrollingDisabled: bool.isRequired,
  resetPasswordInProgress: bool,
  resetPasswordError: propTypes.error,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  // Topbar needs user info.
  const {
    shippingError,
    shippingInProgress,
    accountSalesd,
    resetPasswordInProgress,
    resetPasswordError,
  } = state.ShippingPage;
  const { currentUser } = state.user;
  return {
    shippingError,
    shippingInProgress,
    currentUser,
    accountSalesd,
    scrollingDisabled: isScrollingDisabled(state),
    resetPasswordInProgress,
    resetPasswordError,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: () => dispatch(shippingClear()),
  onLogout: () => dispatch(logout()),
  onSubmitShipping: values => dispatch(shipping(values)),
  onResetPassword: values => dispatch(resetPassword(values)),
});

const ShippingPage = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
)(ShippingPageComponent);

export default ShippingPage;