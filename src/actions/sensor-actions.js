import axios from 'axios';
import { List } from 'immutable';
import sensorService from '../services/sensor';

export const RECEIVE_SENSORS = 'RECEIVE_SENSORS';
export const RECEIVE_MEASUREMENTS = 'RECEIVE_MEASUREMENTS';

export function getSensors() {

    return function(dispatch) {

        sensorService.getSensors().then(sensors => {
            dispatch({
                type: RECEIVE_SENSORS,
                payload: sensors
            });
        });
    };

}

export function receiveMeasurements() {

    return function(dispatch) {

        todoService.pollMeasurements()
            .then(measurements => {
                dispatch({
                    type: RECEIVE_MEASUREMENTS,
                    payload: measurements
                });
            });

    };

}

