// home.test.js
//  - Test suite for home component
// -------------------------------------------------------------------------------------------------

// Importing modules
import React from 'react';
import ReactDOM from 'react-dom';

// Importing custom modules and components
import Home from './home';

// Testing the component's rendering
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
