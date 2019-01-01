// React Imports
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import TaskBarShow from './TaskBarShow'
import MailSection from './MailSection'

const styles = theme => ({
  // Table css
  root: {
    paddingLeft: 0,
    float: 'right',
  },
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    overflowY: 'auto',
    height: 'calc(100% - 64px)',
    width: '100%',
    maxWidth: '100%',
  },
})

function TaskListTable({classes, important, unread, favorite, everything}) {
  return (
    <>
      <TaskBarShow />
      <div id="mailsection-container" className={classes.container}>
        <MailSection mails={important} title={"Important"}/ >
        <MailSection mails={unread} title={"Unread"} />
        <MailSection mails={favorite} title={"Favorites"} />
        <MailSection mails={everything} title={"Everything"} />
      </div>
    </>
  );
}


const mapStateToProps = (state) => ({
  important: state.mails.filter(mail => mail.unread && mail.imp).slice(0, 6),
  unread: state.mails.filter(mail => mail.unread && !mail.imp),
  favorite: state.mails.filter(mail => mail.fav && !mail.unread),
  everything: state.mails.filter(mail => !mail.fav && !mail.unread)
})

export default withStyles(styles)(
  connect(mapStateToProps)(TaskListTable)
)
