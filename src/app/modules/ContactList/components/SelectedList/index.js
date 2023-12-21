import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';

import {useSelector} from 'react-redux';
import styles from './styles';
import SelectedContact from '../SelectedContact';

const SelectedList = () => {
  const SelectedContacts = useSelector(
    state => state.contacts.selectedContacts,
  );

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
