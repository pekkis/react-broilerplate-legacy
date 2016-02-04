import React from 'react';

import styles from './App.pcss';

export default class App extends React.Component {

    render() {

        return (
            <div className={styles.root}>
                <h1>
                    <img src={require('../images/top-secret.png')} />
                </h1>

                {this.props.children}

            </div>
        );
    }
}
