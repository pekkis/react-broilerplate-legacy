import { List, Map } from 'immutable';
import uuid from 'node-uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, RECEIVE_TODOS, SAVE_TODOS } from '../actions/todo-actions';

const defaultState = Map({
    todos: List(),
    isChanged: false
});

export default function(state = defaultState, action) {

    console.log(action, 'äksön häppening');

    switch (action.type) {

        case RECEIVE_TODOS:
            return state.update('todos', todos => todos.concat(action.payload));
            break;

        case ADD_TODO:
            return state
                .update('todos', todos => todos.push(action.payload))
                .set('isChanged', true);
            break;

        case TOGGLE_TODO:
            return state
                .updateIn(
                    [
                        'todos',
                        state.get('todos').findIndex(t => t.id === action.payload)
                    ], todo => ({
                        ...todo,
                        done: !todo.done
                    })
                )
                .set('isChanged', true);
            break;

        case REMOVE_TODO:
            return state
                .deleteIn([
                    'todos',
                    state.get('todos').findIndex(t => t.id === action.payload)
                ])
                .set('isChanged', true);
            break;

        case SAVE_TODOS:
            return state.set('isChanged', false);

        default:
            return state;

    }
};
