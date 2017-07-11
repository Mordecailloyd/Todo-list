import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge(
      {},
      this.props.todo,
      {done: !this.props.todo.done }
    );
    this.props.receiveTodo(toggledTodo);
  }
  render() {
    const todo = this.props.todo;
    let buttonClass, buttonText;
    if (todo.done){
      buttonClass = "done";
      buttonText =  "Undo";
    }
    else {
      buttonText =  "Done";
      buttonClass = "undo";
    }
  // const TodoListItem = ({key,id,title,removeTodo, done,toggleTodo}) => (
    return (
      <div className = 'todoItem'>
        <div className = 'todoItemTitle'>{todo.title}</div>
        <button onClick={()=>this.props.removeTodo(todo.id)}>Remove Todo</button>
        <button className = {buttonClass} onClick={this.toggleTodo}>{buttonText}</button>
      </div>
    );
  }
}
export default TodoListItem;
