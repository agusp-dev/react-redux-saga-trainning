import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxSaga from 'redux-saga'
import rootSaga from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = reduxSaga()

export default () => {
  return {
    // ...createStore( reducers, applyMiddleware(thunk) )
    ...createStore( 
      reducers,
      compose(
        applyMiddleware(sagaMiddleware),
        //redux devtools extension
        typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' 
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
      )
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}