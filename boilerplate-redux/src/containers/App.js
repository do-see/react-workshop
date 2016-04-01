import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo, removeTodo} from 'redux/modules/todos'
import TodoInputFields from '../components/TodoInputFields'
import TodoView from '../components/TodoView'

export class App extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <TodoInputFields onClick={this.props.addTodo}/>
        <TodoView todos={this.props.todos} onItemClick={this.props.removeTodo}/>
      </div>)
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos
})

export default connect((mapStateToProps), {
  addTodo, removeTodo
})(App)
