// product-add.jsx
//  - ProductAdd component definition
// -------------------------------------------------------------------------------------------------

// Importing modules
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Importing custom modules and components
import './product-add.css';

// Creating the component's class
class ProductAdd extends Component {
  constructor(props) {
    super(props);

    // Binding 'this' scope to methods
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Adds a product with given properties to the dataset
   *
   * @param {object} event - Event from the handler function
   *
   * @memberOf ProductAdd
   */
  onSubmit(event) {
    event.preventDefault();

    // Adding the product
    this.props.addProduct(
      this.nameInput.value,
      parseInt(this.priceInput.value, 10)
    );

    // Clearing the fields
    this.nameInput.value = '';
    this.priceInput.value = '';
  }

  render() {
    return (
      <form className="product-add" onSubmit={this.onSubmit}>
        <h3>Add product</h3>
        <input
          type="text"
          placeholder="Name"
          ref={nameInput => (this.nameInput = nameInput)}
        />
        <input
          type="number"
          placeholder="Price"
          ref={priceInput => (this.priceInput = priceInput)}
        />
        <button>Add</button>
      </form>
    );
  }
}

// Creating the component's prop types
ProductAdd.propTypes = {
  addProduct: PropTypes.func.isRequired
};

// Exporting the component
export default ProductAdd;
