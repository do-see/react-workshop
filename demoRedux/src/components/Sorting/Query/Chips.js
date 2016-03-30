import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { removeFromQuery } from '../../../redux/modules/connector'
import Chip from './Chip'

export class Chips extends React.Component {
  static propTypes = {
    removeFromQuery: PropTypes.func.isRequired,
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
              onRemove={this.props.removeFromQuery} />)}
        </div>
      : <div />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  query: state.connector.query
})
export default connect((mapStateToProps), {
  removeFromQuery
})(Chips)
