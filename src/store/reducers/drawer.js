import {
  DRAWER_TOGGLE
} from '../types'

const draweInitialState = {
  open: true
}

const drawer = (state = draweInitialState, action) => {
  switch (action.type) {
    case DRAWER_TOGGLE:
      return { ...state, open: !state.open }
    default:
      return state
  }
}

export default drawer;
