// product-manager.jsx
//  - ProductManager component definition
// -------------------------------------------------------------------------------------------------

// Importing modules
import React, { Component } from 'react';

// Importing custom modules and components
import './product-manager.css';
import ProductAdd from './product-add/product-add';
import ProductItem from './product-item/product-item';

// Creating a dataset of products
const products = [
  {
    price: 250,
    name: 'iPhone'
  },
  {
    price: 300,
    name: 'iPad'
  },
  {
    price: 350,
    name: 'MacBook'
  }
];

// Saving the dataset to localStorate (testing purposes ONLY)
localStorage.setItem('products', JSON.stringify(products));

// Creating the component's class
class ProductManager extends Component {
  constructor(props) {
    super(props);

    // Declaring the initial state of the component
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    // Binding 'this' scope to methods
    this.addProduct = this.addProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  // This fires right before the component mounts, ideal for AJAX requests for example
  componentWillMount() {
    // Getting products dataset
    const products = this.getProducts();

    // Loading the products dataset into component's state
    this.setState({ products });
  }

  /**
   * Gets the products dataset from localStorate (testing purposes ONLY)
   *
   * @memberOf ProductManager
   */
  getProducts() {
    return this.state.products;
  }

  /**
   * Deletes a product from the dataset
   *
   * @param {string} name - The name of the product to delete
   *
   * @memberOf ProductManager
   */
  deleteProduct(name) {
    // Getting products dataset
    const products = this.getProducts();

    // Filtering the products array (testing purposes ONLY)
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    // Loading the filtered products dataset into component's state
    this.setState({ products: filteredProducts });
  }

  /**
   * Adds a product to the dataset
   *
   * @param {string} name - New product name
   * @param {number} price - New product price
   *
   * @memberOf ProductManager
   */
  addProduct(name, price) {
    // Getting products dataset
    const products = this.getProducts();

    // Pushing a new product to the array
    products.push({ name, price });

    // Loading the new products dataset into component's state
    this.setState({ products });
  }

  /**
   * Sends the edit of a product
   *
   * @param {string} newName - New name for the product
   * @param {number} newPrice - New price for the product
   *
   * @memberOf ProductManager
   */
  editProduct(name, newName, newPrice) {
    let products = this.getProducts();

    // Editing the product via array.map
    products = products.map(product => {
      if (product.name === name) {
        product.name = newName;
        product.price = newPrice;
      }

      return product;
    });

    // Loading the new products dataset into component's state
    this.setState({ products });
  }

  render() {
    return (
      <div className="product-manager">
        <h1>Product Manager</h1>
        <ProductAdd addProduct={this.addProduct} />
        <hr />

        {this.state.products.map(product => {
          return (
            <ProductItem
              {...product}
              key={product.name}
              editProduct={this.editProduct}
              deleteProduct={this.deleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

// Exporting the component
export default ProductManager;
