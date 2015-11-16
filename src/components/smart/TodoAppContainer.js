import TodoApp from '../TodoApp';
import { connect } from 'react-redux';
import * as TodoActions from '../../actioncreators/Todo';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return {
        todos: state.get('todos'),
        error: state.get('error'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        todoActions: bindActionCreators(TodoActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

