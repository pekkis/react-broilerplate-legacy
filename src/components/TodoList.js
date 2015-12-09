import React from 'react';
import Todo from './Todo';

const categoryNames = [
    'TODO',
    'DOING',
    'DONE'
];


const TodoList = ({ todos, onRemove, onToggle, category, onMove }) => {

    const filtered = todos.filter(todo => todo.category === category);

    return (
        <td>
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
        </td>
    )

}

export default TodoList;
