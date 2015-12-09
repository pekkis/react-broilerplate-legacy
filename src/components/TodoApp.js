import React from 'react';

export default class TodoApp extends React.Component {

    render() {

        return (
            <div>
                <h1>Todo Application</h1>

                <footer />

                <menu />

                <content />


                {this.props.children}

            </div>
        );
    }

    componentDidMount() {
        const { receiveTodos } = this.props;
        receiveTodos();
    }
}
