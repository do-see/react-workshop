import React from 'react'
import Paper from 'material-ui/lib/paper'
import Divider from 'material-ui/lib/divider'
import {
  QueryBuilderInterface,
  ResultsTable,
  DashboardHeading } from 'components'

/**
 * Erwartete Funktionen:
 * - Sortierbare Tabellen
 * - Filter Query
 * - REST Anfragen an Backend
 * - Dynamische Tabellen
 **/
export class Dashboard extends React.Component {

  render () {
    return (
      <Paper zDepth={1}>
        <DashboardHeading heading='Gear CPU Usage' />
        <Divider />
        <QueryBuilderInterface />
        <Divider />
        <ResultsTable />
      </Paper>
    )
  }
}

export default Dashboard
