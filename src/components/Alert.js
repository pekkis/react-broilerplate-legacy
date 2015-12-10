import React from 'react';
import cx from 'classnames';
import Icon from 'react-fa';

const Alert = props => {

    const { alert, clearAlert } = props;

    const classes = cx('alert');

    return (
        <div className={classes}>
            <div>
                <Icon size="lg" name="warning" /> {alert.text}
            </div>
            <button onClick={clearAlert.bind(null, alert.id)}>Got this!</button>
        </div>
    );
}

export default Alert;
