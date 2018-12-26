// This file have all components of "Mail" part of the system
// Title / From -(Owner of email) / Action buttons / Mail Content for reply / Relpy Actions

// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { withStyles } from '@material-ui/core/styles'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

// App Imports
import MailBar from './MailBar'
import MailTitle from './MailTitle'
import MailOwnerBar from './MailOwnerBar'
import MailReply from './MailReply'
import MailReplyButton from './MailReplyButton'
import MailTextBody from './MailTextBody'
import MailBoxComposeMobile from '../../MailCompose/MailBoxComposeMobile'

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

function MailContent(props) {
  const { classes } = props;
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

MailContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailContent);
