import React from 'react';
import {FlatList, View, Text, ActivityIndicator, Linking} from 'react-native';

import Contact from '../../components/SingleContact';
import {useSelector} from 'react-redux';
import styles from './styles';

const FavoriteContacts = ({navigation}) => {
  const AllContacts = useSelector(state => state.contacts.contacts);

  const SelectedContacts = useSelector(
    state => state.contacts.selectedContacts,
  );

  const openContact = contact => {
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
          <Text style={styles.headerText}>
            {SelectedContacts?.length} /{AllContacts?.length}
          </Text>
        </View>

        <Text
          style={styles.text}
          onPress={() => navigation.navigate('FavoriteContacts')}></Text>
      </View>
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
