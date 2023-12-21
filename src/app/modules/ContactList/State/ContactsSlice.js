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
      console.log('====================================');
      console.log('action.payload', action.payload);
      console.log('====================================');
    },
    selectContact: (state, action) => {
      state.selectedContacts.push(action.payload);
      console.log('selectContact action.payload', action.payload);
    },
    deselectContact: (state, action) => {
      console.log('====================================');
      console.log(
        'deselectContact action.payload.recordID,',
        action.payload.recordID,
      );
      console.log('====================================');
      state.selectedContacts = state.selectedContacts.filter(
        contact => contact?.recordID !== action.payload.recordID,
      );
    },
  },
});

export const {setContacts, selectContact, deselectContact} =
  contactsSlice.actions;
export default contactsSlice.reducer;
