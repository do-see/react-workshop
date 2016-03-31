import React, { PropTypes } from 'react'
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
    const styles = {
      chips: {
        backgroundColor: (highlighted) ? 'rgb(16,108,200)' : 'rgb(224,224,224)',
        color: (highlighted) ? 'rgba(255,255,255,0.87)' : 'rgb(66,66,66)',
        cursor: 'default',
        borderRadius: 16,
        display: 'block',
        height: 32,
        lineHeight: '32px',
        margin: '8px 8px 0 0',
        padding: '0 12px',
        float: 'left',
        boxSizing: 'border-box',
        maxWidth: '100%',
        position: 'relative',
        paddingRight: 22
      },
      chipContent: {
        display: 'block',
        float: 'left',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingRight: 4
      },
      label: {
        fontWeight: 500,
        borderRight: '1px solid rgb(66,66,66)',
        padding: '0 10px'
      },
      value: {
        fontStyle: 'italic',
        fontSize: 11,
        padding: '0 0 0 10px'
      },
      removeBtn: {
        cursor: 'pointer',
        verticalAlign: 'middle'
      }
    }
    return (
      <div
        style={styles.chips}
        onMouseEnter={this._mouseEnter}
        onMouseLeave={this._mouseLeave}>
        <span style={styles.chipContent}>
          <span style={styles.label}>
            {this.props.label}
          </span>
          <span style={styles.value}>
            {this.props.value}
          </span>
          <span style={styles.removeBtn} onTouchTap={this._removeChip}>
            <Close style={{verticalAlign: 'text-bottom'}}/>
          </span>
        </span>
      </div>
    )
  }
}
