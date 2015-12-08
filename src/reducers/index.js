import { List, Map } from 'immutable';
import uuid from 'node-uuid';

const defaultState = Map({
    todos: List.of(
        {
            text: 'Get 100 litres of battery acid',
            done: true
        },
        {
            text: 'Acquire gardening tools',
            done: false
        },
        {
            text: 'Carve up the "meat"',
            done: true
        }
    ).map(todo => {
        return {
            ...todo,
            id: uuid.v4()
        };
    })
});

export default function(state = defaultState) {
    return state;
};
