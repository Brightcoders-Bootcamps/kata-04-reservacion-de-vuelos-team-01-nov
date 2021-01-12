import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserInfo = () => {
  return (
    <View>
      <Text>First Name</Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
      <Text>Email</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        keyboardType="email-address"
      />
      <Text>Password</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        secureTextEntry={true}
      />
      <Text>
        Use 8 or more characters with a mix of letter, numbers and symbols.
      </Text>
    </View>
  );
};

export default UserInfo;
