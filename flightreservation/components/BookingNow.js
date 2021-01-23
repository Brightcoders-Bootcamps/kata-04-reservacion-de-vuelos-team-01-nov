import React,{useState} from 'react';
import{View,StyleSheet,Text,TextInput,TouchableOpacity, Image} from 'react-native';

const BookingNow = ({navigation})=>
{
    const[textLocationNow, setTextLocationNow] = useState('');

    return(
        <View style={styles.mainContainer}>

            <TouchableOpacity onPress={()=>{navigation.navigate('FlightsView')}}>
                <Image
                    style={{width:20,height:20,marginTop:30, marginLeft:20}}
                    source={require('../images/back.png')}        
                />
            </TouchableOpacity> 

            <View style={styles.inputLocationContainer}>
                <Text style={styles.questionText}>Where are you now?</Text>
                <TextInput onChangeText={(text)=>{setTextLocationNow(text)}} placeholder="Type Location"></TextInput>   
            </View>
            <View style={styles.buttonNextContainer}>
                <TouchableOpacity  disabled={textLocationNow === '' ? true:false } style={textLocationNow === '' ? styles.buttonDisabled:styles.button} onPress={()=>{navigation.navigate('BookingWill',{origin:textLocationNow})}}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity> 
            </View>    

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:
    {        
        flex:1,    
        justifyContent:'center',        
    },
    inputLocationContainer:
    {
        flex:1,                
        paddingTop:150,
        paddingLeft:30,
        paddingRight:30,        
    },
    questionText:
    {
        fontWeight:'bold',
        fontSize:50
    },
    buttonNextContainer:
    {
        flex:1, 
        flexDirection:'row',      
        justifyContent:'center', 
        paddingTop:40,            
    },
    button:
    {
        backgroundColor:'#5974f5',
        width:200,
        height:40,
        borderRadius:10
    },
    buttonDisabled:
    {
        backgroundColor:'gray',
        width:200,
        height:40,
        borderRadius:10
    },
    buttonText:
    {
        textAlign:'center',
        marginTop:8,
        fontSize:20,
        color:'white' 
    }
})

export default BookingNow;