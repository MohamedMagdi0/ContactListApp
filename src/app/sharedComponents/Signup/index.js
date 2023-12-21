// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
// import {LOGIN} from '../../constants/routeNames';
import Message from '../common/message';
import {useDispatch, useSelector} from 'react-redux';
import {clearError, setError} from '../../modules/auth/Login/State/authSlice';
import {createUserWithEmailAndPassword} from '../../modules/auth/Login/State/authActions';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  // error,
  errors,
  navigation,
}) => {
  // const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const error = useSelector(state => state.auth.error);
  console.log('useSelector(state => state.auth.error)', error);

  const dispatch = useDispatch();
  const handleSignUp = navigation => {
    try {
      if (email && password && password === confirmPassword) {
        dispatch(createUserWithEmailAndPassword(email, password, navigation));
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
  return (
    <Container>
      <Text style={styles.text}>Welcome to Contact List App!</Text>

      <View>
        <Text style={styles.subTitle}>Please Register here</Text>
        {error && (
          <Message
            danger
            message={'error: invalid request'}
            onDismiss={() => {
              clearError();
            }}
          />
        )}
        <View style={styles.form}>
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors?.email || error?.email?.[0]}
            onChangeText={text => setEmail(text)}
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
            error={errors?.password || error?.password?.[0]}
            onChangeText={text => setPassword(text)}
          />
          <Input
            label="Confirm Password"
            placeholder="Enter Confirm Password"
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
            error={errors?.password || error?.password?.[0]}
            onChangeText={text => setConfirmPassword(text)}
          />
          <CustomButton
            disabled={loading}
            // onPress={onSubmit}
            onPress={() => {
              handleSignUp(navigation);
            }}
            loading={loading}
            primary
            title="Register"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LOGIN');
              }}>
              <Text style={styles.linkBtn}>Login Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
