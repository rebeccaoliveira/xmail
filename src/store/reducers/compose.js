import {
  COMPOSE_OPEN,
  COMPOSE_MINIMIZE,
  COMPOSE_MAXIMIZE,
  COMPOSE_DELETE,
  COMPOSE_CLOSE,
  TO_DESKTOP,
  TO_MOBILE
} from '../types'

const composeInitialState = {
  winState: "open", // [closed, minimized, maximized, open]
  device: "desktop" // [desktop, mobile]
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
    case TO_DESKTOP:
        return {...state, device: "desktop" }
    case TO_MOBILE:
        return {...state, device: "mobile" }
    default:
      return state
  }
}

export default composeReducer;
