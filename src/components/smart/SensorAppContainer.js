import { connect } from 'react-redux';
import SensorApp from '../SensorApp';
import { getSensors } from '../../actions/sensor-actions';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        getSensors: () => dispatch(getSensors())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SensorApp);
