import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log('➡️ loginSuccess reducer called with:', action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
    notificationType(state, action) {
      state.notificationType = action.payload;
    },
  },
});

export const {loginSuccess, logout, notificationType} = authSlice.actions;
export default authSlice.reducer;
