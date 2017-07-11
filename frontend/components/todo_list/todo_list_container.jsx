import { getAllTodos} from '../../reducers/selectors';
// import { getAllTodos, getFilteredTodos } from '../../reducers/selectors';
import {connect} from 'react-redux';
import {receiveTodo, removeTodo} from '../../actions/todo_actions';
import TodoList from './todo_list';



const mapStateToProps = state => ({
	todos: getAllTodos(state),
	// filteredTodos: getFilteredTodos(state),
});
const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
	removeTodo: (id) => dispatch(removeTodo(id))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
