import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../App';
import { receiveTodos } from '../../actions/todo-actions';


export default connect(
    state => ({}),
    dispatch => bindActionCreators({
        receiveTodos
    }, dispatch)
)(Wrapped);
