import React from 'react';

export default class Home extends React.Component {

    render() {

        const { slimers } = this.props;

        return (
            <div>
            {slimers.map((slimer, k) => {
                return <div key={k}>{slimer.name} ({slimer.ectoplasm_strength})</div>
            })}
            </div>
        );
    }

    componentDidMount() {

        const { slimerActions } = this.props;

        slimerActions.fetchSlimers();

        slimerActions.addSlimer('Limis', 10000000);
        slimerActions.addSlimer('Niilo', 10);
    }

}
