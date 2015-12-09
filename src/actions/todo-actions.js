import axios from 'axios';
import { List } from 'immutable';
import todoService from '../services/todo-localhost';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const SAVE_TODOS = 'SAVE_TODOS';
export const MOVE_TODO = 'MOVE_TODO';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    };
}

export function moveTodo(id, direction) {

    return {
        type: MOVE_TODO,
        payload: {
            id: id,
            direction: direction
        }
    };
}



export function receiveTodos() {

    return function(dispatch) {

        todoService.get().then(todos => {
            dispatch({
                type: RECEIVE_TODOS,
                payload: List(todos)
            });
        });
    };

}

export function saveTodos(todos) {

    console.log(todos, 'saving my todos');

    return function(dispatch) {

        todoService.save(todos).then(() => {
            dispatch({
                type: SAVE_TODOS
            });
        });

    };

}

