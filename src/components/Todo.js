import React from 'react';
import cx from 'classnames';

const Todo = (props) => {

    const { todo, handleClick, handleRemove } = props;

    const classes = cx(
        'todo',
        {
            done: todo.done,
            undone: !todo.done,
        }
    );

    return (
        <li className={classes}>
            <span onClick={handleClick.bind(null, todo.id)}>{todo.text}</span>
            <button onClick={handleRemove.bind(null, todo.id)}>x</button>
        </li>
    );

};

export default Todo;
