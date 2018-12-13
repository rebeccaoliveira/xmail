// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden';

//icons
import DeleteIcon from '@material-ui/icons/Delete'
import DraftsIcon from '@material-ui/icons/Drafts'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import SendIcon from '@material-ui/icons/Send'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Time from '@material-ui/icons/AccessTime'
import LabelIcon from '@material-ui/icons/LabelImportant'
import DescriptionIcon from '@material-ui/icons/Description'
import Label from '@material-ui/icons/Label'

// Components Imports
import ComposeButton from './ComposeButton'

const styles = theme => ({
  //css main divs
  root: {
    height: 'calc(100% - 104px)',
    maxHeight: 'calc(100% - 104px)',
    minHeight: 'calc(100% - 104px)',
  },
  container: {
    maxWidth: 256,
    minWidth: 256,
    width: 256,
    marginTop: 80,
    height: 'calc(100% - 80px)',
    maxHeight: 'calc(100% - 80px)',
    minHeight: 'calc(100% - 80px)',
    overflowY: 'hidden',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      height: 0,
    },
    '&:hover': {
      overflow: 'auto',
    }
  },
  //css buttons
  button: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0 12px 12px 0',
    transition: 'margin .15s cubic-bezier(0.4,0.0,0.2,1),padding .15s cubic-bezier(0.4,0.0,0.2,1)',
    padding: '0 10px 0 26px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  buttonInbox: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0 12px 12px 0',
    transition: 'margin .15s cubic-bezier(0.4,0.0,0.2,1),padding .15s cubic-bezier(0.4,0.0,0.2,1)',
    padding: '0 10px 0 26px',
    backgroundColor: '#fce8e6',
    color: '#d93025',
    '&:hover': {
      cursor: 'pointer',
    },
  //css on specifc divs
  },
  divRoot: {
    padding: '0 8px 0 26px',
    alignItems: 'center',
    display: 'flex',
    height: '24px',
    position: 'relative'
  },
  divMenu: {
    maxWidth: 240,
    minWidth: 240,
    width: 240
  },
  divIcon: {
    borderColor: '#000',
    alignItems: 'center',
    display: 'flex',
    flexShrink: '0',
    height: '20px',
    justifyContent: 'flex-start',
    marginRight: '18px',
    width: '20px',
  },
  divCompose: {
    paddingLeft: 8,
    paddingTop: 0,
    position: 'fixed',
    zIndex: 1,
    backgroundColor: 'white',
    width: 256,
    height: 80,
  },
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Hidden smDown>
        <div className={classes.divCompose}>
          <ComposeButton />
        </div>
      </Hidden>
      <div className={classes.container}>
        <Hidden smDown>
          <div className={classes.divMenu}>
          <ListItem button className={classNames(classes.buttonInbox,classes.divRoot)}>
            <InboxIcon className={classes.divIcon}/>
            <div>
              <span>
                <a>Inbox</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <FavoriteIcon style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Favorites</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Time style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Snoozed</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <LabelIcon style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Important</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <SendIcon style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Sent</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <DescriptionIcon style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Drafts</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <DeleteIcon style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Delete</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: 'orange'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label One</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Two</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Three</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: 'blue'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Four</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Five</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Six</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: 'green'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Seven</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: 'purple'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Eight</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Nine</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: '#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Ten</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color: 'red'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Eleven</a>
              </span>
            </div>
          </ListItem>
          <ListItem button className={classNames(classes.button,classes.divRoot)}>
            <Label style={{color:'#767676'}} className={classes.divIcon}/>
            <div>
              <span>
                <a>Label Twelve</a>
              </span>
            </div>
          </ListItem>
          </div>
        </Hidden>
      </div>
    </div>
      );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleList);
