import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 1 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
     }

     handleReset = () => {
         const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
         });

         this.setState({counters});
     }
    
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        // counters[0] = {...counter};
        // counters[0].value++;
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    render() { 
        return ( 
            <div>
                <button className="btn btn-default" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map( c =>
                <Counter
                counter={c}
                value={c.value}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete} />
                )}
            </div>
         );
    }
}
 
export default Counters;