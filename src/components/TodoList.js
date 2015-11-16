import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {

    render() {

        const { todos, handleClick, handleRemove } = this.props;

        return (
            <ul>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleClick={handleClick}
                        handleRemove={handleRemove}
                    />
                )}
            </ul>
        );
    }
}
