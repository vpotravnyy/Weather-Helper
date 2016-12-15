import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'

import rootReducer from './reducers'

const middlewaresChain = applyMiddleware(thunkMiddleware, apiMiddleware)
const devtoolsInterceptor = window.devToolsExtension ? window.devToolsExtension() : f => f

const finalCreateStore = compose(middlewaresChain, devtoolsInterceptor)(createStore)

export default function (customInitialState) {
  const store = finalCreateStore(rootReducer, customInitialState)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
