import React, { PropTypes } from 'react'
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item'
import TypeSelector from 'components/Theming/TypeSelector'

export default class ListType extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.array,
    label: PropTypes.string,
    internalId: PropTypes.string
  }
  constructor (props) {
    super(props)
    this._wrapOnChange = this._onChange.bind(this)
  }
  _onChange (evt, indx, value) {
    this.props.onChange(this.props.internalId, this.props.label, value)
  }
  render () {
    return (
      <TypeSelector label={this.props.label}>
        <SelectField onChange={this._wrapOnChange}>
          {this.props.value && this.props.value.map((value, index) =>
            <MenuItem key={index} value={value.key} primaryText={value.key} />)}
        </SelectField>
      </TypeSelector>
    )
  }
}
