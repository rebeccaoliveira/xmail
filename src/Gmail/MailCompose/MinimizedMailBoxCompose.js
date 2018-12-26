// Import React
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//apps Imports
import { composeOpen } from '../../store/actions/compose'
import { composeMaximize } from '../../store/actions/compose'
import { composeClose } from '../../store/actions/compose'

// Package Imports
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';

// components
import MailSendBar from '../Main/MailBody/MailSendBar';
// Icons
import Maximize from '@material-ui/icons/Maximize'
import Launch from '@material-ui/icons/Launch'
import Clear from '@material-ui/icons/Clear'

const styles = theme => ({
  container: {
    width: 260,
    position: 'absolute',
    height: 40,
    minHeight: 40,
    float: 'right',
    display: 'block',
    zIndex: 9999,
    bottom: 0,
    right: 85,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  gridBar: {
    backgroundColor: '#404040',
    width: 260,
    position: 'relative',
    height: 40,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: '#b2b2b2',
    width: 20,
    height: 20,
    margin: 5,
    padding: 2,
    alignSelf: 'center',
  },
  gridIcons: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  gridText: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  pTitle: {
    display: 'flex',
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignSelf: 'center',
    padding: 3,
  },
});

function MinimizedMailBoxCompose({classes, compose, composeOpen, composeMaximize, composeClose}) {
  return (
    <Paper className={classes.container} elevation={3}>
      <Grid container className={classes.gridBar}>
        <Grid item xs={6} className={classes.gridText}>
          <Typography className={classes.pTitle} variant="subtitle2">New Message</Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridIcons}>
          <div>
            <Maximize className={classNames(classes.icon)} fontSize="small" onClick={composeOpen} />
            <Launch className={classNames(classes.icon)} fontSize="small" onClick={composeMaximize} />
            <Clear className={classes.icon} fontSize="small" onClick={composeClose} />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MinimizedMailBoxCompose.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { compose } = state
  return ({
    compose,
  })
}

const mapDispatchToProps = {
  composeOpen,
  composeMaximize,
  composeClose
}

export default (
  connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(MinimizedMailBoxCompose)
  )
);
