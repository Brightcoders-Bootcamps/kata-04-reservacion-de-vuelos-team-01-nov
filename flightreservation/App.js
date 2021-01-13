import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import BookingNavigation from './components/BookingNavigation'

const App = ()=>{
  return (
    <BookingNavigation></BookingNavigation>           
  );
};

const styles = StyleSheet.create({
  mainContainer:
  {
    flex:1
  }
});

export default App;
