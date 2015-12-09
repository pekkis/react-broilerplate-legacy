import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const IndexPage = props => {

    const { todos, addTodo, toggleTodo, removeTodo, saveTodos, isChanged } = props;

    return (

        <section>

            <TodoList
                onToggle={toggleTodo}
                onRemove={removeTodo}
                todos={todos.sortBy(todo => todo.text).sortBy(todo => todo.done)}
            />
            <TodoForm onAdd={addTodo} />

            <button onClick={saveTodos.bind(null, todos)} disabled={!isChanged}>Save</button>
        </section>
    );
};

export default IndexPage;
