import { List, Map } from 'immutable';
import moment from 'moment';

import {
    RECEIVE_SENSORS,
    RECEIVE_MEASUREMENTS,
    CLEAR_ALERT
} from '../actions/sensor-actions';

const defaultState = Map({
    sensors: Map(),
    alerts: Map()
});

const handleAlerts = function(state) {
    const needsAlert = state.get('sensors').filter(sensor => {
        const latest = sensor.measurements.sortBy(m => -m.timestamp).first();
        return (latest.value >= 80);
    }).filterNot(s => {
        const found = state.get('alerts').get(s.id, false);
        if (found) {
            return (found.timestamp.unix() >= (moment().unix() - 60));
        }
        return false;
    });

    needsAlert.forEach(sensor => {
        state = state.update(
            'alerts',
            alerts => alerts.set(sensor.id, {
                id: sensor.id,
                timestamp: moment(),
                text: 'High humidity',
                status: 'active'
            })
        );
    });

    return state;
}

export default function(state = defaultState, action) {

    let groupedMeasurements;

    switch (action.type) {

        case CLEAR_ALERT:
            return state.updateIn(
                ['alerts', action.payload],
                alert => ({...alert, status: 'resolved', timestamp: moment()})
            );
            break;

        case RECEIVE_SENSORS:
            return handleAlerts(
                state.set('sensors', action.payload)
            )
            break;

        case RECEIVE_MEASUREMENTS:

            groupedMeasurements = action.payload.groupBy(m => m.id);
            groupedMeasurements.forEach((measurements, id) => {
                state = state.updateIn(
                    [
                        'sensors',
                        id
                    ],
                    sensor => {
                        return {
                            ...sensor,
                            measurements: sensor.measurements.concat(measurements)
                        };
                    }
                )
            });
            return handleAlerts(state);
            break;

        default:
            return state;

    }
};
