import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/TodoActions';
import TodoApp from '../TodoApp';

function mapStateToProps(state) {
    return {
        todos: state.todo.get('todos'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(TodoActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
