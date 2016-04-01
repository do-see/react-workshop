import React, {Component, PropTypes} from 'react';

/**
 *
 */
export default class TodoInputFields extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this._onChange = ::this.onChange;
    this._onClick = ::this.onClick;
    this.state = this.initializeTextValue();
  }

  onChange (event) {
    this.setState({textValue: event.target.value});
  }

  render () {
    return (
      <form>
        <input type='text' onChange={this._onChange} value={this.state.textValue} />
        <input type='button' value='add' onClick={this._onClick} />
      </form>
    );
  }

  initializeTextValue () {
    return { textValue: '' };
  }

  onClick () {
    this.props.onClick(this.state.textValue);
    this.setState(this.initializeTextValue());
  }
}
