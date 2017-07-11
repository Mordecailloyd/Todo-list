import React from 'react';

const TodoListItem = ({key,id,title,removeTodo}) => (
  <div>
    <div>{title}</div>
    <button onClick={()=>removeTodo(id)}>Remove Todo</button>
  </div>
);

export default TodoListItem;
