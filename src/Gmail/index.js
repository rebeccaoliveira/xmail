import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

//Components
import Drawer from './Drawer'
import Header from './Header'
import Main from './Main'
import MailboxCompose from './MailCompose'
import MinimizedMailBoxCompose from './MailCompose/MinimizedMailBoxCompose'
import ModalMailBoxCompose from './MailCompose/ModalMailBoxCompose'

const styles = theme => ({
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      overflow: 'hidden',
      height: '100%',
      backgroundColor: '#fff',
    },
    '#root': {
      height: '100%',
    },
  },
  root: {
    height: '100%'
  },
  toolbar: theme.mixins.toolbar,
});

const Gmail = ({classes, compose}) => (
  <React.Fragment>
    <Grid className={classes.root} container>
      <Header />
      <Drawer />
      <Main />
    </Grid>

      <ModalMailBoxCompose />

  </React.Fragment>
)

Gmail.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { compose } = state
  return ({
    compose
  })
}

// connect stateToProps compose.state
export default withStyles(styles)(
  connect(mapStateToProps)(Gmail)
);
