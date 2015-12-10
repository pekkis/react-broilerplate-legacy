import axios from 'axios';

import { default as Immutable, List } from 'immutable';
import moment from 'moment';

export default {

    getSensors: () => {

        return axios
            .get('/api/sensor')
            .then(response => response.data)
            .then(raw => {
                const sensors = List(raw)
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
