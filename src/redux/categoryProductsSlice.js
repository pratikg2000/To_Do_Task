// src/redux/categoryProductsSlice.js

import {createSlice} from '@reduxjs/toolkit';

const categoryProductsSlice = createSlice({
  name: 'categoryProducts',
  initialState: {}, // Object where keys are category IDs and values are arrays of products
  reducers: {
    setCategoryProducts: (state, action) => {
      const {categoryId, products} = action.payload;
      state[categoryId] = products; // Store products under their categoryId
    },
    clearCategoryProducts: state => {
      // Clears all products from the state
      return {};
    },
    // You might add more reducers later, e.g., to add/remove a single product
  },
});

export const {setCategoryProducts, clearCategoryProducts} =
  categoryProductsSlice.actions;

export default categoryProductsSlice.reducer;
