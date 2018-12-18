// Package Imports
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'
import { snackbarReducer } from 'material-ui-snackbar-redux'

// App Imports
import drawer from './drawer'

// our reducers
// receive history as parameter, because its created on store setup
export default (history) => combineReducers({
  router: connectRouter(history),
  snackbar: snackbarReducer,

  // app reducers
  drawer,
  form
})
