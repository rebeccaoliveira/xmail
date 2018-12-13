// React Imports
import React from 'react'
import PropTypes from 'prop-types'


// Package Imports
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

// App Imports
import TaskListTable from './TaskListTable'
import TaskBarHidden from './TaskBarHidden'
import TaskBarShow from './TaskBarShow'
import MailTitle from './MailTitle'
import MailOwnerBar from './MailOwnerBar'
import MailReply from './MailReply'
import TaskBoxShow from './TaskBoxShow'
import TaskListImportant from './TaskListImportant'


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white'
  },
  toolbar: theme.mixins.toolbar,
  container: {
    position: 'absolute',
    marginTop: 64,
    marginLeft: 240,
    flexDirection: 'row'
  },
  containerMail: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
  },
  divBorder: {
    minWidth: '2px',
    border: 'solid red 2px',
  },
  Anchor: {
    width: '8px',
    backgroundColor: 'gray',
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    cursor: 'col-resize',
  },
})

const Main = ({classes}) => (
<Grid className={classes.container}>
  <Grid>
    <TaskBarShow />
  </Grid>
  <Grid style={{maxWidth: '100%'}}>
    <Grid className={classes.containerMail}>
      <Grid style={{maxWidth: '50%'}}>
        <TaskListTable />
      </Grid>
      <Grid className={classNames(classes.divBorder, classes.Anchor)}>
      </Grid>
      <Grid style={{maxWidth: '50%'}}>
        <MailTitle />
        <MailOwnerBar />
        <Divider />
        <MailReply />
      </Grid>
    </Grid>
  </Grid>
</Grid>
)

export default withStyles(styles)(Main)

//Components
// Left: TaskListTable
//Right: MailTitle / MailOwnerBar /Divider /MailReply
