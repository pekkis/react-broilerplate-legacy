import React from 'react';
import Measurement from './Measurement';
import HumiditySensor from './HumiditySensor';

import uuid from 'node-uuid';
import moment from 'moment';
import { List } from 'immutable';


const IndexPage = props => {

    const { sensors, alerts, clearAlert } = props;

    console.log(alerts.toJS());

    return (

        <section>
            {sensors.toList().map(sensor => {
                const alert = alerts.filter(a => a.status === 'active').get(sensor.id);
                return (
                    <HumiditySensor clearAlert={clearAlert} key={sensor.id} data={sensor} alert={alert} />
                );
            })}
        </section>
    );
};

export default IndexPage;
