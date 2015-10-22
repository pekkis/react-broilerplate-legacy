import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    const { todos } = props;

    return (
        <ul>
            {todos.map(todo =>
                <Todo key={todo.id} todo={todo} />
            )}
        </ul>
    );
};

export default TodoList;
