import React, { PropTypes } from 'react'

export class Heading extends React.Component {
  static propTypes = {
    heading: PropTypes.string.isRequired
  }
  render () {
    const styles = {
      heading: {
        padding: 20
      }
    }
    return (
      <div style={styles.heading}>
        <h1>{this.props.heading}</h1>
      </div>
    )
  }
}

export default Heading
