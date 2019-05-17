import axios from "axios";

const baseUrl = "https://api.gousto.co.uk";

export const fetchCategories = () => dispatch => {
  return axios.get(`${baseUrl}/products/v2.0/categories`).then(response => {
    dispatch({
      type: "FETCH_CATEGORIES",
      payload: response.data.data
    });
  });
};

export const fetchProducts = () => dispatch => {
  return axios
    .get(
      `${baseUrl}/products/v2.0/products?includes[]=categories&image_sizes[]=365`
    )
    .then(response => {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: response.data.data
      });
    });
};

export const filterProductByCategory = (products, categoryId) => {
  let filteredProducts = [];
  if (products.length) {
    filteredProducts = products.filter(data => {
      return data.categories.filter(data => {
        return data.id === categoryId;
      }).length;
    });
  }
  return {
    type: "FILTER_PRODUCTS",
    filteredList: {
      filteredProducts,
      categoryId
    }
  };
};

export const onInputChange = (e, selectedProducts) => {
  let inputFilteredProducts;
  if (e.target.value.length) {
    inputFilteredProducts = selectedProducts.filter(
      product =>
        product.title.includes(e.target.value) ||
        product.description.includes(e.target.value)
    );
  } else {
    inputFilteredProducts = selectedProducts;
  }

  return {
    type: "INPUT_FILTER_PRODUCTS",
    inputFilteredProducts,
    inputValue: e.target.value
  };
};

export const onProductClick = id => {
  return {
    type: "CLICK_ON_PRODUCT",
    id
  };
};
