import React from 'react';
import uuid from 'node-uuid';

import styles from './TodoForm.pcss';

export default class TodoForm extends React.Component {

    render() {

        return (
            <div className={styles.root}>
                <form onSubmit={this.onSubmit.bind(this)}>

                    <label>Got something to do?</label>
                    <input ref="text" type="text" placeholder="What u gonna todo?" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );

    }

    onSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: uuid.v4(),
            text: this.refs.text.value,
            category: 0,
        };

        this.refs.text.value = '';

        this.props.onAdd(newTodo);
    }


}
