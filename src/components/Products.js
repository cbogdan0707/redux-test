import React from "react";
import { connect } from "react-redux";

import { onProductClick } from "../actions";

const displayProducts = (productsList, activeProducts, onProductClick) => {
  return productsList.map(product => {
    const activeClass = `item ${
      activeProducts.includes(product.id) ? "active" : ""
    }`;
    return (
      <div
        className={activeClass}
        key={product.id}
        onClick={() => onProductClick(product.id)}
      >
        {product.title}
        <div>{activeProducts.includes(product.id) && product.description}</div>
      </div>
    );
  });
};

export const Products = ({
  activeProducts,
  onProductClick,
  productsByCategory,
  products,
  emptyResults,
  inputFilterProducts
}) => {
  if (emptyResults === 0) {
    return null;
  }
  return inputFilterProducts && inputFilterProducts.length
    ? displayProducts(inputFilterProducts, activeProducts, onProductClick)
    : productsByCategory && productsByCategory.length
    ? displayProducts(productsByCategory, activeProducts, onProductClick)
    : displayProducts(products, activeProducts, onProductClick);
};

const mapStateToProps = state => {
  return {
    activeProducts: state.activeProducts,
    productsByCategory: state.productsByCategory.filteredProducts,
    products: state.products,
    emptyResults: state.productsByCategory.emptyResults,
    inputFilterProducts: state.productsByCategory.inputFilteredProducts
  };
};

export default connect(
  mapStateToProps,
  { onProductClick }
)(Products);
