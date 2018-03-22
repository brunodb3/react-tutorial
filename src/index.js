// index.js
//  - Entry point for starting the ReactJS application
// -------------------------------------------------------------------------------------------------

// Importing modules
import React from 'react';
import ReactDOM from 'react-dom';

// Importing custom modules and components
import './index.css';
import AppRouting from './app-routing';
import registerServiceWorker from './registerServiceWorker';

// Rendering the app on element with ID 'root'
ReactDOM.render(<AppRouting />, document.getElementById('root'));

// Registering the service worker to serve assets from local cache
registerServiceWorker();
