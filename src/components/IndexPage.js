import React from 'react';
import TodoForm from './TodoForm';
import TodoLists from './TodoLists';

const IndexPage = props => {

    const { saveTodos, addTodo, isChanged, todos, toggleTodo, removeTodo, moveTodo } = props;

    return (

        <section>
            <TodoLists todos={todos} onToggle={toggleTodo} onRemove={removeTodo} onMove={moveTodo} />

            <TodoForm onAdd={addTodo} />

            <button onClick={saveTodos.bind(null, todos)} disabled={!isChanged}>Save</button>
        </section>
    );
};

export default IndexPage;
