import React,{useState} from 'react';
import DatePicker from 'react-native-date-picker';
import{View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native';

const BookingWill = ({route,navigation})=>
{        
    const [date, setDate] = useState(new Date())
    const{origin, destiny} = route.params
    

    return(
        <View style={styles.mainContainer}> 
            <TouchableOpacity onPress={()=>{navigation.navigate('BookingWill')}}>
                <Image
                    style={{width:30,height:30,marginTop:30, marginLeft:20}}
                    source={require('../images/back.png')}        
                />
            </TouchableOpacity>           
        
            <View style={styles.detailsContainer}>
            
                <View>
                    <Text style={styles.headerText}>ORIGIN</Text>
                    <Text style={styles.originText}>{origin}</Text>
                </View>

                <View>
                    <Image style={{width:20, height:20,marginTop:15}}
                        source={require('../images/avion.png')}
                    />
                </View>

                <View>                    
                    <Text style={styles.headerText}>DESTINY</Text>
                    <Text style={styles.destinyText}>{destiny}</Text>                    
                </View>

            </View>

            <View style={styles.inputLocationContainer}>
                <Text style={styles.questionText}>Select Date</Text>                    
                <DatePicker 
                    style={styles.customizableCalendar}                   
                    androidVariant="nativeAndroid"
                    date={date}     
                    mode={"date"} 
                    onDateChange={setDate}              
                />               

            </View>
            

            <View style={styles.buttonNextContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('BookingPassengers',{origin:origin,destiny:destiny,date:date.toDateString()})}}>
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
        marginTop:20                
    },
    headerText:
    {
        fontSize:25,
        fontWeight:'bold',        
    },   
    originText:
    {
        color:'gray'
    },
    destinyText:
    {
        color:'gray'
    },
    inputLocationContainer:
    {
        flex:1,                
        paddingTop:80,
        paddingLeft:30,
        paddingRight:30,
                
    },
    customizableCalendar:
    {        
        marginTop:20,                          
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
        paddingTop:150,            
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