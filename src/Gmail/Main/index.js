// React Imports
import React from 'react'
import PropTypes from 'prop-types'


// Package Imports
import { connect } from 'react-redux'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

import ListBody from './ListBody'
import MailContentMobile from './MailBody/MailContentMobile'


const styles = theme => ({
  containerDrawerOpen: {
    maxWidth: 'calc(100% - 256px)',
    minWidth: 'calc(100% - 256px)',
  },
  containerDrawerClosed: {
    maxWidth: 'calc(100% - 73px)',
    minWidth: 'calc(100% - 73px)',
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      minWidth: '100%',
      height: '100%',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('sm')]: {
      minHeight: 0,
    },
  }
})

const Main = ({classes, drawer}) => {
  return (
    <Grid
      className={classNames(classes.container, {
        [classes.containerDrawerOpen]: drawer.open,
        [classes.containerDrawerClosed]: !drawer.open,
      })}
      open={drawer.open}
      >
      <div className={classes.toolbar} />
      <MailContentMobile />
    </Grid>
  )
}

const mapStateToProps = state => {
  const { drawer } = state
  return ({
    drawer
  })
}

export default withStyles(styles)(
  connect(mapStateToProps)(Main)
)
