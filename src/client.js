import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
});

const HelloWorldApp = React.createClass({
    render: function() {
        const names = this.props.names;


        return (
            <div>
                <h1>Lusso</h1>

                {names.map(name =>
                    <HelloWorld name={name}/>
                )}
            </div>
        );
    }
});

ReactDOM.render(
    <HelloWorldApp names={['Tussi', 'Lussi']}/>,
    document.getElementById('app')
);
