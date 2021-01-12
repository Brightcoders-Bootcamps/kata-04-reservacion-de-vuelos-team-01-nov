import React from 'react';

import Checkbox from '@react-native-community/checkbox';
import {Text, View} from 'react-native';

const AgreeItems = () => {
  return (
    <View>
      <View>
        <Checkbox />
        <Text>
          I agree to the{' '}
          <Text style={{textDecorationLine: 'underline'}}>Terms</Text> and{' '}
          <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>
        </Text>
      </View>
      <View>
        <Checkbox />
        <Text>Subscribe for select product updates.</Text>
      </View>
    </View>
  );
};

export default AgreeItems;
