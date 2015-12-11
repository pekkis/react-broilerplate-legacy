import React from 'react';

class Alerter extends React.Component {

    componentDidMount() {

        const { notifyAlert } = this.props;

        setInterval(() => {

            const { alerts } = this.props;
            const toBeNotified = alerts.filterNot(a => a.notified);
            toBeNotified.forEach(a => notifyAlert(a.id));

        }, 1000);

    }

    render() {
        return false;
    }

}

export default Alerter;
