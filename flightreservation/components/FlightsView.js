import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const Item = ({ item }) => (
  <View style={styles.item} >
    <View style={styles.itemTop}>

      <View>
        <Text style={styles.titleItem}>ORIGIN</Text>
      </View>

      <Image style={styles.image} source={require('../images/avion.png')} />

      <View>
        <Text style={styles.titleItem}>DESTINY</Text>
      </View>

    </View>

    <View style={styles.itemCountry}>
      <Text style={styles.textCountry}>{item.origin}</Text>
      <Image />
      <Text style={styles.textCountry}>{item.destiny}</Text>
    </View>

    <View style={styles.itemDetails}>
      <Text>{item.date}</Text>
      <Image />
      <Text>{item.passengers} Passengers</Text>
    </View>
  </ View>
);

const FlightsView = ({ navigation }) => {


  const [userData, setuserData] = useState();

  firestore().collection('usersData').doc(auth().currentUser.uid).get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var DATA = documentSnapshot.data().vuelos;
        setuserData(DATA)
      }
    });

  const renderItem = ({ item }) => {
    return (
      <Item item={item} />
    );
  };


  function logOut() {
    auth()
      .signOut()
      .then(() => { navigation.navigate('LogIn') });
  }

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.containerTitle}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <Text style={styles.title}> My Flights </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('LogIn') }}>
            <Image style={{ width: 30, height: 30, marginTop: 9 }} source={require('../images/logout.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerFlights}>
          <FlatList
            data={userData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.containerButtom} onPress={() => { navigation.navigate('BookingNavigation') }}>
            <Image style={styles.plusbutton} source={require('../images/plus.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
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
    marginTop: 10
  },
  image:
  {
    width: 20,
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
    paddingTop: 10,
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