import React, {useState} from 'react';

import SignUpButton from './SignUpButton';

import Checkbox from '@react-native-community/checkbox';
import {Text, View, StyleSheet} from 'react-native';

const AgreeItems = () => {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);

  return (
    <View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          disabled={false}
          value={toggleCheckBox1}
          onValueChange={(newValue) => setToggleCheckBox1(newValue)}
          onCheckColor="#5C6EF8"
          tintColors={{true: '#5C6EF8'}}
        />
        <Text style={styles.label}>
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
          tintColors={{true: '#5C6EF8'}}
        />
        <Text style={styles.label}>Subscribe for select product updates.</Text>
      </View>
      <View style={styles.containerSpacing}>
        <SignUpButton title="Sign Up" agree={toggleCheckBox1} />
        <Text style={styles.buttonDivider}>or</Text>
        <View>
          <SignUpButton
            title="Sign Up with Google"
            agree={toggleCheckBox1}
            image={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: -6,
    marginBottom: 5,
  },
  label: {
    marginTop: 5,
    fontSize: 15,
    color: '#A9A9A9',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#A9A9A9',
  },
  required: {
    color: 'red',
  },
  containerSpacing: {
    marginTop: 30,
  },
  /*
    se omitio por problemas de resolucion
    buttonDivider: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#A9A9A9',
  },*/
});

export default AgreeItems;
