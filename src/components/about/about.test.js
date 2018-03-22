// about.test.js
//  - Test suite for about component
// -------------------------------------------------------------------------------------------------

// Importing modules
import React from 'react';
import ReactDOM from 'react-dom';

// Importing custom modules and components
import About from './about';

// Testing the component's rendering
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});
