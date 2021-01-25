import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

const SignUp = ({ navigation }) => {
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [passwordInput, setPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const allValid = (firstNameInput && emailInput && passwordInput && toggleCheckBox1) ? true : false

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <View style={styles.containerSpacing}>
          <View>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={[styles.input, { borderColor: firstNameInput ? 'blue' : 'black' }]}
              onChangeText={(value) => setFirstNameInput(value)}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.label}>Email</Text>
              <Text> *</Text>
            </View>
            <TextInput
              style={[styles.input, { borderColor: emailInput ? 'blue' : 'black' }]}
              keyboardType="email-address"
              onChangeText={(value) => setEmailInput(value)}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.label}>Password</Text>
              <Text> *</Text>
            </View>
            <View
              style={[
                styles.input,
                styles.passwordContainer,
                { borderColor: passwordInput ? 'blue' : 'black' },
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
        </View>
        <View style={styles.containerSpacing}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              disabled={false}
              value={toggleCheckBox1}
              onValueChange={(newValue) => setToggleCheckBox1(newValue)}
              onCheckColor="#5C6EF8"
              tintColors={{ true: '#5C6EF8' }}
            />
            <Text style={styles.labelCheck}>
              I agree to the <Text style={styles.link}>Terms</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>{' '}
              <Text style={styles.required}> *</Text>
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={(newValue) => setToggleCheckBox2(newValue)}
              tintColors={{ true: '#5C6EF8' }}
            />
            <Text style={styles.labelCheck}>Subscribe for select product updates.</Text>
          </View>
          <View style={styles.containerSpacing}>
            <View style={styles.shadow}>
              <TouchableOpacity
                style={allValid ? styles.buttonEnabled : styles.buttonDisabled}
                disabled={!allValid}
              >
                <Text style={styles.title}>Sign in with email</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.buttonDivider}>or</Text>
            <View>
              <View style={styles.shadow}>
                <TouchableOpacity
                  style={styles.buttonEnabled}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                      source={require('../src/images/google.png')}
                      style={{
                        width: 22,
                        height: 22,
                        alignSelf: 'center',
                        marginLeft: -20,
                      }}
                    />
                    <Text style={[styles.title, { width: '80%' }]}>Sign in with Google</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.fullLinkText}>
          Already have an account?
          <TouchableOpacity onPress={() => { navigation.navigate('LogIn') }}>
            <Text style={styles.link}>Log In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  //main styles
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
  //form styles
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
  //checkbox
  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: -6,
    marginBottom: 5,
  },
  labelCheck: {
    marginTop: 5,
    fontSize: 15,
    color: '#A9A9A9',
  },
  required: {
    color: 'red',
  },
  buttonDivider: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#A9A9A9',
  },
  //buttons
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
export default SignUp;
