import React from 'react';
import classnames from 'classnames';

export default class TodoForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const { addTodo } = this.props;
        addTodo(this.refs.todo.value);
    }

    render() {

        const { todo } = this.props;

        return (
            <form onSubmit={::this.handleSubmit}>
                <input ref="todo" />
                <button type="submit">Tallenna</button>
            </form>
        );
    }
};
