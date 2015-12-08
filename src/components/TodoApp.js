import React from 'react';
import TodoList from './TodoList';
import { List } from 'immutable';
import TodoForm from './TodoForm';

import axios from 'axios';

export default class TodoApp extends React.Component {

    render() {

        const { todos, addTodo, toggleTodo, removeTodo, saveTodos, isChanged } = this.props;

        return (
            <div>
                <TodoList
                    onToggle={toggleTodo}
                    onRemove={removeTodo}
                    todos={todos.sortBy(todo => todo.text).sortBy(todo => todo.done)}
                />
                <TodoForm onAdd={addTodo} />

                <button onClick={saveTodos.bind(null, todos)} disabled={!isChanged}>Save</button>

            </div>
        );
    }

    componentDidMount() {
        const { receiveTodos } = this.props;
        receiveTodos();
    }
}
