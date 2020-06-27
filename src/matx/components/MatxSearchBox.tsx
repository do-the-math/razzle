import { Icon, IconButton } from '@material-ui/core';
import React, { Component, useState } from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&::placeholder': {
      color: theme.palette.primary.contrastText
    }
  }
});

interface Props {
  classes: any;
}

const MatxSearchBox: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const { classes } = props;
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      {!open && (
        <IconButton onClick={toggle}>
          <Icon>search</Icon>
        </IconButton>
      )}

      {open && (
        <div
          className={`flex items-center h-full matx-search-box ${classes.root}`}
        >
          <input
            className={`px-4 search-box w-full ${classes.root}`}
            type="text"
            placeholder="Search here..."
            autoFocus
          />
          <IconButton onClick={toggle} className="align-middle mx-4">
            <Icon>close</Icon>
          </IconButton>
        </div>
      )}
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(MatxSearchBox);
