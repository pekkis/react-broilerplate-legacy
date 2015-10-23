import { Map, List } from 'immutable';
import { ADD_TODO, RECEIVE_TODOS, MARK_TODO } from '../actions/TodoActions';

const defaultState = Map({
    todos: List()
});

export default function(state = defaultState, action) {

    switch(action.type) {

        case MARK_TODO:

            const index = state.get('todos')
                .findIndex(todo => todo.id == action.payload);

            return state.updateIn(
                [
                    'todos',
                    index
                ],
                todo => ({
                    ...todo,
                    done: (!todo.done)
                })
            );
            break;

        case ADD_TODO:
            return state.update(
                'todos',
                todos => todos.push(action.payload)
            );
            break;

        case RECEIVE_TODOS:
            return state.update(
                'todos',
                todos => todos.concat(action.payload)
            );
            break;

        default:
            return state;

    }
}
