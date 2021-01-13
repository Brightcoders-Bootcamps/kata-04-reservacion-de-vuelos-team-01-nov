import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UserInfo = () => {
  return (
    <View>
      <Text style={styles.label}>First Name</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Email *</Text>
      <TextInput style={styles.input} keyboardType="email-address" />
      <Text style={styles.label}>Password *</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
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
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
  },
  textFeedback: {
    color: '#A9A9A9',
  },
});

export default UserInfo;
