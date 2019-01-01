// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { connect } from 'react-redux'
// import { Link, Route } from "react-router-dom"
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
    color: '#767676',
  },
  divCompose: {
    paddingLeft: 8,
    paddingTop: 0,
    position: 'fixed',
    zIndex: 1,
    width: 256,
    height: 80,
    [theme.breakpoints.down('sm')]: {
      zIndex: 1,

    },
  },
});


const menuItems = [
  {icon: InboxIcon, text: "Inbox"},
  {icon: FavoriteIcon, text: "Favorites"},
  {icon: Time, text: "Snoozed"},
  {icon: LabelIcon, text: "Important"},
  {icon: SendIcon, text: "Sent"},
  {icon: DescriptionIcon, text: "Drafts"},
  {icon: DeleteIcon, text: "Delete"},
  {icon: Label, text: "Label One"},
]

function SimpleList({classes, drawer}) {
  return (
    <>
      <div className={classes.root}>

        <Hidden smDown>
          <div className={classes.divCompose}>
            <ComposeButton />
          </div>
        </Hidden>
        <div className={classes.container}>
          <div className={classes.divMenu}>
          {menuItems.map((item, index) => (
            <ListItem key={index} button className={classNames(classes.button,classes.divRoot)}>
              <item.icon className={classes.divIcon}/>
                {drawer.open ? item.text : ''}
            </ListItem>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { drawer } = state
  return ({
    drawer
  })
}

export default withStyles(styles)(
  connect(mapStateToProps)(SimpleList)
)
