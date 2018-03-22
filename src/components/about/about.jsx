// about.jsx
//  - About component definition
// -------------------------------------------------------------------------------------------------

// Importing modules
import React, { Component } from 'react';

// Importing custom modules and components
import './about.css';

// Creating the component's class
class About extends Component {
  constructor(props) {
    super(props);

    // Declaring the initial state of the component
    this.state = {
      name: 'About component'
    };
  }

  render() {
    return (
      <div className="about">
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

// Exporting the component
export default About;
