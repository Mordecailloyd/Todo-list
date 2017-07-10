export const getAllTodos = (state) =>{
  return Object.keys(state.todos).map(id => state.todos[id]);
};
