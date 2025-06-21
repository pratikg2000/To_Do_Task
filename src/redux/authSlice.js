import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    clearError: state => {
      state.error = null;
    },
  },
});

export const {loginStart, loginSuccess, loginFailure, logout, clearError} =
  authSlice.actions;
export default authSlice.reducer;
