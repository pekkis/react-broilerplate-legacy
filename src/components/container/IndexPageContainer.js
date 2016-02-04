import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../IndexPage';
import {
    addTodo,
    removeTodo,
    receiveTodos,
    saveTodos,
    moveTodo
} from '../../actions/todo-actions';

export default connect(
    state => ({
        todos: state.todo.get('todos'),
        isChanged: state.todo.get('isChanged'),
    }),
    dispatch => bindActionCreators({
        addTodo,
        removeTodo,
        saveTodos,
        moveTodo,
        receiveTodos,
    }, dispatch)
)(Wrapped);
