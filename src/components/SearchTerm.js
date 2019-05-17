import React from "react";
import { connect } from "react-redux";

import { onInputChange } from "../actions";

export const SearchTerm = ({
  onInputChange,
  productsByCategory,
  allProducts,
  inputValue
}) => {
  if (productsByCategory) {
    return (
      <input
        type="text"
        value={inputValue || ""}
        onChange={e => onInputChange(e, productsByCategory)}
      />
    );
  }
  return (
    <input
      type="text"
      value={inputValue || ""}
      onChange={e => onInputChange(e, allProducts)}
    />
  );
};

const mapStateToProps = state => {
  return {
    productsByCategory: state.productsByCategory.filteredProducts,
    allProducts: state.products,
    inputValue: state.productsByCategory.inputValue
  };
};

export default connect(
  mapStateToProps,
  { onInputChange }
)(SearchTerm);
