import axios from 'axios';
import { List } from 'immutable';
import sensorService from '../services/sensor';

export const RECEIVE_SENSORS = 'RECEIVE_SENSORS';
export const RECEIVE_MEASUREMENTS = 'RECEIVE_MEASUREMENTS';
export const CLEAR_ALERT = 'CLEAR_ALERT';
export const NOTIFY_ALERT = 'NOTIFY_ALERT';


export function getSensors() {

    return function(dispatch) {

        sensorService.getSensors().then(sensors => {

            dispatch({
                type: RECEIVE_SENSORS,
                payload: sensors
            });

            // Kludge!!!
            setInterval(function() {
                dispatch(pollMeasurements());
            }, 500);


        });
    };

}

export function clearAlert(id) {
    return {
        type: CLEAR_ALERT,
        payload: id
    };
}

export function notifyAlert(id) {

    return function(dispatch, getState) {

        sensorService.notify(id).then(ret => {
            dispatch({
                type: NOTIFY_ALERT,
                payload: id
            });
        });
    };
}

export function pollMeasurements() {

    return function(dispatch) {

        sensorService.pollMeasurements()
            .then(measurements => {
                dispatch({
                    type: RECEIVE_MEASUREMENTS,
                    payload: measurements
                });
            });

    };

}


