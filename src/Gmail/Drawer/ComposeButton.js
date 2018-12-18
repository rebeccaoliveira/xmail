// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import keyframes from 'jss-keyframes'

//images
import IconAdd from '../images/gmail_icon_add.png'


const animationName = keyframes({
  '0%': {
  },
  '100%': {
    visibility: 'visible'
  }
});

const styles = theme => ({
  button: {
  margin: 0,
  backgroundColor: "#FFFFFF",
  boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
  transition: 'box-shadow .08s linear, min-width .15s cubic-bezier(0.4,0.0,0.2,1)',
  '&:hover': {
    boxShadow: '0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)',
    backgroundColor: '#fafafb'
  },
  paddingLeft: 0,
  display: 'flex',
  minWidth: '56px',
  width: '148px',
},
extendedIcon: {
  marginRight: theme.spacing.unit,
},
link: {
  textDecoration: 'none',
},
label: {
  textTransform: 'capitalize',
    fontSize: '.875rem',
},
labelClose: {
  '& .text': {
  },
  '& .text:before': {
    marginLeft: 15
  }
},
buttonDiv: {
  paddingLeft: 2,
  // margin: '16px 0px',
  minHeight: 80,
  height: 80,
  display: 'flex',
  alignItems: 'center'
},
composeOpen: {
  // backgroundColor: 'red',
},
composeClose: {
  // backgroundColor: 'blue',
  borderRadius: 28,
  height: 56,
  width: 56,
  maxWidth: 56,
  paddingRight: 0,
},
text: {
  marginLeft: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:before': {
    position: 'fixed',
    left: 10,
    marginRight: 20,
    content: '""',
    backgroundImage: `url(${IconAdd})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '32px',
    display: 'block',
    height: '48px',
    minWidth: '56px',
  },
},
textClose: {
  marginLeft: 0,
  // backgroundColor: 'red',
  '&:before': {
    marginRight: 0,
  }
},
span: {
  position: 'fixed',
  left: 63,
  paddingLeft: 10,
},
spanOpen: {
  animation: `0.08s ${animationName}`,
  animationFillMode: 'forwards',
},
spanClose: {
  visibility: 'hidden'
},
});

function ComposeButton({classes, drawer}) {
  return (
    <div className={classes.buttonDiv}>
      <Button
        variant="extendedFab"
        className={classNames(classes.button, classes.label, {
          [classes.composeOpen]: drawer.open,
          [classes.composeClose]: !drawer.open,
          [classes.labelClose]: !drawer.open,
        })}
      >
        <div
          className={classNames(classes.text, {
            [classes.textOpen]: drawer.open,
            [classes.textClose]: !drawer.open,
          })}
        >
          <span className={classNames(classes.span, {
            [classes.spanOpen]: drawer.open,
            [classes.spanClose]: !drawer.open,
          })}>Compose</span>
        </div>
      </Button>
    </div>
  );
}

ComposeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
  const { drawer } = state
  return ({
    drawer
  })
}

export default withStyles(styles)(
  connect(mapStateToProps)(ComposeButton)
);
