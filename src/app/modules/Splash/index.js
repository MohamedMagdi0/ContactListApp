import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.SplashScreenMainImageStyle}>
      <Text style={styles.text}>Welcome to Contact List App!</Text>
    </View>
  );
};

export default SplashScreen;
