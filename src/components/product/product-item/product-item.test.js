// product-item.test.js
//  - Test suite for product item component
// -------------------------------------------------------------------------------------------------

// Importing modules
import React from 'react';
import ReactDOM from 'react-dom';

// Importing custom modules and components
import ProductItem from './product-item';

// Testing the component's rendering
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ProductItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
