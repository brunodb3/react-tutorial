// app-routing.jsx
//  - app routing definition
// -------------------------------------------------------------------------------------------------

// Importing modules
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Importing custom modules and components
import Home from './components/home/home';
import About from './components/about/about';
import ProductManager from './components/product/product-manager';

// Routing template
const AppRouting = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/manager">Product Manager</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/manager" component={ProductManager} />
    </div>
  </Router>
);

// Exporting the component
export default AppRouting;
