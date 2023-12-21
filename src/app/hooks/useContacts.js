// hooks/useContacts.js
import {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts'; // Use the appropriate library
import {useDispatch, useSelector} from 'react-redux';
import {
  deselectContact,
  selectContact,
  setContacts,
} from '../modules/ContactList/State/ContactsSlice';

export const useContacts = () => {
  const selectedContacts = useSelector(
    state => state.contacts.selectedContacts,
  );

  const dispatch = useDispatch();

  const getAllNumbers = contacts => {
    dispatch(setContacts(contacts));
  };

  // const getSelections = contact => {
  //   if (selectedContacts.includes(contact)) {
  //     dispatch(deselectContact(contact));
  //   } else {
  //     dispatch(selectContact(contact));
  //   }
  // };

  const AllContacts = useSelector(state => state.contacts.contacts);
  const SelectedContacts = useSelector(
    state => state.contacts.selectedContacts,
  );

  console.log('====================================');
  console.log({SelectedContacts});
  console.log('====================================');

  const getContacts = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );
      console.log('00');
      console.log('granted', granted);
      console.log(
        'PermissionsAndroid.RESULTS.GRANTED',
        PermissionsAndroid.RESULTS.GRANTED,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log(
          'PermissionsAndroid.RESULTS.GRANTED',
          PermissionsAndroid.RESULTS.GRANTED,
        );
        Contacts.getAll().then(contacts => {
          // console.log({contacts});
          // setContacts(contacts);
          getAllNumbers(contacts);
        });
      }
    }
  };
  const search = text => {
    const phoneNumberRegex =
      /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === '' || text === null) {
      getContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        // setContacts(contacts);
        getAllNumbers(contacts);

        console.log('contacts', contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text).then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        // setContacts(contacts);
        getAllNumbers(contacts);

        console.log(' search contacts', contacts);
      });
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  const filteredContacts = AllContacts.filter(contact =>
    contact?.displayName?.toLowerCase().includes(search),
  );

  return {
    contacts: AllContacts,
  };
};
