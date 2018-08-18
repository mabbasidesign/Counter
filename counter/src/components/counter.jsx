import React, { Component } from 'react';

class Counter extends Component {
    state = {

        count: 0,
     }

     getClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0)? "warning": "primary";
        return classes;
    }

    fromCount(){
        const { count } = this.state;
        return (count === 0)? "Zero": count;
    }

    handleIncrement = () =>{
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = () =>{
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div className="row container">
                <div className="col-1">
                    <span className={this.getClasses()}> {this.fromCount()} </span>
                </div>
                <div className="col">
                    <button className="btn btn-success m-2" onClick={ () => this.handleIncrement() }>+</button>
                    <button className="btn btn-primary"onClick={ () => this.handleDecrement()}>-</button>
                </div>
            </div>
         );
    }
}
 
export default Counter;