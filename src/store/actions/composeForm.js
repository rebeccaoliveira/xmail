import {
  COMPOSE_FORM_HANDLE_CHANGE,
  COMPOSE_FORM_CLEAR
} from '../types'

export const composeChange = (component, value) => ({
  type: COMPOSE_FORM_HANDLE_CHANGE,
  payload: {component, value}
});

export const clear = () => ({
  type: COMPOSE_FORM_CLEAR
});
