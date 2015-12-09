import React from 'react';

const TodoPage = props => {

    const { todos, params } = props;

    const currentTodo = todos.find(todo => todo.id === params.uuid);

    if (!currentTodo) {
        return (
            <div>Not found</div>
        );
    }

    return (
        <div>
            {currentTodo.text}
        </div>
    );
};

export default TodoPage;
