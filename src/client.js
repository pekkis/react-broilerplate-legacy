import './client.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'immutable';
import classnames from 'classnames';

class TodoApp extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: List.of(
                {
                    id: 1,
                    todo: 'Hanki 100 litraa kuningasvettä',
                    done: true,
                },
                {
                    id: 2,
                    todo: 'Osta teollisia puutarhanhoitovälineitä',
                    done: true,
                },
                {
                    id: 3,
                    todo: 'Paloittele "liha"',
                    done: true,
                },
                {
                    id: 4,
                    todo: 'Kippaa happo Vantaajokeen',
                    done: false,
                },
                {
                    id: 5,
                    todo: 'Pese kylppäri HYVIN',
                    done: false,
                },
                {
                    id: 6,
                    todo: 'Palauta puutarhanhoitovehkeet 2 vko kuluessa',
                    done: false,
                }
            )
        }
    }

    render() {
        const { todos } = this.state;
        return (
            <TodoList todos={todos} />
        );
    }
};

const TodoList = (props) => {

    const { todos } = props;

    return (
        <ul>
            {todos.map(todo =>
                <Todo key={todo.id} todo={todo} />
            )}
        </ul>
    );
};

const Todo = (props) => {

    const { todo } = props;

    const classes = classnames(
        'todo',
        { done: todo.done }
    );

    return (
        <li className={classes}>
            {todo.todo}
        </li>
    );
};


ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
