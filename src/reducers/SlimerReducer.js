import { Map, List } from 'immutable';
import { ADD_SLIMER, RECEIVE_SLIMERS } from '../actions/SlimerActions';

const defaultState = Map({
    slimers: List()
});

export default function(state = defaultState, action) {

    switch(action.type) {

        case ADD_SLIMER:
            return state.update(
                'slimers',
                slimers => slimers.push(action.payload)
            );
            break;

        case RECEIVE_SLIMERS:
            return state.update(
                'slimers',
                slimers => slimers.concat(action.payload)
            );
            break;

        default:
            return state;

    }
}
