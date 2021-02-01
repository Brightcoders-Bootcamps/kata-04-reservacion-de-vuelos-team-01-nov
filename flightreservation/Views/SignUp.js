import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';

const SignUp = ({ navigation }) => {
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [passwordInput, setPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const allValid = (firstNameInput && emailInput && passwordInput && toggleCheckBox1) ? true : false
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

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
              <Text style={{ color: errorEmail != '' ? 'red' : 'black' }}> *<Text>{errorEmail}</Text></Text>
            </View>
            <TextInput
              style={[styles.input, { borderColor: emailInput ? 'blue' : 'black' }]}
              keyboardType="email-address"
              onChangeText={(value) => setEmailInput(value)}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.label}>Password</Text>
              <Text style={{ color: errorPassword != '' ? 'red' : 'black' }}> *<Text>{errorPassword}</Text></Text>
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
                onPress={() => {
                  auth()
                    .createUserWithEmailAndPassword(emailInput, passwordInput)
                    .then(() => {
                      console.log('User account created & signed in!');
                      console.log("ID usuario Logueado", auth().currentUser.uid)

                      firestore().collection('usersData').doc(auth().currentUser.uid)
                      .set({
                            vuelos:[]                          
                      })
                    })
                    .catch(error => {
                      if (error.code === 'auth/email-already-in-use') {
                        setErrorEmail('That email address is already in use!');
                      }
                      if (error.code === 'auth/invalid-email') {
                        setErrorEmail('The email address is badly formatted!');
                      }
                      if (error.code === 'auth/weak-password') {
                        setErrorPassword('Password should be at least 6 characters');
                      }
                      console.error(error);
                    });
                }}
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
        </Text>
        <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { navigation.navigate('LogIn') }}>
          <Text style={[styles.link]}>Log In</Text>
        </TouchableOpacity>
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
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  fullLinkText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#A9A9A9',
    alignSelf: 'center',
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
