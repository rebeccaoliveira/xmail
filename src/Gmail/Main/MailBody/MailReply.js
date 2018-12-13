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
import MenuTask from '../MenuControler/MenuTask'
import MailSendBar from './MailSendBar'


//Images
import avatar from '../../images/avatar.jpg'

//icons
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ReplyIcon from '@material-ui/icons/Reply';

const styles = theme => ({
  root: {
    marginTop: 15,
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
});

function MailReply(props) {
  const { classes } = props;
  return(
      <Grid container className={classes.root}>
        <Grid xs={1}  item className={classes.gridAvatar}>
          <Hidden xsDown>
            <Avatar
              alt="Celso Fernandes"
              src={avatar}
              size="small"
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={11}>
          <Grid container className={classes.divTable} style={{display: 'flex', flexDirection: 'column'}}>
            <Grid item>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>
                      <Button className={classes.buttonText}>To:</Button>
                      <Input />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell style={{padding:28}}>
                      <Typography component="p">
                        The first rule of Fight Club is: you do not talk about Fight Club.
                        The second rule of Fight Club is: you DO NOT talk about Fight Club!
                        <br />
                        The first rule of Fight Club is: you do not talk about Fight Club.
                        The second rule of Fight Club is: you DO NOT talk about Fight Club!
                        <br />
                        The first rule of Fight Club is: you do not talk about Fight Club.
                        The second rule of Fight Club is: you DO NOT talk about Fight Club!
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <MailSendBar />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
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
