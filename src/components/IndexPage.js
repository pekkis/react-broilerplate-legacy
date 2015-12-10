import React from 'react';
import Measurement from './Measurement';
import HumiditySensor from './HumiditySensor';

import uuid from 'node-uuid';
import moment from 'moment';
import { List } from 'immutable';


const IndexPage = props => {

    const { sensors } = props;

    return (

        <section>
            {sensors.map(sensor =>
                <HumiditySensor key={sensor.id} data={sensor} />
            )}
        </section>
    );
};

export default IndexPage;
