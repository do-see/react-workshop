import React, {Component} from 'react'

export default class TodoView extends Component {

  renderSingleTodo (todo, index) {
    return <li key={index}>{todo}</li>;
  }

  render () {
    return (<div><ol>{this.props.todos.map((todo, index) => (this.renderSingleTodo(todo, index)))}</ol></div>)
  }
}
