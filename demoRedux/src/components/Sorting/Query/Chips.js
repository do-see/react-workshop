import React, { PropTypes } from 'react'
import Chip from './Chip'

export default class Chips extends React.Component {
  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    query: PropTypes.array
  }
  render () {
    return (
      <div>
      {this.props.query
        ? <div>
          {this.props.query && this.props.query.map((query, index) =>
            <Chip
              {...query}
              key={index}
              index={index}
              onRemove={this.props.onRemove} />)}
        </div>
      : <div />}
      </div>
    )
  }
}
