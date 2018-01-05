import { createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import window from 'global/window'

export function createStore (initialState = {}) {
  const reducer = require('./reducer').default
  const middlewares = [ thunk ]
  const enhancers = [ applyMiddleware(...middlewares) ]

  // eslint-disable-next-line no-undef
  const composeEnhancers =
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const store = createReduxStore(reducer, initialState, composeEnhancers(...enhancers))

  if (module.hot) {
    // @TODO add other stuff to hot-reload @koma
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer').default)
    })
  }

  return store
}

