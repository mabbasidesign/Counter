import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counters';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Counters from './components/counters';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
