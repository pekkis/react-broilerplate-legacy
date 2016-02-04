import React from 'react';
import TodoForm from './TodoForm';
import TodoLists from './TodoLists';
import { receiveTodos } from '../actions/todo-actions';

class IndexPage extends React.Component {

    render() {

        const { saveTodos, addTodo, isChanged, todos, toggleTodo, removeTodo, moveTodo } = this.props;

        return (
            <section>
                <TodoLists todos={todos} onToggle={toggleTodo} onRemove={removeTodo} onMove={moveTodo} />

                <TodoForm onAdd={addTodo} />

                <button onClick={saveTodos.bind(null, todos)} disabled={!isChanged}>Save</button>
            </section>
        );
    }
};

/*
IndexPage.fetch = ({dispatch}) => {
    return dispatch(receiveTodos());
};
*/

export default IndexPage;
