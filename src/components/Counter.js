import React from 'react';

export default class Counter extends React.Component {
    render() {
        return (
            <div className="mega-counter">
                {this.props.count}
            </div>
        );
    }
};
