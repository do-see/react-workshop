import React, { PropTypes } from 'react'
import classes from './Heading.scss'

export class Heading extends React.Component {
  static propTypes = {
    heading: PropTypes.string.isRequired
  }
  render () {
    return (
      <div className={classes.heading}>
        <h1>{this.props.heading}</h1>
      </div>
    )
  }
}

export default Heading
