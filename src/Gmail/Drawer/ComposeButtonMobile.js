// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import Fab from '@material-ui/core/Fab';

//apps Imports
import { composeOpen } from '../../store/actions/compose'

//images
import IconAdd from '../images/gmail_icon_add.png'
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    position: 'fixed',
    bottom: 10,
    right: 50,
    marginRight: 20,
    content: '""',
    backgroundImage: `url(${IconAdd})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '32px',
    backgroundColor: 'white',
    display: 'block',
    zIndex: 1,
    '&:hover': {
      boxShadow: '0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)',
      backgroundColor: '#fafafb',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
      height: 0,
    },
  },
});

// const ComposeLink = props => <Link to="/Gmail/MailCompose/MailBoxComposeMobile" {...props} />

function ComposeButton({classes, composeOpen}) {
  return (
    <div>
      <Fab onClick={composeOpen}

      className={classes.button} >
      </Fab>
    </div>
  );
}

ComposeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  composeOpen
}

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(ComposeButton)
);
