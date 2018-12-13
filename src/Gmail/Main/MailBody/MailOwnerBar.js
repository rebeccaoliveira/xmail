// React Imports
import React from 'react';
import PropTypes from 'prop-types'

// Package Imports
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


// App Imports
import MailOwner from './MailOwner'
import MenuTask from '../MenuControler/MenuTask'

// Icons
import Star from '@material-ui/icons/StarBorder'
import Reply from '@material-ui/icons/Reply'
import More from '@material-ui/icons/MoreVert'
//Images
import dolphin from '../../images/dolphin.jpg'


const styles = theme => ({
  gridIcons: {
    display: 'flex',
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },

  gridAvatar: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  gridText: {
    marginBottom: 5,
  },
});

function MailOwnerBar(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={1} className={classes.gridAvatar}>
        <Hidden smDown>
          <Avatar
            alt="Dolphins"
            src={dolphin}
            size="small"
          />
        </Hidden>
      </Grid>
      <Grid className={classes.gridText} item xs={8} sm={7}>
        <Typography className={classes.pText}variant="subtitle1">"So long and thanks for all the fish."</Typography>
        <Typography className={classes.pText}variant="caption">From: Dolphins</Typography>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridIcons}>
        <IconButton className={classes.button} data-tooltip="Star" aria-label="star">
          <Star fontSize="default" />
        </IconButton>
        <IconButton className={classes.button} data-tooltip="Reply" aria-label="reply">
          <Reply fontSize="default" />
        </IconButton>
        <IconButton className={classes.button} data-tooltip="Reply" aria-label="reply">
          <More fontSize="default" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

MailOwnerBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailOwnerBar);
