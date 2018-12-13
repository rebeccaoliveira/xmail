// React Imports
import React from 'react'

// Package Imports
import { withStyles } from '@material-ui/core/styles'
import MaterialDrawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

//icons
import People from '@material-ui/icons/People'
import Chat from '@material-ui/icons/Chat'
import Phone from '@material-ui/icons/Phone'

// App Imports
import SimpleList from './lists'

const drawerWidth = 256;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    borderRight: 'none',
  },
  toolbar: theme.mixins.toolbar,
  divBase: {
    left: 0,
    bottom: 0,
    paddingTop: 0,
    position: 'fixed',
    zIndex: 1,
    backgroundColor: 'white',
    width: 256,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    color: '#767676',
    alignItems: 'center',
  },
});

const Drawer = ({classes}) => (
  <MaterialDrawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.toolbar} />
    <SimpleList />
    <Hidden smDown>
      <div className={classes.divBase}>
        <People />
        <Chat style={{margin:20}}/>
        <Phone />
      </div>
    </Hidden>
  </MaterialDrawer>
)

export default withStyles(styles)(Drawer)
