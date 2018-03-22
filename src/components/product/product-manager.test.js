// product-manager.test.js
//  - Test suite for product manager component
// -------------------------------------------------------------------------------------------------

// Importing modules
import React from 'react';
import ReactDOM from 'react-dom';

// Importing custom modules and components
import ProductManager from './product-manager';

// Testing the component's rendering
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ProductManager />, div);
  ReactDOM.unmountComponentAtNode(div);
});
