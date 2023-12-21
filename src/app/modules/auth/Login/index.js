import React, {useEffect, useState} from 'react';
import LoginComponent from '../../../sharedComponents/Login/index';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
// import {fetchProducts} from '../Timeline/State/ProductSlice';
import auth from '@react-native-firebase/auth';
import {signInWithEmailAndPassword} from './State/authActions';
import {setCredentials} from './State/authSlice';

const Login = ({navigation, route, options, back}) => {
  const [form, setForm] = useState({});
  // const [error, setError] = useState(false);

  const [justSignedUp, setJustSignedUp] = useState(false);
  // const {Phone, Password} = useSelector(state => state.login, shallowEqual);
  // const { loginError, loginSuccess, loginUserToken } = useSelector(state => state.loginData, shallowEqual)
  // const products = useSelector(state => state.Products.data);

  const {email, password, error} = useSelector(state => state?.auth);
  // const password = useSelector(state => state?.auth.password);
  // const error = useSelector(state => state.auth.error);

  // console.log({email, password});
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signInWithEmailAndPassword(email, password));
  };

  useEffect(() => {
    // dispatch(
    //   userSignInAccount({
    //     phone: Phone,
    //     password: Password,
    //     // deviceID: userDeviceID,
    //   }),
    // );
    // dispatch(fetchProducts());
    // console.log(' dispatch(fetchProducts());', products);
  }, []);

  const onSubmit = () => {
    console.log('form==> ', form);
    if (!form.userName || !form.password) {
      setError('Please enter a username and password');
    }

    if (form.userName && form.password) {
      auth()
        .signInWithEmailAndPassword(`${form.userName}`, `${form.password}`)
        .then(() => {
          console.log('User account created & signed in!');
          navigation.navigate('ContactsList');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            // setError(error);
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            // setError(error);
          }
          setError(error);
          console.error(error);
        });

      //   loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setCredentials({[name]: value});
  };

  return (
    <LoginComponent
      // onSubmit={handleSignIn}
      // onChange={onChange}
      // form={form}
      error={error}
      loading={false}
      navigation={navigation}
    />
  );
};

export default Login;
