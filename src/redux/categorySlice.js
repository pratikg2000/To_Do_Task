// src/redux/categorySlice.js

import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [], // Array to hold all category objects
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    setCategoryLoading: state => {
      state.status = 'loading';
    },
    setCategoryError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    clearCategories: state => {
      state.categories = [];
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const {
  setCategories,
  setCategoryLoading,
  setCategoryError,
  clearCategories,
} = categorySlice.actions;

export default categorySlice.reducer;
