// // useSignIn.js
// import {useMutation, useQueryClient} from 'react-query';
// import {auth} from '@react-native-firebase/auth';
// import {useDispatch} from 'react-redux';
// import {setUser, setError} from './authSlice';

// const signIn = async ({userName, password}) => {
//   try {
//     const userCredential = await auth().signInWithEmailAndPassword(
//       userName,
//       password,
//     );
//     return userCredential.user;
//   } catch (error) {
//     throw error;
//   }
// };

// const useSignIn = () => {
//   const dispatch = useDispatch();
//   const queryClient = useQueryClient();

//   return useMutation(signIn, {
//     onSuccess: data => {
//       dispatch(setUser(data));
//       queryClient.invalidateQueries('user'); // Optional: Invalidate user-related queries
//     },
//     onError: error => {
//       dispatch(setError(error));
//     },
//   });
// };

// export default useSignIn;
