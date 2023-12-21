import auth from '@react-native-firebase/auth';
import {setUser, setCredentials, setError, clearError} from './authSlice';

export const signInWithEmailAndPassword =
  (email, password, navigation) => async dispatch => {
    try {
      dispatch(setCredentials({email, password}));
      console.log('-ay7aga');
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      dispatch(setUser(userCredential.user));
      dispatch(clearError());
      navigation.navigate('ContactsList');
    } catch (error) {
      console.log({error});
      dispatch(setError(error));
    }
  };

export const createUserWithEmailAndPassword =
  (email, password, navigation) => async dispatch => {
    try {
      dispatch(setCredentials({email, password}));
      console.log('-ay7aga');
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      dispatch(setUser(userCredential.user));
      dispatch(clearError());
      navigation.navigate('ContactsList');
    } catch (error) {
      console.log({error});
      dispatch(setError(error));
    }
  };

export const signOut = navigation => async dispatch => {
  try {
    console.log('-ay7aga');
    navigation.navigate('LOGIN');
    await auth().signOut();
    dispatch(clearError());
  } catch (error) {
    console.log({error});
    dispatch(setError(error));
  }
};
