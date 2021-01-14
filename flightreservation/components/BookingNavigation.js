import React from 'react';
import BookingNow from './BookingNow';
import BookingWill from './BookingWill'
import BookingDate from './BookingDate'
import BookingPassengers from './BookingPassengers'
import BookingRequest from './BookingRequest'
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
        <Stack.Screen name="BookingDate" options={{headerShown: false}} component={BookingDate}/>  
        <Stack.Screen name="BookingPassengers" options={{headerShown: false}} component={BookingPassengers}/>
        <Stack.Screen name="BookingRequest" options={{headerShown: false}} component={BookingRequest}/>             
      </Stack.Navigator>
    </NavigationContainer>              
  );
};
export default BookingNavigation;
