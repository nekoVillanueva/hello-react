import React, { Component }from 'react';


class Decrementor extends Component {
    render () {
        const {decrease} = this.props;
        //const decrease= this.props.decrease; destructor
        return (
            <button onClick={decrease}>
                --
            </button>
        );
    }
}

export default Decrementor;
//another way of using function without class
//import React, from 'react';

    // const Decrementor = (props) => {
    //const {decrease}= props;
    // return (
    //   <button onClick={decrease}>
        //     --
        // </button>
    // );
    // }

//export default Decrementor;