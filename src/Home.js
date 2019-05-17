import React, { Component } from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Categories from "./components/Categories";
import Products from "./components/Products";
import SearchTerm from "./components/SearchTerm";
import { fetchCategories, fetchProducts } from "./actions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <h1 className="title">Welcome to Gousto React Coding Test</h1>
        <div className="ui grid menu">
          <Categories />
        </div>
        <SearchTerm />
        <div className="ui list">
          <Products />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  null,
  {
    mapDispatchToProps,
    fetchCategories,
    fetchProducts
  }
)(Home);
