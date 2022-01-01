import * as React from "react";
import { Text, Button, View, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome, Feather, Ionicons} from '@expo/vector-icons';
import Navbar from "./Navbar";
import Banner from "./Banner";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Avatar } from "react-native-paper";
import { ScrollView } from "react-native-web";

// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// import {Navigation} from 'react-navigation';

const Product = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ marginTop: 0, height: "100%", width: "100%" }}>
      <Navbar />
      <ScrollView  style={styles.product_style}>
        <View>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}> Chana Dal: 1kg</Text>
          {/* <Ionicons style={{ padding: 10 }} name="fast-food" size={24} color="green" /> */}
          <Image source={require('../images/veglogo.png')} style={{ width: 200, height: 200 }}/>
        </View>
        <Banner />
        <View style={{flexDirection: "row", justifyContent:"space-between"}}>
          <Text style={{ color: "orange", fontSize: 20, fontWeight: "bold", padding: 10}}> 14.00 OFF</Text>
          <View style={{padding: 10}}>
            <Text style={{ color: "green", fontSize: 20, fontWeight: "bold" }}>DMart $85.00</Text>
            <Text style={{ color: "grey", fontSize: 18, fontWeight: "bold", textDecorationLine: "line-through"}}>MRP $ 99.00</Text>
          </View>
        </View>
        <Text style={{color:"grey",textAlign:"right"}}>(MRP inclusive of all taxes)</Text>
        <Text style={{color:"Black", fontSize: 18,fontWeight:"bold"}}>Variant</Text>
        <View style={{
          flexDirection: "row", padding: 10, borderBottomWidth: 1,
          borderStyle: "solid",
          borderColor: "grey",}}>
          <TouchableOpacity style={styles.btn}><Text>500 gm</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn}><Text>1 kg</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={{color: "green", fontSize: 18, fontWeight: "bold", padding: 10, borderBottomWidth: 2,borderStyle: "solid",borderColor: "green"}}>Country Of Origin</Text>
          <Text style={{padding:20, fontSize:15,}}>India</Text>
        </View>
      </ScrollView>
      <View style={{ alignItems: "center", backgroundColor:"#6164e9", padding:10, borderTopLeftRadius:7, borderTopRightRadius:7}}>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
          <Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "white" }} />  
          <Text style={{fontWeight:"bold",fontSize:20,color:"white"}}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: "#ecf0f1",
    // padding: 8,
  },
  product_style: {
    marginTop: 10,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  btn: {
    margin:10,
    borderWidth: 2,
    borderStyle: "solid", 
    borderColor: "green", 
    paddingVertical: 10, 
    width:"30%", 
    fontWeight:"bold",
    alignItems: "center"
  }
});

export default Product;
