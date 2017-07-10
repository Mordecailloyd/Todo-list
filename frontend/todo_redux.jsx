import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {getAllTodos} from './reducers/selectors';
import {receiveTodo, receiveTodos} from './actions/todo_actions';



document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('root'));
  const store = configureStore();
  window.getAllTodos = getAllTodos;

  window.store = store;
  window.receiveTodo = receiveTodo;
});
