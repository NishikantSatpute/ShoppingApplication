import * as React from "react";
import { Text,Button, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome, Feather, Ionicons} from '@expo/vector-icons';
import Navbar from "./Navbar";
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
      < Navbar/>
      <View style={styles.product_style}>
      <View>
        <Text style={{color: "black", fontSize: 20, fontWeight:"bold"}}> Chana Dal: 1kg</Text>
        <Ionicons style={{padding:10}} name="fast-food" size={24} color="green" />
      </View>
        <ScrollView horizontal={true}>
            <Image style={{height:10, width: 20}} source = {require("../images/banner1.jpg")} />
        </ScrollView>
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
  }
});

export default Product;
