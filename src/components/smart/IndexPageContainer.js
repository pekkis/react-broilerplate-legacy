import { connect } from 'react-redux';
import IndexPage from '../IndexPage';
import { pollMeasurements } from '../../actions/sensor-actions';

function mapStateToProps(state) {
    return {
        sensors: state.sensor.get('sensors')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pollMeasurements: todo => dispatch(pollMeasurements()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);
