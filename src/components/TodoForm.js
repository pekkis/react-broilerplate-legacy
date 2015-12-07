import React from 'react';
import uuid from 'node-uuid';

export default class TodoForm extends React.Component {

    render() {

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input ref="text" type="text" placeholder="what u wanna todo?" />
                <button type="submit">Add</button>
            </form>
        );

    }

    onSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: uuid.v4(),
            text: this.refs.text.value,
            done: false
        };

        this.refs.text.value = '';

        this.props.onAdd(newTodo);
    }


}
