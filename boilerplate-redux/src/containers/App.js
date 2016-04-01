import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from 'redux/modules/connector'
import TodoInputFields from '../components/TodoInputFields'
import TodoView from '../components/TodoView'


export class App extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <TodoInputFields onClick={this.props.addTodo}/>
        <TodoView todos={this.props.todos}/>
      </div>)
  }
}

const mapStateToProps = (state) => ({
  todos: state.connector.todos
})

export default connect((mapStateToProps), {
  addTodo
})(App)

