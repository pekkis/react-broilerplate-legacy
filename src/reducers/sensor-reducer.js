import { List, Map } from 'immutable';

import {
    RECEIVE_SENSORS,
    RECEIVE_MEASUREMENTS
} from '../actions/sensor-actions';

const defaultState = Map({
    sensors: List()
});

export default function(state = defaultState, action) {

    let groupedMeasurements;
    console.log(action, 'äksön häppening');

    switch (action.type) {

        case RECEIVE_SENSORS:
            return state.set('sensors', action.payload);
            break;

        case RECEIVE_MEASUREMENTS:

            groupedMeasurements = action.payload.groupBy(m => m.id);
            groupedMeasurements.forEach((measurements, id) => {
                state = state.updateIn(
                    [
                        'sensors',
                        state.get('sensors').findIndex(s => s.id === id)
                    ],
                    sensor => {
                        return {
                            ...sensor,
                            measurements: sensor.measurements.concat(measurements)
                        };
                    }
                )
            });

            return state;
            break;

        default:
            return state;

    }
};
