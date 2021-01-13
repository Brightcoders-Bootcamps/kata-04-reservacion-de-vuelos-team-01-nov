import React from 'react';
import{View,StyleSheet,Text,TextInput,TouchableOpacity,} from 'react-native';

const BookingNow = ()=>
{
    return(
        <View style={styles.mainContainer}>

            <View style={styles.inputLocationContainer}>
                <Text style={styles.questionText}>Where are you now?</Text>
                <TextInput  placeholder="Type Location"></TextInput>   
            </View>
            

            <View style={styles.buttonNextContainer}>
                <TouchableOpacity style={styles.button}>
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
        height:50,
        borderRadius:10
    },
    buttonText:
    {
        textAlign:'center',
        marginTop:12,
        fontSize:20,
        color:'white' 
    }
})

export default BookingNow;