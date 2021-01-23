
import React from 'react';
import {View,Image,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

const Login = ()=>
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

            <Text style={styles.labelSignUp}>Don´t you have an account? Sign Up Here
            </Text>
        </View>


        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
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
