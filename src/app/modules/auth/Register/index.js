import React from 'react';
import {useState} from 'react';
import RegisterComponent from '../../../sharedComponents/Signup';

const Register = ({navigation}) => {
  const [form, setForm] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    navigate(LOGIN);
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={false}
      error={false}
      loading={false}
      navigation={navigation}
    />
  );
};

export default Register;
