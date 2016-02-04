import React from 'react';
import Todo from './Todo';
import styles from './TodoList.pcss';
import cx from 'classnames';

const categoryNames = [
    'TODO',
    'DOING',
    'DONE'
];

const TodoList = ({ todos, onRemove, onToggle, category, onMove }) => {

    const filtered = todos.filter(todo => todo.category === category);

    const rootClasses = cx(
        styles.root
    );

    return (
        <div className={rootClasses}>
            <div className={styles.inner}>

            <h2>{filtered.count()} todos in category {categoryNames[category]}</h2>

            <ul>
                {filtered
                    .map((todo, i) =>
                        <Todo
                            key={i}
                            onToggle={onToggle}
                            onRemove={onRemove}
                            onMove={onMove}
                            todo={todo}
                        />
                    )
                }
            </ul>
            </div>
        </div>
    )

}

export default TodoList;
