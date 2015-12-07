import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onRemove, onToggle }) =>
    <div>
        <h2>{todos.count()} todos in my list</h2>

        <ul>
            {todos
                .map((todo, i) =>
                    <Todo
                        key={i}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        todo={todo}
                    />
                )
            }
        </ul>
    </div>

export default TodoList;
