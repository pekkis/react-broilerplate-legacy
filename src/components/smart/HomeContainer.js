import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SlimerActions from '../../actions/SlimerActions';
import Home from '../Home';

function mapStateToProps(state) {
    return {
        slimers: state.slimer.get('slimers'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        slimerActions: bindActionCreators(SlimerActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
