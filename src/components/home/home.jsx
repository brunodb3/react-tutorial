// home.jsx
//  - Home component definition
// -------------------------------------------------------------------------------------------------

// Importing modules
import React, { Component } from 'react';

// Importing custom modules and components
import './home.css';

// Creating the component's class
class Home extends Component {
  constructor(props) {
    super(props);

    // Declaring the initial state of the component
    this.state = {
      name: 'Home component'
    };
  }

  render() {
    return (
      <div className="home">
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

// Exporting the component
export default Home;
