import React from 'react';

export default class TodoAddForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.refs.todo.value);
        this.refs.todo.value='';
    }

    render() {

        return (
            <form onSubmit={::this.handleSubmit}>
                <input ref="todo" placeholder="add todo" name="text" type="text" />
                <button type="submit">Add</button>
            </form>
        );
    }
}
