import {
  Theme,
  WithStyles,
  createStyles,
  makeStyles,
  withStyles
} from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import { Typography } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      height: '100%'
      // backgroundColor: theme.palette.action.selected
    }
  });

interface Props extends WithStyles<typeof styles> {
  value?: any;
  labelId?: any;
}

const TodoItem: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState([1]);

  const { value, classes, labelId } = props;

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div className="todo-item-container">
      <div className="todo-item-time">
        <span>2 hr</span>
        {/* 2hr */}
      </div>
      <div className="card todo-item-main">
        <div className="checkbox">
          <Checkbox
            defaultChecked
            color="secondary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
        <div className="card1">
          <Typography>
            {value}
            <Typography variant="caption" display="block" gutterBottom>
              8:30 - 9.00
            </Typography>
          </Typography>
        </div>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(TodoItem);
