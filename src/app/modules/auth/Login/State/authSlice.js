// import {createSlice} from '@reduxjs/toolkit';

// import {createAsyncThunk} from '@reduxjs/toolkit';

// export const userSignInAccount = createAsyncThunk(
//   'signin',
//   async (data, thunkAPI) => {
//     try {
//       const response = auth()
//         .signInWithEmailAndPassword(data)
//         .then(() => {
//           console.log('User account created & signed in!');
//           navigation.navigate('ContactsList');
//         });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );

// export const LoginStoredDataSlicer = createSlice({
//   name: 'login',
//   initialState: {
//     loginSuccess: false,
//     error: '',
//     userName: 'Magdi',
//     Password: '',
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(userSignInAccount.pending, (state, action) => {
//       state.loginSuccess = false;
//     }),
//       builder.addCase(userSignInAccount.fulfilled, (state, action) => {
//         console.log('====================================');
//         console.log('userSignInAccount.fulfilled,', action);
//         console.log('====================================');
//         state.loginSuccess = action.payload.success;
//         state.loginUserToken = action.payload.data.token;
//         state.userData = action.payload.data.userData;
//         state.loginError = '';
//       }),
//       builder.addCase(userSignInAccount.rejected, (state, action) => {
//         state.loginSuccess = false;
//         state.loginError = action.payload;
//       });
//   },
// });

// export const {} = LoginStoredDataSlicer.actions;
// export default LoginStoredDataSlicer.reducer;

// authSlice.js
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
