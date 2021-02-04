import React,{useState} from 'react';
import{View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';


const BookingRequest = ({route,navigation})=>
{
    const{origin, destiny, date, passengers} = route.params;  

    const newData = {
        origin:origin,
        destiny:destiny,
        date:date,
        passengers:passengers
    }
    
    function saveData(newData)
    {
        firestore().collection('usersData').doc(auth().currentUser.uid).get()
        .then(documentSnapshot => {            
            if (documentSnapshot.exists) {
                var userData = documentSnapshot.data();
                newData.id = userData.vuelos.length.toString(); 
                userData.vuelos.push(newData);                
                
                firestore().collection('usersData').doc(auth().currentUser.uid)
                .set(userData);

                navigation.navigate('FlightsView');
            }
        });        
    }

    return(
        <View style={styles.mainContainer}> 
            <TouchableOpacity onPress={()=>{navigation.navigate('BookingPassengers')}}>
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

                <View style={styles.destinyContainer}>                    
                    <Text style={styles.headerText}>DESTINY</Text>
                    <Text style={styles.destinyText}>{destiny}</Text>                    
                </View>                                  

            </View>

            <View style={styles.datePassengers}>
                <Text>{date}</Text>
                <Text>{passengers} Passengers</Text>
            </View>

            <View style={styles.inputLocationContainer}>
                <Text style={styles.questionText}>Your request was received!!</Text>                                                                             
            </View>
            

            <View style={styles.buttonNextContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>{saveData(newData)}}>
                    <Text style={styles.buttonText}>Finish</Text>
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
        flexDirection:'row',
        justifyContent:'space-between',         
        paddingTop:10,
        paddingLeft:30,
        paddingRight:45
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

export default BookingRequest;