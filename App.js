/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './src/app/store/store';
import {Provider} from 'react-redux';
import AuthNavigator from './src/app/navigation/AuthNavigator';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AuthNavigator />
      </Provider>
    </>
  );
};

export default App;
