import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Avatar = ({firstLetter, thumbnailPath}) => {
  return (
    <View style={styles.imgCon}>
      <View style={styles.placeholder}>
        {thumbnailPath ? (
          <Image style={styles.logo} source={{uri: thumbnailPath}} />
        ) : (
          <Text style={styles.txt}>{firstLetter}</Text>
        )}
      </View>
    </View>
  );
};

export default Avatar;
