import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Router, Route, Link, IndexRoute } from 'react-router';

function getTussit() {
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}

const HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                <Link to={`/hello/${this.props.name}`}>
                    Hello {this.props.name}
                </Link>
            </div>
        );
    }
});

const HelloWorldApp = React.createClass({

    getInitialState: function() {
        return {
            count: 0,
            name: 'Pekkis',
            names: []
        };
    },

    componentDidMount: function() {
        getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

    render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>Lusso</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter
                    }
                )}
            </div>
        );
    },

    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    }
});

const Counterizer = React.createClass({
    render: function() {
        const { count, name, onIncrementCounter } = this.props;

        return (
            <div className="tussi">
                {count}
                {name}

                <button
                    onClick={onIncrementCounter}>
                    MOAR!
                </button>
            </div>
        );
    }
});

class Counter extends React.Component {
    render() {
        return (
            <div className="mega-counter">
                {this.props.count}
            </div>
        );
    }
};

const Greeter = React.createClass({
    render: function() {
        const { name } = this.props.params;

        return (
            <h2>
                Helloooo {name}
            </h2>
        );
    }
});

const Index = React.createClass({

    render: function() {

        const { count, names, onIncrementCounter } = this.props;

        return (

            <div>

                {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                )}

                <Counterizer
                    {...this.props}
                />

                <Counter count={count}/>

            </div>
        );
    }

});

const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
