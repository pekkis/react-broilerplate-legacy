import initialTodos from '../todos';
import uuid from 'node-uuid';

export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO = 'MARK_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid.v4(),
            todo: todo,
            done: false
        }
    };
}

export function markTodo(todoId) {
    return {
        type: MARK_TODO,
        payload: todoId
    };
}


export function fetchTodos() {

    return function(dispatch) {

        setTimeout(function() {

            dispatch({
                type: RECEIVE_TODOS,
                payload: initialTodos
            });
        }, 1000);
    }

}
