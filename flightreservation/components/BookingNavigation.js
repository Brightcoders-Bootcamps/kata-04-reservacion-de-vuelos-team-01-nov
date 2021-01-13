import React from 'react';
import BookingNow from './BookingNow';
import BookingWill from './BookingWill'
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
        <Stack.Screen name="BookingWill" options={{headerShown: false}} component={BookingWill}/>              
      </Stack.Navigator>
    </NavigationContainer>              
  );
};
export default BookingNavigation;
