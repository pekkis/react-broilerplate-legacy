import { default as React, PropTypes } from 'react';

class Measurement extends React.Component {

    static propTypes = {
        value: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired
    };

    render() {
        const { value, unit } = this.props;

        return(
            <span className="measurement">{value} {unit}</span>
        );
    }
}

export default Measurement;
