import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
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
import MenuTask from '../ListBody/MenuControler/MenuTask'
import MailSendBar from './MailSendBar'


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
});

function MailReply(props) {
  const { classes } = props;
  return(
      <Grid container className={classes.root}>
        <Grid xs={1}  item className={classes.gridAvatar}>
        </Grid>
        <Grid item xs={12} sm={11}>
          <Grid container style={{display: 'flex', flexDirection: 'column'}}>
            <Grid item>
              <Typography variant="body2" gutterBottom>
              We are the second most intelligent creatures
               were, of course, dolphins who curiously
               enough had long known of the impending
               destruction of the planet Earth.
               <br />
               We had
               made many attempts to alert manking to the
               danger, but most of our communications
               were misinterpreted as amusing attempts to
               punch footballs or whistle for tidbits, so
               we eventually decided we would leave
               Earth by our own means.
              <br />
              Our last ever dolphin message was
               misinterpreted as a surprisingly
               sophisticated attempt to do a double-
               backward somersault through a hoop while
               whistling the "Star-Spangled Banner" but
               in fact the message was this...
               <br />

              </Typography>
              <Typography variant="h6" gutterBottom>
                "So long and thanks for all the fish."
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
};

MailReply.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailReply);
