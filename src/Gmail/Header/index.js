// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

//icons
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';

// Components Imports
import SearchBar from './SearchBar'

//apps Imports
import { drawerToggle } from '../../store/actions/drawer'

//Images
import logoGmail from '../images/gmail_logo.png'
import avatar from '../images/avatar.jpg'

const styles = theme => ({
  flex: {
    maxWidth: 160,
    minWidth: 160,
    width: 160,
    display: 'flex',
    alignItems: 'center',
    marginRight: 32,
    marginLeft: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'white',
    color: 'black',
    'border-bottom': '0.5px solid rgb(229, 229, 229)',
  },
  menuButton: {
    marginLeft: 4,
    marginRight: 4,
    border: 0,
    padding:12,
  },
  menuLogo: {
    width: '109px',
    height: '40px',
  },
  avatar: {
    margin: '0px 10px 0px 10px',
  },
  bigAvatar: {
    width: 32,
    height: 32,
  },
  icons: {
    margin: '0px 15px',
    color: '#767676',
  },
  iconsLeft: {
    marginLeft: 10,
  },
  divToolbar: {
    padding: 8,
  },
});

const Header = ({classes, drawerToggle}) => (
  <AppBar className={classes.appBar} elevation={0}>
    <Toolbar className={classes.divToolbar}>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={drawerToggle}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.flex}>
        <img className={classes.menuLogo} src={logoGmail} />
      </Typography>
      <SearchBar />
      <AppsIcon className={classes.icons} />
      <NotificationsIcon className={classes.icons} />
      <Avatar
        alt="Rebecca Oliveira"
        src={avatar}
        className={classNames(classes.avatar, classes.bigAvatar, classes.iconsLeft)}
      />
    </Toolbar>
  </AppBar>
);

const mapDispatchToProps = {
  drawerToggle
}

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(Header)
)
