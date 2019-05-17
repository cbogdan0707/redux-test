export default (state = [], action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      return action.filteredList;
    case "INPUT_FILTER_PRODUCTS":
      return {
        ...state,
        inputFilteredProducts: action.inputFilteredProducts,
        emptyResults: action.inputFilteredProducts.length,
        inputValue: action.inputValue
      };
    default:
      return state;
  }
};
