import React from 'react'
import Paper from 'material-ui/lib/paper'
import Connector from 'stores/connector'
/**
 * Erwartete Funktionen:
 * - Sortierbare Tabellen
 * - Filter Query
 * - REST Anfragen an Backend
 * - Dynamische Tabellen
 **/
export class Dashboard extends React.Component {
  constructor () {
    super()
    this._load = this.load.bind(this)
  }
  load () {
    Connector.getSearch()
  }

  render () {
    console.log(this.props)
    return (
      <Paper zDepth={1}>
        dashboard
        <a href='#' onTouchTap={this._load}>Load</a>
      </Paper>
    )
  }
}

export default Dashboard
