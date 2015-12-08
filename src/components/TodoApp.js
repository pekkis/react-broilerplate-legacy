import React from 'react';
import todos from '../todos';
import TodoList from './TodoList';
import { List } from 'immutable';
import TodoForm from './TodoForm';

export default class TodoApp extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: List()
        };
    }

    render() {

        const { todos } = this.state;

        return (
            <div>
                <TodoList
                    onToggle={this.toggleTodo.bind(this)}
                    onRemove={this.removeTodo.bind(this)}
                    todos={todos.sortBy(todo => todo.text).sortBy(todo => todo.done)}
                />
                <TodoForm onAdd={this.addTodo.bind(this)} />
            </div>
        );
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                todos: todos
            });
        }, 500);

    }

    removeTodo(id) {
        const { todos } = this.state;
        this.setState({
            todos: todos.remove(
                todos.findIndex(t => t.id === id)
            )
        });
    }

    toggleTodo(id) {
        const { todos } = this.state;
        this.setState({
            todos: todos.update(
                todos.findIndex(t => t.id === id),
                todo => {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
            )
        });
    }

    addTodo(todo) {
        this.setState({
            todos: this.state.todos.push(todo)
        });
    }

}
