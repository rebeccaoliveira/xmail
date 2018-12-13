// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import IconAdd from '../images/gmail_icon_add.png'

const styles = theme => ({
  button: {
    margin: 0,
    backgroundColor: "#FFFFFF",
    boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
    transition: 'box-shadow .08s linear,min-width .15s cubic-bezier(0.4,0.0,0.2,1)',
    '&:hover': {
      boxShadow: '0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)',
      backgroundColor: '#fafafb'
    },
    padding: '0px 24px 0px 0px',
    display: 'flex',
    minWidth: '56px',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '.875rem',
    '& .text': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .text:before': {
      content: '""',
      backgroundImage: `url(${IconAdd})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '32px',
      display: 'flex',
      height: '48px',
      minWidth: '56px',
    },
  },
  buttonDiv: {
    paddingLeft: 3,
    margin: '16px 0px',
    position: 'fixed',
    zIndex: 1,
  }
});

function ComposeButton(props) {
  const { classes } = props;
  return (
    <div className={classes.buttonDiv}>
      <Button variant="extendedFab" className={classNames(classes.button,classes.label)}>
        <div className="text">Compose</div>
      </Button>
    </div>
  );
}

ComposeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposeButton);
