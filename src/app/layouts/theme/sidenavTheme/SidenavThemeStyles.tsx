import { Theme, WithStyles, withStyles } from '@material-ui/core/styles';

import React from 'react';

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: 'white',
    '& .sidenav': {
      '& .sidenav__hold': {
        opacity: '1 !important',
        '&::after': {
          background: theme.palette.primary.main,
          opacity: 0.96
        }
      }
    }
  }
});

interface Props extends WithStyles<typeof styles> {
  children: any;
}

const SidenavThemeStyles: React.FC<Props> = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles, { withTheme: true })(SidenavThemeStyles);
