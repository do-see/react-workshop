/* @flow */
import React from 'react'
import { clearSearch } from '../../../redux/modules/connector'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import CloseNav from 'material-ui/lib/svg-icons/navigation/close'

type Props = {
  clearSearch: Function
};

export class ClearSearch extends React.Component<void, Props, void> {
  constructor (props) {
    super(props)
    this._clearSearch = this.clearSearch.bind(this)
  }

  clearSearch () {
    this.props.clearSearch()
  }
  render () {
    return (<FloatingActionButton
      mini
      secondary
      tooltip={'Clear Search'}
      onTouchTap={this._clearSearch}>
      <CloseNav />
    </FloatingActionButton>)
  }
}

const mapStateToProps = (state) => ({})
export default connect((mapStateToProps), {
  clearSearch
})(ClearSearch)
