import React from 'react';
import classnames from 'classnames';

const Todo = props => {

    const { todo, onRemove, onToggle } = props;

    const classes = classnames(
        'todo',
        {
            done: todo.done
        }
    );

    return (
        <li className={classes}>
            <span onClick={onToggle.bind(null, todo.id)}>{todo.text}</span>
            <button onClick={onRemove.bind(null, todo.id)}>Remove</button>
        </li>
    );
};

export default Todo;
