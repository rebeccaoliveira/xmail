// React Imports
import React from 'react'
import PropTypes from 'prop-types'


// Package Imports
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

import ListBody from './ListBody'
import MailBody from './MailBody'


const styles = theme => ({
  container: {
    maxWidth: 'calc(100% - 256px)',
    minWidth: 'calc(100% - 256px)',
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

const Main = ({classes}) => (
  <Grid className={classes.container}>
    <div className={classes.toolbar} />
    <MailBody />
  </Grid>
)

export default withStyles(styles)(Main)
