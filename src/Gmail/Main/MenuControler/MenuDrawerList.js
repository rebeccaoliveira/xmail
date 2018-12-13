import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';

import MailTitle from '../MailBody/MailTitle'
import MailOwnerBar from '../MailBody/MailOwnerBar'
import MailReply from '../MailBody/MailReply'



import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Arquive from '@material-ui/icons/MoveToInbox';
import Delete from '@material-ui/icons/Delete';
import Folder from '@material-ui/icons/Folder';
import Time from '@material-ui/icons/AccessTime';

const drawerWidth = '40%';

const styles = theme => ({
  list: {
    width: 0,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 0,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '30 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
});

class MenuDrawerList extends React.Component {
  state = {
    right: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
      this.setState({ open: false });
    };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    const sideList = (
      <div>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleDrawerClose}
        >
          <ChevronRightIcon />
        </IconButton>
        <Divider />
        <List>
          <MailTitle />
          <MailOwnerBar />
          <Divider />
          <MailReply />
        </List>
      </div>
    );

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleDrawerOpen}

        >
          <ListIcon />
        </IconButton>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
        </main>



        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerClose}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <ListIcon />
            </IconButton>
          </div>
          <Divider />
          {sideList}
        </Drawer>
      </div>
    );
  }
}

MenuDrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDrawerList);
