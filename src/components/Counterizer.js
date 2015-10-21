import React from 'react';

export default React.createClass({
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
