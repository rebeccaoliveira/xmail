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

//Images
import avatar from '../../images/avatar.jpg'

//icons
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ReplyIcon from '@material-ui/icons/Reply';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 10,
  },
  buttonSmall: {
    margin: 10,
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
  gridButton:{
    marginLeft: 10,
  },
});

function MailReplyButton(props) {
  const { classes } = props;
  return(
    <Grid container>
      <Grid item xs={1} />
      <Grid className={classes.gridButton} item xs={12}>
        <Button variant="outlined" component="span"  className={classes.buttonText}>
          <ReplyIcon className={classNames(classes.leftIcon, classes.iconSmall)}/>
          Reply
        </Button>
        <Button variant="outlined" component="span"  className={classNames(classes.buttonText, classes.buttonSmall)}>
          <DeleteIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
          Delete
        </Button>
      </Grid>
    </Grid>
  )
};

MailReplyButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailReplyButton);
