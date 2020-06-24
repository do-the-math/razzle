import React, { useContext } from 'react';
import {
  Theme,
  ThemeProvider,
  WithStyles,
  withStyles
} from '@material-ui/core';

import Analytics from 'app/views/dashboard/Analytics';
import { IAppLayoutSettings } from './settings';
import LayoutSidenav from './nav/LayoutSidenav';
import LayoutTopbar from './nav/LayoutTopbar';
import MatxSuspense from 'razzle/components/MatxSuspense/MatxSuspense';
import { RootState } from 'app/redux/reducers/RootReducer';
import Scrollbar from 'react-perfect-scrollbar';
import clx from 'classnames';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from '../RootRoutes';

const styles = (theme: Theme) => {
  return {
    layout: {
      backgroundColor: theme.palette.background.default
    }
  };
};

interface Props extends WithStyles<typeof styles> {
  settings: IAppLayoutSettings;
  theme: Theme;
}

const AppLayout: React.FC<Props> = (props) => {
  let { settings, classes, theme } = props;

  const topbarTheme: Theme = settings.themes[settings.topbar.theme];

  let mainLayoutClasses = clx({
    [classes.layout]: true,
    [`${settings.activeLayout} sidenav-${settings.leftSidebar.mode} theme-${theme.palette.type} flex`]: true
  });

  return (
    <div className={mainLayoutClasses}>
      {settings.leftSidebar.show && <LayoutSidenav />}

      <div className="content-wrap position-relative">
        <Scrollbar className="scrollable-content">
          <ThemeProvider theme={topbarTheme}>
            <LayoutTopbar />
          </ThemeProvider>
          <div className="content">
            {/* <Analytics /> */}
            content
            {/* {renderRoutes(routes)} */}
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    settings: state.layout.settings
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(AppLayout));
