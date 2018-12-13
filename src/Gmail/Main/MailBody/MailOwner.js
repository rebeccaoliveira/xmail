import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

//Images
import avatar from '../../images/avatar.jpg'

const styles = theme => ({
  list: {
    marginBottom: 0,
  },
  listItem: {
    padding: 12,
  },
});

const messages = [
  {
    id: 1,
    primary: 'People who sent email',
    secondary: "Some information about email",
    person: '/static/images/adeel.jpg',
  },
];

function MailOwner(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <Fragment key={id}>
              <ListItem className={classes.listItem}>
                <Avatar
                  alt="Celso Fernandes"
                  src={avatar}
                  size="small"
                />
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </Fragment>
          ))}
        </List>
    </React.Fragment>
  );
}

MailOwner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailOwner);
