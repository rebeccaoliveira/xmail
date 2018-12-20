import {
  COMPOSE_OPEN,
  COMPOSE_MINIMIZE,
  COMPOSE_MAXIMIZE,
  COMPOSE_DELETE,
  COMPOSE_CLOSE,
} from '../types/compose'

export const composeOpen = () => ({
  type: COMPOSE_OPEN
});

export const composeMinimize = () => ({
  type: COMPOSE_MINIMIZE
});

export const composeMaximize = () => ({
  type: COMPOSE_MAXIMIZE
});

export const composeDelete = () => ({
  type: COMPOSE_DELETE
});

export const composeClose = () => ({
  type: COMPOSE_CLOSE
});
