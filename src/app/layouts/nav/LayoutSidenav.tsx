import { Icon, Switch, Theme, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Brand from '../shared/brand/Brand';
import { IAppLayoutSettings } from '../settings';
import MatxVerticalNav from 'razzle/components/MatxVerticalNav/MatxVerticalNav';
import { RootState } from 'app/redux/reducers/RootReducer';
import Scrollbar from 'react-perfect-scrollbar';
import SidenavThemeStyles from '../theme/sidenavTheme/SidenavThemeStyles';
import { connect } from 'react-redux';
import { navigations } from '../Navigations';
import { setLayoutSettings } from 'app/redux/actions/LayoutActions';

interface Props {
  settings: IAppLayoutSettings;
  setLayoutSettings: any;
}

const LayoutSidenav: React.FC<Props> = (props) => {
  const { settings, setLayoutSettings } = props;
  const sidebarTheme: Theme = settings.themes[settings.leftSidebar.theme];

  const updateSidebarMode = (mode: string) => {
    let layoutSetting = { ...settings };
    layoutSetting.leftSidebar.mode = mode;
    console.log(layoutSetting);
    setLayoutSettings(layoutSetting);
  };

  const handleSidenavToggle = () => {
    let { mode } = settings.leftSidebar;
    console.log(mode);
    updateSidebarMode(mode === 'mobile' ? 'close' : 'mobile');
  };

  const renderUser = () => {
    let user = {
      photoURL: '/assets/images/faces/2.jpg',
      displayName: 'aman'
    };
    return (
      <div className="sidenav__user">
        <div className="username-photo">
          <img src={user.photoURL} alt="user" />
        </div>
        <div className="ml-4">
          <span className="username">{user.displayName}</span>
          <div className="user__menu">
            {/* <MatxMenu
              menuButton={
                <Tooltip title="Settings">
                  <IconButtonWhite
                    aria-label="Delete"
                    className=""
                    size="small"
                  >
                    <IconSmall> settings </IconSmall>
                  </IconButtonWhite>
                </Tooltip>
              }
            >
              <MenuItem className="flex items-center">
                <Icon> home </Icon>
                <span className="pl-4"> Home </span>
              </MenuItem>
              <MenuItem className="flex items-center">
                <Icon> settings </Icon>
                <span className="pl-4"> Account Setting </span>
              </MenuItem>
            </MatxMenu>

            <Tooltip title="Profile">
              <IconButtonWhite aria-label="Delete" className="" size="small">
                <IconSmall>person</IconSmall>
              </IconButtonWhite>
            </Tooltip>
            <Tooltip title="Sign out">
              <IconButtonWhite
                aria-label="Delete"
                className=""
                size="small"
                // onClick={this.handleSignOut}
              >
                <IconSmall>exit_to_app</IconSmall>
              </IconButtonWhite>
            </Tooltip>
           */}
          </div>
        </div>
      </div>
    );
  };

  const renderOverlay = () => (
    <div onClick={handleSidenavToggle} className="sidenav__overlay" />
  );

  return (
    <ThemeProvider theme={sidebarTheme}>
      <SidenavThemeStyles>
        <div className="sidenav">
          <div
            className="sidenav__hold"
            style={{
              backgroundImage: `url(${settings.leftSidebar.bgImgURL})`
            }}
          >
            {settings.leftSidebar.show && (
              <React.Fragment>
                <Brand onLogoClick={handleSidenavToggle}></Brand>

                <React.Fragment>
                  <Scrollbar
                    options={{ suppressScrollX: true }}
                    className="scrollable ps position-relative"
                  >
                    {renderUser()}
                    <MatxVerticalNav navigations={navigations} />
                  </Scrollbar>
                  {renderOverlay()}
                </React.Fragment>
              </React.Fragment>
            )}
          </div>
        </div>
      </SidenavThemeStyles>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    settings: state.layout.settings
  };
};
const mapDispatchToProps = {
  setLayoutSettings
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutSidenav);
