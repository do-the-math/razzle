import { Theme, WithStyles, withStyles } from '@material-ui/core';

import { AppRootState } from 'app/redux/reducers/RootReducer';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = (theme: Theme) => {
  return {};
};

interface Props extends WithStyles<typeof styles>, RouteComponentProps<any> {}

const Todos: React.FC<Props> = (props) => {
  return <React.Fragment>sdf</React.Fragment>;
};

const mapStateToProps = (state: AppRootState) => ({
  settings: state.layout.settings
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Todos));
