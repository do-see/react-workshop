import React from 'react'
import ReactDOM from 'react-dom'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import Dashboard from 'views/Dashboard/Dashboard'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Model from './models/connector'

injectTapEventPlugin()

// Now that redux and react-router have been configured, we can render the
// React application to the DOM!
Model.subject.subscribe((appState) =>
  ReactDOM.render(
    <CoreLayout {...appState}><Dashboard /></CoreLayout>,
    document.getElementById('root')
  )
)
