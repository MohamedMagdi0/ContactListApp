import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';

import Contacts from 'react-native-contacts';
import Contact from '../../components/SingleContact';
import {getContacts} from '../../State/ContactsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useContacts} from '../../../../hooks/useContacts';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import SelectedContact from '../../components/SelectedContact';
import SelectedList from '../../components/SelectedList';

const FavoriteContacts = ({navigation}) => {
  // const {AllContacts} = useContacts();
  const AllContacts = useSelector(state => state.contacts.contacts);

  const SelectedContacts = useSelector(
    state => state.contacts.selectedContacts,
  );
  // const [contacts, setContacts] = useState([]);

  // const dispatch = useDispatch();

  // const contacts = useSelector(state => state.Contacts.contacts);
  // console.log('====================================');
  // console.log(contacts);
  // console.log('====================================');
  console.log('SelectedContacts', SelectedContacts);
  const openContact = contact => {
    console.log(contact);
    Linking.openURL(`tel:${contact?.phoneNumbers[0]?.number}`);
  };
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    if (!item) {
      <ActivityIndicator />;
    }

    return <Contact contact={item} onPress={() => openContact(item)} />;
  };
  return (
    <>
      <View style={styles.header}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('ContactsList')}>
          Back
        </Text>
        <View style={styles.AddParticipant}>
          {/* <Text style={styles.headerText}>Add Participants</Text> */}
          <Text style={styles.headerText}>
            {SelectedContacts?.length} /{AllContacts?.length}
          </Text>
        </View>

        <Text
          style={styles.text}
          onPress={() => navigation.navigate('FavoriteContacts')}></Text>
      </View>
      {/* <SearchBar
        onChangeText={text => console.log(text)}
        placeholder="Search"
      /> */}
      {/* <View style={styles.list}>
        <SelectedContact />
      </View> */}
      {/* <SelectedList /> */}
      <Text style={styles.titleText}>Favorites Contacts</Text>
      {SelectedContacts.length == 0 ? (
        <View style={styles.NoContent}>
          <Text style={styles.NoContentText}> No Favorites Contacts!</Text>
        </View>
      ) : (
        <FlatList
          data={SelectedContacts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
      )}
    </>
  );
};

export default FavoriteContacts;
