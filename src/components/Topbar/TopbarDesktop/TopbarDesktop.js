import React, { useState, useEffect } from 'react';
import { bool, func, object, number, string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage, intlShape } from '../../../util/reactIntl';
import { ACCOUNT_SETTINGS_PAGES } from '../../../routing/routeConfiguration';
import { propTypes } from '../../../util/types';
import {
  Avatar,
  InlineTextButton,
  LinkedLogo,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  NamedLink,
} from '../../../components';

import TopbarSearchForm from '../TopbarSearchForm/TopbarSearchForm';

import css from './TopbarDesktop.module.css';
import csss from '../../../components/LandingPageMain/LandingPageMain.module.css';
import bg from '../../../assets/pic2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const TopbarDesktop = props => {
  const {
    className,
    appConfig,
    currentUser,
    currentPage,
    rootClassName,
    currentUserHasListings,
    notificationCount,
    intl,
    isAuthenticated,
    onLogout,
    onSearchSubmit,
    initialSearchFormValues,
  } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const marketplaceName = appConfig.marketplaceName;
  const authenticatedOnClientSide = mounted && isAuthenticated;
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted;

  const classes = classNames(rootClassName || css.root, className);

  const search = (
    <TopbarSearchForm
      className={css.searchLink}
      desktopInputRoot={css.topbarSearchWithLeftPadding}
      onSubmit={onSearchSubmit}
      initialValues={initialSearchFormValues}
      appConfig={appConfig}
    />
  );

  const notificationDot = notificationCount > 0 ? <div className={css.notificationDot} /> : null;

  const inboxLink = authenticatedOnClientSide ? (
    <NamedLink
      className={css.inboxLink}
      name="InboxPage"
      params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
    >
      <span className={css.inbox}>
        <FormattedMessage id="TopbarDesktop.inbox" />
        {notificationDot}
      </span>
    </NamedLink>
  ) : null;

  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  const profileMenu = authenticatedOnClientSide ? (
    <Menu>
      <MenuLabel className={css.profileMenuLabel} isOpenClassName={css.profileMenuIsOpen}>
        <Avatar className={css.avatar} user={currentUser} disableProfileLink />
      </MenuLabel>
      <MenuContent className={css.profileMenuContent}>
        <MenuItem key="ManageListingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('ManageListingsPage'))}
            name="ManageListingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.yourListingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="ProfileSettingsPage">
          <NamedLink
            className={classNames(css.profileSettingsLink, currentPageClass('ProfileSettingsPage'))}
            name="ProfileSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.profileSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="AccountSettingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('AccountSettingsPage'))}
            name="AccountSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.accountSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="logout">
          <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.logout" />
          </InlineTextButton>
        </MenuItem>
      </MenuContent>
    </Menu>
  ) : null;

  const signupLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="SignupPage" className={css.signupLink}>
      <span className={css.signup}>
        <FormattedMessage id="TopbarDesktop.signup" />
      </span>
    </NamedLink>
  );

  const loginLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LoginPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="TopbarDesktop.login" />
      </span>
    </NamedLink>
  );

  const homeLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LandingPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="Home" />
      </span>
    </NamedLink>
  );
  const aboutLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LandingPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="About" />
      </span>
    </NamedLink>
  );
  const GalleryLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LandingPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="Gallery" />
      </span>
    </NamedLink>
  );
  const servicesLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LandingPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="Services" />
      </span>
    </NamedLink>
  );
  const contactLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LandingPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="Contact" />
      </span>
    </NamedLink>
  );

  return (

    
      <div>
        <section>
          <nav className={csss.navMain +" " +classes}>
            <div>
                <LinkedLogo
                  format="desktop"
                  alt={intl.formatMessage({ id: 'TopbarDesktop.logo' }, { marketplaceName })}
                />
            </div>
            <div className="links">
             
              {homeLink}
              
              {aboutLink}
              
              {GalleryLink}
              
              {signupLink}
              
              {loginLink}
             
            </div>
            <div className={csss.padsmall}>
              <FontAwesomeIcon className={csss.icon} icon={faMagnifyingGlass} />
              <FontAwesomeIcon className={csss.icon} icon={faBell} />
              <FontAwesomeIcon className={csss.icon} icon={faSignIn} />
             
          </div>
          </nav>

        
          <section className={csss.floatingButtonstyle}>
            <div className={csss.floatingButton}>
              <img className={csss.captionimg} src={bg}/>
            </div>
          </section>
         
         
        </section>

      </div>
     
    
    
   
  );
};

TopbarDesktop.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  currentPage: null,
  notificationCount: 0,
  initialSearchFormValues: {},
  appConfig: null,
};

TopbarDesktop.propTypes = {
  rootClassName: string,
  className: string,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentPage: string,
  isAuthenticated: bool.isRequired,
  onLogout: func.isRequired,
  notificationCount: number,
  onSearchSubmit: func.isRequired,
  initialSearchFormValues: object,
  intl: intlShape.isRequired,
  appConfig: object,
};

export default TopbarDesktop;
