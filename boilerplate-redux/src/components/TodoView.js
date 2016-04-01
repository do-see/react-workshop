import React, {Component, PropTypes} from 'react';

/**
 * renders a list of all todo items
 */
export default class TodoView extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
  }

  render () {
    return (
      <div>
        <ol>
          {this.props.todos.map((todo, index) =>
            <TodoItem key={index} todo={todo} itemId={index} onClick={this.props.onItemClick}/>)
          }
        </ol>
      </div>
    );
  }
}

/**
 * renders a todo item
 */
export class TodoItem extends Component {

  static propTypes = {
    todo: PropTypes.string.isRequired,
    itemId: PropTypes.number,
    onClick: PropTypes.func
  }

  constructor (props) {
    super(props);
    this.onClickAction = this.onClick.bind(this);
  }

  onClick () {
    this.props.onClick(this.props.itemId);
  }

  render () {
    return (
      <li onTouchTap={this.onClickAction}>
        {this.props.todo}
      </li>
    );
  }

}
