import React from 'react';

export default class SlimerApp extends React.Component {

    render() {

        return (

            <section>

                <h1>Ektoplasmaa</h1>

                {this.props.children}

            </section>
        );
    }
};
