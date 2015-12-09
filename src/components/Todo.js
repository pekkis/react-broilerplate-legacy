import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

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

            <Link to={`/todo/${todo.id}`}>{todo.text}</Link>

            <button onClick={onToggle.bind(null, todo.id)}>Toggle</button>
            <button onClick={onRemove.bind(null, todo.id)}>Remove</button>
        </li>
    );
};

export default Todo;
