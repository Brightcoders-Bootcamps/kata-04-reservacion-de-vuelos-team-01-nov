import React from 'react';

import UserInfo from './UserInfo';
import AgreeItems from './AgreeItems';

import {View, Text, StyleSheet} from 'react-native';

const SignUp = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <View style={styles.containerSpacing}>
          <UserInfo />
        </View>
        <View style={styles.containerSpacing}>
          <AgreeItems />
        </View>
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.fullLinkText}>
          Already have an account? <Text style={styles.link}>Log In</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    color: '#5C6EF8',
    fontWeight: 'bold',
    marginTop: 20,
  },
  containerSpacing: {
    marginTop: 30,
  },
  linkContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  fullLinkText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#A9A9A9',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#5C6EF8',
  },
});
export default SignUp;
