import { connect } from 'react-redux'
import { applyQuery } from '../../../redux/modules/connector'
import { ListType, SearchType } from './Builders'
import React, { PropTypes } from 'react'

export const TYPE_LIST = 'list'
export const TYPE_SEARCH = 'text'
/**
  * Query Config Structure:
  * [{id: 'router_name', type: 'list', label: 'Router Name'}]
  *
  **/
export class ConstructBuilder extends React.Component {
  static propTypes = {
    applyQuery: PropTypes.func.isRequired,
    queryConfig: PropTypes.object,
    lists: PropTypes.array
  }
  configEntry (config) {
    const { type, id, label } = config
    if (type === TYPE_LIST && this.props.lists !== undefined) {
      return (<ListType
        {...config}
        value={this.props.lists[id]}
        label={label}
        onChange={this.props.applyQuery} />)
    } else if (type === TYPE_SEARCH) {
      return (<SearchType
        {...config}
        onChange={this.props.applyQuery} />)
    }
    return (<div />)
  }

  render () {
    return (
      <div style={{display: 'table', width: '100%'}}>
        {this.props.queryConfig.map((config) => this.configEntry(config))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: state.connector.lists
})
export default connect((mapStateToProps), {
  applyQuery
})(ConstructBuilder)
