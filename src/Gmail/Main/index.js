// React Imports
import React from 'react'
import PropTypes from 'prop-types'

//apps Imports
import { isMobile } from '../../store/actions'

// Package Imports
import { connect } from 'react-redux'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { Route } from "react-router-dom"

//Components
import ListBody from './ListBody'
import MailBody from './MailBody'
import MailContentMobile from './MailBody/MailContentMobile'
import {
  withRouter
} from 'react-router-dom'
import { BrowserRouter as Router} from "react-router-dom"


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

// {(device === "mobile" && winState === "open") ? <MailContentMobile /> : <ListBody />}

const Main = ({classes, drawer, compose, history}) => {
  const { device, winState } = compose
  return (
    <Router>
      <Grid
        className={classNames(classes.container, {
          [classes.containerDrawerOpen]: drawer.open,
          [classes.containerDrawerClosed]: !drawer.open,
        })}
        open={drawer.open}
        >
        <div className={classes.toolbar} />
        <Route exact path='/' render={(props) => {
            return (device === "mobile" && winState === "open") ? <MailContentMobile /> : <ListBody />
          }}
        />

        <Route path='/mails/:id' component={MailBody} />
      </Grid>
    </Router>
  )
}

const mapStateToProps = state => {
  const { drawer, compose } = state
  return ({
    drawer,
    compose
  })
}

const mapDispatchToProps = {
  isMobile,
}

export default withStyles(styles)(
  connect(mapStateToProps)(withRouter(Main))
)
