import React from 'react';

const TodoListItem = ({i,title}) => (
  <li key={i}>{title}</li>
);

export default TodoListItem;
