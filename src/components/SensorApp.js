import React from 'react';

const logo = require('../images/humidor.png');

export default class SensorApp extends React.Component {

    render() {

        return (
            <div>
                <h1>
                    <img src={logo} />
                    Tieto Humidor&trade;
                </h1>

                {this.props.children}

            </div>
        );
    }

    componentDidMount() {
        const { getSensors } = this.props;
        getSensors();
    }
}
