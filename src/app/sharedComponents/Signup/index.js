// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
// import {LOGIN} from '../../constants/routeNames';
import Message from '../common/message';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
  navigation,
}) => {
  // const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <Container>
      <Text style={styles.text}>Welcome to Contact List App!</Text>

      <View>
        <Text style={styles.subTitle}>Please Register here</Text>
        {error?.error && (
          <Message retry danger retryFn={onSubmit} message={error?.error} />
        )}
        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors?.userName || error?.username?.[0]}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors?.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors?.lastName || error?.last_name?.[0]}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors?.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value});
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
            error={errors?.password || error?.password?.[0]}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton
            disabled={loading}
            // onPress={onSubmit}
            onPress={() => {
              navigation.navigate('LOGIN');
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
