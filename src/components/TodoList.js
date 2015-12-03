import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, markTodo }) => {

    return (
        <ul>
            {todos.map(todo =>
                <Todo markTodo={markTodo} key={todo.id} todo={todo} />
            )}
        </ul>
    );

};

export default TodoList;
