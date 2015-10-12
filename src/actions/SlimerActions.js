export const ADD_SLIMER = 'ADD_SLIMER';
export const REQUEST_SLIMERS = 'REQUEST_SLIMERS';
export const RECEIVE_SLIMERS = 'RECEIVE_SLIMERS';

export function addSlimer(name, ectoplasmStrength) {

    return {
        type: ADD_SLIMER,
        payload: {
            name: name,
            ectoplasm_strength: ectoplasmStrength
        }
    };
}

export function fetchSlimers() {

    return function(dispatch) {

        setTimeout(function() {

            dispatch({
                type: RECEIVE_SLIMERS,
                payload: [
                    {
                        name: 'Pekkis',
                        ectoplasm_strength: -1000,
                    },
                    {
                        name: 'Tohtori Vesala',
                        ectoplasm_strength: 666666,
                    }
                ]
            });
        }, 5000);
    }

}
