
import React from 'react';
import {View,Image,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

import auth from '@react-native-firebase/auth';

auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });



const Login = ({navigation})=>
{
  return(
    <View style={styles.mainContainer}>
        <View style={styles.imageConatiner}>
            <Image style={styles.image} source={require('../images/globo.png')}></Image>
        </View>

        <View style={styles.loginContainer}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput placeholder="domain@example.com" style={styles.input}></TextInput>

            <Text style={styles.labelText}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.labelText}></TextInput>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} >
                <Text style={styles.labelSignUp}>Don´t you have an account? Sign Up Here</Text>
            </TouchableOpacity>
        </View>


        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('FlightsView')}} >
                <Text style={styles.buttonText}>
                    Log In
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:
    {                
        flex:1,    
        paddingTop:30     
    },
    imageConatiner:
    {        
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:50,   
    },
    image:
    {
        width:100,
        height:100
    },
    loginContainer:
    { 
        flex:2,
        padding:30,         
    },
    input:
    {         
        borderBottomWidth:1            
    },
    labelText:
    {
        marginTop:5,
        fontSize:17,  
        color:'#21252b'      
    },
    labelSignUp:
    {
        color:'#5c6ef8',
        marginTop:5
    },
    buttonContainer:
    {        
        flex:2,
        flexDirection:'row',
        justifyContent:'center',        
    },
    button:
    {
        backgroundColor:'#5c6ef8',
        width:200,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:30        
    },
    buttonText:
    {
        marginTop:11,
        fontSize:20,
        color:'white'
    }
});

export default Login;
