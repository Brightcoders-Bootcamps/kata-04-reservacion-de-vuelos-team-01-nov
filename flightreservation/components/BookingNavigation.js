import React from 'react';
import BookingNow from './BookingNow';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BookingNavigation = ()=>
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BookingNow" options={{headerShown: false}} component={BookingNow}/>              
      </Stack.Navigator>
    </NavigationContainer>              
  );
};
export default BookingNavigation;
