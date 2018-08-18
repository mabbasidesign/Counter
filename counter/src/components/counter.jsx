import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
     }

     getClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0)? "warning": "primary";
        return classes;
    }

    fromCount(){
        const { value } = this.state;
        return (value === 0)? "Zero": value;
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }

    handleDecrement = () => {
        this.setState({ value: this.state.value - 1 })
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
                    <button className="btn btn-danger m-2 btn-sm" onClick={ () => this.props.onDelete(this.props.counter.id) }>Delete</button>
                </div>
            </div>
         );
    }
}
 
export default Counter;