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
    onApply: PropTypes.func.isRequired,
    queryConfig: PropTypes.array,
    lists: PropTypes.object
  }
  configEntry (config, itid) {
    const { type, id, label } = config
    if (type === TYPE_LIST && this.props.lists !== undefined) {
      return (<ListType
        {...config}
        value={this.props.lists[id]}
        label={label}
        key={itid}
        onChange={this.props.onApply} />)
    } else if (type === TYPE_SEARCH) {
      return (<SearchType
        {...config}
        key={itid}
        onChange={this.props.onApply} />)
    }
    return (<div />)
  }

  render () {
    return (
      <div style={{display: 'table', width: '100%'}}>
        {this.props.queryConfig.map((config, index) => this.configEntry(config, index))}
      </div>
    )
  }
}
