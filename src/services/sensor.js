import axios from 'axios';

import { default as Immutable, List, Map } from 'immutable';
import moment from 'moment';

export default {

    notify: id => {

        return axios
            .post('/api/notify/' + id)
            .then(true);
    },

    getSensors: () => {

        return axios
            .get('/api/sensor')
            .then(response => response.data)
            .then(raw => {
                const sensors = Map(raw)
                    .map(sensor => {
                        return {
                            ...sensor,
                            measurements: List(sensor.measurements).map(m => {
                                return {
                                    ...m,
                                    timestamp: moment(m.timestamp)
                                };
                            })
                        };
                    })
                return sensors;
            });
    },

    pollMeasurements: () => {
        return axios
            .get('/api/measurement')
            .then(response => {
                return List(response.data)
                    .map(measurement => {
                        return {
                            ...measurement,
                            timestamp: moment(measurement.timestamp)
                        };
                    });
            });
    }
};
