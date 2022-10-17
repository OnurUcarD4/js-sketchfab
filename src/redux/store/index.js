import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "redux/addNewBrand";

export default configureStore({
  reducer: { brand: brandReducer },
});
