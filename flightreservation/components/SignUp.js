import React from 'react';

import UserInfo from './UserInfo';
import AgreeItems from './AgreeItems';

import {View, Text} from 'react-native';
import SignUpButton from './SignUpButton';

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <UserInfo></UserInfo>
      <AgreeItems />
      <SignUpButton title="Sign Up" />
      <SignUpButton title="Sign Up with Google" />
    </View>
  );
};

export default SignUp;
