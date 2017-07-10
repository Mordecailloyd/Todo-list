import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {getAllTodos} from './reducers/selectors';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import Root from './components/root';
import App from './components/app';


document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.getAllTodos = getAllTodos;
  window.receiveTodos = receiveTodos;
  window.store = store;
  window.receiveTodo = receiveTodo;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
