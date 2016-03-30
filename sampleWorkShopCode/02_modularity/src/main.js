import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './containers'

const render = (intoElementID, config) => {
  ReactDOM.render(<App config={config} />,
    document.getElementById(intoElementID)
  )
}
render('example')
