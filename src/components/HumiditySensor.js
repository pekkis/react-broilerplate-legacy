import React from 'react';
import Measurement from './Measurement';

const HumiditySensor = props => {

    const { data } = props;

    console.log(props);

    const measurements = data.measurements.sort(m => m.timestamp);
    const current = measurements.first();


    return (
        <section className="sensor humidity">

            <h1>{data.name}</h1>

            <div>
                Current humidity: <Measurement value={current.value} unit={current.unit} />
            </div>

            <em>Number of measurements: {measurements.count()}</em>

        </section>
    );
}

export default HumiditySensor;
