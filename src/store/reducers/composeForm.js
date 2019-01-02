import {
  COMPOSE_FORM_HANDLE_CHANGE,
  COMPOSE_FORM_CLEAR
} from '../types'

const composeInitialState = {
  to: '',
  subject: '',
  body: ''
}

const composeForm = (state = composeInitialState, action) => {
  switch (action.type) {
    case COMPOSE_FORM_HANDLE_CHANGE:
      const newState = { ...state }
      newState[action.payload.component] = action.payload.value
      return newState
    case COMPOSE_FORM_CLEAR:
      return { ...state }
    default:
      return state
  }
}

export default composeForm;
