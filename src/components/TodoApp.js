import React from 'react';

export default class TodoApp extends React.Component {

    render() {

        return (
            <div>
                <h1>
                    <img src={require('../images/top-secret.png')} />
                </h1>

                {this.props.children}

            </div>
        );
    }

    componentDidMount() {
        const { receiveTodos } = this.props;
        receiveTodos();
    }
}
