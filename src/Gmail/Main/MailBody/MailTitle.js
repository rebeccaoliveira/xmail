// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'

// Icons
import Print from '@material-ui/icons/LocalPrintshop'
import OpenNew from '@material-ui/icons/OpenInNew'

const styles = theme => ({
  gridIcons: {
    display: 'flex',
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: 8,
  },
});

function MailTitle(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={7}>
        <h2 className={classes.text}>"We leap madly, desperately. Higher and higher..."</h2>
      </Grid>
      <Grid item xs={4} className={classes.gridIcons}>
        <IconButton className={classes.button} data-tooltip="Print" aria-label="print">
          <Print fontSize="default" />
        </IconButton>
        <IconButton className={classes.button} data-tooltip="New" aria-label="new">
          <OpenNew fontSize="default" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

MailTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailTitle);
