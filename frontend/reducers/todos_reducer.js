import {RECEIVE_TODOS} from '../actions/todo_actions';
import {RECEIVE_TODO} from '../actions/todo_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  const newstate = Object.assign({},state);
  switch(action.type){

    case RECEIVE_TODOS: return action.todos;

    case RECEIVE_TODO:{
      newstate[action.todo.id] = action.todo;
      return newstate;
        }
    default: return state;
  }
};
