import React from 'react';
import { List } from 'immutable';
import TodoList from './TodoList';

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
                    todo: 'Liota palat',
                    done: true,
                },
                {
                    id: 5,
                    todo: 'Kippaa happo Vantaajokeen',
                    done: false,
                },
                {
                    id: 6,
                    todo: 'Pese kylppäri HYVIN',
                    done: false,
                },
                {
                    id: 7,
                    todo: 'Palauta puutarhanhoitovehkeet 2 vko kuluessa',
                    done: false,
                }
            )
        }
    }

    render() {
        const { todos } = this.state;

        return (

            <section>

                <h1>To Do</h1>

                <TodoList todos={todos} />

            </section>
        );
    }
};

export default TodoApp;
