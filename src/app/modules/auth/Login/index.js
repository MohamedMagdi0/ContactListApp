import React from 'react';
import LoginComponent from '../../../sharedComponents/Login/index';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const {error} = useSelector(state => state?.auth);

  const dispatch = useDispatch();

  return (
    <LoginComponent error={error} loading={false} navigation={navigation} />
  );
};

export default Login;
