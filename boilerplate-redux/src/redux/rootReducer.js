import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import connector from './modules/connector'

export default combineReducers({
  connector,
  router
})
