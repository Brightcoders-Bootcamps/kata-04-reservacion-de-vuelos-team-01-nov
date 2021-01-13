import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UserInfo = () => {
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [passwordInput, setPasswordInput] = useState(false);
  return (
    <View>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: firstNameInput ? 'blue' : 'black',
          borderWidth: 1,
          marginBottom: 15,
        }}
        onChangeText={(value) => setFirstNameInput(value)}
      />
      <Text style={styles.label}>Email *</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: emailInput ? 'blue' : 'black',
          borderWidth: 1,
          marginBottom: 15,
        }}
        keyboardType="email-address"
        onChangeText={(value) => setEmailInput(value)}
      />
      <Text style={styles.label}>Password *</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: passwordInput ? 'blue' : 'black',
          borderWidth: 1,
          marginBottom: 15,
        }}
        secureTextEntry={true}
        onChangeText={(value) => setPasswordInput(value)}
      />
      <Text style={styles.textFeedback}>
        Use 8 or more characters with a mix of letter, numbers and symbols.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 7,
  },
  textFeedback: {
    color: 'gray',
  },
});

export default UserInfo;
