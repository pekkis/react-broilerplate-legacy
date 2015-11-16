import React from 'react';
import { List } from 'immutable';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import uuid from 'node-uuid';

export default class TodoApp extends React.Component {

    componentDidMount() {
        this.props.todoActions.fetchTodos();
    };

    render() {

        const { error, todos, todoActions } = this.props;

        if (error) {
            return (
                <section>
                    MEGA ERRRORRRRRR!!!!!!
                </section>
            );
        }


        return (
            <section>

                <h1>Pekkiksen TODO</h1>

                <TodoList
                    handleClick={todoActions.toggleTodo}
                    handleRemove={todoActions.removeTodo}
                    todos={todos}
                />

                <TodoAddForm
                    handleAdd={todoActions.addTodo}
                />

            </section>
        );
    }
}
