import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const SignUpButton = ({title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A9A9A9',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default SignUpButton;
