import React from 'react';
import {View,StyleSheet} from 'react-native';
//Nvigation Imports//
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Coomponents//
import Login from './Views/Login'
import SignUp from './Views/SignUp'

const Stack = createStackNavigator();

const App = ()=>
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LogIn" options={{headerShown: false}} component={Login}/>         
      <Stack.Screen  name="SignUp" options={{headerShown: false}} component={SignUp}/>         
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

