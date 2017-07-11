import React from 'react';
// import getAllTodos from '../../reducers/selectors';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo})  =>{ //be aware of {}
  // let titlearr = Object.keys(todos).map(title => todos[title]);
  return (
    <ul>
      {
        todos.map(({title,id}) => (
          <li key={id}>
            <TodoListItem title={title} id={id} removeTodo={removeTodo}/>
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
