import { connect } from 'react-redux';
import TodoApp from '../TodoApp';
import { addTodo, removeTodo, toggleTodo, receiveTodos, saveTodos } from '../../actions/todo-actions';

function mapStateToProps(state) {
    return {
        todos: state.get('todos'),
        isChanged: state.get('isChanged'),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        removeTodo: id => dispatch(removeTodo(id)),
        toggleTodo: id => dispatch(toggleTodo(id)),
        receiveTodos: () => dispatch(receiveTodos()),
        saveTodos: todos => dispatch(saveTodos(todos)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
