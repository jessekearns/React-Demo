import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DogListing from './DogListing'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DogListing />, document.getElementById('root'));
registerServiceWorker();
