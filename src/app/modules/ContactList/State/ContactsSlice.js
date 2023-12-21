import {createSlice} from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    selectedContacts: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    selectContact: (state, action) => {
      state.selectedContacts.push(action.payload);
    },
    deselectContact: (state, action) => {
      state.selectedContacts = state.selectedContacts.filter(
        contact => contact?.recordID !== action.payload.recordID,
      );
    },
  },
});

export const {setContacts, selectContact, deselectContact} =
  contactsSlice.actions;
export default contactsSlice.reducer;
