// Package Imports
import { put, takeLatest } from 'redux-saga/effects'
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { stopSubmit } from 'redux-form'

function* showSnackbar(action) {
  try {
    yield put(snackbar.show({message: 'Login Failed'}))
    yield put(stopSubmit('loginForm', {password: 'email ou senha inválidos'}))
  } catch(e) {

  }
}
function* mySaga() {
  yield takeLatest("SHOW_SNACKBAR", showSnackbar);
}

export default mySaga;
