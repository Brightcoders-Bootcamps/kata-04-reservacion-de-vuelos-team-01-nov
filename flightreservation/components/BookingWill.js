import React,{useState} from 'react';
import{View,StyleSheet,Text,TextInput,TouchableOpacity,Image} from 'react-native';


const BookingWill = ({route,navigation})=>
{
    const[textLocationWill, setTextLocationWill] = useState('');

    const{origin} = route.params

    return(
        <View style={styles.mainContainer}>

            <View style={styles.detailsContainer}>

                <View style={styles.originContainer}>
                    <Text style={styles.headerText}>ORIGIN</Text>
                    <Text>{origin}</Text>
                </View>

                <View>
                    <Image style={{width:20, height:20,marginTop:15}}
                        source={require('../images/airplane.png')}
                    />
                </View>

                <View style={styles.destinyContainer}>                    
                    <Text style={styles.headerText}>DESTINY</Text>
                    <Text></Text>                    
                </View>

            </View>

            <View style={styles.inputLocationContainer}>
                <Text style={styles.questionText}>Where will you be flying to?</Text>
                <TextInput value={textLocationWill} onChangeText={(text)=>{setTextLocationWill(text)}} placeholder="Type Location"></TextInput>   
            </View>
            

            <View style={styles.buttonNextContainer}>
                <TouchableOpacity  disabled={textLocationWill === '' ? true:false } style={textLocationWill === '' ? styles.buttonDisabled:styles.button} onPress={()=>{}}>
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
    detailsContainer:
    {
        flexDirection:'row',
        justifyContent:'space-around',                        
        marginTop:70                
    },
    headerText:
    {
        fontSize:25,
        fontWeight:'bold',        
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

export default BookingWill;