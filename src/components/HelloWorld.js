import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
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
