import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';

const Todo = props => {

    console.log(props);

    const { todo, onRemove, onToggle, onMove } = props;


    const classes = classnames(
        'todo',
        {
            done: todo.done
        }
    );

    return (
        <li className={classes}>

            <Link to={`/todo/${todo.id}`}>{todo.text}</Link>

            <button onClick={onToggle.bind(null, todo.id)}><Icon size={'2x'} spin={true} name="toggle-on" />Toggle</button>
            <button onClick={onRemove.bind(null, todo.id)}><Icon spin={true} name="remove" /></button>

            {todo.category !== 0 && <button onClick={onMove.bind(null, todo.id, -1)}><Icon spin={true} name="minus-circle" /></button>}
            {todo.category !== 2 && <button onClick={onMove.bind(null, todo.id, 1)}><Icon spin={true} name="plus-circle" /></button>}

        </li>
    );
};

export default Todo;
