import React from 'react';

export default class SensorApp extends React.Component {

    render() {

        return (
            <div>
                <h1>Humidity Monitor </h1>

                {this.props.children}

            </div>
        );
    }

    componentDidMount() {
        const { getSensors } = this.props;
        getSensors();
    }
}
