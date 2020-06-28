import {
  Button,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';

import { AppRootState } from 'app/redux/reducers/RootReducer';
import Breadcrumb from 'matx/components/Breadcrumb';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TodoItem from './TodoList';
import TodoList from './TodoList';
import { connect } from 'react-redux';

const styles = (theme: Theme) => {
  return {
    dateButton: {
      height: '40px',
      borderRadius: '10px'
    }
  };
};

interface Props extends WithStyles<typeof styles>, RouteComponentProps<any> {}

const Todos: React.FC<Props> = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className="todos">
        <div className={`todos__title`}>
          {/* <div className="tool-bar"></div> */}

          <div className="title">
            <Typography>5 </Typography>
          </div>
          <div className="action">
            <Button
              variant="contained"
              // color="default"
              className={`${classes.dateButton}`}
            >
              Add New
            </Button>
          </div>
        </div>
        <div className={`todos__content `}>
          <TodoList />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppRootState) => ({
  settings: state.layout.settings
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Todos));
