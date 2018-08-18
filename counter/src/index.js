import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
