import React from 'react'
import { connect } from 'react-redux'
import ConstructBuilder from './ConstructBuilder'
import Chips from './Chips'
import config from 'config'
import { AppBlock } from 'components'
import { removeFromQuery, applyQuery } from '../../../redux/modules/connector'
/**
  * Query Config Structure:
  * [{id: 'router_name', type: 'list', label: 'Router Name'}]
  *
  **/
export class QueryBuilder extends React.Component {
  render () {
    return (
      <AppBlock label='Parameters'>
        <ConstructBuilder
          queryConfig={config.queryConfig.queryBuilders}
          onApply={this.props.applyQuery}
          lists={this.props.lists} />
        <Chips
          onRemove={this.props.removeFromQuery}
          query={this.props.query} />
      </AppBlock>
    )
  }
}

const mapStateToProps = (state) => ({
  query: state.connector.query,
  lists: state.connector.lists
})
export default connect((mapStateToProps), {
  removeFromQuery,
  applyQuery
})(QueryBuilder)
