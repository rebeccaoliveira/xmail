// Package Imports
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { snackbarReducer } from 'material-ui-snackbar-redux'

// App Imports
import drawer from './drawer'
import compose from './compose'

// our reducers
// receive history as parameter, because its created on store setup
export default () => combineReducers({
  snackbar: snackbarReducer,

  // app reducers
  drawer,
  form,
  compose
})
