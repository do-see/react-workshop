import React, { PropTypes } from 'react'
import TypeSelector from 'components/Theming/TypeSelector'
import TextField from 'material-ui/lib/text-field'

export default class SearchType extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    internalId: PropTypes.string
  }
  constructor (props) {
    super(props)
    this._wrapOnChange = this._onChange.bind(this)
  }
  _onChange (evt) {
    this.props.onChange(this.props.internalId, this.props.label, evt.target.value)
  }
  render () {
    return (
      <TypeSelector label={this.props.label}>
        <TextField
          style={{width: '100%'}}
          hintText={'Search...'}
          onBlur={this._wrapOnChange}
        />
      </TypeSelector>
    )
  }
}
