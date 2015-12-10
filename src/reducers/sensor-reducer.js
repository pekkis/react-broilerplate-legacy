import { List, Map } from 'immutable';

import {
    RECEIVE_SENSORS,
    RECEIVE_MEASUREMENTS
} from '../actions/sensor-actions';

const defaultState = Map({
    sensors: List()
});

export default function(state = defaultState, action) {

    console.log(action, 'äksön häppening');

    switch (action.type) {

        case RECEIVE_SENSORS:
            return state.set('sensors', action.payload);
            break;

        default:
            return state;

    }
};
