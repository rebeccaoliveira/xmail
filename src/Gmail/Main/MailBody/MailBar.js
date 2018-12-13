// Import React
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

// Icons
import Arquive from '@material-ui/icons/MoveToInbox'
import Delete from '@material-ui/icons/Delete'
import Drafts from '@material-ui/icons/Drafts'
import Folder from '@material-ui/icons/Folder'
import Label from '@material-ui/icons/Label'
import RefreshIcon from '@material-ui/icons/Refresh'
import Report from '@material-ui/icons/Report'
import Time from '@material-ui/icons/AccessTime'
import ArrowBack from '@material-ui/icons/ArrowBack'
import KeyboardLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardRight from '@material-ui/icons/KeyboardArrowRight'
import Settings from '@material-ui/icons/Settings'

import MenuTask from '../MenuControler/MenuTask'


const styles = theme => ({
  container: {
    flexGrow: 1,
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
  },

  button: {
    cursor: 'pointer',
  },
})

class MailBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid container>
          <Grid item className={classes.container}>
            <IconButton className={classes.button} data-tooltip="Back" aria-label="back">
              <ArrowBack fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="File" aria-label="file">
              <Arquive fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="Report" aria-label="report">
              <Report fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="Delete" aria-label="delete">
              <Delete fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="Draft" aria-label="draft">
              <Drafts fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="Time" aria-label="time">
              <Time fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="Move To" aria-label="move">
              <Folder fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="Tag" aria-label="tag">
              <Label fontSize="default" />
            </IconButton>
            <MenuTask />
          </Grid>
          <Grid item>
            <IconButton className={classes.button} data-tooltip="key" aria-label="key">
              <KeyboardLeft fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="key" aria-label="key">
              <KeyboardRight fontSize="default" />
            </IconButton>
            <IconButton className={classes.button} data-tooltip="key" aria-label="key">
              <Settings fontSize="default" />
            </IconButton>
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(MailBar);
