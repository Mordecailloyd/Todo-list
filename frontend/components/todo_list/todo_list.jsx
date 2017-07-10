import React from 'react';
// import getAllTodos from '../../reducers/selectors';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo})  =>{ //be aware of {}
  // let titlearr = Object.keys(todos).map(title => todos[title]);
  return (
    <ul>
      {
        todos.map(({title}, i) => (
          <TodoListItem title={title} i={i} />
        ))
      }
      <li>
        <TodoForm receiveTodo={receiveTodo} />
      </li>
    </ul>
  );
};

export default TodoList;
