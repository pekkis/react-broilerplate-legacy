import React from 'react';
import HelloWorld from './HelloWorld';
import Counterizer from './Counterizer';
import Counter from './Counter';

export default React.createClass({

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

