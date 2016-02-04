import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../TodoPage';

export default connect(
    state => ({
        todos: state.todo.get('todos'),
    })
)(Wrapped);
