import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const UserInfo = () => {
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [passwordInput, setPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={[styles.input, {borderColor: firstNameInput ? 'blue' : 'black'}]}
        onChangeText={(value) => setFirstNameInput(value)}
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>Email</Text>
        <Text> *</Text>
      </View>
      <TextInput
        style={[styles.input, {borderColor: emailInput ? 'blue' : 'black'}]}
        keyboardType="email-address"
        onChangeText={(value) => setEmailInput(value)}
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>Password</Text>
        <Text> *</Text>
      </View>
      <View
        style={[
          styles.input,
          styles.passwordContainer,
          {borderColor: passwordInput ? 'blue' : 'black'},
        ]}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={showPassword}
          onChangeText={(value) => setPasswordInput(value)}
        />
        <Icon
          style={styles.eye}
          name="eye"
          color={passwordInput ? '#5C6EF8' : '#A9A9A9'}
          size={25}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
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
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  passwordInput: {
    width: '90%',
    fontWeight: 'bold',
    fontSize: 15,
  },
  eye: {
    alignSelf: 'center',
    marginRight: 10,
  },
  textFeedback: {
    color: 'gray',
  },
});

export default UserInfo;
