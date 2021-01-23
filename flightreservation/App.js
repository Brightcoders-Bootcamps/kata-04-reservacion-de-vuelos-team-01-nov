import React from 'react';
import {View,StyleSheet} from 'react-native';
import FlightsView from "./components/FlightsView";
import Login from './components/Login'
import SignUp from './components/SignUp';
import BookingNavigation from './components/BookingNavigation'

const App = ()=>
{
  return(
    <View style={styles.mainContainerApp}>
      <Login></Login>
      <SignUp></SignUp>
      <FlightsView></FlightsView>
    <BookingNavigation></BookingNavigation> 
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerApp:
  {
    flex:1,      
  }
});

export default App;

