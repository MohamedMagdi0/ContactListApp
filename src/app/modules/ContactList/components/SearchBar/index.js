import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const SearchBar = ({onChangeText, placeholder, value}) => {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.searchBar}
        value={value}
      />
    </View>
  );
};

export default SearchBar;
