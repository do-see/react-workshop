/* @flow */
import React from 'react'
import Paper from 'material-ui/lib/paper'
import { loadResults, clearSearch } from '../../../redux/modules/connector'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ClearSearch from './ClearSearch'
import QueryBuilder from './QueryBuilder'
import SearchIcon from 'material-ui/lib/svg-icons/action/search'

type Props = {
  loadResults: Function
};
/**
 * Erwartete Funktionen:
 * - Sortierbare Tabellen
 * - Filter Query
 * - REST Anfragen an Backend
 * - Dynamische Tabellen
 **/
export class BuilderInterface extends React.Component<void, Props, void> {
  constructor (props) {
    super(props)
    this._loadSearch = this.loadSearch.bind(this)
  }

  componentWillMount () {
    this.loadSearch()
  }

  loadSearch () {
    this.props.loadResults(0, 6)
  }
  render () {
    const styles = {
      rightSearchActions: {
        float: 'right'
      },
      searchActions: {
        height: 40
      },
      searchLens: {
        margin: 5
      },
      clearFix: {
        clear: 'both'
      }
    }
    return (
      <Paper zDepth={1}>
        <div>
          <QueryBuilder />
          <div style={styles.searchActions}>
            <div style={styles.rightSearchActions}>
              <ClearSearch onAction={this.props.clearSearch} />
              <FloatingActionButton
                primary
                style={styles.searchLens}
                onTouchTap={this._loadSearch}>
                <SearchIcon />
              </FloatingActionButton>
            </div>
          </div>
          <div style={styles.clearFix} />
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({})
export default connect((mapStateToProps), {
  loadResults,
  clearSearch
})(BuilderInterface)
