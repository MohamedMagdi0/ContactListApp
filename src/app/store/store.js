import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import contactsReducer from '../modules/ContactList/State/ContactsSlice';
import authReducer from '../modules/auth/Login/State/authSlice';

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
  },
});
