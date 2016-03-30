import React, { PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import { connect } from 'react-redux'
import classes from './Results.scss'

import Table from 'material-ui/lib/table/table'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import Pagination from './Pagination'
import config from 'config'
import { TotalHitsCounter } from 'components'

/**
 * Erwartete Funktionen:
 * - Sortierbare Tabellen
 * - Dynamische Tabellen
 **/
export class ResultsTable extends React.Component {
  static propTypes = {
    hits: PropTypes.array
  }
  render () {
    const { hits } = this.props
    return (
      <Paper zDepth={1} className={classes.hitCounter}>
        <strong>Results </strong><TotalHitsCounter />
        {!hits || !hits.length ? <div>No Hits found. Please hit search</div>
        : <Table>
          <TableHeader>
            <TableRow>
              {config.tableCells.map((cell, index) =>
                <TableHeaderColumn key={index}>{cell.header}</TableHeaderColumn>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {hits.map((hit, index) =>
              <TableRow key={index}>
              {config.tableCells.map((cell, cellIndex) =>
                <TableRowColumn key={cellIndex}>{hit._source[cell.id]}</TableRowColumn>)}
              </TableRow>
            )}
          </TableBody>
        </Table>}
        <Pagination />
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  hits: state.connector.searchResults
})
export default connect((mapStateToProps), {})(ResultsTable)
