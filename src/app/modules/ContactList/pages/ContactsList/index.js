import React, {useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import Contact from '../../components/SingleContact';
import {
  deselectContact,
  selectContact,
  setContacts,
} from '../../State/ContactsSlice';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import SelectedList from '../../components/SelectedList';
import {signOut} from '../../../auth/Login/State/authActions';

const ContactsList = ({navigation}) => {
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
  const selectedContacts = useSelector(
    state => state.contacts.selectedContacts,
  );

  const SelectToggle = contact => {
    let contactExists = false;

    for (let i = 0; i < selectedContacts.length; i++) {
      if (
        selectedContacts[i]?.recordID?.toString() ===
        contact?.recordID?.toString()
      ) {
        contactExists = true;
        dispatch(deselectContact(contact));
        break;
      }
    }

    if (!contactExists) {
      dispatch(selectContact(contact));
    }
  };

  const search = text => {
    const phoneNumberRegex =
      /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === '' || text === null) {
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        dispatch(setContacts(contacts));
      });
    } else {
      Contacts.getContactsMatchingString(text).then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        dispatch(setContacts(contacts));
      });
    }
  };

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => (
    <Contact contact={item} onPress={() => SelectToggle(item)} />
  );

  const SignOut = navigation => {
    dispatch(signOut(navigation));
  };
  return (
    <>
      <View style={styles.header}>
        <Text
          onPress={() => {
            SignOut(navigation);
          }}
          style={styles.text}>
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
