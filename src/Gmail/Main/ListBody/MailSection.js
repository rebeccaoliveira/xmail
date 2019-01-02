// Import React
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

// Package Imports
import { connect } from 'react-redux'
import classNames from 'classnames'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

//icons
import arrowDown from '../../images/icons/keyboard_arrow_down.png'
import LabelIcon from '@material-ui/icons/LabelImportant'
import StarIcon from '@material-ui/icons/StarBorder'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Arquive from '@material-ui/icons/Inbox'
import Delete from '@material-ui/icons/Delete'
import Drafts from '@material-ui/icons/Drafts'
import Folder from '@material-ui/icons/Folder'
import Mail from '@material-ui/icons/Mail'
import Time from '@material-ui/icons/AccessTime'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// Components
import TaskListTitle from './TaskListTitle'
import TaskBarShow from './TaskBarShow'

const styles = theme => ({

// Table css
  root: {
    paddingLeft: 0,
    float: 'right',
    width: '100%',
    maxWidth: '100%',
  },
  table: {
    display: 'block',
    paddingLeft: 0,
  },
  tableSecond: {
    display: 'block',
    paddingLeft: 0,
    backgroundColor: 'rgba(242, 245, 245, 0.8)',
  },
  tableBody: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  //css in elements (button / input / checkbox)
  button: {
    color: 'black',
    margin: 0,
    padding: 1,
  },
  checkbox: {
    color: 'black',
    opacity: 0.16,
    padding: 1,
    width: 20,
    height: 20,
  },
  checkboxHeart: {
    opacity: 0.16,
    width: 25,
    height: 25,
    '&$checked': {
      color: 'red',
    },
  },
  checkboxLabel: {
    opacity: 0.16,
    width: 25,
    height: 25,
    '&$checked': {
      color: 'primary',
    },
  },
  checked: {
    opacity: 0.6,
  },
  // All css elemnts aplied in a Row
  row: {
    height: 27,
    minHeight: 27,
    maxHeight: 10,
    display: 'flex',
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    justifyContent: 'flex-start',
    '& > td': {
      display: 'flex',
      height: 27,
      minHeight: 27,
      alignItems: 'center',
    },
    '&:hover': {
      '-webkit-box-shadow': 'inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)',
      boxShadow: 'inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)',
      zIndex: 1,
    },
    '&:hover > td > button': {
      opacity: 0.6
    },
    '& > td:first-child': {
      width: 43,
      padding: '0px 10px 0px 0px'
    },
    '& > td:first-child:before': {
      left: 0,
      bottom: 0,
      right: 0,
      height: 20,
      width: 20,
      backgroundImage: 'url(https://www.gstatic.com/images/icons/material/system/1x/drag_indicator_black_20dp.png)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 20,
      content: '""',
      opacity: 0,
      position: 'relative',
      display: 'flex'
    },
    '&:hover > td:first-child:before': {
      opacity: 0.6,
    },
    '&:hover > td > span': {
      opacity: 0.6,
    },
    '&:hover > td > label': {
      opacity: 0.6,
    },
    '&:hover > td > [data-attribute="row-date"]': {
      display: 'none',
    },
    '& > td > [data-attribute="row-toolbar"]': {
      display: 'none',
    },
    '&:hover > td > [data-attribute="row-toolbar"]': {
      display: 'flex',
    }
  },
  rowToolbar: {
    display: 'none',
    minHeight: '100%',
    height: '100%',
    paddingLeft: 60,
    '&:hover': {
      display: 'flex',
    },
    '& > button': {
      minHeight: '100%',
      height: '100%',
    }
  },
  // Css in a cel button (td)
  td: {
    height: 20,
    maxHeight: 20,
    padding: 0,
    textAlign: 'left',
    maxWidth: 168,
    width: 168,
  },
  tdButton: {
    height: 10,
    maxHeight: 10,
    padding: 0,
    width: 20,
    maxWidth: 40,
    minWidth: 35,
    textAlign: 'center',
  },
  tdCheckbox: {
    width: 47,
    maxWidth: 47,
    minWidth: 47,
  },
  tdContent: {
    height: 10,
    maxHeight: 10,
    padding: 0,
    textAlign: 'left',
    tableLayout: 'fixed',
    flexWrap: 'nowrap',
    maxWidth: '100%',
    width: '100%',
    minWidth: '10%',
  },
  tdTitle: {
    height: 10,
    maxHeight: 10,
    padding: 0,
    width: 168,
    maxWidth: 168,
    minWidth: 168,
    textAlign: 'left',
    tableLayout: 'fixed',
    flexWrap: 'nowrap',
  },
  tdDate: {
    height: 10,
    maxHeight: 10,
    padding: 0,
    textAlign: 'right',
  },
  tdHover: {
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    height: 10,
    maxHeight: 10,
    padding: 0,
    paddingLeft: 10,

  },
  //text content config
  wrapText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

const MailSection = ({classes, mails, title, drawer}) => (
  <div className={classes.container}>
    <TaskListTitle title={title} />
    <Divider />
    <Grid container className={classes.root}>
      <Table className={classes.table}>
        <TableBody className={classes.tableBody}>
          {mails.map(row => {
            return (
            <TableRow key={row.id} className={classes.row}>
              <TableCell className={classNames(classes.tdButton, classes.tdCheckbox)} >
                <Checkbox classes={{
                  root: classes.checkbox,
                  checked: classes.checked,
                  }} size="small" color="default" value="checkedG"  />
              </TableCell>
              <TableCell className={classes.tdButton}>
                <FormControlLabel className={classes.button}
                  control={
                    <Checkbox defaultChecked={row.fav} classes={{
                      root: classes.checkboxHeart,
                      checked: classes.checked,
                      }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH"  />
                  }
                />
              </TableCell>
              <TableCell className={classes.tdButton} >
                <FormControlLabel className={classes.button}
                  control={
                    <Checkbox defaultChecked={row.imp} classes={{
                      root: classes.checkboxLabel,
                      checked: classes.checked,
                    }} icon={<LabelIcon />} checkedIcon={<LabelIcon />} value="checkedD" />
                  }
                />
              </TableCell>
              <TableCell className={classes.tdTitle} style={{fontWeight: (row.unread ? '500' : 'normal')}}>
                {row.title}
              </TableCell>
              <Hidden xsDown>

                <TableCell
                  className={classNames(classes.td, classes.tdContent)}
                  style={{fontWeight: (row.unread ? '500' : 'normal')}}
                  >
                  <p className={classes.wrapText}>{row.content}</p>
                </TableCell>

                <TableCell className={classNames(classes.td, classes.tdHover)}>
                  <div className={classes.rowToolbar} data-attribute="row-toolbar">
                    <IconButton className={classes.tdButton}>
                      <Arquive fontSize="small" />
                    </IconButton>
                    <IconButton className={classes.tdButton}>
                      <Delete fontSize="small" />
                    </IconButton>
                    <IconButton className={classes.tdButton}>
                      <Drafts fontSize="small" />
                    </IconButton>
                    <IconButton className={classes.tdButton}>
                      <Time fontSize="small" />
                    </IconButton>
                  </div>
                  <div className={classes.tdDate} data-attribute="row-date" style={{fontWeight: (row.unread ? '500' : 'normal')}}>
                    {row.date}
                  </div>
                </TableCell>
              </Hidden>
            </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Grid>
  </div>
);


export default withStyles(styles)(MailSection);
