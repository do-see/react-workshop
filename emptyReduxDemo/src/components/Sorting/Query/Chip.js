import React, { PropTypes } from 'react'
import classes from './Classes/Query.scss'
import Close from 'material-ui/lib/svg-icons/navigation/close'

export default class Chip extends React.Component {
  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    index: PropTypes.number,
    query: PropTypes.array
  }
  constructor (props) {
    super(props)
    this.state = { highlighted: false }
    this._removeChip = this.removeChip.bind(this)
    this._mouseEnter = this.onMouseEnter.bind(this)
    this._mouseLeave = this.onMouseLeave.bind(this)
  }

  removeChip () {
    this.props.onRemove(this.props.index)
  }

  onMouseEnter () {
    this.setState({highlighted: true})
  }

  onMouseLeave () {
    this.setState({highlighted: false})
  }

  render () {
    const { highlighted } = this.state
    const chipStyle = {
      backgroundColor: (highlighted) ? 'rgb(16,108,200)' : 'rgb(224,224,224)',
      color: (highlighted) ? 'rgba(255,255,255,0.87)' : 'rgb(66,66,66)'
    }
    return (
      <div
        className={classes.chip}
        style={chipStyle}
        onMouseEnter={this._mouseEnter}
        onMouseLeave={this._mouseLeave}>
        <span className={classes.chipContent}>
          <span className={classes.label}>
            {this.props.label}
          </span>
          <span className={classes.value}>
            {this.props.value}
          </span>
          <span className={classes.removeBtn} onTouchTap={this._removeChip}>
            <Close style={{verticalAlign: 'text-bottom'}}/>
          </span>
        </span>
      </div>
    )
  }
}
