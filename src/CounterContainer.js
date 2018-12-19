import React, { Component }from 'react';
import Decrementor from './Decrementor';
import Incrementor from './Incrementor';
import CounterDisplay from './CounterDisplay';
//import CounterChild from './CounterChild

class CounterContainer extends Component{
    constructor(){  
        super(); // needed for constructor
        this.state= { current: 0 };// state 
    }
    //increment() {} alternative to doing fat arrow function
 
    increment = () => {
        this.setState(
            { current: this.state.current + 1 } //setting state ,cannot manipulate directly
        );
    }
    decrement = () => {
        this.setState(
            { current: this.state.current - 1 }
        );
    }
    render() {
        //<Decrementor decrease = {this.decrement.bind(this)}/> alternative way of calling function without fat arrow
        return(
            <div>
               <Decrementor decrease = {this.decrement}/>
               <CounterDisplay current ={this.state.current}/>
               <Incrementor increase = {this.increment}/>
            </div>
        );
        //Refactoring?
        //return(
            //<CounterChild
           //    <decrement = {this.decrement}/>
            //   <current ={this.state.current}/>
           //    <increment = {this.increment}/>
           // />
       // );
    }
}
export default CounterContainer;