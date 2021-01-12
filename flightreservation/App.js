
import React from 'react';
import {View,StyleSheet} from 'react-native';
import Login from './components/Login'

const App = ()=>
{
  return(
    <View style={styles.mainContainerApp}>
      <Login></Login>
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
