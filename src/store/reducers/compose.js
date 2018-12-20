import {
  COMPOSE_OPEN,
  COMPOSE_MINIMIZE,
  COMPOSE_MAXIMIZE,
  COMPOSE_DELETE,
  COMPOSE_CLOSE,
} from '../types'

const composeInitialState = {
  winState: "closed"
}

const composeReducer = (state = composeInitialState, action) => {
  switch (action.type) {
    case COMPOSE_OPEN:
      return { ...state, winState: "open" }
    case COMPOSE_MINIMIZE:
      return { ...state, winState: "minimized" }
    case COMPOSE_MAXIMIZE:
      return { ...state, winState: "maximized" }
    case COMPOSE_DELETE:
      return { ...state, winState: "closed" }
    case COMPOSE_CLOSE:
      return { ...state, winState: "closed" }
    default:
      return state
  }
}

export default composeReducer;
