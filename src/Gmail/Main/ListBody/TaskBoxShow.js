// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import List from '@material-ui/core/List';
//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Arquive from '@material-ui/icons/MoveToInbox';
import Delete from '@material-ui/icons/Delete';
import Folder from '@material-ui/icons/Folder';
import Time from '@material-ui/icons/AccessTime';
import LabelIcon from '@material-ui/icons/LabelImportant'
import StarIcon from '@material-ui/icons/StarBorder'
// Components
import TaskListImportant from './TaskListImportant'
import MailContent from '../MailBody/MailReply'

const styles = theme => ({
  root: {
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  td: {
    padding: 0,
    width: 20,
    height: 20,
  },
  button: {
    margin: 0,
    padding: 7,
  },
  checkbox: {
    padding: 4,
  }
});


class TaskBoxShow extends React.Component{
  state = {
    right: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
      this.setState({ open: false });
    };

  render(){
    const { classes, theme } = this.props;
    const { open } = this.state;

  return (
    <>
      <Grid container className={classes.root}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleDrawerClose}
        >
          <ChevronRightIcon />
        </IconButton>
        <IconButton>
          <Arquive />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
        <IconButton>
          <Folder />
        </IconButton>
        <IconButton>
          <Time />
        </IconButton>
        <Divider />
        <List>
          <MailReply />
        </List>
      </Grid>
      <Grid container>
        <Grid item>
        </Grid>
      </Grid>
    </>
  );
}
}

TaskBoxShow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskBoxShow);
