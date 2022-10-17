import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const BrandSlice = createSlice({
  name: "brand",
  initialState: {
    brandData: [],
    selectedBrand: {},
  },
  reducers: {
    add: (state, action) => {
      const newItem = { key: uuidv4(), title: action.payload };
      state.brandData.push(newItem);
    },
    remove: (state, action) => {
      state.brandData = state.brandData.filter((e) => e.key !== action.payload);
    },
    selectBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
    update: (state, action) => {
      // state.brandData.map((e) => {
      //   if (e.key === state.selectedBrand.key) e.title = action.payload;
      // });
      const dataIndex = state.brandData.findIndex(
        (e) => e.key === state.selectedBrand.key
      );
      state.brandData[dataIndex].title = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, selectBrand, update } = BrandSlice.actions;

export default BrandSlice.reducer;
