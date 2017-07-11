import React from 'react';
// import getAllTodos from '../../reducers/selectors';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo})  =>{ //be aware of {}
  // let titlearr = Object.keys(todos).map(title => todos[title]);
  return (
    <ul>
      {
        todos.map(({title,id}, i) => (
          <li>
            <TodoListItem key={id}  title={title} i={i} />
            <
          </li>
        ))
      }
      <li>
        <TodoForm receiveTodo={receiveTodo} />
      </li>
    </ul>
  );
};

export default TodoList;
