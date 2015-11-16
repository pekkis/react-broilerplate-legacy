import uuid from 'node-uuid';
import { List } from 'immutable';
import axios from 'axios';

export function fetchTodos() {

    return function(dispatch, getState) {

        axios
            .get('http://diktaattoriporssi.com/api/dictator')
            .then(response => response.data)
            .then(dictators => {

                const todos = List(dictators)
                    .map(dictator => 'tapa ' + dictator.identity.displayName)
                    .map(text => ({ text: text, done: false, id: uuid.v4() }))

                dispatch({
                    type: 'FETCH_TODOS',
                    payload: todos
                });

            })
            .catch(e => {

                dispatch({
                    type: 'FETCH_TODOS_FAILED'
                });
            });

    };
}


export function addTodo(text) {

    const todo = {
        id: uuid.v4(),
        text: text,
        done: false
    };

    return {
        type: 'ADD_TODO',
        payload: todo
    };
}

export function removeTodo(todoId) {

    return {
        type: 'REMOVE_TODO',
        payload: todoId
    };
}

export function toggleTodo(todoId) {
    return {
        type: 'TOGGLE_TODO',
        payload: todoId
    };
}
