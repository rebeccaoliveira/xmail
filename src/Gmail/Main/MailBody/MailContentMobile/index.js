
// This file have all components of "Mail" part of the system
// Title / From -(Owner of email) / Action buttons / Mail Content for reply / Relpy Actions

// React Imports
import React from 'react'
import PropTypes from 'prop-types'
// Package Imports
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

// App Imports
import MailBar from '../MailBar'
import MailBoxComposeMobile from './MailBoxComposeMobile'

const styles = theme => ({
  root: {
    overflowY: 'auto',
    height: 'calc(100% - 113px)',
    maxHeight: 'calc(100% - 113px)',
    minHeight: 'calc(100% - 113px)',
    [theme.breakpoints.down('sm')]: {
      padding: 30,
    }
  },
})

function MailContentMobile({classes, compose}) {
  return (
    <>
      <MailBar />
      <Divider />
      <Grid container className={classes.root}>
        <MailBoxComposeMobile />
      </Grid>
    </>
  );
}

MailContentMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { compose } = state
  return ({
    compose,
  })
}

export default (
  connect(mapStateToProps)(
    withStyles(styles)(MailContentMobile)
  )
);
