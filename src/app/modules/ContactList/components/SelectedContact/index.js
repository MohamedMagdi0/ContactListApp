import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Avatar from '../Avatar';
import {Linking} from 'react-native';
import styles from './styles';
import {deselectContact} from '../../State/ContactsSlice';
import {useDispatch} from 'react-redux';

const SelectedContact = ({contact}) => {
  const dispatch = useDispatch();

  const openContact = contact => {
    console.log(contact);
    Linking.openURL(`tel:${contact?.phoneNumbers[0]?.number}`);
  };
  const UnSelectContact = contact => {
    dispatch(deselectContact(contact));
  };
  return (
    <TouchableOpacity style={styles.contactCon}>
      <Avatar
        thumbnailPath={contact?.thumbnailPath}
        firstLetter={contact?.givenName[0]}
      />
      <View style={styles.contactDat}>
        <Text style={styles.name}>{contact?.givenName.substring(0, 7)}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => UnSelectContact(contact)}>
        <Text style={styles.xText}>x</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SelectedContact;
