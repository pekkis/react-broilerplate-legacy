import React from 'react';
import Measurement from './Measurement';
import Alert from './Alert';
import cx from 'classnames';

const HumiditySensor = props => {

    const { data, alert, clearAlert } = props;

    const measurements = data.measurements.sort(m => m.timestamp);
    const current = measurements.first();

    const classes = cx(
        'sensor',
        'humidity',
    );

    return (
        <section className={classes}>

            <div>
                <h1>{data.name}</h1>
                <Measurement value={current.value} unit={current.unit} />
            </div>

            {alert && <Alert clearAlert={clearAlert} alert={alert} />}

        </section>
    );
}

export default HumiditySensor;
