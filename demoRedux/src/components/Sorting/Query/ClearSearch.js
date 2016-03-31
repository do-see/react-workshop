import React, { PropTypes } from 'react'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import CloseNav from 'material-ui/lib/svg-icons/navigation/close'

export default class ClearSearch extends React.Component {
  static propTypes = {
    onAction: PropTypes.func.isRequired
  }

  render () {
    return (<FloatingActionButton
      mini
      secondary
      tooltip={'Clear Search'}
      onTouchTap={this.props.onAction}>
      <CloseNav />
    </FloatingActionButton>)
  }
}
