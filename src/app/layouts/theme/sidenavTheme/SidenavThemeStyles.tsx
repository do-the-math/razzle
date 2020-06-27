import { Theme, WithStyles, withStyles } from '@material-ui/core/styles';

import React from 'react';

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    '& .sidenav': {
      '& .sidenav__hold': {
        opacity: '1 !important',
        '&::after': {
          background: theme.palette.primary.main,
          opacity: 0.96
        },
        '& .nav-item:not(.badge)': {
          color: theme.palette.text.primary
        },
        '& .nav-item': {
          '&.active, &.active:hover': {
            background: theme.palette.secondary.main
          },
          '& .icon-text::after': {
            background: theme.palette.text.primary
          }
        }
      }
    }
  }
});

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode;
}

const SidenavThemeStyles: React.FC<Props> = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles, { withTheme: true })(SidenavThemeStyles);
