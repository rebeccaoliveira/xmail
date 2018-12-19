// React Imports
import React from 'react'

// Package Imports
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import MaterialDrawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

//icons
import People from '@material-ui/icons/People'
import Chat from '@material-ui/icons/Chat'
import Phone from '@material-ui/icons/Phone'
import KeyBoard from '@material-ui/icons/KeyboardArrowUp'

// App Imports
import SimpleList from './lists'

const drawerWidth = 256;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    borderRight: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: 0.15,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: 0.15,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
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
  divOpen: {
    marginLeft: 0,
    display: 'flex',
  },
  divClose: {
    marginLeft: 0,
    display: 'none',
    '&:before': {
      position: 'fixed',
      display: 'flex',
      left: 10,
      marginRight: 20,
      content: '""',
      backgroundImage: `url(${KeyBoard})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '32px',
      display: 'block',
      height: '48px',
      minWidth: '56px',
    },
  },
  toolbar: theme.mixins.toolbar,
});

const Drawer = ({classes, drawer}) => (
  <MaterialDrawer
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, {
        [classes.drawerOpen]: drawer.open,
        [classes.drawerClose]: !drawer.open,
      }),
    }}
    open={drawer.open}
  >
    <div className={classes.toolbar} />
    <SimpleList />
    <Hidden smDown>
      <div
        className={classNames(classes.divBase, {
          [classes.divOpen]: drawer.open,
          [classes.divClose]: !drawer.open,
        })}
      >
        <People />
        <Chat style={{margin:20}}/>
        <Phone />
      </div>
    </Hidden>
  </MaterialDrawer>
)

const mapStateToProps = state => {
  const { drawer } = state
  return ({
    drawer
  })
}

export default withStyles(styles)(
  connect(mapStateToProps)(Drawer)
)
