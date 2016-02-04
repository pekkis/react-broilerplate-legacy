import React from 'react';
import TodoList from './TodoList';
import { Range } from 'immutable';

import styles from './TodoLists.pcss';

const TodoLists = props => {

    const { onToggle, onRemove, onMove, todos } = props;

    return (
        <div className={styles.root}>
            {Range(0, 3).map(category =>
                <TodoList
                    key={category}
                    category={category}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    onMove={onMove}
                    todos={todos.sortBy(todo => todo.text)}
                />
            )}
        </div>
    );

};

export default TodoLists;
