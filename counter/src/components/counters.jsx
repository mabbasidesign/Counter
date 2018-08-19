import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        return ( 
            <div>
                <button className="btn btn-default" onClick={this.props.onReset}>Reset</button>
                {this.props.counter.map( c =>
                <Counter
                counter={c}
                value={c.value}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}/>
                )}
            </div>
         );
    }
}

export default Counters;