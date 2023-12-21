import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import Message from '../common/message';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {signInWithEmailAndPassword} from '../../modules/auth/Login/State/authActions';
import {setError} from '../../modules/auth/Login/State/authSlice';

const LoginComponent = ({
  // error,
  form,
  justSignedUp,
  onChange,
  loading,
  onSubmit,
  navigation,
}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  console.log('useSelector(state => state.auth.error)', error);
  const handleSignIn = navigation => {
    try {
      if (email && password) {
        dispatch(signInWithEmailAndPassword(email, password, navigation));
      } else {
        dispatch(setError('error: invalid request'));
        <Message danger onDismiss message={`Invalid Credentials`} />;
        console.log('error');
      }
    } catch (error) {
      console.log({error});
      dispatch(setError('error: invalid request'));
      <Message danger onDismiss message={`Invalid Credentials`} />;
      console.log('error');
    }
  };

  const SignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Contacts List App!</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message={`Invalid Credentials`}
            />
          )}

          {error?.error && (
            <Message danger onDismiss message={`Invalid Credentials`} />
          )}

          <Input
            label="email"
            iconPosition="right"
            placeholder="Enter email"
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />

          <CustomButton
            disabled={loading}
            onPress={() => handleSignIn(navigation)}
            loading={loading}
            primary
            title="Login"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                SignOut();
                // navigation.navigate('REGISTER');
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
