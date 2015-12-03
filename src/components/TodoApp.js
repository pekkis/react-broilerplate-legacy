import React from 'react';
import { List } from 'immutable';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { todos, todoActions } = this.props;

        return (

            <section>

                <h1>
                    <img src={require('../images/top-secret.png')} />
                </h1>

                <TodoList markTodo={todoActions.markTodo} todos={todos} />
                <TodoForm addTodo={todoActions.addTodo} />

            </section>
        );
    }

    componentDidMount() {
        const { todoActions } = this.props;

        // this would be like fetch them from the server
        todoActions.fetchTodos();
    }
};

export default TodoApp;
