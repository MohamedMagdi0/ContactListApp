import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ContactsList from '../modules/ContactList/pages/ContactsList';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      initialRouteName="LOGIN"
      screenOptions={{headerShown: false}}>
      <Stack.Navigator>
        <Stack.Screen
          name={'ContactsList'}
          component={ContactsList}
          options={{title: 'ContactsList', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
