import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const SignUpButton = ({title, agree, image}) => {
  if (image) {
    return (
      <View style={styles.shadow}>
        <TouchableOpacity
          style={agree ? styles.buttonEnabled : styles.buttonDisabled}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={require('../src/images/google.png')}
              style={{
                width: 22,
                height: 22,
                alignSelf: 'center',
                marginLeft: -20,
              }}
            />
            <Text style={[styles.title, {width: '80%'}]}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.shadow}>
      <TouchableOpacity
        style={agree ? styles.buttonEnabled : styles.buttonDisabled}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonDisabled: {
    backgroundColor: '#A9A9A9',
    padding: 10,
    borderRadius: 10,
  },
  buttonEnabled: {
    backgroundColor: '#5C6EF8',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#5C6EF8',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 9,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default SignUpButton;
