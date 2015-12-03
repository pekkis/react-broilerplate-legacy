import React from 'react';
import classnames from 'classnames';

const Todo = ({ todo, markTodo }) => {

    const classes = classnames(
        'todo',
        {
            done: todo.done,
        }
    );

    return (
        <li className={classes} onClick={markTodo.bind(null, todo.id)}>
            <span>{todo.todo}</span>
        </li>
    );
};

export default Todo;
