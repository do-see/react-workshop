import React, { PropTypes } from 'react'

export class TypeSelector extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.node.isRequired
  }
  render () {
    const styles = {
      searchType: {
        display: 'table-row'
      },
      label: {
        width: '20%',
        verticalAlign: 'middle',
        display: 'table-cell'
      },
      value: {
        width: '80%',
        display: 'table-cell'
      }
    }
    return (
      <div style={styles.searchType}>
        <div style={styles.label}>{this.props.label}</div>
        <div style={styles.value}>{this.props.children}</div>
      </div>
    )
  }
}

export default TypeSelector
