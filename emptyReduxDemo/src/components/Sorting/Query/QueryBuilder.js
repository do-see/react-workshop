import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ConstructBuilder from './ConstructBuilder'
import Chips from './Chips'
import config from 'config'

/**
  * Query Config Structure:
  * [{id: 'router_name', type: 'list', label: 'Router Name'}]
  *
  **/
export class QueryBuilder extends React.Component {
  static propTypes = {
    query: PropTypes.object
  }
  render () {
    return (
      <div>
        <div style={{padding: 20}}>
          <strong>Parameters</strong>
          <ConstructBuilder queryConfig={config.queryConfig.queryBuilders} />
        </div>
        <Chips />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  query: state.connector.query
})
export default connect((mapStateToProps), {})(QueryBuilder)
