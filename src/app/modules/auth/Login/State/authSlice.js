import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    email: null,
    password: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log('setUser action.payload', action.payload);
      state.user = action.payload;
      state.error = null;
    },
    setCredentials: (state, action) => {
      console.log('action.payload', action.payload);
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    signOut: state => {
      state.user = null;
      state.email = null;
      state.password = null;
      state.error = null;
    },
  },
});

export const {setUser, setCredentials, setError, clearError, signOut} =
  authSlice.actions;
export default authSlice.reducer;
