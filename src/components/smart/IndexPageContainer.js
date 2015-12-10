import { connect } from 'react-redux';
import IndexPage from '../IndexPage';
import { pollMeasurements, clearAlert } from '../../actions/sensor-actions';

function mapStateToProps(state) {
    return {
        sensors: state.sensor.get('sensors'),
        alerts: state.sensor.get('alerts')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pollMeasurements: () => dispatch(pollMeasurements()),
        clearAlert: id => dispatch(clearAlert(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);
