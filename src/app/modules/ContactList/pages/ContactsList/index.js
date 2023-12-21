import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import auth from '@react-native-firebase/auth';

import Contacts from 'react-native-contacts';
import Contact from '../../components/SingleContact';
import {
  deselectContact,
  getContacts,
  selectContact,
  setContacts,
} from '../../State/ContactsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useContacts} from '../../../../hooks/useContacts';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import SelectedContact from '../../components/SelectedContact';
import SelectedList from '../../components/SelectedList';

const ContactsList = ({navigation}) => {
  // const {contacts, search, selectedContacts, AllContacts} = useContacts();
  // console.log('AllContacts', AllContacts);
  const dispatch = useDispatch();
  const getAllNumbers = contacts => {
    dispatch(setContacts(contacts));
  };
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

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Contacts.getAll().then(contacts => {
          dispatch(setContacts(contacts));
        });
      }
    }
  };
  useEffect(() => {
    getContacts();
  }, []);
  const AllContacts = useSelector(state => state.contacts.contacts);
  console.log({AllContacts});
  const selectedContacts = useSelector(
    state => state.contacts.selectedContacts,
  );
  // const handleContactSelect = contact => {
  //   dispatch(selectContact(contact));
  // };
  // const [contacts, setContacts] = useState([]);

  // const dispatch = useDispatch();

  // const contacts = useSelector(state => state.Contacts.contacts);
  // console.log('====================================');
  // console.log(contacts);
  // console.log('====================================');

  // const selectedContacts = useSelector(
  //   state => state.contacts.selectedContacts,
  // );

  // const SelectToggle = contact => {
  //   for (let i = 0; i < selectedContacts.length; i++) {
  //     if (
  //       selectedContacts[i]?.recordID?.toString() ==
  //       contact?.recordID?.toString()
  //     ) {
  //       console.log('in if ');
  //       dispatch(deselectContact(contact));
  //     } else {
  //       console.log('in else');

  //       dispatch(selectContact(contact));
  //     }
  //   }
  // };
  const SelectToggle = contact => {
    let contactExists = false;

    for (let i = 0; i < selectedContacts.length; i++) {
      if (
        selectedContacts[i]?.recordID?.toString() ===
        contact?.recordID?.toString()
      ) {
        console.log('Contact exists, deselecting...');
        contactExists = true;
        dispatch(deselectContact(contact));
        break; // Exit the loop once a match is found
      }
    }

    if (!contactExists) {
      console.log('Contact does not exist, selecting...');
      dispatch(selectContact(contact));
    }
  };

  const search = text => {
    const phoneNumberRegex =
      /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === '' || text === null) {
      // getContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        dispatch(setContacts(contacts)); // getAllNumbers(contacts);

        console.log('contacts', contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text).then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        dispatch(setContacts(contacts)); // getAllNumbers(contacts);

        console.log(' search contacts', contacts);
      });
    }
  };

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => (
    <Contact contact={item} onPress={() => SelectToggle(item)} />
  );

  const SignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate('LOGIN');
  };
  return (
    <>
      <View style={styles.header}>
        <Text onPress={SignOut} style={styles.text}>
          SignOut
        </Text>
        <View style={styles.AddParticipant}>
          <Text style={styles.headerText}>Add Participants</Text>
          <Text style={styles.SelectedNumber}>
            {selectedContacts?.length} /{AllContacts?.length}
          </Text>
        </View>

        <Text
          style={styles.text}
          onPress={() => navigation.navigate('FavoriteContacts')}>
          Next
        </Text>
      </View>
      <SearchBar onChangeText={text => search(text)} placeholder="Search" />
      {/* <View style={styles.list}>
        <SelectedContact />
      </View> */}
      <Text style={styles.titleText}>Contacts</Text>

      <SelectedList />
      <FlatList
        initialNumToRender={7}
        data={AllContacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
      />
    </>
  );
};

export default ContactsList;
