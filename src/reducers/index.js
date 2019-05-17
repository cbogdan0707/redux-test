import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import productsByCategoryReducer from "./productsByCategoryReducer";
import activeProductsReducer from "./activeProductsReducer";

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  productsByCategory: productsByCategoryReducer,
  activeProducts: activeProductsReducer
});
