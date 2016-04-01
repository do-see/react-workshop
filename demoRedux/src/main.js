import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the key "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

injectTapEventPlugin()

// Now that redux and react-router have been configured, we can render the
// React application to the DOM!
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
