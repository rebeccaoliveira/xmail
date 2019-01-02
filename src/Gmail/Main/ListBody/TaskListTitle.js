// React Imports
import React from 'react'
import PropTypes from 'prop-types'
// Package Imports
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
// Components
import MenuTask from './MenuControler/MenuTask';
//icons
import arrowDown from '../../images/icons/keyboard_arrow_down.png'
import List from '@material-ui/icons/List';

const styles = theme => ({
  container: {
    justifyContent: 'space-between',
    height: 50,
    paddingLeft: 8,
    paddingTop: 2,
  },
  button: {
    margin: 5,
    padding: 0,
    paddingRight: 10,
    paddingLeft: 2,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  text: {
    textTransform: 'none',
    margin: 0,
    padding: 0,
    fontSize: 16,
  },
});

function TaskListTitle({classes, title}) {
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Button className={classes.button}>
        <img src={arrowDown} className={classes.extendedIcon} />
          <p className={classes.text}>{title}</p>
        </Button>
      </Grid>
      <Grid item>
        <MenuTask />
      </Grid>
    </Grid>
  );
}

TaskListTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskListTitle);
