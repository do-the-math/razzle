import { Theme, WithStyles } from '@material-ui/core';

import { AppRootState } from 'app/redux/reducers/RootReducer';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const styles = (theme: Theme) => {
  return {};
};

interface Props extends WithStyles<typeof styles>, RouteComponentProps<any> {}

const Todo: React.FC<Props> = (props) => {
  return <div>todo</div>;
};

const mapStateToProps = (state: AppRootState) => ({
  settings: state.layout.settings
});

const mapDispatchToProps = {};

export default Todo;
