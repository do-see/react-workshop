import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Table from 'material-ui/lib/table/table'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import Pagination from './Pagination'
import config from 'config'
import { TotalHitsCounter, AppBlock } from 'components'
import CircularProgress from 'material-ui/lib/circular-progress'

/**
 * Erwartete Funktionen:
 * - Sortierbare Tabellen
 * - Dynamische Tabellen
 **/
export class ResultsTable extends React.Component {
  static propTypes = {
    hits: PropTypes.array,
    loading: PropTypes.bool
  }
  render () {
    const { hits, loading } = this.props
    return (
      <AppBlock label='Results' labelElement={<TotalHitsCounter />}>
        {loading ? <CircularProgress /> : (
        !hits || !hits.length ? <div>No Hits found. Please hit search</div>
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
        </Table>)}
        <Pagination />
      </AppBlock>
    )
  }
}

const mapStateToProps = (state) => ({
  hits: state.connector.searchResults,
  loading: state.connector.loading
})
export default connect((mapStateToProps), {})(ResultsTable)
