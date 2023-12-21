import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {userSignInAccount} from '../modules/auth/Login/State/auth.actions';
import contactsReducer, {
  getContacts,
} from '../modules/ContactList/State/ContactsSlice';
import authReducer from '../modules/auth/Login/State/authSlice';

// const middleware = [...getDefaultMiddleware(), thunk];

export default store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: false,
      thunk,
    }),
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,

    // login: LoginStoredDataSlicer,

    // Contacts: getContacts,
    // auth: authReducer,
  },
});
