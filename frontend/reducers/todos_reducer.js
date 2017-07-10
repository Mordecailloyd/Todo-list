import {RECEIVE_TODOS} from '../actions/todo_actions';
import {RECEIVE_TODO} from '../actions/todo_actions';


export default (state = {}, action) => {
  switch(action.type){

    case RECEIVE_TODOS: return [...state, action.todos];

    case RECEIVE_TODO: return [...state, action.todo];

    default: return state;
  }
};
