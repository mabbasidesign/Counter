import React, { Component } from 'react';

class Counter extends Component {

     getClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0)? "warning": "primary";
        return classes;
    }

    fromCount(){
        const { value } = this.props.counter;
        return (value === 0)? "Zero": value;
    }

    render() {
        return (
            <div className="row container">
                <div className="col-1">
                    <span className={this.getClasses()}> {this.fromCount()} </span>
                </div>
                <div className="col">
                    <button className="btn btn-success m-2" onClick={ () => this.props.onIncrement(this.props.counter) }>+</button>
                    <button className="btn btn-primary"onClick={ () => this.props.onDecrement(this.props.counter)}>-</button>
                    <button className="btn btn-danger m-2 btn-sm" onClick={ () => this.props.onDelete(this.props.counter.id) }>Delete</button>
                </div>
            </div>
         );
    }
}
 
export default Counter;