import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    origin: "Serbia",
    image: require('../images/avion.png'),
    destiny: "Netherlands",
    date:"September 3, 2021",
    passengers:5
  },
  {
    id: "2",
    origin: "Serbia",
    image: require('../images/avion.png'),
    destiny: "Netherlands",
    date:"September 3, 2021",
    passengers:5
  },
  {
    id: "3",
    origin: "Serbia",
    image: require('../images/avion.png'),
    destiny: "Netherlands",
    date:"September 3, 2021",
    passengers:5
  },
  {
  id: "4",
  origin: "Serbia",
  image: require('../images/avion.png'),
  destiny: "Netherlands",
  date:"September 3, 2021",
  passengers:5
},
{
  id: "5",
  origin: "Serbia",
  image: require('../images/avion.png'),
  destiny: "Netherlands",
  date:"September 3, 2021",
  passengers:5
},
{
  id: "6",
  origin: "Serbia",
  image: require('../images/avion.png'),
  destiny: "Netherlands",
  date:"September 3, 2021",
  passengers:5
},
{
  id: "7",
  origin: "Serbia",
  image: require('../images/avion.png'),
  destiny: "Netherlands",
  date:"September 3, 2021",
  passengers:5
},
{
  id: "8",
  origin: "Serbia",
  image: require('../images/avion.png'),
  destiny: "Netherlands",
  date:"September 3, 2021",
  passengers:5
},
{
  id: "9",
  origin: "Serbia",
  image: require('../images/avion.png'),
  destiny: "Netherlands",
  date:"September 3, 2021",
  passengers:5
},
{
  id: "10",
  origin: "Serbia",
  image: require('../images/avion.png'),
  destiny: "Netherlands",
  date:"September 3, 2021",
  passengers:5
},

];

const Item = ({ item, onPress, style }) => (
  <View style={styles.item}>
      <View style ={styles.itemTop}>

        <View>
          <Text style={styles.titleItem}>ORIGIN</Text>    
        </View>
      
        <Image style = {styles.image} source={require('../images/avion.png')}/> 
        
        <View>
          <Text style={styles.titleItem}>DESTINY</Text>
        </View>

      </View>

      <View style ={styles.itemCountry}>
        <Text style={styles.textCountry}>{item.origin}</Text>  
        <Image/>   
        <Text style={styles.textCountry}>{item.destiny}</Text>
      </View>  

      <View style ={styles.itemDetails}>
        <Text>{item.date}</Text>  
        <Image/>   
        <Text>{item.passengers} Passengers</Text>
      </View>       
  </View>
 );

const FlightsView = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
   

    return (
        <Item item={item} onPress={() => setSelectedId(item.id)}/>
    );
  };

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.containerTitle}>
        <Text style = {styles.title}>
          My Flights
        </Text>

        <View style = {styles.containerFlights}>   
          <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />                   
      <TouchableOpacity style={styles.containerButtom} onPress={()=>{navigation.navigate('BookingNavigation')}}>
        <Image style={styles.plusbutton} source={require('../images/plus.png')}/>
      </TouchableOpacity>
        </View>    
      </View>

       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,  
  },
  containerTitle:
  {
    flex: 1,    
    padding: 10,
  },
  title: 
  {
    fontSize: 32,
    color: '#5974F5',
    fontWeight: 'bold'
  },
  containerFlights:
  {
      flex: 1,
      padding: 5,    
      marginTop:10
  },
  image:
  {
    width:20,
    height: 20,
    marginTop: 6
  },
  item: 
  {
    marginTop: 15,
  },
  itemTop:
  {
    flexDirection: 'row',
    justifyContent: "space-between",    
    marginTop: 5,
    padding: 5
  },
  itemCountry:
  {
    flexDirection: 'row',
    justifyContent: "space-between",
    borderBottomColor: '#A8A8A8',
    borderBottomWidth: 1,
    padding: 5,   
  },
  textCountry:
  {
    color: '#A8A8A8'
  },
  itemDetails:
  {
    flexDirection: 'row',
    justifyContent: "space-between",
    borderBottomWidth: 1,
    padding: 5,
    paddingTop:10,
    paddingBottom: 12 
  },
  titleItem:
  {
    fontWeight: "bold",
    fontSize: 18,
  },
  containerButtom:
  {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5
  },
  plusbutton:
  {
    width: 60,
    height: 60,
  }
  
});

export default FlightsView;

