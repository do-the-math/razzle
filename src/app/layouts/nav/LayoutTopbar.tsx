import {
  Icon,
  IconButton,
  MenuItem,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { IAppLayoutSettings } from '../settings';
import { Link } from 'react-router-dom';
import { MatxMenu } from 'razzle';
import MatxSearchBox from 'razzle/components/MatxSearchBox';
import React from 'react';
import { RootState } from 'app/redux/reducers/RootReducer';
import { connect } from 'react-redux';
import { setLayoutSettings } from '../../redux/actions/LayoutActions';

const styles = (theme: Theme) => ({
  topbar: {
    '& .topbar-hold': {
      backgroundColor: theme.palette.primary.main,
      height: '64px',

      '&.fixed': {
        boxShadow: theme.shadows[8],
        height: '64px'
      }
    }
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 185
  }
});

interface Props extends WithStyles<typeof styles>, RouteComponentProps<any> {
  settings: IAppLayoutSettings;
  setLayoutSettings: any;
}

const LayoutTopbar: React.FC<Props> = (props) => {
  const { classes, settings, setLayoutSettings } = props;

  const updateSidebarMode = (mode: string) => {
    let layoutSetting = { ...settings };
    layoutSetting.leftSidebar.mode = mode;
    setLayoutSettings(layoutSetting);
  };

  const handleSidebarToggle = () => {
    let { mode } = settings.leftSidebar;

    updateSidebarMode(mode === 'mobile' ? 'close' : 'mobile');
  };

  return (
    <div className={`topbar ${classes.topbar} elevation-z8`}>
      <div className="topbar-hold fixed">
        <div className="flex justify-between items-center h-full">
          <div className="flex">
            <IconButton onClick={handleSidebarToggle}>
              <Icon>menu</Icon>
            </IconButton>

            <div className="hide-on-mobile">
              <IconButton>
                <Icon>mail_outline</Icon>
              </IconButton>

              <IconButton>
                <Icon>web_asset</Icon>
              </IconButton>

              <IconButton>
                <Icon>star_outline</Icon>
              </IconButton>
            </div>
          </div>
          <div className="flex items-center">
            <MatxSearchBox />

            <MatxMenu
              menuButton={
                <img
                  className="mx-2 align-middle circular-image-small cursor-pointer"
                  src="/assets/images/faces/2.jpg"
                  alt="user"
                />
              }
            >
              <MenuItem>
                <Link className={classes.menuItem} to="/">
                  <Icon> home </Icon>
                  <span className="pl-4"> Home </span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Icon> person </Icon>
                <span className="pl-4"> Profile </span>
              </MenuItem>
              <MenuItem className={classes.menuItem}>
                <Icon> settings </Icon>
                <span className="pl-4"> Settings </span>
              </MenuItem>
              <MenuItem className={classes.menuItem}>
                <Icon> power_settings_new </Icon>
                <span className="pl-4"> Logout </span>
              </MenuItem>
            </MatxMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  settings: state.layout.settings
});

const mapDispatchToProps = {
  setLayoutSettings
};

export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutTopbar))
);
