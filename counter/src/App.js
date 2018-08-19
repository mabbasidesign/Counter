import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {

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
    counters[index].value--;
    this.setState({counters});
}

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length } />
        <main className="container">
          <Counters
          counter={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
