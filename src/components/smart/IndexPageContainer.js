import { connect } from 'react-redux';
import IndexPage from '../IndexPage';
import { addTodo, removeTodo, toggleTodo, receiveTodos, saveTodos, moveTodo } from '../../actions/todo-actions';

function mapStateToProps(state) {
    return {
        todos: state.todo.get('todos'),
        isChanged: state.todo.get('isChanged'),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        removeTodo: id => dispatch(removeTodo(id)),
        toggleTodo: id => dispatch(toggleTodo(id)),
        saveTodos: todos => dispatch(saveTodos(todos)),
        moveTodo: (id, direction) => dispatch(moveTodo(id, direction)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);
