// product-item.jsx
//  - ProductItem component definition
// -------------------------------------------------------------------------------------------------

// Importing modules
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Importing custom modules and components
import './product-item.css';

// Creating the component's class
class ProductItem extends Component {
  constructor(props) {
    super(props);

    // Declaring the initial state of the component
    this.state = {
      isEditing: false
    };

    // Binding 'this' scope to methods
    this.editSubmit = this.editSubmit.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  /**
   * Deletes a product from the dataset
   *
   * @memberOf ProductItem
   */
  deleteProduct() {
    // Destructuring 'this.props', the params passed to the component
    const { deleteProduct, name } = this.props;

    deleteProduct(name);
  }

  /**
   * Triggers editing of a product from the dataset
   *
   * @memberOf ProductItem
   */
  editProduct() {
    this.setState({ isEditing: true });
  }

  /**
   * Edits a product on the dataset
   *
   * @param {object} event - Event from the handler function
   *
   * @memberOf ProductItem
   */
  editSubmit(event) {
    event.preventDefault();

    // Editing the product
    this.props.editProduct(
      this.props.name,
      this.nameInput.value,
      parseInt(this.priceInput.value, 10)
    );

    // Clearing the fields
    this.nameInput.value = '';
    this.priceInput.value = '';
    this.setState({ isEditing: false });
  }

  render() {
    // Destructuring 'this.props', the params passed to the component
    const { name, price } = this.props;

    return (
      <div className="product-item">
        {this.state.isEditing ? (
          <form onSubmit={this.editSubmit}>
            <h3>Editing {name}</h3>
            <input
              type="text"
              placeholder="Name"
              defaultValue={name}
              ref={nameInput => (this.nameInput = nameInput)}
            />
            <input
              type="number"
              placeholder="Price"
              defaultValue={price}
              ref={priceInput => (this.priceInput = priceInput)}
            />
            <button>Save</button>
          </form>
        ) : (
          <div>
            <span>{name}</span>
            {' | '}
            <span>{price}</span>
            {' | '}
            <button onClick={this.editProduct}>Edit</button>
            {' | '}
            <button onClick={this.deleteProduct}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

// Creating the component's prop types
ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  editProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
};

// Exporting the component
export default ProductItem;
