import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Avatar from '../Avatar';

const Contact = ({contact, onPress}) => {
  return (
    <TouchableOpacity style={styles.contactCon} onPress={onPress}>
      <Avatar
        thumbnailPath={contact?.thumbnailPath}
        firstLetter={contact?.givenName[0]}
      />
      <View style={styles.contactDat}>
        <Text style={styles.name}>
          {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
          {contact?.familyName}
        </Text>
        <Text style={styles.phoneNumber}>
          {contact?.phoneNumbers[0]?.number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Contact;
