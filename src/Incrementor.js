import React, { Component }from 'react';


class Incrementor extends Component {
    render () {
        const {increase} = this.props;
        //const increase= this.props.increase; destructor
        return (
            <button onClick={increase}>
                ++
            </button>
        );
    }
}

export default Incrementor;