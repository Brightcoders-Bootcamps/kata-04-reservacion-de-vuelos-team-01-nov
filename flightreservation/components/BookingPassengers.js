import React,{useState} from 'react';
import{View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native';

const BookingPassengers = ({route,navigation})=>
{
    const{origin, destiny, date} = route.params;

    const[count, setCount] = useState(1);    

    return(
        <View style={styles.mainContainer}> 
            <TouchableOpacity onPress={()=>{navigation.navigate('BookingDate')}}>
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

            <View style={styles.datePassengers}>
                <Text>{date}</Text>
            </View>

            <View style={styles.inputLocationContainer}>
                <Text style={styles.questionText}>How Many Passengers?</Text> 
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={()=>{setCount(count-1);}}>
                        <Image
                        style={{width:30,height:30,marginTop:30, marginLeft:20}}
                        source={require('../images/back.png')}        
                        />                        
                    </TouchableOpacity>

                    <Text style={styles.textCounter}>{count}</Text>                                                            

                    <TouchableOpacity onPress={()=>{setCount(count+1);}}>
                        <Image
                        style={{width:30,height:30,marginTop:30, marginLeft:20}}
                        source={require('../images/back1.png')}        
                        />
                    </TouchableOpacity>                                        
                </View>                                                            
            </View>
            

            <View style={styles.buttonNextContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('BookingRequest',{origin:origin,destiny:destiny,date:date,passengers:count})}}>
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
        marginTop:20,                       

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
    counterContainer:
    {
        flexDirection:'row',
        justifyContent:'space-around',         
        marginTop:20       
    },
    textCounter:
    {        
        paddingTop:20,
        fontSize:40
    },
    inputLocationContainer:
    {
        flex:1,                
        paddingTop:40,
        paddingLeft:30,
        paddingRight:30,                        
    },
    datePassengers:
    {
        paddingLeft:30, 
        paddingTop:10       
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

export default BookingPassengers;