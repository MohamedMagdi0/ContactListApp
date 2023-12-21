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

import Contacts from 'react-native-contacts';
import Contact from '../../components/SingleContact';
import {getContacts} from '../../State/ContactsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useContacts} from '../../../../hooks/useContacts';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import SelectedContact from '../SelectedContact';

const SelectedList = () => {
  //   const {contacts, search, selectedContacts} = useContacts();

  const SelectedContacts = useSelector(
    state => state.contacts.selectedContacts,
  );
  // const [contacts, setContacts] = useState([]);

  // const dispatch = useDispatch();

  // const contacts = useSelector(state => state.Contacts.contacts);
  // console.log('====================================');
  // console.log(contacts);
  // console.log('====================================');

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    if (!item) {
      <ActivityIndicator />;
    }

    return <SelectedContact contact={item} />;
  };
  return (
    <View style={styles.SelectedList}>
      <FlatList
        horizontal
        data={SelectedContacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
      />
    </View>
  );
};

export default SelectedList;
