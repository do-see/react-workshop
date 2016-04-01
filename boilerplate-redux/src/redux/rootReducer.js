import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import todos from './modules/todos';

export default combineReducers({
  todos,
  router
});
