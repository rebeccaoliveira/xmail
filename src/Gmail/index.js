import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'

//Components
import Drawer from './Drawer'
import Header from './Header'
import Main from './Main'


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

const Gmail = ({classes}) => (
  <React.Fragment>
    <Grid className={classes.root} container>
      <Header />
      <Drawer />
      <Main />
    </Grid>
  </React.Fragment>
)

Gmail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gmail);
