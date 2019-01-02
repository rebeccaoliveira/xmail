import React from 'react';

//Package
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
//icons
import RefreshIcon from '@material-ui/icons/Refresh';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import arrow from '../../images/icons/arrow_drop.png';
//Components
import MenuTask from './MenuControler/MenuTask';


const styles = theme => ({
  container: {
    paddingTop: 4,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
    position: 'fixed',
    backgroundColor: 'white',
    zIndex: 1,
    '&:before': {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      webkitBoxShadow: 'inset 0 -1px 0 0 rgba(100,121,143,0.122)',
      boxShadow: 'inset 0 -1px 0 0 rgba(100,121,143,0.122)',
      content: '""',
      display: 'block',
      position: 'absolute',
    }
  },
  item: {
    display: 'flex',
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
    margin: 0,
    padding: 0,
    minWidth: 30,
  },
  checkbox: {
    width: 10,
    height: 10,
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
      <Grid container className={classes.container}>
        <Grid item className={classes.item}>
          <Button className={classes.button}>
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              checked={true} color="default" value="checkedG" className={classes.checkbox} />
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
          <IconButton className={classes.refreshButton} aria-label="Refresh">
            <RefreshIcon fontSize="small" />
          </IconButton>
          <MenuTask />
        </Grid>

        <Grid item className={classes.menu}>

        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ShowTaskBar);
