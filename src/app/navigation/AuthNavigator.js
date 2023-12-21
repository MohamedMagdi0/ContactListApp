import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../modules/auth/Login/index';
import ContactsList from '../modules/ContactList/pages/ContactsList';
import SplashScreen from '../modules/Splash';
import Register from '../modules/auth/Register';
import FavoriteContacts from '../modules/ContactList/pages/FavoriteContacts';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowSplash(false), 1000);
  }, [showSplash]);
  return (
    <NavigationContainer
      initialRouteName="LOGIN"
      screenOptions={{headerShown: false}}>
      <Stack.Navigator>
        {showSplash && (
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{title: 'REGISTER', headerShown: false}}
          />
        )}
        <Stack.Screen
          name={'LOGIN'}
          component={Login}
          options={{
            title: 'LOGIN',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ContactsList'}
          component={ContactsList}
          options={{title: 'ContactsList', headerShown: false}}
        />
        <Stack.Screen
          name={'REGISTER'}
          component={Register}
          options={{title: 'REGISTER', headerShown: false}}
        />
        <Stack.Screen
          name={'FavoriteContacts'}
          component={FavoriteContacts}
          options={{title: 'FavoriteContacts', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
