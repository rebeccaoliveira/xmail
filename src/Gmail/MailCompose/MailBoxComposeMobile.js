import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton'

//components
import MailSendBar from '../Main/MailBody/MailSendBar'

//icons
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ReplyIcon from '@material-ui/icons/Reply';

const styles = theme => ({
  root: {
    marginTop: 15,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      paddingRight: 20
    }
  },
  rootResize: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  button: {
    margin: 0,
  },
  divTable: {
    border: '1px solid #dadce0',
    borderRadius: '8px',
    '&:hover': {
      transition: 'border .15s cubic-bezier(0.4,0.0,0.2,1),box-shadow .15s cubic-bezier(0.4,0.0,0.2,1)',
    },
  },
  buttonText: {
    textTransform: 'capitalize',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  gridAvatar: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    boxShadow: 'none',
    textTransform: 'none',
  },
  titleForm: {
    display: 'flex',
    color: '#777',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignSelf: 'center',
    padding: 3,
  },
  inputForm: {
    border: '0!important',
    fontSize: 14,
    fontFamily:' "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    resize: 'none',
    webkitBoxSizing: 'border-box',
    width: '100%',
    margin: 0,
    outline: 'none',
    backgroundColor: 'white',
    color: '#404040',
    display: 'flex',
    paddingLeft: 10,
  },
  inputTitle: {
    border: '0!important',
    fontSize: 14,
    fontFamily:' "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
    resize: 'none',
    webkitBoxSizing: 'border-box',
    width: '100%',
    margin: 0,
    outline: 'none',
    backgroundColor: 'white',
    color: '#777',
    display: 'flex',
  },
  divTitle: {
    borderBottom:'1px solid #e0e0e0',
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
    transition: 'box-shadow .15s cubic-bezier(0.4,0.0,0.2,1)',
    zIndex: 1,
  },
  pText: {
    display: 'flex',
    color: '#404040',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    whiteSpace: 'wrap',
    alignSelf: 'center',
    padding: 3,
    height: 250,
    maxHeight: '100%'
  },
  mailSend: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});

function MailReply(props) {
  const { classes } = props;
  return(
      <Grid container className={classes.root}>
        <Grid xs={1} />
        <Grid item xs={12} sm={11}>
          <Grid container className={classes.divTable} style={{display: 'flex', flexDirection: 'column'}}>
            <Grid item xs={12}>
              <Typography className={classes.titleForm} variant="subtitle2">
              From <input readOnly className={classes.inputForm} value="you@mail.com" />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div>
                <Typography style={{justifyContent: 'flex-start'}} className={classes.titleForm} variant="subtitle2">
                  Cc Bcc <input readOnly className={classes.inputForm} />
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.titleForm} style={{borderBottom:'1px solid #e0e0e0'}} variant="subtitle2">
              To <input readOnly className={classes.inputForm} />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.divTitle}>
                <input readOnly className={classes.inputTitle} placeholder="Subject" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.pText} variant="body2" gutterBottom>
                <textarea cols="30" rows="5" className={classes.inputForm} type="text" />
              </Typography>
            </Grid>
            <div className={classes.mailSend}>
              <MailSendBar  />
            </div>
          </Grid>
        </Grid>
      </Grid>
  )
};

MailReply.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailReply);
