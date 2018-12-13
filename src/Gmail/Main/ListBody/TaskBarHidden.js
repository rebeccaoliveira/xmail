// Import React
import React from 'react'
// Package Imports
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import classNames from 'classnames'
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
import arrow from '../images/icons/arrow_drop.png'
//Components
import MenuTask from './MenuTask'

const styles = theme => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      boxShadow: '0 0px 0px rgba(0,0,0,0.1)',
      border: '0px solid transparent',
      color: '#333',
      backgroundColor: '#e0e0e0'
    },
    '&:before': {
      content: '""',
      display: 'block',
      opacity: '0',
      transitionDuration: '.15s',
      transitionTimingFunction: 'cubic-bezier(0.4,0.0,0.2,1)',
      background: 'none',
      boxSizing: 'border-box',

      borderRadius: '4px',
      bottom: '-8px',
      left: '0',
      right: '0',
      top: '-8px',
    }
  },
  refreshButton: {
    cursor: 'pointer',
  },
  arrowImage: {
    width: 20,
    height: 20
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    padding: 0,
    '&:after': {
      content: '""',
      height: '200%',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
    }
  }
})

class ShowTaskBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          <Grid item className={classes.container}>
            <Button className={classes.button}>
              <Checkbox checked={true} color="default" value="checkedG" className={classes.checkbox} />
            </Button>
            <Button className={classNames(classes.button, classes.arrowContainer)} onClick={this.handleClick}>
              <img src={arrow}
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                  className={classes.arrowImage}
                />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>All</MenuItem>
              <MenuItem onClick={this.handleClose}>Read</MenuItem>
              <MenuItem onClick={this.handleClose}>Unread</MenuItem>
              <MenuItem onClick={this.handleClose}>Favorites</MenuItem>
            </Menu>
            <IconButton className={classes.refreshButton} data-tooltip="File" aria-label="file">
              <Arquive fontSize="default" />
            </IconButton>
            <IconButton className={classes.refreshButton} data-tooltip="Report" aria-label="report">
              <Report fontSize="default" />
            </IconButton>
            <IconButton className={classes.refreshButton} data-tooltip="Delete" aria-label="delete">
              <Delete fontSize="default" />
            </IconButton>
            <IconButton className={classes.refreshButton} data-tooltip="Draft" aria-label="draft">
              <Drafts fontSize="default" />
            </IconButton>
            <IconButton className={classes.refreshButton} data-tooltip="Time" aria-label="time">
              <Time fontSize="default" />
            </IconButton>
            <IconButton className={classes.refreshButton} data-tooltip="Move To" aria-label="move">
              <Folder fontSize="default" />
            </IconButton>
            <IconButton className={classes.refreshButton} data-tooltip="Tag" aria-label="tag">
              <Label fontSize="default" />
            </IconButton>
            <MenuTask />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ShowTaskBar);
