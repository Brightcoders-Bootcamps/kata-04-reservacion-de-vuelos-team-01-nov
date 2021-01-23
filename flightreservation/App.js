import React from 'react';
import {View,StyleSheet} from 'react-native';
//Nvigation Imports//
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Coomponents//
import Login from './Views/Login'
import SignUp from './Views/SignUp'
import FlightsView from './components/FlightsView'
import BookingNavigation from './components/BookingNavigation'

const Stack = createStackNavigator();

const App = ()=>
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LogIn" options={{headerShown: false}} component={Login}/>         
      <Stack.Screen  name="SignUp" options={{headerShown: false}} component={SignUp}/>  
      <Stack.Screen  name="FlightsView" options={{headerShown: false}} component={FlightsView}/>  
      <Stack.Screen indepent={true} name="BookingNavigation" options={{headerShown: false}} component={BookingNavigation}/>         
      </Stack.Navigator>    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainerApp:
  {
    flex:1,      
  }
});

export default App;

