import React from 'react';
import classnames from 'classnames';

const Todo = (props) => {

    const { todo } = props;

    const classes = classnames(
        'todo',
        { done: todo.done }
    );

    return (
        <li className={classes}>
            {todo.todo}
        </li>
    );
};

export default Todo;
