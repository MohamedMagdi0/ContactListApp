import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Avatar from '../Avatar';
import {Linking} from 'react-native';
import colors from '../../../../../../public/themes/colors';
import {useDispatch} from 'react-redux';
import {selectContact} from '../../State/ContactsSlice';

const Contact = ({contact, onPress}) => {
  // console.log('contact', contact);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const openContact = contact => {
    console.log(contact);
    Linking.openURL(`tel:${contact?.phoneNumbers[0]?.number}`);

    // Contacts.openExistingContact(contact);
  };
  const handleContactSelect = contact => {
    dispatch(selectContact(contact));
  };

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
      {/* <Icon name="checkcircle" color={colors.primary} size={24} />

      <CheckBox
        checkedIcon={
          <Icon name="checkcircle" color={colors.primary} size={24} />
        }
        uncheckedIcon={<Icon name="checkcircleo" size={24} color="#D9D9D9" />}
        checked={checked}
        onPress={() => setChecked(!checked)}
      /> */}
      {/* <Button /> */}
    </TouchableOpacity>
  );
};
export default Contact;
