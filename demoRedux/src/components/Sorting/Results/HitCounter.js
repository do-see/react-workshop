import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

/**
 * Erwartete Funktionen:
 * - Sortierbare Tabellen
 * - Filter Query
 * - REST Anfragen an Backend
 * - Dynamische Tabellen
 **/
export class HitCounter extends React.Component {
  static propTypes = {
    totalCounter: PropTypes.number
  }
  render () {
    return (<span><i> {this.props.totalCounter}</i></span>)
  }
}

const mapStateToProps = (state) => ({
  totalCounter: state.connector.counters.total
})
export default connect((mapStateToProps), {})(HitCounter)
