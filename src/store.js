import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { List, Map } from 'immutable';
import uuid from 'node-uuid';

const initialState = Map(
    {
        todos: List(),
        error: false
    }
);

function todo(state = initialState, action) {

    switch(action.type) {

        case 'FETCH_TODOS_FAILED':
            return state.set('error', true);
            break;

        case 'FETCH_TODOS':
            return state
                .update(
                    'todos',
                    todos => todos.concat(action.payload)
                );
            break;

        case 'ADD_TODO':
            return state
                .update(
                    'todos',
                    todos => todos.push(action.payload)
                );
            break;

        case 'REMOVE_TODO':
            return state
                .deleteIn([
                    'todos',
                    state.get('todos').findIndex(t => t.id === action.payload)
                ]);
            break;

        case 'TOGGLE_TODO':
            return state.updateIn(
                ['todos', state.get('todos').findIndex(t => t.id === action.payload)],
                todo => ({...todo, done: !todo.done})
            );
            break;

    }



    return state;
}

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(todo);

export default store;
