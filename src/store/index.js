// React Imports
import React from 'react'
import ReactDOM from 'react-dom'

// Packages Import
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

// Our App Imports
import createRootReducer from './reducers'
import Sagas from './sagas'

const configureStore = (initialState) => {

  // history for connected-react-router
  // and our app runs on /v4
  const history = createBrowserHistory({
    basename: '/xmail/',
  })

  // create saga middleware here to use and hot reload sagas
  const sagaMiddleware = createSagaMiddleware();
  const middlewareList = [
    /* other middleware here */
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const middleware = applyMiddleware(...middlewareList);

  // if redux dev tools are available, use it!
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // create our store with offline enhancer
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(
      middleware
    )
  );

  // go sagas, go!!
  let sagaTask = sagaMiddleware.run(function* () {
    yield Sagas()
  })

  // hot reloading for reducers and sagas
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createRootReducer = require('./reducers').default;
      // needs to enhance reducers with offline config and connected router
      store.replaceReducer(
        createRootReducer(history)
      );
    });

    module.hot.accept('./sagas', () => {
      const getNewSagas = require('./sagas').default;
      // cancel current sagas and tell middleware to use new one
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(function* replacedSaga (action) {
          yield getNewSagas()
        })
      })
    })
  }

  return store;
}

export default configureStore;
