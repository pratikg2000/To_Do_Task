import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import categoryReducer from './categorySlice';
import categoryProductsReducer from './categoryProductsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    categoryProducts: categoryProductsReducer,
  },
});

export default store;
