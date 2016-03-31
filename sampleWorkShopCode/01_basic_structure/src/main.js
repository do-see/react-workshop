import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const globalStyle = {
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
    this._increaseCounter = this.increaseCounter.bind(this)
  }

  increaseCounter () {
    this.setState({counter: this.newCounterValue()})
  }

  newCounterValue () {
    return this.state.counter + 1
  }

  render () {
    return (<HelloWorld counter={this.state.counter} onAction={this._increaseCounter} />)
  }
}
class HelloWorld extends Component {
  render () {
    const { counter, onAction } = this.props
    const styles = {
      ...globalStyle,
      border: '1px solid #ccc',
      borderColor: (counter % 2) ? 'red' : 'blue',
      WebkitBoxShadow: ''
    }
    const table = [
      1, 2, 3, 4, 5, 6, 7
    ]
    return (<div onClick={onAction} style={styles} className='container'>
      {counter}
      <table>
        <tbody>
          {table.map((element, index) =>
            <tr key={index}><td>{element}</td></tr>)}
        </tbody>
      </table>
    </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('example')
)
