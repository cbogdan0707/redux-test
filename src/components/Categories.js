import React from "react";
import { connect } from "react-redux";

import { filterProductByCategory } from "../actions";

export const Categories = ({
  categories,
  activeCategory,
  filterProductByCategory,
  products
}) => {
  return categories.map(category => {
    const activeClass = `item ${
      activeCategory === category.id ? "active" : ""
    }`;
    return (
      <div
        className={activeClass}
        key={category.id}
        onClick={() => filterProductByCategory(products, category.id)}
      >
        {category.title}
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    activeCategory: state.productsByCategory.categoryId,
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { filterProductByCategory }
)(Categories);
