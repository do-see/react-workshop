import React, { PropTypes } from 'react'

export class AppBlock extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    labelElement: PropTypes.node,
    children: PropTypes.node.isRequired
  }
  render () {
    const {label, labelElement, children} = this.props
    const style = {
      padding: 20
    }
    return (
      <div style={style}>
        <strong>{label}</strong> {labelElement}
        <div>{children}</div>
      </div>
    )
  }
}

export default AppBlock
