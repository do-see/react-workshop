import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './redux/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

injectTapEventPlugin();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
